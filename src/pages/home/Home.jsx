import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  // const APP_ID = "4e9f05eb";
  // const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        // console.log(data);
        // console.log(data.hits);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };
  console.log(recipes);

  // useEffect(() => {
  //  getData()
  // }, [])
  //? gete DATA aşağıya gıtmesı HEADER agitmesi lazım.

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
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;

//? query -delected data dan gelen değerler oldugu iöin bunlar degıkenler ve state ıle cağrılması lazım.

//? ilkinde veri gelemeycek state lerin içini doldur egg- breakfast yaz glecek. clg yı ıunutma.getdata ıcınde clg yap datayı kontrol et.

//? mealtype ın burada başlangıc degeri için selectedmealtype a vermemız lazım.mealType[0] bunun için burada kalabılır. Hardcode olması ıcın yazıyla eklenebılır.

//? veriçekerken arama yaptıgımız yer boş iken de veri çekiyor. o yuzden bunu engellemek için if mantıgı kuruyoruz. :IF (query)...

//? Aramada eğer bir ürün yoksa boş array [] geliyor. bu işimize yarıyor ve aranan ürün yok diye mesaj yazılabılır. recipes

//?
// {
//   !recipes && (
//     <ImgDiv>
//       <HomeImg src={homeSvg} />
//     </ImgDiv>
//   );
// }
// {
//   recipes.length === 0 && <HeaderText>The food can not be found</HeaderText>;
// }
// <Cards recipes={recipes} />;
//? recipes aynı anda gelıyor o yuzden başlangıc degerını null yaptık.null olunca !recipes true oluyor ve ılk condıtıonal durumuna a gırıyor. IMG geliyor.

//? biz recipe nın başlangıc degerını null yapmıştık ve birçok veriniz varsa ve null olma ihtimalınız varsa ? optinial chancıng kuallnılırsın. recipes?.lenght   = recipe varsa length e bak o

//? condıtıonla lar için tek tek shorcırcuıt ıle yapmak daha mantıklı yoksa therany cok içice oluyor.


//? api key ve apı url yi .env ye atmak için APP_URL yaprık. ana dızınde  .env dosyası actık.//! projeyı durdur ve tekrar baslat yoksa env calısmaz!!!!

//? nodule modules ı cıkar prıvate oalrak gıthup a pusla orafan netlıfy ya yukle. netlify a gonderirsek env yı okumaz ve netlify a gıdıp edit environment e app ıd app key leri girmemiz lazım. tekrar deploy yaptıktan sonra o zaman proje calısır