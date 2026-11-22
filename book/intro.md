# sphinx-persistence example book

This book shows what the [sphinx-persistence](https://github.com/omarkammouh/sphinx-persistence) extension does in a real TeachBooks book. The extension saves a reader's work in their own browser. When the reader comes back to a page, their answers, code and progress are still there.

You can try every feature here. Fill in a field, change some code or answer a question, and then reload the page. Your work comes back. You can also close the browser and open the book again tomorrow.

## What this book shows

Each page shows one feature and tells you what to try.

- [Form fields](saving/form_fields.md) shows how text boxes, sliders, dropdowns and other fields are saved.
- [Live code](saving/live_code.ipynb) shows how edited code in a code cell is saved.
- [Quiz answers](saving/quiz_answers.md) shows how TeachBooks-Questions answers are saved.
- [HTML activities](saving/html_activities.md) shows how a hand-made HTML exercise is saved.
- [Export, Import and Reset](buttons/export_import_reset.md) shows the three buttons in the page header.
- [Page checkbox and sidebar ticks](progress/page_and_sidebar.md), [Learning activities](progress/activities.md) and [A long page with parts](progress/long_page_walkthrough.md) show the progress controls.
- [Settings](settings.md) lists every setting. You can also switch the progress controls on and off there to see what each one does.
- [Limitations](limitations.md) explains what the extension does not save and when it can go wrong.

## How to add the extension to your book

Add one line to your book's `requirements.txt`:

```
sphinx-persistence @ git+https://github.com/omarkammouh/sphinx-persistence
```

Then add the extension to your book's `_config.yml` and rebuild the book:

```yaml
sphinx:
  extra_extensions:
    - sphinx_persistence
```

With only these two lines, the extension saves the reader's work and adds the Export, Import and Reset buttons. The progress controls you see in this book are off by default. The [Settings](settings.md) page shows how to turn them on.

## Where your work is kept

Everything you do in this book stays in your own browser. The book has no server and no accounts, and nothing is sent anywhere. Another browser or another computer does not see your work, unless you move it with Export and Import.
