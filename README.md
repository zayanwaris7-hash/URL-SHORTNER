---
# 🔗 URL-ShortnerURL-Shortner:
---
 is a robust, full-stack web application designed to simplify link sharing. By transforming long, complex URIs into concise, unique identifiers, it provides a streamlined experience for users and developers alike. This project serves as a comprehensive example of a Node.js and React monorepo integration.
 
 ---
  ## 🚀 Key FeaturesReliable Shortening:
--- 
Converts any URL into a unique 8-character code.Modern
### Path Handling:
Engineered to handle full URIs within request parameters using "greedy" routing, preventing common server crashes.High-
### Speed Lookups:
Utilizes MySQL UNIQUE indexing to ensure that redirections happen in constant time ($O(1)$), regardless of database size.
### Responsive Interface: 
A clean, intuitive React frontend that provides real-time feedback and easy "copy-to-clipboard" functionality.
### Secure Data Flow:
Implements JSON-based POST requests to safely transport long URLs without breaking browser address bars.🛠️ Tech ### StackFrontendReact.js: 
Component-based architecture with modern State and Effect hooks.Fetch API: Robust asynchronous communication with the 
### backend.Tailored CSS: 
Clean, mobile-first styling for a professional look and feel.
### BackendNode.js (v24):
Built on the latest stable runtime for maximum performance.
### Express.js:
Advanced routing configuration to handle special characters and nested slashes.
### MySQL:

Optimized relational database schema for reliable link persistence.

---
## 📁 Project Structure:
---
This repository uses a monorepo structure to keep the entire ecosystem in one place:
```text
Plaintext/
├── front-end/           # React frontend application
│   ├── src/
│   └── .gitignore       # Frontend-specific exclusion rules
├── back-end/            # Express.js API
│   ├── controllers/
│   ├── models/
│   └── .gitignore       # Backend-specific exclusion rules
└── .gitignore           # Root-level master ignore file
```
---
## ⚙️ Installation & Setup1. Database SetupInitialize your MySQL instance with the following schema:SQLCREATE DATABASE urls_db;
---

USE urls_db;

CREATE TABLE urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    original_url VARCHAR(1000),
    short_url VARCHAR(8) UNIQUE NOT NULL,
    INDEX idx_short (short_url)
);

## 2. Backend SetupBashcd back-end

npm install
npm start

## 3. Frontend SetupBashcd front-end

npm install
npm run dev

---
## 💡 Technical Challenges SolvedThe PathError Hurdle: 
---
Fixed critical routing errors caused by passing raw URLs in the path. Solved by migrating to POST-based JSON bodies and implementing encodeURIComponent logic.Database Constraints: Resolved "Data too long" errors by optimizing MySQL column widths and implementing proper VARCHAR scaling.State Synchronization: Managed the asynchronous nature of the Fetch API to ensure the UI updates only after the database has successfully confirmed the new link.
