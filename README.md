# MyReads: A Book Tracking App

MyReads is a React application that allows you to select and categorize books you have read, are currently reading, or want to read. The project leverages React's component-based architecture and state management to provide a seamless, interactive user experience.

## 🚀 Features

- **Book Shelves:** Organize your books into three distinct categories:
  - _Currently Reading_
  - _Want to Read_
  - _Read_
- **Real-time Updates:** Move books between shelves using a dropdown menu, with immediate UI updates.
- **Search Functionality:** Search for new books via an API and add them to your collection.
- **Client-Side Routing:** Smooth navigation between the dashboard and the search page without reloading the browser.

## 🛠️ Built With

- [React](https://react.dev/) (v19) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) (v7) - Declarative routing for React applications
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling for ultra-fast builds and hot module replacement (HMR)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need Node.js and a package manager (npm, yarn, or pnpm) installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gandrica/Udacity_React_MyReadsApp.git
   cd myreadsapp
   ```

2.Install the dependencies:

```bash
npm install
```

3.Start the development server:

```bash
npm run start
```

4.Open your browser and navigate to the local URL provided in your terminal (usually http://localhost:5173)

📜 Available Scripts
In the project directory, you can run the following scripts provided by Vite:

    npm run start: Starts the development server with Hot Module Replacement (HMR).

    npm run build: Builds the app for production to the dist folder. It bundles React in production mode and optimizes the build for the best performance.

    npm run preview: Boots up a local static web server that serves the files from dist to preview your production build locally.

    npm run lint: Runs ESLint to analyze your code and find potential errors or formatting issues.

Project Structure

├── src/
│ ├── api/ # API interaction logic (BooksAPI)
│ ├── components/ # Reusable UI components (Book, BookShelfChanger, etc.)
│ ├── context/ # React Context providers (if applicable)
│ ├── pages/ # Route components (DashboardPage, SearchPage)
│ ├── App.jsx # Main application layout and routing
│ └── main.jsx # React DOM entry point
├── public/ # Static assets
├── package.json # Project metadata and dependencies  
└── vite.config.js # Vite configuration
