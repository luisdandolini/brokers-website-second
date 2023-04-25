import './App.css';
import HighlightsSecond from './components/HighlightsSecond';
import AboutSecond from './components/AboutSecond';
import FooterSecond from './components/FooterSecond';
import ImobilesSecond from './components/ImobilesSecond';

function App() {
  return (
    <>
      <main>
        <HighlightsSecond />
        <AboutSecond />
        {/* <ImobilesSecond /> */}
      </main>
      <FooterSecond />
    </>
  );
}

export default App;
