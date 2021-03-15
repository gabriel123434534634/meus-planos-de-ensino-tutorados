import os
from bottle import route, run,template, static_file, get
@route("/<filename:path>")
def static(filename):
    return static_file(filename, root=".")
@route('/')
def index():
    return template("index.html", nome="Gabriel", static=static)
run(host='0.0.0.0', port=os.environ.get("PORT", 5000))
# run(host='localhost', port=8080)