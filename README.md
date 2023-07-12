# Blockchain-JS
Simple Blockchain data structure in js using POW consesus algorithm

This project implements a basic blockchain using Node.js and Express. It provides a simple API for interacting with the blockchain, including creating transactions, mining new blocks, and retrieving the blockchain data.

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.

## Installation

1. Install the required dependencies by running the following command:

   ```shell
   npm install

## Usage
Start the server by running the following command:

```npm start```
The server will start listening on port 3000.

Interact with the blockchain API using your preferred method (e.g., cURL, Postman, web browser).

### To view the entire blockchain:

GET ```http://localhost:3000/blockchain```

### To create a new transaction:

POST ```http://localhost:3000/transaction```

// Include the following JSON data in the request body:
```
{
  "amount": 1.5,
  "sender": "sender-address",
  "recipient": "recipient-address"
}
```

To mine a new block:

GET ```http://localhost:3000/mine```

### Explore the responses and console logs to see the blockchain updates and mining process.

License
This project is licensed under the MIT License.

css
Copy code

Feel free to modify and customize the content of the README.md file based on your specialisation
