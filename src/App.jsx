import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
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
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
