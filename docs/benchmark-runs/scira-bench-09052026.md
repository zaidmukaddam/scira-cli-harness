# Benchmark Results: research-smoke

Small source-backed QA suite for comparing search provider and model combinations in the Flue research harness.

Started: 2026-05-09T02:52:08.803Z
Completed: 2026-05-09T03:16:39.518Z
Concurrency: 4

## Summary

| Provider | Model | Cases | Avg score | Passes | Errors | Avg duration |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| parallel | `xai/grok-4-1-fast-non-reasoning` | 19 | 94.4 | 12 | 0 | 19.4s |
| parallel | `xai/grok-4-1-fast` | 19 | 97.5 | 16 | 0 | 21.7s |
| parallel | `xai/grok-4.20-0309-non-reasoning` | 19 | 97.7 | 16 | 0 | 13.0s |
| parallel | `xai/grok-4.20-0309-reasoning` | 19 | 98.1 | 17 | 0 | 22.9s |
| parallel | `xai/grok-4.3` | 19 | 92.1 | 7 | 0 | 15.8s |
| parallel | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 96.1 | 17 | 0 | 25.5s |
| parallel | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5` | 19 | 96.7 | 15 | 0 | 21.3s |
| parallel | `cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash` | 19 | 86.3 | 2 | 0 | 19.2s |
| parallel | `mistral/mistral-small-latest` | 19 | 92.1 | 8 | 0 | 8.2s |
| exa | `xai/grok-4-1-fast-non-reasoning` | 19 | 95.7 | 14 | 0 | 12.7s |
| exa | `xai/grok-4-1-fast` | 19 | 97.6 | 16 | 0 | 17.4s |
| exa | `xai/grok-4.20-0309-non-reasoning` | 19 | 95.3 | 13 | 0 | 11.9s |
| exa | `xai/grok-4.20-0309-reasoning` | 19 | 98.1 | 17 | 0 | 19.1s |
| exa | `xai/grok-4.3` | 19 | 92.2 | 5 | 0 | 14.5s |
| exa | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6` | 19 | 97.8 | 18 | 0 | 24.4s |
| exa | `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5` | 19 | 92.9 | 16 | 0 | 17.9s |
| exa | `cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash` | 19 | 91.5 | 5 | 0 | 15.5s |
| exa | `mistral/mistral-small-latest` | 19 | 94.4 | 10 | 0 | 8.2s |

## Case Runs

### simpleqa-design / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 12.2s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** Official OpenAI materials state this explicitly in the benchmark introduction and paper: "SimpleQA, which contains 4,326 short, fact-seeking questions" and "with 4,326 questions, SimpleQA should have relatively low variance" [OpenAI Blog](https://openai.com/index/introducing-simpleqa/) and [SimpleQA Paper PDF](https://cdn.openai.com/papers/simpleqa.pdf). **Questions are easy to grade because each has only a single, indisputable answer.** This design ensures binary grading (correct/incorrect/not attempted), as "questions are created such that there exists only a single, indisputable answer" and "it must have a single, indisputable answer for easy grading" [SimpleQA Paper PDF](https://cdn.openai.com/papers/simpleqa.pdf) and [OpenAI Blog](https://openai.com/index/introducing-simpleqa/).

### simpleqa-design / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.0s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** [From the official OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf): "We present a benchmark called SimpleQA, which contains 4,326 short, fact-seeking questions." [The property that makes questions easy to grade is that each has only a single, indisputable answer](https://openai.com/index/introducing-simpleqa/): "it must have a single, indisputable answer for easy grading," with questions crafted to ensure objective knowledge and precise scope (e.g., specifying "which city" or "what year").

### simpleqa-design / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** [OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf) [arXiv paper](https://arxiv.org/html/2411.04368v1) **The property that makes questions easy to grade is that they are written such that there exists only a single, indisputable answer** (questions must have a single answer, with scope clearly specified, e.g., “what year” instead of “when”). [OpenAI paper](https://cdn.openai.com/papers/simpleqa.pdf) [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) Answers are graded as correct, incorrect, or not attempted.

### simpleqa-design / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 19.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** **Questions are easy to grade because they were written to have only a single, indisputable answer.** - [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/): "with 4,326 questions, SimpleQA should have relatively low variance"; "it must have a single, indisputable answer for easy grading." - [arXiv paper (HTML)](https://arxiv.org/html/2411.04368v1): "SimpleQA, which contains 4,326 short, fact-seeking questions"; "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer"; "questions were written in such a way that the predicted answers are easily gradable."

### simpleqa-design / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 17.8s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **SimpleQA contains exactly 4,326 questions.** The property that makes its questions easy to grade is that every question is written to have only a single, indisputable answer (with scope explicitly specified, e.g., “which city” or “what year”), so model outputs can be graded as correct, incorrect, or not attempted without ambiguity. This design is stated directly in the official paper and blog post.

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 21.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326** short, fact-seeking questions ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/); [SimpleQA PDF](https://cdn.openai.com/papers/simpleqa.pdf)). The questions are easy to grade because each is written to have only a **single, indisputable answer** ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/); [SimpleQA PDF](https://cdn.openai.com/papers/simpleqa.pdf)).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 14.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326 questions** [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/). The questions are easy to grade because each has a **single, indisputable answer** [arXiv:2411.04368](https://arxiv.org/abs/2411.04368).

### simpleqa-design / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 26.8s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Based on the official SimpleQA research paper, SimpleQA contains **4,326 short, fact-seeking questions**. The dataset ensures responses are **easy to grade because questions are designed to have only a single, indisputable answer**—each question must specify precision and scope to guarantee a single reference answer supported by evidence.

### simpleqa-design / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 4.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - SimpleQA contains **4,326 questions**. - Questions are easy to grade because they are designed to have a **single, indisputable answer**.

### simpleqa-design / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 short, fact-seeking questions.** [Official paper](https://cdn.openai.com/papers/simpleqa.pdf) and [OpenAI announcement](https://openai.com/index/introducing-simpleqa/) both state: "with 4,326 questions in the dataset" and "We present a benchmark called SimpleQA, which contains 4,326 short, fact-seeking questions." **The questions are easy to grade because each has only a single, indisputable answer.** This is confirmed in the paper's abstract and section 2.1: "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer" and "force questions to be written such that they only have a single, indisputable answer." The announcement echoes: "it must have a single, indisputable answer for easy grading."

### simpleqa-design / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 14.8s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **SimpleQA contains 4,326 short, fact-seeking questions.** [The questions are designed such that there exists only a single, indisputable answer, making responses easy to grade as correct, incorrect, or not attempted.](https://openai.com/index/introducing-simpleqa/) [This criterion is emphasized in the official paper.](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-design / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.4s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), [OpenAI blog](https://openai.com/index/introducing-simpleqa/)) **The property that makes questions easy to grade is that they are created such that there exists only a single, indisputable answer** (questions must “have a single answer” and be written to force “only a single, indisputable answer,” with scope clearly specified). ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), [OpenAI blog](https://openai.com/index/introducing-simpleqa/)) Grading uses a three-way label: correct, incorrect, or not attempted. The dataset is hosted at [https://github.com/openai/simple-evals](https://github.com/openai/simple-evals).

### simpleqa-design / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.7s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA contains 4,326 questions.** **Questions are easy to grade because they are written to have only a single, indisputable answer.** - Official paper: "We present a benchmark called SimpleQA, which contains 4,326 short, fact-seeking questions" and "responses are easy to grade, because questions are created such that there exists only a single, indisputable answer." ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) - Official announcement: "with 4,326 questions" and "it must have a single, indisputable answer for easy grading." ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)) Grading uses a three-way label ("correct", "incorrect", or "not attempted") via prompted LLM judge.

### simpleqa-design / exa / xai/grok-4.3
Score: 92/100 (fail), duration 11.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - SimpleQA contains **4,326** short, fact-seeking questions. - Questions are easy to grade because they are written to have only a **single, indisputable answer** (with scope explicitly specified), enabling reliable three-way grading of model outputs as correct, incorrect, or not attempted. This design is confirmed in the official paper and announcement.

### simpleqa-design / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 24.1s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - SimpleQA contains **4,326** short, fact-seeking questions ([OpenAI blog post](https://openai.com/index/introducing-simpleqa/); [arXiv paper](https://arxiv.org/html/2411.04368v1)). - The questions are easy to grade because each is required to have a **single, indisputable answer**, which eliminates ambiguity and allows predicted responses to be judged as correct, incorrect, or not attempted ([OpenAI blog post](https://openai.com/index/introducing-simpleqa/); [arXiv paper](https://arxiv.org/html/2411.04368v1)).

### simpleqa-design / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 19.6s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326** short, fact-seeking questions (4,321 in the test split and 5 few-shot examples). The questions are easy to grade because each is designed to have a **single, indisputable answer**—a criterion enforced during data collection by requiring questions to specify the exact scope of the answer (e.g., “which city” instead of “where”) and verified by independent human annotators. ([Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/), [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf))

### simpleqa-design / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 6.9s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> SimpleQA consists of **4,326 questions**. The benchmark is designed so that questions have a **single, indisputable answer**, which makes grading straightforward. Grading uses this fact by mapping a predicted answer to “Correct/Incorrect/Not Attempted” based on whether it matches the reference gold answer.

### simpleqa-design / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 7.0s
Facts: yes SimpleQA has 4,326 questions; yes Questions have a single indisputable answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> SimpleQA contains **4,326 questions** and each question is designed to have a **single, indisputable answer**, which makes grading straightforward and unambiguous://cdn.openai.com/papers/simpleqa.pdf,https://openai.com/index/introducing-simpleqa/.

### simpleqa-quality-check / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 19.6s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000** questions from the SimpleQA dataset. - They found a **94.4%** match rate with the original agreed answers (5.6% disagreement rate). - OpenAI estimated the inherent dataset error rate at **approximately 3%**, based on manual inspection revealing 2.8% of disagreements due to real question issues.[^openai.com/index/introducing-simpleqa/]

### simpleqa-quality-check / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset, finding a 94.4% match rate with the original agreed answers.** **OpenAI estimated the inherent dataset error rate to be approximately 3%, based on manual inspection of the 5.6% disagreements (2.8% due to trainer errors and 2.8% due to real question issues).** [[Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)]

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.6s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** They matched the original agreed answers **94.4%** of the time (5.6% disagreement rate). OpenAI manually inspected the disagreements and estimated the dataset's inherent error rate at approximately **3%** (with 2.8% of disagreements from grader false negatives or third-trainer human errors, and the other 2.8% from real question issues like ambiguity or conflicting sources). These details come directly from the official OpenAI announcement: [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/). Secondary sources like the Hugging Face README and Lucidity Insights article align with these exact figures.

### simpleqa-quality-check / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 14.9s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the dataset.** **They found a 94.4% match rate** with the original agreed-upon answers (5.6% disagreement). **OpenAI estimates the inherent error rate of the dataset at approximately 3%**, after manual inspection attributed half the disagreements to grader/human errors and half to real question issues (e.g. ambiguity or conflicting sources). ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/))

### simpleqa-quality-check / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 27.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000** questions from the SimpleQA dataset. - They found a **94.4%** match rate with the original agreed answers (5.6% disagreement). - OpenAI estimates the inherent dataset error rate at approximately **3%** after manual inspection of disagreements (half attributed to real question issues). [Official OpenAI page](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 12.7s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> OpenAI had a third AI trainer answer a random sample of **1,000 questions** from the SimpleQA dataset and found the trainer’s answers matched the original agreed answers **94.4%** of the time. From this verification, OpenAI estimated the dataset’s **inherent error rate to be approximately 3%** [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/).

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 13.1s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/) page: - A third AI trainer verified a **random sample of 1,000 questions**. - The trainer's answers matched the original agreed answers **94.4%** of the time. - OpenAI estimated the **inherent error rate of the dataset at approximately 3%** (derived from manually inspecting the 5.6% of disagreements, half of which were attributed to real issues with the questions).

### simpleqa-quality-check / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 8.7s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Based on the official OpenAI SimpleQA page, a **third AI trainer verified 1,000 random questions** from the dataset and found their answers matched the original agreed answers **94.4% of the time**. OpenAI then estimated the dataset's **inherent error rate to be approximately 3%**, which accounts for the 5.6% disagreement figure.

### simpleqa-quality-check / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 5.2s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - A third AI trainer verified a random sample of 1,000 questions and found a 94.4% match rate. - OpenAI estimated the inherent dataset error rate to be approximately 3%.

### simpleqa-quality-check / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.4s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the SimpleQA dataset.** **They achieved a 94.4% match rate with the original agreed-upon reference answers (per prompted ChatGPT grader), with a 5.6% disagreement rate.** **OpenAI estimated the inherent dataset error rate at approximately 3%, after manual review attributing ~2.8% of disagreements to real data issues like ambiguities or conflicting sources.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 15.5s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - The third AI trainer verified a random sample of **1,000** questions from the SimpleQA dataset.[^1][^4] - They achieved a **94.4%** match rate with the original agreed answers, per the ChatGPT grader.[^1][^4] - OpenAI estimated the inherent dataset error rate at **approximately 3%** after manual review of disagreements.[^1][^4] [^1]: [OpenAI SimpleQA paper excerpt on third trainer verification](https://arxiv.org/html/2411.04368v1) [^4]: [OpenAI Introducing SimpleQA blog on quality verification](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.0s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Third AI trainer verified a random sample of 1,000 questions, matching the original agreed reference answers 94.4% of the time (5.6% disagreement rate).** After manual inspection of the disagreements, OpenAI attributed roughly half (2.8%) to grader false negatives or third-trainer human errors, with the remaining 2.8% due to real dataset issues (e.g., ambiguous questions or conflicting sources), leading to an estimated inherent error rate of approximately 3%. These details come directly from the official Introducing SimpleQA blog post ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)) and align with the arXiv paper excerpted in the sources. The PDF version provides additional methodological context but reports the same 94.4% and ~3% figures.

### simpleqa-quality-check / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 17.3s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The third AI trainer verified a random sample of 1,000 questions from the finalized dataset.** They matched the original agreed-upon reference answers **94.4% of the time** (5.6% disagreement rate). After manual inspection of disagreements, OpenAI attributed half to grader false negatives or third-trainer errors and the remainder to real dataset issues (e.g., ambiguity or conflicting sources), estimating an **inherent error rate of approximately 3%**. ([Official SimpleQA page](https://openai.com/index/introducing-simpleqa/)) This is corroborated in the primary paper with identical core figures. ([SimpleQA paper](https://arxiv.org/html/2411.04368v1))

### simpleqa-quality-check / exa / xai/grok-4.3
Score: 100/100 (pass), duration 24.2s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - On the official SimpleQA page, OpenAI had a third AI trainer answer a **random sample of 1,000 questions** from the finalized dataset. - The third trainer’s answers **matched the original agreed reference answers 94.4% of the time** (5.6% disagreement). - After manual inspection of the disagreements, OpenAI estimated the dataset’s **inherent error rate at approximately 3%**. [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/)

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 16.9s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI’s official SimpleQA announcement, a third AI trainer verified a random sample of **1,000** questions, matched the original agreed answers **94.4%** of the time, and from manual inspection of the disagreements OpenAI estimated the dataset’s **inherent error rate at approximately 3%** ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)).

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 15.0s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI's official SimpleQA announcement: * **Random sample size:** 1,000 questions were answered by a third AI trainer as a final quality verification. * **Match rate:** The third trainer's answers matched the original agreed answers **94.4%** of the time. * **Inherent dataset error rate:** OpenAI estimated the benchmark's inherent error rate to be approximately **3%** (after manually inspecting the 5.6% of disagreements and finding half were due to grader errors or human mistakes rather than data issues). ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/))

### simpleqa-quality-check / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 8.6s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The third AI trainer verified **1,000 random questions** from the SimpleQA dataset, matching the agreed reference answers **94.4%** of the time. After manual inspection, OpenAI estimates the **inherent dataset error rate** to be **approximately 3%**, accounting for ambiguous questions, conflicting source information, and other ground-truth issues [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/).

### simpleqa-quality-check / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 18.0s
Facts: yes Third trainer verified a random sample of 1,000 questions; yes Third trainer match rate was 94.4%; yes Estimated inherent error rate was approximately 3%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - The third AI trainer verified a random sample of 1,000 examples and found a 94.4% match rate. - OpenAI estimated the inherent dataset error rate at around 3%. https://cdn.openai.com/papers/simpleqa.pdf

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 6.8s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "correct", "incorrect", and "not attempted".** **It compares the predicted answer from the model against the ground-truth answer.** [OpenAI Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf) [simple-evals GitHub code](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)

### simpleqa-grading-labels / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 9.3s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier uses three grading labels: "correct", "incorrect", and "not attempted".** **It compares the predicted answer from the model against the ground-truth answer.** [OpenAI Introducing SimpleQA blog](https://openai.com/index/introducing-simpleqa/); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf); [OpenAI simple-evals GitHub](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.5s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are “correct”, “incorrect”, or “not attempted” (often uppercased as CORRECT, INCORRECT, NOT_ATTEMPTED in the prompt).** The prompted ChatGPT classifier compares the model's **predicted answer** to the **ground-truth/reference answer** (and the question) to assign one of these labels. - **Correct**: The predicted answer fully contains the ground-truth without contradicting it. - **Incorrect**: It contradicts the ground-truth in any way (even if hedged). - **Not attempted**: The ground truth is not fully included and there are no contradictions. ([OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/)) ([SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) ([simple-evals grader template](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py))

### simpleqa-grading-labels / parallel / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 25.9s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are CORRECT, INCORRECT, NOT_ATTEMPTED.** The prompted classifier compares the model's **predicted answer** to the **gold target** (ground-truth answer). [Official grader template](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) • [SimpleQA blog](https://openai.com/index/introducing-simpleqa/) • [arXiv paper](https://arxiv.org/html/2411.04368v1).

