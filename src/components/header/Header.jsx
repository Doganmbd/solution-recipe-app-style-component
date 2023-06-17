import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>Recipe APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="search"
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((item, index) => {
            return (<option key={index} value={item.toLowerCase()}>{item} </option>);
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
