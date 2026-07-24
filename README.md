# AI Chat API with FastAPI & Gemini
An AI-powered chat application built using FastAPI and Google Gemini API. This project demonstrates how to integrate a Large Language Model (LLM) into a FastAPI backend, securely manage API keys using environment variables, and provide a simple web-based chat interface.
# Features
- AI-powered chat using Google Gemini
- FastAPI backend
- POST `/chat` endpoint
- Accepts user prompts
- Returns AI-generated responses
- Secure API key management with `.env`
- Simple conversation history
- Responsive frontend using HTML, CSS, and JavaScript
- Graceful error handling
- REST API architecture
# Project Structure
```text
ai-chat-api/
│
├── chatbot.py
├── config.py
├── history.py
├── main.py
├── models.py
├── requirements.txt
├── .env
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```
# Technologies Used
- Python 3.13
- FastAPI
- Google Gemini API
- Uvicorn
- Jinja2
- HTML5
- CSS3
- JavaScript
- Python Dotenv
# Run the Application

```bash
python -m uvicorn main:app --reload
```
The application will start at:
```
http://127.0.0.1:8000
```
# API Endpoints
## Home
| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Open the chat interface |

---
## AI Chat
| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/chat` | Send a prompt to Gemini AI |

### Request

```json
{
    "prompt": "What is Artificial Intelligence?"
}
```
### Response

```json
{
    "response": "Artificial Intelligence (AI) is the simulation of human intelligence by machines..."
}
```
# Frontend

The project includes a simple frontend that allows users to:

- Enter prompts
- Send requests to the FastAPI backend
- Receive AI-generated responses
- View conversation history
# Environment Variables

The application securely stores the Gemini API key using a `.env` file.

Example:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```
Never upload your `.env` file to GitHub.
# Error Handling
The API gracefully handles:
- Invalid requests
- Missing prompts
- Gemini API errors
- Internal server errors

Example:

```json
{
    "detail": "An error occurred while processing your request."
}
```
# Project Workflow

1. User enters a prompt.
2. Frontend sends a POST request to `/chat`.
3. FastAPI receives the request.
4. The backend forwards the prompt to Google Gemini.
5. Gemini generates a response.
6. FastAPI returns the response.
7. The frontend displays the AI response.
# Requirements
- Python 3.13+
- Google Gemini API Key
- Internet Connection
# requirements.txt

```
fastapi
uvicorn
google-generativeai
python-dotenv
jinja2
python-multipart
```
# Learning Objectives
This project demonstrates:
- FastAPI fundamentals
- LLM API integration
- Google Gemini integration
- Environment variable management
- REST API development
- JSON request and response handling
- Frontend and backend communication
- Error handling in APIs
# Future Improvements
- Streaming AI responses
- User authentication
- Database integration
- Persistent conversation history
- Multiple AI model support
- Chat export functionality
- Dark mode
- Docker deployment
# Author
**Devolped By Muhammad  Zeeshan**
