#!/usr/bin/env python3
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "matplotlib>=3.8",
#   "numpy>=1.26",
#   "pillow>=10.0",
#   "requests>=2.31",
#   "cairosvg>=2.7",
#   "adjusttext>=1.0",
# ]
# ///
"""Scira research benchmark visualizations - Anthropic-style report aesthetic."""

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.gridspec as gridspec
from matplotlib.patches import FancyBboxPatch, Rectangle
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
from matplotlib.colors import LinearSegmentedColormap
import numpy as np
import io
import os
import requests
from pathlib import Path

from matplotlib import font_manager as fm

# ─── Palette (refined editorial / Anthropic research-paper style) ──────────────
# Warm neutral background, deep ink text, restrained accent palette.
BG          = "#FAF7F2"   # warm cream (page)
SURFACE     = "#FFFFFF"   # card / chart panel
RULE        = "#E6E1D7"   # subtle rule
RULE_SOFT   = "#EDE8DD"   # softer rule for grids
INK         = "#1F1B16"   # primary text (deep warm ink)
INK_SOFT    = "#5A544A"   # secondary text
INK_MUTE    = "#8C8478"   # tertiary / annotations

# Brand colors used judiciously
SCIRA       = "#1F1B16"   # scira lockup uses ink so the logo reads cleanly

# Wordmark: Be Vietnam Pro Light (https://fonts.google.com/specimen/Be+Vietnam+Pro)
WORDMARK_TEXT = "scira"
WORDMARK_SIZE_PT = 24
_WORDMARK_WIDTH_IN: float | None = None
PARALLEL    = "#1A1A1A"   # parallel.ai uses near-black; brand strip uses this
EXA         = "#1F40ED"   # exa brand blue

# Provider series colors (sophisticated, not neon)
PROVIDER_COLORS = {
    "parallel": "#C9633D",   # warm terracotta (anthropic-esque)
    "exa":      "#2B5FC9",   # deep editorial blue
}
PROVIDER_FILL_ALPHA = 0.92

# Sequential heatmap colormap (low → high): warm pale cream → deep editorial blue.
# Good print contrast and reads well against the cream page.
HEATMAP_CMAP = LinearSegmentedColormap.from_list(
    "scira_heat",
    ["#F4E2D2", "#EAB792", "#D88566", "#9F4E54", "#5A3F73", "#1F2C66"],
    N=256,
)

# ─── Model + case metadata ─────────────────────────────────────────────────────
MODEL_LABELS = {
    "xai/grok-4-1-fast-non-reasoning":                    "Grok 4.1 Fast (NR)",
    "xai/grok-4-1-fast":                                  "Grok 4.1 Fast (R)",
    "xai/grok-4.20-0309-non-reasoning":                   "Grok 4.20 (NR)",
    "xai/grok-4.20-0309-reasoning":                       "Grok 4.20 (R)",
    "cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6":     "Kimi K2.6",
    "cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b": "Nemotron 120B",
    "cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it":   "Gemma 4 26B",
}
MODEL_FAMILY = {
    "xai/grok-4-1-fast-non-reasoning":                    "xAI",
    "xai/grok-4-1-fast":                                  "xAI",
    "xai/grok-4.20-0309-non-reasoning":                   "xAI",
    "xai/grok-4.20-0309-reasoning":                       "xAI",
    "cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6":     "Moonshot AI",
    "cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b": "NVIDIA",
    "cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it":   "Google",
}

CASE_GROUPS = {
    "SimpleQA":   ["simpleqa-design", "simpleqa-quality-check", "simpleqa-grading-labels",
                   "simpleqa-edge-grade", "simpleqa-vs-browsecomp"],
    "BrowseComp": ["browsecomp-size", "browsecomp-human-difficulty", "browsecomp-unsolved-math",
                   "browsecomp-challenge-checks", "browsecomp-best-caveat",
                   "browsecomp-browsing-delta", "browsecomp-model-baselines"],
    "GAIA":       ["gaia-counts", "gaia-capability-gap", "gaia-philosophy-contrast"],
    "Flue":       ["flue-start-commands", "flue-cloudflare-negative",
                   "flue-model-selection", "flue-layout-rules"],
}

CASE_DISPLAY = {
    "simpleqa-design":             "Design",
    "simpleqa-quality-check":      "Quality Check",
    "simpleqa-grading-labels":     "Grading Labels",
    "simpleqa-edge-grade":         "Edge Grade",
    "simpleqa-vs-browsecomp":      "vs BrowseComp",
    "browsecomp-size":             "Size",
    "browsecomp-human-difficulty": "Human Difficulty",
    "browsecomp-unsolved-math":    "Unsolved Math",
    "browsecomp-challenge-checks": "Challenge Checks",
    "browsecomp-best-caveat":      "Best Caveat",
    "browsecomp-browsing-delta":   "Browsing Delta",
    "browsecomp-model-baselines":  "Model Baselines",
    "gaia-counts":                 "Counts",
    "gaia-capability-gap":         "Capability Gap",
    "gaia-philosophy-contrast":    "Philosophy Contrast",
    "flue-start-commands":         "Start Commands",
    "flue-cloudflare-negative":    "Cloudflare Negative",
    "flue-model-selection":        "Model Selection",
    "flue-layout-rules":           "Layout Rules",
}

