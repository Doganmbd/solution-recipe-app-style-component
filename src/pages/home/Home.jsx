import axios from "axios";
import  /* useEffect */{ useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);

  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_appId
  const APP_KEY = process.env.REACT_APP_apiKey 

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
        /*     console.log(data);
      console.log(data.hits);
      console.log(recipes) */
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };

  /*   useEffect(() => {
    getData();
  }, []); */

  console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg}></HomeImg>
        </ImgDiv>
      )}
      {recipes?.length === 0 && <HeaderText>The Food can not be found</HeaderText>}

      {recipes?.length > 0 && <Cards recipes={recipes} />}

      
    </div>
  );
};

export default Home;
