import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style'

const Header = ({setQuery,setSelectedMeal,mealType,getData}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData()

  }

  //? verinin kullanıcnın arma yapmasıyla gelmesi laım useEfeect ile değil. oyüzden formun type  ı submıt olan  SERCAH butonuna bağladık.

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
}

export default Header



///? INPUT takı value yu QUERY  state tine aaktarmak lazım. o yuzden parent t an setQuery setstate tını cagırmak lazım.

//? SELECT içinde optionları oluşturuyoruz. name = mealtype id=mealtype
//? SELECT için mealtype ları map ile dönderiyoruz ve OPTİON ları yapıyoruz.
//? SELECT apiye gidecek veri value oldugu ıcın lowercase yaptık. 