# Job Tracker - (React + TypeScript + Vite)

This project is a web application designed to help users track the job applications they have submitted. It's built using React, TypeScript, and Vite. Styling is done with Tailwind CSS, and data is persisted in the browser's localStorage.

## ✨ Features

*   **User Authentication (Simulated):** Simple user login check via `localStorage`.
*   **Page Routing:** Navigation between Login and Dashboard pages using `react-router-dom`.
*   **Protected Routes:** Access to the Dashboard is restricted if the user is not logged in.
*   **Navbar:** A navigation bar visible on all pages, displaying the username (if logged in) and logout/login buttons.
*   **Add Job Postings:** Ability to add new job postings (position, company, location, description) via a form.
*   **List Job Postings:** Display of added job postings on the Dashboard.
*   **Delete Job Postings:** Functionality to remove job postings from the list.
*   **Search/Filter Postings:** Real-time filtering of job postings by position, company, or location.
*   **Data Persistence:** Added and deleted job postings are saved in `localStorage`, so they persist even after a page refresh.
*   **Unique IDs:** Each added job posting is assigned a unique ID using `uuid`.

## 🛠️ Tech Stack

*   **Frontend:** React (v19), TypeScript
*   **Build Tool:** Vite
*   **Routing:** React Router DOM (v7)
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint, TypeScript-ESLint
*   **ID Generation:** UUID
*   **Data Storage:** Browser `localStorage`

## 🚀 Getting Started

1.  **Clone the Project:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```
    *(Replace with your GitHub repository URL.)*

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    *(Or `yarn install` if you use Yarn.)*

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will typically run at `http://localhost:5173` (or the port shown in your terminal).

## 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the application in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Serves the production build locally for preview.



## 📝 To-Do / Future Features (Examples)

*   [ ] Implement proper backend integration for user authentication.
*   [ ] Add more fields to job postings (e.g., date applied, status - interviewed, offer, etc.).
*   [ ] Feature to edit existing job postings.
*   [ ] Advanced filtering and sorting options.
*   [ ] Write tests (Unit/Integration).
*   [ ] Evaluate global state management solutions (Context API, Zustand, Redux, etc.).

---

This English version should serve you well! Remember to replace the placeholder `git clone` URL with your actual GitHub repository URL. You can also add screenshots if you like, using Markdown syntax: `![Screenshot Description](path/to/image.png)`.

How does this look? Anything you'd like to add or change? 😊