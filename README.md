# Calculator Application

This is a simple calculator application that allows users to perform basic math operations such as addition, subtraction, multiplication, and division. The application consists of a frontend built with React and a backend built with Node.js and Express. The backend uses MongoDB to store the history of calculations.

## Getting Started

Follow the instructions below to set up and run the calculator application on your local machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js: Download and Install [Node.js](https://nodejs.org/)
- MongoDB: Download and Install [MongoDB](https://www.mongodb.com/) or sign up for a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation

1. Clone the repository to your local machine:
git clone [https://github.com/AbdulkadirAbdullahi/Full-stack-Assesment.git](https://github.com/AbdulkadirAbdullahi/Full-stack-Assessment.git) ↗
cd calculator-app
2. Install dependencies for both the frontend and backend:

- Navigate to the `calculator-app` directory and install frontend dependencies:

  ```
  cd calculator-app
  npm install
  ```

- Navigate to the `calculator-backend` directory and install backend dependencies:

  ```
  cd calculator-server
  npm install
  ```

### Configuration

**Start MongoDB:**

Make sure MongoDB is running by executing the `mongod` command in a terminal.

**Set up Environment Variables:**

- Create a database named `calculator`.

In the `calculator-server` directory, rename the `.env.example` file to `.env`.

Update the MongoDB connection URL in the `.env` file to match your MongoDB configuration.

If you are using MongoDB Atlas, update the `.env` file as follows:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual Atlas credentials and database name.

Replace `<dbname>` with the name of the database you want to connect to.

When you use this connection string in your Node.js application to connect to MongoDB Atlas, the application will automatically connect to the specified database.

## Running the Application

**Start the Backend Server:**

Navigate to the `calculator-server` directory and run the following command:

```
npm start
```

The backend server should now be running on [http://localhost:5000 ↗](http://localhost:5000).

**Start the Frontend Development Server:**

Navigate to the `calculator` directory and run the following command:

```
npm start
```

The frontend development server should now be running on [http://localhost:3000 ↗](http://localhost:3000).

**Access the Application:**

Open your web browser and visit [http://localhost:3000 ↗](http://localhost:3000) to access the calculator application.

## Running Tests

**Frontend Tests:**

To run tests for the frontend React components, navigate to the `calculator` directory and run:

```
npm test
```

**Backend Tests:**

To run tests for the backend API endpoints, navigate to the `calculator-server` directory and run:

```
npm test
```

## Built With

- Frontend: [React ↗](https://reactjs.org/)
- Backend: [Node.js ↗](https://nodejs.org/), [Express ↗](https://expressjs.com/)
- Database: [MongoDB ↗](https://www.mongodb.com/)
```
```
