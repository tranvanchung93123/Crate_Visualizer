# Tegral Crates Visualizer

A full-stack application built with **React** for the frontend and **Express.js** for the backend. The application visualizes crate dimensions and allows users to submit inquiries, which are sent via email.

---

## **Features**
### Frontend:
- A crate visualizer built using **React**.
- Validates form fields dynamically, including dimensions, weight, and delivery date.
- Captures customer details like business name, contact name, and email.
- Responsive design powered by **Material-UI**.

### Backend:
- **Express.js** API for handling form submissions.
- Validates request data before processing.
- Sends email notifications using **Nodemailer**.

---

## **Technologies Used**
### Frontend:
- **React**: For building the user interface.
- **Material-UI**: For modern and responsive UI components.

### Backend:
- **Express.js**: For building RESTful APIs.
- **Nodemailer**: For email notifications.

### Other Tools:
- **dotenv**: For managing environment variables.
- **concurrently**: To run the frontend and backend simultaneously.

---

## **Folder Structure**

tegral-crates/
├── node_modules/           # Root dependencies
├── public/                 # Frontend public files
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── App.js              # Main React App file
│   ├── validators.js       # Validation logic for frontend
├── tegral-crates-backend/  # Backend folder
│   ├── node_modules/       # Backend dependencies
│   ├── server.js           # Express server
│   ├── package.json        # Backend package.json
├── .env                    # Environment variables
├── package.json            # Root package.json
├── README.md               # Project documentation


Installation
Follow these steps to set up and run the project:

1. Clone the Repository
git clone <repository-url>

2. Install Dependencies
cd tegral-crates
npm install

Backend (Node.js/Express Server)
Navigate to the tegral-crates-backend directory:
cd tegral-crates-backend
npm install


Running the Application
Start Both Frontend and Backend with One Command
Run the following command in the root directory:

npm run dev


