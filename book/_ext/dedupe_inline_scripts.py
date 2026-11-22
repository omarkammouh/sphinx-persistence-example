"""Remove repeated inline scripts from each page.

The TeachBooks stack adds the same inline live-code script to a page more
than once. The browser then reports "Identifier ... has already been
declared" for every repeat. This local extension keeps the first copy of
each inline script and drops the repeats. It is not part of
sphinx-persistence.
"""


def dedupe_inline_scripts(app, pagename, templatename, context, doctree):
    seen = set()
    unique = []
    for script in context.get("script_files", []):
        filename = getattr(script, "filename", "")
        body = None if filename else getattr(script, "attributes", {}).get("body")
        if body is not None:
            if body in seen:
                continue
            seen.add(body)
        unique.append(script)
    context["script_files"] = unique


def setup(app):
    app.connect("html-page-context", dedupe_inline_scripts)
    return {"version": "1.0", "parallel_read_safe": True, "parallel_write_safe": True}
