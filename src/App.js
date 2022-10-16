import logo from './logo.svg';
import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";

function App() {
  


function Home() {
  return (
    <div>
      <h2>This is Home page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is About page</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>This is Contact page</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
       <Link to="/">Empty, go to home page</Link>
    </div>
  );
}
  return (
    <div className="App">
      <header className="App-header">
        Welcome to React Router
       </header>
       <BrowserRouter>
       <Link to="/"> Home </Link>{' '}
       <Link to="/about"> About </Link>{' '}
       <Link to="/contact">Contact</Link>{' '}
       <Routes>
        <Route exact path="/"element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="*"element={<NotFound />} />
        </Routes>
       </BrowserRouter>
        
     
      
    </div>
  );
}

export default App;
