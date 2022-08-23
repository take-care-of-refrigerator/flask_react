from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=('GET', 'POST'))
def index():
  if request.method == "GET":
    print('hi')
    return '<h1>Hello!</h1>'
  elif request.method == "POST":
    user_id = request.form.get('userId')
    print('hi')
    print('hi')

if __name__ == "__main__":
  app.run('0.0.0.0', debug=True)