import React from 'react'
import { Button, Card, Header, Image, MainContainer } from './Cards.style';
import defaultImage from '../../assets/default-image.jpg';
import { useNavigate } from "react-router-dom";


const Cards = ({recipes}) => {
    const navigate =useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => (
        <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImage} />
          <Button onClick={() => navigate("detail", { state: recipe })}>
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
}

export default Cards

//? {recipes.map(({recipe},index) => {recipe} yapmamızın nedeni data da recipes içinde recipe diye bir key olmasından dolayı

//? <Image src={recipe.image || defaultImage }/> default ımage olarak koyduk resmi yoksa bu olsun dıye

//? { state: recipe }, replace:false ile history ı selbılırz.

//? useNavigate için importla-tanımla-kullan!