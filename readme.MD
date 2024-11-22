# Joke Generator

A web application that allows users to input their name and receive a custom joke generated through the **JokeAPI**. This app is built using **Express.js**, **EJS**, **Bootstrap**, and **Axios**.

## Features

- **Custom Joke**: Users can enter their name and get a personalized joke.
- **Responsive Design**: The site is built with **Bootstrap** for a mobile-friendly interface.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the application.
- **EJS**: Templating engine for dynamic HTML rendering.
- **Axios**: Promise-based HTTP client for making API requests.
- **Bootstrap 5**: Frontend framework for responsive design.
- **JokeAPI**: Public API used to fetch jokes.

## Prerequisites

- **Node.js**: You need to have Node.js installed on your system. [Download Node.js](https://nodejs.org/)
- **npm (Node Package Manager)**: npm comes with Node.js, so you should already have it installed after installing Node.js.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Jayminai/Joke-Generator.git
   cd joke-generator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   node index.js
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

1. When you open the app, you'll see a form asking for your name.
2. After entering your name and clicking **Get Joke**, the app will fetch a random two-part joke from the **JokeAPI**.
3. The joke will be displayed with the user's name inserted in the setup part for a personalized experience.

## API Used

The application fetches jokes from the **JokeAPI**. It uses the following endpoint:

- **URL**: `https://v2.jokeapi.dev/joke/Any?type=twopart`
- **Type**: Two-part jokes, including `setup` and `delivery`.