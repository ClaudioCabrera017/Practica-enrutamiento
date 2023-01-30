import './App.css';
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import Casa from './Casa';
import Numero from './Numero';
import Hola from './Hola';
import Holacolor from './Holacolor';

function App() {
  return (
    <BrowserRouter>
      
      <Link to="/home">1. Home</Link>{" | "}
      <Link to="/number/1">2. Number</Link>{" | "}
      <Link to="/hello">3. Hello</Link>{" | "}
      <Link to="/hello/blue/red">4. Hello Color</Link>

      <Routes>
        <Route path="/home"><Casa /></Route>
        <Route path="/number/:number" render={(routeProps) => <Numero />} />
        <Route path="/:hello/:color/:background" render={(routeProps) => <Hola  />} />
        <Route path="/:hello/:message" render={(routeProps) => <Holacolor  />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
