# Page checkbox and sidebar circles

The extension can help readers see how far they are in a book. These progress controls are off by default, so a book shows them only when its author turns them on. This book turns all of them on.

## Checkbox at the end of the page

At the end of this page is a checkbox called "Mark this section as complete": <span class="pe-pill"><span class="pe-box"></span>Mark this section as complete</span>. Readers tick it when they are done with a page. The extension saves the tick like any other answer.

To turn it on in your book:

```yaml
sphinx:
  config:
    persistence_page_checkbox: true
```

## Circles in the sidebar

With `persistence_sidebar_ticks`, every page in the left sidebar gets a small circle <span class="pe-circle" title="Not done"></span> at the right edge. The reader clicks the circle to mark that page as done, and the circle shows a tick <span class="pe-circle pe-circle--done" title="Done">✓</span>. Clicking it again undoes it. The reader does not have to scroll to the end of the page, and stays on the page they are reading. The reader can then see at a glance which pages they have finished.

```yaml
sphinx:
  config:
    persistence_sidebar_ticks: true
```

The circles work without the checkbox at the end of the page. When both are on, they stay in step: ticking one also ticks the other.

## Try it

1. Scroll to the end of this page and tick "Mark this section as complete". The circle next to "Page checkbox and sidebar circles" in the left sidebar turns into a tick.
2. Click the circle next to another page in the sidebar, for example "Form fields". It turns into a tick, and you stay on this page.
3. Click the tick again to undo it.