# ─── Raw scores (case, provider, model) → score ────────────────────────────────
RAW = {
    ("simpleqa-design","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-design","parallel","xai/grok-4-1-fast"):100,
    ("simpleqa-design","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-design","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-design","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-design","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-design","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("simpleqa-design","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-design","exa","xai/grok-4-1-fast"):100,
    ("simpleqa-design","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-design","exa","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-design","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-design","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-design","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("simpleqa-quality-check","parallel","xai/grok-4-1-fast-non-reasoning"):92,
    ("simpleqa-quality-check","parallel","xai/grok-4-1-fast"):100,
    ("simpleqa-quality-check","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-quality-check","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-quality-check","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-quality-check","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-quality-check","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("simpleqa-quality-check","exa","xai/grok-4-1-fast-non-reasoning"):92,
    ("simpleqa-quality-check","exa","xai/grok-4-1-fast"):38,
    ("simpleqa-quality-check","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-quality-check","exa","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-quality-check","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-quality-check","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-quality-check","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):92,

    ("simpleqa-grading-labels","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-grading-labels","parallel","xai/grok-4-1-fast"):100,
    ("simpleqa-grading-labels","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-grading-labels","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-grading-labels","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-grading-labels","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-grading-labels","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("simpleqa-grading-labels","exa","xai/grok-4-1-fast-non-reasoning"):85,
    ("simpleqa-grading-labels","exa","xai/grok-4-1-fast"):85,
    ("simpleqa-grading-labels","exa","xai/grok-4.20-0309-non-reasoning"):85,
    ("simpleqa-grading-labels","exa","xai/grok-4.20-0309-reasoning"):85,
    ("simpleqa-grading-labels","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):85,
    ("simpleqa-grading-labels","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("simpleqa-grading-labels","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):85,

    ("simpleqa-edge-grade","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-edge-grade","parallel","xai/grok-4-1-fast"):100,
    ("simpleqa-edge-grade","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-edge-grade","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-edge-grade","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-edge-grade","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-edge-grade","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("simpleqa-edge-grade","exa","xai/grok-4-1-fast-non-reasoning"):79,
    ("simpleqa-edge-grade","exa","xai/grok-4-1-fast"):100,
    ("simpleqa-edge-grade","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-edge-grade","exa","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-edge-grade","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-edge-grade","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("simpleqa-edge-grade","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):92,

    ("browsecomp-size","parallel","xai/grok-4-1-fast-non-reasoning"):92,
    ("browsecomp-size","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-size","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-size","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-size","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-size","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("browsecomp-size","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("browsecomp-size","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-size","exa","xai/grok-4-1-fast"):100,
    ("browsecomp-size","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-size","exa","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-size","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-size","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("browsecomp-size","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("simpleqa-vs-browsecomp","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-vs-browsecomp","parallel","xai/grok-4-1-fast"):85,
    ("simpleqa-vs-browsecomp","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-vs-browsecomp","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-vs-browsecomp","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-vs-browsecomp","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("simpleqa-vs-browsecomp","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):85,
    ("simpleqa-vs-browsecomp","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("simpleqa-vs-browsecomp","exa","xai/grok-4-1-fast"):100,
    ("simpleqa-vs-browsecomp","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("simpleqa-vs-browsecomp","exa","xai/grok-4.20-0309-reasoning"):100,
    ("simpleqa-vs-browsecomp","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("simpleqa-vs-browsecomp","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("simpleqa-vs-browsecomp","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):85,

    ("browsecomp-human-difficulty","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-human-difficulty","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-human-difficulty","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-human-difficulty","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-human-difficulty","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):79,
    ("browsecomp-human-difficulty","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("browsecomp-human-difficulty","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("browsecomp-human-difficulty","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-human-difficulty","exa","xai/grok-4-1-fast"):100,
    ("browsecomp-human-difficulty","exa","xai/grok-4.20-0309-non-reasoning"):79,
    ("browsecomp-human-difficulty","exa","xai/grok-4.20-0309-reasoning"):71,
    ("browsecomp-human-difficulty","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-human-difficulty","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):71,
    ("browsecomp-human-difficulty","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):79,

    ("browsecomp-unsolved-math","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-unsolved-math","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-unsolved-math","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-unsolved-math","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-unsolved-math","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-unsolved-math","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("browsecomp-unsolved-math","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("browsecomp-unsolved-math","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-unsolved-math","exa","xai/grok-4-1-fast"):85,
    ("browsecomp-unsolved-math","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-unsolved-math","exa","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-unsolved-math","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-unsolved-math","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("browsecomp-unsolved-math","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("browsecomp-challenge-checks","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-challenge-checks","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-challenge-checks","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-challenge-checks","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-challenge-checks","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):85,
    ("browsecomp-challenge-checks","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):54,
    ("browsecomp-challenge-checks","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):62,
    ("browsecomp-challenge-checks","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-challenge-checks","exa","xai/grok-4-1-fast"):100,
    ("browsecomp-challenge-checks","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-challenge-checks","exa","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-challenge-checks","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):54,
    ("browsecomp-challenge-checks","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):30,
    ("browsecomp-challenge-checks","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):38,

    ("browsecomp-best-caveat","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-best-caveat","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-best-caveat","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-best-caveat","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-best-caveat","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):92,
    ("browsecomp-best-caveat","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):79,
    ("browsecomp-best-caveat","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("browsecomp-best-caveat","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-best-caveat","exa","xai/grok-4-1-fast"):100,
    ("browsecomp-best-caveat","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-best-caveat","exa","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-best-caveat","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):92,
    ("browsecomp-best-caveat","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):79,
    ("browsecomp-best-caveat","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("browsecomp-browsing-delta","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-browsing-delta","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-browsing-delta","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-browsing-delta","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-browsing-delta","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-browsing-delta","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("browsecomp-browsing-delta","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):92,
    ("browsecomp-browsing-delta","exa","xai/grok-4-1-fast-non-reasoning"):69,
    ("browsecomp-browsing-delta","exa","xai/grok-4-1-fast"):54,
    ("browsecomp-browsing-delta","exa","xai/grok-4.20-0309-non-reasoning"):77,
    ("browsecomp-browsing-delta","exa","xai/grok-4.20-0309-reasoning"):77,
    ("browsecomp-browsing-delta","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):69,
    ("browsecomp-browsing-delta","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):46,
    ("browsecomp-browsing-delta","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):54,

    ("browsecomp-model-baselines","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("browsecomp-model-baselines","parallel","xai/grok-4-1-fast"):100,
    ("browsecomp-model-baselines","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("browsecomp-model-baselines","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("browsecomp-model-baselines","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("browsecomp-model-baselines","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("browsecomp-model-baselines","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):85,
    ("browsecomp-model-baselines","exa","xai/grok-4-1-fast-non-reasoning"):85,
    ("browsecomp-model-baselines","exa","xai/grok-4-1-fast"):69,
    ("browsecomp-model-baselines","exa","xai/grok-4.20-0309-non-reasoning"):92,
    ("browsecomp-model-baselines","exa","xai/grok-4.20-0309-reasoning"):77,
    ("browsecomp-model-baselines","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):85,
    ("browsecomp-model-baselines","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):54,
    ("browsecomp-model-baselines","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):54,

    ("gaia-counts","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-counts","parallel","xai/grok-4-1-fast"):100,
    ("gaia-counts","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("gaia-counts","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("gaia-counts","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("gaia-counts","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("gaia-counts","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("gaia-counts","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-counts","exa","xai/grok-4-1-fast"):100,
    ("gaia-counts","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("gaia-counts","exa","xai/grok-4.20-0309-reasoning"):100,
    ("gaia-counts","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("gaia-counts","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("gaia-counts","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("gaia-capability-gap","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-capability-gap","parallel","xai/grok-4-1-fast"):100,
    ("gaia-capability-gap","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("gaia-capability-gap","parallel","xai/grok-4.20-0309-reasoning"):92,
    ("gaia-capability-gap","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):92,
    ("gaia-capability-gap","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("gaia-capability-gap","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,
    ("gaia-capability-gap","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-capability-gap","exa","xai/grok-4-1-fast"):100,
    ("gaia-capability-gap","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("gaia-capability-gap","exa","xai/grok-4.20-0309-reasoning"):100,
    ("gaia-capability-gap","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("gaia-capability-gap","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("gaia-capability-gap","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("gaia-philosophy-contrast","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-philosophy-contrast","parallel","xai/grok-4-1-fast"):85,
    ("gaia-philosophy-contrast","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("gaia-philosophy-contrast","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("gaia-philosophy-contrast","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("gaia-philosophy-contrast","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):77,
    ("gaia-philosophy-contrast","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):69,
    ("gaia-philosophy-contrast","exa","xai/grok-4-1-fast-non-reasoning"):100,
    ("gaia-philosophy-contrast","exa","xai/grok-4-1-fast"):100,
    ("gaia-philosophy-contrast","exa","xai/grok-4.20-0309-non-reasoning"):85,
    ("gaia-philosophy-contrast","exa","xai/grok-4.20-0309-reasoning"):85,
    ("gaia-philosophy-contrast","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("gaia-philosophy-contrast","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("gaia-philosophy-contrast","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):100,

    ("flue-start-commands","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("flue-start-commands","parallel","xai/grok-4-1-fast"):71,
    ("flue-start-commands","parallel","xai/grok-4.20-0309-non-reasoning"):79,
    ("flue-start-commands","parallel","xai/grok-4.20-0309-reasoning"):79,
    ("flue-start-commands","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):79,
    ("flue-start-commands","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):71,
    ("flue-start-commands","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):33,
    ("flue-start-commands","exa","xai/grok-4-1-fast-non-reasoning"):29,
    ("flue-start-commands","exa","xai/grok-4-1-fast"):70,
    ("flue-start-commands","exa","xai/grok-4.20-0309-non-reasoning"):79,
    ("flue-start-commands","exa","xai/grok-4.20-0309-reasoning"):79,
    ("flue-start-commands","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):70,
    ("flue-start-commands","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):62,
    ("flue-start-commands","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):25,

    ("flue-cloudflare-negative","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("flue-cloudflare-negative","parallel","xai/grok-4-1-fast"):100,
    ("flue-cloudflare-negative","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("flue-cloudflare-negative","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("flue-cloudflare-negative","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("flue-cloudflare-negative","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("flue-cloudflare-negative","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):95,
    ("flue-cloudflare-negative","exa","xai/grok-4-1-fast-non-reasoning"):70,
    ("flue-cloudflare-negative","exa","xai/grok-4-1-fast"):54,
    ("flue-cloudflare-negative","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("flue-cloudflare-negative","exa","xai/grok-4.20-0309-reasoning"):49,
    ("flue-cloudflare-negative","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):70,
    ("flue-cloudflare-negative","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):87,
    ("flue-cloudflare-negative","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):33,

    ("flue-model-selection","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("flue-model-selection","parallel","xai/grok-4-1-fast"):100,
    ("flue-model-selection","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("flue-model-selection","parallel","xai/grok-4.20-0309-reasoning"):100,
    ("flue-model-selection","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("flue-model-selection","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("flue-model-selection","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):74,
    ("flue-model-selection","exa","xai/grok-4-1-fast-non-reasoning"):74,
    ("flue-model-selection","exa","xai/grok-4-1-fast"):74,
    ("flue-model-selection","exa","xai/grok-4.20-0309-non-reasoning"):100,
    ("flue-model-selection","exa","xai/grok-4.20-0309-reasoning"):100,
    ("flue-model-selection","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):70,
    ("flue-model-selection","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):62,
    ("flue-model-selection","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):29,

    ("flue-layout-rules","parallel","xai/grok-4-1-fast-non-reasoning"):100,
    ("flue-layout-rules","parallel","xai/grok-4-1-fast"):100,
    ("flue-layout-rules","parallel","xai/grok-4.20-0309-non-reasoning"):100,
    ("flue-layout-rules","parallel","xai/grok-4.20-0309-reasoning"):92,
    ("flue-layout-rules","parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):100,
    ("flue-layout-rules","parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):92,
    ("flue-layout-rules","parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):95,
    ("flue-layout-rules","exa","xai/grok-4-1-fast-non-reasoning"):64,
    ("flue-layout-rules","exa","xai/grok-4-1-fast"):39,
    ("flue-layout-rules","exa","xai/grok-4.20-0309-non-reasoning"):75,
    ("flue-layout-rules","exa","xai/grok-4.20-0309-reasoning"):95,
    ("flue-layout-rules","exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):70,
    ("flue-layout-rules","exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):62,
    ("flue-layout-rules","exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):70,
}

PROVIDERS = ["parallel", "exa"]
MODELS = list(MODEL_LABELS.keys())
ALL_CASES = [c for grp in CASE_GROUPS.values() for c in grp]

SUMMARY = {
    ("parallel","xai/grok-4-1-fast-non-reasoning"):      {"avg":98.7,"passes":16,"dur":17.2},
    ("parallel","xai/grok-4-1-fast"):                    {"avg":96.9,"passes":16,"dur":24.6},
    ("parallel","xai/grok-4.20-0309-non-reasoning"):     {"avg":98.9,"passes":18,"dur":15.4},
    ("parallel","xai/grok-4.20-0309-reasoning"):         {"avg":98.1,"passes":16,"dur":28.8},
    ("parallel","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):  {"avg":96.9,"passes":15,"dur":24.8},
    ("parallel","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"):{"avg":88.6,"passes":1,"dur":17.9},
    ("parallel","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"): {"avg":90.6,"passes":12,"dur":37.3},
    ("exa","xai/grok-4-1-fast-non-reasoning"):           {"avg":88.0,"passes":11,"dur":43.9},
    ("exa","xai/grok-4-1-fast"):                         {"avg":84.6,"passes":11,"dur":34.0},
    ("exa","xai/grok-4.20-0309-non-reasoning"):          {"avg":91.6,"passes":13,"dur":17.7},
    ("exa","xai/grok-4.20-0309-reasoning"):              {"avg":92.4,"passes":12,"dur":32.3},
    ("exa","cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6"):        {"avg":91.8,"passes":13,"dur":66.5},
    ("exa","cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b"): {"avg":75.6,"passes":0, "dur":64.3},
    ("exa","cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it"):   {"avg":74.8,"passes":6, "dur":45.4},
}


# ─── Logo loading ──────────────────────────────────────────────────────────────
def svg_to_rgba(svg_bytes: bytes, size: int = 256) -> np.ndarray:
    import cairosvg
    from PIL import Image
    png = cairosvg.svg2png(bytestring=svg_bytes,
                           output_width=size, output_height=size)
    return np.array(Image.open(io.BytesIO(png)).convert("RGBA"))


def fetch_url(url: str) -> bytes:
    r = requests.get(url, timeout=10,
                     headers={"User-Agent": "Mozilla/5.0"})
    r.raise_for_status()
    return r.content


def make_scira_svg(stroke: str = "#1F1B16") -> bytes:
    """Re-render the scira logo with chosen stroke color."""
    return f'''<svg viewBox="0 0 910 934" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z" stroke="{stroke}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z" fill="{stroke}" stroke="{stroke}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z" stroke="{stroke}" stroke-width="20" stroke-linejoin="round"/>
  <path d="M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z" stroke="{stroke}" stroke-width="20" stroke-linejoin="round"/>
  <path d="M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z" stroke="{stroke}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z" fill="{stroke}" stroke="{stroke}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M760.632 764.337C720.719 814.616 669.835 855.1 611.872 882.692C553.91 910.285 490.404 924.255 426.213 923.533C362.022 922.812 298.846 907.419 241.518 878.531C184.19 849.643 134.228 808.026 95.4548 756.863C56.6815 705.7 30.1238 646.346 17.8129 583.343C5.50206 520.339 7.76432 455.354 24.4266 393.359C41.0889 331.364 71.7099 274.001 113.947 225.658C156.184 177.315 208.919 139.273 268.117 114.442" stroke="{stroke}" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'''.encode()


def make_parallel_fallback_svg() -> bytes:
    return b'''<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="6"  y="6" width="9" height="52" fill="#1A1A1A"/>
  <rect x="20" y="6" width="9" height="52" fill="#1A1A1A"/>
  <rect x="34" y="6" width="9" height="52" fill="#1A1A1A"/>
  <rect x="48" y="6" width="9" height="52" fill="#1A1A1A"/>
</svg>'''


def load_logos(size: int = 256) -> dict:
    logos = {}
    try:
        logos["scira"] = svg_to_rgba(make_scira_svg(SCIRA), size)
    except Exception as e:
        print(f"  scira logo failed: {e}")

    try:
        logos["parallel"] = svg_to_rgba(fetch_url("https://parallel.ai/icon.svg"), size)
    except Exception as e:
        print(f"  parallel logo fallback ({e})")
        try:
            logos["parallel"] = svg_to_rgba(make_parallel_fallback_svg(), size)
        except Exception:
            pass

    try:
        with open(os.path.join(os.path.dirname(__file__), "exa.svg"), "rb") as f:
            logos["exa"] = svg_to_rgba(f.read(), size)
    except Exception as e:
        print(f"  exa logo failed: {e}")

    return logos


def _ensure_be_vietnam_light_ttf() -> Path:
    """Download Be Vietnam Pro Light if missing; return path to the TTF."""
    fonts_dir = Path(__file__).resolve().parent / "fonts"
    fonts_dir.mkdir(parents=True, exist_ok=True)
    ttf = fonts_dir / "BeVietnamPro-Light.ttf"
    if not ttf.exists():
        url = (
            "https://raw.githubusercontent.com/google/fonts/main/"
            "ofl/bevietnampro/BeVietnamPro-Light.ttf"
        )
        r = requests.get(url, timeout=60)
        r.raise_for_status()
        ttf.write_bytes(r.content)
    return ttf


def register_wordmark_font() -> None:
    """Register Be Vietnam Pro with matplotlib (safe to call once)."""
    path = _ensure_be_vietnam_light_ttf()
    try:
        fm.fontManager.addfont(str(path))
    except (ValueError, OSError):
        pass


def wordmark_fontproperties() -> fm.FontProperties:
    path = _ensure_be_vietnam_light_ttf()
    return fm.FontProperties(fname=str(path), size=WORDMARK_SIZE_PT)


def measure_wordmark_width_inches() -> float:
    """Width of WORDMARK_TEXT at WORDMARK_SIZE_PT in Be Vietnam Pro Light."""
    global _WORDMARK_WIDTH_IN
    if _WORDMARK_WIDTH_IN is not None:
        return _WORDMARK_WIDTH_IN
    fp = wordmark_fontproperties()
    fig = plt.figure(figsize=(2, 1), dpi=150)
    t = fig.text(0.5, 0.5, WORDMARK_TEXT, fontproperties=fp)
    fig.canvas.draw()
    r = fig.canvas.get_renderer()
    w_px = t.get_window_extent(renderer=r).width
    _WORDMARK_WIDTH_IN = float(w_px / fig.dpi)
    plt.close(fig)
    return _WORDMARK_WIDTH_IN


def add_logo(fig_or_ax, img_arr, xy, zoom=0.04, xycoords="figure fraction",
             zorder=20, alignment=(0.5, 0.5)):
    """Place a logo image. zoom is relative to source size at 100 dpi.
    For 512px source images: zoom=0.04 ~= 20px logo, 0.06 ~= 30px, 0.10 ~= 50px."""
    from PIL import Image
    img = Image.fromarray(img_arr).convert("RGBA")
    im = OffsetImage(np.array(img), zoom=zoom, resample=True)
    ab = AnnotationBbox(im, xy, xycoords=xycoords, frameon=False,
                        zorder=zorder, box_alignment=alignment, pad=0)
    if hasattr(fig_or_ax, "add_artist"):
        fig_or_ax.add_artist(ab)
    else:
        fig_or_ax.artists.append(ab)


def draw_legend_strip(fig, x_start, y, providers, logos=None,
                       label="PROVIDERS"):
    """Clean horizontal legend: [LABEL] then [chip][gap][name] for each provider.
    Logos are NOT placed inline — they go in dedicated header / panel areas.
    Returns the rightmost x reached."""
    if label:
        fig.text(x_start, y + 0.024, spaced(label),
                 ha="left", va="center", color=INK_MUTE, fontsize=8.5,
                 fontweight="600")
    cx = x_start
    chip_w  = 0.014
    chip_h  = 0.016
    text_pad = 0.010
    item_gap = 0.04
    for prov in providers:
        color = PROVIDER_COLORS[prov]
        fig.add_artist(Rectangle((cx, y - 0.003), chip_w, chip_h,
                                  transform=fig.transFigure, color=color,
                                  linewidth=0, clip_on=False, zorder=5))
        text_x = cx + chip_w + text_pad
        fig.text(text_x, y + 0.005, prov.capitalize(),
                 ha="left", va="center", color=INK,
                 fontsize=11.5, fontweight="bold")
        cx = text_x + 0.06 + item_gap
    return cx


# ─── Page chrome ───────────────────────────────────────────────────────────────
def setup_rcparams():
    plt.rcParams.update({
        "font.family":       "sans-serif",
        "font.sans-serif":   ["Be Vietnam Pro", "Inter", "SF Pro Text",
                               "Helvetica Neue", "Helvetica", "Arial",
                               "DejaVu Sans"],
        "figure.facecolor":  BG,
        "axes.facecolor":    SURFACE,
        "savefig.facecolor": BG,
        "savefig.dpi":       200,
        "axes.edgecolor":    RULE,
        "axes.linewidth":    0.8,
        "text.color":        INK,
        "axes.labelcolor":   INK_SOFT,
        "xtick.color":       INK_SOFT,
        "ytick.color":       INK_SOFT,
        "xtick.labelsize":   9.5,
        "ytick.labelsize":   9.5,
    })


def style_ax(ax, xlabel=None, ylabel=None, grid_axis="y"):
    ax.set_facecolor(SURFACE)
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)
    for side in ("left", "bottom"):
        ax.spines[side].set_color(RULE)
        ax.spines[side].set_linewidth(0.8)
    if xlabel:
        ax.set_xlabel(xlabel, color=INK_SOFT, fontsize=10, labelpad=8)
    if ylabel:
        ax.set_ylabel(ylabel, color=INK_SOFT, fontsize=10, labelpad=8)
    if grid_axis:
        ax.grid(axis=grid_axis, color=RULE_SOFT, linewidth=0.7,
                alpha=1.0, linestyle="-")
        ax.set_axisbelow(True)
    ax.tick_params(length=0, pad=4)


def spaced(text: str, sep: str = " ") -> str:
    """Approximate letter-spacing by inserting a separator between characters."""
    return sep.join(list(text))


def draw_header(fig, logos, title, subtitle, eyebrow="SCIRA RESEARCH BENCHMARK"):
    """Clean editorial header: eyebrow label, title, subtitle, scira lockup on the right."""
    # Eyebrow label (small spaced caps)
    fig.text(0.06, 0.96, spaced(eyebrow),
             ha="left", va="center",
             color=INK_SOFT, fontsize=9.5, fontweight="600")
    # Title
    fig.text(0.06, 0.92, title, ha="left", va="center",
             color=INK, fontsize=22, fontweight="bold")
    # Subtitle
    fig.text(0.06, 0.886, subtitle, ha="left", va="center",
             color=INK_SOFT, fontsize=11.5)

    # Right: [logo] wordmark — Be Vietnam Pro Light, vertically centered together.
    fig_w_in, _fig_h_in = fig.get_size_inches()
    wordmark_x = 0.94
    lockup_y = 0.935
    wm_fp = wordmark_fontproperties()

    fig.text(wordmark_x, lockup_y, WORDMARK_TEXT,
             ha="right", va="center",
             color=INK, fontproperties=wm_fp)

    if "scira" in logos:
        wordmark_w_in = measure_wordmark_width_inches()
        gap_in = 0.055
        logo_anchor_x = wordmark_x - (wordmark_w_in + gap_in) / fig_w_in
        add_logo(fig, logos["scira"], (logo_anchor_x, lockup_y),
                 zoom=0.048, alignment=(1.0, 0.5))

    fig.text(wordmark_x, 0.902, spaced("RESEARCH BENCHMARK"),
             ha="right", va="center",
             color=INK_MUTE, fontsize=8.5, fontweight="600")

    # Horizontal rule under header
    fig.add_artist(plt.Line2D([0.06, 0.94], [0.865, 0.865],
                              color=RULE, linewidth=0.8,
                              transform=fig.transFigure, zorder=1))


def draw_footer(fig):
    # Subtle rule above the footer for separation from chart content
    fig.add_artist(plt.Line2D([0.06, 0.94], [0.05, 0.05],
                              color=RULE, linewidth=0.6,
                              transform=fig.transFigure, zorder=1))
    fig.text(0.06, 0.025,
             "research-smoke  ·  19 cases  ·  7 models  ·  2 search providers  ·  May 2026",
             ha="left", va="center", color=INK_MUTE, fontsize=8.5)
    fig.text(0.94, 0.025, spaced("SCIRA RESEARCH"),
             ha="right", va="center", color=INK_MUTE, fontsize=8.5,
             fontweight="600")


def provider_pill(ax, provider, x=0.0, y=1.04, logos=None, name_size=14):
    """Provider section header: small logo + bold name + brand accent rule.

    Layout:  [logo]  Name
             ████  ────────  (color rule below)
    """
    color = PROVIDER_COLORS[provider]
    name  = provider.capitalize()

    # Logo on the left (small, well-spaced from text)
    text_x = x
    if logos and provider in logos:
        im = OffsetImage(logos[provider], zoom=0.035, resample=True)
        ab = AnnotationBbox(im, (x, y), xycoords="axes fraction",
                            frameon=False, box_alignment=(0.0, 0.5),
                            pad=0, zorder=10)
        ax.add_artist(ab)
        text_x = x + 0.075

    # Bold provider name
    ax.text(text_x, y, name, transform=ax.transAxes,
            color=INK, fontsize=name_size, fontweight="bold",
            ha="left", va="center")

    # Brand color accent rule under the label (anchored to the logo)
    ax.add_patch(Rectangle((x, y - 0.06), 0.10, 0.009,
                            transform=ax.transAxes, clip_on=False,
                            color=color, linewidth=0, zorder=10))


# ─── Chart 1: Overall summary bar chart ────────────────────────────────────────
def chart_overall_bar(logos, out_dir):
    fig = plt.figure(figsize=(15, 8.5), facecolor=BG)
    draw_header(fig, logos,
                title="Average Score by Model & Provider",
                subtitle="Mean of 19 source-backed QA cases per (provider, model). Higher is better.")

    ax = fig.add_axes([0.075, 0.14, 0.86, 0.67])
    style_ax(ax, ylabel="Average Score (0–100)", grid_axis="y")

    labels = [MODEL_LABELS[m] for m in MODELS]
    x = np.arange(len(MODELS))
    w = 0.36

    for i, provider in enumerate(PROVIDERS):
        scores = [SUMMARY[(provider, m)]["avg"] for m in MODELS]
        offset = (i - 0.5) * w
        color = PROVIDER_COLORS[provider]
        bars = ax.bar(x + offset, scores, w, color=color,
                      alpha=PROVIDER_FILL_ALPHA, zorder=3,
                      linewidth=0, label=provider.capitalize())
        for bar, s in zip(bars, scores):
            ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 0.6,
                    f"{s:.1f}", ha="center", va="bottom",
                    color=INK, fontsize=9, fontweight="600")

    ax.set_xticks(x)
    ax.set_xticklabels(labels, color=INK, fontsize=10)
    ax.set_ylim(60, 105)
    ax.set_yticks([60, 70, 80, 90, 100])

    # Faint family annotations beneath xticks
    for i, m in enumerate(MODELS):
        ax.text(i, 56.5, spaced(MODEL_FAMILY[m].upper()),
                ha="center", va="top",
                color=INK_MUTE, fontsize=8.5,
                clip_on=False)

    draw_legend_strip(fig, x_start=0.075, y=0.83,
                      providers=PROVIDERS, logos=logos)

    draw_footer(fig)
    path = os.path.join(out_dir, "01_overall_bar.png")
    plt.savefig(path, bbox_inches=None, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Chart 2: Heatmap (cases × models, side-by-side providers) ─────────────────
def chart_heatmap(logos, out_dir):
    fig = plt.figure(figsize=(20, 13), facecolor=BG)
    draw_header(fig, logos,
                title="Score Heatmap: Cases × Models",
                subtitle="Per-case score for every model, split by search provider. Cells colored by score.")

    gs = gridspec.GridSpec(1, 3, figure=fig,
                            left=0.24, right=0.96,
                            top=0.80, bottom=0.09,
                            wspace=0.04,
                            width_ratios=[1, 1, 0.025])

    col_labels = [MODEL_LABELS[m] for m in MODELS]
    row_labels = [CASE_DISPLAY[c] for c in ALL_CASES]

    for ax_idx, provider in enumerate(PROVIDERS):
        ax = fig.add_subplot(gs[0, ax_idx])
        data = np.array([
            [RAW.get((c, provider, m), np.nan) for m in MODELS]
            for c in ALL_CASES
        ], dtype=float)

        im = ax.imshow(data, cmap=HEATMAP_CMAP, vmin=20, vmax=100,
                        aspect="auto", interpolation="nearest")

        # Cell text — choose dark/light based on cell luminance
        for r in range(len(ALL_CASES)):
            for c in range(len(MODELS)):
                v = data[r, c]
                if np.isnan(v):
                    continue
                # Light text on dark cells (high scores in this palette = darker)
                txt = "white" if v >= 78 else INK
                ax.text(c, r, f"{int(v)}", ha="center", va="center",
                        color=txt, fontsize=9, fontweight="600")

        ax.set_xticks(range(len(MODELS)))
        ax.set_xticklabels(col_labels, color=INK, fontsize=9.5,
                           rotation=30, ha="right")
        ax.set_yticks(range(len(ALL_CASES)))
        if ax_idx == 0:
            ax.set_yticklabels(row_labels, color=INK, fontsize=9.5)
        else:
            ax.set_yticklabels([])
        ax.tick_params(length=0, pad=4)
        for spine in ax.spines.values():
            spine.set_visible(False)

        # White separators between groups
        idx = 0
        for grp, cases in CASE_GROUPS.items():
            idx += len(cases)
            if idx < len(ALL_CASES):
                ax.axhline(idx - 0.5, color=BG, linewidth=3)

        # Group labels in the left margin (only on first panel)
        if ax_idx == 0:
            start = 0
            for grp, cases in CASE_GROUPS.items():
                mid = start + len(cases) / 2 - 0.5
                ax.annotate(spaced(grp.upper()),
                            xy=(0, mid), xycoords=("axes fraction", "data"),
                            xytext=(-225, 0), textcoords="offset points",
                            ha="left", va="center",
                            color=PROVIDER_COLORS["parallel"],
                            fontsize=10.5, fontweight="bold")
                start += len(cases)

        # Provider header above this panel (logo + name + accent rule)
        provider_pill(ax, provider, x=0.0, y=1.06, logos=logos, name_size=14)

    # Vertical colorbar on the right
    cax = fig.add_subplot(gs[0, 2])
    cb = fig.colorbar(im, cax=cax)
    cb.outline.set_edgecolor(RULE)
    cb.outline.set_linewidth(0.6)
    cb.ax.tick_params(colors=INK_SOFT, labelsize=9, length=0)
    cb.set_label("Score", color=INK_SOFT, fontsize=10, labelpad=8)

    draw_footer(fig)
    path = os.path.join(out_dir, "02_heatmap.png")
    plt.savefig(path, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Chart 3: Radar / spider per provider ──────────────────────────────────────
def chart_radar(logos, out_dir):
    fig = plt.figure(figsize=(15, 9), facecolor=BG)
    draw_header(fig, logos,
                title="Category Performance by Provider",
                subtitle="Mean score across all models within each benchmark category.")

    group_names = list(CASE_GROUPS.keys())
    N = len(group_names)
    angles = np.linspace(0, 2 * np.pi, N, endpoint=False).tolist()
    angles += angles[:1]

    for idx, provider in enumerate(PROVIDERS):
        ax = fig.add_axes([0.07 + idx * 0.46, 0.10, 0.38, 0.55],
                           projection="polar")
        ax.set_facecolor(SURFACE)

        vals = []
        for grp, cases in CASE_GROUPS.items():
            scores = [RAW[(c, provider, m)]
                      for c in cases for m in MODELS
                      if (c, provider, m) in RAW]
            vals.append(np.mean(scores) if scores else 0)
        vals += vals[:1]

        color = PROVIDER_COLORS[provider]
        ax.plot(angles, vals, color=color, linewidth=2.4)
        ax.fill(angles, vals, color=color, alpha=0.18)

        ax.set_xticks(angles[:-1])
        ax.set_xticklabels(group_names, color=INK, fontsize=11.5,
                           fontweight="600")
        ax.tick_params(axis="x", pad=24)
        ax.set_ylim(40, 100)
        ax.set_yticks([60, 70, 80, 90, 100])
        ax.set_yticklabels(["60", "70", "80", "90", "100"],
                           color=INK_MUTE, fontsize=8)
        ax.grid(color=RULE_SOFT, linewidth=0.8)
        ax.spines["polar"].set_color(RULE)
        ax.set_rlabel_position(135)

        # Score dots and value labels (placed inside the polygon, not outside)
        for angle, v in zip(angles[:-1], vals[:-1]):
            ax.plot(angle, v, "o", color=color, markersize=8,
                    markeredgecolor=SURFACE, markeredgewidth=2, zorder=5)
            # Value label tucked inward toward the center
            ax.text(angle, v - 8, f"{v:.0f}", ha="center", va="center",
                    color=color, fontsize=10.5, fontweight="bold",
                    zorder=6,
                    bbox=dict(boxstyle="round,pad=0.25",
                              facecolor=SURFACE, edgecolor="none",
                              alpha=0.85))

        # Provider label centered above the radar (with breathing room)
        cx = 0.07 + idx * 0.46 + 0.19
        if provider in logos:
            add_logo(fig, logos[provider], (cx - 0.06, 0.755),
                     zoom=0.04, alignment=(0.0, 0.5))
        fig.text(cx - 0.018, 0.755, provider.capitalize(),
                 ha="left", va="center", color=INK,
                 fontsize=16, fontweight="bold")
        # color underline
        fig.add_artist(Rectangle((cx - 0.06, 0.728), 0.12, 0.008,
                                  transform=fig.transFigure,
                                  color=color, linewidth=0, clip_on=False))

    draw_footer(fig)
    path = os.path.join(out_dir, "03_radar.png")
    plt.savefig(path, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Chart 4: Sub-case bars per category ───────────────────────────────────────
def chart_subcase_bars(logos, out_dir):
    fig = plt.figure(figsize=(20, 14), facecolor=BG)
    draw_header(fig, logos,
                title="Sub-case Scores by Category",
                subtitle="Average score per sub-case, per provider — averaged across all 7 models.")

    gs = gridspec.GridSpec(2, 2, figure=fig,
                            left=0.075, right=0.96,
                            top=0.80, bottom=0.07,
                            hspace=0.55, wspace=0.18)

    for i, (grp_name, cases) in enumerate(CASE_GROUPS.items()):
        ax = fig.add_subplot(gs[i // 2, i % 2])
        n = len(cases)
        x = np.arange(n)
        w = 0.36

        case_labels = [CASE_DISPLAY[c] for c in cases]
        for j, provider in enumerate(PROVIDERS):
            scores = []
            for c in cases:
                vs = [RAW[(c, provider, m)] for m in MODELS
                      if (c, provider, m) in RAW]
                scores.append(np.mean(vs) if vs else 0)
            offset = (j - 0.5) * w
            color = PROVIDER_COLORS[provider]
            bars = ax.bar(x + offset, scores, w, color=color,
                          alpha=PROVIDER_FILL_ALPHA, zorder=3,
                          linewidth=0)
            for bar, s in zip(bars, scores):
                ax.text(bar.get_x() + bar.get_width() / 2,
                        bar.get_height() + 0.8,
                        f"{s:.0f}", ha="center", va="bottom",
                        color=INK, fontsize=8.5, fontweight="600")

        ax.set_xticks(x)
        ax.set_xticklabels(case_labels, rotation=20, ha="right",
                           color=INK, fontsize=10)
        ax.set_ylim(20, 110)
        ax.set_yticks([20, 40, 60, 80, 100])
        style_ax(ax, ylabel="Avg score", grid_axis="y")

        # Category title above
        ax.text(0, 1.10, spaced(grp_name.upper()), transform=ax.transAxes,
                color=INK, fontsize=13, fontweight="bold",
                ha="left", va="bottom")
        ax.text(0, 1.04, f"{len(cases)} sub-cases", transform=ax.transAxes,
                color=INK_MUTE, fontsize=9.5, ha="left", va="bottom")
        # color rule
        ax.plot([0, 0.07], [1.02, 1.02], transform=ax.transAxes,
                color=PROVIDER_COLORS["parallel"], linewidth=2.5,
                solid_capstyle="butt", clip_on=False)

    draw_legend_strip(fig, x_start=0.65, y=0.83,
                      providers=PROVIDERS, logos=logos)

    draw_footer(fig)
    path = os.path.join(out_dir, "04_subcase_bars.png")
    plt.savefig(path, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Chart 5: Speed vs accuracy ────────────────────────────────────────────────
def chart_speed_accuracy(logos, out_dir):
    fig = plt.figure(figsize=(15, 9), facecolor=BG)
    draw_header(fig, logos,
                title="Speed vs Accuracy",
                subtitle="Each marker is one (provider, model) configuration. Better is up & left.")

    ax = fig.add_axes([0.075, 0.10, 0.86, 0.70])
    style_ax(ax, xlabel="Average duration per case (seconds)",
             ylabel="Average score", grid_axis="both")

    # Quadrant guides
    ax.axhspan(90, 105, color=PROVIDER_COLORS["parallel"], alpha=0.04, zorder=1)
    ax.axvline(30, color=RULE, linewidth=0.6, linestyle="--", zorder=1)

    from adjustText import adjust_text

    texts = []
    for provider in PROVIDERS:
        color = PROVIDER_COLORS[provider]
        for model in MODELS:
            d = SUMMARY[(provider, model)]
            ax.scatter(d["dur"], d["avg"], s=180, color=color,
                       alpha=0.92, edgecolors=SURFACE, linewidth=1.6,
                       zorder=5)
            label = MODEL_LABELS[model]
            t = ax.text(d["dur"], d["avg"], label,
                        color=INK, fontsize=9, fontweight="500",
                        zorder=6,
                        bbox=dict(boxstyle="round,pad=0.18",
                                  facecolor=SURFACE, edgecolor="none",
                                  alpha=0.85))
            texts.append(t)

    ax.set_xlim(0, 75)
    ax.set_ylim(70, 102)

    # Auto-arrange labels to avoid overlaps; draw thin leader lines
    adjust_text(
        texts,
        ax=ax,
        expand=(1.4, 1.6),
        force_text=(0.5, 0.8),
        force_static=(0.4, 0.6),
        arrowprops=dict(arrowstyle="-", color=INK_MUTE,
                        lw=0.7, alpha=0.6,
                        shrinkA=2, shrinkB=4),
        only_move={"text": "xy", "static": "xy", "explode": "xy"},
    )

    # Annotation labels for quadrant zones
    ax.text(2, 101, spaced("FAST · ACCURATE"),
            color=INK_MUTE, fontsize=8.5,
            fontweight="600", va="top")
    ax.text(73, 71, spaced("SLOW · LESS ACCURATE"),
            color=INK_MUTE, fontsize=8.5,
            fontweight="600", ha="right", va="bottom")

    draw_legend_strip(fig, x_start=0.075, y=0.83,
                      providers=PROVIDERS, logos=logos)

    draw_footer(fig)
    path = os.path.join(out_dir, "05_speed_accuracy.png")
    plt.savefig(path, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Chart 6: Model rankings (horizontal bars per provider) ────────────────────
def chart_model_ranking(logos, out_dir):
    fig = plt.figure(figsize=(17, 8.5), facecolor=BG)
    draw_header(fig, logos,
                title="Model Rankings by Provider",
                subtitle="Models ranked by mean score across all 19 cases.")

    gs = gridspec.GridSpec(1, 2, figure=fig,
                            left=0.10, right=0.96,
                            top=0.76, bottom=0.10,
                            wspace=0.40)

    for ax_idx, provider in enumerate(PROVIDERS):
        ax = fig.add_subplot(gs[0, ax_idx])
        items = sorted(
            [(SUMMARY[(provider, m)]["avg"],
              SUMMARY[(provider, m)]["passes"],
              SUMMARY[(provider, m)]["dur"],
              MODEL_LABELS[m], MODEL_FAMILY[m])
             for m in MODELS],
            reverse=True,
        )
        scores  = [x[0] for x in items]
        passes  = [x[1] for x in items]
        durs    = [x[2] for x in items]
        labels  = [x[3] for x in items]
        familys = [x[4] for x in items]

        color   = PROVIDER_COLORS[provider]
        y       = np.arange(len(items))

        # Background "track" for context (0–100 ghost bar)
        ax.barh(y, [100] * len(items), height=0.55,
                color=RULE_SOFT, zorder=2)
        bars = ax.barh(y, scores, height=0.55, color=color,
                       alpha=PROVIDER_FILL_ALPHA, zorder=3)

        for bar, s, p, d in zip(bars, scores, passes, durs):
            # Score number — placed past the 100 ghost track
            ax.text(103, bar.get_y() + bar.get_height() / 2,
                    f"{s:.1f}", va="center", color=INK,
                    fontsize=11, fontweight="bold")
            # Pass/duration meta on the far right
            ax.text(118, bar.get_y() + bar.get_height() / 2,
                    f"{p} pass  ·  {d:.1f}s",
                    va="center", color=INK_MUTE,
                    fontsize=9, ha="left")

        ax.set_yticks(y)
        ax.set_yticklabels(labels, color=INK, fontsize=10.5)
        ax.set_xlim(0, 145)
        ax.set_xticks([0, 25, 50, 75, 100])
        ax.invert_yaxis()
        style_ax(ax, xlabel="Average score", grid_axis="x")

        # Provider header above the panel (logo on the right)
        provider_pill(ax, provider, x=0.0, y=1.12, logos=logos, name_size=15)

    draw_footer(fig)
    path = os.path.join(out_dir, "06_model_ranking.png")
    plt.savefig(path, facecolor=BG)
    plt.close()
    print(f"  saved {path}")


# ─── Main ──────────────────────────────────────────────────────────────────────
def main():
    out_dir = os.path.join(os.path.dirname(__file__), "benchmark_charts")
    os.makedirs(out_dir, exist_ok=True)
    setup_rcparams()
    register_wordmark_font()
    measure_wordmark_width_inches()

    print("loading logos...")
    logos = load_logos(512)
    print(f"  loaded: {list(logos.keys())}")

    print("\nrendering charts...")
    chart_overall_bar(logos, out_dir)
    chart_heatmap(logos, out_dir)
    chart_radar(logos, out_dir)
    chart_subcase_bars(logos, out_dir)
    chart_speed_accuracy(logos, out_dir)
    chart_model_ranking(logos, out_dir)
    print(f"\nall charts → {out_dir}/")


if __name__ == "__main__":
    main()
