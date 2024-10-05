import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import TvSeriesPage from './pages/TvSeriesPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
// import Bookmark from './components/Bookmark'
// import CustomButton from './components/CustomButton'
// import MovieCard from './components/MovieCard'
// import NavBar from './components/NavBar'
// import SearchBar from './components/SeachBar'
// import TrendingCard from './components/TrendingCard'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/tv-series' element={<TvSeriesPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
