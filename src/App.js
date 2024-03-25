import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import StickyButtons from './components/Sticky';


function App() {
  return (
    <>
      <Navbar />
      <StickyButtons />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} /> 
      <Route exact path="/products/:id" component={Product} /> 
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Home />
    </Switch>
    </>
  );
}

export default App;
