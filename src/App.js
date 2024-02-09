import './App.css';
import MouseCursor from './components/sections/mouse-cursor';
import Navigation from './components/navigation';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <MouseCursor />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
