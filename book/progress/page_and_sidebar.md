# Page checkbox and sidebar ticks

The extension can help readers see how far they are in a book. These progress controls are off by default, so a book shows them only when its author turns them on. This book turns all of them on.

## Checkbox at the end of the page

At the end of this page is a checkbox called "Mark this section as complete": <span class="pe-pill"><span class="pe-box"></span>Mark this section as complete</span>. Readers tick it when they are done with a page. The extension saves the tick like any other answer.

To turn it on in your book:

```yaml
sphinx:
  config:
    persistence_page_checkbox: true
```

## Ticks in the sidebar

When a reader ticks the checkbox at the end of a page, a tick <span class="pe-circle pe-circle--done" title="Done">✓</span> appears next to that page, at the right edge of the left sidebar. The reader can then see at a glance which pages they have finished.

The ticks come from the page checkbox, so turn on both settings, or use the clickable circles below:

```yaml
sphinx:
  config:
    persistence_page_checkbox: true
    persistence_sidebar_ticks: true
```

## Click the mark in the sidebar

With `persistence_sidebar_clickable`, every page in the left sidebar gets a small circle <span class="pe-circle" title="Not done"></span> at the right edge. The reader clicks the circle to mark that page as done <span class="pe-circle pe-circle--done" title="Done">✓</span>, and clicks it again to undo. The reader does not have to scroll to the end of the page, and the book does not need the checkbox at the end of each page.

```yaml
sphinx:
  config:
    persistence_sidebar_clickable: true
```

When the checkbox at the end of the page is also on, the two stay in step: ticking one also ticks the other.

## Try it

1. Scroll to the end of this page and tick "Mark this section as complete". The circle next to "Page checkbox and sidebar ticks" in the left sidebar turns into a tick.
2. Click the circle next to another page in the sidebar, for example "Form fields". It turns into a tick, and you stay on this page.
3. Click the tick again to undo it.
