
# Tegral Crates Visualizer

A full-stack application that visualizes crate dimensions and allows users to submit inquiries. Built using **React** for the frontend and **Express.js** for the backend. Inquiries are sent via email for further processing.

---

## **Features**

### Frontend
- **Crate Visualizer**: A dynamic visualization tool built using **React** to display crate dimensions.
- **Form Validation**: Real-time validation for fields including dimensions, weight, and delivery date.
- **Customer Details Capture**: Collects user information such as business name, contact name, and email.
- **Responsive Design**: A mobile-friendly interface powered by **Material-UI**.

### Backend
- **Express.js API**: Handles form submissions and processes data.
- **Request Validation**: Ensures all form data is validated before being processed.
- **Email Notifications**: Sends automated emails to a predefined address using **Nodemailer**.

---

## **Technologies Used**

### Frontend
- **React**: JavaScript library for building the user interface.
- **Material-UI**: A React component library for designing modern and responsive UI elements.

### Backend
- **Express.js**: Web framework for building RESTful APIs and handling HTTP requests.
- **Nodemailer**: Library for sending emails from the backend.

### Other Tools
- **dotenv**: Manages environment variables for sensitive configuration.
- **concurrently**: Runs both frontend and backend servers simultaneously.

---

## **Folder Structure**

```
tegral-crates/
├── node_modules/            # Dependencies for the entire project
├── public/                  # Public files for the frontend (e.g., index.html)
├── src/                     # Source code for the frontend
│   ├── components/          # React components
│   ├── App.js               # Main React component
│   ├── validators.js        # Frontend validation logic
├── tegral-crates-backend/   # Backend code and resources
│   ├── node_modules/        # Backend dependencies
│   ├── server.js            # Express.js server configuration
│   ├── package.json         # Backend package details
├── .env                     # Environment variables for sensitive information
├── package.json             # Root project configuration
├── README.md                # Project documentation (this file)
```

---

## **Installation**

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone <repository-url>
```

### 2. Install Dependencies
Navigate to the root project directory and install the dependencies:

```bash
cd tegral-crates
npm install
```

### 3. Install Backend Dependencies
Navigate to the `tegral-crates-backend` directory and install the backend dependencies:

```bash
cd tegral-crates-backend
npm install
```

---

## **Running the Application**

### Start Both Frontend and Backend with One Command
To run both the frontend and backend simultaneously, execute the following command from the root directory:

```bash
npm run dev
```

This will:
- Launch the React development server for the frontend.
- Start the Express.js backend server.
- Allow the frontend and backend to run concurrently.

---

## **Environment Variables**

Make sure to configure the necessary environment variables in the `.env` file.

```plaintext
PORT=3000                    # Frontend port
BACKEND_PORT=5000             # Backend port
```

