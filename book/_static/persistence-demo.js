/**
 * Settings demo for the sphinx-persistence example book.
 *
 * The book is built with every progress control switched on. The Settings page
 * lets a reader switch controls off for themselves. Their choice is kept in
 * the browser under the key below and applied here, before the extension's
 * scripts read window.sphinxPersistence. Nothing changes for other readers.
 *
 * This file is only for the example book. Your own book does not need it.
 */
(function () {
    'use strict';

    var KEY = 'persistence-demo-switches';
    var NAMES = ['pageCheckbox', 'sidebarTicks', 'sidebarClickable', 'activityCheckboxes', 'activityReset', 'partHeadingPages'];

    var cfg = window.sphinxPersistence = window.sphinxPersistence || {};

    // Keep the book's own values, so the Settings page can offer to go back to them.
    var built = {};
    NAMES.forEach(function (name) { built[name] = cfg[name]; });
    window.persistenceDemo = { key: KEY, names: NAMES, built: built, active: false };

    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { saved = null; }
    if (!saved || typeof saved !== 'object') return;

    NAMES.forEach(function (name) {
        if (Object.prototype.hasOwnProperty.call(saved, name)) cfg[name] = saved[name];
    });
    window.persistenceDemo.active = true;

    // Tell the reader on every page that they are looking at their own demo settings.
    function showNotice() {
        var article = document.querySelector('article.bd-article');
        if (!article || document.getElementById('persistence-demo-notice')) return;
        var note = document.createElement('div');
        note.id = 'persistence-demo-notice';
        note.className = 'admonition note';
        note.setAttribute('data-persistence', 'off');
        var root = document.documentElement.getAttribute('data-content_root') || '';
        note.innerHTML = '<p class="admonition-title">Your own demo settings are on</p>' +
            '<p>Some progress controls on this page follow the choices you made on the ' +
            '<a href="' + root + 'settings.html">Settings page</a>. ' +
            'You can go back to the book\'s settings there.</p>';
        article.insertBefore(note, article.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showNotice);
    } else {
        showNotice();
    }
})();
