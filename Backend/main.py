import joblib
import numpy as np
import os
import gdown
from dotenv import load_dotenv
from flask import Flask, request, jsonify
import flask_cors
from datetime import date

app = Flask(__name__)
flask_cors.CORS(app)

load_dotenv()

file_id = os.getenv("FILE_ID")
output_file = "price_my_car.pkl"

if not os.path.exists(output_file):
    print(f"📂 File not found. Downloading {output_file}...")

    # Download the file
    url = f"https://drive.google.com/uc?id={file_id}"
    gdown.download(url, output_file, quiet=False)

    print(f"Download complete: {output_file}")
else:
    print(f"File already exists. Skipping download: {output_file}")

# Load the model
model_data = joblib.load("price_my_car.pkl")
print("Model loaded successfully!")
model = model_data["model"]

@app.route('/')
def home():
    return "PriceMyCar Server"

@app.route('/predict', methods=['GET'])
def predict():
    try:    
        # Get query parameters
        year = request.args.get('year')
        manufacturer = request.args.get('manufacturer')
        condition = request.args.get('condition')
        fuel = request.args.get('fuel')
        odometer = request.args.get('odometer')
        transmission = request.args.get('transmission')
        car_type = request.args.get('car_type')
        car_age = date.today().year - int(year)
        
        sample_input = np.array([[int(car_age), manufacturer, condition, fuel, int(odometer), transmission, car_type]])  

        # Predict price
        predicted_price = model.predict(sample_input)*83.90

        return jsonify({"price": predicted_price[0]})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
