"""Settings demo for the sphinx-persistence example book.

This small local extension is only for this example book. It loads
persistence-demo.js after the sphinx-persistence settings file and before the
extension's own scripts. The script lets a reader switch the progress controls
on and off in their own browser, so they can see each setting without
rebuilding the book. Your own book does not need it.
"""


def setup(app):
    # sphinx-persistence loads its settings file at priority 200 and its
    # scripts at the default priority of 500. Priority 300 sits in between.
    app.add_js_file("persistence-demo.js", priority=300)
    return {"parallel_read_safe": True, "parallel_write_safe": True}
