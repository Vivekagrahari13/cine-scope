# CineScope

A movie browsing app built with React as part of a two-week React bootcamp. Browse popular movies from TMDB, build a watchlist, and search, sort and filter it.

## Features

- **Trending movies** with posters, fetched from the TMDB API
- **Pagination** to move between pages of results
- **Watchlist**: add a movie with the 😍 icon on its card, remove it with ❌
- **Persistent watchlist**: saved in `localStorage`, so it survives a page refresh
- **Watchlist table** with poster, rating, popularity and genre
- **Search** the watchlist by movie name
- **Sort** the watchlist by rating, ascending or descending
- **Genre filter** built from the genres in your watchlist
- **Delete** a movie directly from the watchlist table
- **Routing** between Movies and Watchlist pages

## Tech Stack

- [React](https://react.dev) 19 with [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) 4
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com) for API calls
- [TMDB API](https://developer.themoviedb.org) for movie data
- Font Awesome for icons

## Concepts Practised

- `useState` and `useEffect`, including the dependency array and avoiding infinite re-renders
- Lifting state up and passing state and handlers as props
- Controlled inputs for search
- Array methods (`filter`, `map`, `sort`) for search, sort and genre filter
- Persisting state with `localStorage`
- Deriving values during render instead of storing them in state

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Project Structure

```
src/
  components/
    Banner.jsx       # hero banner on the home page
    Navbar.jsx       # navigation links
    Movies.jsx       # fetches and lists movies, handles pagination state
    MovieCard.jsx    # single movie card with add/remove icon
    Pagination.jsx   # previous / next controls
    WatchList.jsx    # watchlist table with search, sort and genre filter
  utils/
    genres.js        # TMDB genre id -> name lookup
  App.jsx            # routes and watchlist state
```

## Roadmap

- Move the TMDB API key to an `.env` file
- Share watchlist state with the Context API
- Deploy the app
