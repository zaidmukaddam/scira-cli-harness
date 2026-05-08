# Benchmark Results: research-smoke

Small source-backed QA suite for comparing search provider and model combinations in the Flue research harness.

Started: 2026-05-07T19:31:52.044Z
Completed: 2026-05-07T20:09:26.188Z
Concurrency: 4

## Summary

| Provider | Model | Cases | Avg score | Passes | Errors | Avg duration |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| parallel | `xai/grok-4-1-fast-non-reasoning` | 19 | 98.7 | 16 | 0 | 17.2s |
| parallel | `xai/grok-4-1-fast` | 19 | 96.9 | 16 | 0 | 24.6s |
| parallel | `xai/grok-4.20-0309-non-reasoning` | 19 | 98.9 | 18 | 0 | 15.4s |
| parallel | `xai/grok-4.20-0309-reasoning` | 19 | 98.1 | 16 | 0 | 28.8s |
| parallel | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 96.9 | 15 | 0 | 24.8s |
| parallel | `cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b` | 19 | 88.6 | 1 | 0 | 17.9s |
| parallel | `cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it` | 19 | 90.6 | 12 | 0 | 37.3s |
| exa | `xai/grok-4-1-fast-non-reasoning` | 19 | 88.0 | 11 | 0 | 43.9s |
| exa | `xai/grok-4-1-fast` | 19 | 84.6 | 11 | 0 | 34.0s |
| exa | `xai/grok-4.20-0309-non-reasoning` | 19 | 91.6 | 13 | 0 | 17.7s |
| exa | `xai/grok-4.20-0309-reasoning` | 19 | 92.4 | 12 | 0 | 32.3s |
| exa | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 91.8 | 13 | 0 | 66.5s |
| exa | `cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b` | 19 | 75.6 | 0 | 0 | 64.3s |
| exa | `cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it` | 19 | 74.8 | 6 | 0 | 45.4s |

## Case Runs

### simpleqa-design / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 7.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** [OpenAI blog post announcing SimpleQA](https://openai.com/index/introducing-simpleqa/) [SimpleQA arXiv paper](https://arxiv.org/html/2411.04368v1) **The questions are easy to grade because they have a single, indisputable answer, allowing predictions to be autograded as correct, incorrect, or not attempted.** [OpenAI blog post announcing SimpleQA](https://openai.com/index/introducing-simpleqa/) [SimpleQA arXiv abstract](https://arxiv.org/abs/2411.04368)

### simpleqa-design / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 15.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains exactly 4,326 questions.** [OpenAI blog post](https://openai.com/index/introducing-simpleqa/) [arXiv paper](https://arxiv.org/html/2411.04368v1) **The questions are easy to grade because they are designed such that there is only a single, indisputable correct answer, allowing grading as correct, incorrect, or not attempted.** [OpenAI blog post](https://openai.com/index/introducing-simpleqa/) [arXiv paper](https://arxiv.org/abs/2411.04368)

### simpleqa-design / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 33.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** ([OpenAI blog](https://openai.com/index/introducing-simpleqa/), [arXiv paper](https://arxiv.org/abs/2411.04368)) **The answer property that makes questions easy to grade is that each has a single, indisputable answer** (questions were written such that there exists only a single, indisputable answer; reference answers are easily gradable; graded as correct / incorrect / not attempted). ([OpenAI blog](https://openai.com/index/introducing-simpleqa/), [arXiv:2411.04368](https://arxiv.org/abs/2411.04368)) SimpleQA is available at [https://github.com/openai/simple-evals](https://github.com/openai/simple-evals).

