from flask import Flask, jsonify
from flask_cors import CORS  

app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}})


biedronka_stats = [
    {
        "customer": "Jan Kowalski",
        "total_purchases": 35,
        "average_spent": 120.50,
        "favorite_category": "Nabiał"
    },
    {
        "customer": "Anna Nowak",
        "total_purchases": 20,
        "average_spent": 80.30,
        "favorite_category": "Pieczywo"
    },
    {
        "customer": "Piotr Wiśniewski",
        "total_purchases": 50,
        "average_spent": 200.00,
        "favorite_category": "Alkohole"
    },
    {
        "customer": "Maria Jankowska",
        "total_purchases": 15,
        "average_spent": 75.80,
        "favorite_category": "Warzywa i Owoce"
    },
    {
        "customer": "Tomasz Zieliński",
        "total_purchases": 40,
        "average_spent": 150.20,
        "favorite_category": "Warzywa i Owoce"
    }
]

@app.route('/getShopStats/', methods=['GET'])
def get_biedronka_stats():
    return jsonify(biedronka_stats)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5070, debug=True)
