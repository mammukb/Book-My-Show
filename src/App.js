//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Axios
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./Components/Pages/MoviePage";
import Plays from "./Components/Pages/plays.page";

//Components
import HomePage from "./Components/Pages/Home.Page";

//axios defALT SETTINGS
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
