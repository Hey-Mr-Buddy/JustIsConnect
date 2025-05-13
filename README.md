<p align="center">
  <img src="frontend/assets/images/logoPng.png" width="100" alt="Just is Connect logo" />
</p>

<h1 align="center">Just is Connect</h1>

<p align="center"><i>Effortless. Fearless. Just a click away.</i></p>

<p align="center">
  <a href="https://justisconnect.com">🌐 Live Demo</a> •
  <a href="#️-installation">📦 Installation</a> •
  <a href="#️-features">✨ Features</a> •
  <a href="#️-documentation">📚 Documentation</a> •
  <a href="#️-contributing">🤝 Contributing</a>
</p>

---

## 🧠 Introduction

**Just is Connect** is transforming legal access by seamlessly connecting businesses, individuals, and legal professionals. Whether you're a startup navigating compliance, a corporation handling contracts, or an individual seeking legal guidance, our platform ensures quick, reliable, and expert-driven solutions. We simplify legal processes, making them more accessible, efficient, and hassle-free.

Our AI-powered legal assistant provides instant insights tailored to the Indian legal system, answering queries and offering guidance and recommendations, empowering users with knowledge at their fingertips.

Beyond consultations, Just is Connect fosters a thriving legal community, enabling lawyers to expand their reach, collaborate, and grow. With a trusted network of professionals, finding the right legal expertise has never been easier.

Redefining legal help — effortless, fearless, and just a click away. Because the law works best when it works for you.

---

## ⚙️ Installation

### Prerequisites

- Node.js
- MySQL
- Git

### Getting Started

#### Setup MySQL Database:

Open MySQL:

```bash
mysql -u root -p
```

Create a new database for your application:
```bash
CREATE DATABASE myapp;
```

Switch to the myapp database:
```bash
USE myapp;
```

Create the required tables:
```bash
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NULL,
  password VARCHAR(255) NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  account_type VARCHAR(50) NOT NULL
);

CREATE TABLE lawyers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

#### Setup Codebase:

Open Git Bash:

Clone the repository
```bash
git clone https://github.com/Hey-Mr-Buddy/JustIsConnect.git
```
Navigate into the directory
```bash
cd JustIsConnect
```
Configure your environment (edit .env file credentials)
```bash
nano .env
```

Run the app
```bash
nodemon backend/server.js
```

✅ The frontend server should now be running on http://localhost:3000.

✅ Terminal output:  
[nodemon] starting `node backend/server.js`  
Server running at http://localhost:3000  
MySQL connected successfully

---

### ✨ Features
- 🔐 Secure User Authentication
- 🧑‍💼 Lawyer, Firms and Client (Individual, Business) Profile System
- 🛠️ Modular & Extensible Backend (Express + MySQL)


