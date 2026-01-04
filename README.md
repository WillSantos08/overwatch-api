# 🎮 Overwatch 2 Hero Randomizer

![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![Render](https://img.shields.io/badge/Deploy-Render-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A full-stack project for **randomly selecting Overwatch 2 heroes**, consisting of:

- ⚙️ A **REST API** built with Node.js and Express
- 🎨 A **front-end interface** built with Bootstrap 5, Font Awesome, and SASS
- ☁️ Deployed and ready for production usage

This project was developed for **learning purposes, portfolio demonstration, and practical experience with APIs and front-end integration**.

---

## 🧠 Project Overview

### API Features
- Random hero selection
- Filter by class: `tank`, `dps`, `support`
- Returns hero image and official Blizzard page
- Static image serving
- Default image (`unknown.png`) before selection

### Front-end Features
- Animated hero roulette
- Class selector
- Responsive UI (Bootstrap 5)
- Font Awesome icons
- SASS-based styling
- API consumption via Fetch API

---

## 📁 Repository Structure

```
/
├── api/
│   ├── src/
│   │   ├── data/
│   │   │   └── heroes.json
│   │   ├── routes/
│   │   │   └── heroes.routes.js
│   │   ├── app.js
│   │   └── server.js
│   └── public/
│       └── images/
│           ├── unknown.png
│           └── heroes/
│               └── *.png
│
└── frontend/
    ├── index.html
    ├── js/
    │   └── main.js
    ├── scss/
    │   └── style.scss
    └── css/
        └── style.css
```

---

## 🚀 API Documentation

### Base URL
```
https://overwatch-api-h7yf.onrender.com/
```

### Health Check
```http
GET /
```

### Random Hero
```http
GET /random-hero
```

### Random Hero by Class
```http
GET /random-hero?class=tank
GET /random-hero?class=dps
GET /random-hero?class=support
```

### Example Response
```json
{
  "name": "Tracer",
  "class": "dps",
  "image": "/images/heroes/tracer.png",
  "url": "https://overwatch.blizzard.com/heroes/tracer"
}
```

---

## 🖼️ Static Images

- Default image:
```
/images/unknown.png
```

- All hero images are served directly by the API.

---

## 🔐 Environment Variables

| Variable | Description |
|--------|------------|
| PORT | Server port (automatically set in production) |

Example:
```js
const PORT = process.env.PORT || 3000;
```

---

## 🛠️ Running Locally

### API
```bash
cd api
npm install
npm start
```

### Front-end
Open `frontend/index.html` in your browser  
(or serve it with Live Server)

---

## 🎨 SASS Compilation

```bash
sass scss/style.scss css/style.css --watch
```

---

## ☁️ Deployment

- **API** deployed on **Render**
- **Front-end** ready for deployment on **Vercel** or **Netlify**

---

## 📌 Future Improvements

- Prevent hero repetition
- Add hero list endpoint
- Circular roulette animation
- Convert front-end to React
- Unit and integration tests

---

## 👨‍💻 Author

Developed by **William Santos de Santana**  
Computer Science student  
Focused on **web development, APIs, and front-end engineering**

---

## 📜 License

This project is licensed under the **MIT License**.
