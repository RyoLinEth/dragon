import './css/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import HeroSelection from './components/Hero';
import GallerySection from './components/GallerySelection';
import StoreSection from './components/StoreSection';
import DragonTokenIntroduction from './components/DragonCoinIntro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Divider />
      <GallerySection />
      <Divider />
      <HeroSelection />
      <Divider />
      <DragonTokenIntroduction />
      <Divider />
      <StoreSection />
      <Divider />
    </div>
  );
}

export default App;
