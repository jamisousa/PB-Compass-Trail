import './App.css';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Navigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
      <div>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </div>

  );
}

export default App;
