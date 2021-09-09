<template>
  <div class="special">
    <b-container fluid id="nMenu">
      <div class="nMenufirst">
        <div class="title">
          <div class="hr"></div>
          <h3>ОСОБЫЙ</h3>
          <div class="hr"></div>
        </div>
        <ul>
          <li>
            <router-link to="/" exact>ГЛАВНАЯ</router-link>
          </li>
          <li>ОСОБЫЙ</li>
        </ul>
      </div>
    </b-container>

    <b-container fluid id="specialFoood">
      <div class="specialTitle">
        <h2>
          Приходите получать вкус лета с им new искривлений омара и креветки.
        </h2>
      </div>
      <div class="specialRow">
        <div class="specialBlock">
          <img src="../assets/specials-4-370x315.jpg" alt="Food" />
          <a href="#">Гигантские Гребешки Мэн и Дикая Белая Креветка</a>
          <p>
            Испанский Шафран, Детская Капуста & Fennel Confit Risotto, Чип
            Crispy Pancetta
          </p>
        </div>
        <div class="specialBlock">
          <img src="../assets/specials-6-370x315.jpg" alt="Food" />
          <a href="#">Лосось Короля " la Plancha"</a>
          <p>
            Зажарившее Tropical Fruit Chutney, Jasmine Рисовая, Жареная
            Фисташка, Масло Lemongrass- Gewurztraminer
          </p>
        </div>
        <div class="specialBlock">
          <img src="../assets/specials-5-370x315.jpg" alt="Food" />
          <a href="#">Жареная Органическая Растительная Башня</a>
          <p>
            Опалившее Тофу, Creamed Шпината, Гриб Portobello, Баклажан,
            Zucchini, Красный Лук, Обгорелый Томат Фамильного сокровища и Basil
            Coulis
          </p>
        </div>
      </div>
      <div class="specialRow">
        <div class="specialBlock">
          <img src="../assets/specials-6-370x315.jpg" alt="Food" />
          <a href="#">Лосось Короля " la Plancha"</a>
          <p>
            Зажарившее Tropical Fruit Chutney, Jasmine Рисовая, Жареная
            Фисташка, Масло Lemongrass- Gewurztraminer
          </p>
        </div>
          <div class="specialBlock">
          <img src="../assets/specials-5-370x315.jpg" alt="Food" />
          <a href="#">Жареная Органическая Растительная Башня</a>
          <p>
            Опалившее Тофу, Creamed Шпината, Гриб Portobello, Баклажан,
            Zucchini, Красный Лук, Обгорелый Томат Фамильного сокровища и Basil
            Coulis
          </p>
        </div>
        <div class="specialBlock">
          <img src="../assets/specials-4-370x315.jpg" alt="Food" />
          <a href="#">Гигантские Гребешки Мэн и Дикая Белая Креветка</a>
          <p>
            Испанский Шафран, Детская Капуста & Fennel Confit Risotto, Чип
            Crispy Pancetta
          </p>
        </div>
      </div>
    </b-container>
    <b-container fluid class="biz" style="padding-top: 0px;">
      <a href="#">
        <div class="bizImg">
          <img
            src="http://demo.eskiz.uz/demo207/uploads/specials-7-1170x325.jpg" class="img" alt=""/>
          <div class="bizImgHreft">
            <img src="../assets/banner-img-1.png" alt="" />
            <a href="#">See what's  -<br /> for dinner</a>
          </div>
        </div>
      </a>
    </b-container>
    <hr>
  </div>
</template>

<script>
export default {};
</script>

<style>
 .special{
   overflow: hidden;
 }
 .special hr{
  max-width: 1200px;
  width: 100%;
  background: #9b9b9b;
  margin: 50px auto;
 }
 .special .specialTitle{
   max-width: 550px;
   width: 100%;
   margin: 40px auto;
 }
  .special .specialTitle h2{
    color: white;
    text-align: center;
    font-family: "Merriweather", serif;
    font-size: 35px;
  }
  .special .specialRow{
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .special .specialRow .specialBlock{
    max-width: 370px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0;
    color: white;
  }
  .special .specialRow .specialBlock img{
    width: 100%;
  }
  .special .specialRow .specialBlock a{
    height: 51px;
    font-size: 18px;
    font-family: "Merriweather", serif;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    margin: 20px 0;
  }
  .special .specialRow .specialBlock a:hover{
    color: #e0ca8f;
  }
  .special .specialRow .specialBlock p{
    color: #9b9b9b;
    font-size: 13px;
    text-align: center;
    overflow: hidden;
  }
@media screen and (max-width: 1150px){
   .special .specialRow{ 
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .special .specialRow .specialBlock:nth-child(1){
    margin-right: 10px;
  }
  .special .specialRow .specialBlock:nth-child(2){
    margin-left: 10px;
  }
  .special .specialRow .specialBlock:nth-child(3){
    margin-top: 20px;
  }
}
@media screen and (max-width: 800px){
  .special .specialRow{ 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .special .specialRow .specialBlock{
    margin: 30px 0 0 0 !important;
  }
}
@media screen and (max-width: 400px){
  .special .specialTitle h2{
    font-size: 25px;
  }
}
@media screen and (max-width: 270px){
  .special .specialTitle h2{
    font-size: 20px;
  }
  .special .specialRow .specialBlock a{
    font-size: 15px;
  }
}
@media screen and (max-width: 215px){
  .special .specialRow .specialBlock a{
    font-size: 13px;
    height: auto;
  }
}
</style>
