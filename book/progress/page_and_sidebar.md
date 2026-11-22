# Page checkbox and sidebar ticks

The extension can help readers see how far they are in a book. These progress controls are off by default, so a book shows them only when its author turns them on. This book turns all of them on.

## Checkbox at the end of the page

At the end of this page is a checkbox called "Mark this section as complete". Readers tick it when they are done with a page. The extension saves the tick like any other answer.

To turn it on in your book:

```yaml
sphinx:
  config:
    persistence_page_checkbox: true
```

## Ticks in the sidebar

When a reader ticks the checkbox at the end of a page, a tick appears next to that page in the left sidebar. The reader can then see at a glance which pages they have finished.

The ticks come from the page checkbox, so turn on both settings:

```yaml
sphinx:
  config:
    persistence_page_checkbox: true
    persistence_sidebar_ticks: true
```

## Try it

1. Scroll to the end of this page and tick "Mark this section as complete".
2. Go to another page, for example [Learning activities](activities.md).
3. Look at the left sidebar. "Page checkbox and sidebar ticks" now has a tick.

The tick does not appear next to the page you are on. It appears as soon as you open another page. This is a known issue.
