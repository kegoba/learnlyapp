# learnlyapp


Installation
Clone the repository:
bash
Copy code
git clone https://github.com/kegoba/learnlyapp.git
cd product-listing-app/backend
Install dependencies:
BACKEND:
cd backend-store
npm install
Create a .env file in the backend directory with the following content:
makefile
add the following
PORT=8000
MONGO_URI=your_mongodb_connection_string
Running the Backend
npm run dev
The backend server will start on http://localhost:8000.

Frontend Setup (Vue.js)
Prerequisites
Node.js (v14.x or higher)
npm (v6.x or higher)
Installation
Navigate to the frontend directory:
cd frontend-store
Install dependencies:
npm install
Create a .env file in the frontend directory with the following content:
arduino
Copy code
VUE_APP_API_BASE_URL=http://localhost:8000
Running the Frontend
npm run serve




