from flask import Flask, request, render_template
from tools import Soma, Sub, Div, Mult

#necessário instalar a bliblioteca flask
#terminal: pip install flask

app = Flask(__name__, template_folder="./src/views")

@app.route("/results", methods=["POST"])
def resultado():

    if (request.method == "POST"):
        num1 = request.form["value1"]
        num2 = request.form["value2"]
        op = request.form["op"]

    if(op=="soma"):

     return Soma (num1,num2)

    elif(op=="sub"):

        return Sub(num1,num2)

    elif(op=="mult"):
        return Mult(num1,num2)

    else:
        return Div(num1,num2)



@app.route("/")
def calculadora():
    return render_template("calculadora.html"), 200

@app.errorhandler(404)

def error_pagina(erro):
    return "<center> <h1>Desculpe, a página não foi encontrada</h1> </center>"
app.run()