import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import MainNavigation from './layouts/MainNavigation';

import './App.css';

function App() {
  return (
    <div>

    <MainNavigation/>
    <Switch>{/*if not used then we get nested pages */}
      <Route path='/' exact> {/* similar to pathMatch in Angular */}
        <AllMeetupsPage />
      </Route>

      <Route path='/newmeetups'>
        <NewMeetupsPage />
      </Route>
      
      <Route path='/favorites' >
        <FavoritesPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
