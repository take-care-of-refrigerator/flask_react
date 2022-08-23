from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=('GET'))
def index():
  if request.method == "GET":
    return '<h1>Hello!</h1>'

if __name__ == "__main__":
  app.run('0.0.0.0', debug=True)