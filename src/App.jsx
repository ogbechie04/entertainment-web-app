import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import TvSeriesPage from "./pages/TvSeriesPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BookmarkPage from "./pages/BookmarkPage";
import BookmarkProvider from './components/BookmarkContext';

function App() {
  return (
    <>
      <BookmarkProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tv-series" element={<TvSeriesPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
          </Routes>
        </Router>
      </BookmarkProvider>
    </>
  );
}

export default App;
