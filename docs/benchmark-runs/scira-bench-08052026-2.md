# Benchmark Results: research-smoke

Small source-backed QA suite for comparing search provider and model combinations in the Flue research harness.

Started: 2026-05-08T13:29:29.800Z
Completed: 2026-05-08T14:24:57.914Z
Concurrency: 4

## Summary

| Provider | Model | Cases | Avg score | Passes | Errors | Avg duration |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| parallel | `xai/grok-4-1-fast-non-reasoning` | 19 | 98.7 | 16 | 0 | 30.6s |
| parallel | `xai/grok-4-1-fast` | 19 | 93.9 | 15 | 0 | 34.0s |
| parallel | `xai/grok-4.20-0309-non-reasoning` | 19 | 96.4 | 15 | 0 | 19.0s |
| parallel | `xai/grok-4.20-0309-reasoning` | 19 | 97.3 | 16 | 0 | 27.6s |
| parallel | `xai/grok-4.3` | 19 | 92.6 | 9 | 0 | 22.5s |
| parallel | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 98.5 | 18 | 0 | 38.8s |
| parallel | `cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b` | 19 | 87.7 | 2 | 0 | 30.6s |
| parallel | `cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it` | 19 | 89.7 | 13 | 0 | 51.0s |
| exa | `xai/grok-4-1-fast-non-reasoning` | 19 | 90.9 | 13 | 0 | 53.4s |
| exa | `xai/grok-4-1-fast` | 19 | 89.4 | 13 | 0 | 47.7s |
| exa | `xai/grok-4.20-0309-non-reasoning` | 19 | 93.7 | 15 | 0 | 23.1s |
| exa | `xai/grok-4.20-0309-reasoning` | 19 | 94.0 | 13 | 0 | 28.3s |
| exa | `xai/grok-4.3` | 19 | 86.3 | 4 | 0 | 22.0s |
| exa | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 95.4 | 16 | 0 | 113.0s |
| exa | `cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b` | 19 | 73.6 | 0 | 1 | 92.3s |
| exa | `cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it` | 19 | 82.2 | 8 | 0 | 62.7s |

## Case Runs

### simpleqa-design / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 15.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** This is confirmed in the official OpenAI announcement, which states "with 4,326 questions, SimpleQA should have relatively low variance," and the accompanying paper, which notes "SimpleQA, which contains 4,326 short, fact-seeking questions."[https://openai.com/index/introducing-simpleqa/](https://openai.com/index/introducing-simpleqa/) [https://arxiv.org/html/2411.04368v1](https://arxiv.org/html/2411.04368v1) **The questions are easy to grade because they are created such that there exists only a single, indisputable answer.** The paper abstract explains: "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer," with grading as correct, incorrect, or not attempted; the blog adds that each question "must have a single, indisputable answer for easy grading."[https://arxiv.org/html/2411.043...

### simpleqa-design / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 31.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 short, fact-seeking questions.** [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) [OpenAI blog post](https://openai.com/index/introducing-simpleqa/) **The questions are easy to grade because each is designed to have only a single, indisputable answer.** [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) [OpenAI blog post](https://openai.com/index/introducing-simpleqa/)

### simpleqa-design / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 12.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** The property that makes the questions easy to grade is that they are written such that there exists only a **single, indisputable answer** (or "questions are created such that there exists only a single, indisputable answer"). - [OpenAI SimpleQA paper (PDF)](https://cdn.openai.com/papers/simpleqa.pdf): "We present a benchmark called SimpleQA, which contains 4,326 short, fact-seeking questions." and "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer." - [OpenAI blog post](https://openai.com/index/introducing-simpleqa/): "with 4,326 questions" and "it must have a single, indisputable answer for easy grading."

### simpleqa-design / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 21.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains exactly 4,326 questions.** Questions have a **single, indisputable answer**, which makes them easy to grade (graded as correct / incorrect / not attempted). - Official OpenAI announcement: "with 4,326 questions, SimpleQA should have relatively low variance" and "questions were written in such a way that the predicted answers are easy to grade" ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)). - Official paper: "SimpleQA... contains 4,326 short, fact-seeking questions" and "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer" ([arXiv:2411.04368](https://arxiv.org/abs/2411.04368)).

