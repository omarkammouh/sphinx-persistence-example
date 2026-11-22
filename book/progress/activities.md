# Learning activities

A learning activity is an exercise on a page that a reader works through. The extension can add two controls after each learning activity. A "Mark as done" checkbox lets the reader tick off the activity. A "Reset" button clears the reader's saved answers in that one activity, so they can start it again.

Both controls are off by default. This book turns them on:

```yaml
sphinx:
  config:
    persistence_activity_checkboxes: true   # "Mark as done"
    persistence_activity_reset: true        # "Reset"
```

## How the extension finds an activity

The extension looks for learning activities in two ways.

The first way is an HTML activity. Its outer element has `data-learning-activity="true"` and an id, and it contains an element with the class `la-title`. The title must start with "Learning activity:".

```html
<div id="count-agents" data-learning-activity="true">
  <div class="la-title">Learning activity: Count the agents</div>
  ...
</div>
```

The second way is a Markdown heading that starts with "Learning activity:". Such an activity gets the "Mark as done" checkbox. It does not get a Reset button, because it has no saved state of its own.

## Try it with an HTML activity

1. Click the buttons in the activity below a few times.
2. Tick "Mark as done" under the activity.
3. Reload the page. Your count and your tick are both back.
4. Click "Reset" under the activity. The count goes back to zero, and the tick stays.

```{raw} html
<div id="count-agents" class="persistence-demo-box" data-learning-activity="true">
  <div class="la-title"><strong>Learning activity: Count the agents</strong></div>
  <p>Add or remove agents and watch the count change.</p>
  <p>
    <button type="button" class="pd-add">Add an agent</button>
    <button type="button" class="pd-remove">Remove an agent</button>
  </p>
  <p>Agents in the model: <strong class="pd-count">0</strong></p>
</div>
<script>
  (function () {
    var root = document.getElementById('count-agents');
    var count = 0;
    function show() { root.querySelector('.pd-count').textContent = count; }
    root.querySelector('.pd-add').addEventListener('click', function () { count += 1; show(); });
    root.querySelector('.pd-remove').addEventListener('click', function () { if (count > 0) count -= 1; show(); });
  })();
</script>
```

### Learning activity: Read the settings page

Open the [Settings](../settings.md) page and read which settings exist. Then come back and tick "Mark as done" below this activity. This activity is a Markdown heading, so it has a checkbox but no Reset button.
