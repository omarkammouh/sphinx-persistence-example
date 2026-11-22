# sphinx-persistence example book

This book shows what the [sphinx-persistence](https://github.com/omarkammouh/sphinx-persistence) extension does in a real TeachBooks book. The extension saves a reader's work in their own browser, so their answers, code and progress are still there when they come back.

Read the book online: <https://omarkammouh.github.io/sphinx-persistence-example/main/>

## What the book shows

Each page shows one feature of the extension and tells the reader what to try.

- Saving form fields, live code, quiz answers and hand-made HTML activities.
- Export, Import and Reset in a menu behind a disk icon in the page header.
- The progress controls: a checkbox at the end of each page, circles in the sidebar that readers click to mark a page as done, "Mark as done" and "Reset" after each learning activity, and checkboxes on the parts of a long page.
- A small picture of each button and checkbox next to the text that explains it.
- Every setting, with switches on the Settings page that let a reader turn the progress controls on and off in their own browser.
- The limitations of the extension.

To add the extension to your own book, follow the [README of the extension](https://github.com/omarkammouh/sphinx-persistence#installation).

## Files in this repository

- `book/` holds the pages of the book, its `_config.yml` and its `_toc.yml`.
- `book/_config.yml` shows the settings of the extension under `sphinx:` and `config:`, in the lines marked "sphinx-persistence".
- `book/_ext/persistence_demo.py` and `book/_static/persistence-demo.js` make the switches on the Settings page work. They are only for this example book, and your own book does not need them.
- `requirements.txt` lists the packages that the build installs.
- `.github/workflows/call-deploy-book.yml` builds the book and publishes it on GitHub Pages after each push. It uses the [TeachBooks deploy-book workflow](https://github.com/TeachBooks/deploy-book-workflow).

## Build the book on your computer

You need Python 3.10 or newer.

```
pip install -r requirements.txt
teachbooks build book
```

Then open `book/_build/html/index.html` in your browser. Live code needs the book to be served by a web server, for example with `teachbooks serve`.

## Contribute

Found a problem in the book or in the extension? Open an issue in the [extension's repository](https://github.com/omarkammouh/sphinx-persistence/issues). You can also fork this repository and open a pull request.

## Licence

The text of this book is licensed under [CC BY 4.0](LICENSE). The extension itself is licensed under the MIT licence.
