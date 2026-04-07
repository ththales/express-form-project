# Express Form Project

Simple backend project built with Node.js and Express to handle form submissions, hash passwords securely, and store user data in a file.

---

## 📌 Features

* Receive form data via POST request
* Parse request body using middleware
* Hash passwords securely with bcrypt
* Store user data in a `.txt` file
* Basic Express server setup

---

## 🛠️ Technologies

* Node.js
* Express
* bcrypt
* body-parser
* fs (File System)

---

## 📂 Project Structure

```
express-form-project/
│
├── public/
│   └── index.html
│
├── log.txt
├── index.js
├── package.json
└── README.md
```

---

## ▶️ How to Run

1. Clone the repository:

```
git clone https://github.com/your-username/express-form-project.git
cd express-form-project
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
node index.js
```

or (recommended):

```
nodemon index.js
```

4. Open in browser:

```
http://localhost:3000
```

---

## 🔐 Security Note

Passwords are hashed using bcrypt before being stored.
This ensures that sensitive data is not saved in plain text.

---

## ⚠️ Disclaimer

This is a learning project and not intended for production use.
In real applications, a database and proper authentication system should be used.

---

## 🚀 Maybe later...

* Store data in JSON or database (MongoDB, PostgreSQL)
* Add input validation
* Implement login system with password verification
* Improve frontend UI

---

## 👨‍💻 Author

Developed as a backend learning project using Node.js and Express.
