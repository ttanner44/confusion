import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div clasname="container">
          <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
