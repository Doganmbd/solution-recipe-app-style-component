import  {
  Button,
  CardSty,
  Header,
  Image,
  MainContainer,
} from "./Cards.style";
import defaultImage from '../../assets/default-image.jpg';
import {useNavigate} from "react-router-dom"

const Cards = ({ recipes }) => {
  const navigate = useNavigate()
  return (
    <div>
      <MainContainer wrap="wrap">
        {recipes.map(({ recipe }, index) => {
          return (
            <CardSty key={index}>
              <Header>{recipe.label}</Header>
              <Image src={recipe.image || defaultImage } />
              {/* Navigate içinde veri göndermek istersek içine obje içinde key i state olacak şekilde veri gönderebilirz.replace ise history i silebiliriz. */}
              <Button onClick={()=> navigate("/detail" , {state:recipe ,replace: false })}>
                View More
              </Button>
            </CardSty>
          );
        })}
      </MainContainer>
    </div>
  );
};

export default Cards;
