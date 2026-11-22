# Limitations

The extension works in the reader's browser and keeps no copy anywhere else. This page lists what it saves, what it does not save and when it can go wrong.

## What is saved and what is not

Each item below was tested in a TeachBooks book: the item was filled in or clicked, and then the page was opened again in a new visit (version 0.5.0, Chrome, November 2026).

| Saved and restored | Not saved |
|---|---|
| Text boxes and text areas | Text typed into an element that is not a form field (`contenteditable`) |
| Checkboxes and radio buttons | Anything inside an iframe, such as YouTube, H5P or Grasple |
| Dropdown lists, also with several choices | Drag-and-drop moves in an HTML activity |
| Sliders, number, date and colour fields | Canvas animations and games, on purpose: they start again |
| Code edited in live code cells | The output of code cells: run the cell again to see it |
| TeachBooks-Questions answers: single choice, several choices, text and math answers | The feedback after a quiz answer: press Check again |
| HTML activities that the reader works with by clicking, also when the activity shuffles its items on each load | Which tab of a tab set is open, and whether a dropdown (`{dropdown}`) is open |
| "Mark as done" checkboxes, the page checkbox and the sidebar circles | |

An HTML activity is saved through the reader's clicks, so an activity that the reader works with by dragging or typing into elements that are not form fields loses that work. Form fields inside an activity are saved like any other form field. Interactive widgets in live code (ipywidgets) were not tested.

## Work stays in one browser

Saved work stays in the browser and on the computer where the reader made it. Another browser does not see it. A browser can also delete it. This happens in a private window and when the reader clears their browsing data. Some browsers also clean up data of websites the reader has not visited for a while. Export makes a file that the reader can keep as a backup and load again with Import.

## Several books on one web address

A browser keeps saved work per web address, such as `https://oit.tudelft.nl`. When several books are hosted under the same address, they share one storage space, and the extension cannot yet tell them apart. This has three effects.

- Export puts the saved work of all books on that address into one file.
- Reset with "Entire Book" deletes the saved work of all books on that address. It also deletes saved H5P answers on that address.
- All books on the address share the browser's limit of about 5 MB.

Pages do not mix, because the extension saves each page under its own path. A book with its own web address, such as this book on GitHub Pages, is not affected. A fix that keeps each book's saved work apart is planned.

## Changes to your book

- A saved code edit belongs to the cell's place on the page. If you add or remove a code cell above it, the extension skips the old edit, so the reader does not see it in the wrong cell, but the edit is lost.
- A saved answer, activity or checkbox belongs to the page path and to its own id or title. If you rename a page, an activity id or an activity title, readers lose what they saved there.

## Theme

The extension is built for books that use the TeachBooks or sphinx-book-theme page layout. The menu with Export, Import and Reset goes into that theme's page header. With another theme, the disk icon floats in the bottom-right corner of the page, and the progress controls do not appear.
