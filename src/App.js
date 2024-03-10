import './App.css';
import Nav from './Components/Nav/Nav'
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SearchView from './Components/SearchView/SearchView';
import HeroDetails from './Components/HeroDetails/HeroDetails';

function App() {
  return (
    <>
    <Router>
      <Nav></Nav>
      <main>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HeroesFeatured />} />
            <Route path="/search/:name" element={<SearchView />} />
            <Route path="/hero/:id" element={<HeroDetails />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
        </div>
      </footer>
    </Router>
    </>
  );
}

export default App;
