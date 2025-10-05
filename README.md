# 🎥 Movie Nexus — React Movie Search App

Movie Nexus is a fully responsive web application built with **React**, **TypeScript**, and **TailwindCSS**.  
It allows users to search for movies using the **OMDb API**, view a list of results, and explore detailed information about each movie — all with optimized performance and clean, maintainable code.

---

## 🌍 Live Demo & Repository

🔗 **Deployed App:** [https://68e2e4f00f878692c92f7368--movie-nexus.netlify.app/](https://68e2e4f00f878692c92f7368--movie-nexus.netlify.app/)  
💻 **GitHub Repository:** [https://github.com/your-username/movie-app](https://github.com/your-username/movie-app)

---

## 🧩 Project Overview

This project was created as part of a **Frontend coding exercise** for Nexus Analytica.  
It focuses on writing **clean, maintainable, and performant React code** with attention to **UI responsiveness**, **API efficiency**, and **error handling**.

### 🎯 The app demonstrates:
- Clean component-based architecture using React + TypeScript.
- Efficient API handling with Axios and React Query.
- Debounced search to prevent excessive API calls.
- Responsive layout using TailwindCSS.
- Error handling and loading states.
- Reusable UI components for scalability.

---

## 🎬 Features

- 🔍 **Movie Search:** Search any movie by title using OMDb API.  
- 🧭 **Movie Details:** View a movie’s title, year, genre, director, and poster.  
- 🧱 **Reusable Components:** Buttons, inputs, and message components are modular.  
- ⚡ **Optimized Performance:** Implemented debouncing and React optimization hooks.  
- 📱 **Responsive Design:** Works seamlessly across mobile, tablet, and desktop.  
- 🚨 **Error & Empty States:** Gracefully handles missing data or failed requests.  

---

## 🗂️ Folder Structure

<pre>
src
│
├── api
│   └── movie.ts
│
├── assets
│   ├── logo.png
│   ├── no-poster-available.jpg
│   └── react.svg
│
├── components
│   ├── cards
│   │   └── MovieCard.tsx
│   │
│   ├── common
│   │   ├── DetailMovieRow.tsx
│   │   ├── Logo.tsx
│   │   ├── Pagination.tsx
│   │   └── StatusMessage.tsx
│   │
│   └── reusable
│       ├── ReusableBtn.tsx
│       └── ReusableInput.tsx
│
├── pages
│   ├── MovieDetails.tsx
│   └── Movies.tsx
│
├── types
│   └── moviesTypes.ts
│
├── utils
│   ├── consts.tsx
│   └── schema.ts
│
├── App.tsx
├── index.css
└── main.tsx
</pre>

📸 **Folder Structure Preview:**  
![Folder Structure](./aaaaaa.png)

---

## ⚙️ Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| Framework | React 19 |
| Language | TypeScript |
| Routing | React Router DOM 7 |
| Data Fetching | React Query + Axios |
| Forms | Formik + Yup |
| Styling | TailwindCSS |
| Build Tool | Vite |
| Linting | ESLint |

---

## 🧠 Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/randa-11295/Movie-App.git
cd movie-app
