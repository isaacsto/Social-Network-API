# Social Media Network API

This application provides a backend API for a social media site. It allows users to perform various actions such as adding and deleting friends, posting and deleting thoughts, and reacting to their friends' thoughts. The API is designed to support the following routes:

<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />   <img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" />




# Routes

## User Routes

GET /api/users: Retrieves a list of all users. <br/>
GET /api/users/:userId: Retrieves information about a specific user. <br/>
POST /api/users: Creates a new user. <br/>
PUT /api/users/:userId: Updates information about a specific user. <br/>
DELETE /api/users/:userId: Deletes a specific user. <br/>

<img src="assets/getallusers.png">

<img src="assets/updateuser.png">


## Friend Routes <br/>

GET /api/users/:userId/friends: Retrieves the list of friends for a specific user. <br/>
POST /api/users/:userId/friends: Adds a new friend to a specific user. <br/>
DELETE /api/users/:userId/friends/:friendId: Removes a friend from a specific user. <br/>
Thought Routes <br/>
GET /api/users/:userId/thoughts: Retrieves the list of thoughts for a specific user. <br/>
GET /api/users/:userId/thoughts/:thoughtId: Retrieves information about a specific thought of a user. <br/>
POST /api/users/:userId/thoughts: Creates a new thought for a specific user. <br/>
PUT /api/users/:userId/thoughts/:thoughtId: Updates information about a specific thought of a user. <br/>
DELETE /api/users/:userId/thoughts/:thoughtId: Deletes a specific thought of a user. <br/>

<img src="assets/thoughtpost.png">

<img src="assets/getsinglethought">

## Reaction Routes

POST /api/thoughts/:thoughtId/reactions: Adds a reaction to a specific thought. <br/>
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Removes a reaction from a specific thought. <br/>


<img src="assets/deletereaction.png">

## Getting Started

To set up and run the application locally, follow these steps:

Clone the repository: git clone <repository-url> <br/>
Install the dependencies: npm install <br/>
Set up the environment variables by creating a .env file (you can use .env.example as a template) <br/>
Start the application: npm start <br/>
Make sure to replace <repository-url> with the actual URL of the repository. <br/>

Technologies Used
Node.js <br/>
Express.js <br/>
MongoDB <br/>



License
This project is licensed under the MIT License.




