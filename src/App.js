import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./layouts/Layout";
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  return (
    <div>

    {/* <MainNavigation/> */}
    <Layout>
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
    </Layout>
    </div>
  );
}

export default App;