### simpleqa-grading-labels / parallel / xai/grok-4.3
Score: 77/100 (fail), duration 10.5s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - The prompted classifier used in official SimpleQA grading assigns one of three labels: **CORRECT**, **INCORRECT**, or **NOT_ATTEMPTED**. - It compares the model’s predicted answer against the gold/reference ground-truth answer for each question (exact phrasing from the grader prompt and table definitions). - This is described in the official announcement and the accompanying paper, which also publish the full prompt template and grade definitions.

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 28.1s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The three grading labels are **“correct”**, **“incorrect”**, and **“not attempted”** (rendered as `CORRECT`, `INCORRECT`, and `NOT_ATTEMPTED` in the official evaluation prompt). The classifier compares the model’s **predicted answer** against the **ground-truth answer** (also called the gold target or reference answer) to assign one of these grades ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/); [simpleqa_eval.py · openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py); [Measuring short-form factuality in large language models](https://arxiv.org/html/2411.04368v1)).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 10.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> The three grading labels used by the SimpleQA prompted classifier are **“correct”**, **“incorrect”**, and **“not attempted”** (also formatted as `CORRECT`, `INCORRECT`, and `NOT_ATTEMPTED` in the prompt template). The classifier compares the **predicted answer** from the model against the **ground-truth answer** (or “gold target”) to assign one of these labels [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/) [Measuring short-form factuality in large language models](https://arxiv.org/html/2411.04368v1) [simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-grading-labels / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 7.9s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> The SimpleQA prompted classifier uses three grading labels—**correct**, **incorrect**, or **not attempted**—and comparesthe model’s predicted answer to the ground‑truth answer.

### simpleqa-grading-labels / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.8s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The prompted classifier uses the labels **correct**, **incorrect**, and **not attempted**, and it compares the predicted answer to the ground-truth answer to assign the grade ["Measuring short-form factuality in large language models"](https://arxiv.org/html/2411.04368v1)[OpenAI's SimpleQA page](https://openai.com/index/introducing-simpleqa/)[simple-evals/simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py).

### simpleqa-grading-labels / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 4.3s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The prompted classifier in SimpleQA uses three grading labels: "correct", "incorrect", and "not attempted".** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/) **It compares the model's predicted answer to the ground-truth (reference) answer.** [simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) **Definitions:** "Correct" means the predicted answer fully contains the ground truth without contradictions; "incorrect" means it contradicts the ground truth (even if hedged); "not attempted" means the ground truth is not fully given and there are no contradictions.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/)

### simpleqa-grading-labels / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 8.9s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The three grading labels used by the prompted classifier are "correct", "incorrect", and "not attempted".** **The classifier compares the predicted answer from the model against the ground-truth (gold target) answer, optionally considering the question.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/) [SimpleQA evaluation script](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.8s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels used by the prompted classifier are `["CORRECT", "INCORRECT", "NOT_ATTEMPTED"]` (or equivalently “correct”, “incorrect”, or “not attempted”).** The classifier is a prompted ChatGPT/LLM-as-judge that compares a **predicted answer** (from the model) against a **gold target** (ground-truth/reference answer) for a given question, then outputs one of the three labels. - **CORRECT**: The predicted answer fully contains the important information in the gold target without contradictions (hedging/guessing allowed if no incorrect info). - **INCORRECT**: Any factual contradiction of the gold target (even hedged). - **NOT_ATTEMPTED**: Gold target not fully included and no contradictions. This is defined in the official OpenAI blog post ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)) and the reference implementation prompt in the ...

### simpleqa-grading-labels / exa / xai/grok-4.20-0309-reasoning
Score: 85/100 (fail), duration 20.1s
Facts: yes The labels include correct; yes The labels include incorrect; no The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The three grading labels are `["CORRECT", "INCORRECT", "NOT_ATTEMPTED"]`.** The prompted classifier compares a model's **predicted answer** to the **gold target** (ground-truth answer) for a given question. It grades based on whether the prediction fully contains the gold target without contradictions (CORRECT), contradicts it even with hedging (INCORRECT), or omits the target without contradictions (NOT_ATTEMPTED). See the official [GRADER_TEMPLATE](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) and [OpenAI SimpleQA blog](https://openai.com/index/introducing-simpleqa/).

### simpleqa-grading-labels / exa / xai/grok-4.3
Score: 92/100 (fail), duration 6.9s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - The three grading labels used by the prompted ChatGPT classifier in official SimpleQA material are **CORRECT**, **INCORRECT**, and **NOT_ATTEMPTED** (equivalently “correct”, “incorrect”, or “not attempted”). - The classifier compares the model’s **predicted answer** against the **ground-truth answer** (gold target/reference answer) for each question, assigning one of the three labels based on semantic match, contradictions, or omission. - Exact grader prompt and criteria are defined in the official simple-evals repository: https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py. - The same three-way classification and comparison are described on the official OpenAI announcement page: https://openai.com/index/introducing-simpleqa/.

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 26.6s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The prompted classifier assigns one of three labels: **“correct”**, **“incorrect”**, or **“not attempted”** (prompted as `CORRECT`, `INCORRECT`, `NOT_ATTEMPTED`). It compares the model’s **predicted answer** to the **ground-truth (gold target)** answer ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/); [simpleqa_eval.py at main · openai/simple-evals](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py)).

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 13.4s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The SimpleQA prompted classifier uses three grading labels: **"correct"**, **"incorrect"**, and **"not attempted"** [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/). The classifier compares the **predicted answer from the model** against the **ground-truth (reference) answer** to assign one of these grades [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/). A "correct" grade means the predicted answer fully contains the ground-truth without contradiction; "incorrect" means it contradicts the ground-truth in any way; and "not attempted" means the ground-truth is not fully given but there are no contradictions [Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/).

### simpleqa-grading-labels / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 8.9s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) page, the SimpleQA prompted classifier uses three grading labels—**“correct,” “incorrect,” and “not attempted”**—and compares the **predicted answer from the model against the ground-truth answer** to assess factual accuracy.

### simpleqa-grading-labels / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 8.1s
Facts: yes The labels include correct; yes The labels include incorrect; yes The labels include not attempted; yes The classifier compares predicted answer and ground-truth answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The three grading labels are **“correct”**, **“incorrect”**, and **“not attempted.”** The prompted classifier compares the predicted answer against the ground-truth answer to assign one of these grades.

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 29.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **In SimpleQA's official grading table for the question "Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men's FIFA World Cup?" (reference: Wout Weghorst), "Virgil van Dijk and Wout Weghorst" is explicitly listed as an "Incorrect" example.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/) **"Incorrect" is defined as any predicted answer that contradicts the ground-truth answer in any way, even if hedged; here, naming Virgil van Dijk (who did not score an open-play goal) introduces a factual contradiction, despite including the correct answer.** [OpenAI SimpleQA announcement](https://openai.com/index/introducing-simpleqa/) **"Correct" requires the predicted answer to fully contain the ground-truth without contradictions (e.g., "Wout Weghorst" or "Wout Weghorst scored at 83’ and 90+11’"), with no partial credit fo...

