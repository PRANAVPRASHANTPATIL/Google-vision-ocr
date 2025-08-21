# Google-vision-ocr
This project is a simple Node.js script that uses Google Cloud Vision API to extract text from an image (like a prescription or document). It’s meant as a proof of concept to test if Google Vision OCR works correctly before building a larger system. (for using this project students need to make their own key.json file in project folder which will have google vision key )

📂 Current Project Structure
vision-ocr-test/

│── node_modules/          # Installed dependencies

│── key.json               # Google Vision API credentials

│── ocr.js                 # Main script that runs OCR on an image

│── package.json           # Project metadata & dependencies

│── package-lock.json      # Auto-generated dependency tree

│── sample.jpg             # Test image used for OCR

⚙️ Features (Current Stage)

✅ Reads an image (sample.jpg)
✅ Uses Google Vision OCR to extract text
✅ Prints recognized text to the terminal

🛠️ Tech Stack

Language: Node.js

OCR Engine: Google Cloud Vision API

🚀 Setup Instructions
1️⃣ Clone Repository
git clone gh repo clone PRANAVPRASHANTPATIL/Google-vision-ocr
cd vision-ocr-test

2️⃣ Install Dependencies
npm install @google-cloud/vision

3️⃣ Add Google API Key

Place your Google Vision API JSON key inside the project as key.json

⚠️ Important: Never upload this key.json to GitHub (add it to .gitignore)

4️⃣ Run OCR Script
node ocr.js

📊 Example Input & Output
Input: sample.jpg

(An image of a prescription or document)

Output (Console):
Detected Text:
Name Mary Smith
Lipitor 10 mg
Tabs No. 30
Sig: tab i every day
Refill 6 times

📈 Next Steps (Future Work)

Parse OCR text into structured JSON (medicine name, dose, frequency, time).

Use NLP (scispaCy / MedSpaCy) for better medical term recognition.

Add an Express.js API layer for handling uploads via REST API.

Store results in a database (MongoDB / PostgreSQL).

📑 License

MIT License