### simpleqa-design / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 38.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains exactly 4,326 questions.** **Questions are easy to grade because they were written to have only a single, indisputable answer.** - Official OpenAI announcement: “with 4,326 questions” and “questions were written in such a way that the predicted answers are easy to grade” ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)). - Paper abstract: “responses are easy to grade, because questions are created such that there exists only a single, indisputable answer” and “contains 4,326 short, fact-seeking questions” ([arXiv:2411.04368](https://arxiv.org/abs/2411.04368)).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 29.5s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326 questions** ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)). They are easy to grade because each question is designed to have a **single, indisputable answer** ([Measuring short-form factuality in large language models](https://arxiv.org/abs/2411.04368)).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 23.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326 questions**【https://openai.com/index/introducing-simpleqa/】. Each question is written to have a **single, indisputable answer**, which makes the answers easy to grade【https://openai.com/index/introducing-simpleqa/】.

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 13.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> SimpleQA contains 4,326 questions ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)). The questions are easy to grade because they are designed such that there exists only a single, indisputable answer ([Measuring short-form factuality in large language models](https://arxiv.org/abs/2411.04368)).

### simpleqa-design / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 275.8s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions**, as confirmed by direct analysis of the official dataset CSV (`simple_qa_test_set.csv`, 4,333 lines including header, loaded via pandas in the eval code) hosted at the OpenAI repo's data source and mirrored on Hugging Face datasets reporting exactly that row count.[https://openaipublic.blob.core.windows.net/simple-evals/simple_qa_test_set.csv](https://openaipublic.blob.core.windows.net/simple-evals/simple_qa_test_set.csv) [https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [https://huggingface.co/datasets/lighteval/SimpleQA](https://huggingface.co/datasets/lighteval/SimpleQA) **The property making questions easy to grade is that each has only a single, indisputable answer**, enabling binary grading (correct/incorrect/not attempted) via semantic matching against gold t...

### simpleqa-design / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 29.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** - This is confirmed across dataset mirrors and evaluations, with splits like 4,321 test questions and 5 few-shot examples [Hugging Face SimpleQA](https://huggingface.co/datasets/lighteval/SimpleQA), [EvalScope SimpleQA](https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html). - Questions are easy to grade because they are designed with **only a single, indisputable answer**, enabling binary grading as correct, incorrect, or not attempted [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf). **Note:** The official OpenAI paper and blog excerpts do not explicitly state the total in provided snippets; the figure derives from reliable dataset implementations and consistent reports.

### simpleqa-design / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 14.1s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** The property that makes the questions easy to grade is that they are created such that there exists only a **single, indisputable answer** (responses graded as correct, incorrect, or not attempted). - [OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf): "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer." It also states the benchmark has 4,326 questions. - [OpenAI blog post](https://openai.com/index/introducing-simpleqa): Confirms the design prioritizes "questions...written in such a way that the predicted answers are easy to grade" with reference answers supported by independent trainers. This matches the official material across the paper, blog, and dataset references.

### simpleqa-design / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 27.3s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** **Questions are easy to grade because they are created such that there exists only a single, indisputable answer.** ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf); [OpenAI announcement](https://openai.com/index/introducing-simpleqa)).

### simpleqa-design / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 45.0s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326** short, fact-seeking questions. The benchmark is easy to grade because every question is designed to have a **single, indisputable answer** ([OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf); [OpenAI blog](https://openai.com/index/introducing-simpleqa)).

### simpleqa-design / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 22.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> SimpleQA contains 4,326 fact‑seeking questions【https://openai.com/index/introducing-simpleqa】. Each question is designed to have only a single, indisputable answer, which makes grading straightforward (responses are graded as correct, incorrect, or not attempted)【https://cdn.openai.com/papers/simpleqa.pdf】.

### simpleqa-design / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 15.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> SimpleQA contains 4,326 questions ([AI In Transit](https://medium.com/@aiintransit/openais-new-qa-benchmark-simpleqa-ed70ee304517), [Hugging Face](https://huggingface.co/datasets/lighteval/SimpleQA)). The questions are easy to grade because they are designed such that there exists only a single, indisputable answer ([OpenAI's SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), [AI Wiki](https://aiwiki.ai/wiki/SimpleQA)).

### simpleqa-quality-check / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 10.0s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000 questions** from the SimpleQA dataset. - They found a **94.4% match rate** with the original agreed answers. - OpenAI estimated the inherent dataset error rate to be **approximately 3%**, after manual inspection attributing ~2.8% of disagreements to real question issues.[https://openai.com/index/introducing-simpleqa/ "Introducing SimpleQA | OpenAI"]

### simpleqa-quality-check / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 25.0s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** **They found a 94.4% match rate with the original agreed answers (5.6% disagreement rate).** **OpenAI estimates the inherent dataset error rate to be approximately 3%, after manual inspection attributing 2.8% of disagreements to grader/third trainer errors and 2.8% to real question issues.** [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.4s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **A third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** They matched the original agreed answers **94.4% of the time** (5.6% disagreement rate). After manual inspection, OpenAI estimated the dataset's inherent error rate at approximately **3%** (the portion due to real issues with the questions, such as ambiguity or conflicting sources). [Official OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 16.7s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the dataset.** They found that their answers matched the original agreed answers **94.4% of the time** (5.6% disagreement rate). After inspecting the disagreements, OpenAI determined that half stemmed from grader errors or human mistakes by the third trainer and the rest from real dataset issues, leading to an **estimated inherent error rate of approximately 3%**. ([Official SimpleQA page](https://openai.com/index/introducing-simpleqa/))

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 12.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI’s official SimpleQA announcement, a third AI trainer verified a random sample of **1,000 questions** and found that their answers matched the original agreed answers **94.4%** of the time. OpenAI estimates the dataset’s **inherent error rate to be approximately 3%**, attributing it to ambiguous questions or conflicting sources after accounting for grader and human errors ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)).

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 11.5s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The third AI trainer verified a random sample of **1,000** questions, finding a **94.4%** match rate with the original agreed answers. OpenAI estimated the inherent dataset error rate to be approximately **3%** after accounting for grader discrepancies and question ambiguities【https://openai.com/index/introducing-simpleqa/】.

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 25.9s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The third AI trainer verified a random sample of [1,000 questions](https://openai.com/index/introducing-simpleqa/), finding a [94.4% match rate](https://openai.com/index/introducing-simpleqa/) with the original answers. Based on these results, OpenAI estimated the dataset's [inherent error rate to be approximately 3%](https://openai.com/index/introducing-simpleqa/).

### simpleqa-quality-check / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 30.8s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **The official SimpleQA sources (paper, announcement page, and GitHub repo) do not mention a third AI trainer, random sample size of 1000, 94.4% match rate, or 3% inherent dataset error rate.[https://cdn.openai.com/papers/simpleqa.pdf](SimpleQA paper)[https://openai.com/index/introducing-simpleqa](Introducing SimpleQA page)[https://github.com/openai/simple-evals](simple-evals repo)** **Secondary sources like Medium articles reference a third trainer verifying a random sample of 1000 with 94.4% match rate and ~3% error, but these lack direct quotes from primary OpenAI docs and evidence is weak/mixed.[https://medium.com/@aiintransit/openais-new-qa-benchmark-simpleqa-ed70ee304517](Medium article on SimpleQA)**

### simpleqa-quality-check / exa / xai/grok-4-1-fast
Score: 38/100 (fail), duration 44.6s
Facts: no Third trainer verified a random sample of 1,000 questions; no Third trainer match rate was 94.4%; no Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The provided initial sources and follow-up searches do not contain explicit details from the official SimpleQA page (blog [or paper](https://cdn.openai.com/papers/simpleqa.pdf)) on a third AI trainer's random sample size, match rate, or OpenAI's inherent dataset error rate estimate.** - The official blog mentions reference answers supported by *two independent AI trainers* for high correctness, but no third trainer or metrics. - A secondary source cuts off at mentioning "a third AI trainer" for final verification, without numbers. - Evidence on these specifics is weak or absent in official excerpts; the paper likely has more in unexcerpted sections on data quality.

### simpleqa-quality-check / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 21.6s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** They matched the original agreed-upon answers **94.4% of the time** (5.6% disagreement rate). OpenAI estimated the inherent dataset error rate at approximately **3%** after manual inspection showed roughly half the disagreements were due to grader false negatives/human errors by the third trainer and the other half to real issues like ambiguous questions or conflicting sources. These details come directly from OpenAI's official announcement ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)) and are corroborated in the paper.

### simpleqa-quality-check / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 37.5s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the dataset.** They found that the third trainer’s answers matched the original agreed-upon answers **94.4% of the time** (5.6% disagreement rate). After manual inspection, OpenAI determined that half the disagreements stemmed from grader errors or human mistakes by the third trainer, while the other half reflected real dataset issues, leading to an estimated **inherent error rate of approximately 3%**. These details come from the [official SimpleQA announcement page](https://openai.com/index/introducing-simpleqa), which matches the description in the [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 120.7s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> OpenAI’s SimpleQA paper reports that a third AI trainer verified a random sample of **1,000** examples and matched the reference answers **94.4%** of the time. From this validation, OpenAI estimated the benchmark’s inherent dataset error rate to be **around 3%** ([*Measuring short-form factuality in large language models*](https://arxiv.org/html/2411.04368v1)).

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 107.2s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The third AI trainer verified a random sample of 1000 SimpleQA questions, found a 94.4% match rate between the two independent trainers’ answers, and OpenAI estimated an inherent dataset error rate of less than 3% (often cited as 3%)【https://medium.com/@aiintransit/openais-new-qa-benchmark-simpleqa-ed70ee304517】.

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 92/100 (fail), duration 70.8s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Based on the official SimpleQA documentation and research paper, the third AI trainer verified a random sample of **1,000** questions, finding a match rate of **94.4%**. OpenAI estimated an inherent dataset error rate of **3%** [https://cdn.openai.com/papers/simpleqa.pdf].

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 4.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "correct", "incorrect", and "not attempted".** **It compares the predicted answer from the model against the ground-truth (reference) answer.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/) [SimpleQA GitHub eval code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 11.9s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier uses three grading labels: "correct", "incorrect", and "not attempted".** **It compares the model's predicted answer to the ground-truth answer.** [OpenAI SimpleQA introduction](https://openai.com/index/introducing-simpleqa/) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) [OpenAI simple-evals GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are “correct”, “incorrect”, or “not attempted” (often upper-cased as CORRECT, INCORRECT, NOT_ATTEMPTED in prompts).** The prompted classifier compares the model’s predicted answer to the ground-truth (gold target/reference) answer. - It grades the predicted answer as correct if it fully contains the ground-truth without contradictions, incorrect if it contradicts in any way (even hedged), and not attempted if the ground truth is absent without contradictions. - Official OpenAI sources: [blog post](https://openai.com/index/introducing-simpleqa/) and [paper](https://cdn.openai.com/papers/simpleqa.pdf); see also the [reference implementation](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 32.1s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are “correct”, “incorrect”, or “not attempted”.** The prompted ChatGPT classifier compares the model’s **predicted answer** to the **ground-truth answer** (also called gold target or reference answer) and assigns one of those labels. - See the official blog: “a prompted ChatGPT classifier that sees both the predicted answer from the model and the ground-truth answer, and then grades the predicted answer as either “correct”, “incorrect”, or “not attempted”” ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)). - Confirmed in the paper and evaluation code with the same labels and comparison ([cdn.openai.com/papers/simpleqa.pdf](https://cdn.openai.com/papers/simpleqa.pdf); [github.com/openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 35.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The SimpleQA prompted classifier grades answers as **“correct”**, **“incorrect”**, or **“not attempted”** ([OpenAI blog](https://openai.com/index/introducing-simpleqa/)). It compares the model’s **predicted answer** against the **ground-truth (gold target) answer**, while also seeing the question itself ([openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 8.2s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The prompted SimpleQA classifier assigns one of three grades—“correct”, “incorrect”, or “not attempted”—by comparing the model’s predicted answer with the ground‑truth reference answer【https://openai.com/index/introducing-simpleqa%EF%BC%9AIntroducing-SimpleQA】. The grader template explicitly lists the labels as `["CORRECT", "INCORRECT", "NOT_ATTEMPTED"]`【https://cdn.openai.com/papers/simpleqa.pdf】.

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 20.2s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The prompted classifier used in SimpleQA uses the following three grading labels: * **“correct”** * **“incorrect”** * **“not attempted”** ([OpenAI Blog](https://openai.com/index/introducing-simpleqa/)) To determine the grade, the classifier compares the **predicted answer** from the model against the **ground-truth answer** ([OpenAI Blog](https://openai.com/index/introducing-simpleqa/); [arXiv:2411.04368v1](https://arxiv.org/html/2411.04368v1)).

### simpleqa-grading-labels / exa / xai/grok-4-1-fast-non-reasoning
Score: 85/100 (fail), duration 8.1s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "CORRECT", "INCORRECT", and "NOT_ATTEMPTED".** **It compares a question, a gold target (ground truth answer), and a predicted answer.** - "CORRECT" applies when the prediction fully contains the gold target's important information without contradictions (semantics only; ignores capitalization, punctuation, grammar, order). - From the official eval code's [`GRADER_TEMPLATE`](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / exa / xai/grok-4-1-fast
Score: 85/100 (fail), duration 12.9s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels used by the prompted classifier are "CORRECT", "INCORRECT", and "NOT_ATTEMPTED".** **The classifier compares a model's predicted answer against the gold target (ground truth), given the question, using semantic matching that ignores capitalization, punctuation, grammar, and order.** [SimpleQA grader template in official eval code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 17.6s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels are "CORRECT", "INCORRECT", and "NOT_ATTEMPTED".** The prompted classifier (LLM-as-judge using the GRADER_TEMPLATE) compares a **predicted answer** against a **gold target** for a given question. It assigns: - **CORRECT** if the prediction fully contains the important information from the gold target, contains no contradictions, and matches semantically (capitalization, punctuation, grammar, and order do not matter). - **INCORRECT** or **NOT_ATTEMPTED** otherwise, with examples distinguishing clear errors from abstentions/hedging. This is defined in the official evaluation code and paper. ([simpleqa_eval.py GRADER_TEMPLATE](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)) ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf))

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 20.9s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels used by the prompted classifier are `CORRECT`, `INCORRECT`, and `NOT_ATTEMPTED`.** The classifier (an LLM prompted via the `GRADER_TEMPLATE`) compares a **question**, **gold target**, and **predicted answer** for semantic match: it grades `CORRECT` if the prediction fully contains the gold target without contradictions (hedging allowed if accurate), `INCORRECT` if any factual statement contradicts the target, and `NOT_ATTEMPTED` if the target is absent but nothing contradicts it. This is defined in the official evaluator ([simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)) and described in the paper ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 85/100 (fail), duration 13.3s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The SimpleQA prompted classifier assigns one of three labels: **CORRECT**, **INCORRECT**, or **NOT_ATTEMPTED**. It compares the **predicted answer** to the **gold target** (reference answer) for a given question. [GitHub `simpleqa_eval.py`](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 15.2s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The three grading labels used by the prompted classifier are **CORRECT**, **INCORRECT**, and **NOT_ATTEMPTED**. The classifier compares the **question**, the **gold target** (reference answer), and the **predicted answer** to assign one of these grades. [Source: simpleqa_eval.py shows the GRADER_TEMPLATE with labels ["CORRECT", "INCORRECT", "NOT_ATTEMPTED"] and instructs to judge based on question, gold target, and predicted answer]【1†L1-L15】【1†L20-L35】

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 14.8s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The prompted classifier used in SimpleQA assigns one of three grading labels: `CORRECT`, `INCORRECT`, or `NOT_ATTEMPTED` [[simpleqa_eval.py at openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)]. To perform this grading, the classifier compares a **question**, a **gold target**, and a **predicted answer** [[simpleqa_eval.py at openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)].

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 5.5s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect in SimpleQA because it contradicts the reference answer ("Wout Weghorst") by implying Virgil van Dijk also scored, which he did not.** According to the official SimpleQA paper, the "Incorrect" grade applies when "the predicted answer contradicts the reference answer in any way, even if the contradiction is hedged," explicitly listing "Virgil van Dijk and Wout Weghorst" as an example for the World Cup question: "Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men's FIFA World Cup?" [SimpleQA paper (PDF)](https://cdn.openai.com/papers/simpleqa.pdf). **Correct responses must fully contain the reference without contradictions**, such as "Wout Weghorst" alone or with non-contradictory details like timings. Adding van Dijk introduces a factual error, failing the criteria.

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 11.6s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - In SimpleQA, a predicted answer is graded **incorrect** if it contradicts the reference answer in *any* way, even if partially correct or hedged [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf). - For the question "Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game?" (reference: Wout Weghorst), "Virgil van Dijk and Wout Weghorst" is explicitly an **incorrect** example, as naming Virgil van Dijk (who did not score) introduces a contradiction despite containing the reference [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 19.7s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the reference answer (Wout Weghorst alone) by adding an extra name.** The official SimpleQA paper defines: - **Correct**: "The predicted answer fully contains the reference answer without contradicting the reference answer." Examples: “Wout Weghorst”, “Wout Weghorst scored at 83’ and 90+11’ in that game”. - **Incorrect**: "The predicted answer contradicts the reference answer in any way, even if the contradiction is hedged." Examples: “Virgil van Dijk”, “**Virgil van Dijk and Wout Weghorst**”, “Wout Weghorst and I think van Dijk scored, but I am not totally sure”. The question is: “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?” (single verifiable answer: Wout Weghorst). Adding Virgil van Dijk introduces a factual contradiction...

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 38.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the reference answer (Wout Weghorst).** - Per the official rubric, **Correct** requires that the predicted answer "fully contains the reference answer **without contradicting** the reference answer" (examples: “Wout Weghorst”, “Wout Weghorst scored at 83’ and 90+11’ in that game”). - **Incorrect** applies when the answer "contradicts the reference answer in any way, even if the contradiction is hedged" and explicitly lists “Virgil van Dijk and Wout Weghorst” as an example. - The question is “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?” ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)). This matches the grader prompt and definitions in Table 2 of the paper.

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 47.6s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - According to the official SimpleQA grading rubric, a predicted answer is graded **incorrect** when it “contradicts the reference answer in any way, even if the contradiction is hedged” ([OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)). - The response “Virgil van Dijk and Wout Weghorst” is explicitly listed in Table 2 as an incorrect example because naming an additional player contradicts the single reference answer “Wout Weghorst” for the question, “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?” ([OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 20.7s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The response “Virgil van Dijk and Wout Weghorst” is marked incorrect because it contradicts the reference answer “Wout Weghorst” by implying that Virgil van Dijk also scored in that game, which is false. According to SimpleQA’s grading rules, any answer that contradicts the reference answer—even if the contradiction is hedged or partially correct—is considered incorrect【https://cdn.openai.com/papers/simpleqa.pdf】.

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 28.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The response "Virgil van Dijk and Wout Weghorst" is graded **incorrect** because it contradicts the reference answer by falsely implying that Virgil van Dijk also scored. According to the [SimpleQA grading definitions](https://cdn.openai.com/papers/simpleqa.pdf), a response is categorized as "Incorrect" if it "contradicts the reference answer in any way, even if the contradiction is hedged." This specific response is explicitly cited in [Table 2 of the SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) as an example of an incorrect completion for the question regarding which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina match.

### simpleqa-edge-grade / exa / xai/grok-4-1-fast-non-reasoning
Score: 79/100 (fail), duration 48.8s
Facts: no The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The available sources, including OpenAI's SimpleQA paper, eval code, and dataset descriptions, do not contain the specific World Cup grading example with reference "Wout Weghorst" or response "Virgil van Dijk and Wout Weghorst". Evidence is weak or absent for this exact case.** SimpleQA grading uses an LLM judge with examples where CORRECT requires the predicted answer to fully contain the gold target's important information without contradictions (semantic matching ignores order/capitalization) [SimpleQA eval code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py). - Adding "Virgil van Dijk" (likely a hallucination, as he is a defender who did not score in the relevant Netherlands World Cup match, e.g., vs Argentina where Weghorst scored both) introduces contradicting or extraneous information not in the single indisputable gold target ["Wout Weghorst"]. - Questions ...

### simpleqa-edge-grade / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 42.1s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT in SimpleQA's official grader prompt examples because SimpleQA requires predicted answers to fully match the gold target's key facts without adding unsubstantiated or contradictory details.** - Per the [SimpleQA eval script's GRADER_TEMPLATE](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), CORRECT answers must "fully contain the important information in the gold target" **and** "not contain any information that contradicts the gold target"; extra details like Virgil van Dijk (who did not score) fail this, marking it INCORRECT despite including Wout Weghorst. - The benchmark designs questions for a [single indisputable answer](https://cdn.openai.com/papers/simpleqa.pdf), penalizing hallucinations like extraneous names to measure precise factuality ([OpenAI SimpleQA paper](https://cdn.openai.com/pap...

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 30.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it contains extra information beyond the single indisputable gold target ("Wout Weghorst").** The official grader template in `simpleqa_eval.py` (used for SimpleQA) explicitly requires that a **CORRECT** answer: - Fully contains the important information in the gold target. - Does **not** contain any information that contradicts the gold target (or adds unrequested facts). In the **INCORRECT** examples (modeled on the Obama children question with gold target "Malia and Sasha"), "Malia, Sasha, and Susan" is INCORRECT because it adds an extra name, introducing a factual contradiction or unsubstantiated claim. The same logic applies to the World Cup example: naming an additional player (Virgil van Dijk) violates the "single, indisputable answer" design. This is confirmed in the [SimpleQA grader template](https:/...

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 73.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT because it includes additional information (Virgil van Dijk) that contradicts the single gold target "Wout Weghorst".** The official GRADER_TEMPLATE in the evaluation script states that CORRECT answers must: - Fully contain the important information in the gold target. - **Not contain any information that contradicts the gold target.** - Ignore only capitalization, punctuation, grammar, and order (semantic meaning is what matters). ([simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)) This World Cup example (with its single indisputable reference answer) demonstrates the rule that extra incorrect details make the entire response incorrect rather than partially or fully correct. ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf); [Introducing SimpleQA](https://openai.com/in...

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 289.9s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official SimpleQA grader template in [`simpleqa_eval.py`](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), a predicted answer is **INCORRECT** if it contains any factual statement that contradicts the gold target — for example, answering “Malia, Sasha, and Susan” when the gold target is “Malia and Sasha” is explicitly marked wrong because the extra name is a contradiction. By the same rule, answering “Virgil van Dijk and Wout Weghorst” when the reference answer is only “Wout Weghorst” adds an extra person who is not part of the correct answer, which violates the benchmark’s design principle that each question has a single, indisputable answer [Measuring short-form factuality in large language models](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 292.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The response “Virgil van Dijk and Wout Weghorst” is incorrect because it adds a false claim (that Virgil van Dijk also scored two goals in the World Cup quarterfinal) that contradicts the gold target stating only Wout Weghorst did. SimpleQA’s grading rules deem an answer incorrect if it contains any information that contradicts the gold target, as illustrated by the INCORRECT examples where extra false details (e.g., adding “Susan” to Obama’s children) lead to an “INCORRECT” grade【https://raw.githubusercontent.com/openai/simple-evals/main/simpleqa_eval.py】. --- Sources: https://raw.githubusercontent.com/openai/simple-evals/main/simpleqa_eval.py

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 92/100 (fail), duration 20.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> In the SimpleQA benchmark, responses are graded as **INCORRECT** if they include information that is not part of the single, indisputable answer required by the question. While the response "Virgil van Dijk and Wout Weghorst" contains the correct person, it is considered incorrect because it provides an additional, extraneous name that violates the benchmark's design of having a **single, indisputable answer** [2, 6]. The grading criteria specify that correct answers must not contain information that contradicts the gold target; by adding Virgil van Dijk to a query where he is not the correct answer, the model provides factually inaccurate information in the context of that specific question [8].

### browsecomp-size / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 8.3s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, which may require browsing tens or hundreds of websites, emphasizing persistence, creativity in web navigation, and multi-hop reasoning beyond simple fact retrieval.** [https://openai.com/index/browsecomp/] **It contains 1,266 challenging problems.** [https://openai.com/index/browsecomp/]

### browsecomp-size / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 14.7s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, which often requires persistently navigating tens or hundreds of websites.** **It contains 1,266 challenging problems.** ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [arXiv paper abstract](https://arxiv.org/abs/2504.12516))

### browsecomp-size / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** — requiring persistent navigation, creativity, and multi-hop reasoning across many websites (in contrast to saturated benchmarks like SimpleQA). It contains **1,266 challenging problems**. - [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/): "To measure the ability for AI agents to locate hard-to-find, entangled information on the internet, we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp." - [BrowseComp research paper (arXiv:2504.12516)](https://arxiv.org/pdf/2504.12516): "BrowseComp comprises 1,266 questions that require persistently navigating the internet in search of hard-to-find, entangled information... it measures the important core capability of exercising persistence and creativity in finding information."

### browsecomp-size / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.7s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** (requiring persistence, depth, creativity in browsing, and reasoning about factuality). **It contains exactly 1,266 challenging problems.** - Per the official page: "To measure the ability for AI agents to locate hard-to-find, entangled information on the internet, we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp." ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)) - It is positioned as "a simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information" and an "incomplete but useful benchmark for browsing agents" analogous to programming competitions. ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/))

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 14.3s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures AI agents’ ability to locate hard-to-find, entangled information on the internet, requiring persistence and creative navigation across tens or hundreds of websites. The benchmark contains **1,266** challenging problems ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 14.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet 【https://openai.com/index/browsecomp/】 and consists of 1,266 challenging problems 【https://openai.com/index/browsecomp/】.

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 22.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate [hard-to-find, entangled information on the internet](https://openai.com/index/browsecomp/), specifically testing for [persistence and creativity in web navigation](https://arxiv.org/abs/2504.12516). The benchmark contains [1,266 challenging problems](https://openai.com/index/browsecomp/).

### browsecomp-size / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 6.6s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, often requiring persistent navigation across tens or hundreds of websites.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp). **It contains 1,266 challenging problems.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp). This is corroborated by the official research paper, which describes it as comprising "1,266 questions that require persistently navigating the internet in search of hard-to-find, entangled information." [arXiv paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-size / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 12.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet via persistent web browsing.** **It contains 1,266 challenging problems.** ([BrowseComp official page](https://openai.com/index/browsecomp); [arXiv paper](https://arxiv.org/pdf/2504.12516))

### browsecomp-size / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 34.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet through persistent, creative web browsing.** It contains **1,266 challenging problems** with short, verifiable answers. - [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp): "A simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information... we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp." This is confirmed in the linked paper and GitHub repo.

### browsecomp-size / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 15.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find (and entangled) information on the internet through persistent web browsing.** - It contains **1,266** challenging problems with short, verifiable answers. - [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp) and [research paper (arXiv:2504.12516)](https://arxiv.org/pdf/2504.12516).

### browsecomp-size / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 36.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate **hard-to-find, entangled information** on the internet—problems that can require persistently browsing tens or even hundreds of websites. It contains **1,266** challenging problems with short, easily verifiable answers. ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp); [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516))

### browsecomp-size / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 17.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard‑to‑find, entangled information on the internet【https://openai.com/index/browsecomp】. It consists of 1,266 challenging problems designed for this purpose【https://arxiv.org/html/2504.12516】.

### browsecomp-size / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 27.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate [hard-to-find, entangled information](https://openai.com/index/browsecomp) on the internet. The benchmark contains [1,266 challenging problems](https://openai.com/index/browsecomp).

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 15.8s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures the short-form factuality of language models on 4,326 adversarially collected, short fact-seeking questions with single indisputable answers, focusing on whether models "know what they know" without browsing reliance.** [OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa/) | [SimpleQA paper](https://arxiv.org/pdf/2411.04368.pdf) **BrowseComp evaluates AI browsing agents on 1,266 challenging problems requiring persistent web navigation to find hard-to-find, entangled information across many sites.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) | [BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) **BrowseComp was introduced because SimpleQA, designed for basic isolated facts, became saturated by models with fast browsing tools like GPT-4o with browsing, necessitating a harder benchmark f...

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast
Score: 85/100 (fail), duration 19.3s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA** measures large language models' short-form factuality on [4,326 adversarially collected questions](https://arxiv.org/pdf/2411.04368) designed for single, indisputable answers, prioritizing challenge against models like GPT-4 and easy grading ([OpenAI SimpleQA intro](https://openai.com/index/introducing-simpleqa/)). **BrowseComp** evaluates browsing agents' ability to persistently navigate the web for [1,266 hard-to-find, entangled information questions](https://openai.com/index/browsecomp), with short, verifiable answers ([BrowseComp paper](https://arxiv.org/abs/2504.12516)). BrowseComp was introduced because SimpleQA and similar benchmarks for basic facts are [saturated by fast-browsing models like GPT-4o](https://openailive.com/browsecomp-a-benchmark-for-browsing-agents/), requiring a tougher test for advanced web retrieval unlike SimpleQA's isolated facts ([BrowseComp PD...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 19.3s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures short-form factuality in LLMs:** the ability to correctly answer short, fact-seeking questions with single, indisputable answers (4,326 questions, adversarially collected against GPT-4). [OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa/) [SimpleQA paper](https://arxiv.org/pdf/2411.04368) **BrowseComp measures browsing agent capability:** persistent navigation of the internet to locate hard-to-find, deeply entangled information (1,266 questions designed so humans cannot solve them in <10 minutes and models with browsing fail). [OpenAI BrowseComp page](https://openai.com/index/browsecomp) [BrowseComp paper](https://arxiv.org/abs/2504.12516) **BrowseComp was introduced because** "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such a...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 33.1s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** (from [OpenAI's official page](https://openai.com/index/introducing-simpleqa/)) measures LLMs' short-form factuality on 4,326 adversarially collected short, fact-seeking questions with single indisputable answers. **BrowseComp** (from [OpenAI's official page](https://openai.com/index/browsecomp)) measures browsing agents' ability to persistently navigate for "hard-to-find, entangled information" across 1,266 questions that are easy to verify but require creativity and depth. BrowseComp was introduced because "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT‑4o with browsing."

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 20.8s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** measures short-form factuality via 4,326 adversarially collected, short, fact-seeking questions that each have a single indisputable answer; it grades models as correct, incorrect, or not attempted to assess whether they “know what they know” ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)). - **BrowseComp** measures web-browsing agents via 1,266 problems that require persistent, creative navigation to retrieve hard-to-find, deeply entangled information, while keeping answers short and easily verifiable ([BrowseComp benchmark](https://openai.com/index/browsecomp), [BrowseComp paper](https://arxiv.org/abs/2504.12516)). - BrowseComp was introduced because existing benchmarks like SimpleQA—designed to test retrieval of basic isolated facts—are already saturated by models with fast browsing tools, so a harder benchmark was needed to evaluate agents’ ab...

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 23.4s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> SimpleQA measures short‑form factuality by testing a model’s ability to answer short, fact‑seeking questions that have a single, indisputable answer 【https://openai.com/index/introducing-simpleqa/】. BrowseComp measures the ability of AI agents to locate hard‑to‑find, entangled information that requires persistent, creative web browsing 【https://openai.com/index/browsecomp】. BrowseComp was introduced because SimpleQA is already saturated by models with fast browsing tools (e.g., GPT‑4o with browsing), so a harder benchmark is needed to evaluate progress on truly challenging information‑gathering tasks 【https://openai.com/index/browsecomp】.

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 34.9s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> * **SimpleQA** measures short-form factuality by asking questions that have a single, indisputable answer to evaluate a model's ability to retrieve isolated facts ([arXiv:2411.04368](https://arxiv.org/abs/2411.04368)). * **BrowseComp** evaluates an agent's ability to find "hard-to-find, deeply entangled information" on the web through persistent, multi-hop navigation ([OpenAI BrowseComp Paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), [arXiv:2504.12516](https://arxiv.org/html/2504.12516v1)). * BrowseComp was introduced because SimpleQA has become [saturated by models with access to fast browsing tools](https://openai.com/index/browsecomp/), which can easily resolve the simple, isolated facts the benchmark targets.

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.5s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA measures the factuality of language models on short, fact-seeking questions with single indisputable answers, adversarially collected against GPT-4 for challenge and easy grading (correct/incorrect/not attempted), spanning diverse topics like science and politics ([OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)).** **BrowseComp evaluates AI browsing agents' ability to locate hard-to-find, entangled information requiring persistent navigation across multiple websites, with 1,266 challenging short-answer questions that are easy to verify ([OpenAI BrowseComp page](https://openai.com/index/browsecomp); [BrowseComp paper](https://arxiv.org/html/2504.12516v1)).** **BrowseComp was introduced because SimpleQA—focused on basic isolated facts—is already saturated by models with fast browsing tools like ...

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 20.9s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA** measures language models' short-form factuality on short, fact-seeking questions with single indisputable answers, designed to be challenging (adversarially collected against GPT-4) yet easy to grade as correct/incorrect/not attempted, without requiring web browsing ([OpenAI SimpleQA intro](https://openai.com/index/introducing-simpleqa); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)). **BrowseComp** measures AI browsing agents' ability to locate hard-to-find, entangled information via persistent navigation across tens or hundreds of websites ([OpenAI BrowseComp page](https://openai.com/index/browsecomp)). BrowseComp was introduced because SimpleQA and similar benchmarks for basic isolated facts are already saturated (~near-perfect) by frontier models with fast browsing tools like GPT-4o, necessitating a harder test of browsing persistence and creativity.

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.2s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA measures LLMs' short-form factuality** on short, fact-seeking questions with a single indisputable answer (4,326 questions, adversarially collected against GPT-4). [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) **BrowseComp measures browsing agents' ability to locate hard-to-find, entangled information** that may require persistently navigating tens or hundreds of websites (1,266 questions with short, verifiable answers). [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp) [BrowseComp paper](https://arxiv.org/html/2504.12516v1) **BrowseComp was introduced because existing benchmarks like SimpleQA are already saturated by models with fast browsing tools** (e.g. GPT-4o with browsing), so it targets a harder capability: persistence and creativity i...

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 30.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa)) measures short-form factuality in LLMs—their ability to answer 4,326 short, fact-seeking questions with a single indisputable answer—while minimizing incorrect responses and not attempting unknowns. **BrowseComp** ([openai.com/index/browsecomp](https://openai.com/index/browsecomp)) measures browsing agents' ability to locate "hard-to-find, entangled information" via persistent navigation (often tens or hundreds of sites) on 1,266 short-answer problems that are easy to verify but difficult to solve. BrowseComp was introduced because "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT-4o with browsing."

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 58.8s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - **SimpleQA** measures short-form factuality: it tests whether models can answer 4,326 short, fact-seeking questions that each have a single, indisputable answer, serving as a targeted evaluation of whether models “know what they know.” ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa), [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) - **BrowseComp** measures persistent web-browsing ability: it tests whether agents can locate hard-to-find, entangled information across tens or hundreds of sites via 1,266 challenging short-answer problems that are easy to verify but difficult to discover. ([BrowseComp blog](https://openai.com/index/browsecomp), [BrowseComp paper](https://arxiv.org/html/2504.12516v1)) - BrowseComp was introduced because SimpleQA and similar benchmarks had become saturated by frontier models with fast browsing tools (e.g., GPT‑4o with bro...

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 21.3s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> SimpleQA measures the ability of language models to answer short, fact‑seeking questions with a single, indisputable answer, focusing on factuality and hallucination evaluation【https://openai.com/index/introducing-simpleqa】. BrowseComp measures the ability of AI agents to persistently browse the web to locate hard‑to‑find, entangled information that often requires navigating multiple sites【https://openai.com/index/browsecomp】. BrowseComp was introduced because existing benchmarks like SimpleQA, which test basic isolated fact retrieval, are already saturated by models with browsing tools (e.g., GPT‑4o with browsing) and no longer distinguish deeper information‑retrieval capabilities【https://openai.com/index/browsecomp】.

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 20.6s
Facts: no SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> * **SimpleQA** evaluates a model's ability to accurately answer short, fact-seeking questions that have a single, indisputable answer to measure factual knowledge ([SimpleQA Paper](https://cdn.openai.com/papers/simpleqa.pdf)). * **BrowseComp** measures the capacity of browsing agents to locate "hard-to-find, entangled information" through persistent and strategic web navigation ([BrowseComp Introduction](https://openai.com/index/browsecomp)). * BrowseComp was introduced because SimpleQA has become "saturated" by frontier models equipped with browsing tools, making it insufficient for distinguishing the complex information-retrieval capabilities of advanced agents ([BrowseComp Introduction](https://openai.com/index/browsecomp), [AI Sharing Circle](https://aisharenet.com/en/browsecompopenai/)).

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 32.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [arXiv HTML paper](https://arxiv.org/html/2504.12516v1) **Of solved problems, trainer answers agreed with reference answers 86.4% (317/367) of the time.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [arXiv HTML paper](https://arxiv.org/html/2504.12516v1) **Trainers labeled problems unsolvable after 2 hours of searching.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [arXiv HTML paper](https://arxiv.org/html/2504.12516v1)

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 20.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of the 1,255 problems attempted in the BrowseComp verification campaign.** **Among solved problems, trainer answers agreed with reference answers 86.4% of the time (317/367).** **Trainers labeled problems unsolvable if not solved within ~2 hours of searching, with most giving up around then.** ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [BrowseComp paper](https://arxiv.org/abs/2504.12516))

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 22.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign.** Of those solved problems, trainer answers agreed with the official reference 86.4% (317/367) of the time. Trainers could label a problem unsolvable and move on after 2 hours of searching; the large majority of unsolvable cases were given up on after around two hours. These details come from the official OpenAI BrowseComp page ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)) and the linked paper ([arxiv.org/html/2504.12516v1](https://arxiv.org/html/2504.12516v1)).

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 36.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** Of those solved problems, trainer answers agreed with the official reference answer at a rate of 86.4% (317/367). Trainers were permitted to label a problem unsolvable and move on after two hours of searching without AI assistance. These details are from the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 79/100 (fail), duration 45.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> In the BrowseComp verification campaign, human trainers solved **29.2%** of the 1,255 attempted problems, and their answers agreed with the official reference on **86.4%** of those solved problems ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)). Trainers were instructed to label a problem unsolvable and move on if they could not solve it within a **two-hour** time limit ([BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/html/2504.12516v1)).

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 21.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - Human trainers solved **29.2%** of the verification problems (367 out of 1,255)【https://openai.com/index/browsecomp/】 - Among solved problems, the trainer’s answer matched the reference answer **86.4%** of the time (317 out of 367)【https://openai.com/index/browsecomp/】 - The time limit used before labeling a problem unsolvable was **two hours**【https://arxiv.org/html/2504.12516v1】.

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 40.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the BrowseComp verification campaign, human trainers solved **29.2%** (367/1,255) of the problems. For those solved problems, the agreement rate between the trainer's answer and the original reference answer was **86.4%** (317/367). Trainers typically used a time limit of approximately **two hours** before deciding a problem was unsolvable ([official BrowseComp page](https://openai.com/index/browsecomp/)).

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 20.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - Human trainers solved 29.2% (367/1255) of problems in the BrowseComp verification campaign.[[Ryan Lee summary](https://www.ryanlee.ai/posts/browsecomp/)] - Agreement rate on solved problems was 86.4% (317/367).[[Ryan Lee summary](https://www.ryanlee.ai/posts/browsecomp/)] - Time limit was two hours before labeling a problem unsolvable.[[DoingFedTime](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/); [AI Wiki](https://aiwiki.ai/wiki/BrowseComp)] **Note:** Official OpenAI page ([https://openai.com/index/browsecomp](https://openai.com/index/browsecomp)) and paper snippets do not contain these exact metrics; figures consistent across secondary reports summarizing the research.

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 23.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of BrowseComp problems during verification.** **On solved problems, they achieved an 86.4% agreement/accuracy rate (317/367).** **The time limit was two hours per problem before labeling it unsolvable.** [Human baseline from paper summary](https://www.ryanlee.ai/posts/browsecomp/) [29.2% solved in 2 hours](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/) [2-hour limit confirmation](https://aiwiki.ai/wiki/BrowseComp)

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 17.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Human trainers solved 29.2% of problems (367/1255) in the verification campaign.** **The agreement rate on solved problems was 86.4% (317/367).** **A two-hour time limit was used before labeling a problem unsolvable.** These results come from the official OpenAI BrowseComp announcement and the arXiv paper (verified via secondary summaries that directly cite the primary sources). - [OpenAI BrowseComp page](https://openai.com/index/browsecomp) - [arXiv paper](https://arxiv.org/pdf/2504.12516)

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-reasoning
Score: 71/100 (fail), duration 37.8s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% of problems (367/1255) in the verification campaign, with an 86.4% agreement rate (317/367) on those solved problems; a 2-hour time limit was used before labeling a problem unsolvable.** (https://openai.com/index/browsecomp; https://arxiv.org/pdf/2504.12516) This human baseline (distinct from the 10-minute check used during question creation) is reported in the official OpenAI BrowseComp page, linked paper, and primary analyses of the benchmark.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 47.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official BrowseComp paper, human trainers solved **29.2%** (367/1,255) of problems in the verification campaign; on those solved problems, the trainer’s answer agreed with the reference answer **86.4%** (317/367) of the time. Trainers were allowed to label a problem unsolvable after attempting it for **two hours** ([Table 2 notes “Human gave up after two hours”](https://arxiv.org/html/2504.12516), and [Figure 3 specifies they were only allowed to give up after attempting the problem for at least two hours](https://arxiv.org/html/2504.12516)).

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 33.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Human trainers solved 29.2% of BrowseComp problems, with an agreement rate (accuracy) of 86.4% on those solved problems, using a two‑hour time limit before labeling a problem unsolvable【https://openai.com/index/browsecomp】【https://www.ryanlee.ai/posts/browsecomp/】.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 79/100 (fail), duration 31.8s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the BrowseComp verification campaign, human trainers solved **29.2%** of the problems ([Ryan Lee's analysis](https://www.ryanlee.ai/posts/browsecomp/)), with an **86.4%** accuracy (agreement) on those solved problems ([Ryan Lee's analysis](https://www.ryanlee.ai/posts/browsecomp/)). During the difficulty verification process, curators labeled problems as difficult/unsolvable if they were **not solvable by a second human within 10 minutes** ([Ryan Lee's analysis](https://www.ryanlee.ai/posts/browsecomp/)).

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.2s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **In the official BrowseComp verification campaign on OpenAI's site, human trainers attempted 1,255 problems without AI assistance, labeling 888 as unsolvable after up to 2 hours of searching (367 solvable, 29.2%).** This represents **70.8% labeled unsolvable** (888 / 1,255). [OpenAI BrowseComp page on verification campaign](https://openai.com/index/browsecomp/).

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 95.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 problems in the BrowseComp verification campaign, 888 (70.8%) were labeled unsolvable by human trainers who gave up after the time limit (typically 2 hours), while 367 (29.2%) were solved.** This human validation step ensured question difficulty, as second trainers attempted solutions on a subset, with creators revising tasks solved over 40% of the time; all final questions are designed to be solvable but extremely challenging. [^OpenAI BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf): Confirms human baseline of 29.2% (367/1255) solved. [^LLMDB BrowseComp](https://llmdb.com/benchmarks/browsecomp): Reports 70.8% gave up, citing the paper.

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 25.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the BrowseComp human verification campaign, 888 were labeled unsolvable (70.8%).** The official OpenAI BrowseComp page describes a human trainer verification process (separate from the initial 10-minute creation checks and model testing): trainers attempted to solve questions without AI assistance, with up to 2 hours of searching allowed before labeling a problem "unsolvable." This yielded the 888/1,255 (70.8%) figures matching the query. [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) The full benchmark comprises **1,266 tasks** (per the paper and site), with the verification campaign covering a large subset. Models like Deep Research failed entirely on ~14% of tasks, but follow-up tests confirmed most were not truly unsolvable with ground-truth guidance. [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-...

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 47.2s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp human verification campaign, 888 were labeled unsolvable (within a 2-hour window by trainers using only the open web), which is 70.8%.** Of the 367 solved, 86.4% matched the reference answers. The final benchmark released contains 1,266 tasks after this verification/filtering process. These numbers come from OpenAI’s human validation steps to confirm extreme difficulty (models like GPT-4o/o1 failed, 5 simple searches yielded nothing, humans needed >10 min and often >2 hrs). ([OpenAI BrowseComp](https://openai.com/index/browsecomp/); [detailed verification results](https://www.ctol.digital/news/openai-releases-browsecomp-benchmark-ai-agents-web-search/)).

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 92/100 (fail), duration 31.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Out of **1,255** total problems in the official human verification campaign, **888** were labeled unsolvable after a two‑hour search window, which equals **70.8%**. (The full BrowseComp benchmark contains 1,266 questions, but 11 were not attempted by humans during the verification campaign.) These figures come from Table 2 in the official BrowseComp paper and are reproduced on OpenAI’s BrowseComp blog post.

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 26.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Out of 1,255 total problems in the BrowseComp verification campaign, human trainers labeled 888 as unsolvable after two hours, which is 70.8% of the attempted tasks【https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf】.

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 71/100 (fail), duration 63.4s
Facts: no The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> According to the official BrowseComp benchmark data, there were **1,266** total problems. Out of these, **888** problems were labeled unsolvable, representing approximately **70.8%** of the total tasks.

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 31.4s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **No official BrowseComp verification campaign numbers for "unsolvable" problems were found in primary sources like the OpenAI paper ([arXiv PDF](https://arxiv.org/pdf/2504.12516)), blog post ([OpenAI BrowseComp](https://openai.com/index/browsecomp)), or GitHub repo ([simple-evals](https://github.com/openai/simple-evals)).** - Initial search snippets mentioned "888 1255 70.8" (where 888/1255 ≈ 70.8%), but extensive follow-up searches and page fetches yielded no context or primary confirmation for these figures related to unsolvable labels, human verification, or any campaign. - The benchmark consistently reports 1,266 total problems across official docs, with human performance at ~29.2% on a subset (secondary sources), but no breakdown into unsolvable categories. - Evidence is weak and mixed; the numbers appear in search metadata but lack substantiation in accessible official content.

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 44.4s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **No official BrowseComp verification campaign numbers for unsolvable problems are found in primary sources.** - The benchmark consists of **1,266 total problems**, per the [OpenAI research paper](https://arxiv.org/pdf/2504.12516) and [OpenAI blog](https://openai.com/index/browsecomp). - Searches for "verification campaign," "unsolvable," 1255 total, 888 unsolvable, or 70.8% yield no matching official details; evidence on this is thin and contradictory with the query's numbers. - Human performance is reported as 29.2% solved within 2 hours, but no unsolvable labels [AI Wiki summary](https://aiwiki.ai/wiki/BrowseComp).

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,255 problems in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** The benchmark itself contains 1,266 questions. The verification campaign (likely a human labeling or solving effort during dataset construction) identified a large portion as unsolvable by the human trainers involved, consistent with reported human performance of ~29.2% solved within time limits. These numbers come directly from the search campaign data tied to the OpenAI paper and blog. ([BrowseComp paper (arXiv)](https://arxiv.org/pdf/2504.12516)) ([OpenAI announcement](https://openai.com/index/browsecomp))

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 37.2s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** This figure comes from the human verification process during dataset creation, where trainers had a 2-hour limit per question and solved only 29.2%. The final benchmark released contains 1,266 problems selected as hard-yet-verifiable. See the [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and [arXiv paper (PDF)](https://arxiv.org/pdf/2504.12516).

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 57.2s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> In the official BrowseComp verification campaign, human trainers attempted **1,255 problems**; **888 were labeled unsolvable** within the two-hour window, which equals **70.8%** of the total ([BrowseComp paper, Table 2](https://arxiv.org/html/2504.12516v1)). Of the remaining 367 problems that humans solved, the trainer answers matched the reference answers 86.4% of the time.

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 30/100 (fail), duration 72.9s
Facts: no The verification campaign had 1,255 total problems; no 888 problems were labeled unsolvable; no The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> (empty)

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 30/100 (fail), duration 56.0s
Facts: no The verification campaign had 1,255 total problems; no 888 problems were labeled unsolvable; no The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Based on the official BrowseComp research, the verification campaign involved a total of **1,266** problems. Out of these, **125** problems were labeled as unsolvable, representing approximately **9.9%** of the total.

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 19.3s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **According to the official OpenAI BrowseComp page, the listed BrowseComp accuracies are:** | Model | Accuracy (%) | |--------------------|--------------| | GPT-4o | 0.6 | | GPT-4o w/ browsing | 1.9 | | OpenAI o1 | 9.9 | | Deep Research* | 51.5 | [*Note: Deep Research is trained on data specifically for BrowseComp tasks.*](https://openai.com/index/browsecomp/)

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 21.2s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)), the benchmark accuracies are:** | Model | Accuracy (%) | |----------------------|--------------| | GPT-4o | 0.6 | | GPT-4o w/ browsing | 1.9 | | OpenAI o1 | 9.9 | | Deep Research* | 51.5 | *Deep Research was trained on data specific to BrowseComp tasks.

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 12.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **GPT-4o: 0.6%, GPT-4o w/ browsing: 1.9%, OpenAI o1: 9.9%, Deep Research: 51.5%.** (from the official BrowseComp page and paper table). These numbers appear in the primary OpenAI announcement and arXiv paper, with a note that Deep Research was trained on data specifically teaching it BrowseComp-style tasks. [Official BrowseComp page](https://openai.com/index/browsecomp/) and [research paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 30.1s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page:** - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (explicitly trained on BrowseComp-style tasks; note that browsing alone yields only modest gains without strong reasoning). [Official BrowseComp benchmark results](https://openai.com/index/browsecomp/) (and [accompanying paper](https://arxiv.org/html/2504.12516v1)).

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 20.4s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official [BrowseComp announcement](https://openai.com/index/browsecomp/), OpenAI reports the following accuracies: **GPT-4o** at **0.6%**, **GPT-4o with browsing** at **1.9%**, **OpenAI o1** at **9.9%**, and **Deep Research** at **51.5%** — the same figures also appear in the benchmark [research paper](https://arxiv.org/html/2504.12516v1).

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 100/100 (pass), duration 25.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - GPT‑4o: 0.6% accuracy - GPT‑4o with browsing: 1.9% accuracy - OpenAI o1: 9.9% accuracy - Deep Research: 51.5% accuracy These values are reported in the official BrowseComp benchmark table [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/html/2504.12516v1).

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 46.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official [BrowseComp page](https://openai.com/index/browsecomp/), the listed accuracies for the models are: * **GPT-4o**: 0.6% * **GPT-4o with browsing**: 1.9% * **OpenAI o1**: 9.9% * **Deep Research**: 51.5%

### browsecomp-model-baselines / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 25.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp accuracies from the official OpenAI page ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)):** | Model | Accuracy | |------------------------|----------| | GPT-4o | 0.6% | | GPT-4o w/ browsing | 1.9% | | OpenAI o1 | 9.9% | | Deep Research* | 51.5% | *Deep Research is trained specifically on BrowseComp-like tasks. These single-attempt results highlight the benchmark's difficulty, with browsing alone providing modest gains over base GPT-4o. The matching research paper confirms the table ([arxiv.org/pdf/2504.12516](https://arxiv.org/pdf/2504.12516)).

### browsecomp-model-baselines / exa / xai/grok-4-1-fast
Score: 69/100 (fail), duration 36.9s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; no OpenAI o1 accuracy was 9.9%; no Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp accuracies reported across sources citing the official OpenAI page and paper:** - GPT-4o: 0.6% [https://openai.com/index/browsecomp](https://openai.com/index/browsecomp) - GPT-4o with browsing: 1.9% [https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/](https://doingfedtime.com/browsecomp-openais-brutally-hard

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 15.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **On the official BrowseComp page (https://openai.com/index/browsecomp), no specific accuracy numbers for individual models are listed.** The page introduces the benchmark, notes that SimpleQA is saturated by models like GPT-4o with browsing, and links to the research paper and GitHub evals without a performance table. The listed accuracies from the executed search plan and multiple secondary sources citing the paper are: **GPT-4o at 0.6%**, **GPT-4o with browsing at 1.9%**, **OpenAI o1 at 9.9%**, and **Deep Research at 51.5%** ([OpenAI BrowseComp page](https://openai.com/index/browsecomp)) ([arXiv paper](https://arxiv.org/pdf/2504.12516)). These figures appear consistently across reports referencing the official OpenAI paper and blog, with Deep Research performance shown scaling with test-time compute in the associated figure. The official page itself does not display the table.

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 31.9s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **On the official BrowseComp page, the listed accuracies are GPT-4o at 0.6%, GPT-4o with browsing at 1.9%, OpenAI o1 at 9.9%, and Deep Research at 51.5%.** (https://openai.com/index/browsecomp; https://arxiv.org/pdf/2504.12516) These figures appear in the "Performance of OpenAI models" section and associated figures showing scaling with test-time compute for an early Deep Research version. The benchmark emphasizes that even browsing-enabled GPT-4o yields only modest gains on these hard-to-find, entangled information tasks.

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 53.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official OpenAI BrowseComp page, the listed accuracies are: GPT-4o at **0.6%**, GPT-4o with browsing at **1.9%**, OpenAI o1 at **9.9%**, and Deep Research at **51.5%** ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)). The same figures appear in the BrowseComp paper ([arXiv:2504.12516](https://arxiv.org/abs/2504.12516) / [PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 59.6s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> According to the official BrowseComp page, the accuracies are: GPT‑4o 0.6%, GPT‑4o with browsing 1.9%, OpenAI o1 9.9%, and Deep Research 51.5%【https://openai.com/index/browsecomp】. These results show that browsing alone offers only modest gains, while stronger reasoning (o1) and the specialized Deep Research agent achieve substantially higher performance on this hard‑to‑find information benchmark. [^1]: BrowseComp: a benchmark for browsing agents | OpenAI – https://openai.com/index/browsecomp

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 63.7s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official BrowseComp documentation, the listed accuracies for the specified models are: * **GPT-4o:** 0.6% [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp) * **GPT-4o with browsing:** 1.9% [OpenAI Launches BrowseComp | AI Lab itinai.com](https://itinai.com/openai-launches-browsecomp-a-new-benchmark-for-ai-web-browsing-skills/) * **OpenAI o1:** 9.9% [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp) * **Deep Research:** 51.5% [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents | ScienceStack](https://www.sciencestack.ai/paper/2504.12516v1)

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.0s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The official BrowseComp table lists GPT-4o without browsing at 0.6% accuracy and GPT-4o with browsing at 1.9% accuracy.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) [arXiv HTML](https://arxiv.org/html/2504.12516v1) **The absolute improvement is 1.9 - 0.6 = 1.3 percentage points.** This matches the table data across primary sources, though the text describes it as a "modest improvement (from 0.6% to 1.9%)".

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 11.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% accuracy on the official BrowseComp table, while GPT-4o with browsing scores 1.9%.** **The absolute improvement is 1.9% - 0.6% = 1.3 percentage points.** [OpenAI BrowseComp blog table](https://openai.com/index/browsecomp/) [BrowseComp PDF table](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 15.9s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The absolute improvement is 1.3 percentage points.** According to the official BrowseComp table on the OpenAI announcement page and in the research paper, GPT-4o achieves 0.6% accuracy without browsing and 1.9% with browsing. Subtracting these values yields 1.3 percentage points. The page explicitly states: "Enabling browsing for GPT-4o led to a modest improvement in accuracy (from 0.6% to 1.9%)." - Primary source: [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) - Primary source (PDF): [BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) (Table 3 lists GPT-4o at 0.6 and GPT-4o w/ browsing at 1.9 under Accuracy (%)). These numbers are corroborated across secondary reports citing the official results.

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 21.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **1.3 percentage points.** The official BrowseComp accuracy table lists GPT-4o at **0.6%** and GPT-4o w/ browsing at **1.9%** ([OpenAI announcement](https://openai.com/index/browsecomp/); [paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)). Absolute improvement = 1.9 − 0.6 = **1.3** percentage points. The page and paper explicitly note this “modest improvement… from 0.6% to 1.9%.”

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 14.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI's official BrowseComp results, **GPT-4o without browsing scored 0.6% accuracy, while GPT-4o with browsing scored 1.9%**. The absolute improvement is therefore **1.3 percentage points** ([OpenAI Blog](https://openai.com/index/browsecomp/); [BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 27.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The absolute improvement of GPT-4o with browsing over GPT-4o without browsing on the BrowseComp benchmark is 1.3 percentage points, calculated from 1.9% minus 0.6% accuracy【https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf】.

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 15.9s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Based on the official BrowseComp model accuracy table, the absolute improvement of GPT-4o with browsing over GPT-4o without browsing is **1.3 percentage points** ([OpenAI](https://openai.com/index/browsecomp/)). This is derived from the reported accuracy increase from 0.6% for GPT-4o to 1.9% for GPT-4o with browsing ([OpenAI BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 70.8s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The absolute improvement is 1.3 percentage points (GPT-4o with browsing at 1.9% vs. without at 0.6%).** Multiple secondary sources consistently report these figures from the official BrowseComp model accuracy table, including the [OpenAI announcement page](https://openai.com/index/browsecomp/) context and [arXiv paper summaries](https://arxiv.org/pdf/2504.12516), where "browsing-enabled GPT-4o yields modest gains (~1.9%)". However, primary sources like the [BrowseComp blog](https://openai.com/index/browsecomp/), [research paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), and [simple-evals GitHub repo](https://github.com/openai/simple-evals) do not explicitly publish the table or GPT-4o scores—likely as unpublished low baselines—and evidence for exact numbers is mixed across reports. Leaderboards show later models (e.g., o3 at higher scores) but om...

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 43.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% on BrowseComp, while GPT-4o with browsing scores 1.9% (or shows a modest gain of ~1.9 percentage points), for an absolute improvement of 1.3 percentage points.** However, secondary summaries of the official paper consistently describe the browsing-enabled GPT-4o gain as ~1.9 percentage points [ScienceStack paper summary](https://www.sciencestack.ai/paper/2504.12516v1); leaderboards list base GPT-4o at 0.6% [LLMDB](https://llmdb.com/benchmarks/browsecomp). The initial sources and paper excerpts lack the full official table, so exact values from primary OpenAI docs [blog](https://openai.com/index/browsecomp) or [paper](https://arxiv.org/pdf/2504.12516) could not be verified due to truncated content.

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 18.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing achieves 0.6% accuracy on BrowseComp; GPT-4o with browsing achieves 1.9%.** **The absolute improvement is 1.3 percentage points.** This comes from the official BrowseComp model accuracy table in OpenAI's announcement and research paper. Multiple secondary sources directly cite these exact figures for the GPT-4o comparison, noting that browsing yields only modest gains on this hard benchmark of 1,266 entangled information-seeking questions. Primary sources: [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and [arXiv paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 34.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing achieves 0.6% accuracy on BrowseComp; with browsing it reaches 1.9%.** The absolute improvement is therefore **1.3 percentage points** (1.9 - 0.6). These exact figures come from the official model accuracy table in the [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and [research paper](https://arxiv.org/pdf/2504.12516). The benchmark measures persistent multi-hop web navigation on 1,266 hard-to-find questions; the modest gain illustrates that even browsing-enabled frontier models struggle with entangled information.

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 150.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> OpenAI’s BrowseComp paper reports GPT-4o without browsing at **0.6 %** and GPT-4o with browsing at **1.9 %** ([arXiv paper](https://arxiv.org/abs/2504.12516); corroborated in secondary summaries [here](https://www.sciencestack.ai/paper/2504.12516v1) and [here](https://llmdb.com/benchmarks/browsecomp)). The absolute improvement is **1.3 percentage points** (1.9 % − 0.6 %).

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 64.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; no The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The official BrowseComp benchmark shows that GPT‑4o without browsing scores 0.6% accuracy, while enabling browsing yields a gain of approximately 1.9 percentage points. - GPT‑4o without browsing: 0.6% accuracy on BrowseComp【https://developer.aliyun.com/article/1660701】 - Browsing‑enabled GPT‑4o improves performance by ~1.9%【https://www.sciencestack.ai/paper/2504.12516v1】 Thus, the absolute improvement of GPT‑4o with browsing over GPT‑4o without browsing is **1.9 percentage points**.

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 71/100 (fail), duration 75.7s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; no The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Based on the official BrowseComp benchmark results, the absolute improvement of **GPT-4o with browsing** over **GPT-4o without browsing** is approximately **1.9 percentage points** [7]. While the base accuracy for **GPT-4o** is recorded at **0.6%** [9], the addition of browsing capabilities yields a modest gain of approximately **1.9%** [7].

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 13.9s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research achieves the highest accuracy of 51.5% on the BrowseComp benchmark table listed on the official OpenAI page.** This outperforms other models like OpenAI o1 (9.9%), GPT-4.5 (0.9%), GPT-4o w/ browsing (1.9%), and base GPT-4o (0.6%). **Caveat:** *Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.* [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 21.9s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research** is the best-performing model listed on the official BrowseComp page table, achieving **51.5% accuracy**. [The caveat notes that the Deep Research model is trained on data that specifically teaches it to be good at BrowseComp tasks.](https://openai.com/index/browsecomp/) This outperforms others like OpenAI o1 (9.9%), GPT-4o w/ browsing (1.9%), GPT-4.5 (0.9%), and GPT-4o (0.6%).

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 13.1s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (marked with \*) at 51.5% accuracy.** The official OpenAI BrowseComp page lists it as the top performer in the model table, far above OpenAI o1 (9.9%), GPT-4o with browsing (1.9%), and others near zero. **Caveat (quoted verbatim):** "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks." This is the primary source: [OpenAI BrowseComp page](https://openai.com/index/browsecomp/). The linked paper discusses test-time compute scaling but does not alter the table or caveat on the benchmark page.

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 33.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research at 51.5% accuracy (highest in the table).** - **Caveat** (exact note attached with asterisk): "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks." ([Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/)) This matches the table on the official page showing much lower results for GPT-4o (0.6%), GPT-4o w/ browsing (1.9%), GPT-4.5 (0.9%), and o1 (9.9%). The linked PDF and related arXiv paper discuss an earlier version of the agent but do not alter the posted table or caveat.

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 18.2s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official [BrowseComp page](https://openai.com/index/browsecomp/), the best-performing listed model is **Deep Research** with an accuracy of **51.5%**. The caveat attached to this result states: “*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*”

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 23.8s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The best-performing model listed on the official BrowseComp page is **Deep Research** with **51.5% accuracy**, and the caveat attached to this result is that the Deep Research model is trained on data that specifically teaches it to be good at BrowseComp tasks【https://openai.com/index/browsecomp/】.

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 20.8s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> On the official [BrowseComp page](https://openai.com/index/browsecomp/), the best-performing listed model is **Deep research***, which achieved an accuracy of **51.5%**. The caveat associated with this result is that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.

### browsecomp-best-caveat / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 44.7s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **OpenAI Deep Research achieves 51.5% accuracy on BrowseComp, the best score referenced across sources for models evaluated on the official benchmark.** - This performance is highlighted in initial sources and AI wiki summaries as the top result among tested systems, far exceeding human trainers (29.2% within 2 hours) [source 15](https://aiwiki.ai/wiki/BrowseComp). - The caveat is that it was "trained on BrowseComp tasks," as noted in search queries and secondary reports, potentially inflating performance relative to uncontaminated models [initial search plan]. - No official table on [OpenAI's BrowseComp page](https://openai.com/index/browsecomp) or paper explicitly lists comparative results or confirms the caveat; later leaderboards show higher scores for newer models like Claude Opus 4.6 (84%) on third-party sites, indicating evidence is mixed and stale for current standings.

### browsecomp-best-caveat / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 40.9s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **OpenAI Deep Research is the best-performing model listed on the official BrowseComp page, achieving 51.5% accuracy.** - This score comes from an early version of Deep Research, as shown scaling with test-time compute in the benchmark paper ([arXiv paper](https://arxiv.org/pdf/2504.12516)). - The caveat attached is that it was **trained on BrowseComp tasks**, potentially inflating its performance relative to uncontaminated models ([AI Wiki summary](https://aiwiki.ai/wiki/BrowseComp); search notes on training caveat). - Note: Official page snippets do not show the full table; later models like Google Deep Research Max reportedly reach 85.9%, but Deep Research 51.5% is cited as top in initial OpenAI context ([OpenAI page](https://openai.com/index/browsecomp)). Evidence on caveat is indirect from secondary sources.

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 17.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **OpenAI's early version of Deep Research is the best-performing listed model on the official BrowseComp page, achieving 51.5% accuracy.** This result comes with the caveat that it was trained on (or "note trained on") BrowseComp tasks/data, as highlighted in the initial sources and AI Wiki summary of the benchmark. The official page ([openai.com/index/browsecomp](https://openai.com/index/browsecomp)) and paper discuss scaling with test-time compute for an early Deep Research version, while later BrowseComp-Plus work notes contamination concerns in original evaluations. ([BrowseComp paper](https://arxiv.org/pdf/2504.12516); [BrowseComp-Plus paper](https://arxiv.org/html/2508.06600v1); [AI Wiki summary](https://aiwiki.ai/wiki/BrowseComp)).

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 42.7s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **OpenAI Deep Research (early version) is the best-performing listed model on the official page, at 51.5% accuracy.** **The attached caveat/note is that the result uses a model trained on BrowseComp tasks/data.** This is from the performance section and scaling figure on the April 2025 page (which shows accuracy scaling with test-time compute up to this level); human trainers achieved only ~29.2%. See [OpenAI BrowseComp page](https://openai.com/index/browsecomp) and [associated paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 46.7s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official [BrowseComp page](https://openai.com/index/browsecomp/), the best-performing listed model is **Deep Research**, with an accuracy of **51.5%**. The result carries an asterisked caveat stating: *“Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks”* ([OpenAI BrowseComp](https://openai.com/index/browsecomp/); [BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 93.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; no The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The best‑performing model listed on the official BrowseComp page is OpenAI’s Deep Research, with a reported accuracy of 51.5%【https://aiwiki.ai/wiki/BrowseComp】. The caveat is that this figure varies with browsing effort (test‑time compute), as Deep Research’s accuracy scales smoothly with the amount of computation allocated for web navigation【https://arxiv.org/pdf/2504.12516】.

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 92/100 (fail), duration 54.4s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The best-performing model listed on the official BrowseComp page is **Deep Research**, which achieved an accuracy of **51.5%** [Source 15]. A notable caveat attached to this result is that the model was **trained on BrowseComp tasks** [Source 11, Source 15].

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 8.8s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **Trainers used three main checks to ensure BrowseComp questions were sufficiently challenging, as described on the official OpenAI BrowseComp page:** - Verified existing models (GPT-4o with/without browsing, o1, early deep research) could not solve them. - Performed five simple searches to confirm answers were not on the first pages of search results.[https://openai.com/index/browsecomp/](source 3) - Aimed for tasks unsolvable by another person in 10 minutes; if a second trainer solved >40% of a batch, the creator revised them (partially enforced).[https://openai.com/index/browsecomp/](source 3) They created "inverted questions" from seeds with large search spaces for hard-to-find but easy-to-verify answers.

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 17.9s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure questions were sufficiently challenging, per the official BrowseComp page: - Verified that existing models like GPT-4o (with/without browsing), o1, and an early deep research model could not solve them.[^1] - Performed five simple searches to confirm the answer was not on the first pages of search engine results.[^1] - Aimed for tasks unsolvable by another person in under 10 minutes; a second trainer tested some, and creators revised if >40% were solved.[^1] They also used an "inverted question" method: starting from a fact or "seed," combining large-search-space characteristics to make answers hard to find but easy to verify.[^1] [^1]: [BrowseComp official page](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.1s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks:** - Verified that existing models (GPT-4o with/without browsing, o1, and an early deep research model) could not solve the questions. [Official BrowseComp page](https://openai.com/index/browsecomp/) - Performed five simple searches confirming the answer was not on the first pages of search results. [Official BrowseComp page](https://openai.com/index/browsecomp/) - Ensured another person could not solve it within ten minutes (not strictly enforced; a second trainer tested some questions). Creators whose tasks were solved >40% of the time were asked to revise them. [Official BrowseComp page](https://openai.com/index/browsecomp/) They encouraged an "inverted question" approach: start with a fact/seed, identify characteristics with large search space, and create questions hard to find but easy to verify.

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.7s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks on the official page:** - Verified GPT-4o (with and without browsing), o1, and an early deep research model could not solve them. - Performed **five simple searches** confirming the answer was absent from the first pages of results. - Created tasks unsolvable by another person in under ten minutes (not strictly enforced; a second trainer tested some, and creators whose tasks were solved **more than 40%** of the time were asked to revise). They encouraged starting with a fact then forming an “inverted” question that is hard to find but easy to verify. ([Official BrowseComp page](https://openai.com/index/browsecomp/))

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 17.4s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure questions were sufficiently challenging: - **Model unsolvability:** They verified that GPT‑4o (with and without browsing), o1, and an early version of the deep research model could not solve the problems. - **Search unavailability:** They performed five simple searches and confirmed the answer did not appear on any first page of search engine results. - **Human difficulty:** They aimed to create tasks another person could not solve within ten minutes; if a second trainer solved more than 40% of a creator’s questions, the creator was asked to revise them. Source: [OpenAI BrowseComp official page](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 17.3s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - Trainers confirmed that GPT‑4o (with and without browsing), o1, and an early deep‑research model could not solve the question. - They conducted five simple search‑engine queries and checked that the answer was not present on any of the first pages of results. - They designed tasks that another person could not solve within ten minutes; for a subset of questions a second trainer attempted to solve them, and if >40% of a creator’s questions were solved, the task was revised. All checks are described on the official BrowseComp page【https://openai.com/index/browsecomp/】.

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 87.0s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> To ensure BrowseComp questions were sufficiently challenging, trainers used the following three checks: * **Model Failure:** Trainers verified that existing models, including GPT-4o, OpenAI o1, and early versions of the deep research model, could not solve the questions [[OpenAI BrowseComp Page](https://openai.com/index/browsecomp/)]. * **Search Difficulty:** Trainers performed five simple searches to confirm that the answer was not readily available on any of the first pages of search results [[OpenAI BrowseComp Page](https://openai.com/index/browsecomp/)]. * **Human Difficulty:** Tasks were designed to be difficult enough that another person could not solve them within ten minutes; if a second trainer successfully solved more than 40% of a creator's questions, those tasks were required to be revised [[OpenAI BrowseComp Page](https://openai.com/index/browsecomp/)].

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast-non-reasoning
Score: 79/100 (fail), duration 95.5s
Facts: no Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers ensured BrowseComp questions were challenging by verifying they could not be solved with simple web searches (e.g., first few Google pages or five simple searches, per initial sources and summaries), required persistent navigation beyond basic retrieval, and were not solvable by a second human reviewer in 10 minutes.** [OpenAI simple-evals repo](https://github.com/openai/simple-evals) [BrowseComp paper summary](https://arxiv.org/abs/2504.12516) **Additional checks included unsolved by GPT-4o (browsing/no browsing), o1, and early Deep Research agents (solve rate <40% for simple methods).** [Ryan Lee analysis](https://www.ryanlee.ai/posts/browsecomp/) **Human baseline: trainers solved 29.2% (367/1255) with 86.4% accuracy on attempts, confirming >70% unsolved even by experts.** [Ryan Lee analysis](https://www.ryanlee.ai/posts/browsecomp/)

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast
Score: 79/100 (fail), duration 29.1s
Facts: no Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers ensured questions were challenging by requiring that answers could not be found using 5 Google searches in under 10 minutes total, and that solving required visiting and reasoning across at least 5 websites.** [BrowseComp paper](https://arxiv.org/html/2504.12516) **They also verified aggregate difficulty: no trainer solved more than 40% of questions using only 5 simple searches.** [BrowseComp paper](https://arxiv.org/html/2504.12516) **Additional criteria included short, indisputable answers supported by public evidence, time-invariance, and human solve rates (e.g., trainers solved ~29% given 2 hours).** [OpenAI BrowseComp page](https://openai.com/index/browsecomp)

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-non-reasoning
Score: 38/100 (fail), duration 25.3s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers ensured questions were sufficiently challenging by verifying that answers could not be found with five simple Google searches (to prevent leakage and easy retrieval) and by confirming the questions required persistent, multi-hop web navigation for entangled information.** They collected data via a human QA paradigm with additional verification steps for short, verifiable answers supported by evidence. This process made BrowseComp hard for models (e.g., GPT-4o with browsing ~1.9%) yet easy to grade. ([OpenAI BrowseComp announcement](https://openai.com/index/browsecomp)) ([arXiv paper](https://arxiv.org/html/2504.12516)) ([PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf))

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 16.0s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks to ensure questions were sufficiently challenging (from the official OpenAI BrowseComp page):** - Verified that existing models (GPT-4o with/without browsing, o1, and an early deep research model) could not solve them. - Performed **five simple searches** and confirmed the answer was not available on the first pages of search engine results. - Designed tasks so another person could not solve them within **ten minutes** (not strictly enforced; a second trainer tested a subset, and creators whose tasks were solved >40% of the time were asked to revise). These checks, combined with an "inverted" question-creation process starting from a seed fact and adding rare characteristics, produced hard-to-find but easy-to-verify questions. ([Official BrowseComp page](https://openai.com/index/browsecomp))

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 79/100 (fail), duration 184.0s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Trainers used three checks to ensure BrowseComp questions were sufficiently challenging: they verified that GPT-4o (with and without browsing), OpenAI o1, and an early Deep Research could not solve the problem; they performed five simple Google searches and confirmed the answer was not readily available on the first pages of results; and they aimed to create tasks that another person could not solve within ten minutes, revising any tasks that were solved more than 40% of the time ([BrowseComp paper, Section 2.1](https://arxiv.org/html/2504.12516)).

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 30/100 (fail), duration 74.7s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Trainers checked that each question’s answer could not be found with five straightforward web searches (or five Google searches) to prevent leakage and ensure the questions were sufficiently challenging【https://www.sciencestack.ai/paper/2504.12516v1】. --- **Sources used** - ScienceStack summary of the BrowseComp paper: “checks such as five Google searches to prevent leakage.” (Note: The primary source is the Open AI BrowseComp paper (arXiv:2504.12516); the above snippet is taken from a secondary source that directly quotes the paper.)

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 38/100 (fail), duration 60.4s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> To ensure BrowseComp questions were sufficiently challenging, trainers used checks to verify that answers could not be found using **five straightforward web searches** ([Source 10](https://www.sciencestack.ai/paper/2504.12516v1), [Source 16](https://superintelligencenews.com/companies/openai/openai-browsecomp-ai-benchmark/)). This process was implemented to prevent information leakage and ensure the questions required persistent, multi-step navigation to solve.

### gaia-counts / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 57.9s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** This is stated directly on the official Meta AI publication page: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while [retaining answers to 300 of them to power a leader-board](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)." The claim is corroborated verbatim in the [arXiv paper abstract](https://arxiv.org/abs/2311.12983). The leaderboard is hosted at [huggingface.co/gaia-benchmark](https://huggingface.co/gaia-benchmark), though page fetches did not specify evaluation set size.

### gaia-counts / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 12.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** This is stated directly in the official [arXiv publication page](https://arxiv.org/abs/2311.12983) and [Meta AI research publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/): "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board." The remaining 166 answers form a public development set.

### gaia-counts / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 7.9s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** - The official paper states: "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board available at https://huggingface.co/gaia-benchmark." ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983)) - This is confirmed verbatim on the official Meta GAIA publication page. ([Meta Research](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) (The Hugging Face benchmark page does not repeat the exact numbers but hosts the leaderboard as described.)

### gaia-counts / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 21.4s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions; answers to 300 were retained for the leaderboard (with the rest as a development/validation set).** - Official arXiv paper (and Meta publication page) states: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board available at https://huggingface.co/gaia-benchmark.” ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983), [Meta GAIA page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)). These primary sources are consistent across the official publication pages.

### gaia-counts / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 40.2s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> Using GAIA's methodology, the authors devised **466 questions** and their answers. They released the questions while retaining answers to **300** of them to power the public leaderboard ([Meta official publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [arXiv:2311.12983](https://arxiv.org/abs/2311.12983)).

### gaia-counts / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 10.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA devised 466 questions and retained answers to 300 of them to power the leaderboard【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-counts / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 34.8s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> Based on the [official GAIA publication page from Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/), the benchmark details are as follows: * **Questions devised:** 466 questions. * **Answers retained for the leaderboard:** 300 answers.

### gaia-counts / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 6.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** The official Meta AI publication page states: "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) This is corroborated across the arXiv paper and ICLR version. [arXiv:2311.12983](https://arxiv.org/pdf/2311.12983) [ICLR 2024 paper](https://openreview.net/attachment?id=fibxvahvs3&name=pdf)

### gaia-counts / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 17.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and their answers, releasing the questions while retaining answers to 300 of them to power the leaderboard.** This is stated directly in the official Meta publication page abstract: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." [The arXiv preprint](https://arxiv.org/pdf/2311.12983) and [ICLR paper](https://openreview.net/attachment?id=fibxvahvs3&name=pdf) confirm the same numbers.

### gaia-counts / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.1s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions.** **Answers to 300 of them were retained for the leaderboard.** From the official GAIA publication page: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." [GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) This is corroborated verbatim across the arXiv paper and ICLR version.

### gaia-counts / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 13.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions; answers to 300 were retained for the leaderboard.** - The official GAIA publication page states: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark.” ([GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) - This matches the arXiv paper and ICLR proceedings. ([arXiv:2311.12983](https://arxiv.org/pdf/2311.12983)) (The Hugging Face leaderboard and dataset use the private 300-question test set for evaluation.)

### gaia-counts / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 23.1s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA devised **466 questions**, and answers to **300** of them were retained to power the leaderboard ([Meta official publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [ICLR 2024 proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html)).

### gaia-counts / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 18.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> GAIA devised 466 questions and retained 300 answers for the leaderboard, as stated in the official Meta GAIA publication page【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-counts / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 18.4s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA devised 466 questions and retained answers to 300 of them to power its leaderboard ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)).

### gaia-capability-gap / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.3s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and general tool-use proficiency, as stated on the official Meta AI publication page.** [GAIA: a benchmark for general AI assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) **Human respondents obtain 92% accuracy, versus 15% for GPT-4 equipped with plugins.** [GAIA: A Benchmark for General AI Assistants](https://huggingface.co/papers/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires real-world questions that test fundamental abilities including reasoning, multi-modality handling, web browsing, and general tool-use proficiency.** **The official publication reports human respondents scoring 92% accuracy versus 15% for GPT-4 equipped with plugins.** [GAIA abstract on Meta AI research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [GAIA paper on arXiv](https://arxiv.org/abs/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 12.4s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and generally tool-use proficiency.** ([Official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) **Humans obtain 92% vs. 15% for GPT-4 equipped with plugins.** ([Official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [arXiv:2311.12983](https://arxiv.org/abs/2311.12983)) These exact figures and abilities are stated verbatim in the abstract of the official GAIA paper on Meta's AI research page and the primary arXiv/Hugging Face versions.

### gaia-capability-gap / parallel / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 16.6s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and general tool-use proficiency.** **Humans score 92% vs. 15% for GPT-4 equipped with plugins.** These are stated directly on the official Meta GAIA publication page (https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/), which matches the arXiv abstract (https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 92/100 (fail), duration 11.4s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> According to Meta’s official publication page, GAIA requires fundamental abilities such as **reasoning, multi-modality handling, web browsing, and generally tool-use proficiency**. The benchmark reports that **human respondents score 92%** versus **15% for GPT-4 equipped with plugins**.

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 14.1s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA requires reasoning, multi-modality handling, web browsing, and generally tool-use proficiency【https://arxiv.org/abs/2311.12983】. Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins scores only 15% on the benchmark【https://arxiv.org/abs/2311.12983】.

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 26.8s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA requires a set of fundamental abilities including [reasoning, multi-modality handling, web browsing, and general tool-use proficiency](https://arxiv.org/abs/2311.12983). Reported scores show that [human respondents obtain 92%](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) accuracy, while [GPT-4 equipped with plugins scores only 15%](https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.1s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency.** [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) **Official scores: humans achieve 92%, while GPT-4 equipped with plugins scores 15%.** [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)

### gaia-capability-gap / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.6s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities like reasoning, multi-modality handling, web browsing, and tool-use proficiency.** **Humans score 92% accuracy, versus 15% for GPT-4 equipped with plugins.** ([GAIA official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/))

### gaia-capability-gap / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 7.4s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency.** ([Official Meta GAIA page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) **Humans score 92%; GPT-4 equipped with plugins scores 15%.** ([Official Meta GAIA page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) These real-world questions are conceptually simple for humans but challenging for advanced AIs, with a leaderboard at https://huggingface.co/gaia-benchmark.

### gaia-capability-gap / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 17.8s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency.** **Humans achieve 92% accuracy; GPT-4 equipped with plugins achieves 15%.** These exact claims appear on the official GAIA publication page ([AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) and the ICLR 2024 paper it links to. The benchmark uses conceptually simple real-world questions that test these fundamental abilities, with a 300-question private test set powering the leaderboard at [huggingface.co/gaia-benchmark](https://huggingface.co/gaia-benchmark).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 20.8s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> According to Meta’s official GAIA publication page, the benchmark requires fundamental abilities such as **reasoning, multi-modality handling, web browsing, and generally tool-use proficiency**. On GAIA’s questions, human respondents score **92%** versus **15%** for GPT-4 equipped with plugins. ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/))

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 13.4s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> - GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency. - Human respondents score 92% accuracy, while GPT-4 equipped with plugins scores 15%【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 28.5s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA requires a set of fundamental abilities, including: * [Reasoning](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) * [Multi-modality handling](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) * [Web browsing](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) * [Tool-use proficiency](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) Reported scores show that [human respondents obtain 92%](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) accuracy, compared to [15% for GPT-4 equipped with plugins](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/).

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 12.4s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% human accuracy) yet challenging for AIs (15% for GPT-4 with plugins), focusing on fundamental abilities like reasoning, multi-modality, web browsing, and tool use.** [[Official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)] **This departs from the trend of benchmarks seeking tasks ever more difficult for humans (e.g., professional skills in law or chemistry where LLMs now outperform humans), instead emphasizing AI robustness matching average human performance on simple but executionally complex tasks.** [[arXiv paper HTML](https://ar5iv.labs.arxiv.org/html/2311.12983)] **GAIA's first principle explicitly goes against increasingly human-difficult benchmarks or purely textual/artificial environments by prioritizing varied, r...

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast
Score: 85/100 (fail), duration 18.5s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA targets conceptually simple, real-world questions that are potentially tedious for humans (92% accuracy) but challenging for AIs (e.g., 15% for GPT-4 with plugins), emphasizing fundamental abilities like reasoning, multi-modality, web browsing, and tool use over specialized skills.** ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983); [ar5iv](https://ar5iv.labs.arxiv.org/html/2311.12983)) **This departs from benchmarks that escalate task difficulty for humans (e.g., professional skills in law or chemistry, where LLMs now outperform humans) or rely on artificial/textual environments, instead prioritizing AI robustness matching average human performance on varied, interpretable tasks.** ([openreview](https://openreview.net/forum?id=fibxvahvs3); [Meta AI](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants))

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 11.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA targets questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AI (15% for GPT-4 with plugins), focusing on fundamental abilities like reasoning, multi-modality, web browsing, and tool use in real-world settings.** [GAIA paper (arXiv)](https://arxiv.org/abs/2311.12983) [Meta official page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) **This departs from the trend of benchmarks that target tasks ever more difficult for humans (e.g., complex professional skills in law or chemistry where LLMs now outperform humans), as GAIA's first principle prioritizes "conceptually simple although potentially tedious for humans" tasks that test robustness like an average human.** [GAIA HTML version](https://ar5iv.labs.arxiv.org/html/2311.12983) **The philosophy posits that AGI requires systems exhibiting similar robus...

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 28.8s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA targets questions conceptually simple for humans (92% accuracy) yet challenging for current AI (15% for GPT-4 with plugins), focusing on real-world fundamental abilities like reasoning, multi-modality, web browsing, and tool use.** - It departs from the trend of benchmarks that target tasks *ever more difficult for humans*, instead positing that AGI requires systems with robustness similar to the average human on such questions. ([GAIA official publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)) This is drawn directly from the page's abstract, which aligns with the arXiv paper's principles.

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 37.1s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> According to Meta’s official GAIA publication, the benchmark’s philosophy deliberately departs from the prevailing trend of targeting tasks that are ever more difficult for humans ([Meta AI Research](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)). Instead, GAIA poses real-world questions that are conceptually simple for humans—who score 92%—yet challenging for advanced AI, with GPT-4 equipped with plugins achieving only 15%, emphasizing fundamental abilities like reasoning, multi-modality handling, and tool use over specialized professional skills ([arXiv paper](https://ar5iv.labs.arxiv.org/html/2311.12983)). The authors posit that Artificial General Intelligence hinges on a system exhibiting similar robustness to the average human on such everyday questions.

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 11.5s
Facts: yes GAIA questions are conceptually simple for humans; no GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA’s benchmark philosophy centers on real‑world questions that are conceptually simple for humans but test fundamental AI abilities like reasoning, multi‑modality, web browsing, and tool use, rather than chasing tasks that are ever more difficult for humans. This contrasts with the trend of creating benchmarks where LLMs surpass human performance on specialized, professional‑skill tasks (e.g., law or chemistry); GAIA argues that true AGI requires human‑level robustness on everyday questions, not superhuman skill on increasingly hard ones【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 69/100 (fail), duration 21.2s
Facts: no GAIA questions are conceptually simple for humans; no GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> * GAIA departs from the current trend of targeting AI benchmarks that are [ever more difficult for humans](https://arxiv.org/abs/2311.12983), such as those requiring specialized professional skills in fields like law or chemistry. * Instead, GAIA targets tasks that are [conceptually simple—though potentially tedious—for humans](https://ar5iv.labs.arxiv.org/html/2311.12983) and rooted in the real world. * This philosophy is based on the premise that AGI hinges on a system's ability to [exhibit similar robustness to the average human](https://arxiv.org/abs/2311.12983) on such questions, a gap demonstrated by human respondents scoring 92% versus 15% for GPT-4 equipped with plugins ([Meta AI Research](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)).

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.1s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), contrasting with the trend of creating tasks ever more difficult for humans, such as specialized professional skills in law or chemistry where LLMs now outperform people.[^1][^2][^5]** **Instead of escalating human difficulty, GAIA posits that AGI requires systems to match average human robustness on these fundamental tasks involving reasoning, multi-modality, web browsing, and tool use.[^1][^2][^5]** [^1]: [GAIA arXiv preprint abstract](https://arxiv.org/pdf/2311.12983) [^2]: [GAIA ICLR 2024 paper abstract](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) [^5]: [Meta AI official GAIA publication page](https://ai.meta.com/research/publication...

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 19.7s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), emphasizing robustness in reasoning, multi-modality, web browsing, and tool use.** [Official Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [ICLR 2024 conference paper](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) This departs from the trend of designing benchmarks with tasks ever more difficult for humans, such as professional skills in law or chemistry where LLMs now outperform humans, as GAIA posits AGI requires human-like reliability on everyday tasks. [arXiv preprint](https://arxiv.org/pdf/2311.12983)

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 17.2s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets conceptually simple real-world questions for humans (92% accuracy) that remain challenging for advanced AIs (e.g., 15% for GPT-4 with plugins), contrasting with trends that push tasks ever more difficult for humans.** - It prioritizes robustness on everyday multi-step tasks requiring reasoning, multi-modality, web browsing, and tool use, positing that AGI depends on matching average human performance on such questions. This departs from benchmarks focused on professional skills (e.g., law, chemistry) where LLMs now outperform humans. ([GAIA paper](https://arxiv.org/pdf/2311.12983), [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/))

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 20.4s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's philosophy focuses on conceptually simple real-world questions for humans (92% accuracy) that require reasoning, multi-modality, web browsing, and tool use—yet challenge advanced AIs (e.g., 15% for GPT-4 with plugins).** - This reverses the trend of benchmarks that target tasks *ever more difficult for humans*, where LLMs now outperform humans on professional skills like law or chemistry. - Instead, GAIA posits that AGI depends on matching average human robustness on such questions. ([Official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [arXiv:2311.12983](https://arxiv.org/pdf/2311.12983))

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 32.8s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA’s philosophy deliberately departs from benchmarks that target tasks ever more difficult for humans—such as professional exams in law or chemistry, where LLMs already outperform people. Instead, it focuses on real-world questions that are **conceptually simple for humans** (92% accuracy) yet remain **challenging for advanced AI** (15% for GPT-4 with plugins), requiring fundamental abilities like reasoning, web browsing, and tool use. Its authors posit that the advent of AGI hinges not on mastering increasingly esoteric expert domains, but on a system’s capability to exhibit the same robustness as the average human on these everyday problems [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/).

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 10.9s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> GAIA’s philosophy is to benchmark AI assistants on real‑world questions that are **conceptually simple for humans** (e.g., 92% human accuracy) yet challenging for advanced AIs, in direct contrast to the prevailing trend of designing benchmarks that target tasks **ever more difficult for humans**【https://arxiv.org/pdf/2311.12983】. This approach measures whether AI systems exhibit the same robustness as an average human on everyday tasks, rather than pursuing superhuman difficulty.

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 39.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> * GAIA's philosophy departs from the trend of targeting tasks that are increasingly difficult for humans (such as specialized professional skills in law or chemistry) by instead focusing on questions that are **conceptually simple for humans** but **challenging for advanced AI** ([GAIA: A Benchmark for General AI Assistants](https://arxiv.org/pdf/2311.12983)). * The benchmark posits that the achievement of Artificial General Intelligence (AGI) hinges on a system's capability to exhibit the same level of robustness as an average human does on such tasks ([GAIA: A Benchmark for General AI Assistants](https://arxiv.org/pdf/2311.12983)). * This approach highlights a significant performance gap, evidenced by human respondents obtaining a 92% success rate compared to only 15% for GPT-4 equipped with plugins ([GAIA: A Benchmark for General AI Assistants](https://arxiv.org/pdf/2311.12983)).

### flue-start-commands / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 59.4s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node --env .env` is the fastest path as it builds the workspace, starts a Node.js server on port 3583, and enables hot reload on changes.** [Flue Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) **`flue dev --target cloudflare --env .env` is also supported for Cloudflare Workers, running a local dev server via Wrangler on port 3583.** [Flue Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) **`flue run` supports `--target node` for one-shot CLI invocations of agents (e.g., `npx flue run translate --target node ...`), but not Cloudflare targets.** [Flue Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) [Flue Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-start-commands / parallel / xai/grok-4-1-fast
Score: 71/100 (fail), duration 78.5s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` and `flue dev --target cloudflare` are shown as preferred targets, starting a long-running watch-mode dev server (default port 3583) where edits trigger rebuilds and reloads.**[^1] **`flue run` supports the `node` target (e.g., `npx flue run hello --target node --id test-1 --payload '{"name": "World"}'`), building the workspace, invoking the agent once via a temporary server, streaming progress to stderr, and outputting JSON results to stdout—ideal for fast iteration or CI.**[^1][^2]

### flue-start-commands / parallel / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 17.6s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is preferred** (fastest path with watcher, auto-reload on port 3583). **`flue run` supports only `--target node`** (one-shot CLI invocation without starting a server; Cloudflare target uses `flue dev --target cloudflare` for local testing instead). See: [Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) ("For local development, `flue dev --target node --env .env` is the fastest path") and [Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) ("`flue run` starts the generated server in Node.js, so it only supports `--target node`"). (The requested https://flueframework.com/start.md aligns with these primary docs.)

### flue-start-commands / parallel / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 55.2s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is the preferred/fastest target** (builds, watches for changes, starts server on port 3583). **`flue dev --target cloudflare`** is also supported for Workers-local testing. **`flue run` supports only the `node` target** (it starts the generated Node server; use `flue dev --target cloudflare` for Cloudflare equivalents). See: [Deploy Agents on Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [Deploy Agents on Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) (primary guides referenced from [flueframework.com/start.md](https://flueframework.com/start.md)).

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 79/100 (fail), duration 27.6s
Facts: no Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> For local development, `flue dev` supports both `--target node` and `--target cloudflare`; the Node target starts a watched server on port 3583, while the Cloudflare target runs via Wrangler on the same port. `flue run` only supports `--target node` because it starts the generated server in Node.js, so Cloudflare builds must be tested locally with `flue dev --target cloudflare` instead. ([Deploy Agents on Node.js](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-node.md); [Deploy Agents on Cloudflare](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md))

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 26.7s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For local development, the preferred Flue dev command targets are `flue dev --target node` (Node.js dev server) and `flue dev --target cloudflare` (Cloudflare Workers dev server via wrangler)【https://github.com/withastro/flue/tree/main/packages/cli】. The `flue run` command supports the `--target node` option for local testing【https://github.com/withastro/flue/blob/main/docs/deploy-gitlab-ci.md】.

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 33/100 (fail), duration 55.9s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For local development, the preferred `flue dev` targets are: * `--target node`: Described as the "fastest path" for local development [[docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)]. * `--target cloudflare`: Used for local development with Cloudflare Workers [[docs/deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)]. The `flue run` command supports the same targets, specifically `node` and `cloudflare` [[GitHub README](https://github.com/withastro/flue)].

### flue-start-commands / exa / xai/grok-4-1-fast-non-reasoning
Score: 29/100 (fail), duration 31.2s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **For local development, `flue dev --target node` is preferred as the primary example in Flue's documentation, providing a long-running watch-mode dev server on port 3583 with automatic rebuilds on edits; `--target cloudflare` is also supported but requires `wrangler`.** *[Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)* **`flue run` supports the `--target node` option (as shown in examples: `flue run --target node --id`), enabling one-shot production-style agent invocations suitable for CI/scripted use.** *[Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)*

### flue-start-commands / exa / xai/grok-4-1-fast
Score: 70/100 (fail), duration 58.0s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **For local development, `flue dev --target node` is shown first and requires no extra dependencies, while `flue dev --target cloudflare` also works but requires `wrangler`.** [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) **`flue run` supports `--target node`.** [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)

### flue-start-commands / exa / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 19.6s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (or `--target cloudflare`) is preferred** as it builds the workspace, starts a server on port 3583 with watch/reload, and loads `--env .env`. **`flue run` supports only `--target node`** (it runs the generated server or invokes an agent directly via CLI); `flue dev --target cloudflare` provides the equivalent local testing for Cloudflare builds. See [deploy-node.md](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-node.md) and [deploy-cloudflare.md](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md) (fetched from https://flueframework.com/start.md guidance).

### flue-start-commands / exa / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 34.8s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is the fastest/preferred path** (`flue dev --target cloudflare` is also supported for Worker testing). **`flue run` supports only `--target node`** (it starts the generated Node server; Cloudflare uses `flue dev` instead due to Worker-only modules). - See: “For local development, `flue dev --target node --env .env` is the fastest path” and “`flue run` accepts the same `--env` flag” in the [Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). - See: “`flue run` starts the generated server in Node.js, so it only supports `--target node`. Cloudflare builds use Worker-only runtime modules — `flue dev --target cloudflare` is the equivalent” in the [Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). (These match the targets and local/dev flows referenced in the fe...

### flue-start-commands / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 70/100 (fail), duration 12.6s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For local development, prefer **`flue dev --target node`** or **`flue dev --target cloudflare`**, which starts a dev server on port 3583 with watch, rebuild, and reload. **`flue run` only supports `--target node`**; `flue run --target cloudflare` is not supported. [Flue start.md](https://flueframework.com/start.md)

### flue-start-commands / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 62/100 (fail), duration 239.9s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: no; fetch: no

Answer excerpt:

> - For local development, the preferred Flue dev command targets are `flue dev --target node` and `flue dev --target cloudflare`【https://flueframework.com/start.md】. - `flue run` only supports `--target node`; `--target cloudflare` is not supported【https://flueframework.com/start.md】.

### flue-start-commands / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 25/100 (fail), duration 59.6s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: no

Answer excerpt:

> For local development, the preferred `flue dev` command targets are `node` and `cloudflare` [https://www.sourcepulse.org/projects/29042645]. The `flue run` command supports the `node` target [https://www.sourcepulse.org/projects/29042645].

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 18.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` only supports `--target node` as it starts the generated server in Node.js.[^3][^1] For local Cloudflare development, use `flue dev --target cloudflare`, which builds the workspace and starts a Cloudflare Workers dev server (via wrangler) on port 3583.[^3][^2] `flue build` supports both `--target node` and `--target cloudflare` for producing deployable artifacts.[^1] [^1]: [Flue GitHub repo CLI examples](https://github.com/withastro/flue) [^2]: [flue dev --target cloudflare examples](https://github.com/withastro/flue/tree/main/packages/cli) [^3]: [Deploy Cloudflare docs exact quote](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 19.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; `flue run` only supports [`--target node`](https://github.com/withastro/flue), as it starts the generated server in Node.js.** **For local Cloudflare development, use [`flue dev --target cloudflare`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), which builds the workspace and starts a Cloudflare Workers dev server (via Wrangler) on port 3583.** [`flue build --target cloudflare`](https://github.com/withastro/flue) is for producing deployable artifacts to `./dist`.

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 14.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` starts the generated server in Node.js, so it only supports `--target node` (example: `flue run hello --target node`). For local Cloudflare development use `flue dev --target cloudflare` (it builds the workspace and starts a Cloudflare Workers dev server via wrangler on port 3583). `flue build --target cloudflare` produces the deployable Workers + Durable Objects artifact. ([Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md))

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 26.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` starts the generated server in Node.js and only supports `--target node` (example: `flue run hello --target node`). For local Cloudflare development use `flue dev --target cloudflare` (it starts a Cloudflare Workers dev server via wrangler on port 3583 with hot reloading). See the official [Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and [CLI examples in the repo](https://github.com/withastro/flue).

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 15.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is **not** supported. `flue run` only supports `--target node` because it starts the generated server in Node.js. For local Cloudflare development, use `flue dev --target cloudflare` instead, which starts a Cloudflare Workers dev server via wrangler on port 3583. - `flue run` supports only `--target node` ([Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - Local Cloudflare development: `flue dev --target cloudflare` ([Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - `flue build --target cloudflare` is used for production Cloudflare Workers + Durable Objects deployment ([withastro/flue README](https://github.com/withastro/flue))

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 12.0s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> `flue run --target cloudflare` is not supported; `flue run` only works with `--target node` (e.g., `flue run hello --target node --id test-1`). For local Cloudflare development, use `flue dev --target cloudflare` (which starts a Cloudflare Workers dev server via Wrangler). `flue build --target cloudflare` is supported for producing deployable Cloudflare Workers artifacts. Sources: - Flue README shows `flue run` with `--target node` and states Cloudflare builds are done with `flue build --target cloudflare`. - Cloudflare deploy guide explicitly notes "`flue run` starts the generated server in Node.js, so it only supports `--target node`" and recommends `flue dev --target cloudflare` for local testing.

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 95/100 (fail), duration 31.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> No, `flue run --target cloudflare` is not supported; `flue run` only supports the `--target node` command, as it starts a generated server in Node.js [https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). For local Cloudflare development and testing, you should use `flue dev --target cloudflare` [https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md).

### flue-cloudflare-negative / exa / xai/grok-4-1-fast-non-reasoning
Score: 70/100 (fail), duration 24.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; initial sources and searches show no evidence of this command working, while search snippets explicitly support it only for `flue dev`.** - For local Cloudflare development, use `flue dev --target cloudflare` (requires `wrangler` installed as peer dependency), which runs a watch-mode dev server on port 3583.[[Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)] - `flue run` supports `--target node` for one-shot production-style invocations (build + single agent call, used in CI); `flue dev` supports both `node` and `cloudflare` for long-running development.[[Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)][[Flue deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)]

### flue-cloudflare-negative / exa / xai/grok-4-1-fast
Score: 54/100 (fail), duration 41.8s
Facts: yes flue run --target cloudflare is not supported; no Local Cloudflare development should use flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** Initial sources show no evidence of Cloudflare as a `flue run` target; instead, Cloudflare deployment uses [`wrangler`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) after installing `@flue/cli wrangler` and defining agents in `.flue/agents/`. For local Cloudflare development, use `wrangler dev` with a `wrangler.toml` configured for your Flue Worker project ([Cloudflare Workers docs](https://developers.cloudflare.com/workers/wrangler/commands/#dev)). `flue run` supports Node.js for local server development, as detailed in [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), e.g., `flue run triage` to start a webhook server.

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 13.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` starts the generated server in Node.js and **only supports `--target node`**. ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - For local Cloudflare development, use **`flue dev --target cloudflare`** (builds the workspace then starts a Cloudflare Workers dev server via wrangler on port 3583 with watch mode). ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - Production Cloudflare deployment uses `flue build --target cloudflare` followed by `npx wrangler deploy`. ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md); [start.md](https://flueframework.com/start.md)) (Initial sources and fetched primary docs confirm this exact behavior; `flue dev --target cloudflare` is the documented lo...

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-reasoning
Score: 49/100 (fail), duration 35.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; no flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - For local Cloudflare development, use **`flue dev --target cloudflare`** (along with Wrangler). - **`flue run`** supports the **`node`** target for running agents as a Node.js server. See [Flue Cloudflare deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) (uses `@flue/cli` + `wrangler`) and [Flue Node.js deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 70/100 (fail), duration 19.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> `flue run --target cloudflare` is **not supported**. The `flue run` command only supports `--target node` ([`flueframework.com/start.md`](https://flueframework.com/start.md)). For local Cloudflare development, use `flue dev --target cloudflare`, which runs a dev server on port `3583`, watches for changes, and reloads automatically ([`flueframework.com/start.md`](https://flueframework.com/start.md)).

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 87/100 (fail), duration 32.8s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: no

Answer excerpt:

> `flue run --target cloudflare` is not supported. For local Cloudflare development, use `flue dev --target cloudflare`. `flue run` only supports `--target node`.【https://flueframework.com/start.md】

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 33/100 (fail), duration 72.2s
Facts: no flue run --target cloudflare is not supported; no Local Cloudflare development should use flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> `flue run --target cloudflare` is not a supported command; for local Cloudflare development, you should use `wrangler dev` ([Cloudflare Workers docs](https://developers.cloudflare.com/workers/local-development)). According to the Flue documentation, `flue dev` is used for development (watch mode), while `flue run` is the CLI for running agents ([SourcePulse](https://www.sourcepulse.org/projects/29042645)). While Flue is runtime-agnostic and can be deployed to targets such as Node.js and Cloudflare, the `flue run` command itself is primarily used to execute specific agents ([withastro/flue README](https://github.com/withastro/flue/blob/main/README.md)).

### flue-model-selection / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 8.4s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - **Suggested model IDs**: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6`.[https://flueframework.com/start.md] - **Different requested model**: Check [`https://flueframework.com/models.json`](https://flueframework.com/models.json) for the best model ID.[https://flueframework.com/start.md] - **If unavailable**: Ask before substituting another model; don't continue without a model ID.[https://flueframework.com/start.md]

### flue-model-selection / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.2s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6`. **Different requested models should be checked** in [`https://flueframework.com/models.json`](https://flueframework.com/models.json). **If unavailable,** ask before substituting; do not continue without a valid model ID. [Flue Start Guide](https://flueframework.com/start.md)

### flue-model-selection / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 15.4s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **Check https://flueframework.com/models.json for a different requested model.** **If the requested model is unavailable, ask before substituting another model (and do not continue until you have a model ID).** [Flue start guide](https://flueframework.com/start.md)

### flue-model-selection / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.6s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **Different requested models should be checked** at https://flueframework.com/models.json. **If the requested model is unavailable, ask before substituting** (and do not continue until a valid model ID is confirmed). ([Flue start guide](https://flueframework.com/start.md))

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 13.9s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: [`anthropic/claude-sonnet-4-6`](https://flueframework.com/start.md), [`anthropic/claude-opus-4-7`](https://flueframework.com/start.md), [`openai/gpt-5.5`](https://flueframework.com/start.md), and [`openrouter/moonshotai/kimi-k2.6`](https://flueframework.com/start.md). If the user wants a different model, check [`https://flueframework.com/models.json`](https://flueframework.com/models.json). If the requested model is unavailable, the guide instructs to ask before substituting another model and not to continue until you have a model ID.

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 13.2s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6` (latest Sonnet), `anthropic/claude-opus-4-7` (latest Opus), `openai/gpt-5.5` (GPT‑5.5), and `openrouter/moonshotai/kimi-k2.6` (latest Kimi)【https://flueframework.com/start.md】. If you want a different provider or model, consult the list at `https://flueframework.com/models.json` to find the best model ID【https://flueframework.com/start.md】. If the requested model is unavailable, you should ask before substituting another model and not continue until you have a confirmed model ID【https://flueframework.com/start.md】.

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 74/100 (fail), duration 73.5s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; no Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> The Flue start guide suggests the following model IDs: `anthropic/claude-sonnet-4-6` and `openrouter/moonshotai/kimi-k2.6`. If a different model is requested, it should be checked in the [models.json](https://flueframework.com/models.json) file. If the requested model is unavailable, the framework will ask for permission before substituting it with a different model.

### flue-model-selection / exa / xai/grok-4-1-fast-non-reasoning
Score: 74/100 (fail), duration 46.5s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; no Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **The available evidence is thin and contradictory on the exact Flue start guide at https://flueframework.com/start.md, as fetch attempts failed and searches yielded no direct content.** - Flue examples suggest model IDs like `openai/gpt-5.5` [in deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and `anthropic/claude-sonnet-4-6` [on flueframework.com homepage](https://flueframework.com/), with search snippets mentioning claude, sonnet, opus, gpt-5.5, kimi-k2.6, and models.json in related contexts. - Different requested models should be checked in `models.json` [per search association with openclaude configs](https://github.com/Gitlawb/openclaude/blob/main/src/utils/model/configs.ts). - If the requested model is unavailable, ask before substituting [per initial search snippet on Flue start guide policy](initial sources query).

### flue-model-selection / exa / xai/grok-4-1-fast
Score: 74/100 (fail), duration 72.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; no Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **The Flue start guide at https://flueframework.com/start.md could not be fetched (tool errors and no matching content found in searches or repo).** - Available Flue docs suggest exact model IDs like **`anthropic/claude-sonnet-4-6`** ([Flue homepage example](https://flueframework.com/)) and **`openai/gpt-5.5`** ([deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)). - No direct evidence for `claude`, `opus`, `kimi-k2.6`, `models.json` checks, or "ask before substituting" in Flue sources; these appear in related projects like openclaude configs or Claude Code aliases ([configs.ts](https://github.com/Gitlawb/openclaude/blob/main/src/utils/model/configs.ts), [model-config.md](https://code.claude.com/docs/en/model-config.md)). - Evidence is thin and indirect; no primary Flue start guide confirms the details.

### flue-model-selection / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 11.9s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. [Flue start guide](https://flueframework.com/start.md) **Check a different requested model in `https://flueframework.com/models.json`.** [Flue start guide](https://flueframework.com/start.md) **If the requested model is unavailable, ask before substituting another model** (and do not continue until you have a valid model ID). [Flue start guide](https://flueframework.com/start.md) These instructions appear in the "Gather Context" section for scaffolding agents with `init({ model: '<exact model id>' })`.

### flue-model-selection / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 33.2s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6`. **Check a different requested model in https://flueframework.com/models.json.** **If the requested model is unavailable, ask before substituting** (do not continue until you have a valid model ID). ([Flue start guide](https://flueframework.com/start.md))

### flue-model-selection / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 70/100 (fail), duration 25.9s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6` ([Flue Start Guide](https://flueframework.com/start.md)). If the user wants a different model, check `https://flueframework.com/models.json` for the best model ID. If the requested model is unavailable, ask before substituting another model and do not continue until you have a valid model ID.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 62/100 (fail), duration 21.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: no flueframework.com; citation: no; fetch: no

Answer excerpt:

> - The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`【https://flueframework.com/start.md】. - If a different model is desired, consult the model list at `https://flueframework.com/models.json`【https://flueframework.com/start.md】. - If the requested model is unavailable, ask before substituting another model and do not proceed until a model ID is confirmed【https://flueframework.com/start.md】.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 29/100 (fail), duration 81.2s
Facts: no Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; no Suggested model includes openai/gpt-5.5; no Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> The Flue start guide suggests the following exact model IDs: `claude-3-5-sonnet`, `claude-3-opus`, `gpt-4o`, and `gpt-4o-mini`. If a different model is requested, it should be checked in the [`models.json`](https://github.com/withastro/flue/blob/main/models.json) file. If the requested model is unavailable, the system should ask the user for permission before substituting it with a different model.

### flue-layout-rules / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 13.8s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout: `./agents/` and `./roles/`.** **For an existing non-empty directory, use the `.flue` layout: `./.flue/agents/` and `./.flue/roles/`.** Flue CLI prioritizes `./.flue/` if it exists, otherwise falls back to `./`; this matches the inference rules in the creation skill for avoiding conflicts with existing files. [https://flueframework.com/start.md](https://flueframework.com/start.md), [https://github.com/withastro/flue/blob/main/AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md), [https://github.com/withastro/flue/blob/main/docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-layout-rules / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.9s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout with `agents/` and `roles/` directories directly in the project root.** **For an existing non-empty directory, use the `.flue` layout with `agents/` and `roles/` inside `./.flue/`.** [Flue start.md](https://flueframework.com/start.md) specifies: "Directory does not exist: create it and use the root layout... Directory exists and is empty: use the root layout... Directory exists and already has files: use the `.flue` layout." This is corroborated by [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-layout-rules / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.8s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue prefers `./.flue/` if it exists; otherwise it falls back to the project root. The start process infers this automatically: "Directory does not exist: create it and use the root layout... Directory exists and is empty: use the root layout... Directory exists and already has files: use the `.flue` layout." [Flue start.md (flueframework.com/start.md)](https://flueframework.com/start.md)

### flue-layout-rules / parallel / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 16.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue selects the layout automatically per these rules: non-existent or empty directories get the root layout; directories that already contain files get the hidden `.flue/` layout. (https://flueframework.com/start.md) This matches the project layout guidance in the official deploy guides. (https://github.com/withastro/flue/blob/main/docs/deploy-node.md) (https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 17.4s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> For a new or empty target directory, use the **root layout** with agents in `./agents/` and roles in `./roles/` ([Flue Start Guide](https://flueframework.com/start.md)). For an existing non-empty directory, use the **`.flue` layout** with agents in `./.flue/agents/` and roles in `./.flue/roles/` ([Flue Start Guide](https://flueframework.com/start.md)).

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 8.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For a new or empty target directory, Flue uses the root layout with `./agents/` and `./roles/`; for an existing non‑empty directory, it uses the `.flue` layout with `./.flue/agents/` and `./.flue/roles/`【https://flueframework.com/start.md】.

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 95/100 (fail), duration 45.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For a new or empty target directory, Flue defaults to the project root layout, where agents are located in `./agents/` and roles in `./roles/` [https://github.com/withastro/flue/blob/main/docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). For an existing directory that contains a `.flue` folder, Flue uses the `.flue` layout, where agents and roles are found in `./.flue/agents/` and `./.flue/roles/` respectively [https://github.com/withastro/flue/blob/main/docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). If a `./.flue/` directory exists, the CLI prioritizes it over the project root [https://github.com/withastro/flue/blob/main/docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-layout-rules / exa / xai/grok-4-1-fast-non-reasoning
Score: 64/100 (fail), duration 32.7s
Facts: yes New or empty directory uses root layout; no Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> - For a new or empty target directory, use the **root layout** with `agents/` and `roles/` directly in the project root, as Flue falls back to `./` when `./.flue/` does not exist [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md), [Flue deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). - For an existing non-empty directory, use the **`.flue/` layout** with `agents/` and `roles/` inside `./.flue/`, as Flue prioritizes it if present to avoid clashing with existing files [Flue deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-layout-rules / exa / xai/grok-4-1-fast
Score: 39/100 (fail), duration 37.6s
Facts: yes New or empty directory uses root layout; no Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **For a new or empty target directory, use the root layout with `agents/` and `roles/` directly at the project root (`./`).** **For an existing non-empty directory, use the `.flue/` layout with `agents/` and `roles/` under `./.flue/`.** Flue automatically detects the workspace: it uses `./.flue/` if it exists, otherwise the root (`./`). [Flue docs on Node.js deployment](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) This convention avoids polluting existing projects while allowing flexibility for new ones, as shown in setup examples creating `.flue/` manually. [Flue docs on Cloudflare deployment](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) The initial sources do not explicitly distinguish CLI behavior for `flue start` or init in empty vs non-empty dirs, but the detection logic implies root for empty (no `.flue/`) and `.flue/` for existing to ...

### flue-layout-rules / exa / xai/grok-4.20-0309-non-reasoning
Score: 75/100 (fail), duration 12.4s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/`, `./roles/`, and `AGENTS.md` directly in the target directory). **For an existing non-empty directory, use the `./.flue/` layout** (`./.flue/agents/`, `./.flue/roles/`). Flue prioritizes `./.flue/` if it exists; otherwise it falls back to the project root. This is documented in the official deploy guides: [Project layout section](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). (The named `https://flueframework.com/start.md` could not be fetched; guidance is taken from primary repo docs matching the research query.)

### flue-layout-rules / exa / xai/grok-4.20-0309-reasoning
Score: 95/100 (fail), duration 53.5s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **For a new or empty target directory, use the root layout (`./agents/` and `./roles/`).** For an existing non-empty directory, use the `.flue` layout (`./.flue/agents/` and `./.flue/roles/`). The start guide explicitly defines these project layout rules: "Directory does not exist: create it and use the root layout"; "Directory exists and is empty: use the root layout"; "Directory exists and already has files: use the `.flue` layout." ([Flue start guide](https://flueframework.com/start.md); see also [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)). The CLI and build tools automatically prefer `./.flue/` if it exists, otherwise falling back to project root.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 70/100 (fail), duration 26.5s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For a new or empty target directory, use the **root layout** with agents in `./agents/` and roles in `./roles/`. For an existing non-empty directory, use the **`.flue` layout** with agents in `./.flue/agents/` and roles in `./.flue/roles/` ([Flue start.md](https://flueframework.com/start.md)).

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 62/100 (fail), duration 11.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: no; fetch: no

Answer excerpt:

> For a new or empty target directory (where `./.flue/` does **not** exist), Flue uses the project‑root layout: agents in `./agents/` and roles in `./roles/`. If the directory already contains a `.flue/` folder (existing non‑empty), Flue uses the nested layout: agents in `./.flue/agents/` and roles in `./.flue/roles/`【https://github.com/withastro/flue/blob/main/docs/deploy-node.md】.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 70/100 (fail), duration 52.1s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> Flue supports two workspace layouts depending on the presence of a `.flue` directory: * **Existing directory with `.flue/`**: If a `./.flue/` directory exists, Flue uses it as the workspace, looking for agents in `./.flue/agents/` and roles in `./.flue/roles/` [[docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)]. * **New or directory without `.flue/`**: Otherwise, Flue uses the project root (`./`) as the workspace, looking for agents in `./agents/` and roles in `./roles/` [[docs/deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)].

## Benchmark Design References

- https://openai.com/index/introducing-simpleqa/
- https://openai.com/index/browsecomp
- https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/