### simpleqa-edge-grade / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 42.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded "incorrect" in SimpleQA because it contradicts the ground-truth answer ("Wout Weghorst") by falsely claiming Virgil van Dijk also scored an open-play goal in the 2022 Netherlands vs. Argentina World Cup match.** - SimpleQA's official grading table explicitly lists "Virgil van Dijk and Wout Weghorst" as an "incorrect" example for the question ["Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men’s FIFA World Cup?"](https://openai.com/index/introducing-simpleqa/), defining "incorrect" as any contradiction with the reference, even if partially correct or hedged. - The grader prompt reinforces this: responses are incorrect if they contain factual contradictions, like adding extra names (e.g., "Malia, Sasha, and Susan" for Obama's children), regardless of including the right answer. - On...

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.5s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the single, indisputable reference answer ("Wout Weghorst") by implying Virgil van Dijk also scored an open-play goal.** Per the official grader prompt in the SimpleQA paper and eval code, **CORRECT** requires that the predicted answer "fully contain[s] the important information in the gold target" and "do[es] not contain any information that contradicts the gold target." **INCORRECT** applies when "a factual statement in the answer contradicts the gold target" (even with hedging). The blog post explicitly lists "Virgil van Dijk and Wout Weghorst" under Incorrect for this exact World Cup question. [OpenAI SimpleQA blog](https://openai.com/index/introducing-simpleqa/) [SimpleQA paper & grader template](https://cdn.openai.com/papers/simpleqa.pdf) [simple-evals grader](https://github.com/openai/si...

### simpleqa-edge-grade / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 34.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it introduces a factual contradiction**—implying Virgil van Dijk scored an open-play goal, which is false—rather than fully matching the reference without extras. The official grader rubric states incorrect answers are those where "a factual statement in the answer contradicts the gold target" (even if hedged), while correct ones must "fully contain the important information... [with] no incorrect information or contradictions." See the exact table in the [Introducing SimpleQA blog post](https://openai.com/index/introducing-simpleqa/), which lists this World Cup example (reference: Wout Weghorst) alongside the grader prompt in [simpleqa_eval.py](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py) and [the paper's Appendix A](https://cdn.openai.com/papers/simpleqa.pdf).

### simpleqa-edge-grade / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 19.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded INCORRECT** because the official SimpleQA grader prompt explicitly treats any answer that adds an extraneous name (or other fact) as incorrect, even when the gold target is also present. The grader template states: > These predicted answers are all INCORRECT because: > - A factual statement in the answer contradicts the gold target. Incorrect statements that have some hedging … are also considered incorrect. Its canonical INCORRECT example is: > Question: What are the names of Barack Obama's children? > Gold target: Malia and Sasha > Predicted answer 2: Malia, Sasha, and Susan. Exactly the same logic applies to the World Cup question (“Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game …?” Gold target: Wout Weghorst). Adding “Virgil van Dijk” introduces a contradictory factual claim, so the w...

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 62.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official SimpleQA grader examples in the [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), the response “Virgil van Dijk and Wout Weghorst” is listed as an **Incorrect** example because it contains a factual claim that contradicts the gold target (Table 2). The grader instructions specify that an answer is incorrect if it contradicts the reference answer in any way, even if it also includes the correct name. Because the question asks for the single Dutch player who scored an open-play goal in that match, adding Virgil van Dijk introduces a false assertion that conflicts with the gold target of “Wout Weghorst,” which triggers the incorrect grade.

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 82.3s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official SimpleQA grading table (Table 2) in the OpenAI paper, the response "Virgil van Dijk and Wout Weghorst" is graded **incorrect** because it **contradicts the reference answer** in any way, even if hedged. According to the [SimpleQA paper](https://arxiv.org/html/2411.04368v1), for the question "Which Dutch player scored an open-play goal in the 2022 Netherlands vs Argentina game in the men's FIFA World Cup?" (Answer: Wout Weghorst): | Grade | Definition | Example responses | |-------|-----------|-------------------| | **Incorrect** | The predicted answer contradicts the reference answer in any way, even if the contradiction is hedged. | "Virgil van Dijk", "**Virgil van Dijk and Wout Weghorst**", "Wout Weghorst and I think van Dijk scored, but I am not totally sure" | The benchmark requires questions to have a **single, indisputable answer**. Since the question asks fo...

### simpleqa-edge-grade / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 12.7s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> "Virgil van Dijk and Wout Weghorst" is graded incorrect because SimpleQA questions are designed to have a **single, indisputable answer**—answers that must fully contain the ground-truth answer without contradiction. The grader classifies this response as incorrect per definition: a predicted answer that "contradicts the ground-truth answer in any way, even if the contradiction is hedged." In this example, "Virgil van Dijk and Wout Weghorst" includes an extra person (van Dijk, who is a defender, not a scorer) that is not part of the single correct answer (Wout Weghorst), thus introducing a contradiction. The SimpleQA paper also notes that answer questions are written with a specific scope (e.g., 'which city' or 'what year') and all answers must not change; SingleQA questions require a precision that excludes false additions.

### simpleqa-edge-grade / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 6.3s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> The official SimpleQA grading criteria state that an answer is incorrect if it contains information that contradicts or is extraneous to the single indisputable reference answer, even if the reference answer is included. Including "Virgil van Dijk" alongside "Wout Weghorst" introduces an incorrect extra name, which violates the rule that the predicted answer must not contain any information that contradicts the gold target and must not include extraneous facts. Therefore, "Virgil van Dijk and Wout Weghorst" is graded incorrect rather than correct because it includes an incorrect additional name.

### simpleqa-edge-grade / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 5.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the reference answer "Wout Weghorst" by falsely implying Virgil van Dijk also scored an open-play goal in the 2022 Netherlands vs Argentina World Cup game, per SimpleQA's strict criteria.** SimpleQA defines "Incorrect" as any response that *contradicts the reference answer in any way*, even if it includes the correct info alongside false details—like naming an extra player who didn't score. [OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf) and [OpenAI blog](https://openai.com/index/introducing-simpleqa/) explicitly list this response as an "Incorrect" example for the question, contrasting with "Correct" cases like just "Wout Weghorst". This ensures models avoid partial or hallucinated facts, prioritizing exact factuality over supersets.

### simpleqa-edge-grade / exa / xai/grok-4-1-fast
Score: 92/100 (fail), duration 11.0s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the reference answer ("Wout Weghorst") by implying Virgil van Dijk also scored an open-play goal, which he did not.** Per SimpleQA's grading rules, a response is "correct" only if it fully contains the reference without *any* contradiction—even if partially accurate—while "incorrect" applies to any contradiction, hedged or not. This World Cup example is explicitly listed as incorrect in the official paper's Table 2 and the announcement blog.<span class="citation" id="cite-1">[1]</span><span class="citation" id="cite-3">[3]</span><span class="citation" id="cite-6">[6]</span>

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 20.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The response "Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the single, indisputable reference answer ("Wout Weghorst").** The official SimpleQA grading rubric defines: - **Correct**: "The predicted answer fully contains the ground-truth answer without contradicting the reference answer." Examples: “Wout Weghorst”, “Wout Weghorst scored at 83’ and 90+11’ in that game.” - **Incorrect**: "The predicted answer contradicts the ground-truth answer in any way, even if the contradiction is hedged." Examples: “Virgil van Dijk”, “Virgil van Dijk and Wout Weghorst”, “Wout Weghorst and I think van Dijk scored, but I am not totally sure.” - **Not attempted**: "The ground truth target is not fully given in the answer, and there are no contradictions with the reference answer." The question is designed to have only one correct scorer for an open-play goal; naming an ...

### simpleqa-edge-grade / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 21.2s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **"Virgil van Dijk and Wout Weghorst" is graded incorrect because it contradicts the single ground-truth answer (only Wout Weghorst scored an open-play goal).** - Official definition: “The predicted answer contradicts the ground-truth answer in any way, even if the contradiction is hedged.” ([OpenAI SimpleQA blog](https://openai.com/index/introducing-simpleqa/); [SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)) - Correct requires that the predicted answer *fully contains* the reference *without contradicting it*; naming an additional incorrect scorer violates this. ([same table in both sources](https://openai.com/index/introducing-simpleqa/)) - The grader template explicitly flags answers containing any contradictory factual statement (including hedged ones) as INCORRECT. ([simpleqa_eval.py GRADER_TEMPLATE](https://github.com/openai/simple-evals/blob/main/simpleqa_eval.py))

### simpleqa-edge-grade / exa / xai/grok-4.3
Score: 92/100 (fail), duration 10.4s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **The response “Virgil van Dijk and Wout Weghorst” is graded Incorrect because it contradicts the single ground-truth answer (Wout Weghorst) by asserting an additional scorer who did not score.** Official SimpleQA grading rules state: - **Correct** requires that the predicted answer “fully contains the reference answer without contradicting the reference answer.” - **Incorrect** applies when “the predicted answer contradicts the reference answer in any way, even if the contradiction is hedged.” The World Cup example question (“Which Dutch player scored an open-play goal…?”) has the reference answer “Wout Weghorst.” The grader treats the conjunction “Virgil van Dijk and Wout Weghorst” as a factual contradiction because it claims van Dijk also scored, which is false. This is shown directly in the paper’s Table 2 and the accompanying blog post, which list exactly this response under the In...

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 27.8s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to SimpleQA’s official grading rubric, an answer is “Correct” only if it fully contains the ground-truth answer **without contradicting** it, whereas it is “Incorrect” if it contradicts the ground truth in any way, even via hedging ([Introducing SimpleQA | OpenAI](https://openai.com/index/introducing-simpleqa/)). The response “Virgil van Dijk and Wout Weghorst” includes the correct name but also asserts that Virgil van Dijk scored an open-play goal, which factually contradicts the indisputable reference answer of only Wout Weghorst; therefore it is explicitly listed as an incorrect example.

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 30/100 (fail), duration 8.9s
Facts: no The response is graded incorrect; no The correct reference answer is Wout Weghorst; no The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> (empty)

### simpleqa-edge-grade / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 5.9s
Facts: yes The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> "Virgil van Dijk and Wout Weghorst" is graded **Incorrect** because the answer attributes a goal to **Virgil van Dijk**, which contradicts the reference sole‑answer “Wout Weghorst”. SimpleQA’s Incorrect definition requires any factual contradiction—even implicit—constitutes a wrong grade, and the example responses list “Virgil van Dijk and Wout Weghorst” explicitly under Incorrect (and the grader’s prompt notes that a factual statement that contradicts the gold target is incorrect) [1][2][6].

### simpleqa-edge-grade / exa / mistral/mistral-small-latest
Score: 71/100 (fail), duration 6.9s
Facts: no The response is graded incorrect; yes The correct reference answer is Wout Weghorst; yes The extra Virgil van Dijk claim contradicts the reference answer
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - The SimpleQA grading rules require the predicted answer to **fully contain the ground-truth answer without any contradiction**. - Including an extra name ("Virgil van Dijk") alongside the correct answer ("Wout Weghorst") introduces a factual contradiction to the indisputable reference that only Wout Weghorst scored an open-play goal in the 2022 Netherlands vs Argentina World Cup match{"urls": ["https://openai.com/index/introducing-simpleqa/"], "objective": "Extract the SimpleQA grading definitions and examples for the World Cup question"}

### browsecomp-size / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 25.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/). **It contains 1,266 challenging problems.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/). These problems require persistent navigation across multiple websites and emphasize creativity in web browsing over simple fact retrieval. [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-size / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 33.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, often requiring browsing tens or hundreds of websites, persistence, depth, and creativity in web navigation.** [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/) **It contains 1,266 challenging problems.** [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-size / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 27.2s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** that may require browsing tens or hundreds of websites, emphasizing persistence, creativity, and reasoning about web content factuality. ([Official OpenAI page](https://openai.com/index/browsecomp/)) It contains **1,266 challenging problems** with short, verifiable answers. ([Official OpenAI page](https://openai.com/index/browsecomp/)) This is confirmed directly in the benchmark announcement: "To measure the ability for AI agents to locate hard-to-find, entangled information on the internet, we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp."

### browsecomp-size / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 26.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find (and entangled) information on the internet**, requiring persistence, creativity in search strategies, and reasoning about online content factuality. - It contains **1,266 challenging problems**. ([Official BrowseComp page](https://openai.com/index/browsecomp/); see also [arXiv paper](https://arxiv.org/abs/2504.12516)).

### browsecomp-size / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 15.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet**—information that may require browsing tens or hundreds of websites, exercising persistence, creativity in navigation, and factual reasoning—while producing short, verifiable answers. - It comprises **1,266 challenging problems** (explicitly described as “a new benchmark of 1,266 challenging problems called BrowseComp”). - The benchmark is deliberately harder than saturated fact-retrieval tests like SimpleQA, with questions designed so that existing models (including GPT-4o with browsing) fail and human trainers cannot solve them quickly. Official page: [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 13.3s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet. It comprises **1,266 challenging problems** designed to require persistence and creative browsing, with short, easily verifiable answers ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 29.9s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate **hard-to-find, entangled information** on the internet—problems that may require browsing tens or hundreds of websites to solve. The benchmark contains **1,266 challenging problems**, each with a single, short, verifiable answer. Published by OpenAI on April 10, 2025, BrowseComp is available in the [SimpleQA/simple-evals GitHub repository](https://github.com/openai/simple-evals) and detailed in a [companion paper](https://arxiv.org/abs/2504.12516) ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)).

### browsecomp-size / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 10.8s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate **hard-to-find, entangled information on the internet**, requiring them to navigate tens or even hundreds of websites to solve tasks that would be impossible to resolve by basic search alone. The benchmark consists of **1,266 challenging problems** designed to evaluate persistence and creativity in information gathering, with short, verifiable answers that can be easily graded. BrowseComp was created to address saturation in simpler retrieval benchmarks like SimpleQA by focusing on information that's difficult to find yet easy to verify once located.

### browsecomp-size / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 17.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet. - It contains 1,266 challenging problems.

### browsecomp-size / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 8.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, which often requires persistently browsing tens or hundreds of websites, reasoning about factuality, and creative searching.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) **It contains 1,266 challenging problems.** [OpenAI BrowseComp page](https://openai.com/index/browsecomp/)

### browsecomp-size / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 11.8s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, which may require browsing tens or hundreds of websites.** **[BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)** **It contains 1,266 challenging problems.** **[BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)**

### browsecomp-size / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 7.0s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet, requiring persistence, creativity in searching, and reasoning about factuality across many websites.** - It contains **1,266 challenging problems** with short, easily verifiable answers. This is directly from the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/), which states: “A simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information” and announces “a new benchmark of 1,266 challenging problems called BrowseComp.” The linked [research paper](https://arxiv.org/abs/2504.12516) and [GitHub repo](https://github.com/openai/simple-evals) confirm the same figures and focus.

### browsecomp-size / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 15.0s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** (requiring persistence, creativity in searches, and reasoning about factuality). - It contains **1,266 challenging problems**. [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) (April 2025): "A simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information" and "a new benchmark of 1,266 challenging problems called BrowseComp." The page notes it is "analogous to how programming competitions are an incomplete but useful benchmark for coding agents."

### browsecomp-size / exa / xai/grok-4.3
Score: 92/100 (fail), duration 14.6s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet** by persistently navigating multiple websites, reasoning about factuality, and applying creative search strategies to solve questions that are difficult to find but easy to verify with short, single correct answers. It is explicitly designed as “a simple and challenging benchmark that measures the ability of AI agents to locate hard-to-find information,” analogous to programming competitions for coding agents, and focuses on core browsing skills such as persistence and depth rather than open-ended or ambiguous real-world queries. The benchmark contains **1,266 challenging problems**. This is stated directly on the official OpenAI announcement page.

### browsecomp-size / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 21.0s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the internet—a task that requires persistence and creative search across tens or hundreds of websites ([BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/)). The benchmark contains **1,266** challenging problems ([BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/)).

### browsecomp-size / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 12.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official [OpenAI BrowseComp page](https://openai.com/index/browsecomp/), BrowseComp measures the **ability of AI agents to locate hard-to-find information** on the internet. The benchmark contains **1,266 challenging problems** that require persistently navigating the web in search of hard-to-find, entangled information.

### browsecomp-size / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 10.1s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - BrowseComp measures the ability of AI agents to locate hard-to-find, entangled information on the web. - It consists of 1,266 challenging problems designed to test a browsing agent’s persistence and creative navigation.

### browsecomp-size / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 4.4s
Facts: yes BrowseComp contains 1,266 problems; yes It measures finding hard-to-find information by browsing
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - Measures the ability of AI agents to locate hard-to-find information on the web - Contains 1,266 challenging problems

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 41.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures the short-form factuality of language models on 4,326 adversarially collected, short fact-seeking questions with single indisputable answers, designed to be challenging for frontier models like GPT-4o (<50% accuracy) and easy to grade via API.** [[OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa)] [[SimpleQA paper PDF](https://cdn.openai.com/papers/simpleqa.pdf)] **BrowseComp evaluates browsing agents on 1,266 challenging questions requiring persistent navigation of the web to find hard-to-find, deeply entangled information, with short verifiable answers analogous to programming competitions for coding agents.** [[OpenAI BrowseComp page](https://openai.com/index/browsecomp)] [[BrowseComp paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)] **BrowseComp was introduced because SimpleQA and similar benchmarks, fo...

### simpleqa-vs-browsecomp / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 22.8s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** measures the short-form factuality of language models on 4,326 short, fact-seeking questions with single indisputable answers, adversarially collected against GPT-4 for challenge and easy grading ([OpenAI SimpleQA page](https://openai.com/index/introducing-simpleqa); [SimpleQA paper](https://arxiv.org/pdf/2411.04368)). **BrowseComp** evaluates browsing agents on 1,266 challenging questions requiring persistent navigation of the web to find hard-to-find, entangled information, with short verifiable answers ([OpenAI BrowseComp page](https://openai.com/index/browsecomp); [BrowseComp paper](https://arxiv.org/pdf/2504.12516)). BrowseComp was introduced because benchmarks like SimpleQA, focused on basic isolated facts, are already saturated by models with fast browsing tools (e.g., GPT-4o with browsing), necessitating a harder test of advanced agent browsing persistence and creat...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 15.3s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures short-form factuality in LLMs:** it evaluates the ability to answer 4,326 short, fact-seeking questions with a single, indisputable answer (adversarially collected against GPT-4), graded as correct/incorrect/not attempted, to test whether models “know what they know.” ([OpenAI SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf), [OpenAI blog](https://openai.com/index/introducing-simpleqa)) **BrowseComp measures the ability of browsing agents to locate hard-to-find, entangled information:** it comprises 1,266 questions requiring persistent navigation, creative search, and reasoning across many websites; answers are short and easily verifiable. ([OpenAI BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), [OpenAI blog](https://openai.com/index/browsecomp)) BrowseComp was introduced because “Existing benchmarks like ...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 23.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures short-form factuality in LLMs**—the ability to answer 4,326 short, fact-seeking questions with a single indisputable answer (graded correct/incorrect/not attempted), while also assessing calibration. **[Introducing SimpleQA](https://openai.com/index/introducing-simpleqa)** **[SimpleQA paper](https://cdn.openai.com/papers/simpleqa.pdf)** **BrowseComp measures browsing agent capabilities**—specifically the ability to persistently navigate the web to locate hard-to-find, entangled information across 1,266 challenging questions that are easy to verify but require creativity and depth. **[BrowseComp announcement](https://openai.com/index/browsecomp)** **[BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)** **BrowseComp was introduced because SimpleQA (and similar basic-fact benchmarks) is already saturated by models with fast...

### simpleqa-vs-browsecomp / parallel / xai/grok-4.3
Score: 85/100 (fail), duration 17.0s
Facts: yes SimpleQA measures factuality; no SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** measures short-form factuality in LLMs via 4,326 adversarially collected questions that have a single, indisputable, short answer; it evaluates whether models answer correctly, incorrectly, or not at all while remaining easy to grade. **BrowseComp** measures the web-browsing ability of agents on 1,266 questions that require locating hard-to-find, deeply entangled information through persistent, creative, multi-page navigation. BrowseComp was introduced because “Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT-4o with browsing.” Official pages: [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa) and [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp).

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 23.2s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **[SimpleQA](https://openai.com/index/introducing-simpleqa)** is a factuality benchmark containing **4,326** short, fact-seeking questions with single, indisputable answers; it measures whether language models can answer straightforward factual queries correctly without hallucinating. - **[BrowseComp](https://openai.com/index/browsecomp)** is a browsing-agent benchmark of **1,266** problems that tests an agent’s ability to persistently navigate the web and retrieve **hard-to-find, entangled information** that is easy to verify once found but requires depth and creativity to locate. - OpenAI introduced BrowseComp because benchmarks like SimpleQA—which focus on basic isolated facts—are **already saturated by models with fast browsing tools** (e.g., GPT-4o with browsing), so BrowseComp was designed to evaluate the persistence and search proficiency that simpler factuality tests no longer...

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 85/100 (fail), duration 13.9s
Facts: no SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** measures the ability of language models to answer short, fact-seeking questions with single, indisputable answers—containing 4,326 questions designed to test basic factual accuracy and calibration. In contrast, **BrowseComp** measures the ability of AI agents to locate hard-to-find, deeply entangled information on the web via persistent browsing—comprising 1,266 questions that are easy to verify but difficult to discover. BrowseComp was introduced because [SimpleQA and similar benchmarks](https://openai.com/index/introducing-simpleqa) "are already saturated by models with access to fast browsing tools, such as GPT‑4o with browsing"—whereas BrowseComp specifically tests the "asymmetry of verification" where answers require creative search strategies, reasoning about web content, and browsing tens or hundreds of sites rather than simple fact retrieval.

### simpleqa-vs-browsecomp / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 7.4s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> Based on the official OpenAI sources, here's the comparison and rationale: **What SimpleQA measures:** SimpleQA evaluates short-form factuality by testing language models on 4,326 short, fact-seeking questions that have a single, indisputable answer. It was adversarially collected against GPT-4 responses to remain challenging and is designed so answers are easily gradable via API with high statistical reliability [1][2][6]. **What BrowseComp measures:** BrowseComp measures browsing agent performance by asking 1,266 questions that require persistently tracking down hard-to-find, deeply entangled information on the web, targeting models with internet access rather than isolated facts alone [7][8][10]. **Why BrowseComp was introduced:** SimpleQA benchmarks for basic isolated facts have become essentially saturated by modern models with browsing-enabled search capabilities (source nine expl...

### simpleqa-vs-browsecomp / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 6.7s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** measures short-form factuality by evaluating models on 4,326 short, fact-seeking questions with single, indisputable answers across diverse topics, designed to be challenging and efficiently gradable via API. [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa) - **BrowseComp** measures the ability of browsing agents to locate hard-to-find, entangled information on the web via persistent navigation, comprising 1,266 questions that are hard to find but easy to verify. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp) - BrowseComp was introduced because SimpleQA’s short, isolated facts are now saturated by models with fast browsing tools, so BrowseComp targets deeper, multi-step web reasoning that requires persistence and creative search strategies. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/brows...

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 10.4s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - **SimpleQA** (4,326 questions) measures language models' factuality on short, fact-seeking questions with single indisputable answers, focusing on whether models "know what they know" via correct/incorrect/not attempted grading; questions are designed for easy grading and to challenge frontier models like GPT-4o (<40-50%). [https://openai.com/index/introducing-simpleqa/] - **BrowseComp** (1,266 questions) measures AI browsing agents' ability to locate hard-to-find, entangled information requiring persistent navigation across many websites, with short verifiable answers emphasizing reasoning, persistence, and creative search. [https://openai.com/index/browsecomp/] - BrowseComp was introduced because SimpleQA and similar benchmarks, measuring retrieval of basic isolated facts, became saturated by models with fast browsing tools like GPT-4o with browsing, failing to distinguish advanced ...

### simpleqa-vs-browsecomp / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 20.7s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** measures language models' factuality in answering short, fact-seeking questions with single, indisputable answers, using [4,326 questions](https://openai.com/index/introducing-simpleqa/) across diverse topics to assess if models "know what they know," with GPT-4o scoring under 40%. **BrowseComp** evaluates AI browsing agents' ability to locate hard-to-find, entangled information requiring persistent navigation of many websites, with [1,266 challenging questions](https://openai.com/index/browsecomp/) designed as "inverted" tasks that are hard to solve but easy to verify. BrowseComp was introduced because SimpleQA and similar benchmarks for basic isolated facts are already saturated by models with fast browsing tools like GPT-4o, necessitating a tougher test of persistence, creativity, and depth in web browsing ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)).

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.3s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA measures models' short-form factuality**—their ability to answer short, fact-seeking questions with a single indisputable answer (4,326 questions; graded correct/incorrect/not attempted). [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) **BrowseComp measures browsing agents' ability to locate hard-to-find, entangled information** that requires persistent navigation across many websites (1,266 questions). [BrowseComp announcement](https://openai.com/index/browsecomp/) BrowseComp was introduced because **SimpleQA is already saturated** by models with fast browsing tools (e.g. GPT-4o with browsing), while BrowseComp targets the next challenge of persistence, creativity, and factuality reasoning on obscure information. Both use similar short-answer design for easy grading but differ in difficulty and focus.

### simpleqa-vs-browsecomp / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.1s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **SimpleQA** ([openai.com/index/introducing-simpleqa](https://openai.com/index/introducing-simpleqa/)) measures language models' short-form factuality on 4,326 short fact-seeking questions with single indisputable answers (graded correct/incorrect/not attempted), focusing on whether models "know what they know" while avoiding hallucinations. **BrowseComp** ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)) measures browsing agents' ability to locate "hard-to-find, entangled information" that requires "persistently navigating the internet" (often tens or hundreds of sites), persistence, factuality reasoning, and creative search across its 1,266 questions. BrowseComp was introduced because "Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT-4o ...

### simpleqa-vs-browsecomp / exa / xai/grok-4.3
Score: 92/100 (fail), duration 18.4s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **SimpleQA** measures short-form factuality: the ability of language models to answer concise, fact-seeking questions that have a single indisputable answer, graded as correct, incorrect, or not attempted. It contains 4,326 questions, was adversarially collected against GPT-4, and targets “know what they know” calibration while remaining fast to evaluate. **BrowseComp** measures the core browsing-agent capability of persistently navigating the web to locate hard-to-find, entangled information across many sites. It contains 1,266 questions whose short answers are easy to verify but deliberately require depth, persistence, and creative search strategies. BrowseComp was introduced because SimpleQA (and similar prior benchmarks) had become saturated by frontier models equipped with fast browsing tools; the official announcement states that “Existing benchmarks like SimpleQA, which measure m...

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 22.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** is a factuality benchmark of 4,326 short, fact-seeking questions with single, indisputable answers; it measures whether language models “know what they know” and can abstain when uncertain. [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) - **BrowseComp** is a benchmark of 1,266 problems that require an agent to browse tens or hundreds of websites to locate hard-to-find, entangled information; answers remain short and easily verifiable, but finding them demands persistence and creative search. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/) - BrowseComp was introduced because SimpleQA and similar benchmarks focus on retrieving basic, isolated facts and had become saturated by models with fast browsing tools such as GPT‑4o with browsing, leaving little room to distinguish deeper browsing capabilities. [BrowseComp: a...

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 22.0s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - **SimpleQA** (4,326 questions) measures [short-form factuality](https://openai.com/index/introducing-simpleqa/)—testing whether language models can answer concise, fact-seeking questions with a single, indisputable answer without hallucinating. - **BrowseComp** (1,266 questions) measures the ability of browsing agents to locate [hard-to-find, entangled information](https://openai.com/index/browsecomp/) that requires persistently navigating tens or hundreds of websites, testing persistence, creative search strategy, and reasoning about web content factuality. - BrowseComp was introduced because SimpleQA—which tests retrieval of [basic isolated facts](https://openai.com/index/browsecomp/)—had become saturated by frontier models with fast browsing tools (e.g., GPT‑4o with browsing), making it ineffective for distinguishing advanced browsing capabilities.

### simpleqa-vs-browsecomp / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 77/100 (fail), duration 7.5s
Facts: no SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - **SimpleQA** measures factual accuracy and calibration on short, fact-seeking questions with a single, indisputable answer; it’s designed as a targeted, low-variance evaluation of whether models “know what they know.” - **BrowseComp** measures an agent’s ability to persistently navigate the open web to locate hard-to-find, entangled information where answers are short and easy to verify but difficult to reach. - **Why BrowseComp exists**: Existing benchmarks like SimpleQA evaluate basic, quickly retrievable facts, which have become saturated for models with browsing tools; BrowseComp fills the gap by testing deeper browsing capabilities through 1,266 intentionally challenging, inverted questions.

### simpleqa-vs-browsecomp / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 6.5s
Facts: yes SimpleQA measures factuality; yes SimpleQA uses short fact-seeking questions; yes BrowseComp measures hard-to-find information retrieval by browsing; yes BrowseComp targets entangled information or browsing competition
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - SimpleQA measures short-form factuality by evaluating models on concise, fact-seeking questions with single, indisputable answers, enabling fast and reliable grading of whether a model “knows what it knows.” [Introducing SimpleQA](https://openai.com/index/introducing-simpleqa/) - BrowseComp measures the ability of browsing agents to persistently navigate the web and locate hard-to-find, entangled information, requiring reasoning about online content, deep browsing, and creative search strategies. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/) - BrowseComp was introduced because SimpleQA’s short, isolated-fact retrieval tasks have become saturated for models with fast browsing tools, so BrowseComp targets the new core capability of hard-to-find information discovery. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/)

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 15.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/). **Of those solved problems, trainer answers agreed with reference answers 86.4% (317/367) of the time.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/). **Trainers labeled problems unsolvable after 2 hours of searching.** [Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-human-difficulty / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 20.1s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **In the BrowseComp verification campaign on 1,255 problems:** - **Human trainers solved 29.2%** (367/1,255) of problems. - **Agreement rate on solved problems:** 86.4% (317/367) matched the reference answer. - **Time limit:** Trainers labeled problems unsolvable after 2 hours of searching. [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [BrowseComp paper (arXiv)](https://arxiv.org/html/2504.12516v1)

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-non-reasoning
Score: 92/100 (fail), duration 13.8s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign.** Of those solved problems, trainer answers agreed with the official reference 86.4% (317/367) of the time. Trainers labeled a problem unsolvable if they could not solve it within **two hours** of searching (with the large majority giving up after around two hours). These figures come directly from OpenAI’s official BrowseComp page and the arXiv paper (Table 2 / human performance section).

### browsecomp-human-difficulty / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 29.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign; on the solved problems, their answers agreed with the reference answer 86.4% (317/367) of the time; they were permitted to label a problem unsolvable after 2 hours of searching.** ([Official OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [arXiv paper](https://arxiv.org/html/2504.12516v1)) Trainers self-reported time spent, with most unsolvable problems abandoned after around two hours. These figures come directly from the human baseline evaluation on the official benchmark page and accompanying paper.

### browsecomp-human-difficulty / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 14.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers in the BrowseComp verification campaign solved 29.2% (367/1,255) of problems.** Of those solved problems, trainers’ answers agreed with the reference answer 86.4% (317/367) of the time. Trainers were allowed to label a problem unsolvable after attempting it for up to 2 hours of searching. These figures come directly from the official OpenAI BrowseComp page and the accompanying arXiv paper.

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 45.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - In the verification campaign, human trainers solved **29.2%** of problems (367 out of 1,255). - Among those solved problems, trainer answers agreed with the reference answer **86.4%** of the time (317 out of 367). - The large majority of trainers labeled problems unsolvable after attempting them for **around two hours**. ([OpenAI BrowseComp](https://openai.com/index/browsecomp/))

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 20.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp page, human trainers solved **29.2%** (367/1,255) of problems in the verification campaign, with an **86.4%** agreement rate between trainer answers and reference answers on solved problems. Trainers were allowed to label a problem unsolvable after **two hours** of searching. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-human-difficulty / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 14.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Human trainers solved **29.2%** of the BrowseComp problems across the verification campaign, and among those solved, the trainer answer agreed with the reference answer **86.4%** of the time. Problems were marked as unsolvable after two hours of searching (per OpenAI's official BrowseComp page and related documentation) 【8】【9】.

### browsecomp-human-difficulty / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 11.4s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - Human trainers solved 29.2% of problems in the verification campaign ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)). - Agreement rate on solved problems was 86.4% ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)). - Problems were labeled unsolvable after about two hours of searching ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)).

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 18.2s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the BrowseComp verification campaign.** Of solved problems, trainer answers agreed with reference answers 86.4% (317/367) of the time. Trainers labeled problems unsolvable if unsolved within two hours of searching, only giving up after attempting for around two hours per the rules. ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/))

### browsecomp-human-difficulty / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 35.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems** in the BrowseComp verification campaign, as reported on the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) and [research paper](https://arxiv.org/pdf/2504.12516). **Of those solved problems, trainer answers agreed with reference answers 86.4% (317/367) of the time**, per the same sources. **Trainers labeled problems unsolvable after attempting them for two hours**, with 70.8% (888/1,255) marked as such only after this minimum effort.

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-non-reasoning
Score: 92/100 (fail), duration 7.9s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign.** Of those solved problems, the trainer answer agreed with the reference answer 86.4% (317/367) of the time. Trainers were instructed to label a problem unsolvable and move on if they could not solve it within **2 hours** of searching; they only gave up after attempting for around two hours. These figures come directly from the official OpenAI BrowseComp page and the arXiv paper (Table 2).

### browsecomp-human-difficulty / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 23.5s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Human trainers solved 29.2% (367/1,255) of problems in the verification campaign.** Of those solved problems, the trainer answer agreed with the reference answer 86.4% (317/367) of the time. Trainers were instructed to label a problem unsolvable and move on if they could not solve it within **two hours** of searching. These details are from the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) and the linked [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-human-difficulty / exa / xai/grok-4.3
Score: 71/100 (fail), duration 7.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **Human trainers in the BrowseComp verification campaign solved 29.2% (367/1,255) of problems.** Of those solved problems, the trainer's answer matched the reference answer 86.4% (317/367) of the time. Trainers were instructed to label a problem unsolvable and move on if they could not solve it within a 2-hour time limit. These figures come directly from the official BrowseComp announcement and the accompanying paper.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 52.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official BrowseComp page, human trainers solved **29.2%** of problems (367 of 1,255) in the verification campaign. Of those solved problems, the trainer answer agreed with the reference answer **86.4%** of the time (317 of 367). Trainers were allowed to label a problem as unsolvable and move on after attempting it for **two hours** of searching. [(OpenAI)](https://openai.com/index/browsecomp/)

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 19.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official OpenAI BrowseComp page[,](https://openai.com/index/browsecomp/) human trainers solved **29.2%** of problems (367 out of 1,255) in the verification campaign. Of those solved problems, the trainer answer agreed with the reference answer **86.4%** of the time (317 out of 367). Trainers were permitted to label a problem as unsolvable and move on if they could not solve it within **two hours** of searching.

### browsecomp-human-difficulty / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 79/100 (fail), duration 71.3s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; no The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp research paper and website: - **Share of problems solved**: Human trainers solved **29.2%** of BrowseComp problems (367 out of 1,255 questions) [arXiv PDF](https://arxiv.org/pdf/2504.12516), [OpenAI website](https://openai.com/index/browsecomp/) - **Agreement rate**: Of solvable problems, the trainer's answer matched the reference answer **86.4%** of the time (317 out of 367 correct solutions) [arXiv PDF](https://arxiv.org/pdf/2504.12516), [OpenAI website](https://openai.com/index/browsecomp/) - **Time limit**: Trainers were allowed a **2-hour** time limit before labeling a problem as unsolvable, per the stated tracking [arXiv PDF](https://arxiv.org/pdf/2504.12516), [OpenAI website](https://openai.com/index/browsecomp/)

### browsecomp-human-difficulty / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 15.0s
Facts: yes Human trainers solved 29.2% of problems; yes Solved-problem agreement was 86.4%; yes The unsolvable cutoff was two hours
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - Human trainers solved 29.2% of problems in the verification campaign, with an agreement rate of 86.4% on solved problems, and a time limit of two hours before labeling a problem unsolvable [OpenAI's BrowseComp page](https://openai.com/index/browsecomp/) and [BrowseComp paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 47.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **In the official BrowseComp verification campaign, human trainers attempted 1,255 problems (out of the benchmark's 1,266 total, excluding 11 unattempted).** - **888 were labeled unsolvable** after trainers gave up following two hours of unaided searching. - This represents **70.8%** (888 / 1,255) of the total attempted.[^openai.com/index/browsecomp/][^cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf][^arxiv.org/html/2504.12516v1]

### browsecomp-unsolved-math / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 74.3s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable by human trainers after a two-hour limit (70.8%).** - This left 367 solvable (29.2%), of which 317 trainer answers agreed with the reference (86.4%). - Trainers could not use AI tools and were barred from solving their own created questions; of the full 1,266 benchmark, 11 were unattempted. [[OpenAI BrowseComp](https://openai.com/index/browsecomp/)](https://openai.com/index/browsecomp/), [[arXiv paper](https://arxiv.org/pdf/2504.12516.pdf)](https://arxiv.org/pdf/2504.12516.pdf), [[OpenAI PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 35.2s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,266 total problems in the BrowseComp benchmark, human trainers in the verification process attempted 1,255 tasks and labeled 888 (approximately 70.8%) as unsolvable within a two-hour window.** The official OpenAI paper and blog describe a benchmark of **1,266 questions** created and vetted by human trainers, who were instructed to label problems as “unsolvable” if they could not solve them within two hours of searching without AI assistance. Secondary reports citing the verification campaign give the precise figures of **1,255 attempted tasks** with **71% (≈888) marked unsolvable** (and 29% successfully completed, with 86.4% agreement on those). These numbers come directly from the human verification step used to ensure task difficulty. - [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) (1,266 tasks; details on trainer verification and unsolvable labelin...

### browsecomp-unsolved-math / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 41.5s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 attempted tasks in the BrowseComp human verification campaign, 888 were labeled unsolvable (70.8%).** This figure comes from human trainers solving without AI tools (2-hour limit per task); only 29% were completed, with 86.4% answer agreement on those. The overall benchmark contains 1,266 questions. These numbers are reported in coverage of the official OpenAI release: [OpenAI BrowseComp page](https://openai.com/index/browsecomp) and [paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf).

### browsecomp-unsolved-math / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 7.0s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - **Verification campaign totals**: 1,255 attempted tasks. - **Labeled unsolvable**: 888 tasks (70.8%). - Human trainers solved only 29% within the two-hour limit, with 86.4% agreement on completed reference answers. These figures come directly from the BrowseComp human evaluation reported in the OpenAI benchmark release and paper analyses.

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 48.8s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> In the official BrowseComp verification campaign, human trainers attempted **1,255** problems, labeled **888** of them unsolvable after two hours, which equals **70.8%** of the total. These figures come from the benchmark’s Table 2 on human performance, reported by both the [OpenAI blog post](https://openai.com/index/browsecomp/) and the [arXiv paper](https://arxiv.org/html/2504.12516v1).

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 47.8s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp verification campaign statistics published by OpenAI, human trainers attempted **1,255** problems, of which **888** were labeled unsolvable (trainers gave up after two hours), representing **70.8%** of the total. The remaining 367 problems (29.2%) were solved by humans, with an 86.4% agreement rate between trainer answers and reference answers. These figures appear in [Table 2 of the BrowseComp paper](https://arxiv.org/html/2504.12516v1) and on the official [OpenAI BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-unsolved-math / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 35.5s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - BrowseComp comprises **1,266 total questions** that require persistent web navigation to find entangled, hard-to-find information. - Of the **1,255 problems attempted in the human verification campaign** (11 questions were not attempted due to various reasons), **888 were labeled unsolvable**—representing **70.8%** of the verified set, with the remaining 367 (29.2%) solvable by humans. These figures come from OpenAI's official verification campaign data in the browsecomp.pdf and arXiv paper.

### browsecomp-unsolved-math / parallel / mistral/mistral-small-latest
Score: 71/100 (fail), duration 9.0s
Facts: no The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Out of 1,266 total problems, 888 were labeled unsolvable, which is 70.8%.

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 21.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable by human trainers (those they gave up on after two hours), which is 70.8%.** This is from Table 2 in the BrowseComp paper, where of the original 1,266 examples, 11 were not attempted, leaving 1,255 for the campaign.[^1][^2] Trainers labeled problems unsolvable if unsolved within 2 hours without AI assistance.[^1] The OpenAI announcement page reports the same figures.[^3]

### browsecomp-unsolved-math / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 12.3s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **Out of 1,255 total problems in the BrowseComp verification campaign, 888 were labeled unsolvable by human trainers after two hours (70.8%).** This excludes 11 of the original 1,266 dataset examples that were not attempted.[^1][^2][^3] [^1]: [BrowseComp arXiv paper Table 2](https://arxiv.org/pdf/2504.12516) [^2]: [OpenAI BrowseComp page verification stats](https://openai.com/index/browsecomp/) [^3]: [OpenAI BrowseComp PDF Table 2](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.9s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the human verification campaign, 888 were labeled unsolvable (human gave up after two hours), which is 70.8%.** This leaves 367 solved by humans (29.2%), of which 317/367 (86.4%) matched the reference answer. The full dataset contains 1,266 examples, with 11 not attempted by humans for various reasons, leaving the 1,255 campaign total. These exact figures and the table come directly from the official OpenAI announcement ([openai.com/index/browsecomp](https://openai.com/index/browsecomp/)) and the arXiv paper ([arxiv.org/pdf/2504.12516](https://arxiv.org/pdf/2504.12516)).

### browsecomp-unsolved-math / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 21.0s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Out of 1,255 total problems in the official BrowseComp verification campaign, 888 were labeled unsolvable (70.8%).** The full dataset contains 1,266 examples, but 11 were not attempted by humans for various reasons, leaving the 1,255 used for the human baseline. Trainers could mark a problem “unsolvable” and move on after two hours of searching; they solved 367/1,255 (29.2%), with 86.4% of those matching the reference answer. These exact figures appear in Table 2 of the [research paper (arXiv:2504.12516)](https://arxiv.org/pdf/2504.12516) and on the [official OpenAI BrowseComp announcement page](https://openai.com/index/browsecomp/).

### browsecomp-unsolved-math / exa / xai/grok-4.3
Score: 92/100 (fail), duration 5.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> - Out of **1,255** total problems in the official BrowseComp verification campaign (from the original 1,266-question dataset, after 11 unattempted), human trainers labeled **888** as unsolvable after attempting them for up to two hours without AI assistance. - This represents **70.8%** of the campaign total; the remaining 367 (29.2%) were solved by humans, with 86.4% of those matching the reference answers. These figures come directly from the benchmark creators’ human baseline evaluation in the paper and OpenAI announcement.

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 28.3s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Out of **1,255** total problems in the official BrowseComp verification campaign, **888** were labeled unsolvable by human trainers within the two-hour time limit, representing **70.8%** of the campaign. (The full dataset contains 1,266 examples; 11 were not attempted by humans for various reasons, leaving 1,255 in the campaign.) These figures appear in the official OpenAI announcement and the research paper’s Table 2 ([OpenAI Blog](https://openai.com/index/browsecomp/), [arXiv paper](https://arxiv.org/html/2504.12516), [OpenAI PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 25.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp paper and OpenAI sources, the verification campaign had **1,255 total problems** (of the 1,266 examples in the dataset, 11 were not attempted by humans). Of these, **888 were labeled unsolvable** after humans gave up following two hours of searching, representing **70.8%** of the campaign [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents](https://arxiv.org/pdf/2504.12516). The remaining 367 problems (29.2%) were successfully solved by human trainers [OpenAI BrowseComp](https://openai.com/index/browsecomp/).

### browsecomp-unsolved-math / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 3.0s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - Total problems marked in the verification campaign: 1,255 - Problems labeled unsolvable: 888 - Percentage unsolvable: 70.8% (888 ÷ 1,255) Sources: [arXiv PDF](https://arxiv.org/pdf/2504.12516); [arXiv HTML](https://arxiv.org/html/2504.12516); [OpenAI website](https://openai.com/index/browsecomp/).

### browsecomp-unsolved-math / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 2.7s
Facts: yes The verification campaign had 1,255 total problems; yes 888 problems were labeled unsolvable; yes The unsolvable share was 70.8%
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Out of 1,255 total problems in the BrowseComp verification campaign, 888 were labeled unsolvable, which is 70.8% of the total. [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [BrowseComp arXiv PDF](https://arxiv.org/pdf/2504.12516)

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 14.9s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official OpenAI BrowseComp page ([openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)), the listed accuracies are:** - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (*trained specifically on BrowseComp-like data*) These match values consistently reported across initial sources, including the paper PDF and arXiv HTML, though full tables were not fully extracted from fetched pages. [source 1](https://openai.com/index/browsecomp/) [source 7](https://arxiv.org/html/2504.12516v1)

### browsecomp-model-baselines / parallel / xai/grok-4-1-fast
Score: 92/100 (fail), duration 18.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **On the official BrowseComp page**, the listed BrowseComp accuracies are: [https://openai.com/index/browsecomp/] - **GPT-4o**: 0.6% - **GPT-4o w/ browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (*trained specifically on BrowseComp-like data*) [https://arxiv.org/html/2504.12516v1]

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 14.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **GPT-4o: 0.6%, GPT-4o with browsing: 1.9%, OpenAI o1: 9.9%, Deep Research: 51.5%.** (From the official table on the [BrowseComp page](https://openai.com/index/browsecomp/).) These numbers are directly listed in the primary OpenAI announcement and accompanying paper for the benchmark of 1,266 hard multi-hop web questions. A note indicates Deep Research was trained on data that specifically teaches BrowseComp-style tasks. Enabling browsing improves GPT-4o only modestly, while stronger reasoning and agentic search drive larger gains.

### browsecomp-model-baselines / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.2s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page:** - **GPT-4o**: 0.6% accuracy - **GPT-4o with browsing**: 1.9% accuracy - **OpenAI o1**: 9.9% accuracy - **Deep Research**: 51.5% accuracy (note: this model was trained on data specifically for BrowseComp-style tasks) These results are from the model performance table on the [official BrowseComp benchmark page](https://openai.com/index/browsecomp/), which highlights that browsing tools alone yield only modest gains without strong reasoning. The same numbers appear in the associated [research paper](https://arxiv.org/html/2504.12516v1).

### browsecomp-model-baselines / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 16.4s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - **GPT-4o**: 0.6% accuracy - **GPT-4o with browsing**: 1.9% accuracy - **OpenAI o1**: 9.9% accuracy - **Deep Research**: 51.5% accuracy (note: trained specifically on BrowseComp tasks) These figures come directly from the performance table on the official BrowseComp page.

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 19.6s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI’s official BrowseComp page, the accuracies are: GPT-4o at **0.6%**, GPT-4o with browsing at **1.9%**, OpenAI o1 at **9.9%**, and Deep Research at **51.5%** (noting that Deep Research was trained on data specifically targeting BrowseComp tasks). [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 12.7s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official [BrowseComp announcement page](https://openai.com/index/browsecomp/) from OpenAI, the accuracies are: - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% The [BrowseComp paper](https://arxiv.org/abs/2504.12516) also reports these figures, noting that Deep Research significantly outperforms other models by autonomously searching, evaluating, and synthesizing information across multiple sources, while GPT‑4.5 achieved 0.9% accuracy.

### browsecomp-model-baselines / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 14.3s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Based on OpenAI's official BrowseComp page: - **GPT-4o**: 0.6% accuracy - **GPT-4o with browsing**: 1.9% accuracy - **OpenAI o1**: 9.9% accuracy - **Deep Research**: 51.5% accuracy The Deep Research model dramatically outperforms the other models, achieving over 50% accuracy on BrowseComp [1][7][13].

### browsecomp-model-baselines / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 15.9s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> I will use the initial sources, which already provide the exact accuracies from the BrowseComp benchmark. The OpenAI page and arXiv paper both report the same values in their tables. - GPT-4o: 0.6% accuracy - GPT-4o with browsing: 1.9% accuracy - OpenAI o1: 9.9% accuracy - Deep Research: 51.5% accuracy

### browsecomp-model-baselines / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 19.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official OpenAI BrowseComp page ([openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)), the listed accuracies are:** | Model | Accuracy (%) | |----------------------|--------------| | GPT-4o | 0.6 | | GPT-4o w/ browsing | 1.9 | | OpenAI o1 | 9.9 | | Deep Research* | 51.5 | *Deep Research was trained on data specifically for BrowseComp tasks. These match the figures in the research paper [PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) and arXiv [paper](https://arxiv.org/pdf/2504.12516).

### browsecomp-model-baselines / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 21.1s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official OpenAI BrowseComp page ([openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)) and research paper ([browsecomp.pdf](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)), the listed accuracies are:** - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (*trained on data specifically for BrowseComp tasks*)

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-non-reasoning
Score: 92/100 (fail), duration 10.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **GPT-4o: 0.6%, GPT-4o with browsing: 1.9%, OpenAI o1: 9.9%, Deep Research: 51.5%.** (Note: Deep Research was trained on data specifically for BrowseComp tasks.) These exact figures come from the official OpenAI BrowseComp page table and the accompanying paper (Table 3: Accuracy of OpenAI models on BrowseComp), which label them as GPT-4o (0.6), GPT-4o w/ browsing (1.9), OpenAI o1 (9.9), and Deep Research (51.5). The values are corroborated across the PDF and arXiv versions.

### browsecomp-model-baselines / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 23.0s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page, the listed accuracies are:** - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% (noted as trained on data specifically teaching BrowseComp tasks) These results appear in the performance table on the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/) and the linked [research paper](https://arxiv.org/pdf/2504.12516), which highlight that both browsing tools and strong reasoning are needed, with Deep Research showing substantially stronger persistent browsing capability. The numbers are corroborated across the primary PDF and page content.

### browsecomp-model-baselines / exa / xai/grok-4.3
Score: 92/100 (fail), duration 14.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - On the official BrowseComp page, **GPT-4o** scores **0.6%** accuracy, **GPT-4o with browsing** scores **1.9%**, **OpenAI o1** scores **9.9%**, and **Deep Research** scores **51.5%**. - These figures appear directly in the performance table under “Performance of OpenAI models,” with the note that Deep Research was trained specifically on BrowseComp-style tasks. - The same exact numbers are reported in the linked arXiv paper (Table 3) at https://openai.com/index/browsecomp/ and https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf.

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 34.8s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> OpenAI’s official BrowseComp page reports accuracies of **0.6%** for GPT‑4o, **1.9%** for GPT‑4o with browsing, **9.9%** for OpenAI o1, and **51.5%** for Deep Research (*trained on data specifically for BrowseComp tasks*) ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)).

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 19.1s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official OpenAI BrowseComp page and research paper, the accuracies are: - **GPT-4o**: 0.6% - **GPT-4o with browsing**: 1.9% - **OpenAI o1**: 9.9% - **Deep Research**: 51.5% These figures come from Table 3 in the [OpenAI BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) and are reproduced on the [official OpenAI blog post](https://openai.com/index/browsecomp/). The results show that while enabling browsing for GPT-4o only modestly improved performance (from 0.6% to 1.9%), Deep Research—which was explicitly trained for persistent web browsing—significantly outperformed other models by solving roughly half of the benchmark's challenging multi-hop search problems.

### browsecomp-model-baselines / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 30.5s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Based on the official BrowseComp page and research paper, here are the listed accuracies: **GPT-4o: 0.6%** **GPT-4o with browsing: 1.9%** **OpenAI o1: 9.9%** **Deep Research: 51.5%** These figures come from Table 3 in the BrowseComp research paper, reported on OpenAI's official benchmark page. Note that Deep Research is specifically trained to excel at BrowseComp tasks, which is reflected in its significantly higher accuracy.

### browsecomp-model-baselines / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 12.7s
Facts: yes GPT-4o accuracy was 0.6%; yes GPT-4o with browsing accuracy was 1.9%; yes OpenAI o1 accuracy was 9.9%; yes Deep Research accuracy was 51.5%
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The official BrowseComp paper PDF did not include the accuracy table in the fetched content. However, multiple independent sources (including the official OpenAI blog and the arXiv paper) consistently report the same accuracies. I will answer using the most authoritative sources available. - GPT-4o: 0.6% accuracy - GPT-4o with browsing: 1.9% accuracy - OpenAI o1: 9.9% accuracy - Deep Research: 51.5% accuracy Sources: - [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) reports GPT-4o 0.6, GPT-4o with browsing 1.9, OpenAI o1 9.9, and Deep Research 51.5. - [arXiv:2504.12516](https://arxiv.org/pdf/2504.12516) Table 3 lists the same accuracies for the same models.

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 6.5s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **The official BrowseComp model accuracy table reports GPT-4o without browsing at 0.6% and with browsing at 1.9%.** **The absolute improvement is 1.9 - 0.6 = 1.3 percentage points.** This is confirmed consistently across the [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) table and [BrowseComp paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) Table 3. Secondary sources note the same values and describe it as a "modest improvement."

### browsecomp-browsing-delta / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 17.9s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The official BrowseComp accuracy table lists GPT-4o without browsing at 0.6% and GPT-4o with browsing at 1.9%.** **Absolute improvement: 1.9% - 0.6% = 1.3 percentage points.** [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) [BrowseComp paper (PDF)](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) [BrowseComp arXiv HTML](https://arxiv.org/html/2504.12516v1)

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 7.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The absolute improvement is 1.3 percentage points (1.9% - 0.6%).** The official BrowseComp table reports: - GPT-4o: 0.6% accuracy - GPT-4o w/ browsing: 1.9% accuracy This is confirmed directly in the primary sources: [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) and [the paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf), which state that “Enabling browsing for GPT‑4o led to a modest improvement in accuracy (from 0.6% to 1.9%)”.

### browsecomp-browsing-delta / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 12.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **1.3 percentage points.** The official BrowseComp accuracy table lists GPT-4o at **0.6%** and GPT-4o with browsing at **1.9%** ([OpenAI announcement](https://openai.com/index/browsecomp/); [research paper](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)). Subtracting these values yields an absolute improvement of **1.3** percentage points. The same figures and explicit statement of improvement from 0.6% to 1.9% appear in the arXiv HTML version.

### browsecomp-browsing-delta / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 9.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> - **Absolute improvement**: 1.3 percentage points (1.9% with browsing minus 0.6% without). - Official BrowseComp table (OpenAI blog): [GPT-4o 0.6%, GPT-4o w/ browsing 1.9%](https://openai.com/index/browsecomp/). - Identical numbers in the paper PDF: [Table 3, GPT-4o 0.6 → GPT-4o w/ browsing 1.9](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf). - Same values confirmed on arXiv HTML: [Table 3, GPT-4o 0.6% to 1.9%](https://arxiv.org/html/2504.12516v1).

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 38.1s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to OpenAI's official BrowseComp benchmark table, GPT-4o without browsing achieved **0.6%** accuracy and GPT-4o with browsing achieved **1.9%** accuracy ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/); [BrowseComp paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)). The absolute improvement is **1.3 percentage points** (1.9% − 0.6%).

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 8.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> Based on the official BrowseComp model accuracy table from OpenAI's research, **GPT-4o with browsing achieved 1.3 percentage points of absolute improvement** over GPT-4o without browsing (1.9% vs. 0.6% accuracy) [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/) [BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents (arXiv)](https://arxiv.org/html/2504.12516v1).

### browsecomp-browsing-delta / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 27.2s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> GPT‑4o with browsing improves absolute accuracy on BrowseComp by 1.3 percentage points (from 0.6% to 1.9%), as reported in OpenAI's benchmark [arXiv](https://arxiv.org/html/2504.12516v1) and the official BrowseComp page [openai.com](https://openai.com/index/browsecomp/).

### browsecomp-browsing-delta / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 11.3s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> -1.3 The absolute improvement of GPT‑4o with browsing over GPT‑4o without browsing is 1.3 percentage points [OpenAI BrowseComp model accuracy table](https://openai.com/index/browsecomp/) [arXiv BrowseComp accuracy table](https://arxiv.org/html/2504.12516v1). 1.9% − 0.6% = 1.3 pp.

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 20.1s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **GPT-4o with browsing improves by 1.3 percentage points over GPT-4o without browsing on the BrowseComp benchmark (1.9% vs. 0.6%).** This absolute improvement is calculated as 1.9 - 0.6 = 1.3. The official table in the BrowseComp paper confirms these accuracies: GPT-4o at 0.6% and GPT-4o w/ browsing at 1.9%.[^1][^2][^3] The OpenAI blog page and PDF excerpts consistently report the same numbers, noting a "modest improvement in accuracy (from 0.6% to 1.9%)."[^4][^5]

### browsecomp-browsing-delta / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 14.4s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: no

Answer excerpt:

> **GPT-4o without browsing achieved 0.6% accuracy on BrowseComp, while GPT-4o with browsing achieved 1.9%.** [Table 3 in arXiv paper](https://arxiv.org/pdf/2504.12516) [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) [OpenAI BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) **The absolute improvement is 1.3 percentage points (1.9 - 0.6).**

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.0s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **The absolute improvement is 1.3 percentage points (1.9% - 0.6%).** The official BrowseComp accuracy table reports: - GPT-4o: 0.6% - GPT-4o w/ browsing: 1.9% This is confirmed directly in the primary sources, including the arXiv paper, the official OpenAI PDF, and the OpenAI announcement page. The paper states: "Enabling browsing for GPT-4o led to a modest improvement in accuracy (from 0.6% to 1.9%)." ([arXiv paper](https://arxiv.org/pdf/2504.12516), [OpenAI BrowseComp page](https://openai.com/index/browsecomp/), [official PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)) No code execution was used; the subtraction is direct from the tabulated values.

### browsecomp-browsing-delta / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.7s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **1.3 percentage points.** The official BrowseComp accuracy table reports GPT-4o at **0.6%** and GPT-4o with browsing (gpt-4o-search-preview-2025-03-11) at **1.9%**. Subtracting these values yields an absolute improvement of 1.3 percentage points (1.9 - 0.6). This is stated directly in the paper: "Enabling browsing for GPT-4o led to a modest improvement in accuracy (from 0.6% to 1.9%)". ([OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/), [arXiv paper](https://arxiv.org/pdf/2504.12516)). The same numbers and table appear consistently in the official PDF and HTML versions.

### browsecomp-browsing-delta / exa / xai/grok-4.3
Score: 92/100 (fail), duration 4.8s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: no

Answer excerpt:

> **GPT-4o without browsing scores 0.6% accuracy on BrowseComp; GPT-4o with browsing (gpt-4o-search-preview-2025-03-11) scores 1.9%.** **Absolute improvement: 1.3 percentage points** (1.9 – 0.6). This is taken directly from Table 3 in the official BrowseComp paper and OpenAI announcement, which list the exact values for both variants.

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 22.9s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official BrowseComp paper, GPT-4o without browsing scored **0.6%** accuracy, while GPT-4o with browsing scored **1.9%** accuracy. The absolute improvement is **1.3 percentage points** (1.9 − 0.6). This is explicitly noted in [OpenAI's BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf) and the [arXiv paper](https://arxiv.org/html/2504.12516v1), where Table 3 lists both figures and the text states that enabling browsing led to a "modest improvement in accuracy (from 0.6% to 1.9%)".

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 19.8s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp paper's Table 3—available on [OpenAI's announcement](https://openai.com/index/browsecomp/) and documented in the [arXiv preprint](https://arxiv.org/pdf/2504.12516)—GPT-4o achieves **0.6%** accuracy without browsing and **1.9%** with browsing enabled. Absolute improvement: **1.3 percentage points** (1.9% − 0.6% = 1.3%).

### browsecomp-browsing-delta / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 22.6s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> 1.9% − 0.6% = 1.3 percentage points. In BrowseComp’s official accuracy table, GPT-4o achieved 0.6% accuracy while GPT-4o with browsing reached 1.9% [OpenAI browsecomp blog] | [OpenAI PDF Table 3].

### browsecomp-browsing-delta / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 6.2s
Facts: yes GPT-4o without browsing scored 0.6%; yes GPT-4o with browsing scored 1.9%; yes The absolute improvement was 1.3 percentage points
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Absolute improvement: **1.3 percentage points** (from 0.6% to 1.9%). [BrowseComp official table](https://arxiv.org/pdf/2504.12516)

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 30.5s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research is the best-performing model listed on the official OpenAI BrowseComp page, achieving 51.5% accuracy.** This tops other models like OpenAI o1 (9.9%), GPT-4o w/ browsing (1.9%), GPT-4.5 (0.9%), and GPT-4o (0.6%). *The caveat is: "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks."* [https://openai.com/index/browsecomp/](https://openai.com/index/browsecomp/)

### browsecomp-best-caveat / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research** is the best-performing model listed on the official BrowseComp page, achieving **51.5% accuracy**. [Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.](https://openai.com/index/browsecomp/)

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 16.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (marked with *) at 51.5% accuracy is the best-performing model listed on the official OpenAI BrowseComp page.** The table shows: - GPT-4o: 0.6% - GPT-4o w/ browsing: 1.9% - GPT-4.5: 0.9% - OpenAI o1: 9.9% - Deep Research\*: 51.5% **Caveat (exact text):** “Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.” ([Official BrowseComp page](https://openai.com/index/browsecomp/)) This matches the initial sources and the fetched official page content.

### browsecomp-best-caveat / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 29.8s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research at 51.5% accuracy (with asterisk).** The official BrowseComp page table lists it as the top entry, far above OpenAI o1 (9.9%), GPT-4o w/ browsing (1.9%), and others. The attached caveat states: "Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks." ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/)).

### browsecomp-best-caveat / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 13.9s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **On the official BrowseComp page, the highest-scoring model in the performance table is Deep Research at 51.5% accuracy.** - All other listed models (GPT-4o, GPT-4o w/ browsing, GPT-4.5, OpenAI o1) score below 10%. - The attached caveat states: “Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.” [OpenAI BrowseComp page](https://openai.com/index/browsecomp/)

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 30.2s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official [OpenAI BrowseComp page](https://openai.com/index/browsecomp/), the best-performing listed model is **Deep Research**, with an accuracy of **51.5%**. The result carries an asterisked caveat: *“Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.”*

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 20.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official OpenAI BrowseComp page, the best-performing listed model is **Deep Research** with an accuracy of **51.5%** — far surpassing GPT-4o (0.6%), GPT-4.5 (0.9%), and OpenAI o1 (9.9%). The key caveat attached to this result is: *"Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks"* ([BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)).

### browsecomp-best-caveat / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 108.1s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> # Deep Research (deep research*) with 51.5% accuracy; caveat that this model is specifically trained on BrowseComp tasks when cited.

### browsecomp-best-caveat / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.4s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> The best-performing listed model on the official BrowseComp page is **Deep Research** with **51.5%** accuracy. The attached caveat is that it is trained on data specifically to excel at BrowseComp tasks, which may inflate its benchmark performance relative to general browsing ability [OpenAI's BrowseComp page](https://openai.com/index/browsecomp/) [OpenAI's BrowseComp page](https://openai.com/index/browsecomp/).

### browsecomp-best-caveat / exa / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 17.6s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Deep Research is the best-performing model listed on the official OpenAI BrowseComp page, achieving 51.5% accuracy.** The table shows: | Model | Accuracy (%) | |-------|--------------| | GPT-4o | 0.6 | | GPT-4o w/ browsing | 1.9 | | GPT-4.5 | 0.9 | | OpenAI o1 | 9.9 | | Deep research* | 51.5 |*[https://openai.com/index/browsecomp/](OpenAI BrowseComp page table)* **Caveat:** "*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*" [https://openai.com/index/browsecomp/](OpenAI BrowseComp page footnote)*

### browsecomp-best-caveat / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research is the best-performing model listed on the official BrowseComp page table, achieving 51.5% accuracy.** *[BrowseComp official page table](https://openai.com/index/browsecomp/)* **Caveat:** *Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.* *[OpenAI BrowseComp page excerpt](https://openai.com/index/browsecomp/)* *[arXiv paper Table 3](https://arxiv.org/html/2504.12516)*

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 18.3s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (marked with * or 222 in tables) is the best-performing listed model on the official BrowseComp page and arXiv paper, with 51.5% accuracy.** The attached caveat is: "Note that the Deep Research model is trained on data that specifically teach the model to be good at BrowseComp tasks." ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [arXiv paper](https://arxiv.org/html/2504.12516)). This matches all initial sources, which show it far ahead of OpenAI o1 (9.9%), GPT-4o w/ browsing (1.9%), and others.

### browsecomp-best-caveat / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 26.1s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research is the best-performing model listed, with 51.5% accuracy.** The official BrowseComp page notes: "*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*" ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [arXiv paper](https://arxiv.org/html/2504.12516)). This substantially exceeds other listed models (GPT-4o 0.6%, GPT-4o w/ browsing 1.9%, GPT-4.5 0.9%, OpenAI o1 9.9%). The caveat is attached directly to its row in the official table.

### browsecomp-best-caveat / exa / xai/grok-4.3
Score: 100/100 (pass), duration 21.2s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Deep Research (OpenAI’s agent model for persistent web browsing) is the best-performing entry in the official BrowseComp table, achieving 51.5% accuracy.** - All other listed models score far lower (GPT-4o 0.6%, GPT-4o w/ browsing 1.9%, GPT-4.5 0.9%, OpenAI o1 9.9%). - The result carries this explicit caveat on the official page and paper: “*Note that the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks.*” [OpenAI BrowseComp announcement](https://openai.com/index/browsecomp/) · [arXiv paper (Table 3)](https://arxiv.org/html/2504.12516)

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 19.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> On the official BrowseComp page, the best-performing listed model is **Deep Research**, achieving **51.5%** accuracy. The result carries a caveat that the Deep Research model “is trained on data that specifically teaches the model to be good at BrowseComp tasks” ([OpenAI BrowseComp page](https://openai.com/index/browsecomp/); [BrowseComp PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)).

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 22.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the official BrowseComp page and paper, the best-performing listed model is **Deep Research** with an accuracy of **51.5%**. The caveat attached to this result notes that [*"the Deep Research model is trained on data that specifically teaches the model to be good at BrowseComp tasks"*](https://openai.com/index/browsecomp/). This significantly outperforms the next-best model, OpenAI o1, which achieved only 9.9% accuracy without browsing capabilities, while GPT-4o with browsing reached just 1.9%.

### browsecomp-best-caveat / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 14.6s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Based on the official BrowseComp benchmark results: - **Best-performing model**: OpenAI Deep Research - **Accuracy**: 51.5% - **Caveat**: Deep Research was trained on data specifically designed to make it perform well on BrowseComp tasks (i.e., it received task-specific training)

### browsecomp-best-caveat / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 13.0s
Facts: yes Deep Research was the best-performing listed model; yes Deep Research scored 51.5%; yes The caveat says Deep Research was trained on data teaching BrowseComp tasks
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - Best-performing model: **OpenAI Deep Research** - Accuracy: **51.5%** - Caveat: The model was **trained on data specifically teaching it to excel at BrowseComp tasks** [OpenAI's BrowseComp page](https://openai.com/index/browsecomp/) [BrowseComp paper PDF](https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf)

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 31.0s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Trainers used three specific checks to ensure BrowseComp questions were sufficiently challenging, as detailed on the official OpenAI page:** - Verified that existing models (GPT-4o with/without browsing, o1, and an early deep research model) could not solve them.[https://openai.com/index/browsecomp/] - Performed five simple searches to confirm the answer was not on the first pages of search engine results.[https://openai.com/index/browsecomp/] - Ensured another trainer could not solve >40% of a batch in under 10 minutes, prompting revisions if exceeded (checked on a portion of questions).[https://openai.com/index/browsecomp/]

### browsecomp-challenge-checks / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 13.2s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure BrowseComp questions were sufficiently challenging, as detailed on the **[official OpenAI BrowseComp page](https://openai.com/index/browsecomp/)**: - Verified that existing models like GPT-4o (with/without browsing), o1, and an early deep research model could not solve them. - Performed five simple searches to confirm the answer was not on the first pages of search engine results. - Ensured questions were hard for humans to solve in under 10 minutes; if a second trainer solved >40% of a batch, creators revised them.

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 14.0s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks to ensure BrowseComp questions were sufficiently challenging:** - Verified that existing models (GPT-4o with/without browsing, o1, and an early Deep Research model) could not solve them. [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) - Performed five simple searches confirming the answer was not in the first pages of search engine results. [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) - Ensured another person could not solve it in under 10 minutes (not strictly enforced; if a second trainer solved >40% of a creator’s questions, they were asked to revise). [OpenAI BrowseComp page](https://openai.com/index/browsecomp/) They also used an “inverted question” approach: starting from a fact/seed, selecting characteristics with large search spaces to make answers hard to find but easy to verify. [OpenAI BrowseComp page](https://open...

### browsecomp-challenge-checks / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.5s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks on the official BrowseComp page:** - Verified that GPT-4o (with and without browsing), o1, and an early deep research model could not solve them. - Performed **five simple searches** confirming the answer was absent from the first pages of search engine results. - Ensured another trainer solved fewer than 40% of questions in under 10 minutes (revising creators whose questions exceeded this rate). They also used an “inverted question” approach: start with a fact/seed, identify characteristics with large search spaces, then craft a question that is hard to find but easy to verify. ([Official BrowseComp page](https://openai.com/index/browsecomp/))

### browsecomp-challenge-checks / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 14.3s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Trainers used three explicit checks on the official BrowseComp page to ensure questions were sufficiently challenging:** - Existing models (GPT-4o with/without browsing, o1, and an early Deep Research version) could not solve them. - Five simple searches confirmed the answer was absent from the first page of search-engine results. - Another trainer could not solve the task in under 10 minutes; creators whose questions were solved >40% of the time were required to revise them. These checks appear verbatim on the official page, which also describes the “inverted question” construction method trainers followed.

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 10.1s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers applied three checks to ensure questions were sufficiently challenging: they verified that GPT‑4o (with and without browsing), o1, and an early deep research model could not solve the problem; they performed five simple searches to confirm the answer did not appear on the first page of search results; and they aimed to make questions too hard for another person to solve within ten minutes, revising any tasks that a second trainer solved more than 40% of the time [[BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)].

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 11.1s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure questions were sufficiently challenging: (1) they verified that GPT‑4o (with and without browsing), o1, and an early version of the deep research model could not solve the problems; (2) they performed five simple searches to confirm the answer was not available on the first pages of search results; and (3) they ensured another person could not solve the task within ten minutes (with trainers revising questions solved more than 40% of the time). [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 8.8s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Using the official BrowseComp page, trainers used three checks to ensure questions were sufficiently challenging: (1) existing models at the time could not solve them—trainers verified GPT‑4o (with and without browsing), o1, and an early version of Deep Research failed [1]; (2) trainers performed five simple searches and confirmed the answer was not on the first pages of search results [1]; (3) questions were made challenging enough that another person could not solve them within ten minutes—second trainers attempted to solve the question and those that were solved more than 40% were revised [1].

### browsecomp-challenge-checks / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 8.2s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> - Trainers verified that GPT‑4o (with and without browsing), o1, and an early version of the deep research model could not solve the questions. - Trainers performed five simple searches and confirmed the answer was not available on the first pages of search results. - Trainers ensured questions were hard enough that another person could not solve them within ten minutes; tasks solved more than 40% of the time were revised.

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 7.7s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three specific checks to ensure BrowseComp questions were sufficiently challenging, as detailed on the official OpenAI page:** - Verified that existing models—GPT-4o (with and without browsing), o1, and an early deep research model—could not solve them. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/) - Performed five simple searches to confirm the answer was not on any first pages of search engine results. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/) - Aimed for tasks another person could not solve in ten minutes; a second trainer tested some, and creators whose tasks were solved >40% of the time revised them. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.5s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers used three checks to ensure BrowseComp questions were sufficiently challenging, as described on the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/): - Verify that existing models (GPT-4o with/without browsing, o1, and an early deep research model) could not solve them. - Perform five simple searches to confirm the answer was not on the first pages of search engine results. - Aim for tasks unsolvable by another person in under 10 minutes; a second trainer tested some questions, and creators revised if >40% were solved.

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-non-reasoning
Score: 71/100 (fail), duration 31.7s
Facts: yes Existing models were checked and could not solve the question; no Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Trainers used three checks to ensure BrowseComp questions were sufficiently challenging:** - Verified that existing models (GPT-4o with/without browsing, o1, and an early deep research model) could not solve them. - Performed **five simple Google searches** and confirmed the answer was not on the first pages of results. - Created tasks that another person could not solve within **ten minutes** (not strictly enforced; a second trainer tested some questions, and creators whose tasks were solved >**40%** of the time were asked to revise them). These criteria are stated consistently on the official OpenAI page and in the paper/PDF.

### browsecomp-challenge-checks / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 15.1s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> **Trainers used three checks on the official BrowseComp page:** - Verified existing models (GPT-4o with/without browsing, o1, early deep research model) could not solve the questions. - Performed **five simple searches** and confirmed the answer was not on the first pages of search engine results. - Created tasks where another person could not solve them within **ten minutes** (second trainer verified a portion; creators whose tasks solved >**40%** of the time revised them). ([Official BrowseComp page](https://openai.com/index/browsecomp/); matches [arXiv paper](https://arxiv.org/abs/2504.12516)).

### browsecomp-challenge-checks / exa / xai/grok-4.3
Score: 92/100 (fail), duration 13.3s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> **Trainers used three specific checks to ensure BrowseComp questions were sufficiently challenging:** - Verify that existing models (GPT‑4o with/without browsing, o1, and an early deep research model) could not solve them. - Perform five simple searches and confirm the answer was absent from the first pages of search-engine results. - Create tasks hard enough that another person could not solve them in ten minutes; a second trainer tested a portion of questions, and creators whose tasks were solved >40% of the time were required to revise them. These criteria appear verbatim on the official BrowseComp page.

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 28.5s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> Trainers ensured BrowseComp questions were sufficiently challenging by verifying that GPT‑4o (with and without browsing), o1, and an early deep research model could not solve them, that five simple searches did not surface the answer on the first pages of results, and that another person could not solve the task within ten minutes—revising any tasks that were solved more than 40% of the time by a second trainer. [BrowseComp: a benchmark for browsing agents | OpenAI](https://openai.com/index/browsecomp/)

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 15.9s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> According to the [official OpenAI BrowseComp page](https://openai.com/index/browsecomp/), trainers used three checks to ensure questions were sufficiently challenging: - **Existing models failed**: Trainers verified that GPT‑4o (with and without browsing), o1, and an early version of the deep research model could not solve the problems. - **Five simple searches**: Trainers performed five simple searches and confirmed the answer was not available on the first pages of results from any search engine. - **10-minute human difficulty**: Tasks were designed so another person could not solve them within ten minutes; trainers whose questions were solved more than 40% of the time by a second trainer were asked to revise them.

### browsecomp-challenge-checks / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 18.2s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: no; fetch: yes

Answer excerpt:

> Trainers verified three conditions—existing state-of-the-art models (GPT‑4o with and without browsing, OpenAI o1, and an early Deep Research model) could not solve the question; the answer did not appear on any of the first search‑engine result pages after five simple searches; and the task could not be solved by another person within ten minutes (tasks where a second trainer solved more than 40% were flagged for revision).

### browsecomp-challenge-checks / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.6s
Facts: yes Existing models were checked and could not solve the question; yes Trainers performed five simple searches; yes Questions solved more than 40% of the time were revised
Sources: yes openai.com; citation: yes; fetch: yes

Answer excerpt:

> - Trainers verified that existing models (GPT‑4o with/without browsing, o1, and an early deep research model) could not solve the question. - They performed five simple searches and confirmed the answer was not available on any of the first pages of search results. - They ensured another person could not solve the task within ten minutes, revising tasks solved by others more than 40% of the time. [BrowseComp: a benchmark for browsing agents](https://openai.com/index/browsecomp/)

### gaia-counts / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and their answers.** **Answers to 300 of them were retained to power the leaderboard at https://huggingface.co/gaia-benchmark.** This is confirmed directly from the official GAIA paper abstract on the arXiv publication page ([arxiv.org/abs/2311.12983](https://arxiv.org/abs/2311.12983)), the Hugging Face paper page ([huggingface.co/papers/2311.12983](https://huggingface.co/papers/2311.12983)), and the Meta AI research publication page ([ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)).

### gaia-counts / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 14.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and their answers.**<br>[GAIA arXiv abstract](https://arxiv.org/abs/2311.12983)<br>**Answers to 300 of them were retained (unreleased) to power the leaderboard at https://huggingface.co/gaia-benchmark.**<br>[GAIA arXiv abstract](https://arxiv.org/abs/2311.12983)<br>[GAIA Meta research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)

### gaia-counts / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 8.5s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions.** **Answers to 300 of them were retained to power the leaderboard** (with the remaining 166 serving as a development set). - Official GAIA paper: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board." ([arXiv PDF](https://arxiv.org/pdf/2311.12983)) - Confirmed on the official Meta AI research page and Hugging Face leaderboard space ([https://huggingface.co/gaia-benchmark](https://huggingface.co/gaia-benchmark); [Meta publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)).

### gaia-counts / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 27.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them for the leaderboard.** The official GAIA publication page and arXiv abstract state verbatim: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark.” ([arXiv:2311.12983](https://arxiv.org/abs/2311.12983), [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)) The remaining questions serve as a development set; the 300-answer subset powers the public Hugging Face leaderboard.

### gaia-counts / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 12.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> - GAIA devised **466 questions** using its methodology for real-world assistant tasks. - Answers were retained for **300** of these questions to power the public leaderboard (the remaining 166 serve as a development set). These figures come directly from the official GAIA publication: [arXiv:2311.12983](https://arxiv.org/abs/2311.12983) and the Meta AI research page [GAIA: a benchmark for General AI Assistants](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants).

### gaia-counts / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 14.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA devised **466** questions and retained answers to **300** of them to power the leaderboard ([Meta AI official publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [arXiv abstract](https://arxiv.org/abs/2311.12983)).

### gaia-counts / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 92/100 (fail), duration 13.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> According to the official Meta AI publication page for GAIA, the benchmark's authors devised **466 questions** with answers, releasing the questions publicly while retaining answers to **300** of them to power the leaderboard hosted at Hugging Face. The remaining 166 questions serve as a development set with publicly available answers.

### gaia-counts / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 5.3s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> According to the official GAIA publication at Meta and arXiv, the benchmark includes 466 questions overall, and the leaderboard uses only 300 of those questions (the remaining 166 form a development set) [Meta Research publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) | [arXiv paper](https://arxiv.org/abs/2311.12983).

### gaia-counts / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.0s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> - GAIA devised **466 questions** and retained answers for **300** to power the leaderboard. [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)

### gaia-counts / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 11.1s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions and their answers.** **The authors release all questions publicly but retain answers to 300 of them (the private test set) to power the leaderboard.** This is confirmed verbatim across the official ICLR 2024 conference paper ([PDF](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)), Meta AI publication page ([link](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)), and arXiv preprint ([abs](https://arxiv.org/abs/2311.12983)): "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board." The remaining ~166 form the public dev set with answers.

### gaia-counts / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.8s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA devised 466 questions and retained answers to 300 of them to power the leaderboard.** This splits into a public development set of 166 questions (with answers released) and a private test set of 300 questions (answers withheld). [GAIA ICLR abstract](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html) [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [ICLR conference paper PDF](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)

### gaia-counts / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions.** **Answers to 300 of them were retained for the leaderboard.** The official GAIA paper states: "Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board." This is confirmed verbatim on the [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) and the [ICLR proceedings abstract](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html), as well as the [arXiv PDF](https://arxiv.org/pdf/2311.12983). The [Hugging Face leaderboard](https://huggingface.co/spaces/gaia-benchmark/leaderboard) and dataset pages describe it as "more than 450" questions split into public dev (~166) and private test sets, aligning with the 300 retained answers for evaluatio...

### gaia-counts / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 16.5s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions; answers to 300 were retained for the leaderboard (with the remainder released publicly as a 166-question dev set).** The official Meta GAIA publication page states: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board accessible at https://huggingface.co/gaia-benchmark.” ([GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)) This is corroborated by the ICLR 2024 paper and arXiv version. ([ICLR paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html); [arXiv](https://arxiv.org/abs/2311.12983)) The leaderboard is hosted at https://huggingface.co/spaces/gaia-benchmark/leaderboard.

### gaia-counts / exa / xai/grok-4.3
Score: 92/100 (fail), duration 13.5s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> **GAIA devised 466 questions** using its methodology of real-world tasks that are conceptually simple for humans but require reasoning, multi-modality, web browsing, and tool use. It **retained answers to 300 of them** (withholding the ground-truth annotations) while releasing the full set of questions to power the public leaderboard at https://huggingface.co/spaces/gaia-benchmark/leaderboard. This split is stated directly in the official paper: “Using GAIA’s methodology, we devise 466 questions and their answer. We release our questions while retaining answers to 300 of them to power a leader-board.” (See also the Meta AI publication page and the ICLR 2024 proceedings.)

### gaia-counts / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 45.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> Using GAIA’s methodology, its authors devised **466** questions and their answers. They released the questions publicly while retaining answers to **300** of them to power the leaderboard. This is stated on the official publication pages for the benchmark, including the Meta AI research page and the ICLR 2024 paper. [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [ICLR 2024 Conference Paper (PDF)](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)

### gaia-counts / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 22.2s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> Using GAIA's methodology, researchers devised **466 questions** total, releasing all questions publicly but retaining answers to **300 of them** to power the public leaderboard hosted on Hugging Face ([Meta AI research publication](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/); [ICLR 2024 proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html)). The remaining 166 questions constitute the public development set with released answers.

### gaia-counts / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 11.7s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> Using GAIA’s methodology, the benchmark authors devised **466 questions** and retain the answers to **300** of them for the leaderboard [Meta Research (May 6 2024)](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [arXiv:2311.12983](https://arxiv.org/abs/2311.12983).

### gaia-counts / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.6s
Facts: yes GAIA devised 466 questions; yes GAIA retained answers to 300 questions for the leaderboard
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> - GAIA devised 466 questions and retained answers for 300 of them to power the leaderboard [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html).

### gaia-capability-gap / parallel / xai/grok-4-1-fast-non-reasoning
Score: 75/100 (fail), duration 9.0s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency, as stated on the official publication page.** [GAIA: A Benchmark for General AI Assistants](https://huggingface.co/papers/2311.12983) **Human respondents obtain 92% accuracy, vs. 15% for GPT-4 equipped with plugins.** [GAIA paper PDF](https://arxiv.org/pdf/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4-1-fast
Score: 75/100 (fail), duration 10.5s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency.** [GAIA paper abstract](https://huggingface.co/papers/2311.12983) [arXiv GAIA paper](https://arxiv.org/abs/2311.12983) **Human respondents achieve 92% accuracy, compared to 15% for GPT-4 equipped with plugins.** [GAIA paper abstract](https://huggingface.co/papers/2311.12983) [arXiv PDF](https://arxiv.org/pdf/2311.12983)

### gaia-capability-gap / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.3s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires reasoning, multi-modality handling, web browsing, and generally tool-use proficiency.** [Official GAIA paper](https://huggingface.co/papers/2311.12983) **Humans score 92%; GPT-4 equipped with plugins scores 15%.** [GAIA arXiv PDF](https://arxiv.org/pdf/2311.12983) [Meta AI publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) These exact figures and abilities are reported verbatim across the primary sources.

### gaia-capability-gap / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires** fundamental abilities such as **reasoning, multi-modality handling, web browsing, and generally tool-use proficiency**. **Human respondents obtain 92%** vs. **15% for GPT-4 equipped with plugins** ([official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [arXiv abstract](https://arxiv.org/abs/2311.12983)). These real-world questions are conceptually simple for humans but challenging for most advanced AIs.

### gaia-capability-gap / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 13.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> **GAIA requires** reasoning, multi-modality handling, web browsing, and tool-use proficiency to answer its real-world questions. - Humans achieve **92%** accuracy. - GPT-4 equipped with plugins achieves **15%** accuracy. These figures come directly from the paper abstract on the official GAIA publication pages (arXiv and Meta AI Research).

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 75/100 (fail), duration 17.1s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. On the benchmark, human respondents score 92% versus 15% for GPT-4 equipped with plugins, as reported in the official [GAIA publication on arXiv](https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 75/100 (fail), duration 12.5s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA requires fundamental abilities including **reasoning, multi-modality handling, web browsing, and tool-use proficiency** [GAIA: a benchmark for General AI Assistants](https://arxiv.org/abs/2311.12983). According to the official paper, human respondents score **92%** versus **15%** for GPT-4 equipped with plugins.

### gaia-capability-gap / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 75/100 (fail), duration 7.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: no ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. Human respondents obtain 92% vs. GPT-4 equipped with plugins at 15%. Reference: [GAIA: a benchmark for General AI Assistants (arXiv:2311.12983)](https://arxiv.org/abs/2311.12983)

### gaia-capability-gap / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 4.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency. Human respondents score 92% while GPT-4 with plugins scores 15% on the benchmark.

### gaia-capability-gap / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.2s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires real-world questions testing fundamental abilities including reasoning, multi-modality handling, web browsing, and tool-use proficiency.** [GAIA official Meta page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [arXiv paper](https://arxiv.org/abs/2311.12983) **Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins scores 15%.** [GAIA official Meta page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [arXiv paper](https://arxiv.org/abs/2311.12983)

### gaia-capability-gap / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 23.0s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires real-world questions that test fundamental abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency.** **Human respondents achieve 92% accuracy, while GPT-4 equipped with plugins scores 15%.** ([GAIA ICLR 2024 paper](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)) ([GAIA arXiv preprint](https://arxiv.org/pdf/2311.12983))

### gaia-capability-gap / exa / xai/grok-4.20-0309-non-reasoning
Score: 92/100 (fail), duration 11.0s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> **GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency.** (https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) **Human respondents obtain 92% accuracy; GPT-4 equipped with plugins scores 15%.** (https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) These exact figures and capability list appear in the official Meta GAIA publication page abstract (and arXiv/ICLR versions). The benchmark questions are conceptually simple for humans but challenging for advanced AIs.

### gaia-capability-gap / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 27.3s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA requires** reasoning, multi-modality handling, web browsing, and tool-use proficiency. **Reported scores**: humans obtain 92% vs. 15% for GPT-4 equipped with plugins. These are stated directly on the [official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) and the [arXiv paper](https://arxiv.org/abs/2311.12983).

### gaia-capability-gap / exa / xai/grok-4.3
Score: 100/100 (pass), duration 17.3s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA requires** fundamental abilities including **reasoning**, **multi-modality handling**, **web browsing**, and general **tool-use proficiency** (e.g., processing PDFs, spreadsheets, images, videos, or audio). - Official page: [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) states these real-world questions are “conceptually simple for humans yet challenging for most advanced AIs.” - Humans score **92%**; **GPT-4 equipped with plugins** scores **15%** (exact figures from the same abstract).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 13.9s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official Meta publication, GAIA requires fundamental abilities such as reasoning, multi-modality handling, web browsing, and general tool-use proficiency. The reported scores show human respondents obtain **92%** versus **15%** for GPT-4 equipped with plugins ([GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 19.0s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> According to the official Meta AI publication, GAIA requires fundamental abilities such as **reasoning**, **multi-modality handling**, **web browsing**, and **general tool-use proficiency**. The benchmark reports that human respondents obtain **92%** accuracy versus **15%** for GPT-4 equipped with plugins [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/).

### gaia-capability-gap / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 9.7s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> According to GAIA (General AI Assistants) [1], the benchmark targets real‑world problems that require **reasoning, multi‑modality handling, web browsing, and generally tool‑use proficiency** [1]. Human respondents achieve **92%** accuracy, while GPT‑4 with plugins scores **15%** across the benchmark’s **466 questions** [1].

### gaia-capability-gap / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 6.0s
Facts: yes GAIA requires reasoning; yes GAIA requires multi-modality handling; yes GAIA requires web browsing; yes GAIA requires tool-use proficiency; yes Human respondents scored 92%; yes GPT-4 with plugins scored 15%
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA requires reasoning, multi-modality handling, web browsing, and tool-use proficiency. Human respondents score 92% vs. 15% for GPT-4 equipped with plugins.

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 17.7s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), emphasizing robustness akin to average human performance on practical tasks requiring reasoning, multi-modality, web browsing, and tool use.** [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) **This departs from the current trend in AI benchmarks, which suggest pursuing tasks ever more difficult for humans—such as those in law or chemistry where LLMs now outperform humans—in favor of assessing AGI via human-like reliability on accessible, verifiable problems.** [GAIA:A Benchmark for General AI Assistants - ar5iv](https://ar5iv.labs.arxiv.org/html/2311.12983)

### gaia-philosophy-contrast / parallel / xai/grok-4-1-fast
Score: 85/100 (fail), duration 15.2s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's benchmark philosophy departs from the current trend in AI benchmarks that target tasks ever more difficult for humans**, such as those requiring professional skills in law or chemistry where LLMs now outperform humans.[GAIA arXiv paper](https://arxiv.org/abs/2311.12983) [GAIA OpenReview](https://openreview.net/forum?id=fibxvahvs3) - Instead, GAIA emphasizes real-world questions that are **conceptually simple for average humans** (92% accuracy) yet challenging for advanced AIs (e.g., 15% for GPT-4 with plugins), testing robustness via reasoning, multi-modality, web browsing, and tool use.[GAIA arXiv paper](https://arxiv.org/abs/2311.12983) [GAIA OpenReview](https://openreview.net/forum?id=fibxvahvs3) [GAIA Meta AI research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants)

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 8.3s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA targets conceptually simple real-world questions for humans (92% accuracy) that require robust tool use, reasoning, multi-modality, and web browsing—challenging for advanced AIs (15% for GPT-4 with plugins).** **It explicitly departs from the trend of AI benchmarks that target tasks ever more difficult for humans**, such as complex professional or academic assessments in law, chemistry, or STEM where LLMs now outperform humans. **The philosophy posits that AGI requires systems to match average human robustness on such accessible yet execution-heavy tasks.** ([Official GAIA paper](https://arxiv.org/abs/2311.12983); [Meta AI research page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [ar5iv HTML](https://ar5iv.labs.arxiv.org/html/2311.12983))

### gaia-philosophy-contrast / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.1s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's philosophy differs by targeting tasks that are conceptually simple for humans (92% accuracy) yet challenging for AI systems (15% for GPT-4 with plugins), rather than pursuing tasks ever more difficult for humans.** This contrasts with the trend of LLMs outperforming humans on professional skills like law or chemistry. The benchmark posits that AGI requires AI to match average human robustness on such real-world questions involving reasoning, tool use, and multimodality. ([Official GAIA publication page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants); [arXiv:2311.12983](https://arxiv.org/abs/2311.12983))

### gaia-philosophy-contrast / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 22.5s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs (15% for GPT-4 with plugins), departing from the prevailing trend of designing tasks ever more difficult for humans.** It contrasts this approach with benchmarks like MMLU or GSM8K, where LLMs already outperform humans on professional skills such as law or chemistry, noting that harder-for-humans tasks are not necessarily harder for current systems and complicate reliable evaluation. Instead, GAIA emphasizes fundamental abilities like multi-step reasoning, web browsing, multi-modality, and tool use on practical tasks whose solutions are easy to validate but require robustness comparable to the average human—positing this as key to AGI progress. See the abstract and introduction at [arXiv:2311.12983](https://arxiv.org/abs/2311.12983) (and PDF).

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 10.1s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA's philosophy deliberately departs from the prevailing trend of targeting tasks that are ever more difficult for humans. Instead, it focuses on real-world questions that are conceptually simple for humans—where human respondents score 92%—yet challenging for advanced AI, such as GPT-4 with plugins at 15%. The authors posit that the advent of AGI hinges on a system's capability to exhibit similar robustness to the average human on such questions, contrasting with benchmarks where LLMs already outperform humans on professional skills like law or chemistry [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants) [arXiv:2311.12983](https://arxiv.org/abs/2311.12983).

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 85/100 (fail), duration 14.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; no GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> GAIA's philosophy deliberately inverts the prevailing benchmark trend: rather than targeting tasks that are increasingly difficult for humans (such as professional-level law or chemistry exams where LLMs already outperform people), GAIA focuses on questions that are **conceptually simple for humans yet challenging for AI**—the kind of everyday reasoning and tool-use tasks where humans still score 92% while GPT-4 with plugins manages only 15%. [The authors posit](https://arxiv.org/abs/2311.12983) that Artificial General Intelligence hinges on matching human robustness on these accessible, real-world problems, not on surpassing human expertise in specialized domains.

### gaia-philosophy-contrast / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 30/100 (fail), duration 16.8s
Facts: no GAIA questions are conceptually simple for humans; no GAIA questions are challenging for advanced AIs; no GAIA departs from targeting tasks ever more difficult for humans; no GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> (empty)

### gaia-philosophy-contrast / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 5.0s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA’s philosophy explicitly departs from benchmarks targeting tasks that are ever more difficult for humans; instead, it focuses on **real-world questions that are conceptually simple for humans yet remain challenging for advanced AIs**, emphasizing robustness akin to the average human’s capabilities as a path toward AGI://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants#L11-L21.

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 13.7s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's benchmark philosophy targets real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for advanced AIs like GPT-4 with plugins (15% accuracy), emphasizing robustness in reasoning, multi-modality, web browsing, and tool use.** [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) [GAIA: A Benchmark for General AI Assistants (arXiv PDF)](https://arxiv.org/pdf/2311.12983) **This departs from the current trend of designing benchmarks with tasks ever more difficult for humans, such as intricate STEM/law assessments (e.g., MMLU, GSM8k), which LLMs increasingly solve despite human struggles.** [GAIA: A Benchmark for General AI Assistants (arXiv PDF)](https://arxiv.org/pdf/2311.12983) **GAIA posits AGI requires matching average human robustness on su...

### gaia-philosophy-contrast / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 15.6s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: no

Answer excerpt:

> **GAIA's philosophy departs from the current trend in AI benchmarks that target tasks ever more difficult for humans**, such as intricate educational assessments in STEM or law where LLMs often outperform humans (e.g., on [MMLU](https://arxiv.org/abs/2311.12983) or [GSM8k](https://arxiv.org/abs/2311.12983)).[^1][^2][^3] **Instead, GAIA proposes real-world questions that are conceptually simple for humans** (92% human accuracy) yet challenging for advanced AIs (15% for GPT-4 with plugins), positing that AGI requires similar robustness to the average human on such tasks.[^1][^2][^11]

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-non-reasoning
Score: 85/100 (fail), duration 8.7s
Facts: no GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA's philosophy targets conceptually simple real-world questions that are easy for humans (92% accuracy) yet challenging for advanced AIs (15% for GPT-4 with plugins), requiring reasoning, multi-modality, web browsing, and tool use.** **It explicitly departs from the current trend of AI benchmarks that target tasks ever more difficult for humans (e.g., intricate STEM/Law assessments or writing coherent books), because such tasks are not necessarily difficult for recent LLMs like those nearing saturation on MMLU or GSM8k.** **Instead, GAIA posits that AGI requires systems exhibiting similar robustness to the average human on these questions.** [Official ICLR publication page](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html) | [arXiv paper](https://arxiv.org/pdf/2311.12983)

### gaia-philosophy-contrast / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 20.8s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> **GAIA differs by targeting real-world questions that are conceptually simple for humans (92% accuracy) yet challenging for AIs (15% for GPT-4 with plugins).** - This reverses the trend of benchmarks that seek tasks *ever more difficult for humans* (e.g. intricate STEM, law, or chemistry problems where LLMs now outperform humans). - The paper states: “GAIA’s philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans. We posit that the advent of Artificial General Intelligence (AGI) hinges on a system’s capability to exhibit similar robustness as the average human does on such questions.” ([Official GAIA ICLR publication page](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25ae35b5b1738d80f1f03a8713e405ec-Abstract-Conference.html); [arXiv version](https://arxiv.org/abs/2311.12983))

### gaia-philosophy-contrast / exa / xai/grok-4.3
Score: 77/100 (fail), duration 34.8s
Facts: yes GAIA questions are conceptually simple for humans; no GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> **GAIA's philosophy departs from benchmarks that target tasks ever more difficult for humans** by instead prioritizing real-world questions that are conceptually simple for humans yet require fundamental AI abilities such as reasoning, multi-modality handling, web browsing, and tool-use proficiency. The official ICLR publication page states: "GAIA’s philosophy departs from the current trend in AI benchmarks suggesting to target tasks that are ever more difficult for humans. We posit that the advent of Artificial General Intelligence (AGI) hinges on a system’s capability to exhibit similar robustness as the average human does on such questions." This yields a large performance gap—human respondents achieve 92% while GPT-4 with plugins scores only 15%—contrasting with trends where LLMs already surpass humans on expert domains like law or chemistry. The benchmark comprises 466 such questio...

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 15.9s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> - GAIA’s philosophy deliberately departs from the prevailing trend of targeting tasks that are ever more difficult for humans. Instead, it focuses on real-world questions that are conceptually simple for humans yet challenging for AI systems, with human respondents scoring 92% versus 15% for GPT-4 with plugins. The authors argue that the advent of AGI hinges on a system exhibiting similar robustness to the average human on such fundamental questions, not on outperforming humans on specialized professional skills like law or chemistry. [GAIA: a benchmark for general AI assistants | Research - AI at Meta](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/)

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 85/100 (fail), duration 26.2s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; no GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: yes; fetch: yes

Answer excerpt:

> Unlike traditional benchmarks that target tasks requiring ever-greater human expertise—such as professional skills in law or chemistry, where LLMs now often outperform humans—GAIA focuses on real-world questions that are **conceptually simple for humans** (scoring 92%) yet challenging for advanced AI systems like GPT-4 with plugins (scoring only 15%). The authors posit that achieving Artificial General Intelligence depends not on mastering increasingly difficult expert tasks, but on exhibiting [robustness comparable to the average human](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) on everyday questions requiring reasoning, multi-modality handling, and tool use.

### gaia-philosophy-contrast / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 5.4s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: no

Answer excerpt:

> GAIA positions human-like robustness on everyday tasks as a milestone for AGI, intentionally designing questions that are conceptually simple for humans but extremely challenging for LLM-based agents, in contrast to benchmarks that push models beyond human capabilities. The benchmark’s guiding philosophy, documented in the GAIA paper and the related Meta research page, is "to target tasks that demonstrate an AI system has similar robustness as the average human" even when the tasks are straightforward in human terms. This stands apart from contemporary benchmarks that seek tasks ever more difficult for humans (for example in law, chemistry, or scientific domains) or that explore “ever more difficult for humans” environments without focusing on human-level robustness in ordinary scenarios. By focusing on tasks like bread‑to‑toilet‑paper “shopping” and everyday problems—where humans are r...

### gaia-philosophy-contrast / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 6.9s
Facts: yes GAIA questions are conceptually simple for humans; yes GAIA questions are challenging for advanced AIs; yes GAIA departs from targeting tasks ever more difficult for humans; yes GAIA emphasizes robustness similar to average human capability
Sources: yes ai.meta.com; citation: no; fetch: yes

Answer excerpt:

> GAIA’s benchmark philosophy is to evaluate systems on real-world questions that are conceptually simple for humans yet remain challenging for advanced AIs, explicitly departing from the trend of targeting tasks ever more difficult for humans. The authors report human respondents achieve 92% accuracy versus 15% for GPT-4 with plugins, highlighting the disparity between human robustness and current AI brittleness on such tasks.

### flue-start-commands / parallel / xai/grok-4-1-fast-non-reasoning
Score: 59/100 (fail), duration 9.7s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev` is preferred as a long-running watch-mode dev server on port 3583 (override with `--port`), with `--target node` or `--target cloudflare` (requires `wrangler`).** [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) **`flue run` supports `--target node` for one-shot production-style builds and invocations (e.g., `flue run hello --target node --id test-1`).** [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)

### flue-start-commands / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 18.4s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node --env .env` is the preferred and fastest option**, building the workspace, loading the env file, starting a server on port 3583, and enabling hot reload on changes ([Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)); **`flue dev --target cloudflare --env .env`** is also supported, using Wrangler for a Workers dev server on the same port ([Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)). **`flue run` supports `--target node`** for one-shot, production-style agent invocations without a persistent server, e.g., `flue run <agent> --target node --id <id> --env .env` ([Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md); [Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md); [AGENTS...

### flue-start-commands / parallel / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 12.9s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is preferred** (with `--env .env` for keys); it provides a long-running watch-mode dev server with rebuilds/reloads on edits. **`flue run` supports `--target node`** for one-shot, production-style execution (build + invoke once then exit), ideal for CI or scripted use. It also supports `--target cloudflare` for `flue dev` (requires `wrangler`). [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) • [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-start-commands / parallel / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 23.9s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` is preferred**; it provides a fast watch-mode dev server with live reloads on edits. **`flue run` supports `--target node`** for one-shot, production-style execution (build + invoke once). It also accepts `--target cloudflare` for `flue dev` (with `wrangler`), but Node is recommended for local work. See: [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) ("For local development, `flue dev --target node --env .env` is the fastest path") and [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md) (CLI command details and examples).

### flue-start-commands / parallel / xai/grok-4.3
Score: 59/100 (fail), duration 27.1s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - For local development, `flue dev --target node` (e.g. `npx flue dev --target node --env .env`) is the fastest/preferred path as it starts a watch-mode server on port 3583 with auto-reloads. - `flue dev` also supports `--target cloudflare` (requires wrangler). - `flue run` supports only `--target node` for one-shot production-style invocations (builds a temp server, runs the agent, then exits). See [AGENTS.md](https://raw.githubusercontent.com/withastro/flue/main/AGENTS.md) and [deploy-node.md](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-node.md).

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 51/100 (fail), duration 40.6s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For local development, `flue dev` targets **`node`** (described as the fastest path) and **`cloudflare`**, depending on your deploy target. `flue run` only supports **`--target node`**.

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 29.3s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> Now I have all the information needed to answer the question. Let me summarize the findings: - For local development, `flue dev` supports two targets: `node` and `cloudflare` — `flue dev --target node` runs a Node.js dev server, while `flue dev --target cloudflare` starts a Cloudflare Workers dev server via wrangler [source](https://github.com/withastro/flue/blob/main/packages/cli/README.md). - `flue run` only supports `--target node` because it starts the generated server in Node.js; Cloudflare builds use Worker-only runtime modules, so `flue dev --target cloudflare` is used instead for local testing of Cloudflare targets [source](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md).

### flue-start-commands / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 51/100 (fail), duration 16.2s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Based on the Flue documentation: - For local development, `flue dev --target node --env .env` is the fastest path—it builds your workspace, loads environment variables, starts a server on port 3583 (or `--port`), and watches for changes with auto-reload. It also supports `--target cloudflare`, but you must have `wrangler` installed for that target. [source] - The `flue run` command supports `--target node` for a one-shot, production-style run: build, invoke an agent once (via SSE), stream output, print the result, and exit—useful for CI or scripted invocations. [source] - `flue dev` is described as a long-running watch-mode dev server where edits trigger rebuilds + reloads, and `flue run` as one-shot, production-style. [source] Sources: - Deploy Agents on Node.js guide for `flue dev --target node --env .env` and `flue run --target node` syntax/port. (https://raw.githubusercontent.com/wi...

### flue-start-commands / parallel / mistral/mistral-small-latest
Score: 51/100 (fail), duration 11.2s
Facts: yes Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Preferred local dev target for flue dev is node; flue run supports only node. Use npx flue dev --target node --env .env for local development and npx flue run <agent> --target node --env .env for one-shot execution.

### flue-start-commands / exa / xai/grok-4-1-fast-non-reasoning
Score: 51/100 (fail), duration 13.2s
Facts: no Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev` is preferred**, supporting `--target node` (fastest path with auto-reload on port 3583) or `--target cloudflare` (Workers dev server via wrangler on port 3583; requires `wrangler` dev dep) with `--env` for secrets.[^1][^2][^3] **`flue run` supports only `--target node`**, as it starts the generated server in Node.js; Cloudflare uses Worker-only modules incompatible with `flue run` (use `flue dev --target cloudflare` instead).[^1][^2][^11]

### flue-start-commands / exa / xai/grok-4-1-fast
Score: 71/100 (fail), duration 17.8s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` and `flue dev --target cloudflare` are preferred.** These provide watch-mode dev servers on port 3583 (Node.js or Cloudflare Workers via wrangler), rebuilding and reloading on file changes; Node is described as the "fastest path," while Cloudflare suits Workers testing. **`flue run` supports only `--target node`.** It builds and invokes agents once (production-style, no watcher), as Cloudflare uses incompatible Worker runtime modules.

### flue-start-commands / exa / xai/grok-4.20-0309-non-reasoning
Score: 79/100 (fail), duration 7.8s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (fastest, with watch mode on port 3583) and `flue dev --target cloudflare` (via wrangler) are preferred.** **`flue run` supports only `--target node`** (it builds and runs the Node.js artifact once; Cloudflare uses `flue dev --target cloudflare` for local testing). These targets are documented across the official README, deploy guides, and CLI output. [Flue README on GitHub](https://github.com/withastro/flue/blob/main/README.md) and [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md). The fetched start.md links to the same deploy guides for Node.js and Cloudflare setups.

### flue-start-commands / exa / xai/grok-4.20-0309-reasoning
Score: 79/100 (fail), duration 17.7s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (fastest, with watcher) and `flue dev --target cloudflare` (via wrangler dev server on port 3583) are both preferred depending on target.** **`flue run` supports only `--target node`** (Cloudflare builds use Worker-only modules; use `flue dev --target cloudflare` for local Cloudflare testing). See: [Flue README](https://github.com/withastro/flue/blob/main/README.md), [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). (Fetched https://flueframework.com/start.md routes to these same deploy guides.)

### flue-start-commands / exa / xai/grok-4.3
Score: 92/100 (fail), duration 18.0s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For local development, `flue dev --target node` (with `--env .env`) is the fastest and preferred target for Node.js workflows, while `flue dev --target cloudflare` is used when targeting Cloudflare Workers.** `flue run` only supports `--target node` (it builds and invokes the Node.js server artifact directly, without a watcher). See the official Node.js deploy guide and Cloudflare deploy guide for the exact commands and port-3583 behavior.

### flue-start-commands / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 59/100 (fail), duration 13.9s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> For local development, `flue dev` supports both `--target node` (the fastest path for Node.js) and `--target cloudflare` (for Cloudflare Workers via wrangler). In contrast, `flue run` only supports `--target node` because it starts the generated server in Node.js. ([`docs/deploy-node.md`](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [`docs/deploy-cloudflare.md`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), [`README.md`](https://github.com/withastro/flue/blob/main/README.md))

### flue-start-commands / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 51/100 (fail), duration 13.2s
Facts: no Local development prefers flue dev --target node; no Local development prefers flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Based on the search results and official documentation: - For local development, `flue dev` supports two preferred targets: `--target node` (Node.js dev server) and `--target cloudflare` (Cloudflare Workers via wrangler). Both default to port `3583` and support hot-reloading on file changes. - `flue run` **only supports `--target node`** because it starts the generated server in Node.js and cannot target Cloudflare Workers.

### flue-start-commands / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 71/100 (fail), duration 20.0s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Based on the official Flue documentation I just fetched: **Local development targets:** - Use `flue dev --target node --env .env` for Node.js — the fastest local path with a watch mode server on port 3583 that reloads on file changes. - Use `flue dev --target cloudflare --env .env` for Cloudflare Workers — builds your workspace and launches a Cloudflare dev server via Wrangler on port 3583. **`flue run` target support:** - `flue run` is Node-only; it uses `--target node`, accepts `--env .env` for environment variables, and is designed for one-shot invocations (such as running agents from the CLI in CI) [Node.js guide][1], [Cloudflare Workers guide][2].

### flue-start-commands / exa / mistral/mistral-small-latest
Score: 79/100 (fail), duration 9.8s
Facts: yes Local development prefers flue dev --target node; yes Local development prefers flue dev --target cloudflare; no flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - For local development, use `flue dev --target node` for Node.js and `flue dev --target cloudflare` for Cloudflare Workers [[1](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)][[2](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)]. - `flue run` supports only the `node` target [[2](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)].

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 9.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported; `flue run` only supports `--target node` because it starts the generated server in Node.js, while Cloudflare builds use Worker-only runtime modules.[^4]** **For local Cloudflare development, use `flue dev --target cloudflare`, which requires `wrangler` as a peer dependency (`npm install --save-dev wrangler`) and starts a Cloudflare Workers dev server (via wrangler) on port 3583.[^1][^2][^4]** **`flue run` supports `--target node`.[^1][^2][^3]**

### flue-cloudflare-negative / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 16.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported**; [`flue run` starts the generated server in Node.js, so it only supports `--target node`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). **For local Cloudflare development**, use [`flue dev --target cloudflare`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), which requires [`wrangler` as a peer dependency (`npm install --save-dev wrangler`)](https://github.com/withastro/flue) and starts a Cloudflare Workers dev server on port 3583. **`flue run` supports `--target node`** for building and running agents locally or in CI, as shown in examples like `flue run hello --target node --id test-1` [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.7s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` only supports `--target node` (it builds the artifact and runs the generated server in Node.js). For local Cloudflare development, use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency; it starts a Cloudflare Workers dev server via wrangler on port 3583 with hot reloading). See: [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) ("`flue run` starts the generated server in Node.js, so it only supports `--target node`. Cloudflare builds use Worker-only runtime modules — `flue dev --target cloudflare` is the equivalent for testing them locally.") and [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-cloudflare-negative / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 19.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` only supports `--target node` (it starts the generated server in Node.js). For local Cloudflare development use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency; it starts a Cloudflare Workers dev server via wrangler on port 3583). See [Flue deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and the fetched [flueframework.com/start.md](https://flueframework.com/start.md).

### flue-cloudflare-negative / parallel / xai/grok-4.3
Score: 100/100 (pass), duration 17.6s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` only supports `--target node` because it starts the generated server in Node.js; Cloudflare builds use Worker-only runtime modules. - For local Cloudflare development and testing, use `flue dev --target cloudflare` (requires `wrangler` as a peer dependency). See the official docs: [flue/docs/deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and [flue/AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md).

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 18.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is not supported. `flue run` only supports `--target node` because it starts the generated server in Node.js. For local Cloudflare development, use [`flue dev --target cloudflare`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) instead, which runs a Cloudflare Workers dev server via `wrangler` on port `3583`. ([Source](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), [Source](https://github.com/withastro/flue/blob/main/AGENTS.md))

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 24.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is **not supported**. According to the official Flue documentation, `flue run` starts the generated server in Node.js and **only supports `--target node`**. For local Cloudflare development, use `flue dev --target cloudflare` instead, which starts a Cloudflare Workers dev server via wrangler on port 3583 ([Flue Deploy Cloudflare Guide](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md)).

### flue-cloudflare-negative / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 20.5s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is not supported support; `flue run` only supports `--target node` and runs the server in Node.js. For local Cloudflare development, use `flue dev --target cloudflare` (which builds the workspace, boots a Workers dev server via wrangler on port 3583, and watches for changes) [source: deploy-cloudflare.md].

### flue-cloudflare-negative / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 7.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - `flue run --target cloudflare` is not supported; only `--target node` is supported for `flue run` [Flue docs: deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) [Flue README](https://github.com/withastro/flue/blob/main/README.md). - For local Cloudflare development, use `flue dev --target cloudflare` [Flue docs: deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md). - Supported targets for `flue run` are `--target node` only [Flue docs: deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md).

### flue-cloudflare-negative / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 19.2s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** [`flue run` starts the generated server in Node.js, so it only supports `--target node`. Cloudflare builds use Worker-only runtime modules — `flue dev --target cloudflare` is the equivalent for testing them locally.](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md) - For local Cloudflare development, use `npx flue dev --target cloudflare --env .env` (requires `wrangler` as dev dependency; runs dev server on port 3583 via wrangler). [https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md](https://raw.githubusercontent.com/withastro/flue/main/docs/deploy-cloudflare.md) - `flue run` supports `--target node` (e.g., `flue run hello --target node --id test-1`). [https://github.com/withastro/flue/blob/main/AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)

### flue-cloudflare-negative / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 20.1s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No**, `flue run --target cloudflare` is **not supported**; `flue run` only supports [`--target node`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) as it starts a generated Node.js server.[^1] - For **local Cloudflare development**, use [`flue dev --target cloudflare`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) (requires `wrangler` dev dep), which builds, starts a Workers dev server (via wrangler) on port 3583, and watches for changes.[^1][^11] - [`flue run` targets](https://github.com/withastro/flue/blob/main/README.md): only `node` (one-shot agent invocations or CI).[^11]

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.6s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** `flue run` starts the generated server in Node.js, so it only supports `--target node`. For local Cloudflare development, use `flue dev --target cloudflare` (which starts a Cloudflare Workers dev server via wrangler on port 3583 with watch mode). See: [Flue Cloudflare deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) (fetched from https://flueframework.com/start.md references) and [Flue README](https://github.com/withastro/flue/blob/main/README.md).

### flue-cloudflare-negative / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 12.8s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No**, `flue run --target cloudflare` is not supported. - Use `flue dev --target cloudflare` for local Cloudflare development (starts a wrangler-based dev server on port 3583 with watch mode). - `flue run` supports only `--target node` (it builds and runs the Node.js server artifact once). See: [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md), [README.md](https://github.com/withastro/flue/blob/main/README.md), and [flueframework.com/start.md](https://flueframework.com/start.md) (which directs to the Cloudflare and Node deploy guides).

### flue-cloudflare-negative / exa / xai/grok-4.3
Score: 100/100 (pass), duration 10.5s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **No, `flue run --target cloudflare` is not supported.** - `flue run` only supports `--target node` because it starts a Node.js server from the generated artifact. - For local Cloudflare development, use `flue dev --target cloudflare` (which runs a Wrangler-based dev server on port 3583). - `flue build --target cloudflare` produces the deployable Workers artifact; `flue run` examples are always shown with `--target node`. See: [withastro/flue docs/deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) and [README.md](https://github.com/withastro/flue/blob/main/README.md).

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 17.7s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is not supported. For local Cloudflare development, use `flue dev --target cloudflare`, which starts a Cloudflare Workers dev server via wrangler on port `3583`. `flue run` only supports `--target node` because it starts the generated server in Node.js, whereas Cloudflare builds rely on Worker-only runtime modules. ([Flue Cloudflare deploy docs](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md))

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 22.4s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> No, `flue run --target cloudflare` is **not supported** — `flue run` only supports `--target node` ([raw deploy-cloudflare.md from withastro/flue](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md)). For local Cloudflare development, use `npx flue dev --target cloudflare`, which builds your workspace and starts a Cloudflare Workers dev server via wrangler on port 3583 ([raw deploy-cloudflare.md from withastro/flue](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md)).

### flue-cloudflare-negative / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 100/100 (pass), duration 15.3s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> `flue run --target cloudflare` is not supported; `flue run` only supports `--target node` as it starts the generated server in Node.js. For local Cloudflare development, use `flue dev --target cloudflare`, which builds your workspace and runs a Cloudflare Workers dev server via wrangler on port 3583 with watch mode. [Cloudflare Deploy Guide](https://raw.githubusercontent.com/withastro/flue/refs/heads/main/docs/deploy-cloudflare.md)

### flue-cloudflare-negative / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 5.9s
Facts: yes flue run --target cloudflare is not supported; yes Local Cloudflare development should use flue dev --target cloudflare; yes flue run only supports --target node
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> `flue run --target cloudflare` is not supported. Use `flue dev --target cloudflare` for local Cloudflare Workers development. Supported targets for `flue run` are only `--target node` per official docs and examples. [`flue run` only supports `--target node`](https://github.com/withastro/flue/blob/main/README.md) [Use `flue dev --target cloudflare` for local Cloudflare Workers development](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-model-selection / parallel / xai/grok-4-1-fast-non-reasoning
Score: 92/100 (fail), duration 7.3s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6`.[https://flueframework.com/start.md] **For a different requested model, check `https://flueframework.com/models.json` for the best model ID.** [https://flueframework.com/start.md] **If unavailable, ask before substituting another model and don't continue without a model ID.** [https://flueframework.com/start.md]

### flue-model-selection / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 13.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`.[Flue start guide](https://flueframework.com/start.md) **For a different requested model,** check the list at [`https://flueframework.com/models.json`](https://flueframework.com/models.json).[Flue start guide](https://flueframework.com/start.md) **If unavailable,** ask before substituting another model and do not continue without a valid model ID.[Flue start guide](https://flueframework.com/start.md)

### flue-model-selection / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 7.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. [Flue start guide](https://flueframework.com/start.md) **A different requested model should be checked in https://flueframework.com/models.json.** **If the requested model is unavailable, ask before substituting another model** (and do not continue until you have a model ID). [Flue start guide](https://flueframework.com/start.md) (The initial search sources confirm the model names but do not contain the exact start.md text; the primary guide was fetched directly.)

### flue-model-selection / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 13.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **Different requested models should be checked in https://flueframework.com/models.json.** **If the requested model is unavailable, ask before substituting another model (and do not continue until a valid model ID is confirmed).** ([Flue start guide](https://flueframework.com/start.md))

### flue-model-selection / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 15.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **Flue start guide** (https://flueframework.com/start.md) suggests these exact model IDs: - `anthropic/claude-sonnet-4-6` - `anthropic/claude-opus-4-7` - `openai/gpt-5.5` - `openrouter/moonshotai/kimi-k2.6` For any different provider or model, check the list at https://flueframework.com/models.json. If the requested model is unavailable, ask before substituting another model and do not continue until an exact model ID is confirmed.

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 14.9s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. If the user wants a different provider or model, check `https://flueframework.com/models.json` for the best model ID. If the requested model is unavailable, the guide instructs to **ask before substituting another model** and not continue until an exact model ID is confirmed. [Skill: Create a New Flue Agent](https://flueframework.com/start.md)

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 14.1s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. If the user wants a different model, check `https://flueframework.com/models.json` for the best model ID. If the requested model is unavailable, you must ask before substituting another model and should not continue until you have a model ID. [Flue Start Guide](https://flueframework.com/start.md)

### flue-model-selection / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 9.6s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Based on Flue's start guide: - Suggested model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, `openrouter/moonshotai/kimi-k2.6` - Where to check for other models: https://flueframework.com/models.json - If requested model unavailable: ask before substituting another model; don't continue until you have a model ID.

### flue-model-selection / parallel / mistral/mistral-small-latest
Score: 100/100 (pass), duration 6.0s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: - `anthropic/claude-sonnet-4-6` - `anthropic/claude-opus-4-7` - `openai/gpt-5.5` - `openrouter/moonshotai/kimi-k2.6` For a different requested model, check the official list at [flueframework.com/models.json](https://flueframework.com/models.json). If the requested model is unavailable, ask the user before substituting another model.

### flue-model-selection / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 10.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** - `anthropic/claude-sonnet-4-6` (latest Sonnet) - `anthropic/claude-opus-4-7` (latest Opus) - `openai/gpt-5.5` (GPT-5.5) - `openrouter/moonshotai/kimi-k2.6` (latest Kimi) **For a different requested model, check [`https://flueframework.com/models.json`](https://flueframework.com/models.json) to get the best model ID.** **If the requested model is unavailable, ask before substituting another model (don't continue without a valid model ID).** [Flue start guide](https://flueframework.com/start.md)

### flue-model-selection / exa / xai/grok-4-1-fast
Score: 92/100 (fail), duration 22.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6` (latest Sonnet), `anthropic/claude-opus-4-7` (latest Opus), `openai/gpt-5.5` (GPT-5.5), `openrouter/moonshotai/kimi-k2.6` (latest Kimi).[^https://flueframework.com/start.md] **Different requested models** should be checked against [`https://flueframework.com/models.json`](Flue models.json) for the best ID.[^https://flueframework.com/start.md] **If unavailable,** ask before substituting; do not continue without a valid model ID, as Flue requires an explicit `init({ model: '...' })` and does not auto-select.[^https://flueframework.com/start.md][^https://github.com/withastro/flue/blob/main/README.md]

### flue-model-selection / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.7s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. [Flue start guide](https://flueframework.com/start.md) **A different requested model should be checked in `https://flueframework.com/models.json`.** [Flue start guide](https://flueframework.com/start.md) **If the requested model is unavailable, ask before substituting another model** (and do not continue until you have a model ID). [Flue start guide](https://flueframework.com/start.md) These instructions appear in the "Discover Requirements" section for scaffolding new agents with `init({ model: '<exact model id>' })`.

### flue-model-selection / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 18.5s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **The Flue start guide suggests these exact model IDs:** `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6`. **Check a different requested model in** `https://flueframework.com/models.json`. **If the requested model is unavailable, ask before substituting** (and do not continue until you have a confirmed model ID). These rules appear directly in the [Flue start guide (create-new-agent skill)](https://flueframework.com/start.md), which also references the official [README](https://github.com/withastro/flue/blob/main/README.md) and deploy docs that demonstrate the same model strings in `init({ model: '...' })` calls.

### flue-model-selection / exa / xai/grok-4.3
Score: 92/100 (fail), duration 12.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> The Flue start guide at https://flueframework.com/start.md suggests these exact model IDs for `init({ model: "..." })`: - `anthropic/claude-sonnet-4-6` - `anthropic/claude-opus-4-7` - `openai/gpt-5.5` - `openrouter/moonshotai/kimi-k2.6` Check any other requested provider/model against the list in https://flueframework.com/models.json. If the requested model is unavailable, ask before substituting and do not proceed until a valid model ID is confirmed.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 13.2s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6` [Skill: Create a New Flue Agent](https://flueframework.com/start.md). If the user wants a different model, it should be checked against the list at `https://flueframework.com/models.json` [Skill: Create a New Flue Agent](https://flueframework.com/start.md). If the requested model is unavailable, the guide says to ask before substituting another model and not to continue until a valid model ID is confirmed [Skill: Create a New Flue Agent](https://flueframework.com/start.md).

### flue-model-selection / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 12.1s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: `anthropic/claude-sonnet-4-6`, `anthropic/claude-opus-4-7`, `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6` [[fetch result](https://flueframework.com/start.md)]. If the user wants a different model, they should check the list at `https://flueframework.com/models.json`. If the requested model is unavailable, the guide instructs to **ask before substituting** another model and to not continue until a valid model ID is established.

### flue-model-selection / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 14.1s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> Based on the Flue start guide, the suggested exact model IDs are `anthropic/claude-sonnet-4-6` (latest Sonnet), `anthropic/claude-opus-4-7` (latest Opus), `openai/gpt-5.5`, and `openrouter/moonshotai/kimi-k2.6` (latest Kimi. If the user wants a different provider or model, use `flueframework.com/models.json` to get the best model ID. Their requested model is documented to "ask before substituting another model. Don't continue until you have a model ID."

### flue-model-selection / exa / mistral/mistral-small-latest
Score: 100/100 (pass), duration 6.8s
Facts: yes Suggested model includes anthropic/claude-sonnet-4-6; yes Suggested model includes anthropic/claude-opus-4-7; yes Suggested model includes openai/gpt-5.5; yes Suggested model includes openrouter/moonshotai/kimi-k2.6; yes Different models should be checked against models.json; yes Unavailable requested models should not be substituted without asking
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> The Flue start guide suggests these exact model IDs: - `anthropic/claude-sonnet-4-6` - `anthropic/claude-opus-4-7` - `openai/gpt-5.5` - `openrouter/moonshotai/kimi-k2.6` For a different requested model, check the list at [https://flueframework.com/models.json](https://flueframework.com/models.json). If the requested model is unavailable, ask the user before substituting another model.

### flue-layout-rules / parallel / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 24.1s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout: `./agents/` and `./roles/`.** **For an existing non-empty directory, use the `.flue` layout: `./.flue/agents/` and `./.flue/roles/`.** Flue prioritizes `./.flue/` if it exists, otherwise falls back to the project root (`./`). This convention avoids clashing with existing files in non-empty directories, as specified in the official start skill and deploy docs. [Flue start.md](https://flueframework.com/start.md), [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-layout-rules / parallel / xai/grok-4-1-fast
Score: 100/100 (pass), duration 22.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory**, use the **root layout** with [`./agents/` and `./roles/` at the project root](https://flueframework.com/start.md). **For an existing non-empty directory**, use the **`.flue` layout** with [`./.flue/agents/` and `./.flue/roles/`](https://flueframework.com/start.md). Flue prioritizes `./.flue/` if it exists, otherwise falls back to root layout ([`deploy-node.md`](https://github.com/withastro/flue/blob/main/docs/deploy-node.md), [`deploy-cloudflare.md`](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)).

### flue-layout-rules / parallel / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 9.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue prefers `./.flue/` if it exists; otherwise it falls back to the project root. This matches the exact rules in the official start guide skill. [Flueframework start.md](https://flueframework.com/start.md) The same distinction appears in the deploy guides. [Deploy to Node.js](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) [Deploy to Cloudflare](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)

### flue-layout-rules / parallel / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 16.4s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue prefers the hidden `.flue/` directory when files already exist in the target to avoid polluting the project root; it falls back to root layout otherwise. (See [Flue start.md](https://flueframework.com/start.md) project layout rules and [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).)

### flue-layout-rules / parallel / xai/grok-4.3
Score: 92/100 (fail), duration 9.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> **For a new or empty target directory**, use the root layout (`./agents/` and `./roles/`). **For an existing non-empty directory**, use the `.flue` layout (`./.flue/agents/` and `./.flue/roles/`). Flue selects the workspace automatically: it prefers `./.flue/` if present; otherwise it falls back to the project root.

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 14.6s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> For a new or empty target directory, use the **root layout** (`./agents/` and `./roles/`). For an existing directory that already has files, use the **`.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). This is codified in the Flue agent creation skill, which infers layout based on whether the target directory is empty or non-empty. [Flueframework.com start.md skill](https://flueframework.com/start.md) [Flue Node.js deploy guide](https://github.com/withastro/flue/blob/main/docs/deploy-node.md)

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 10.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> According to the [Flue start.md](https://flueframework.com/start.md) skill guide: - For a **new or empty target directory**, use the **root layout**: create agents in `./agents/` and roles in `./roles/`. - For an **existing non-empty directory**, use the **`.flue` layout**: create agents in `./.flue/agents/` and roles in `./.flue/roles/`.

### flue-layout-rules / parallel / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 87/100 (fail), duration 6.9s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: no

Answer excerpt:

> - Initialize in a new or empty target directory by placing `agents/` and `roles/` directly at the project root (`./`), so Flue finds the workspace there. - In an existing non‑empty directory, use the `.flue/` layout (agents under `./.flue/agents/`, roles under `./.flue/roles/`) when that folder exists; otherwise, fall back to the root workspace. --- - Flue looks for agents in `./agents/` and roles in `./roles/` at the project root, or in `./.flue/agents/` and `./.flue/roles/` when the `.flue/` folder is present; if `.flue/` exists it is used, otherwise the root is used. - The CLI’s `--workspace` option can also point to the directory containing `agents/` and `roles/`, and if omitted it first checks for `./.flue/` then falls back to `./`.

### flue-layout-rules / parallel / mistral/mistral-small-latest
Score: 92/100 (fail), duration 8.2s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> - For a new or empty target directory, use the root layout: place agents in ./agents/ and roles in ./roles/ - For an existing non-empty directory, use the .flue layout: place agents in ./.flue/agents/ and roles in ./.flue/roles/ - Flue selects the workspace by checking for an existing .flue folder; if absent, it uses the project root

### flue-layout-rules / exa / xai/grok-4-1-fast-non-reasoning
Score: 100/100 (pass), duration 9.7s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout with `agents/` and `roles/` directly at the project root (`./agents/`, `./roles/`).** **For an existing non-empty directory, use the `.flue/` layout with `agents/` and `roles/` nested inside (`./.flue/agents/`, `./.flue/roles/`).** Flue CLI detects workspaces by prioritizing `./.flue/` if it exists, otherwise falling back to the project root (`./`), but creation skills infer layout based on target directory state to avoid disrupting existing files. [Flue start.md skill](https://flueframework.com/start.md) [Deploy Node.js docs](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) [CLI AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)

### flue-layout-rules / exa / xai/grok-4-1-fast
Score: 100/100 (pass), duration 13.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout with `./agents/` and `./roles/` directly under the target directory.** **For an existing non-empty directory, use the `.flue` layout with `./.flue/agents/` and `./.flue/roles/` to avoid conflicts with existing files.** Flue automatically detects the workspace: it prefers `./.flue/` if present, otherwise falls back to the project root (`./`). [Flue start.md skill](https://flueframework.com/start.md); [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md); [AGENTS.md](https://github.com/withastro/flue/blob/main/AGENTS.md)

### flue-layout-rules / exa / xai/grok-4.20-0309-non-reasoning
Score: 100/100 (pass), duration 10.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue automatically selects based on the target: it creates and uses root layout for new/empty dirs; it prefers `.flue/` when files already exist to avoid polluting the root. Examples in docs use the `.flue/` layout (drop the prefix for root preference). See the official start guide: [https://flueframework.com/start.md](https://flueframework.com/start.md) (and mirrored in [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md)).

### flue-layout-rules / exa / xai/grok-4.20-0309-reasoning
Score: 100/100 (pass), duration 13.3s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). This matches the explicit project layout rules in the starter skill: "Directory does not exist: create it and use the root layout... Directory exists and is empty: use the root layout... Directory exists and already has files: use the `.flue` layout." It is summarized as "Workspace layout: `root` if the target directory is new or empty, otherwise `.flue`." ([Flue start.md](https://flueframework.com/start.md)) The same logic appears in the deploy guides, which note that Flue prefers `./.flue/` if it exists and otherwise falls back to project root. ([deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md))

### flue-layout-rules / exa / xai/grok-4.3
Score: 100/100 (pass), duration 16.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> **For a new or empty target directory, use the root layout** (`./agents/` and `./roles/`). **For an existing non-empty directory, use the `.flue` layout** (`./.flue/agents/` and `./.flue/roles/`). Flue automatically prefers `./.flue/` if it exists, otherwise falls back to the project root; the start guide explicitly recommends creating the hidden layout only when the directory already contains files to avoid polluting an existing project. See the exact rules in [flueframework.com/start.md](https://flueframework.com/start.md) and the consistent description in the [deploy-node.md](https://github.com/withastro/flue/blob/main/docs/deploy-node.md) and [deploy-cloudflare.md](https://github.com/withastro/flue/blob/main/docs/deploy-cloudflare.md) guides.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6
Score: 100/100 (pass), duration 20.0s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> - Use the **root layout** (`./agents/` and `./roles/`) when the target directory is new or empty. - Use the **`.flue` layout** (`./.flue/agents/` and `./.flue/roles/`) when the target directory already contains files. These rules are defined in the [Skill: Create a New Flue Agent](https://flueframework.com/start.md) guide on flueframework.com.

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/moonshotai/kimi-k2.5
Score: 100/100 (pass), duration 11.8s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: yes; fetch: yes

Answer excerpt:

> Based on the [Flue start.md guide](https://flueframework.com/start.md): - **New or empty target directory**: Use the **root layout** with agents in `./agents/` and roles in `./roles/`. - **Existing non-empty directory**: Use the **`.flue` layout** with agents in `./.flue/agents/` and roles in `./.flue/roles/`. This convention keeps agent files out of the way when working in an established codebase. Flue's CLI automatically falls back to the project root only if `./.flue/` does not exist [(`github.com/withastro/flue/blob/main/docs/deploy-node.md`)](https://github.com/withastro/flue/blob/main/docs/deploy-node.md).

### flue-layout-rules / exa / cloudflare-workers-ai/@cf/zai-org/glm-4.7-flash
Score: 92/100 (fail), duration 10.6s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> For a new, nonexistent, or empty target directory, use the **root layout** with agents in `./agents/` and roles in `./roles/`. For an existing non-empty directory, use the **`.flue` layout** with agents in `./.flue/agents/` and roles in `./.flue/roles/`. The CLI resolves this automatically: it prefers `.flue/` if the directory already contains files, otherwise it falls back to the project root. This distinction is enumerated in the Start guide under "Project layout rules."

### flue-layout-rules / exa / mistral/mistral-small-latest
Score: 92/100 (fail), duration 8.5s
Facts: yes New or empty directory uses root layout; yes Existing non-empty directory uses .flue layout
Sources: yes flueframework.com; citation: no; fetch: yes

Answer excerpt:

> - New or empty target: use the root layout with agents in ./agents/ and roles in ./roles/ - Existing non-empty target: use the .flue layout with agents in ./.flue/agents/ and roles in ./.flue/roles/ - Flue picks ./.flue/ if it exists; otherwise it uses the project root

## Benchmark Design References

- https://openai.com/index/introducing-simpleqa/
- https://openai.com/index/browsecomp
- https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/
