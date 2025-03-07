# DVS Cinema - Movie App

DVS Cinema is a movie application where users can view movie titles and posters. After registering, users can access movie summaries, ratings, and detailed information. Users can register either manually or via Google. Once registered, users can log in and get access to more detailed information. If users visit the site without logging in, they can only see movie titles and posters, but registered users can view summaries and ratings. Additionally, users can click on a movie to access detailed information about it.

[Visit the app here](https://movie-app-kappa-mauve.vercel.app/)

## Features

- **User Registration and Login:**

  - Users can register manually or via Google.
  - Logged-in users can access more content and movie details.
  - Non-logged-in users can only view movie titles and posters.

- **Movie Information:**

  - Non-logged-in users can only see movie titles and posters.
  - Registered and logged-in users can view the summary and rating for each movie.
  - Clicking on a movie reveals more information such as the plot, cast, and genre.

- **Movie Detail Page:**
  - Clicking on a movie shows detailed information, including description, cast, director, genre, and release year.

## Technologies and Libraries Used

The following technologies and libraries are used in the DVS Cinema app:

- **React:** JavaScript library for building user interfaces (UI).
- **Firebase:** Backend service for user registration, login, and management.
- **Axios:** Library for making API calls and fetching data.
- **React Router:** Library for handling navigation between pages.
- **React Toastify:** Library for displaying user notifications.
- **TailwindCSS:** Utility-first CSS framework for styling and layout.

## Features in Detail

- **Registration and Login:**

  - Users can register manually or through Google login. Registered users can log in to access additional content.
  - Firebase Authentication ensures secure login and registration.

- **Movie Listing:**

  - On the homepage, users can see only movie titles and posters if they are not logged in.
  - Logged-in users can also view the summary and ratings of each movie.

- **Movie Detail:**
  - When a user clicks on a movie, detailed information about that movie is displayed. This includes the plot summary, cast, director, genre, and release year.

## Setup and Running Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/username/movie-app-1.git
```

2. **Install dependencies**

```
npm install
```

3. **Start the app**

```
pnpm start
```

## Used Packages

- The following libraries and packages are used in this project:

1. **@headlessui/react -** UI components, especially for interactive elements like modals and dropdowns.
2. **@heroicons/react -** Provides customizable and stylish icons for the app.
3. **axios -** Popular HTTP client for making API requests and fetching data.
4. **firebase -** Cloud-based platform for user authentication and database management.
5. **react -** JavaScript library for building user interface components.
6. **react-dom -** Helper library for rendering React components to the DOM.
7. **react-router-dom -** Used for navigation between pages in a React app.
8. **react-toastify -** A library for showing notifications to the user.
9. **tailwindcss -** Utility-first CSS framework for fast and efficient styling.

### Firebase Configuration

- To connect to Firebase, create a Firebase project and add the necessary configuration to the firebase-config.js file. You can follow the Firebase setup guide.

#### This project is licensed under the MIT License.
