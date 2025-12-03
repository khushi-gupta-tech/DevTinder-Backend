DevTinder App — Backend

This is the backend API for the dating application.

Built with Node.js, Express, MongoDB, Socket.IO, and Razorpay.

Provides authentication, user management, feed system, requests, connections, chat, and premium membership APIs.

🚀 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

Socket.IO

JWT Authentication

Razorpay Payment Gateway



Features:-

-> Authentication (JWT + HttpOnly Cookies)

Signup

Login

Logout

Authorization middleware

-> User Management

Edit profile

Upload profile photo

Update preferences

Get user profile

-> Feed System

Get suggested profiles

Send interest

Ignore user

-> Requests

View received requests

Accept request

Reject request

-> Connections

Get all confirmed connections

-> Real-time Chat

Socket.IO room system

Live message broadcasting

Store chats in MongoDB

Get chat history

-> Premium Membership

Razorpay order creation

Razorpay payment verification

Mark user as premium

# DevTinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH/profile/password   // forgot password api

## connectionRequestRouter
- POST /request/send/:status/:userId
- POST/ request/review/:status/:requestId


## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed

🚀 Installation & Setup

1️⃣ Clone repo

git clone https://github.com/your-username/dating-app-backend.git

cd dating-app-backend

2️⃣ Install dependencies

npm install

3️⃣ Start server

npm run dev


