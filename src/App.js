import './App.css';
import HeaderSecond from './components/HeaderSecond';
import HighlightsSecond from './components/HighlightsSecond';
import SearchSecond from './components/SearchSecond';
import AboutSecond from './components/AboutSecond';
import FooterSecond from './components/FooterSecond';

function App() {
  return (
    <>
      <HeaderSecond />
      <main>
        <SearchSecond />
        <HighlightsSecond />
        <AboutSecond />
      </main>
      <FooterSecond />
    </>
  );
}

export default App;
