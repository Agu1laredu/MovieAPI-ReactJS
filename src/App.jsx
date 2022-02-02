import React from 'react'
import style from './componets/App.module.css'


//routerdom
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import MovieDetails from './pages/MovieDetails';
import Landingpage from './pages/Landingpage';

function App() {
   return (
      <Router>
         <header>
            <Link to="/"><h1 id='tittle' className={style.title}>START MOVIE PLUS</h1></Link>

         </header>
         <main>
            <Switch>
               <Route exact path="/movie/:movieId">
                  <MovieDetails />
               </Route>
               <Route path="/">
                  <Landingpage />
               </Route>
            </Switch>
         </main>
      </Router>
   )
}









export default App

