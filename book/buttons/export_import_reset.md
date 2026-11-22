# Export, Import and Reset

The extension adds a disk icon <span class="pe-icon" title="Progress menu"><i class="fa-solid fa-floppy-disk"></i></span> to the page header, next to the other TeachBooks buttons. Click it, or move the mouse over it, to open a menu with three actions: Export <span class="pe-icon" title="Export"><i class="fa-solid fa-file-export"></i></span>, Import <span class="pe-icon" title="Import"><i class="fa-solid fa-file-import"></i></span> and Reset <span class="pe-icon" title="Reset"><i class="fa-solid fa-trash-can"></i></span>. Each action has its name in the menu, so readers can see what it does. The menu is on by default.

## Export and Import

Saved work stays in one browser on one computer. Export and Import move it to another browser or computer.

1. Fill in a few fields on the [Form fields](../saving/form_fields.md) page.
2. Click Export <span class="pe-icon" title="Export"><i class="fa-solid fa-file-export"></i></span> in the page header menu. Your browser downloads one file with all your saved work in this book.
3. Open the book in another browser, or on another computer, and click Import <span class="pe-icon" title="Import"><i class="fa-solid fa-file-import"></i></span>. Choose the file you downloaded.
4. Your answers appear in the other browser.

The file also works as a backup. Browsers can delete stored website data, for example in a private window or when you clear your browsing data. With an exported file, you can bring your work back.

Import checks the file before it changes anything. If the file comes from a different book, you see a warning first. This book sets `persistence_book_id: "sphinx-persistence-example"`, so its files carry that name.

## Reset

Reset <span class="pe-icon" title="Reset"><i class="fa-solid fa-trash-can"></i></span> lets you start over. It asks whether to clear only the current page ("Current Page Only") or the whole book ("Entire Book"). Then it deletes the saved work and reloads the page.

Try it on this page or on the [Form fields](../saving/form_fields.md) page. Choose "Current Page Only", and the fields on that page are empty again. Your work on other pages stays.

## Turn the menu off

To hide the menu with Export, Import and Reset, add this line to your `_config.yml`:

```yaml
sphinx:
  config:
    persistence_toolbar: false
```

Saving still works without the menu. Readers then have no way to move or clear their work, so keep the menu unless you have a reason to hide it.
