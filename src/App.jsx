import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'

// Get basename for GitHub Pages deployment
const basename = import.meta.env.PROD ? '/Hunger_Express' : ''

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

