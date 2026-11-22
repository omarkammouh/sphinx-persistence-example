# Settings

All settings are optional. In a Jupyter Book or TeachBooks book, put them in `_config.yml` under `sphinx:` and then `config:`, next to your other Sphinx settings. In a plain Sphinx project, put them in `conf.py`. Rebuild the book after you change a setting.

## Try the progress controls

This book is built with every progress control turned on. With the switches below, you can turn controls off for yourself and see what changes. Your choice stays in your own browser and does not change the book for anyone else. In your own book, you set these controls in `_config.yml` and readers cannot change them.

```{raw} html
<div class="persistence-demo-box" data-persistence="off">
  <p><strong>Progress controls in this browser</strong></p>
  <p><label><input type="checkbox" data-demo="pageCheckbox"> "Mark this section as complete" at the end of every page (<code>persistence_page_checkbox</code>)</label></p>
  <p><label><input type="checkbox" data-demo="sidebarTicks"> Circles in the left sidebar that readers click to mark a page as done (<code>persistence_sidebar_ticks</code>)</label></p>
  <p><label><input type="checkbox" data-demo="activityCheckboxes"> "Mark as done" after every learning activity (<code>persistence_activity_checkboxes</code>)</label></p>
  <p><label><input type="checkbox" data-demo="activityReset"> "Reset" after every learning activity (<code>persistence_activity_reset</code>)</label></p>
  <p><label><input type="checkbox" data-demo="partHeadingPages"> Checkboxes on the parts of a long page (<code>persistence_part_heading_pages</code>)</label></p>
  <p>
    <button type="button" id="demo-apply">Apply and reload</button>
    <button type="button" id="demo-restore">Use the book's settings</button>
  </p>
  <p>After you apply, open <a href="progress/activities.html">Learning activities</a> or <a href="progress/long_page_walkthrough.html">A long page with parts</a> to see the effect.</p>
</div>
<script>
  (function () {
    var demo = window.persistenceDemo;
    var cfg = window.sphinxPersistence || {};
    if (!demo) return;
    var boxes = document.querySelectorAll('[data-demo]');
    boxes.forEach(function (box) {
      var value = cfg[box.dataset.demo];
      box.checked = typeof value === 'string' ? value.length > 0 : value === true;
    });
    document.getElementById('demo-apply').addEventListener('click', function () {
      var choice = {};
      boxes.forEach(function (box) {
        var name = box.dataset.demo;
        if (name === 'partHeadingPages') choice[name] = box.checked ? (demo.built[name] || 'long_page') : '';
        else choice[name] = box.checked;
      });
      try { localStorage.setItem(demo.key, JSON.stringify(choice)); } catch (e) {}
      window.location.reload();
    });
    document.getElementById('demo-restore').addEventListener('click', function () {
      try { localStorage.removeItem(demo.key); } catch (e) {}
      window.location.reload();
    });
  })();
</script>
```

## All settings

The table lists every setting. Saving and the menu with Export, Import and Reset are on by default. The progress controls are off by default.

| Setting | Default | What it does |
|---|---|---|
| `persistence_code_cells` | `true` | Saves the code readers write in live code cells. |
| `persistence_questions` | `true` | Saves TeachBooks-Questions answers. |
| `persistence_activities` | `true` | Saves HTML activities. |
| `persistence_activity_exclude_ids` | `[]` | Lists the ids of HTML activities that should never be saved, such as timed games. |
| `persistence_toolbar` | `true` | Shows a menu with Export, Import and Reset behind a disk icon in the page header. |
| `persistence_page_checkbox` | `false` | Adds a "Mark this section as complete" checkbox at the end of every page. |
| `persistence_sidebar_ticks` | `false` | Adds a circle next to every page in the sidebar. The reader clicks it to mark the page as done, and it shows a tick when the page is done. |
| `persistence_activity_checkboxes` | `false` | Adds a "Mark as done" checkbox after every learning activity. |
| `persistence_activity_reset` | `false` | Adds a "Reset" button after every learning activity written in HTML. |
| `persistence_part_heading_pages` | `""` | Adds a "Mark as done" checkbox after numbered part headings on pages whose address matches this pattern. |
| `persistence_book_id` | `""` | Gives your book a name. When a reader imports a file from a different book, they see a warning. |

Saving form fields has no setting, because the other parts build on it. To keep one field out of saving, see [Form fields](saving/form_fields.md).

## The settings of this book

This book uses these lines in its `_config.yml`:

```yaml
sphinx:
  extra_extensions:
    - sphinx_persistence
  config:
    persistence_page_checkbox: true
    persistence_sidebar_ticks: true
    persistence_activity_checkboxes: true
    persistence_activity_reset: true
    persistence_part_heading_pages: "long_page"
    persistence_book_id: "sphinx-persistence-example"
```
