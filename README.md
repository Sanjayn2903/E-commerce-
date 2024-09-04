# Ecommerce Application Backend

Welcome to the backend repository for our Ecommerce Application! This repository contains the backend implementation using Expressjs, Mongoose, JWT(JSON Web Tokens), Bcrypt, and Docker.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Swagger Documentation](#swagger-documentation)


## Features

- *Authentication*: Secure user authentication using JWT and password hashing with Bcrypt.
- *User Management*: CRUD operations for managing users.
- *Product Management*: CRUD operations for managing products.
- *Order Management*: Create, read, update, and delete orders.
- *Authorization*: Role-based access control for different resources.
- *Docker Support*: Easily deployable with Docker.## Usage

### Swagger Documentation

The API endpoints are documented using Swagger. After starting the server, you can access the Swagger UI documentation by navigating to the following URL in your web browser:

http://localhost:5001/apis



## Installation

1. *Clone the repository*:

    bash
    git clone https://github.com/Sanjay-s-890/E-commerce_adya/tree/master app
    

2. *Install dependencies*:

    bash
    cd app
    npm install
    

3. *Set up environment variables*:

    Create a .env file in the root directory and add the following variables:

    dotenv
    PORT=3000
    MONGODB_URI=<Your MongoDB URI>
    JWT_ACCESS_SECRET=<Your JWT secret key>
    JWT_REFRESH_SECRET=<Your JWT refresh key>
    REDIS_URL=<Your Redis URL>
    MAIL_USER=<Your MAIL_USER>
    MAIL_PASS=<Your MAIL_PASS>


    

4. *Start the server*:

    bash
    npm start
    