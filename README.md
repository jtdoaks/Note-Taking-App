# Note Taking Application

# Express Application with API and HTML Routes

Welcome to the **Note Taking Application** repository! This project demonstrates the setup of an Express web application with API and HTML routes. It includes a function to send POST requests to an API endpoint.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
  - [Routes](#routes)
  - [Sending POST Requests](#sending-post-requests)
- [License](#license)

## Description

This project sets up an Express application with separate routes for handling API and HTML requests. The main components are:

- `apiRoutes.js`: Defines API routes to handle data-related requests.
- `htmlRoutes.js`: Defines HTML routes to render web pages.
- `app.js`: Initializes the Express app, sets up middleware, and includes the route handlers.
- `postNote` function: A function that sends a POST request to an API endpoint using the `node-fetch` library.

## Usage
#### Routes
- apiRoutes.js: Handles API requests, defining routes for data manipulation.
- htmlRoutes.js: Handles HTML requests, rendering appropriate web pages.
#### Sending POST Requests
- The postNote function in app.js demonstrates how to send a POST request to an API endpoint using the node-fetch library. 

## License
- This project is licensed under the MIT License.