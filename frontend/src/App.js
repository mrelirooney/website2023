import './styles/App.css';
import './styles/home.scss';
import './styles/photos.scss';
import './styles/videos.scss';
import './styles/resume.scss';
import './styles/about.scss';
import Routers from './Router';
import Footer from './Footers'
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routers />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
