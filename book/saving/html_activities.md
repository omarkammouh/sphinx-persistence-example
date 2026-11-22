# HTML activities

Many books contain small exercises written directly in HTML and JavaScript. Such an activity keeps its state in its own script, so another script cannot read or save it. The extension solves this by recording the clicks a reader makes inside the activity. When the reader comes back, the extension replays those clicks, and the activity rebuilds itself step by step.

## Try it

1. In the activity below, click each item and put it in the right group.
2. Press **Check**.
3. Reload the page. The items go back into your groups, and the result of **Check** comes back too.

```{raw} html
<div id="classify-activity" class="persistence-demo-box">
  <p><strong>Is it an agent or part of the environment?</strong> Click an item, then click a group.</p>
  <div class="pd-items">
    <button type="button" class="pd-item" data-answer="agent">A household</button>
    <button type="button" class="pd-item" data-answer="environment">A road network</button>
    <button type="button" class="pd-item" data-answer="agent">A bus driver</button>
    <button type="button" class="pd-item" data-answer="environment">The weather</button>
  </div>
  <div class="pd-groups">
    <div class="pd-group" data-group="agent"><p>Agent</p><div class="pd-slot"></div></div>
    <div class="pd-group" data-group="environment"><p>Environment</p><div class="pd-slot"></div></div>
  </div>
  <p><button type="button" class="pd-check">Check</button> <span class="pd-result" aria-live="polite"></span></p>
</div>
<script>
  (function () {
    var root = document.getElementById('classify-activity');
    var chosen = null;
    root.querySelectorAll('.pd-item').forEach(function (item) {
      item.addEventListener('click', function () {
        root.querySelectorAll('.pd-item').forEach(function (i) { i.classList.remove('is-chosen'); });
        chosen = item;
        item.classList.add('is-chosen');
      });
    });
    root.querySelectorAll('.pd-group').forEach(function (group) {
      group.addEventListener('click', function (event) {
        if (!chosen || event.target.closest('.pd-item')) return;
        group.querySelector('.pd-slot').appendChild(chosen);
        chosen.classList.remove('is-chosen');
        chosen = null;
      });
    });
    root.querySelector('.pd-check').addEventListener('click', function () {
      var placed = root.querySelectorAll('.pd-slot .pd-item');
      var right = 0;
      placed.forEach(function (item) {
        if (item.closest('.pd-group').dataset.group === item.dataset.answer) right += 1;
      });
      root.querySelector('.pd-result').textContent =
        right + ' of 4 correct' + (placed.length < 4 ? ' (' + (4 - placed.length) + ' not placed yet)' : '');
    });
  })();
</script>
```

## What the activity needs

The activity must sit inside an HTML element with an id, such as `<div id="classify-activity">`. The extension uses that id to know which activity a click belongs to. Give every activity its own id, and keep the id the same in later versions of your book. If the id changes, readers lose their saved work in that activity.

You do not need to change anything else. The activity above is ordinary HTML and JavaScript, and it does not know about the extension.

## Leave an activity out

Some activities should start fresh every time, such as a timed game. List their ids in your `_config.yml`:

```yaml
sphinx:
  config:
    persistence_activity_exclude_ids: ["timed-game"]
```

Turn this part off for the whole book with `persistence_activities: false`.
