import google.generativeai as genai
from config import GEMINI_API_KEY
from history import history

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_ai(prompt: str):

    history.append(
        {
            "role": "user",
            "parts": [prompt]
        }
    )
    response = model.generate_content(history)

    text = response.text

    history.append(
        {
            "role": "model",
            "parts": [text]
        }
    )

    return text