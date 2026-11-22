# Quiz answers

The extension saves answers to questions made with [TeachBooks-Questions](https://github.com/TeachBooks/TeachBooks-Questions). It saves the options a reader picked in a multiple-choice question and what they typed in a short-answer field.

## Try it

1. Pick an answer in each multiple-choice question below, and type an answer in the two short-answer questions.
2. Reload the page. Your answers are selected again.
3. In the questions with a **Submit answer(s)** button, press it to see the feedback. The extension does not save the feedback, so you press the button again after a reload.

:::{question} Single choice
:type: multiple-choice
:variant: single-select
:columns: 1

Which part of a book does sphinx-persistence save?
---
[ ] Only the code in live code cells
> Code is one part, but the extension saves more.
[x] The reader's answers, code and progress
> Correct. It saves all of these in the reader's browser.
[ ] Nothing, it only adds buttons
> The buttons are only one part of the extension.
---
:::

:::{question} Several choices
:type: multiple-choice
:variant: multiple-select
:columns: 1

Which of these does the extension save? Pick every correct option.
---
[x] Text typed in a text box
[x] The position of a slider
[ ] The output of a code cell
[ ] A video's playback position
---
:::

:::{question} Text answer
:type: short-answer

---
TI[browser] Where does the extension keep a reader's work? Type one word.
= Correct. Everything stays in the reader's browser.
> Not quite. Think about where the page runs.
---
:::

:::{question} Math answer
:type: short-answer

---
M[2*x] Type the derivative of $x^2$ with respect to $x$.
= Correct.
> Not quite. Try again.
---
:::

## How it works

TeachBooks-Questions does not use ordinary form fields for its choices. It marks a picked option with a CSS class, and it uses a special math field for math answers. So the extension has a separate part for these questions. It saves the picked options and the typed math for each question, and puts them back when the page loads.

Turn this part off with `persistence_questions: false`.
