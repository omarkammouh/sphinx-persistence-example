# Form fields

The extension saves every form field on a page. This includes text boxes, text areas, sliders, dropdowns, checkboxes and radio buttons. You do not need to change your fields or add a save button.

## Try it

1. Fill in the fields below and move the slider.
2. Reload the page. Every field shows what you entered.
3. Go to another page and come back. Your answers are still there.

```{raw} html
<div id="form-demo" class="persistence-demo-box">
  <p><label for="demo-name">Your name</label><br>
  <input type="text" id="demo-name" placeholder="Type your name"></p>

  <p><label for="demo-notes">Notes on this page</label><br>
  <textarea id="demo-notes" rows="3" placeholder="Write a few lines"></textarea></p>

  <p><label for="demo-agents">Number of agents: <span id="demo-agents-value">50</span></label><br>
  <input type="range" id="demo-agents" min="10" max="200" step="10" value="50"></p>

  <p><label for="demo-model">Type of model</label><br>
  <select id="demo-model">
    <option value="">Choose a type</option>
    <option value="abm">Agent-based model</option>
    <option value="sd">System dynamics model</option>
    <option value="des">Discrete-event simulation</option>
  </select></p>

  <p>Which steps have you done?<br>
  <label><input type="checkbox" id="demo-step-read"> I read the page</label><br>
  <label><input type="checkbox" id="demo-step-tried"> I tried the fields</label></p>

  <p>How sure are you about your answer?<br>
  <label><input type="radio" name="demo-sure" value="not"> Not sure</label>
  <label><input type="radio" name="demo-sure" value="fairly"> Fairly sure</label>
  <label><input type="radio" name="demo-sure" value="very"> Very sure</label></p>
</div>
<script>
  (function () {
    var slider = document.getElementById('demo-agents');
    var shown = document.getElementById('demo-agents-value');
    function update() { shown.textContent = slider.value; }
    slider.addEventListener('input', update);
    // The extension restores the slider and then sends an input event, so the number follows.
    update();
  })();
</script>
```

## How it works

The extension saves a field a moment after each change and once more when the reader leaves the page. It saves each field under the page address and the field's id. A field without an id is saved under its place on the page.

When a script changes the page after a saved value comes back, the script needs to know. So the extension sends the usual `input` and `change` events after it restores a field. In the example above, that event updates the number next to the slider.

## Keep a field out of saving

Sometimes a field should not be saved, for example a search box or a field that sets a display option. Put `data-persistence="off"` on the field, or on an element around it:

```html
<div data-persistence="off">
  <input type="text" placeholder="This field is not saved">
</div>
```

The field below uses this setting. Type in it and reload the page. The field is empty again.

```{raw} html
<div class="persistence-demo-box" data-persistence="off">
  <p><label for="demo-not-saved">This field is not saved</label><br>
  <input type="text" id="demo-not-saved" placeholder="Type here and reload"></p>
</div>
```
