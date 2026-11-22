# A long page with parts

Some pages are long walkthroughs with numbered parts. A reader may need several sessions to finish such a page. The extension can add a "Mark as done" checkbox at the end of each numbered part, so the reader can see how far they got.

This setting is off by default. You turn it on for chosen pages with a pattern that matches their web address. This book uses the pattern `"long_page"`, so it applies only to this page:

```yaml
sphinx:
  config:
    persistence_part_heading_pages: "long_page"
```

The pattern is a JavaScript regular expression. For example, `"chapter_3|chapter_4"` matches every page in two folders with those names. A part is a second-level heading that starts with a number such as `1.1` or `2.3.1`.

## 1.1 Set up the model

In this part you would create the model and its agents. Scroll down to the end of this part. You see a "Mark as done" checkbox <span class="pe-pill"><span class="pe-box"></span>Mark as done</span> before the next heading starts.

## 1.2 Run the model

In this part you would run the model for a number of steps. Tick the checkbox at the end of this part, and then reload the page. The tick is still there.

## 1.3 Look at the results

In this part you would plot the results and explain them. The checkbox for this part is the last one before the "Mark this section as complete" checkbox of the whole page.

## Things to remember

This heading has no number, so it does not get a checkbox of its own.
