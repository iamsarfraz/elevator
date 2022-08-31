import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Indian Lift</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent />
    </div>
  );
}

export default App;
