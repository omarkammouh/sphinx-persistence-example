# Limitations

The extension works in the reader's browser and keeps no copy anywhere else. This page lists what it does not save and when it can go wrong.

## What does not get saved

- The output of code cells is not saved. Only the code is saved, and running it again brings the output back.
- Anything inside an iframe from another website, such as YouTube or H5P, is not saved. Browsers do not let a page look inside those.
- Canvas animations and games are not saved. They start again on purpose.
- The extension does not remember which tab of a tab set was open.

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

The extension is built for books that use the TeachBooks or sphinx-book-theme page layout. The Export, Import and Reset buttons go into that theme's page header. With another theme, the buttons float in the bottom-right corner of the page, and the progress controls do not appear.
