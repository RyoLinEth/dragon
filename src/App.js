import './css/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import HeroSelection from './components/Hero';
import GallerySection from './components/GallerySelection';
import StoreSection from './components/StoreSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Divider />
      <HeroSelection />
      <Divider />
      <GallerySection />
      <Divider />
      <StoreSection />
      <Divider />
    </div>
  );
}

export default App;
