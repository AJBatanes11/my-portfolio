import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Footer from './components/footer';
import { PopupModal } from './components/sections/custom-snippets';

function App() {
  return (
    <div className="App">
      <PopupModal />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
