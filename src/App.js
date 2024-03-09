import './App.css';
import Nav from './Components/Nav/Nav'
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav></Nav>
      <main>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HeroesFeatured />} />
            <Route path="/hero/:id" />
          </Routes>
        </div>
      </main>
      <footer></footer>
    </Router>
    </>
  );
}

export default App;
