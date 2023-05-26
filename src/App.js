

//HOC
   import DefaultHOC from "./HOC/Default.HOC";

   // Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

   //Components
   import HomePage from "./Components/Pages/Home.Page";


function App() {
 
  return (
    <>
      <DefaultHOC path="/"  exact  component={HomePage}   />
    </>
  );
}

export default App;