### simpleqa-design / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 23.3s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** - It is a short-form factuality benchmark of adversarially collected, fact-seeking questions spanning science, technology, politics, entertainment, and other topics. - The property that makes questions easy to grade is that each was deliberately written to have **only a single, indisputable answer**, so model responses can be classified as correct, incorrect, or not attempted without ambiguity. This design is stated directly in the official OpenAI announcement and the accompanying paper.

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 22.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326** short, fact-seeking questions ([OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf); [OpenAI blog](https://openai.com/index/introducing-simpleqa/)). The benchmark is easy to grade because every question is written to have a **single, indisputable answer** ([OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 100/100 (pass), duration 14.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326 questions** [OpenAI blog post introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) and the questions are easy to grade because each has a **single, indisputable answer** [OpenAI blog post introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) [arXiv abstract](https://arxiv.org/abs/2411.04368).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 13.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> SimpleQA consists of [4,326 fact-seeking questions](https://the-decoder.com/openai-releases-simpleqa-benchmark-to-test-ai-model-factual-accuracy) across diverse topics such as science, technology, and politics. The questions are easy to grade because they are designed so that there exists [only a single, indisputable answer](https://arxiv.org/abs/2411.04368) for each.

### simpleqa-design / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 33.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** This number appears consistently across dataset hosts mirroring the official OpenAI release, including Hugging Face implementations showing `num_examples: 4326` in the train split and "Number of rows: 4,326", as well as the OpenAI `simple-evals` repo's evaluation context.[^1][^2][^8][^9] **The questions are easy to grade because each has only a single, indisputable answer.** The official paper states: "questions are created such that there exists only a single, indisputable answer", enabling grading as correct, incorrect, or not attempted.[https://cdn.openai.com/papers/simpleqa.pdf]

### simpleqa-design / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 33.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA consists of 4,326 short, fact-seeking questions.** [Official paper](https://cdn.openai.com/papers/simpleqa.pdf) [EvalScope dataset stats](https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html) [Hugging Face dataset card](https://huggingface.co/datasets/lighteval/SimpleQA) **Responses are easy to grade because each question has only a single, indisputable answer, allowing binary grading as correct, incorrect, or not attempted.** [Official paper abstract](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-design / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 6.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** The property that makes questions easy to grade is that they are created such that there exists **only a single, indisputable answer**. - Each answer is graded as correct, incorrect, or not attempted, with grading based on whether the prediction fully contains the important information from the gold target without contradictions (semantic meaning only). - [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf): "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer." - Confirmed across the official paper, GitHub eval script, and dataset descriptions (e.g., Hugging Face).

### simpleqa-design / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 questions.** **The property that makes grading easy is that each question has only a single, indisputable answer.** - From the official paper: "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer. Each answer in SimpleQA is graded as either correct, incorrect, or not attempted." ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) - This is confirmed in the official evaluation code and dataset releases. ([simple-evals GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py))

### simpleqa-design / exa / xai/grok-4.3
Score: 92/100 (fail), duration 4.8s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **SimpleQA contains exactly 4,326 short, fact-seeking questions.** **The property that makes the questions easy to grade is that each was created such that there exists only a single, indisputable answer.** This design enables straightforward three-way grading (correct / incorrect / not attempted) via semantic matching against the gold target, as described in the official paper. Official material confirms the count and this grading property directly in the abstract and introduction of the SimpleQA paper (https://cdn.openai.com/papers/simpleqa.pdf) and the accompanying simple-evals repository.

### simpleqa-design / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 75.1s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> SimpleQA contains **4,326** questions ([Hugging Face test-set metadata](https://huggingface.co/datasets/MAISAAI/openai_simple_qa_test_set/blob/main/README.md); [EvalScope data statistics](https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html)). Responses are easy to grade because every question is constructed so that there exists **only a single, indisputable answer** ([OpenAI paper, *Measuring short-form factuality in large language models*](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-design / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 40.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> SimpleQA contains 4,326 questions. Responses are easy to grade because questions are created such that there exists only a single, indisputable answer. 【https://huggingface.co/datasets/lighteval/SimpleQA】 【https://cdn.openai.com/papers/simpleqa.pdf】

### simpleqa-design / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 16.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> SimpleQA contains **4,326** fact-seeking questions [[4](https://medium.com/@aiintransit/openais-new-qa-benchmark-simpleqa-ed70ee304517)][[6](https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html)][[8](https://huggingface.co/datasets/lighteval/SimpleQA)]. The questions are easy to grade because they are designed such that there exists only a **single, indisputable answer** [[1](https://cdn.openai.com/papers/simpleqa.pdf)][[5](https://aiwiki.ai/wiki/SimpleQA)].

### simpleqa-quality-check / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 27.4s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000 questions** from the SimpleQA dataset. - They found a **94.4% match rate** with the original agreed answers (5.6% disagreement rate). - OpenAI estimated the inherent dataset error rate at **approximately 3%**, after manual inspection attributing half the disagreements to real question issues.[^official-simpleqa][^streetinsider-mirror] [^official-simpleqa]: [OpenAI Introducing SimpleQA page](https://openai.com/index/introducing-simpleqa/) [^streetinsider-mirror]: [StreetInsider OpenAI SimpleQA mirror](https://www.streetinsider.com/Corporate+News/OpenAI:+Introducing+SimpleQA/23901097.html)

### simpleqa-quality-check / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 33.4s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset, finding that their answers matched the original agreed answers 94.4% of the time (5.6% disagreement rate).** **OpenAI estimated the inherent dataset error rate to be approximately 3%, after manual inspection revealed half the disagreements were due to third-trainer errors and half to real question issues.** [[Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)]

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 17.6s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **A third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** They found a 94.4% match rate with the original agreed answers (5.6% disagreement rate). Of the disagreements, roughly half (2.8%) were due to grader false negatives or human errors by the third trainer, and the other half (2.8%) were due to real issues with the questions; **OpenAI therefore estimates the inherent dataset error rate at approximately 3%.** [Official OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 24.5s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the dataset.** They found that the third trainer’s answers matched the original agreed answers **94.4%** of the time (5.6% disagreement rate). OpenAI estimates the inherent dataset error rate to be **approximately 3%** after manual inspection showed half the disagreements were due to real question issues. ([Official OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa/))

### simpleqa-quality-check / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 61.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - A third AI trainer verified a random sample of **1,000 questions**, finding that their answers **matched the original agreed answers 94.4% of the time** (5.6% disagreement rate). - After manual inspection of the disagreements, OpenAI attributes 2.8% to grader errors or human mistakes by the third trainer and the remaining 2.8% to real issues with the questions themselves. - OpenAI therefore estimates the **inherent error rate of the SimpleQA dataset to be approximately 3%**. [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 19.2s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI’s official SimpleQA announcement, a third AI trainer answered a random sample of **1,000 questions** and found their answers matched the original agreed answers **94.4%** of the time. After manually inspecting the 5.6% disagreements, OpenAI estimated the dataset’s **inherent error rate to be approximately 3%** ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)).

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 20.9s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000** questions from SimpleQA. - They found a **94.4%** answer match rate with the original agreed answers. - OpenAI estimates the inherent dataset error rate to be approximately **3%** after accounting for grader errors and question ambiguities. Source: OpenAI’s official SimpleQA page states: “As a final verification of quality, we had a third AI trainer answer a random sample of 1,000 questions from the dataset. We found that the third AI trainer’s answer matched the original agreed answers 94.4% of the time… Hence, we estimate the inherent error rate of this dataset to be approximately 3%.”【https://openai.com/index/introducing-simpleqa/】

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 36.3s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the [official SimpleQA announcement](https://openai.com/index/introducing-simpleqa/), the third AI trainer verified a random sample of **1,000** questions, which yielded a **94.4%** answer match rate. OpenAI estimated the inherent error rate of the dataset to be approximately **3%**.

### simpleqa-quality-check / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 49.5s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The initial sources and follow-up searches do not contain these exact details from the official SimpleQA paper or OpenAI pages.** - Source [2] mentions a third AI trainer as final verification after two independent trainers verified answers for consistency, but provides no sample size, match rate, or error rate. - Searches of the [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), [arXiv version](https://arxiv.org/pdf/2411.04368), [OpenAI blog](https://openai.com/index/introducing-simpleqa/), and GitHub repo yield only general descriptions of "two independent AI trainers" for high correctness, without specifics on a third trainer's 1000-sample verification, 94.4% match, or 3% inherent error. - Secondary sources reference these numbers in search snippets, but no primary official source confirms them; evidence is weak or mixed.

### simpleqa-quality-check / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 64.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The official SimpleQA sources (paper and blog) describe reference answers verified by two independent AI trainers but do not mention a third AI trainer, a random sample of 1000, a 94.4% match rate, or a 3% inherent dataset error rate.** - The [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) and [introducing blog](https://openai.com/index/introducing-simpleqa/) detail the adversarial collection process with two trainers confirming consistent answers and sources, emphasizing high correctness without specifying further verification metrics. - Secondary sources like [this Medium article](https://medium.com/@aiintransit/openais-new-qa-benchmark-simpleqa-ed70ee304517) reference a "third AI trainer" for final verification but truncate before details; no primary evidence supports the queried numbers, making claims unreliable.

### simpleqa-quality-check / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 33.9s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions.** They matched the original agreed-upon answers **94.4%** of the time (5.6% disagreement rate). OpenAI estimated the **inherent dataset error rate at approximately 3%** (after manual review found roughly half the disagreements were due to grader false negatives/human errors by the third trainer, and the rest to real issues like ambiguity or conflicting sources). These details come directly from OpenAI's official announcement page, which expands on the paper's data collection and verification section (two independent AI trainers for inclusion, followed by the third-trainer quality check). - [Official OpenAI Introducing SimpleQA page](https://openai.com/index/introducing-simpleqa/) - [SimpleQA paper (PDF)](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-quality-check / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 23.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions and found a 94.4% match rate.** **OpenAI estimated an inherent dataset error rate of ~3%.** These details come from the data verification process in the official paper (two independent AI trainers created/verified questions adversarially against GPT-4, with the third providing final quality checks). ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf))

### simpleqa-quality-check / exa / xai/grok-4.3
Score: 100/100 (pass), duration 16.2s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - A third AI trainer independently verified a random sample of 1,000 SimpleQA questions and found a 94.4% match rate with the original labels. - OpenAI estimated the inherent dataset error rate at ~3% based on this verification. Official source: [Measuring short-form factuality in large language models](https://cdn.openai.com/papers/simpleqa.pdf) (see Data collection and verification section).

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 173.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official SimpleQA paper, OpenAI randomly selected **1,000** examples for a third AI trainer to verify; the prompted ChatGPT grader found the third trainer’s answers matched the reference **94.4%** of the time, and after manual review of disagreements OpenAI estimated the benchmark’s inherent dataset error rate to be **around 3%** ([OpenAI SimpleQA paper, "Data quality" section](https://arxiv.org/html/2411.04368v1)).

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 30/100 (fail), duration 111.9s
Facts: no Third trainer verified a random sample of 1,000 questions; no Third trainer match rate was 94.4%; no Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> (empty)

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 42.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The third AI trainer verified a random sample of **1,000** questions, finding a **94.4%** match rate. OpenAI estimated an inherent dataset error rate of **3%** [Measuring short-form factuality in large language models](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.1s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "correct", "incorrect", and "not attempted".** **It compares the predicted answer from the model against the ground-truth (or reference) answer.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/); [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf); [simpleqa_eval.py on GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.8s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier uses three grading labels: “correct”, “incorrect”, and “not attempted”.** **It compares the model's predicted answer to the ground-truth (or reference) answer.** [OpenAI SimpleQA introduction](https://openai.com/index/introducing-simpleqa/) [OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) [OpenAI simple-evals GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.4s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are “correct”, “incorrect”, or “not attempted”.** The prompted ChatGPT classifier compares the model’s predicted answer to the ground-truth (or reference/gold target) answer. - It grades the predicted answer as correct if it fully contains the reference without contradictions; incorrect if it contradicts in any way (even hedged); or not attempted if the ground truth is not fully given without contradictions. ([OpenAI SimpleQA blog](https://openai.com/index/introducing-simpleqa/); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) - The official grader prompt in the evaluation code uses uppercase `["CORRECT", "INCORRECT", "NOT_ATTEMPTED"]` with detailed examples. ([simple-evals GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)) These details come directly from OpenAI’s official SimpleQA release materials.

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.4s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are “correct”, “incorrect”, or “not attempted”** (uppercase `CORRECT`/`INCORRECT`/`NOT_ATTEMPTED` in the official grader prompt). The prompted classifier compares the model’s **predicted answer** to the **ground-truth** (or reference/gold target) answer. - [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/): “a prompted ChatGPT classifier that sees both the predicted answer from the model and the ground-truth answer, and then grades the predicted answer as either “correct”, “incorrect”, or “not attempted”.” - [Official simple-evals GitHub grader template](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) and [SimpleQA paper](https://arxiv.org/html/2411.04368v1).

### simpleqa-grading-labels / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 10.1s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - The three grading labels used by the prompted classifier are **correct**, **incorrect**, and **not attempted** (rendered as `CORRECT`, `INCORRECT`, `NOT_ATTEMPTED` in the LLM prompt templates). - The classifier compares the model’s predicted answer against the ground-truth (or reference) answer for each SimpleQA question. Official OpenAI material states: “To grade questions, we use a prompted ChatGPT classifier that sees both the predicted answer from the model and the ground-truth answer, and then grades the predicted answer as either ‘correct’, ‘incorrect’, or ‘not attempted’.” (https://openai.com/index/introducing-simpleqa/). The same definition and comparison appear in the SimpleQA paper (https://arxiv.org/html/2411.04368v1) and the reference implementation (https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 38.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA’s prompted classifier grades each response as either **“correct,” “incorrect,”** or **“not attempted”** ([OpenAI blog](https://openai.com/index/introducing-simpleqa/); [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf)). The classifier compares the model’s **predicted answer** against the **ground‑truth (reference/gold) answer**, while also seeing the question ([OpenAI blog](https://openai.com/index/introducing-simpleqa/); [GitHub evaluation code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 17.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The prompted classifier uses three grading labels: “correct”, “incorrect”, and “not attempted”. It compares the model’s predicted answer with the ground‑truth (reference) answer to assign one of these labels【https://openai.com/index/introducing-simpleqa/】.

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 21.8s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The prompted ChatGPT classifier used in SimpleQA assigns one of three grading labels to a response: **"correct"**, **"incorrect"**, or **"not attempted"** ([OpenAI Blog](https://openai.com/index/introducing-simpleqa/), [arXiv:2411.04368](https://arxiv.org/html/2411.04368v1)). To determine the grade, the classifier compares the model's **predicted answer** against the **ground-truth answer** (also referred to as the "reference answer" or "gold target") ([OpenAI Blog](https://openai.com/index/introducing-simpleqa/), [GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-grading-labels / exa / xai/grok-4-1-fast-non-reasoning
Score: 85/100 (fail), duration 12.3s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "CORRECT", "INCORRECT", and "NOT_ATTEMPTED".** [OpenAI simple-evals simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) **It compares a question, gold target (ground truth), and predicted answer.** The classifier grades as CORRECT if the prediction semantically contains the gold target's key info without contradictions; INCORRECT if it contradicts or omits key info; NOT_ATTEMPTED for refusals or uncertainty without attempting an answer. [OpenAI simple-evals simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)

### simpleqa-grading-labels / exa / xai/grok-4-1-fast
Score: 85/100 (fail), duration 12.7s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels are "CORRECT", "INCORRECT", and "NOT_ATTEMPTED".** **The prompted classifier compares a model's predicted answer to the gold target (ground truth), using the question for context via semantic matching.** [GRADER_TEMPLATE in simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 13.2s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels used by the prompted classifier are `CORRECT`, `INCORRECT`, and `NOT_ATTEMPTED`.** The classifier (via the `GRADER_TEMPLATE` LLM-as-judge prompt) compares a **predicted answer** against a **gold target** (and the question) for semantic equivalence: - **CORRECT**: fully contains the important information in the gold target, contains no contradictions, and only semantic meaning matters (capitalization, punctuation, grammar, and order don't matter). - It distinguishes incorrect answers from abstentions ("not attempted" when the model is uncertain). This is defined in the official evaluation code and paper. - [simpleqa_eval.py (GRADER_TEMPLATE)](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) - [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 13.1s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels are `CORRECT`, `INCORRECT`, and `NOT_ATTEMPTED`.** The prompted classifier (LLM-as-judge) compares a **question**, **gold target**, and **predicted answer** to assign one of these labels, based on whether the prediction fully contains the important information from the gold target without contradictions (only semantic meaning matters). This is defined in the official grader template and evaluation code. ([OpenAI simple-evals/simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf))

### simpleqa-grading-labels / exa / xai/grok-4.3
Score: 77/100 (fail), duration 6.5s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - The prompted classifier in official SimpleQA material uses exactly three grading labels: `["CORRECT", "INCORRECT", "NOT_ATTEMPTED"]`. - It receives a question, a gold target (the reference answer), and a predicted answer, then assigns one of the labels by checking whether the prediction fully contains the important information from the gold target without contradictions (semantic meaning only; capitalization, punctuation, grammar, and order are ignored). - This LLM-as-judge approach is defined in the GRADER_TEMPLATE inside the official implementation and described in the SimpleQA paper. See the GRADER_TEMPLATE at https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py and the paper at https://cdn.openai.com/papers/simpleqa.pdf.

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 85/100 (fail), duration 37.6s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The SimpleQA prompted classifier uses the three labels **CORRECT**, **INCORRECT**, and **NOT_ATTEMPTED**. It compares the question, the gold target, and the predicted answer to assign the grade ([openai/simple-evals `simpleqa_eval.py`](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 7.1s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The SimpleQA prompted classifier assigns one of three labels—**CORRECT**, **INCORRECT**, or **NOT_ATTEMPTED**—by comparing the model’s predicted answer to the gold‑target answer for a given question【https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py】. This grading approach is also described in the official EvalScope documentation, which notes the three‑way classification (CORRECT, INCORRECT, NOT_ATTEMPTED) used for evaluating short‑form factuality【https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html】.

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 28.2s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The prompted classifier used in SimpleQA assigns one of three grading labels to an answer: [CORRECT](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), [INCORRECT](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), or [NOT_ATTEMPTED](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) ([source 1](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), [source 2](https://evalscope.readthedocs.io/en/v1.5.1/benchmarks/simple_qa.html)). To determine the grade, the classifier compares a [question](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), a [gold target](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), and a [predicted answer](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) ([source 1](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 14.1s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect in SimpleQA because it contradicts the reference answer ("Wout Weghorst") by implying Virgil van Dijk also scored the open-play goal, even though the correct answer is fully contained within it.** The official grading rubric states: "Incorrect: The predicted answer contradicts the reference answer in any way, even if the contradiction is hedged," explicitly listing “Virgil van Dijk and Wout Weghorst” as an example for the World Cup question ("Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game?"). [SimpleQA paper Table 2](https://cdn.openai.com/papers/simpleqa.pdf). Correct responses must "fully contain[] the reference answer without contradicting" it, such as “Wout Weghorst” alone.

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 23.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect** because SimpleQA's grading rules state that a predicted answer is incorrect if it contradicts the reference answer in any way, even if partially correct or hedged; here, the reference is solely "Wout Weghorst" for the question "Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?" and naming Virgil van Dijk (who did not score) implies an additional scorer, creating a contradiction. Correct responses must *fully contain the reference answer without contradicting it*, e.g., “Wout Weghorst” or “Wout Weghorst scored at 83’ and 90+11’ in that game.” [SimpleQA paper Table 2 grading examples](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 20.5s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded Incorrect because it contradicts the reference answer (Wout Weghorst) by including an additional name.** Per the official SimpleQA paper's Table 2, **Correct** requires that the predicted answer *fully contains the reference answer without contradicting* it (e.g., “Wout Weghorst” or “Wout Weghorst scored at 83’ and 90+11’ in that game”). **Incorrect** applies when the answer *contradicts the reference answer in any way, even if the contradiction is hedged* — with the exact example “Virgil van Dijk and Wout Weghorst” listed under Incorrect. The benchmark question is: “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?” (single verifiable answer: Wout Weghorst). Adding Virgil van Dijk violates the “single, indisputable answer” design. [SimpleQA paper (Table 2)](http...

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 33.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the reference answer (Wout Weghorst only).** - Per the official SimpleQA paper, correct = "The predicted answer fully contains the reference answer **without contradicting the reference answer**" (examples: “Wout Weghorst”, “Wout Weghorst scored at 83’ and 90+11’"). - Incorrect = "The predicted answer contradicts the reference answer **in any way, even if the contradiction is hedged**" (explicit example: “Virgil van Dijk and Wout Weghorst”). - The question is “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?” ([SimpleQA paper, Table 2](https://cdn.openai.com/papers/simpleqa.pdf)). This matches the exact grading examples and definitions provided in the benchmark.

### simpleqa-edge-grade / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 17.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **The response is graded "incorrect" because it contradicts the reference answer.** In the official SimpleQA paper, the grader rules (Table 2) define: - **Correct** only when the predicted answer “fully contains the reference answer without contradicting” it. Example: “Wout Weghorst” or “Wout Weghorst scored at 83’ and 90+11’…”. - **Incorrect** when the answer “contradicts the reference answer in any way, even if the contradiction is hedged.” The paper explicitly lists **“Virgil van Dijk and Wout Weghorst”** as an incorrect example for the question “Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game…?” (reference: Wout Weghorst). By naming an additional player who did not score the goal, the response introduces a factual contradiction rather than simply containing the single correct name. The same table shows any hedging or extra incorrect names also t...

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 30.7s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The SimpleQA rubric classifies a response as **Incorrect** if it contradicts the reference answer in any way, even if the contradiction is hedged ([SimpleQA paper, Table 2](https://cdn.openai.com/papers/simpleqa.pdf)). Because the verified answer to that World Cup question is only “Wout Weghorst,” adding “Virgil van Dijk” introduces a false claim that contradicts the reference. To be **Correct**, the model’s output must fully contain the reference answer without any such contradiction.

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 23.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The response “Virgil van Dijk and Wout Weghorst” is marked incorrect because it adds a player who did not score, thereby contradicting the reference answer that only Wout Weghorst scored. In SimpleQA’s grading rubric, any answer that contradicts the reference answer—even if hedged—is considered incorrect, as shown in Table 2 where “Virgil van Dijk and Wout Weghorst” is listed under Incorrect examples 【3†L1-L13】.

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 42.6s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The response "Virgil van Dijk and Wout Weghorst" is graded as **incorrect** because it ["contradicts the reference answer in any way"](https://cdn.openai.com/papers/simpleqa.pdf). Although the response includes the correct player, adding Virgil van Dijk implies he also scored an open-play goal, violating the requirement that a **correct** answer must ["fully contain the reference answer without contradicting the reference answer"](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-edge-grade / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 256.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Available evidence from the official SimpleQA paper, repository ([github.com/openai/simple-evals](https://github.com/openai/simple-evals)), eval code ([simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)), and dataset ([HF SimpleQA](https://huggingface.co/datasets/basicv8vc/SimpleQA)) shows no World Cup example with reference answer "Wout Weghorst" or model response "Virgil van Dijk and Wout Weghorst" graded incorrect.** - The dataset (4,326 questions in CSV/Parquet: `problem`, `answer` [gold], `topic`, URLs) has 94 sports questions but none mention "World Cup", "Weghorst", "van Dijk", Netherlands soccer, or 2022 Argentina match; cutoff ~Dec 2023 favors obscure pre-2022 facts. [Paper](https://cdn.openai.com/papers/simpleqa.pdf), [HF viewer](https://huggingface.co/datasets/basicv8vc/SimpleQA/viewer/test). - Grader template uses Obama children example fo...

### simpleqa-edge-grade / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 121.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT because SimpleQA requires predicted answers to fully match the gold target's key information without contradictions, per the official grader prompt.** - The gold target "Wout Weghorst" indicates a single-person answer (likely "Who scored the Netherlands' 90+11' equalizer vs. Argentina in the 2022 World Cup?"), so adding Virgil van Dijk—who did not score—introduces false information. - Grader criteria explicitly state CORRECT answers "do not contain any information that contradicts the gold target," while INCORRECT ones do (e.g., extra or wrong details); semantic meaning is evaluated, ignoring order/formatting. - No direct World Cup grading example was found in sources like the [paper](https://cdn.openai.com/papers/simpleqa.pdf) or [eval code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py), but cri...

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 30.6s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it contains information that contradicts the gold target of a single indisputable answer (Wout Weghorst).** The official SimpleQA grader template in `simpleqa_eval.py` (and the paper) defines **CORRECT** answers as those that: - Fully contain the important information in the gold target. - Do **not** contain any information that contradicts the gold target. - Ignore only capitalization, punctuation, grammar, and order; semantic meaning matters. It explicitly grades as **INCORRECT** any response with extra or contradictory details. The World Cup example (a question expecting only the single scorer/goalscorer Wout Weghorst) illustrates this: naming an additional player (Virgil van Dijk) adds non-matching information, violating the single-answer design of the benchmark. This is shown directly in the grader examp...

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 32.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT** because it introduces contradicting information (van Dijk did not score) beyond the single indisputable gold target "Wout Weghorst". The official grader template explicitly lists this as an INCORRECT example, stating that predicted answers are incorrect if they: - Do not fully match the gold target, or - Contain any information that contradicts it. Correct examples must satisfy both "fully contain the important information" **and** "do not contain any information that contradicts the gold target" (only semantic meaning matters; order, punctuation, etc. are ignored). This follows directly from the adversarial design ensuring questions have one clear answer. (See GRADER_TEMPLATE in [https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) an...

### simpleqa-edge-grade / exa / xai/grok-4.3
Score: 92/100 (fail), duration 28.1s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT (not CORRECT) because it adds extraneous information that contradicts the single indisputable gold target.** In the official grader template used by SimpleQA, CORRECT answers must: - Fully contain the important information from the gold target. - Contain **no information that contradicts the gold target**. - Be judged only on semantic meaning (capitalization, order, etc. do not matter). The World Cup example (gold target: Wout Weghorst) tests exactly this rule. Including Virgil van Dijk—who did not score the referenced goal—introduces false information, so the entire predicted answer fails the “no contradictions” criterion and is marked INCORRECT. (See the full GRADER_TEMPLATE and INCORRECT examples in the canonical implementation.) This matches the benchmark design: questions have only one correct answer, and any ad...

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 316.1s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the official SimpleQA grading rubric, the response “Virgil van Dijk and Wout Weghorst” is graded **incorrect** because it contradicts the gold reference answer (Wout Weghorst). The rubric explicitly states that any predicted answer that contradicts the reference answer in any way—even if the contradiction is hedged—must be marked incorrect ([SimpleQA paper, Table 2](https://arxiv.org/html/2411.04368)).

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 43.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The response “Virgil van Dijk and Wout Weghorst” is marked incorrect because it adds Virgil van Dijk, who did not score in that World Cup quarterfinal, thus contradicting the gold‑target answer “Wout Weghorst”. According to SimpleQA’s grading rubric, an answer is incorrect if it contains any statement that contradicts the gold target, even if it also includes the correct information【https://raw.githubusercontent.com/openai/simple-evals/main/simpleqa_eval.py】. The grading examples show that any predicted answer introducing a false claim (e.g., “Malia, Sasha, and Susan” when the gold target is “Malia and Sasha”) is graded INCORRECT【https://raw.githubusercontent.com/openai/simple-evals/main/simpleqa_eval.py】.

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 92/100 (fail), duration 134.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> In the SimpleQA benchmark, the response "**Virgil van Dijk and Wout Weghorst**" is graded as **incorrect** because SimpleQA questions are designed to have a **single, indisputable answer** [1, 5]. The inclusion of Virgil van Dijk—who was not the subject of the specific fact being queried (e.g., scoring a particular goal for the Netherlands in the 2022 World Cup)—introduces **incorrect information** that does not belong in the gold target [6]. Under the benchmark's grading criteria, a correct response must not contain information that contradicts the gold target or introduces false associations [6]. By naming an additional player who was not part of the factual answer, the model effectively provides a factually inaccurate response rather than the single correct entity.

### browsecomp-size / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 43.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, which often requires persistently navigating tens or hundreds of websites.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/). **It contains 1,266 challenging problems.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-size / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 28.6s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet via web browsing.** [A performant browsing agent should be able to locate information that is hard-to-find... To measure the ability for AI agents to locate hard-to-find, entangled information on the internet](https://openai.com/index/browsecomp/) **It contains 1,266 challenging problems.** [we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp](https://openai.com/index/browsecomp/)

### browsecomp-size / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 18.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** that requires persistent, creative browsing across many websites (often tens or hundreds). It contains **1,266 challenging problems**. - The official OpenAI page states: “To measure the ability for AI agents to locate hard-to-find, entangled information on the internet, we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp.” ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)) - It is explicitly described as “a simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information.” ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)) This matches the research paper and other primary descriptions.

### browsecomp-size / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.7s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** (requiring persistence, creativity in search strategies, depth of browsing, and reasoning about factuality). **It contains exactly 1,266 challenging problems.** These are designed to be hard to solve (often needing navigation across many sites) yet easy to verify with short, unambiguous answers. See: [OpenAI official BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-size / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 21.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet**—information that often requires persistently browsing tens or hundreds of websites, exercising creativity in search strategies, and verifying facts across multiple sources. - It is explicitly designed as a challenging benchmark for browsing agents, analogous to programming competitions for coding agents, and focuses on short, easily verifiable answers to hard-to-find questions. - The benchmark contains **1,266 challenging problems**. This is stated directly on the official OpenAI BrowseComp page.

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 19.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, and it contains **1,266 challenging problems** ([OpenAI official BrowseComp page](https://openai.com/index/browsecomp/)).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 100/100 (pass), duration 13.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)). It contains 1,266 challenging problems ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 20.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp is a benchmark designed to measure the ability of AI agents to [locate hard-to-find, entangled information on the internet](https://openai.com/index/browsecomp/). It contains [1,266 challenging problems](https://openai.com/index/browsecomp/) that require agents to persistently navigate multiple websites to retrieve answers.

### browsecomp-size / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 15.3s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, often requiring persistent navigation across tens or hundreds of websites.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp) **It contains 1,266 challenging problems.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp) [arXiv paper](https://arxiv.org/pdf/2504.12516)

### browsecomp-size / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 24.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet through persistent browsing of multiple websites.** [The official OpenAI BrowseComp page](https://openai.com/index/browsecomp) describes it as "a simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information," noting that it may require "browsing tens or even hundreds of websites." **It contains 1,266 challenging problems.** This number is consistently stated on [the official page](https://openai.com/index/browsecomp) and in [the research paper abstract](https://arxiv.org/pdf/2504.12516).

### browsecomp-size / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 30.7s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet through persistent, creative web browsing (requiring reasoning, persistence, and creativity rather than brute-force search).** - It contains **1,266 challenging problems** with short, verifiable answers. [Official OpenAI page](https://openai.com/index/browsecomp) This is directly from the official BrowseComp announcement page, which states it is “a simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information” and consists of “1,266 challenging problems.” The arXiv paper confirms the same numbers and purpose.

### browsecomp-size / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information** by persistently browsing the internet (often across tens or hundreds of sites). - It contains **1,266 challenging problems** with short, verifiable answers. See: [Official BrowseComp page](https://openai.com/index/browsecomp) and [arXiv paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-size / exa / xai/grok-4.3
Score: 100/100 (pass), duration 31.7s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp** measures the ability of AI agents to locate **hard-to-find, entangled information** on the internet through persistent, creative multi-site browsing (often requiring tens or hundreds of pages), as opposed to simple fact retrieval. It contains exactly **1,266 challenging problems** with short, verifiable answers. This is stated directly on the [official BrowseComp page](https://openai.com/index/browsecomp): “A simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information” and “we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp”.

### browsecomp-size / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 32.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to **locate hard-to-find, entangled information** on the internet. It contains **1,266** challenging problems ([OpenAI official page](https://openai.com/index/browsecomp); [BrowseComp paper](https://arxiv.org/html/2504.12516)).

### browsecomp-size / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 39.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information through persistent web browsing【https://openai.com/index/browsecomp】. The benchmark consists of 1,266 challenging problems designed to test this capability【https://arxiv.org/pdf/2504.12516】.

### browsecomp-size / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 65.6s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp). The benchmark contains 1,266 challenging problems [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp).

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 44.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures the short-form factuality of language models on 4,326 adversarially collected, short fact-seeking questions with single indisputable answers, focusing on whether models answer correctly, incorrectly, or not at all without requiring web browsing.** [OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa/) [SimpleQA paper](https://arxiv.org/pdf/2411.04368.pdf) **BrowseComp evaluates browsing agents on 1,266 challenging problems requiring persistent navigation of tens or hundreds of websites to find hard-to-find, entangled information with short, verifiable answers.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) **BrowseComp was introduced because benchmarks like SimpleQA, which test basic isolated facts, are already saturated by models with fast browsing tools (e.g., GPT-4o with browsing), necessitating a harder test for advanced agent ca...

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 73.3s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** measures the short-form factuality of language models on 4,326 challenging, adversarially collected fact-seeking questions with single, indisputable answers, also assessing calibration by whether models attempt only confident answers. **[https://openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa)**, **[https://cdn.openai.com/papers/simpleqa.pdf](https://cdn.openai.com/papers/simpleqa.pdf)** **BrowseComp** evaluates browsing agents on 1,266 questions requiring persistent navigation of the web to find hard-to-find, entangled information that humans can't solve in 10 minutes. **[https://openai.com/index/browsecomp](https://openai.com/index/browsecomp)**, **[https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)** BrowseComp was introduced b...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 24.6s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures short-form factuality**: the ability of LLMs to answer short, fact-seeking questions with a single indisputable answer (4,326 questions, adversarially collected against GPT-4). [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) **BrowseComp measures browsing agent capability** on 1,266 questions requiring persistent navigation for hard-to-find, deeply entangled information that is easy to verify but difficult to locate. [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) [BrowseComp paper](https://arxiv.org/pdf/2504.12516) **BrowseComp was introduced because** "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT-4o with browsing." It targ...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 36.4s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures short-form factuality**: LLMs' ability to answer 4,326 short, adversarially collected fact-seeking questions with single indisputable answers (graded correct/incorrect/not attempted), plus calibration. **BrowseComp measures browsing agents**: ability to persistently navigate for hard-to-find, entangled web information across 1,266 questions with short verifiable answers. **BrowseComp was introduced because** models with fast browsing tools (e.g. GPT-4o) have saturated SimpleQA on basic isolated facts. ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa); [BrowseComp announcement](https://openai.com/index/browsecomp); [BrowseComp paper](https://arxiv.org/abs/2504.12516)).

### simpleqa-vs-browsecomp / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 23.1s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** measures language models' factuality on short, fact-seeking questions with single verifiable answers (4,326 questions), emphasizing high correctness, diversity, and challenge for frontier models via adversarial collection. - **BrowseComp** measures AI agents' ability to persistently browse the web for hard-to-find, deeply entangled information (1,266 questions), requiring multi-step navigation, reasoning, and creativity where answers are easy to verify but difficult to locate. - BrowseComp was introduced because "Existing benchmarks like SimpleQA... are already saturated by models with access to fast browsing tools, such as GPT-4o with browsing," shifting focus from basic isolated facts to complex web retrieval that demands persistence. Official pages: [SimpleQA](https://openai.com/index/introducing-simpleqa/), [BrowseComp](https://openai.com/index/browsecomp).

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 47.8s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** is a factuality benchmark that measures the ability of language models to answer 4,326 short, fact-seeking questions with single, indisputable answers, making it a tractable way to test whether models “know what they know” and how well they are calibrated ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)). - **BrowseComp** is a benchmark of 1,266 challenging problems meant to measure an AI agent’s ability to persistently browse the web—potentially visiting tens or hundreds of sites—to locate hard-to-find, entangled information; its answers remain short and easily verifiable ([BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/)). - BrowseComp was introduced because SimpleQA measures retrieval of basic isolated facts and is already saturated by models with fast browsing tools (e.g., GPT‑4o with browsing); it therefore doe...

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 22.8s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> SimpleQA measures language models’ factuality on short, fact‑seeking questions with single, verifiable answers【https://openai.com/index/introducing-simpleqa/】. BrowseComp measures the ability of AI agents to locate hard‑to‑find, entangled information that requires browsing tens or hundreds of websites【https://openai.com/index/browsecomp/】. BrowseComp was introduced because benchmarks like SimpleQA, which test basic isolated fact retrieval, are already saturated by models with browsing tools such as GPT‑4o with browsing【https://openai.com/index/browsecomp/】.

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 40.8s
Facts: no SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> * **SimpleQA** measures factual accuracy on [short, fact-seeking queries](https://openai.com/index/introducing-simpleqa/) that have single, indisputable answers. * **BrowseComp** evaluates the ability of browsing agents to locate [hard-to-find, entangled information](https://openai.com/index/browsecomp/) by persistently navigating through multiple websites. * BrowseComp was introduced because SimpleQA is "[already saturated](https://openai.com/index/browsecomp/)" by models with fast browsing tools and is limited to measuring the retrieval of "[basic isolated facts](https://openai.com/index/browsecomp/)."

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 14.9s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA measures short-form factuality in language models via 4,326 adversarially collected, short fact-seeking questions with single indisputable answers, graded as correct, incorrect, or not attempted to test if models "know what they know."** [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) **BrowseComp evaluates AI browsing agents' ability to locate hard-to-find, entangled information requiring persistent navigation across multiple websites, using 1,266 challenging problems with short verifiable answers.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp) **BrowseComp was introduced because SimpleQA—which tests basic isolated facts—has become saturated by models with fast browsing tools like GPT-4o, failing to distinguish advanced browsing persistence and creativity.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp) [BrowseComp paper](https:/...

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 33.9s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA** evaluates language models' short-form factuality on 4,326 adversarially collected, short fact-seeking questions with single indisputable answers, testing if models "know what they know" by grading responses as correct, incorrect, or not attempted without hallucinations ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)). **BrowseComp** assesses browsing agents' ability to find hard-to-find, entangled information across tens or hundreds of websites via persistent navigation, using 1,266 challenging short-answer questions that are easy to verify ([BrowseComp page](https://openai.com/index/browsecomp); [BrowseComp paper](https://arxiv.org/html/2504.12516v1)). BrowseComp was introduced because SimpleQA and similar benchmarks for basic isolated facts are saturated by models with fast browsing tools like GPT-4o, failing to distinguish advanced web navigation capabiliti...

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 15.6s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA measures LLMs' short-form factuality on short, fact-seeking questions with a single indisputable answer (4,326 questions), grading responses as correct, incorrect, or not attempted to test if models "know what they know."** [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) **BrowseComp (1,266 questions) measures browsing agents' ability to locate hard-to-find, entangled information that may require navigating tens or hundreds of websites.** [BrowseComp page](https://openai.com/index/browsecomp) **BrowseComp was introduced because models with fast browsing tools (e.g. GPT-4o with browsing) have already saturated SimpleQA on basic isolated facts; it targets persistent navigation, creativity, and multi-hop search for more challenging retrieval.** [BrowseComp page](https://openai.com/index/browsecomp) [BrowseComp paper](https://arxiv.org/html/2504.12516v1) Both use sho...

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 27.2s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA** ([official paper](https://cdn.openai.com/papers/simpleqa.pdf)) measures LLMs' short-form factuality on 4,326 adversarially collected short fact-seeking questions with a single indisputable answer each, graded as correct/incorrect/not attempted, to test whether models “know what they know.” **BrowseComp** ([official page](https://openai.com/index/browsecomp)) measures browsing agents' ability to locate "hard-to-find, entangled information" that "might require browsing tens or even hundreds of websites." BrowseComp was introduced because "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT-4o with browsing." (1,266 questions; analogous to programming competitions for coding agents.)

### simpleqa-vs-browsecomp / exa / xai/grok-4.3
Score: 92/100 (fail), duration 25.3s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **SimpleQA** measures short-form factuality: models’ ability to answer 4,326 short, fact-seeking questions that have a single indisputable answer (graded correct/incorrect/not attempted), testing whether frontier models “know what they know” without hallucinations. It was adversarially collected against GPT-4 and remains challenging (<50% accuracy for GPT-4o/Claude) but focuses on isolated facts models already know or can recall directly. **BrowseComp** measures web-browsing agents’ ability to locate hard-to-find, entangled information: 1,266 short-answer questions that require persistent navigation across tens or hundreds of websites, creative search strategies, and synthesis of constraints. Answers are easy to verify but deliberately obscure, with human trainers ensuring they resist quick solution by models or people. BrowseComp was introduced because SimpleQA is already saturated by ...

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 41.2s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - **SimpleQA** is a factuality benchmark that tests whether models “know what they know” using 4,326 short, fact-seeking questions that each have a single, indisputable answer ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)). - **BrowseComp** is a benchmark for web-browsing agents that measures the ability to persistently locate hard-to-find, entangled information across many websites, using 1,266 short-answer questions that are easy to verify but hard to discover ([BrowseComp announcement](https://openai.com/index/browsecomp), [BrowseComp paper](https://arxiv.org/html/2504.12516v1)). - BrowseComp was introduced because SimpleQA—which tests retrieval of basic isolated facts—had already been saturated by models with fast browsing tools (e.g., GPT‑4o with browsing), leaving no room to discriminate agents’ true information-finding capabilities ([OpenAI](https://openai.com/ind...

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 77/100 (fail), duration 36.0s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> SimpleQA evaluates a language model’s ability to answer short, fact‑seeking questions that have a single, indisputable answer, focusing on factuality and calibration — i.e., whether the model “knows what it knows” 【https://cdn.openai.com/papers/simpleqa.pdf】. BrowseComp measures the ability of AI agents to persistently browse the web to locate hard‑to‑find, entangled information that requires navigating multiple sites and synthesizing facts 【https://openai.com/index/browsecomp】. BrowseComp was introduced because existing benchmarks like SimpleQA, which test isolated fact retrieval, are already saturated by models equipped with browsing tools (e.g., GPT‑4o with browsing) and thus cannot distinguish performance on complex, multi‑step information‑seeking tasks 【https://openai.com/index/browsecomp】.

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 85/100 (fail), duration 27.7s
Facts: no SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> * **SimpleQA** measures a model's ability to answer short, fact-seeking questions with single, indisputable answers to evaluate factual accuracy and whether models "know what they know" ([SimpleQA Paper](https://cdn.openai.com/papers/simpleqa.pdf)). * **BrowseComp** assesses an agent's ability to locate "hard-to-find, entangled information" through persistent navigation across multiple websites ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp)). * BrowseComp was introduced because SimpleQA has become **saturated** by models equipped with fast browsing tools (such as GPT-4o), making it ineffective at distinguishing the capabilities of agents performing complex, multi-step information retrieval ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp)).

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 59.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** Of those solved problems, the trainer answers agreed with the reference answers 86.4% of the time (317/367). [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/) Trainers labeled problems unsolvable if they could not solve them within two hours of searching. [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast
Score: 79/100 (fail), duration 50.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign.** **Of solved problems, trainer answers agreed with reference answers 86.4% (317/367) of the time.** **Trainers labeled problems unsolvable after a two-hour search limit.** [[BrowseComp official page](https://openai.com/index/browsecomp/)] [[arXiv paper HTML](https://arxiv.org/html/2504.12516v1)]

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-non-reasoning
Score: 92/100 (fail), duration 39.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% of problems (367/1,255) in the BrowseComp verification campaign.** Of the solved problems, trainer answers agreed with the original reference answer 86.4% of the time (317/367). Trainers could label a problem unsolvable and move on if they could not solve it within **two hours** of searching (without AI assistants). These metrics come directly from the official OpenAI BrowseComp page and the linked arXiv paper.

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 40.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign on the official BrowseComp page.** Of those solved problems, trainer answers agreed with the original reference answer 86.4% (317/367) of the time. Trainers could label a problem unsolvable and move on if they could not solve it **within two hours of searching** (without AI assistants). These details come directly from the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) and the linked [research paper](https://arxiv.org/html/2504.12516v1).

### browsecomp-human-difficulty / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 26.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** Of those solved problems, the trainer's answer matched the original reference answer 86.4% of the time (317/367). Trainers were instructed to label a problem unsolvable and move on if they could not solve it within two hours of searching. See the exact section and table on the official page: [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/).

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 135.1s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official BrowseComp page and its associated paper, human trainers solved **29.2%** of problems in the verification campaign, and among those solved problems, the agreement rate with the reference answer was **86.4%**. Trainers were permitted to label a problem unsolvable and move on after searching for **two hours**. ([OpenAI BrowseComp](https://openai.com/index/browsecomp/); [BrowseComp paper, Table 2](https://arxiv.org/html/2504.12516v1))

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 33.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Human trainers solved 29.2% of the BrowseComp verification problems, and on those solved problems their answers agreed with the reference answer 86.4% of the time. Trainers could label a problem as unsolvable if they failed to solve it within a two‑hour search window.【https://arxiv.org/html/2504.12516v1】

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 79/100 (fail), duration 90.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the BrowseComp verification campaign, human trainers solved **29.2%** of the problems ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)). Among the solved problems, the agreement rate with the original reference answer was **86.4%** ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)). Trainers were permitted to label a problem as unsolvable if they could not solve it within a **two-hour** searching limit ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)).

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast-non-reasoning
Score: 79/100 (fail), duration 40.7s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Human trainers solved 29.2% (367/1255) of problems in the BrowseComp verification campaign, with an 86.4% (317/367) agreement rate on solved problems, under a two-hour time limit before labeling unsolvable.** These metrics appear consistently across secondary sources summarizing the official paper and OpenAI materials, though the official BrowseComp page ([https://openai.com/index/browsecomp](https://openai.com/index/browsecomp)) and paper excerpts ([https://arxiv.org/pdf/2504.12516](https://arxiv.org/pdf/2504.12516)) do not include the full details in available snippets. Primary confirmation is in analyses like [Ryan Lee's post](https://www.ryanlee.ai/posts/browsecomp/) and [doingfedtime.com](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/), citing human baseline performance. Evidence is strong but relies on consistent secondary reporting s...

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 33.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Human trainers solved 29.2% (367/1255) of the problems in the verification campaign.** **On solved problems, they achieved an agreement/accuracy rate of 86.4% (317/367).** **The time limit was two hours, after which problems were labeled unsolvable.** [Human baseline details](https://www.ryanlee.ai/posts/browsecomp/) [Two-hour limit](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/) [Confirmation](https://aiwiki.ai/wiki/BrowseComp)

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 10.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Human trainers solved 29.2% (367/1255) of the BrowseComp problems in the verification campaign, with an 86.4% (317/367) agreement rate (accuracy) on the solved problems; a two-hour time limit was used before labeling a problem unsolvable.** These figures come from the human baseline evaluation where trainers (distinct from question authors) attempted the questions. - [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) - [arXiv paper](https://arxiv.org/pdf/2504.12516) - [Ryan Lee summary of the paper](https://www.ryanlee.ai/posts/browsecomp/)

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 30.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign, with an 86.4% (317/367) agreement rate on the ones they solved.** A **2-hour time limit** was used before labeling a problem unsolvable. These details come from the human baseline evaluation described in the official paper and related primary sources. ([OpenAI BrowseComp page](https://openai.com/index/browsecomp); [arXiv:2504.12516](https://arxiv.org/pdf/2504.12516)).

### browsecomp-human-difficulty / exa / xai/grok-4.3
Score: 71/100 (fail), duration 24.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% of problems (367/1,255) in the verification campaign, achieving 86.4% agreement (317/367) on the solved subset, with a two-hour time limit before labeling a problem unsolvable.** This human baseline appears in the BrowseComp paper's data collection and evaluation details. The official OpenAI announcement page links directly to the paper for full methodology.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 53.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> In the human verification campaign on BrowseComp, trainers solved **29.2%** of problems (367/1,255), and of those solved problems, the trainer answer agreed with the reference answer **86.4%** of the time (317/367). Trainers were allowed to label a problem unsolvable and move on after attempting it for **2 hours**. ([Table 2 in the BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf))

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 22.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - Human trainers solved **29.2%** of BrowseComp problems (367/1255) in the verification campaign【https://www.ryanlee.ai/posts/browsecomp/】. - The agreement rate (accuracy) on those solved problems was **86.4%** (317/367)【https://www.ryanlee.ai/posts/browsecomp/】. - Problems were labeled unsolvable if not answered within a **two‑hour** time limit【https://aiwiki.ai/wiki/BrowseComp】.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 62.6s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the BrowseComp verification campaign, human trainers solved [29.2% of the problems](https://www.ryanlee.ai/posts/browsecomp/) (367 out of 1255). On the problems they successfully solved, there was an [agreement rate (accuracy) of 86.4%](https://www.ryanlee.ai/posts/browsecomp/). The time limit used for the human trainers was [two hours](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/) before a problem was considered unsolvable.

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 39.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp human verification campaign, 888 were labeled unsolvable by human trainers (who gave up after a 2-hour limit without AI assistance), which is 70.8%.** This is from the OpenAI BrowseComp blog post and paper, where trainers from the question-creation team attempted different problems; of the benchmark's 1,266 tasks, 11 were unattempted, leaving 1,255.[^openai.com/index/browsecomp/][^cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf]

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 61.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable by human trainers after two hours of searching (70.8%).** - This excludes 11 of the benchmark's 1,266 problems that were not attempted due to various reasons. - Humans solved 367/1,255 (29.2%), with 317/367 (86.4%) matching the reference answer. [[OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/)](https://openai.com/index/browsecomp/), [[BrowseComp paper Table 2](https://arxiv.org/html/2504.12516)](https://arxiv.org/html/2504.12516), [[paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 52.5s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 attempted tasks in the official human verification campaign for BrowseComp (part of the 1,266 total benchmark problems), 888 were labeled unsolvable within the two-hour search window, which is 71% (or ~70.8%).** The official OpenAI BrowseComp page and paper describe a verification process where human trainers attempted to solve tasks without AI tools. Trainers could label a problem “unsolvable and move on” after two hours of searching for especially hard cases. Secondary reports citing the primary sources confirm: “Of the 1,255 attempted tasks, 71% were marked as unsolvable within the two-hour window, and only 29% were successfully completed.” ([OpenAI BrowseComp](https://openai.com/index/browsecomp/)) ([arXiv paper](https://arxiv.org/abs/2504.12516)) ([MarkTechPost summary of paper](https://www.marktechpost.com/2025/04/10/openai-open-sources-browsecomp-a-new-benchmark-fo...

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 58.1s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems attempted in the official BrowseComp human verification campaign, 888 were labeled unsolvable (70.8%).** The full BrowseComp benchmark contains 1,266 tasks. Human trainers attempted most of these without AI tools within a two-hour window; 71% (precisely 888/1,255 ≈ 70.8%) were marked unsolvable, with only 29% successfully completed (86.4% agreement with reference answers on solved tasks). These verification numbers confirm the benchmark's difficulty, as reported in coverage of the OpenAI release. (https://openai.com/index/browsecomp/; https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf; https://www.marktechpost.com/2025/04/10/openai-open-sources-browsecomp-a-new-benchmark-for-measuring-the-ability-for-ai-agents-to-browse-the-web/)

### browsecomp-unsolved-math / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 24.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - In the official BrowseComp human verification campaign, trainers attempted **1,255** tasks. - **888** of them (exactly 70.8%) were labeled unsolvable within the two-hour limit. - Only 29% were solved, with 86.4% agreement to the reference answers among completed tasks. This matches the benchmark’s design criteria that questions be unsolvable by another human in ten minutes or by contemporary models.

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 34.3s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Out of **1,255** total problems in the BrowseComp verification campaign, **888** were labeled unsolvable, which equals **70.8%**. The remaining 367 problems (29.2%) were solvable by human trainers. These figures come from the official OpenAI BrowseComp announcement, which reports that human trainers were given up to two hours per question and could label a problem unsolvable if they could not solve it within that window. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 30.8s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Out of 1,255 total BrowseComp problems in the verification campaign, human trainers labeled 888 as unsolvable after two hours of effort, which corresponds to 70.8% of the dataset【https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf】.

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 95.6s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> In the BrowseComp human verification campaign, the numbers are as follows: * **Total problems attempted:** 1,255 [Marktechpost](https://www.marktechpost.com/2025/04/10/openai-open-sources-browsecomp-a-new-benchmark-for-measuring-the-ability-for-ai-agents-to-browse-the-web/) * **Unsolvable problems:** 888 * **Percentage unsolvable:** 70.8%

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 125.6s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **In the official BrowseComp verification campaign described in the research paper, human trainers attempted 1,255 problems (out of the benchmark's 1,266 total, excluding 11 unattempted).** - 888 were labeled unsolvable after trainers gave up following 2 hours of searching without AI assistance. - This represents 70.8% (888/1,255) labeled unsolvable. **Quotes from Section 3 (Human performance):** "allowed trainers to label a problem as unsolvable and move on if they could [not] solve it within 2 hours"; Table 2: "Human gave up after two hours | 888 / 1,255 (70.8%)". [BrowseComp paper](https://arxiv.org/pdf/2504.12516.pdf)

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 91.6s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,266 total problems in BrowseComp, no official numbers on those labeled unsolvable from a verification campaign are found in primary sources.** - The [arXiv paper](https://arxiv.org/pdf/2504.12516) and [OpenAI blog](https://openai.com/index/browsecomp) consistently state the benchmark comprises 1,266 challenging questions. - Secondary sources mention human trainers solving 29.2% within 2 hours ([AI Wiki](https://aiwiki.ai/wiki/BrowseComp)), but no primary confirmation of "verification campaign" stats like 888/1255 (70.8%). - Evidence on unsolvable labels is weak or absent in official docs, GitHub repo, and searches.

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 24.0s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,255 problems in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** The benchmark ultimately consists of 1,266 questions after construction and filtering. The verification campaign (human raters/trainers attempting problems with time limits to label solvability, create reference answers, and ensure verifiability) identified a high fraction as unsolvable by humans under the protocol, consistent with reported human performance around 29.2%. These numbers come directly from the search campaign data referenced in the initial sources and OpenAI's announcement. ([BrowseComp paper](https://arxiv.org/pdf/2504.12516), [OpenAI blog](https://openai.com/index/browsecomp)). The GitHub repo (https://github.com/openai/simple-evals) contains the eval script and dataset for exact reproduction.

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 46.5s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** The released benchmark contains 1,266 questions overall. This verification/human-trainer campaign figure (888/1,255 = 70.8% unsolvable; equivalently, humans solved ~29.2% in ≤2 hours) comes from the dataset construction and filtering process described in the official paper and blog. - [BrowseComp paper (arXiv:2504.12516)](https://arxiv.org/pdf/2504.12516) - [OpenAI announcement](https://openai.com/index/browsecomp) - [simple-evals GitHub repo](https://github.com/openai/simple-evals)

### browsecomp-unsolved-math / exa / xai/grok-4.3
Score: 92/100 (fail), duration 37.4s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **Out of 1,255 problems considered in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** The final released benchmark contains 1,266 questions after filtering and curation. These figures come directly from OpenAI’s BrowseComp paper and announcement.

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 305.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Out of **1,255** problems in the official BrowseComp human verification campaign, **888** were labeled unsolvable—about **70.8%** of the campaign. The paper reports that human trainers solved only 367 of those 1,255 problems, a 29.2% success rate, leaving the remaining 888 unsolvable. [BrowseComp summary by Ryan Lee](https://www.ryanlee.ai/posts/browsecomp/)

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 99.3s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The BrowseComp verification campaign labeled 888 out of 1,255 problems as unsolvable, which is 70.8% {https://www.ryanlee.ai/posts/browsecomp/}. This leaves 367 problems considered solvable (1,255 − 888 = 367). Human trainers achieved a 29.2% success rate (367/1,255) on the solvable subset within a 2‑hour limit {https://www.ryanlee.ai/posts/browsecomp/}.

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 71.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Based on the official BrowseComp research, the verification campaign results are as follows: * **Total problems in the campaign:** 1,255 [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516) * **Number of problems labeled unsolvable:** 888 [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516) * **Percentage unsolvable:** 70.8% [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516)

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 40.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **GPT-4o**: 0.6% [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) - **GPT-4o with browsing**: 1.9% [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) - **OpenAI o1**: 9.9% [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) - **Deep Research**: 51.5% (*trained specifically on BrowseComp-like data*) [OpenAI BrowseComp page](https://openai.com/index/browsecomp/)

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 36.1s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page** ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)), which references the research paper, the listed accuracies are:** - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (*trained specifically on BrowseComp-like tasks*) [Table from paper](https://arxiv.org/html/2504.12516v1#S4.T3).

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp benchmark:** - **GPT-4o**: 0.6% accuracy - **GPT-4o with browsing**: 1.9% accuracy - **OpenAI o1**: 9.9% accuracy - **Deep Research**: 51.5% accuracy These figures are reported directly in OpenAI's paper and mirrored across the official announcement page and secondary analyses of the benchmark. [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 34.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page:** - **GPT-4o**: 0.6% accuracy - **GPT-4o with browsing**: 1.9% accuracy - **OpenAI o1 (medium)**: 9.9% accuracy - **Deep Research**: 51.5% accuracy These figures appear in the model performance table on the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) (and the linked [research paper](https://arxiv.org/html/2504.12516v1)).

### browsecomp-model-baselines / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 26.6s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp benchmark, the reported accuracies are:** - GPT-4o: 0.6% - GPT-4o with browsing: 1.9% - OpenAI o1: 9.9% - Deep Research: 51.5% These figures appear in the performance table on the [BrowseComp announcement page](https://openai.com/index/browsecomp/) and the associated [paper](https://arxiv.org/abs/2504.12516) (Table 3), where Deep Research is noted as an agent model explicitly trained for persistent web browsing.

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 65.7s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official BrowseComp page and its linked research paper, the accuracies are: **GPT-4o** at [0.6%](https://arxiv.org/html/2504.12516v1), **GPT-4o with browsing** at [1.9%](https://arxiv.org/html/2504.12516v1), **OpenAI o1** at [9.9%](https://arxiv.org/html/2504.12516v1), and **Deep Research** at [51.5%](https://arxiv.org/html/2504.12516v1). The OpenAI blog post notes that Deep Research significantly outperforms the other models, solving around half of the problems.

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 137.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> GPT‑4o achieves 0.6% accuracy on BrowseComp, GPT‑4o with browsing improves to 1.9%, OpenAI o1 reaches 9.9%, and Deep Research attains 51.5% accuracy【https://arxiv.org/html/2504.12516v1】. These figures are also confirmed in model‑by‑model breakdowns showing GPT‑4o and GPT‑4.5 near zero, with browsing providing only a modest gain and o1’s stronger reasoning yielding a larger jump【https://www.aimodels.fyi/papers/arxiv/browsecomp-simple-yet-challenging-benchmark-browsing-agents】.

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 132.7s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the BrowseComp technical paper, the listed accuracies for the requested models are as follows: * **GPT-4o**: 0.6% accuracy [[Table 3: Accuracy and calibration of OpenAI models on BrowseComp](https://arxiv.org/html/2504.12516v1)] * **GPT-4o with browsing**: 1.9% accuracy [[Table 3: Accuracy and calibration of OpenAI models on BrowseComp](https://arxiv.org/html/2504.12516v1)] * **OpenAI o1**: 9.9% accuracy [[Table 3: Accuracy and calibration of OpenAI models on BrowseComp](https://arxiv.org/html/2504.12516v1)] * **Deep Research**: 51.5% accuracy [[Table 3: Accuracy and calibration of OpenAI models on BrowseComp](https://arxiv.org/html/2504.12516v1)]

### browsecomp-model-baselines / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 219.9s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The official OpenAI BrowseComp page ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)) and research paper do not list explicit accuracy percentages for GPT-4o, GPT-4o with browsing, OpenAI o1, or Deep Research in tables or text.** - Initial search snippets reference GPT-4o: 0.6%, GPT-4o browsing: 1.9%, o1: 9.9%, Deep Research: 51.5% (likely %), but these are unverified secondary claims without primary source confirmation. - Paper Figure 1 shows an early OpenAI Deep Research version scaling to ~50-60% accuracy with increased test-time compute, but no exact figures or comparisons to other models [arxiv.org/pdf/2504.12516](https://arxiv.org/pdf/2504.12516). - simple-evals GitHub repo hosts the benchmark code but no model results leaderboard for these models (deprecated for new evals post-July 2025) [github.com/openai/simple-evals](https://github.com/openai/simple-evals...

### browsecomp-model-baselines / exa / xai/grok-4-1-fast
Score: 85/100 (fail), duration 111.4s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; no Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The official BrowseComp page ([OpenAI](https://openai.com/index/browsecomp)) does not list specific accuracies for the requested models in accessible text excerpts; performance details appear in the associated research paper and summaries.** - According to secondary analyses of the paper, GPT-4o (no browsing) scores 0.6%, GPT-4o with browsing 1.9%, OpenAI o1 9.9%, and an early OpenAI Deep Research ~51% ([arXiv paper summary](https://www.sciencestack.ai/paper/2504.12516v1)). - Deep Research accuracy scales with test-time compute, reaching up to ~60% in Figure 1 of the paper ([arXiv PDF](https://arxiv.org/pdf/2504.12516)). **Evidence for exact numbers on the official page is thin or image-based, as fetches and searches returned only introductory content.**

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 91.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **On the official BrowseComp page and paper:** - GPT-4o: 0.6% - GPT-4o with browsing: 1.9% - OpenAI o1: 9.9% - Deep Research: 51.5% (scales with test-time compute; early version shown in Figure 1). These figures come from the [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and the [research paper (arXiv:2504.12516)](https://arxiv.org/pdf/2504.12516), which note that standard models struggle while additional browsing effort and test-time compute improve performance on the 1,266 hard-to-find questions.

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 78.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **On the official BrowseComp page, the listed accuracies are GPT-4o at 0.6%, GPT-4o with browsing at 1.9%, OpenAI o1 at 9.9%, and Deep Research at 51.5%.** (https://openai.com/index/browsecomp) These figures appear in the performance section and Figure 1 of the accompanying paper, which shows Deep Research scaling with test-time compute up to ~51% while base models and standard browsing yield low single-digit results. (https://arxiv.org/pdf/2504.12516) The benchmark measures persistent navigation for hard-to-find information across 1,266 questions; exact numbers come from the OpenAI announcement and evaluation results.

### browsecomp-model-baselines / exa / xai/grok-4.3
Score: 92/100 (fail), duration 28.6s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - On the official BrowseComp benchmark, GPT-4o scores **0.6%**, GPT-4o with browsing scores **1.9%**, OpenAI o1 scores **9.9%**, and Deep Research scores **51.5%**. - These figures appear in OpenAI’s announcement and the accompanying paper, which highlight how accuracy scales with browsing effort and test-time compute.

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 315.2s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official BrowseComp page, the reported accuracies are: - **GPT-4o:** 0.6% - **GPT-4o with browsing:** 1.9% - **OpenAI o1:** 9.9% - **Deep Research:** 51.5% These figures are listed in the model comparison on the [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and are also shown in [Table 3 of the accompanying research paper](https://ar5iv.org/html/2504.12516#S4.T3).

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 640.1s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - GPT‑4o: 0.6% accuracy - GPT‑4o with browsing: 1.9% accuracy - OpenAI o1: 9.9% accuracy - Deep Research: 51.5% accuracy These values are reported in the BrowseComp paper’s Table 3 and surrounding text (see the arXiv version: “Enabling browsing for GPT‑4o led to a modest improvement in accuracy (from 0.6% to 1.9%)” and the table listing OpenAI o1 at 9.9% and Deep Research at 51.5%)【https://arxiv.org/html/2504.12516v1】.

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 92/100 (fail), duration 67.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> According to the official BrowseComp benchmark results, the listed accuracies are: * **GPT-4o**: 0.6% * **GPT-4o with browsing**: 1.9% * **OpenAI o1**: 9.9% * **Deep Research**: 51.5%

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 54.1s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **GPT-4o with browsing achieves 1.9% accuracy on the official BrowseComp benchmark, compared to 0.6% without browsing.** **The absolute improvement is 1.3 percentage points (1.9% - 0.6%).** This is confirmed in the [OpenAI BrowseComp announcement table](https://openai.com/index/browsecomp/) and [BrowseComp paper Table 3](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), where accuracies are explicitly listed as percentages.

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 34.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The official BrowseComp accuracy table lists GPT-4o without browsing at 0.6% and GPT-4o with browsing at 1.9%.** **Absolute improvement: 1.9% - 0.6% = 1.3 percentage points.** [OpenAI BrowseComp benchmark page](https://openai.com/index/browsecomp/) [BrowseComp paper Table 3](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 34.5s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The absolute improvement is 1.3 percentage points** (1.9% - 0.6%). According to the official BrowseComp results on the OpenAI announcement page and paper, GPT-4o achieves 0.6% accuracy without browsing, while GPT-4o w/ browsing reaches 1.9% accuracy. The page explicitly states this is "a modest improvement in accuracy (from 0.6% to 1.9%)". - Primary sources: [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) and [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 33.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **1.3 percentage points.** The official BrowseComp accuracy table lists GPT-4o at **0.6%** and GPT-4o w/ browsing at **1.9%** ([OpenAI announcement](https://openai.com/index/browsecomp/); [research paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)). Subtracting these values yields an absolute improvement of **1.3** percentage points, as stated in the accompanying text: "Enabling browsing for GPT‑4o led to a modest improvement in accuracy (from 0.6% to 1.9%)".

### browsecomp-browsing-delta / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 32.0s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **Absolute improvement**: 1.3 percentage points (1.9% − 0.6%). - The official BrowseComp table lists GPT-4o at 0.6% accuracy and GPT-4o with browsing at 1.9% accuracy. - OpenAI states: “Enabling browsing for GPT‑4o led to a modest improvement in accuracy (from 0.6% to 1.9%)”. [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 27.9s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official BrowseComp model accuracy table, GPT-4o with browsing achieves **1.9%** accuracy compared to **0.6%** without browsing, yielding an absolute improvement of **1.3 percentage points**. This is shown in [OpenAI's BrowseComp blog post](https://openai.com/index/browsecomp/) and the [official BrowseComp paper (Table 3)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 61.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Enabling browsing for GPT‑4o increases its BrowseComp accuracy from 0.6% to 1.9%, yielding an absolute improvement of **1.3 percentage points**【https://openai.com/index/browsecomp/】. This is derived directly from the official BrowseComp accuracy table published by OpenAI, which lists GPT‑4o at 0.6% and GPT‑4o with browsing at 1.9% .

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 37.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Based on the official BrowseComp model accuracy table, the absolute improvement of GPT-4o with browsing over GPT-4o without browsing is **1.3 percentage points**. * **GPT-4o (without browsing) accuracy:** 0.6% ([OpenAI BrowseComp Table 3](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)) * **GPT-4o with browsing accuracy:** 1.9% ([OpenAI BrowseComp Table 3](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf))

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 46.8s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% on BrowseComp, while GPT-4o with browsing scores 1.9%, for an absolute improvement of 1.3 percentage points (1.9 - 0.6).** Multiple secondary sources consistently report these figures from the official OpenAI BrowseComp announcement and paper, including [search snippets from OpenAI's page](source index="1") and [arXiv paper TL;DR](source index="8") explicitly stating "browsing-enabled GPT-4o yields modest gains (~1.9%)". Leaderboards like [llmdb.com](source index="10") list GPT-4o at 0.6%. No primary source excerpts contain the full table, but the numbers align across reports citing OpenAI's materials [https://openai.com/index/browsecomp](https://openai.com/index/browsecomp) and [https://arxiv.org/pdf/2504.12516](https://arxiv.org/pdf/2504.12516). The improvement is absolute difference in accuracy percentage points.

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast
Score: 79/100 (fail), duration 54.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; no The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% accuracy on the BrowseComp benchmark, while GPT-4o with browsing scores 2.5%.** **The absolute improvement is therefore 1.9 percentage points (2.5% - 0.6%).** [ScienceStack summary of the official BrowseComp paper](https://www.sciencestack.ai/paper/2504.12516v1) notes that "browsing-enabled GPT-4o yields modest gains (~1.9%)", consistent with these figures from leaderboards and search results.

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 39.8s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing achieves 0.6% accuracy on BrowseComp; GPT-4o with browsing reaches 1.9%.** The absolute improvement is **1.3 percentage points**. This comes directly from the official OpenAI BrowseComp announcement and the associated research paper (arXiv:2504.12516), which note that browsing-enabled GPT-4o yields modest gains of ~1.9% (vs. 0.6% without). See: [OpenAI BrowseComp page](https://openai.com/index/browsecomp) and [BrowseComp paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-reasoning
Score: 92/100 (fail), duration 41.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% on BrowseComp; GPT-4o with browsing scores 1.9%.** The absolute improvement is therefore **1.3 percentage points**. These exact figures come from the official model accuracy table in the OpenAI BrowseComp announcement and research paper (https://openai.com/index/browsecomp, https://arxiv.org/pdf/2504.12516). The paper notes this as only modest gains for browsing-enabled GPT-4o on the 1,266-question benchmark.

### browsecomp-browsing-delta / exa / xai/grok-4.3
Score: 92/100 (fail), duration 21.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **GPT-4o scores 0.6% on BrowseComp without browsing tools.** **GPT-4o with browsing reaches 1.9%.** **Absolute improvement: 1.3 percentage points.** These figures come directly from OpenAI’s official BrowseComp announcement and the accompanying paper (arXiv:2504.12516 / cdn.openai.com PDF), which present the model accuracy table for the 1,266-question benchmark.

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 163.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the BrowseComp benchmark, GPT-4o scores **0.6%** accuracy without browsing and **1.9%** with browsing enabled. The absolute improvement is therefore **1.3 percentage points** (1.9% − 0.6%). Source: [MLQ.ai analysis of BrowseComp benchmark results](https://mlq.ai/news/test-finds-claude-opus-46-identifying-its-benchmark-and-decrypting-browsecomp-answers/)

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 158.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; no The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> GPT-4o without browsing scores **0.6%** on the BrowseComp benchmark, as shown in the LLMDB leaderboard where GPT-4o is listed with a score of 0.6【https://llmdb.com/benchmarks/browsecomp】. With browsing enabled, GPT-4o achieves a gain of approximately **1.9 percentage points**, yielding about **2.5%** accuracy【https://www.sciencestack.ai/paper/2504.12516v1】. Thus, the absolute improvement of GPT-4o with browsing over GPT-4o without browsing is **1.9 percentage points**. Sources: LLMDB leaderboard (GPT-4o score 0.6) and ScienceStack evaluation (browsing-enabled GPT-4o gains ~1.9%).

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 79/100 (fail), duration 150.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; no The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Based on the BrowseComp research paper, browsing-enabled GPT-4o yields a modest improvement of approximately **1.9 percentage points** over GPT-4o without browsing [ScienceStack](https://www.sciencestack.ai/paper/2504.12516v1). While the baseline accuracy for GPT-4o is extremely low at approximately 0.6% [LLM Benchmark](https://llmdb.com/benchmarks/browsecomp), the addition of browsing capabilities provides this incremental gain on the challenging benchmark [ScienceStack](https://www.sciencestack.ai/paper/2504.12516v1).

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 63.7s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research is the best-performing model listed on the official BrowseComp page table, achieving 51.5% accuracy.** - Table excerpt: | Model | Accuracy (%) | | Deep research* | 51.5 | (*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*) [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/) **Caveat:** The Deep Research model is trained on data that specifically teaches it to be good at BrowseComp tasks. [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 35.1s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep research** is the best-performing model listed on the official BrowseComp page table, achieving **51.5% accuracy**.[^1] [^1]: [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/) It includes the caveat: "*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*"[^1]

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 14.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (marked with \*) at 51.5% accuracy.** - The official BrowseComp page table lists it as the top performer: |Model |Accuracy (%) | |---|---| |... |... | |Deep research\* |51.5 | - **Caveat**: "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks." ([Official BrowseComp page](https://openai.com/index/browsecomp/)) This matches the initial sources and the instruction to use fetch_links on the named official page before relying on the numbers. Other listed models (GPT-4o, o1, etc.) score well below 10%.

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (51.5% accuracy) is the best-performing model listed in the table on the official BrowseComp page.** - It is marked with an asterisk noting: "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks." ([Official BrowseComp page](https://openai.com/index/browsecomp/)) - Other listed models score far lower (GPT-4o 0.6%, GPT-4o w/ browsing 1.9%, GPT-4.5 0.9%, o1 9.9%). This matches the primary source table and attached caveat; later BrowseComp-Plus work addresses reproducibility concerns with the original dynamic-web evaluation.

### browsecomp-best-caveat / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 13.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research** is the best-performing model listed on the official BrowseComp page, achieving **51.5%** accuracy. - The table (from the “Performance of OpenAI models” section) shows: GPT-4o (0.6%), GPT-4o w/ browsing (1.9%), GPT-4.5 (0.9%), OpenAI o1 (9.9%), and Deep Research\* (51.5%). - Attached caveat (verbatim footnote): “\*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.” This result is reported directly on the official page at [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/).

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 43.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - The best-performing model listed in the [official BrowseComp table](https://openai.com/index/browsecomp/) is **Deep research**, with an accuracy of **51.5%**. - The entry carries a caveat: *“Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.”*

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 69.8s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The best‑performing model listed in the official BrowseComp table is **Deep Research** with **51.5%** accuracy, and the caveat attached to that result is that the Deep Research model is trained on data specifically teaching it to be good at BrowseComp tasks【https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf】.

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 25.9s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> On the official [BrowseComp page](https://openai.com/index/browsecomp/), the best-performing listed model is **Deep research***, which achieved an accuracy of **51.5%**. The caveat attached to this result is that the [Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks](https://openai.com/index/browsecomp/).

### browsecomp-best-caveat / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 36.4s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **OpenAI Deep Research is the best-performing listed model on the official BrowseComp page, achieving 51.5% accuracy.[^14]** **Caveat: This model was trained on BrowseComp tasks.[^14]** The official OpenAI page at https://openai.com/index/browsecomp and paper snippets mention an early version of OpenAI Deep Research scaling with test-time compute but do not show a full table with exact 51.5% or explicit training caveat; secondary sources consistently identify this score and note.[^11][^3] Current third-party leaderboards show higher scores (e.g., GPT-5.5 Pro at 90.1%), indicating evolution beyond initial results. Evidence for the exact caveat on the official page is thin.

### browsecomp-best-caveat / exa / xai/grok-4-1-fast
Score: 79/100 (fail), duration 80.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; no The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **OpenAI Deep Research is reported as the best-performing model on BrowseComp with 51.5% accuracy.** - This score comes from secondary analyses of the benchmark's launch results, where it outperformed others but humans achieved only 29.2% within 2 hours ([AI Wiki](https://aiwiki.ai/wiki/BrowseComp)). - The [official OpenAI page](https://openai.com/index/browsecomp) and [paper](https://arxiv.org/pdf/2504.12516) highlight an early version of Deep Research scaling to ~50-60% with test-time compute (Figure 1) but lack a full model table or leaderboard. Available evidence on a specific table is thin; leaderboards like [Steel.dev](https://leaderboard.steel.dev/leaderboards/browsecomp/) show later models (e.g., GPT-5.5 Pro at 90.1%) far exceeding 51.5%. The caveat for Deep Research's result is likely training on BrowseComp data, as implied by critiques in [BrowseComp-Plus](https://arxiv.org/ab...

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 43.7s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **OpenAI Deep Research (early version) is the best-performing listed model on the official BrowseComp page, with 51.5% accuracy.** This figure comes from the benchmark's performance plot showing accuracy scaling with test-time compute. **Caveat:** It is an early version of OpenAI Deep Research; initial search results and the AI Wiki explicitly note it as "trained on data" or "note trained on BrowseComp tasks," consistent with the paper's description of an internal early system. - [Official BrowseComp page](https://openai.com/index/browsecomp) - [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 45.5s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research at 51.5% accuracy (with asterisk).** On the official BrowseComp page, the table lists Deep Research as the top model with **51.5%** accuracy, far ahead of OpenAI o1 (9.9%), GPT-4o with browsing (1.9%), and others below 1%. The attached caveat states: "*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*" ([Official page](https://openai.com/index/browsecomp)). This matches primary sources noting the 51.5% figure for the early OpenAI Deep Research system.

### browsecomp-best-caveat / exa / xai/grok-4.3
Score: 92/100 (fail), duration 56.8s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **OpenAI Deep Research is the best-performing model listed on the official BrowseComp page (https://openai.com/index/browsecomp), achieving 51.5% accuracy.** - This result comes from an early version of the model, as shown in the page’s performance section and Figure 1 (test-time compute scaling). - Caveat/note attached: trained on BrowseComp tasks (per the benchmark’s own reporting and related evaluations). This is corroborated directly in the official announcement, the linked arXiv paper (https://arxiv.org/pdf/2504.12516), and the PDF (https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), which emphasize the model’s persistence-based browsing gains while noting the specific training context for the reported score.

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 241.6s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> On the official BrowseComp benchmark table, the best-performing listed model is **OpenAI Deep Research**, achieving **51.5%** accuracy. The entry includes a footnote caveat stating: *“Note that the Deep Research model is trained on data that specifically teach the model to be good at BrowsingComp tasks.”* ([BrowseComp paper](https://arxiv.org/html/2504.12516v1))

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 30/100 (fail), duration 82.6s
Facts: no Deep Research was the best-performing listed model; no Deep Research scored 51.5%; no The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> (empty)

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 79/100 (fail), duration 101.1s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; no The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> According to the official BrowseComp page and research, the best-performing listed model is **OpenAI Deep Research**, which achieves an accuracy of **51.5%** [AI Wiki](https://aiwiki.ai/wiki/BrowseComp). The results for this model are noted as being from an **early version** with performance scaling based on **varying browsing effort** [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516).

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 23.2s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three specific checks to ensure questions were sufficiently challenging:** - Verified that existing models (GPT-4o with/without browsing, o1, and an early deep research version) could not solve them. [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/) - Performed five simple searches to confirm the answer did not appear on the first page of any search engine results. [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/) - Aimed for tasks unsolvable by another person in under 10 minutes; for a portion of questions, a second trainer tested them, and creators whose tasks were solved >40% of the time revised them. [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 22.6s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure BrowseComp questions were sufficiently challenging, per the official page: - Verified that existing models like GPT-4o (with/without browsing), o1, and an early deep research model could not solve them.[[BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)] - Performed five simple searches to confirm the answer was not on the first pages of search engine results.[[BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)] - Aimed for questions too hard for another person to solve in under 10 minutes; if a second trainer solved >40% of a batch, the creator revised them (not strictly enforced for all).[ [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)]

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.9s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks:** - Verified that GPT-4o (with/without browsing), o1, and an early deep research model could not solve the questions. [Official BrowseComp page](https://openai.com/index/browsecomp/) - Performed five simple searches confirming the answer was not on the first pages of results. [Official BrowseComp page](https://openai.com/index/browsecomp/) - Created tasks another person could not solve in under 10 minutes (not strictly enforced; a second trainer tested some questions); creators whose tasks were solved >40% of the time were asked to revise them. They also used an “inverted question” approach (start with a fact, craft a hard-to-find but easy-to-verify query). [Official BrowseComp page](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 45.3s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks (per the official page):** - Verified existing models (GPT-4o with/without browsing, o1, early deep research model) could not solve them. - Performed **five simple searches** confirming the answer was absent from the first pages of results. - Created tasks unsolvable by another person in **ten minutes** (second trainer tested a portion; creators whose tasks were solved >**40%** of the time revised them). [Official BrowseComp page](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / xai/grok-4.3
Score: 79/100 (fail), duration 46.0s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three explicit checks on the official BrowseComp page to ensure questions were sufficiently challenging:** - Existing models (GPT-4o with/without browsing, o1, and an early deep research model) failed to solve them. - Five simple Google-style searches showed the answer was absent from the first page of results. - Another human trainer could not solve the task in under 10 minutes; creators whose questions were solved >40% of the time were required to revise them. These checks were paired with an “inverted question” design: trainers started from a verifiable fact (“seed”), added high-entropy constraints, and produced questions that are easy to check but hard to discover. (See the full process at [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/).)

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 35.8s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official OpenAI BrowseComp page, trainers used three checks to ensure questions were sufficiently challenging: * **Model unsolvability:** Trainers verified that GPT‑4o (with and without browsing), o1, and an early version of the deep research model could not solve the problem. * **Search unavailability:** Trainers performed five simple searches and confirmed the answer did not appear on the first pages of search engine results. * **Human difficulty:** Trainers aimed to create tasks another person could not solve within ten minutes; for a portion of questions, a second trainer attempted finding the answer, and creators whose tasks were solved more than 40% of the time were asked to revise them. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 16.5s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - Trainers verified that existing models (GPT‑4o with and without browsing, OpenAI o1, and an early version of the deep research model) could not solve the question. - Trainers performed five simple searches and checked that the answer was not available on any of the first pages of search engine results. - Trainers created tasks that another person could not solve within ten minutes; if a second trainer solved more than 40% of a creator’s questions, the task was revised. Source: OpenAI’s BrowseComp page detailing the three checks used to ensure questions were sufficiently challenging.

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 61.4s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> To ensure questions were sufficiently challenging, trainers used three primary checks: * **Model failure:** Trainers verified that existing models, specifically GPT-4o, o1, and an early version of the deep research model, could not solve the problems [[OpenAI BrowseComp page](https://openai.com/index/browsecomp/)]. * **Search difficulty:** Trainers performed five simple searches and confirmed the answer was not available on any of the first pages of search engine results [[OpenAI BrowseComp page](https://openai.com/index/browsecomp/)]. * **Human difficulty:** Trainers created tasks that were difficult enough for another person to be unable to solve within ten minutes [[OpenAI BrowseComp page](https://openai.com/index/browsecomp/)]. Additionally, if a second trainer was able to solve more than 40% of a creator's questions, those tasks were required to be revised [[arXiv:2504.12516](https...

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast-non-reasoning
Score: 51/100 (fail), duration 37.8s
Facts: no Existing models were checked and could not solve the question; yes Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **Trainers ensured BrowseComp questions were sufficiently challenging by verifying that answers could not be found through simple web searches and required persistent navigation across multiple sites, with human trainers solving only ~29% within 2-hour limits.[source index="10"][source index="16"]** **The available evidence is thin on exact official checks from the BrowseComp page or paper excerpts, as snippets do not include dataset creation details; secondary sources mention "five simple searches" to prevent leakage but lack primary confirmation.[source index="1"][source index="10"]**

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast
Score: 38/100 (fail), duration 37.2s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers verified each question's difficulty through specific checks during dataset creation:** - **Five Google searches check**: Confirmed the answer could not be found using five straightforward Google searches, preventing leakage from simple retrieval.[BrowseComp paper TL;DR](https://www.sciencestack.ai/paper/2504.12516v1) - **10-minute time limit**: Ensured solving took trainers more than 10 minutes of searching.[Superintelligence News summary](https://superintelligencenews.com/companies/openai/openai-browsecomp-ai-benchmark/) - These ensured hard-to-find, entangled information, with overall human solve rate at 29.2% given 2 hours.[DoingFedTime blog](https://doingfedtime.com/browsecomp-openais-brutally-hard-benchmark-for-ai-browsing-agents/) The official OpenAI page ([openai.com/index/browsecomp](https://openai.com/index/browsecomp)) and paper describe the benchmark but excerpts l...

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-non-reasoning
Score: 38/100 (fail), duration 17.9s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers created BrowseComp questions through a human QA paradigm and used verification to ensure they required persistent navigation for hard-to-find, entangled information.** - They checked that answers could not be found with five straightforward (or simple) Google searches to prevent easy leakage and confirm sufficient challenge. - Additional checks ensured short, time-invariant, verifiable answers supported by evidence, with trainers spending significant time (often ~10 minutes or more per question in related descriptions). These processes are detailed in the official OpenAI blog and arXiv paper ([OpenAI BrowseComp page](https://openai.com/index/browsecomp); [arXiv paper](https://arxiv.org/html/2504.12516)).

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-reasoning
Score: 59/100 (fail), duration 25.0s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Trainers ensured questions could not be answered with five straightforward Google searches, required persistent navigation across many pages, and had short answers verifiable against web evidence.** They confirmed difficulty via human collection (trainers spent significant time per question; humans solved ~29-40% even with 2 hours). See [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp) and [arXiv paper](https://arxiv.org/html/2504.12516).

### browsecomp-challenge-checks / exa / xai/grok-4.3
Score: 92/100 (fail), duration 14.0s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Trainers used three explicit checks on the official BrowseComp page to ensure questions were sufficiently challenging:** - Existing models (GPT-4o with and without browsing, o1, and an early Deep Research version) could not solve them. - They performed five simple searches and confirmed the answer was absent from the first page of search-engine results. - Another person could not solve the task within ten minutes (not strictly enforced, but for sampled questions a second trainer attempted it; creators of tasks solved >40% of the time were asked to revise). These criteria appear verbatim in the “About the BrowseComp benchmark” section of the OpenAI announcement and are repeated in the paper.

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 79/100 (fail), duration 120.4s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Trainers applied three checks to ensure questions were sufficiently challenging: they verified that GPT‑4o (with and without browsing), OpenAI o1, and an early deep‑research model could not solve the problem; they performed five simple Google searches and confirmed the answer was not readily available on the first pages of results; and they designed tasks so that another person would be unlikely to solve them within ten minutes, revising any question that a second trainer solved more than 40 % of the time ([BrowseComp paper](https://arxiv.org/html/2504.12516)).

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 71/100 (fail), duration 20.9s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Trainers used three checks to make BrowseComp questions sufficiently challenging: (1) they verified that existing models (GPT‑4o with/without browsing, o1, and an early deep‑research model) could not solve the questions; (2) they performed five simple web searches and confirmed the answer did not appear on the first pages of results; and (3) they ensured another person could not solve the question within ten minutes, revising tasks that a second trainer solved more than 40% of the time【https://openai.com/index/browsecomp】.

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 38/100 (fail), duration 90.0s
Facts: no Existing models were checked and could not solve the question; no Trainers performed five simple searches; no Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> To ensure questions were sufficiently challenging and "web-resistant," trainers used a check to verify that answers could not be found using [five straightforward web searches](https://www.sciencestack.ai/paper/2504.12516v1). This process was implemented to prevent information leakage and to ensure that the benchmark measures the ability to find hard-to-locate, entangled information rather than simple retrieval ([Superintelligence News](https://superintelligencenews.com/companies/openai/openai-browsecomp-ai-benchmark/)).

### gaia-counts / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 58.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and their answers.** **Answers to 300 of them were retained (not released) to power the leaderboard, while the questions for all 466 were released.** These numbers are stated directly in the official arXiv publication page abstract: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board available at [this https URL](https://huggingface.co/gaia-benchmark)." [arXiv:2311.12983](https://arxiv.org/abs/2311.12983) and consistently in Meta AI's official publication page. [GAIA: a benchmark for general AI assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)

### gaia-counts / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions.**[^1][^7] **Answers to 300 of them were retained for the leaderboard** (with the rest released publicly), as stated on the [official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) and matching the [arXiv preprint](https://arxiv.org/abs/2311.12983). [^1]:[arXiv:2311.12983 abstract](https://arxiv.org/abs/2311.12983) [^7]:[Meta AI research page for GAIA](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)

### gaia-counts / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 11.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions.** The official arXiv paper states: "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board." ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983)) **300 answers were retained for the leaderboard**, with the remaining 166 serving as a public development set. ([GAIA paper](https://arxiv.org/abs/2311.12983); [Hugging Face GAIA dataset page](https://huggingface.co/datasets/gaia-benchmark/GAIA)) This matches the primary sources from the official GAIA publication and Hugging Face benchmark pages.

### gaia-counts / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 28.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions; answers to 300 were retained for the leaderboard (the rest serve as a development set).** This is stated directly in the official GAIA paper abstract on both the arXiv publication page and Meta's research page: "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board available at https://huggingface.co/gaia-benchmark." ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983), [Meta AI](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)).

### gaia-counts / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 8.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions.** The authors state: “Using GAIA’s methodology, we devise 466 questions and their answer.” **They retained the answers to 300 of those questions** to power the public leaderboard (the remaining 166 serve as a development set). This exact count appears on the official publication pages: - [arXiv:2311.12983](https://arxiv.org/abs/2311.12983) - [Meta AI research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) - [Hugging Face dataset card](https://huggingface.co/datasets/gaia-benchmark/GAIA) (The paper and leaderboard site consistently cite these two figures.)

### gaia-counts / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 30.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> Using GAIA's methodology, its authors devised **466 questions** (with answers), and retained answers to **300** of them to power the [leaderboard](https://huggingface.co/gaia-benchmark), as stated on the official [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) and the [arXiv preprint](https://arxiv.org/abs/2311.12983).

### gaia-counts / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 24.4s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA devised 466 questions and retained answers to 300 of them to power the leaderboard【https://arxiv.org/abs/2311.12983】. This is also confirmed in the Meta AI publication announcing the benchmark【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants】.

### gaia-counts / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 27.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> According to the [official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) and the corresponding [arXiv paper](https://arxiv.org/abs/2311.12983), the GAIA benchmark devised **466 questions** and retained answers to **300** of them to power the leaderboard.

### gaia-counts / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.1s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and their answers, releasing the questions while retaining answers to 300 of them to power the leaderboard.** This is stated directly on the [official Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/): "Using GAIA's methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." The statement is consistent across the [arXiv paper](https://arxiv.org/pdf/2311.12983) and [ICLR 2024 proceedings](https://openreview.net/attachment?id=fibxvahvs3&name=pdf).

### gaia-counts / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 21.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** This is stated directly on the official Meta AI publication page: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." [The statement is identical in the original arXiv preprint](https://arxiv.org/pdf/2311.12983) and [ICLR 2024 conference paper](https://openreview.net/attachment?id=fibxvahvs3&name=pdf). The 466 questions split into a public set of 166 (for development) and a private test set of 300 (answers withheld).

### gaia-counts / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 6.4s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** - The official GAIA publication states: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark." ([AI at Meta publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) - The arXiv paper and ICLR version repeat this verbatim. ([arXiv:2311.12983](https://arxiv.org/pdf/2311.12983)) This matches the benchmark's public dev set (~166 questions) and private test set (300 questions) structure.

### gaia-counts / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 12.2s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions; answers to 300 were retained for the leaderboard.** The official GAIA publication page states: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark.” ([Meta AI GAIA page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) This matches the arXiv paper and HF dataset description, which split the questions into a public dev set and a private test set whose answers power the leaderboard. ([arXiv:2311.12983](https://arxiv.org/pdf/2311.12983))

### gaia-counts / exa / xai/grok-4.3
Score: 92/100 (fail), duration 10.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions in total.** The official GAIA publication page states: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark.” **Exactly 300 answers were retained** (withheld) for the private test set used by the leaderboard, while the questions themselves were released publicly. This split is confirmed directly on the Meta AI Research page for the ICLR 2024 paper.

### gaia-counts / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 25.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> According to Meta’s official GAIA publication page, the authors devised **466 questions**, and they retained answers to **300** of them to power the public leaderboard. The retained 300-question private test set is complemented by a 166-question public development set whose answers are released. ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/))

### gaia-counts / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Error: [flue] Starting server on port 56489...
[flue] Mode: local (all agents invokable, including trigger-less)
[flue] Server ready. Running agent: research
[flue] Agent started
  
[flue] tool:start  fetch_links
[flue] tool:error   fetch_links  Cannot set both 'livecrawl' and 'maxAgeHours'. Use 'maxAgeHours' instead (livecrawl is deprecated).
  
[flue] Agent error: terminated

### gaia-counts / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 29.2s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA devised 466 questions and retained answers for 300 of them to power the leaderboard ([GAIA: a benchmark for general AI assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)).

### gaia-capability-gap / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.6s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency for its real-world questions.** [Meta official publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) **Human respondents achieve 92%, while GPT-4 equipped with plugins scores 15%.** [GAIA arXiv abstract page](https://arxiv.org/abs/2311.12983) [Hugging Face papers page](https://huggingface.co/papers/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4-1-fast
Score: 75/100 (fail), duration 19.8s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires real-world questions that test fundamental abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency.** [GAIA paper abstract](https://arxiv.org/abs/2311.12983) **Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins scores 15%.** [GAIA paper PDF](https://arxiv.org/pdf/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4.20-0309-non-reasoning
Score: 75/100 (fail), duration 7.3s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and generally tool-use proficiency.** [GAIA paper (arXiv)](https://arxiv.org/pdf/2311.12983) **Human respondents obtain 92% vs. 15% for GPT-4 equipped with plugins.** [GAIA paper (arXiv)](https://arxiv.org/pdf/2311.12983) These exact claims appear in the abstract of the official GAIA publication.

### gaia-capability-gap / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 19.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities: reasoning, multi-modality handling, web browsing, and tool-use proficiency.** ([Meta official publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [arXiv:2311.12983](https://arxiv.org/abs/2311.12983)) **Reported scores: humans obtain 92% vs. 15% for GPT-4 equipped with plugins.** (same primary sources; exact abstract quote on both pages) These real-world questions are conceptually simple for humans but challenging for current AI systems. The benchmark uses 466 questions (with a public dev set and private test set for leaderboard evaluation).

### gaia-capability-gap / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 13.4s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities such as reasoning, multi-modality handling, web browsing, and general tool-use proficiency.** **On the official publication page, humans score 92% while GPT-4 equipped with plugins scores 15%.** This is stated directly in the abstract of the GAIA paper: [GAIA: a benchmark for General AI Assistants](https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 27.6s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> - GAIA requires fundamental abilities such as **reasoning**, **multi-modality handling**, **web browsing**, and general **tool-use proficiency** ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)). - Human respondents score **92%**, while **GPT-4 equipped with plugins** scores **15%** ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)).

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 13.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA evaluates general AI assistants on fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency【https://arxiv.org/abs/2311.12983】. On the benchmark, human respondents achieve 92% accuracy, whereas GPT-4 equipped with plugins scores only 15%【https://arxiv.org/abs/2311.12983】.

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 37.5s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA requires a set of fundamental abilities, including [reasoning, multi-modality handling, web browsing, and tool-use proficiency](https://huggingface.co/papers/2311.12983). On the benchmark, [human respondents achieve a 92% score](https://arxiv.org/abs/2311.12983), while [GPT-4 equipped with plugins scores only 15%](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants).

### gaia-capability-gap / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency.** [GAIA: a benchmark for General AI Assistants on Meta AI](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [arXiv paper PDF](https://arxiv.org/pdf/2311.12983) **Human respondents achieve 92% accuracy, while GPT-4 with plugins scores 15%.** [ICLR 2024 conference paper](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)

### gaia-capability-gap / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 28.1s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires a set of fundamental abilities including reasoning, multi-modality handling, web browsing, and general tool-use proficiency.** [Official abstract on Meta AI research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [GAIA arXiv paper](https://arxiv.org/pdf/2311.12983) [ICLR conference paper](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) **Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins scores 15%.** These scores reflect performance on conceptually simple real-world questions.

### gaia-capability-gap / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 5.8s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and generally tool-use proficiency.** **Humans score 92%; GPT-4 with plugins scores 15%.** ([GAIA official Meta publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) ([arXiv paper](https://arxiv.org/pdf/2311.12983)) These exact figures and abilities are stated in the abstract of the official GAIA paper. The benchmark questions are conceptually simple for humans yet challenging for advanced AI systems.

### gaia-capability-gap / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 12.1s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency.** **Humans score 92% while GPT-4 with plugins scores 15%** on its questions, which are conceptually simple for people but challenging for current AI systems. These results are reported directly on the [official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) (May 2024, also linking to the ICLR paper and [Hugging Face leaderboard](https://huggingface.co/gaia-benchmark)).

### gaia-capability-gap / exa / xai/grok-4.3
Score: 100/100 (pass), duration 16.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities including reasoning, multi-modality handling, web browsing, and general tool-use proficiency.** - Human respondents score **92%** on the benchmark. - GPT-4 equipped with plugins scores **15%**. These figures are reported directly in the official GAIA publication on the [AI at Meta research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) and the corresponding [arXiv paper](https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 62.5s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> - **Required abilities:** The official GAIA publication page lists reasoning, multi-modality handling, web browsing, and generally tool-use proficiency ([Meta AI](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)). - **Reported scores:** Human respondents obtain **92%** versus **15%** for GPT-4 equipped with plugins ([arXiv abstract](https://arxiv.org/abs/2311.12983)).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 22.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency. Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins achieves 15%【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 54.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA requires a set of fundamental abilities, including [reasoning, multi-modality handling, web browsing, and tool-use proficiency](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/). On this benchmark, [human respondents obtain 92% accuracy, compared to 15% for GPT-4 equipped with plugins](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/).

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 13.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), focusing on fundamental abilities such as reasoning, multi-modality, web browsing, and tool use.** [GAIA: a benchmark for General AI Assistants (official Meta publication)](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) **This departs from the trend of designing benchmarks with tasks ever more difficult for humans, such as specialized professional skills in law or chemistry where LLMs now outperform humans.** [arXiv:2311.12983 abstract](https://arxiv.org/abs/2311.12983) **GAIA posits AGI requires AI robustness matching average humans on these accessible tasks, using 466 questions (answers withheld for 300 to power the leaderboard).** [GAIA: a benchmark for General ...

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 22.4s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), focusing on fundamental abilities such as reasoning, multi-modality, web browsing, and tool use.** **This departs from the trend in other AI benchmarks, which emphasize tasks ever more difficult for humans—e.g., professional skills in law or chemistry where LLMs now outperform humans—positing that AGI requires human-like robustness on such everyday tasks.** [[arXiv:2311.12983](https://arxiv.org/abs/2311.12983)] [[Meta AI publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)]

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 11.6s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's philosophy targets conceptually simple questions for humans (92% accuracy) that require complex tool use, reasoning, and multi-modality—challenging for advanced AIs (15% for GPT-4 with plugins).** [Official GAIA paper](https://arxiv.org/abs/2311.12983) - It departs from the trend of benchmarks that target tasks *ever more difficult for humans* (e.g., intricate STEM/Law or writing books), which LLMs increasingly outperform non-expert humans on but suffer from contamination, evaluation issues, and poor interpretability. - Instead, GAIA uses unambiguous, real-world questions easy to verify automatically, positing that AGI requires human-like robustness on such tasks. [Meta AI Research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) [ar5iv HTML](https://ar5iv.labs.arxiv.org/html/2311.12983) (466 questions total; official sources confirm a...

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 15.0s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA targets conceptually simple real-world questions for humans (92% accuracy) that remain challenging for AI (15% for GPT-4 with plugins), requiring reasoning, multimodality, web browsing, and tool use.** This departs from the current trend in AI benchmarks that target tasks ever more difficult for humans, where LLMs often outperform humans on professional skills (e.g., law or chemistry). The official page states: “GAIA’s philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans. We posit that the advent of Artificial General Intelligence (AGI) hinges on a system’s capability to exhibit similar robustness as the average human does on such questions.” ([GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [arXiv:2311.12983](https://arxiv.org/abs/2311.12983)).

### gaia-philosophy-contrast / parallel / xai/grok-4.3
Score: 77/100 (fail), duration 9.7s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for average humans (92% accuracy) yet challenging for current AI systems (e.g., 15% for GPT-4 with plugins), measuring robustness on fundamental skills like reasoning, multimodality, web browsing, and tool use.** This departs from the prevailing trend of AI benchmarks that focus on tasks ever more difficult for humans, such as professional-level problems in law or chemistry where LLMs often outperform people. Instead, GAIA posits that progress toward AGI requires AI to match human-like reliability on everyday tasks, as stated in the paper: "GAIA's philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans. We posit that the advent of Artificial General Intelligence hinges on a system's capability to exhibit similar robustness as the a...

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 31.9s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> - GAIA’s philosophy explicitly departs from the prevailing trend of designing benchmarks around tasks that are “ever more difficult for humans,” instead proposing real-world questions that are **conceptually simple for humans yet challenging for advanced AI** ([Meta AI publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)). - The authors highlight that while LLMs increasingly outperform humans on professional tasks such as law or chemistry, humans score **92%** on GAIA versus only **15%** for GPT-4 equipped with plugins, and they posit that AGI hinges on a system exhibiting **similar robustness as the average human** on such fundamental questions rather than exceeding humans on ever-harder expert tasks ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983)).

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 16.5s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA’s benchmark philosophy diverges from the prevailing trend of targeting tasks that are ever more difficult for humans; instead, it focuses on real‑world questions that are conceptually simple for humans yet remain challenging for advanced AI, assessing whether a system exhibits human‑like robustness on such tasks【https://arxiv.org/abs/2311.12983】.

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 29.0s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> * GAIA's philosophy departs from the trend of targeting AI benchmarks toward tasks that are increasingly difficult for humans, such as those requiring professional skills in law or chemistry [[GAIA: A Benchmark for General AI Assistants (arXiv)](https://arxiv.org/abs/2311.12983)]. * Instead, it focuses on questions that are "conceptually simple for humans yet challenging for most advanced AIs," requiring fundamental abilities like reasoning, multi-modality handling, and tool-use proficiency [[GAIA: A Benchmark for General AI Assistants (arXiv)](https://arxiv.org/abs/2311.12983)]. * The benchmark aims to assess whether an AI can exhibit the same "robustness as the average human," highlighting a significant capability gap where human respondents achieve 92% accuracy compared to 15% for GPT-4 equipped with plugins [[GAIA: A Benchmark for General AI Assistants (arXiv)](https://arxiv.org/abs...

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15%), contrasting with trends where LLMs outperform humans on specialized professional tasks like law or chemistry.** [GAIA arXiv paper](https://arxiv.org/pdf/2311.12983) [ICLR proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) **Unlike benchmarks pursuing tasks ever more difficult for humans—which GAIA explicitly departs from—it posits AGI requires AI robustness matching average humans on these everyday, multi-step problems involving reasoning, multi-modality, web browsing, and tool use.** [GAIA arXiv paper](https://arxiv.org/pdf/231...

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 25.1s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15%), focusing on fundamental abilities such as reasoning, multi-modality, web browsing, and tool use.** [This departs from the current trend in AI benchmarks that suggest targeting tasks ever more difficult for humans, where LLMs now outperform humans on professional skills e.g., in law or chemistry](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/). [The official Meta publication page emphasizes that AGI progress hinges on AI matching average human robustness on such accessible tasks](https://arxiv.org/pdf/2311.12983).

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 9.5s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA targets conceptually simple real-world questions that are easy for humans (92% accuracy) but challenging for advanced AIs (e.g., 15% for GPT-4 with plugins), reversing the trend of benchmarks that escalate difficulty beyond human capabilities.** - It prioritizes robustness on everyday tasks requiring reasoning, multi-modality, web browsing, and tool use—positing that AGI depends on matching average human performance on such questions. This philosophy is stated directly in the official GAIA paper: “GAIA’s philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans.” ([GAIA paper](https://arxiv.org/pdf/2311.12983), [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/))

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.2s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's philosophy departs from benchmarks targeting tasks ever more difficult for humans** by instead proposing real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AI (15% for GPT-4 with plugins). It posits that AGI hinges on a system exhibiting similar robustness as the average human on such questions, which require reasoning, multi-modality, web browsing, and tool use. This contrasts with the recent trend of LLMs outperforming humans on professional skills like law or chemistry. ([Official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [arXiv:2311.12983](https://arxiv.org/pdf/2311.12983))

### gaia-philosophy-contrast / exa / xai/grok-4.3
Score: 100/100 (pass), duration 10.5s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA’s benchmark philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans.** It instead proposes real-world questions that are conceptually simple for humans (92 % accuracy) yet challenging for most advanced AIs (15 % for GPT-4 with plugins), requiring fundamental abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency. This approach contrasts with the recent trend of LLMs outperforming humans on tasks requiring professional skills in e.g. law or chemistry; GAIA posits that AGI hinges on a system’s capability to exhibit similar robustness as the average human does on such questions. See the official publication: [GAIA: a benchmark for General AI Assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) and the arXiv paper [2311.12983](https...

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 32.8s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> GAIA’s philosophy deliberately departs from the prevailing benchmark trend of targeting tasks that are ever more difficult for humans—such as professional skills in law or chemistry, where LLMs increasingly outperform people—and instead focuses on real-world questions that are conceptually simple for humans yet challenging for advanced AI. On GAIA, human respondents score 92% while GPT-4 with plugins scores only 15%, highlighting a robustness gap the authors argue is central to AGI: progress should be measured by mastering these human-easy tasks requiring fundamental reasoning, multi-modality handling, web browsing, and tool use, not by surpassing humans in narrow expert domains. ([Meta AI official publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [ICLR 2024 paper](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80...

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 15.4s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> GAIA’s benchmark philosophy is to evaluate AI assistants on real‑world questions that are conceptually simple for humans yet challenging for advanced AI systems, measuring human‑like robustness rather than surpassing human ability on specialized tasks. This directly contrasts with the prevailing trend of creating benchmarks that target tasks ever more difficult for humans, where AI often outperforms people on professional‑skill evaluations. As stated in the official GAIA publication, “GAIA’s philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans”【https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/】.

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 100/100 (pass), duration 25.8s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> - GAIA departs from the trend of targeting AI benchmarks at tasks that are increasingly difficult for humans, such as those requiring professional expertise in law or chemistry. - Instead, it focuses on tasks that are [conceptually simple for humans](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) but challenging for AI, positing that AGI hinges on a system's ability to exhibit [robustness similar to the average human](https://arxiv.org/abs/2311.12983) on such questions. - This performance disparity is demonstrated by human respondents obtaining [92% accuracy](https://huggingface.co/learn/agents-course/unit4/what-is-gaia) compared to only 15% for GPT-4 equipped with plugins.

### flue-start-commands / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 19.7s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is the fastest/preferred path as a watch-mode server on port 3583 that rebuilds/reloads on changes; `flue dev --target cloudflare` (via wrangler) is also supported for Workers-compatible dev.** [Deploy Node docs](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [Deploy Cloudflare docs](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), [CLI packages](https://github.com/withastro/flue/tree/main/packages/cli). **`flue run` supports `--target node` for one-shot production-style agent invocations (e.g., `flue run <agent> --target node --id <id> [--payload '<json>']`), building a temp server, streaming progress, and outputting JSON—ideal for CI/local testing without a persistent server.** [Deploy Node docs](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [AGENTS.md](https://github.com/wi...

### flue-start-commands / parallel / xai/grok-4-1-fast
Score: 38/100 (fail), duration 29.8s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev` prefers `--target node` (Node.js server) or `--target cloudflare` (Cloudflare Workers with `wrangler`), starting a watch-mode dev server on port 3583 that rebuilds/reloads on edits.** [`flue run` supports only `--target node` for one-shot, production-style invocations (e.g., `flue run hello --target node --id test-1`).** [Flue start.md skill](https://flueframework.com/start.md), [AGENTS.md](https://raw.githubusercontent.com/withastro/flue/main/AGENTS.md), [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-start-commands / parallel / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 12.1s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is preferred** (fastest path with watch-mode rebuilds/reloads on edits). **`flue run` supports only `--target node`** (one-shot production-style build/invoke/exit for CI or scripting; Cloudflare uses `flue dev --target cloudflare` for local testing instead). Both commands accept `--target node` or `--target cloudflare` (with `wrangler` for the latter), but Node is recommended for speed in dev workflows. See [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md), [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), and [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md).

### flue-start-commands / parallel / xai/grok-4.20-0309-reasoning
Score: 71/100 (fail), duration 24.8s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (Node.js dev server) and `flue dev --target cloudflare` (Cloudflare Workers via wrangler) are the preferred/supported targets.** (https://github.com/withastro/flue) **`flue run` supports the `node` target** (used in examples with `--target node` for one-shot runs). (https://github.com/withastro/flue/blob/main/AGENTS.md) (https://github.com/withastro/flue/blob/main/docs/deploy-node.md) These match the fetched start.md guidance to follow the Node.js or Cloudflare deploy guides for local setup and validation commands.

### flue-start-commands / parallel / xai/grok-4.3
Score: 59/100 (fail), duration 26.0s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is the preferred target** (long-running watch-mode dev server with rebuilds/reloads on edits; default port 3583). `--target cloudflare` is supported as an alternative but requires `wrangler` as a peer dependency. `flue run` supports only the `node` target for its one-shot, production-style execution (build + single agent invocation, used in CI/scripted runs). See exact command examples and details in the official [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 71/100 (fail), duration 46.1s
Facts: no Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For local development, `flue dev` supports both `--target node` (described as the fastest path) and `--target cloudflare` (via wrangler). `flue run` only supports `--target node`; Cloudflare builds must be tested locally with `flue dev --target cloudflare` instead.

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 30/100 (fail), duration 21.7s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For local development, the preferred `flue dev` targets are `--target node` and `--target cloudflare` as shown in the examples【https://github.com/withastro/flue/blob/main/AGENTS.md】. The `flue run` command supports the `--target node` target【https://github.com/withastro/flue/blob/main/AGENTS.md】.

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 33/100 (fail), duration 53.4s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For local development, the preferred `flue dev` command targets are `node` (described as the "fastest path") and `cloudflare` ([Source 1](https://github.com/withastro/flue)). The `flue run` command supports the `node` target ([Source 1](https://github.com/withastro/flue)).

### flue-start-commands / exa / xai/grok-4-1-fast-non-reasoning
Score: 29/100 (fail), duration 42.0s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **For local development, `flue dev` is the preferred command as a long-running watch-mode dev server on port 3583 (override with `--port`), with `--target node` or `--target cloudflare` both supported (`wrangler` required for cloudflare).** [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) **`flue run` supports `--target node` (and likely cloudflare) for one-shot production-style invocations.** [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) **No single preferred dev target is specified; node is shown first in examples for full Node.js capabilities, while cloudflare enables Workers simulation.** [Flue deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) [Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-start-commands / exa / xai/grok-4-1-fast
Score: 33/100 (fail), duration 54.0s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> - For local development, `flue dev` (watch mode) and `flue run` (CLI mode) are used, with the **node** target preferred as it enables simple local server execution without deployment tools like wrangler. [SourcePulse overview](https://www.sourcepulse.org/projects/29042645) - Node.js setup guides emphasize local running on this target. [Deploy on Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) - `flue run` supports the **node** target for executing specific agents like `flue run triage`. [Flue homepage](https://flueframework.com/) Evidence on explicit `--target` flags is thin; commands may default to **node** for local use.

### flue-start-commands / exa / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 19.7s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node --env .env` is the preferred/fastest command**; it builds the workspace, starts a server on port 3583 with watch mode for automatic reloads on changes. **`flue dev --target cloudflare --env .env` is also supported** (via wrangler) for Cloudflare-targeted agents. **`flue run` supports only `--target node`** (e.g. `flue run translate --target node --env .env --payload '...'`) for one-shot CLI invocation of agents; Cloudflare uses `flue dev --target cloudflare` for local testing instead. These details come from the official Node.js and Cloudflare deploy guides: [deploy-node.md](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-node.md) and [deploy-cloudflare.md](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md). The fetched https://flueframework.com/start.md references thes...

### flue-start-commands / exa / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 46.9s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (Node.js dev server with watch mode) and `flue dev --target cloudflare` (Cloudflare Workers dev server via wrangler) are the preferred targets.** **`flue run` supports only `--target node`** (it starts the generated Node.js server for one-shot/production-style invocation of a specific agent). These are documented directly in the official deploy guides. See: [Deploy Agents on Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [Deploy Agents on Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). (The requested https://flueframework.com/start.md describes project scaffolding that defers to these same guides for dev/run commands.)

### flue-start-commands / exa / xai/grok-4.3
Score: 30/100 (fail), duration 34.8s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev` prefers the `node` and `cloudflare` targets** (matching the two primary deploy guides and runtime-agnostic design). `flue run` supports the `node` target. - Install `@flue/cli` (with `wrangler` for Cloudflare) then run local development via the CLI; Node.js guides explicitly cover “running it locally” before any deployment.

### flue-start-commands / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 49/100 (fail), duration 12.6s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For local development, prefer `flue dev --target node` or `flue dev --target cloudflare`; the dev server runs on port 3583, watches files, and reloads on edits ([Flue start.md](https://flueframework.com/start.md)). The `flue run` command only supports `--target node` and does not support `--target cloudflare` ([Flue start.md](https://flueframework.com/start.md)).

### flue-start-commands / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 51/100 (fail), duration 51.9s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For local development, the preferred Flue dev command target is `node` (as shown in the Node.js deploy guide: `flue dev --target node --env .env`)【https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-node.md】. The `flue run` command also supports the `--target node` target for invoking agents without a server (see the same guide: `flue run translate --target node …`)【https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-node.md】.

### flue-start-commands / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 33/100 (fail), duration 54.7s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For local development, the preferred `flue dev` command is used in watch mode to monitor changes. The `flue run` command supports running agents, which can be deployed across various runtimes including [Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md).

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 21.8s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; `flue run` only supports `--target node` as it starts the generated server in Node.js.**<br><br>**For local Cloudflare Workers development, use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency), which builds the workspace and starts a dev server via Wrangler on port 3583.**<br><br>`flue dev` supports both `--target node` and `--target cloudflare`; `flue run` examples and docs show only `--target node`.<br>[Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)<br>[Deploy Cloudflare docs](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md)

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 25.0s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; it only supports `--target node` as it starts a Node.js server.[^1][^4]** **For local Cloudflare Workers development, use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency: `npm install --save-dev wrangler`).[^1][^2][^4]** [^1]: [Flue CLI examples from GitHub](https://github.com/withastro/flue) [^2]: [Flue AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) [^4]: [Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 11.7s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` starts the generated server in Node.js, so it **only supports `--target node`**. ([Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - For local Cloudflare development, use **`flue dev --target cloudflare`** (requires `wrangler` as a peer dependency; starts a Cloudflare Workers dev server on port 3583 via wrangler). ([Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md); [start.md](https://flueframework.com/start.md)) - `flue dev --target cloudflare` and `flue run ... --target node` both support `--env <path>` for loading environment variables. ([Initial sources](https://github.com/withastro/flue))

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 17.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` only supports `--target node` (it builds the artifact then starts it in Node.js). For local Cloudflare Workers development use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency; starts a dev server on port 3583 with hot reloading). See: [Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and [Flue start.md](https://flueframework.com/start.md).

### flue-cloudflare-negative / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 13.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` only supports `--target node` because it starts the generated server in Node.js. - For local Cloudflare development use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency). - Exact guidance: “`flue run` starts the generated server in Node.js, so it only supports `--target node`. Cloudflare builds use Worker-only runtime modules — `flue dev --target cloudflare` is the equivalent for testing them locally.” ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md))

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 38.6s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is not supported. According to Flue's Cloudflare deploy guide, [`flue run` only supports `--target node`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) because it starts the generated server in Node.js. For local Cloudflare development, use [`flue dev --target cloudflare`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) instead, which starts a Cloudflare Workers dev server via wrangler.

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 19.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> `flue run --target cloudflare` is not supported. For local Cloudflare development, use `flue dev --target cloudflare`. The `flue run` command only supports the `--target node` target【https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md】.

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 95/100 (fail), duration 44.5s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> * `flue run --target cloudflare` is not supported; `flue run` only supports `--target node` because it starts the generated server in Node.js ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)). * For local Cloudflare development, use `flue dev --target cloudflare` ([deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)).

### flue-cloudflare-negative / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 22.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; `flue run` only supports `--target node` for Node.js server execution.** [Flue Cloudflare docs](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) **For local Cloudflare development, use `flue dev --target cloudflare` (requires `wrangler`), which builds the workspace and starts a Workers dev server on port 3583 with hot reload.** [Flue Cloudflare docs](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) **`flue run` supports the `node` target for one-shot CLI invocation or running the generated Node.js server.** [Flue Node docs](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-cloudflare-negative / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 42.8s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported**, as `flue run` starts the generated server in Node.js and only supports [`--target node`](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md). - For local Cloudflare development, use [`flue dev --target cloudflare`](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md), which builds the workspace and starts a Cloudflare Workers dev server (via Wrangler) on port 3583 with file watching. - [`flue run` supports `--target node`](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-node.md) for one-shot CLI invocations of agents (e.g., `flue run translate --target node --payload '{...}'`).

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.5s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` starts the generated server in Node.js and **only supports `--target node`**. ([Cloudflare deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - For local Cloudflare development, use **`flue dev --target cloudflare`** (builds the workspace then starts a Cloudflare Workers dev server via wrangler on port 3583 with watch mode). ([Cloudflare deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) - Use `flue build --target cloudflare` followed by `wrangler deploy` for production. ([Cloudflare deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md); [Node deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)) (The requested https://flueframework.com/start.md redirects to project scaffolding...

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 28.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue dev --target cloudflare` is used for local Cloudflare development (it builds the workspace then starts a wrangler-based dev server on port 3583). `flue run` only supports `--target node` because it starts a generated Node.js server (Cloudflare builds rely on Worker-only runtime modules). See: [Deploy Agents on Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) (includes `npx flue build --target cloudflare`, `npx flue dev --target cloudflare --env .env`, and the explicit note on `flue run`).

### flue-cloudflare-negative / exa / xai/grok-4.3
Score: 49/100 (fail), duration 18.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; no flue run only supports --target node
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` supports the `node` target (see the Node.js deployment guide for local execution and server deployment). - For local Cloudflare development, use `flue dev --target cloudflare` (or equivalent Wrangler-based workflow described in the Cloudflare Workers deployment docs). Primary sources: [Flue Cloudflare deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and [Flue Node.js deployment guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 54.8s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is not supported. Per the project's internal CLI documentation, `flue run` only supports `--target node`, while `flue dev` supports both `--target node` and `--target cloudflare` ([`AGENTS.md`](https://github.com/withastro/flue/blob/main/AGENTS.md)). For local Cloudflare development, use `flue dev --target cloudflare`, which requires `wrangler` as a peer dependency.

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 28.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> `flue run --target cloudflare` is not supported. For local Cloudflare development, use `flue dev --target cloudflare` (which starts a wrangler dev server), while `flue run` only works with `--target node`【https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md】.

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 54/100 (fail), duration 46.9s
Facts: yes flue run --target cloudflare is not supported; no Local Cloudflare development should use flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> `flue run --target cloudflare` is **not supported**. For local Cloudflare development, you should use [wrangler dev](https://developers.cloudflare.com/workers/configuration/routing/routes/) (as Flue agents on Cloudflare are typically deployed as Workers) or [flue dev](https://github.com/withastro/flue) for a watch mode development experience. The `flue run` command is used to execute agents via the CLI (e.g., `flue run <agent-name>`) and does not utilize a `--target` flag for environment specification.

### flue-model-selection / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 12.2s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6`.[https://flueframework.com/start.md] **For a different requested model, check `https://flueframework.com/models.json` for the best model ID.** [https://flueframework.com/start.md] **If unavailable, ask before substituting another model and don't continue without a confirmed model ID.** [https://flueframework.com/start.md]

### flue-model-selection / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 54.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6` (latest Sonnet), `anthropic/claude-opus-4-7` (latest Opus), `openai/gpt-5.5` (GPT-5.5), and `openrouter/moonshotai/kimi-k2.6` (latest Kimi). **[Flue Start Guide](https://flueframework.com/start.md)** **For a different requested model, check the list at https://flueframework.com/models.json** to get the best model ID. **[Flue Start Guide](https://flueframework.com/start.md)** **If the requested model is unavailable, ask before substituting another and do not continue until a model ID is obtained.** **[Flue Start Guide](https://flueframework.com/start.md)**

### flue-model-selection / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.3s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **A different requested model should be checked in `https://flueframework.com/models.json`.** **If the requested model is unavailable, ask before substituting another model** (and do not continue until you have a valid model ID). [Flue start guide](https://flueframework.com/start.md)

### flue-model-selection / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 15.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **Different requested models should be checked in https://flueframework.com/models.json.** **If the requested model is unavailable, ask before substituting another model** (and do not continue until a valid model ID is confirmed). ([Flue start guide](https://flueframework.com/start.md))

### flue-model-selection / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 15.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **The Flue start guide recommends these exact model IDs:** - `anthropic/claude-sonnet-4-6` (latest Sonnet) - `anthropic/claude-opus-4-7` (latest Opus) - `openai/gpt-5.5` (GPT-5.5) - `openrouter/moonshotai/kimi-k2.6` (latest Kimi) For any other provider or model, consult the list at https://flueframework.com/models.json. If the requested model is unavailable, ask the user before substituting and do not proceed until a valid model ID is confirmed. (See https://flueframework.com/start.md for the full guidance.)

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 27.3s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: [`anthropic/claude-sonnet-4-6`](https://flueframework.com/start.md), [`anthropic/claude-opus-4-7`](https://flueframework.com/start.md), [`openai/gpt-5.5`](https://flueframework.com/start.md), and [`openrouter/moonshotai/kimi-k2.6`](https://flueframework.com/start.md). If the user wants a different model, check [`https://flueframework.com/models.json`](https://flueframework.com/models.json). If the requested model is unavailable, the guide says to **ask before substituting another model** and not to continue until you have a model ID.

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 14.3s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`【https://flueframework.com/start.md】. If the user wants a different provider or model, they should check the list at `https://flueframework.com/models.json`【https://flueframework.com/start.md】. If the requested model is unavailable, the guide instructs to ask before substituting another model and not to continue until a model ID is confirmed【https://flueframework.com/start.md】.

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 18/100 (fail), duration 110.9s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; no Suggested model includes openai/gpt-5.5; no Suggested model includes openrouter/moonshotai/kimi-k2.6; no Different models should be checked against models.json; no Unavailable requested models should not be substituted without asking
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> Based on the Flue documentation, the start guide suggests the following: * **Suggested Model IDs:** The guide provides `anthropic/claude-sonnet-4-6` as a primary example for initializing agents [GitHub: deploy-github-actions.md](https://github.com/withastro/flue/blob/main/docs/deploy-github-actions.md). * **Checking Different Models:** If you wish to use a different model, you should check the available models by running the command `flue add` to list available connectors [flueframework.com](https://github.com/withastro/flue). * **Unavailable Models:** If no model is passed to `init()` or a specific `prompt()` / `skill()` call, no model is automatically chosen, meaning the session will not have a model to operate with [GitHub: deploy-github-actions.md](https://github.com/withastro/flue/blob/main/docs/deploy-github-actions.md).

### flue-model-selection / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.4s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6` (latest Sonnet), `anthropic/claude-opus-4-7` (latest Opus), `openai/gpt-5.5` (GPT-5.5), and `openrouter/moonshotai/kimi-k2.6` (latest Kimi). [https://flueframework.com/start.md](https://flueframework.com/start.md) **For a different requested model, check `https://flueframework.com/models.json` to get the best model ID.** [https://flueframework.com/start.md](https://flueframework.com/start.md) **If the requested model is unavailable, ask before substituting another model—don't continue without a confirmed model ID.** [https://flueframework.com/start.md](https://flueframework.com/start.md)

### flue-model-selection / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 19.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6` [Flue start guide](https://flueframework.com/start.md). **For a different requested model:** Check [`https://flueframework.com/models.json`](https://flueframework.com/models.json) for the best model ID. **If unavailable:** Ask before substituting another model; do not continue without a valid model ID [Flue start guide](https://flueframework.com/start.md).

### flue-model-selection / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.1s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. [Flue start guide](https://flueframework.com/start.md) A different requested model should be checked in `https://flueframework.com/models.json`. [Flue start guide](https://flueframework.com/start.md) If the requested model is unavailable, ask before substituting another model (and do not continue until a model ID is confirmed). [Flue start guide](https://flueframework.com/start.md)

### flue-model-selection / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 11.6s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. A different requested model should be checked in the full list at [https://flueframework.com/models.json](https://flueframework.com/start.md). If the requested model is unavailable, ask before substituting another model (and do not continue until a valid model ID is confirmed). ([Flue start guide](https://flueframework.com/start.md))

### flue-model-selection / exa / xai/grok-4.3
Score: 92/100 (fail), duration 12.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **The Flue start guide at https://flueframework.com/start.md suggests these exact model IDs for `init({ model: '...' })`:** - `anthropic/claude-sonnet-4-6` - `anthropic/claude-opus-4-7` - `openai/gpt-5.5` - `openrouter/moonshotai/kimi-k2.6` For any different requested model, check the authoritative list at https://flueframework.com/models.json. If the requested model is unavailable, ask before substituting another model and do not continue until an exact model ID is confirmed.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 59.5s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. If the user wants a different model, check `https://flueframework.com/models.json` for the best model ID. If the requested model is unavailable, ask before substituting another model and do not continue until you have a model ID. [Source: Flue Start Guide](https://flueframework.com/start.md)

### flue-model-selection / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 14.6s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> - The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`【https://flueframework.com/start.md】. - If the user wants a different provider or model, they should check the model list at `https://flueframework.com/models.json` to get the best model ID【https://flueframework.com/start.md】. - If the requested model is unavailable, the guide says to ask before substituting another model and not to continue until a model ID is confirmed【https://flueframework.com/start.md】.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 54/100 (fail), duration 88.1s
Facts: no Suggested model includes anthropic/claude-sonnet-4-6; no Suggested model includes anthropic/claude-opus-4-7; no Suggested model includes openai/gpt-5.5; no Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> The Flue start guide suggests the exact model IDs `claude`, `sonnet`, `opus`, `gpt-5.5`, and `kimi-k2.6`, which can be found in [models.json](https://flueframework.com/start.md). If a different model is requested, it should be checked against this [models.json](https://flueframework.com/start.md) file. If the requested model is unavailable, the system should [ask before substituting](https://flueframework.com/start.md).

### flue-layout-rules / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 10.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout with `agents/` and `roles/` directly in the project root.** **For an existing non-empty directory, use the `.flue` layout with `agents/` and `roles/` under `./.flue/`.** Flue detects workspaces by checking for `./.flue/` first (using it if present), otherwise falling back to `./agents/` and `./roles/` at the root.[https://flueframework.com/start.md] [https://github.com/withastro/flue/blob/main/docs/deploy-node.md]

### flue-layout-rules / parallel / xai/grok-4-1-fast
Score: 92/100 (fail), duration 27.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory**, use the **root layout** with `agents/` and `roles/` directly in the project root.[^flue-start][^deploy-node] **For an existing non-empty directory**, use the **`.flue` layout** with `./.flue/agents/` and `./.flue/roles/` to avoid conflicts with existing files.[^flue-start][^deploy-node] Flue prioritizes `./.flue/` if present, falling back to root otherwise.[^AGENTS-md][^deploy-cloudflare]

### flue-layout-rules / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 12.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the `.flue/` layout** (agents in `.flue/agents/`, roles in `.flue/roles/`). **For an existing non-empty directory, use the root layout** (agents in `./agents/`, roles in `./roles/`) to avoid mixing framework files with existing project contents. Flue prefers `./.flue/` if it exists, otherwise falls back to the project root; the start guides explicitly recommend the `.flue/` layout for new projects created via `mkdir` + `npm init`. ([Flue deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)) ([Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)) (The requested https://flueframework.com/start.md appears to be a placeholder page and was not the source of the layout rules.)

### flue-layout-rules / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.9s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue prefers the root layout when initializing a fresh project and switches to the hidden `.flue/` layout to avoid mixing framework files with an existing codebase. See: [Flue start.md skill (project layout rules)](https://flueframework.com/start.md) and [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-layout-rules / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 14.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory**, use the root layout: create `./agents/` and `./roles/` directly in the target directory. **For an existing non-empty directory**, use the `.flue` layout: place agents and roles under `./.flue/agents/` and `./.flue/roles/` (Flue automatically prefers `.flue/` when it exists). These rules are stated verbatim in the official start skill at https://flueframework.com/start.md and repeated in the Node.js and Cloudflare deploy guides (e.g., https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 15.5s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - For a **new or empty** target directory, use the **root layout**: create `./agents/` and `./roles/` directly in that directory ([Flueframework.com start.md](https://flueframework.com/start.md)). - For an **existing non-empty** directory, use the **`.flue` layout**: create `./.flue/agents/` and `./.flue/roles/` so Flue stays scoped inside the hidden folder ([Flueframework.com start.md](https://flueframework.com/start.md)).

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 9.2s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For a new or empty target directory, Flue uses the root layout with `./agents/` and `./roles/`. For an existing non‑empty directory, it uses the `.flue` layout with `./.flue/agents/` and `./.flue/roles/`.【https://flueframework.com/start.md】

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 95/100 (fail), duration 47.2s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: no

Answer excerpt:

> For a new or empty target directory, you should use the **root layout** (`./agents/` and `./roles/`). For an existing directory that already contains files, you should use the **`.flue` layout** (`./.flue/agents/` and `./.flue/roles/`) [https://flueframework.com/start.md](https://flueframework.com/start.md).

### flue-layout-rules / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 19.9s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** with agents in `./agents/` and roles in `./roles/`. [Flue start.md skill](https://flueframework.com/start.md) **For an existing non-empty directory, use the `.flue` layout** with agents in `./.flue/agents/` and roles in `./.flue/roles/`. [Flue start.md skill](https://flueframework.com/start.md) Flue's runtime prioritizes `./.flue/` if it exists, otherwise falls back to the project root. [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-layout-rules / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 17.4s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout with agents in `./agents/` and roles in `./roles/`.** **For an existing non-empty directory, use the `.flue` layout with agents in `./.flue/agents/` and roles in `./.flue/roles/`.** [Flue start.md skill guidelines](https://flueframework.com/start.md) specify: "Directory does not exist: create it and use the root layout... Directory exists and is empty: use the root layout... Directory exists and already has files: use the `.flue` layout." This aligns with deploy docs, where Flue prioritizes `./.flue/` if present, else root.[Deploy Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-layout-rules / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 23.1s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/`, `./roles/`). **For an existing non-empty directory, use the `./.flue/` layout** (`./.flue/agents/`, `./.flue/roles/`). Flue prioritizes `./.flue/` if it exists; otherwise it falls back to the project root. This matches the official guidance in the deploy guides: "Flue looks for your workspace in one of two places: `./` — agents in `./agents/`, roles in `./roles/`. `./.flue/` — agents in `./.flue/agents/`, roles in `./.flue/roles/`. If `./.flue/` exists, Flue uses it. Otherwise it uses the project root." ([deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md); same text appears in start.md per research plan). The `flue` CLI and SDK follow this exact rule for any target directory.

### flue-layout-rules / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue selects the layout automatically per these rules: "Directory does not exist: create it and use the root layout... Directory exists and is empty: use the root layout... Directory exists and already has files: use the `.flue` layout." ([Flue start skill](https://flueframework.com/start.md)) This matches the guidance in the deploy guides. ([Node.js deploy](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [Cloudflare deploy](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md))

### flue-layout-rules / exa / xai/grok-4.3
Score: 92/100 (fail), duration 19.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory**, use the **root layout**: `./agents/` and `./roles/`. **For an existing non-empty directory**, use the **`.flue` layout**: `./.flue/agents/` and `./.flue/roles/`. (If `./.flue/` exists, Flue prefers it; otherwise it falls back to the project root.) This rule is stated directly in the official start guide and repeated in the deploy docs.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 25.1s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> For a new or empty target directory, use the **root layout** (`./agents/` and `./roles/`). For an existing non-empty directory, use the **`.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). [Flue start.md](https://flueframework.com/start.md)

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/nvidia/nemotron-3-120b-a12b
Score: 92/100 (fail), duration 11.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For a new or empty target directory, Flue uses the root layout with `./agents/` and `./roles/`. For an existing non-empty directory, Flue uses the `.flue` layout with `./.flue/agents/` and `./.flue/roles/`【https://flueframework.com/start.md】.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/google/gemma-4-26b-a4b-it
Score: 70/100 (fail), duration 33.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: no flueframework.com; citation: yes; fetch: no

Answer excerpt:

> Flue uses one of two workspace layouts depending on the presence of a `.flue/` directory: * **Root Layout:** Used if no `.flue/` directory exists, placing agents in `./agents/` and roles in `./roles/` ([Deploy Agents on Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)). * **`.flue/` Layout:** Used if a `./.flue/` directory exists, placing agents in `./.flue/agents/` and roles in `./.flue/roles/` ([Deploy Agents on Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)).

## Benchmark Design References

- https://openai.com/index/introducing-simpleqa/
- https://openai.com/index/browsecomp
- https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/
