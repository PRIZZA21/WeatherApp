# Weather App

This is a full-stack Weather App that provides daily weather summaries, historical trends, and alerts. It also includes functionality to send emails using the EmailJS service.

## Features

- **Daily Weather Summaries**: Displays daily weather summaries for various cities.
- **Historical Trends**: Shows historical weather data for selected cities.
- **Alerts**: Tracks and displays weather alerts.
- **Email Notifications**: Sends weather updates via email using EmailJS.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **CSS**: For styling the application.

### Backend

- **Node.js**: For the server-side application.
- **Express.js**: For building the API endpoints.
- **EmailJS**: For sending emails.

### Database

- **MongoDB**: For storing weather data.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system.
- **MongoDB**: Set up a MongoDB instance (e.g., MongoDB Atlas).

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Install Dependencies for server**-:
    ```sh
    cd server
    npm install 
3. **Setup Enviornment Variables**-:
    Create a .env file in the server directory and insert the following values 
    ```sh
    API KEY
    MONGO_URI
4. **Start the server**
    ```sh
    npm Start
5. **Open Frontend**
    ```sh
    cd client
    npm start 

