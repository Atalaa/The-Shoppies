import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NewMovies from "../pages/NewMovies";
import Movies from "../pages/Movies";
import Nominees from "../pages/Nominees";
import NotFound from "../pages/NotFound";
import Container from "@material-ui/core/Container";
import SimpleBottomNavigation from "../components/SimpleBottomNavigation";
import "../styles/app.css";
import "animate.css";

const App = () => {
  const [nominees, setNominees] = useState([]);
  const location = useLocation();

  //Check if I am in Movies router page
  const isMoviesPage = location.pathname.includes("movies");

  useEffect(() => {
    const shoppiesNominees = JSON.parse(
      localStorage.getItem("shoppies-nominees")
    );
    if (shoppiesNominees) {
      setNominees(shoppiesNominees);
    }
  }, []);

  //Save to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("shoppies-nominees", JSON.stringify(items));
  };

  //Add a movie in the nominee list and store it in storage
  const addNominatedMovie = (movie) => {
    const newNomineeList = [...nominees, movie];
    setNominees(newNomineeList);
    saveToLocalStorage(newNomineeList);
  };

  //Remove a movie from the nominee liste and remove it from storage
  const removeNominatedMovie = (movie) => {
    const newNomineeList = nominees.filter((currentNominee) => {
      return currentNominee.imdbID !== movie.imdbID;
    });
    setNominees(newNomineeList);
    saveToLocalStorage(newNomineeList);
  };

  return (
    <>
      <Header nominees={nominees} />

      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/">
              <NewMovies />
            </Route>

            <Route exact path="/movies">
              <Movies
                isMoviesPage={isMoviesPage}
                nominees={nominees}
                handleNomineeClick={addNominatedMovie}
              />
            </Route>

            <Route exact path="/nominees">
              <Nominees
                isMoviesPage={isMoviesPage}
                nominees={nominees}
                handleNomineeClick={removeNominatedMovie}
              />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation nomineesCounter={nominees.length} />
    </>
  );
};

export default App;
