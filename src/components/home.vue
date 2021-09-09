<template>
<div class="home" style="overflow: hidden;">
   <div class="foodWine">
    <div class="foodWineTitle">
       <h3>Food & wine</h3>
    <p>THE BEST PLACE FOR ANY WINE LOVER TO RELAX AND <br> UNWIND WHILE ENJOYING A GREAT FOOD.</p>
    </div>
    <div class="foodWineHreft">
      <a href="#">сделайте <br> броня  <span><fonts icon="chevron-down"/></span></a>
    </div>
    <div class="foodWineBefore">
      <div class="foodWineHreftTwo">
     <a href="#">пища <br> порядка <span><fonts icon="chevron-down"/></span></a>
   </div>
    </div>
   
  </div>
  
    <VueSlickCarousel :arrows="true" :autoplay="true" :speed="1500" class="karusel">
        <div class="imgOne"></div>
        <div class="imgTwo"></div>
        <div class="imgThree"></div>
   </VueSlickCarousel>
<div class="biz">
  <div class="bizTitle">
    <h3>Мы гордо обслуживаем знаменитое вино <br>и локальная органическая пища.</h3>
    <p>Мы представляем новые культуры посетителям через кухни различных стран, <br>предлагая специальное блюдо для всех независимо от их <br>продовольственных предпочтений.</p>
    <div class="hr"></div>
  </div>
  <a href="#">
    <div class="bizImg">
    <img src="http://demo.eskiz.uz/demo207/uploads/specials-7-1170x325.jpg" class="img" alt="">
    <div class="bizImgHreft">
      <img src="../assets/banner-img-1.png" alt="">
      <a href="#">Смотри что -<br>для обеда</a>
    </div>
  </div>
  </a>
  <div class="bizHreftlar">
    <div class="bizHreft">
      <div class="bizIcon">
        <fonts icon="chevron-down"/>
      </div>
    <a href="#">СВЕЖИЙ ЛОВИТЬ КЛУБ</a>
    <p>Соединение, чтобы получать свободную закуску или десерт.</p>
  </div>
   <div class="bizHreftTwo">
    <div class="bizIcon">
        <fonts icon="chevron-down"/>
      </div>
    <a href="#">НАША КАРТА ДАРА</a>
    <p>Дар (подарок) так хороший, Вы будете искушены держать это. </p>
  </div>
  </div>
   <div class="hr"></div>
</div>
<div class="homeMenu">
  <div class="homeMenuTitle">
    <h1>Наше меню</h1>
  </div>
  <div class="homeMenuBlocklar">
    <div class="homeMenuBlock">
      <div class="homeMenuImg">
        <img src="../assets/index-2-370x367.jpg" alt="lencha">
        <div class="homeMenuImgTitle">
        <h6>МЕНЮ ЛЕНЧА</h6>
        </div>

      </div>
      <ul>
        <li>
          <p>Хрустящие Шпроты</p>
          <span>$3.95 Британские скругления шпроты, чеснока aioli</span>
        </li>

           <li>
          <p>lorem</p>
          <span>Lorem ipsum dolor sit amet.</span>
        </li>

         <li>
          <p>lorem</p>
          <span>Lorem ipsum dolor sit amet.</span>
        </li>

        <li>
          <p>lorem</p>
          <span>Lorem ipsum dolor sit amet.</span>
        </li>

          <li>
          <p>lorem</p>
          <span>Lorem ipsum dolor sit amet.</span>
        </li>
      </ul>
    </div>
    <div class="homeMenuBlockTwo">
      <div class="homeMenuImg">
        <img src="../assets/index-3-370x367 (1).jpg" alt="">
        <div class="homeMenuImgTitle">
                  <h6>МЕНЮ ОБЕДА</h6>
        </div>
      </div>
      <ul>
        <li>
          <p>Хрустящие Шпроты</p>
          <span>$3.95 Британские скругления шпроты, чеснока aioli</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
      </ul>
    </div>
       <div class="homeMenuBlockThree">
      <div class="homeMenuImg">
        <img src="../assets/index-4-370x367 (1).jpg" alt="">
        <div class="homeMenuImgTitle">
                  <h6>МЕНЮ ДЕСЕРТОВ</h6>
        </div>

      </div>
      <ul>
        <li>
          <p>Хрустящие Шпроты</p>
          <span>$3.95 Британские скругления шпроты, чеснока aioli</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <p>Lorem ipsum</p>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
      </ul>
    </div>
  </div>
</div>
 
 <div class="clients">
   <div class="clientsTitle">
     <h3>Обслуживая наших клиентов, и обеспечивая нашу тонкую пищу и услугу, <br>
        допускает нас в главный изящный и успешный <br>
        год событий после года.</h3>
   </div>
   <div class="clientsUl">
     <ul>
       <li>
         <div>
            <span>8648</span>
            <p>Клиенты обслужены</p>
         </div>
      </li>
      <li>
        <div>
            <span>45</span>
            <p>Повара & официанты</p>
        </div>
      </li>
      <li>
        <div>
            <span>140</span>
            <p>Блюда в меню</p>
        </div>
      </li>
      <li>
        <div>
            <span>87</span>
            <p>Напитки</p>
        </div>
      </li>
     </ul>
   </div>
   <div class="clientsBlocks">
      <div class="clientsBlock">
            <div class="icon">
               <div class="hr"></div>
              <fonts icon="chevron-down" class="chevron-down"/>
               <div class="hr"></div>
            </div> 
            <a href="#">МАГАЗИН ВИНА</a>
              <div class="text">
             <p>Выбор - Качество & Величина; Услуга - Экспертный & Персональный; Вино Tastings - Попытка это, Покупает это; Шкафчики Вина -  Хранение Вина; Клубы Вина & Даров (подарок) Вина</p>
              </div>
          <hr class="hr_before">
      </div>
       <div class="clientsBlock">
            <div class="icon">
               <div class="hr"></div>
              <fonts icon="chevron-down" class="chevron-down"/>
               <div class="hr"></div>
            </div> 
            <a href="#">КЛУБ ВИНА</a>
              <div class="text">
             <p>insightful И иногда забавный вкус примечаний написанные Harry Parker обеспечивают острое, описательное проникновение на которое Вы можете пробовать и опыт как Вы наслаждаетесь винами.</p>
              </div>
          <hr class="hr_before">
      </div>
      <div class="clientsBlock">
             <div class="icon">
                <div class="hr"></div>
              <fonts icon="chevron-down" class="chevron-down"/>
                <div class="hr"></div>
            </div> 
            <a href="#">ПУТЕШЕСТВИЯ ВИНА</a>
              <div class="text">
             <p>Вино. It`s Одно из слова в нашем имени и центр всех мы делаем. Возьмите путешествие через наше средство хранения современного вина и делайте приобретением в нашем вине делать покупки.</p>
              </div>
          <hr class="hr_before">
      </div>
   </div>
 </div>

  <div class="homeMaps">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.2128389125755!2d70.95985281476665!3d40.536886656247965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baef867427e2c1%3A0xaa5d8bbb9bee93!2sLife%20Tech!5e0!3m2!1sen!2s!4v1629454669779!5m2!1sen!2s" width="600" height="450" style="border:0; width: 100%; overflow: hidden;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
name: 'MyComponent',
    components: { VueSlickCarousel },
}
</script>

<style>
  .karusel{
    height: auto;
  }
  .imgOne{
    width: 100%;
    height: 546px;
    background: url(http://demo.eskiz.uz/demo207/uploads/slide-1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .imgTwo{
    width: 100%;
    height: 546px;
    background: url(http://demo.eskiz.uz/demo207/uploads/slide-2.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .imgThree{
    width: 100%;
    height: 546px;
    background: url(http://demo.eskiz.uz/demo207/uploads/slide-3.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .foodWine{

    width: 100%;
    height: 546px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    z-index: 1;
    padding-top: 90px;
  }
  .foodWineTitle h3{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: center;
  }
  .foodWineTitle h3::after{

    display: block;
    content: ' ';
    width: 230px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    margin-left: 20px;
  }
  .foodWineTitle h3::before{
    display: block;
    content: ' ';
    width: 230px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    margin-right: 20px;
  }
  .foodWineTitle p{
    font-size: 15px;
    color: white;
    text-align: center;
    font-family: "Merriweather Sans", sans-serif;
    letter-spacing: 4px;
    line-height: 24px;
    margin-bottom: 60px;
    
  }
  .foodWineHreft{
    margin-top: -90px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 185px;
    width: 100%;
    height: 185px;
    
  }
  .foodWineHreft::before{
    position: absolute;
    display: block;
    content: " ";
    max-width: 327px;
    width: 100%;
    height: 354px;
    background: url(../assets/jumbotron-img-1.png);
    z-index: 1;
    margin-top: 20px;
    margin-left: 3px;
  }
  .foodWineHreft a{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #e0ca8f;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    max-width: 185px;
    width: 100%;
    height: 185px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 1;
  }
  .foodWineHreft a:hover{
    background: #e0ca8f;
    color: rgb(87, 81, 81);
  }
  .foodWineHreftTwo{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 155px;
    width: 100%;
    height: 155px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: #e0ca8f;
    transform: translateY(-11px);
    z-index: 1;
  }
  .foodWineHreftTwo a{
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #e0ca8f;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    max-width: 153px;
    width: 100%;
    height: 153px;
    background: #1d1d1d;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 1;
    
  }
  .foodWineHreftTwo a:hover{
    background: #e0ca8f;
    color: rgb(87, 81, 81);
  }

  .foodWineBefore{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 155px;
    width: 100%;
    height: 155px;
  }
  .foodWineBefore::before{
    display: block;
    content: ' ';
    position: absolute;
    width: 830px;
    height: 1px;
    background: #cfbb84;
    transform: translateY(-11px);
  }
    .slick-arrow {
      top: 25%;
      position: absolute;
      z-index: 15;
      width: 105px;
      height: 105px ;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      border: 6px solid #e0ca8f;
      transition: all .5s;
  }

  .slick-arrow:hover {
    background-color: #e0ca8f;
  }
  .slick-arrow:hover.slick-prev:before {
    color: black;
  }
  .slick-prev {
    left:5%;
    background-size: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .slick-prev:before {
      content: '<';
      font-size: 60px;
      font-weight: bold;
      color: #e0ca8f;
  }
  .slick-next {
    right: 5%;
    background-size: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .slick-arrow:hover.slick-next:before {
    color: black;
  }
  .slick-next:before {
      content: '>';
      font-size: 60px;
      font-weight: bold;
      color: #e0ca8f;
  }
  .slick-prev:focus {
      background-color: none;
  }

  .slick-next:focus {
      background-color: none;
  }

  .slick-next:focus {
    background-color: none;
  }
  .biz{
      max-width: 1400px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      padding-top: 100px;
  }
  .bizTitle{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .bizTitle h3{
    color: #fff;
    font-family: "Merriweather Sans";
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 1.4;
  }
  .bizTitle p{
    color: #9b9b9b;
    font-size: 18px;
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 500;
    text-align: center;
    margin-top: -15px;
  }
  .bizTitle .hr{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 59px;
    height: 1px;
    background: #9b9b9b;
  }
  .bizTitle .hr::before{
    position: absolute;
    display: block;
    content: ' ';
    width: 6px;
    height: 6px;
    background: #9b9b9b;
    transform: rotateZ(45deg);
  }
  .bizImg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 50px;

  }
  .bizImg .img{
    width: 1100px;
    height: 350px;
    transition: all .2s;
  }
  .bizImg:hover .img{
    transform: scale(1.02,1.02);
  }
  .bizImgHreft{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

  }
  .bizImgHreft img{
    max-width: 804px;
    height: 272px;
    position: absolute;
  }
  .bizImgHreft a{
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    color: #e0ca8f;
    font-size: 35px;
    font-family: "Merriweather", serif;
    font-weight: 700;
    letter-spacing: 5px;
    z-index: 2;
  }
  .bizHreftlar{
    display: flex;
    justify-content: center;
    align-content: space-between;
    margin-top: 50px;
    padding: 0 20px;
  }
  .bizHreftlar .bizHreft{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    max-width: 550px;
    width: 100%;
    background: black;
    color: white;
    overflow: hidden;
    margin-right: 10px;
    padding: 0 0 30px;
  }
  .bizHreftlar .bizHreftTwo{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    max-width: 550px;
    width: 100%;
    background: black;
    color: white;
    overflow: hidden;
    margin-left: 10px;
    padding: 0 0 30px;
  }
  .bizHreftlar .bizIcon{
    display: flex;
    align-items: flex-start;
    position: relative;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.561);
  }
  .bizHreftlar .bizIcon::before{
      position: absolute;
      display: block;
      content: ' ';
      width: 400px;
      height: 2px;
      background: #e0ca8f;
      left: 25px;
  }
  .bizHreftlar .bizIcon::after{
      position: absolute;
      display: block;
      content: ' ';
      width: 400px;
      height: 2px;
      background: #e0ca8f;
      right: 25px;
  }
  .bizHreftlar a{
    text-decoration: none;
    font-family: "Merriweather Sans";
    font-size: 30px;
    font-weight: 700;
    color: #e0ca8f;

  }
  .bizHreftlar a:hover{
    color: #ffda74;
  }
  .bizHreftlar p{
    font-size: 17px;
    color: #e0ca8f;
    font-weight: 600;
    font-family: "Merriweather", serif;
  }
  .biz .hr{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 59px;
    height: 1px;
    background: #9b9b9b;
    margin: 50px auto;
  }
  .biz .hr::before{
    position: absolute;
    display: block;
    content: ' ';
    width: 6px;
    height: 6px;
    background: #9b9b9b;
    transform: rotateZ(45deg);

  }
  .homeMenu{
    max-width: 1400px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .homeMenu .homeMenuTitle{
    display: flex;
    justify-content: center;
    align-items: center;


  }
  .homeMenu .homeMenuTitle h1{
  color: white;
  font-family: "Merriweather Sans";
  font-weight: 400;
  }
  .homeMenu .homeMenuBlocklar{
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  }
  .homeMenuBlocklar .homeMenuBlock{
  max-width: 370px;
  width: 100%;
  font-family: "Merriweather Sans", sans-serif;
  background: #000;
  overflow: hidden;
  }
  .homeMenuBlocklar .homeMenuBlockTwo{
  max-width: 370px;
  width: 100%;
  font-family: "Merriweather Sans", sans-serif;
  background: #000;
  overflow: hidden;
  }
  .homeMenuBlocklar .homeMenuBlockThree{
  max-width: 370px;
  width: 100%;
  font-family: "Merriweather Sans", sans-serif;
  background: #000;
  overflow: hidden;
  }
  .homeMenuImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;        

  }
  .homeMenuImg img{
  width: 100%;
  }
  .homeMenuImg .homeMenuImgTitle{
  position: absolute;
  transform: translateY(-100px);
  }
  .homeMenuImg .homeMenuImgTitle h6{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
    color: white;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 18px;
  font-family: "Merriweather Sans";
  }
  .homeMenuImg .homeMenuImgTitle h6::after{
  position: absolute;
  display: block;
  content: ' ';
  width: 90px;
  height: 1px;
  background: linear-gradient(to right, #1d1d1d3d 0%,rgba(255, 255, 255, 0.658) 100%);
  left: -100px;
  opacity:0.5;

  }
  .homeMenuImg .homeMenuImgTitle h6::before{
  position: absolute;
  display: block;
  content: ' ';
  width: 90px;
  height: 1px;
  background: linear-gradient(to left, #1d1d1d3d 0%,rgba(255, 255, 255, 0.658) 100%);
  right:-100px;
    opacity:0.5;
  }
  .homeMenuBlocklar ul{
  margin-top:-75px;
  padding-left:40px;
  }
  .homeMenuBlocklar ul li  {
  color:white;
  list-style:none;
  font-family: "Merriweather Sans" ,sans-serif;
  font-size:14px;
  margin-top:20px
  }
  .homeMenuBlocklar ul li  span{
  color: #9b9b9b;
  }
  .clients{
    background-image: url(http://demo.eskiz.uz/demo207/uploads/index-bg-1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 100px;
    padding: 60px 0;
  }
  .clientsTitle{
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .clientsTitle h3{
    color: white;
    font-size: 30px;
    font-family: "Merriweather Sans";
    font-weight: 400;
    text-align: center;
  }
  .clientsUl{
    max-width: 750px;
    width: 100%;
    margin: 100px auto;
  }
  .clientsUl ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;

  }
  .clientsUl ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 120px;
    width: 100%;
    height: 120px;
    list-style: none;
    color: white;
  }
  .clientsUl ul li div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 1;
  }
   .clientsUl ul li div span{
     font-size: 30px;
     font-family: "Merriweather Sans";
     font-weight: 700;
     text-align: center;
   }
   .clientsUl ul li div p{
     font-size: 14px;
     font-family: "Merriweather Sans";
     font-weight: 400;
     text-align: center;
   }
  .clientsUl ul li::after{
    position: absolute;
    display: block;
    content: ' ';
    max-width: 120px;
    width: 100%;
    height: 120px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: rotateZ(45deg);
    background-color: rgba(0, 0, 0, 0.3);
  }
  .clientsBlocks{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clientsBlocks .clientsBlock{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    color: white;
  }
  .clientsBlocks .clientsBlock:nth-child(2){
    margin: 0 2px;
  }
  .clientsBlocks .clientsBlock .icon{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  .clientsBlocks .clientsBlock .icon .hr{
    width: 100%;
    height: 2px;
    background: #e0ca8f;
    
  }
  .clientsBlocks .clientsBlock .icon .chevron-down{
    font-size: 22px;
    color: #9b9b9bce;
    margin: 10px  10px 0 10px;
  }
  .clientsBlocks .clientsBlock a{
    color: #e0ca8f;
    font-weight: 700;
    font-family: "Merriweather Sans";
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    margin-top: 10px;
    transition: all .35s;
  }
  .clientsBlocks .clientsBlock a:hover{
    color: #ffda74;
  }
  .clientsBlocks .clientsBlock  .text{
    padding: 0 10px;
    margin-top: 20px;
  }
  .clientsBlocks .clientsBlock  .text p{
    color: #ffffff;
    font-size: 14px;
    font-family: "Merriweather Sans", sans-serif;
    text-align: center;
  }
  .clientsBlocks .clientsBlock .hr_before{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 59px;
    border-top: 1px solid #787878;
    opacity: 1;
    padding: 0;
    margin-top: 30px;
  }
  .clientsBlocks .clientsBlock .hr_before::before{
    position: absolute;
    display: block;
    content: ' ';
    width: 7px;
    height: 7px;
    background: #787878;
    z-index: 11;
    transform: rotateZ(45deg);
  }
  .homeMaps{
    width: 100%;
  }
  @media screen and (max-width: 1240px){
    .homeMenu .homeMenuBlocklar{
      max-width: 1000px;
      width: 100%;
      flex-wrap:wrap;
    }
    .homeMenuBlocklar .homeMenuBlock {
    max-width: 300px;
    width: 100%;
    }
    .homeMenuBlocklar .homeMenuBlockTwo {
    max-width: 300px;
    width: 100%;
    }
    .homeMenuBlocklar .homeMenuBlockThree {
    max-width: 300px;
    width: 100%;
    }
    .homeMenuImg .homeMenuImgTitle h6::after{
    width: 40px;
    left: -45px;
    }
    .homeMenuImg .homeMenuImgTitle h6::before{
    width: 40px;
    right:-45px;
    }
}
  @media screen and (max-width: 1070px) {
    .foodWineTitle h3::after{
      width: 180px;
    }
    .foodWineTitle h3::before{
      width: 180px;
    }
}
  @media screen and (max-width: 1025px){
      .clientsBlocks{
      max-width: 800px;
      width: 100%;
      border: 1px solid red;
      flex-direction: column;
      margin: 0 auto;
    }
      .clientsBlocks .clientsBlock{
      max-width: 100%;
      width: 100%;
      color: white;
      margin-top: 50px !important;
    }
}
  @media screen and (max-width: 1020px){
    .bizHreftlar {
    flex-wrap: wrap;
    margin-top: 50px;
    padding: 0 20px;
    }
    .bizHreftlar .bizHreft {
    max-width: 750px;
    width: 100%;
    margin-right: 0px;
    margin-bottom: 20px;
    }
    .bizHreftlar .bizHreftTwo {

    max-width: 750px;
    width: 100%;
    margin-left: 0px;

    }
}
  @media screen and (max-width: 990px){
    .slick-arrow{
      display: none !important;
    }
}
  @media screen and (max-width: 900px){
    .homeMenu .homeMenuBlocklar{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .homeMenuBlocklar .homeMenuBlock{
      margin-right: 5px;
      
    }
    .homeMenuBlocklar .homeMenuBlockTwo{
      margin-left: 5px;
    }
    .homeMenuBlocklar .homeMenuBlockThree{
      margin-top: 10px;
    }
}
  @media screen and (max-width: 850px){
    .foodWineBefore::before {
      width: 530px;
    }
}
 @media screen and (max-width: 830px){
   #app{
     overflow: hidden !important;
   }
   .bizImgHreft img {
      max-width: 704px;
      height: 202px;

    }
    .bizImgHreft a {
    font-size: 25px;
    }
  .clientsTitle h3 {
    font-size: 25px;
    margin-top: 60px;
  }
  .clients{
   padding: 0 20px; 
  }
  .clientsBlocks{
    max-width: 600px;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
  }
}
 
  @media screen and (max-width: 710px){
  
  .clientsUl ul li{
    max-width: 100px;
    width: 100%;
    height: 100px;
  }
   .clientsUl ul li div span{
     font-size: 25px;
   }
   .clientsUl ul li div p{
     font-size: 12px;
   }
  .clientsUl ul li::after{
    max-width: 100px;
    width: 100%;
    height: 100px;
  }
}
  @media screen and (max-width: 660px){
    .foodWineTitle h3 {
      font-size: 25px;
      letter-spacing: 5px;
    }
    .foodWineTitle p {
        font-size: 12px;
    }
    .foodWineHreft {
      margin-top: -90px;
      max-width: 135px;
      width: 100%;
      height: 135px;
    }
    .foodWineHreft a {
    font-size: 18px;
    font-weight: 700;
    max-width: 135px;
    width: 100%;
    height: 135px; 
    border: 5px solid #e0ca8f;        
    }
    .foodWineHreft::before {
    display: none;
    }
}
  @media screen and (max-width: 615px){
    .bizImgHreft img {
      display: none;
    }
    .bizImgHreft a {
    font-size: 30px;
    }
    .homeMenuBlocklar{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
    .homeMenuBlocklar .homeMenuBlock{
      max-width: 70%;
      margin-right: 0;
    }
    .homeMenuBlocklar .homeMenuBlockTwo{
      max-width: 70%;
      border: 0;
      margin-left: 0;
      margin-top: 20px;
    }
    .homeMenuBlocklar .homeMenuBlockThree{
      max-width: 70%;
      margin-top: 20px;
    }
    .clientsUl ul{
    flex-wrap: wrap !important;
    }
     .clientsUl ul li{
       max-width: 135px;
       height: 135px;
    }
  /* .clientsUl ul li::after{
    position: 
  } */
}
  @media screen and (max-width: 580px){
    .foodWineTitle h3 {
      font-size: 20px;
      letter-spacing: 5px;
    }
    .foodWineTitle h3::after{
      width: 150px;
      margin-left: 10px;
    }
    .foodWineTitle h3::before{
      width: 150px;
        margin-right: 10px;
    }
    .foodWineTitle p {
      font-size: 10px;
    }
    .foodWineBefore::before {
    width: 420px;
    }
    .foodWineHreftTwo a {
    font-size: 18px;
    font-weight: 700;
    max-width: 123px;
    width: 100%;
    height: 123px;
    background: #1d1d1d;

    }
    .foodWineHreftTwo {

    max-width: 125px;
    width: 100%;
    height: 125px;
    background: #e0ca8f;
    transform: translateY(-7px);
    z-index: 1;
    }
}
  @media screen and (max-width: 579px){
    .clientsUl ul li:nth-child(4){
      margin-top: 20px;
    }
}  
  @media screen and (max-width: 530px){
    .bizHreftlar p {
      font-size: 15px;
      text-align: center;
    }
}
  @media screen and (max-width: 520px){
    .foodWineTitle{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: auto;
    }
    .foodWineTitle h3::after{
      display: none;
      width: 0;
    }
    .foodWineTitle h3::before{
      width: 0;
      display: none;
    }
    .foodWineTitle p {
      font-size: 8px;
    }
}
  @media screen and (max-width: 460px){

    .clientsTitle h3 {
    font-size: 20px;
   }
}
  @media screen and (max-width: 444px){
      .clientsUl ul li:nth-child(3){
        margin-top: 20px;
      }
}
  @media screen and (max-width: 430px){

    .foodWineBefore::before {
    width: 350px;
    }
    .bizHreftlar a {
      font-size: 25px;
      text-align: center;
    }
}
  @media screen and (max-width: 420px){
    .homeMenuImg .homeMenuImgTitle h6 {
    font-size: 15px;   
    }
    .homeMenuImg .homeMenuImgTitle h6::after {
    width: 50px;
    left: -55px;
    opacity: 0.5;
    }
    .homeMenuImg .homeMenuImgTitle h6::before {
    width: 50px;
    right: -55px;
    opacity: 0.5;
    }
}
  @media screen and (max-width: 400px){
    .homeMenuImg .homeMenuImgTitle {
      transform: translateY(-50px);
    }
    .homeMenuImg .homeMenuImgTitle h6::after {
      width: 0px;
      left: -55px;
      opacity: 0.5;
    }
    .homeMenuImg .homeMenuImgTitle h6::before {
      width: 0px;
      right: -55px;
      opacity: 0.5;
    }
    .homeMenuBlocklar ul {
      margin-top: -75px;
      padding-left: 20px;
    }
}
  @media screen and (max-width: 360px){
    .foodWineBefore::before {
      width: 300px;
    }
}
  @media screen and (max-width: 309px){
     .clientsUl ul li{
       margin-top: 20px !important;
     }
}
  @media screen and (max-width: 300px){
    .foodWineBefore::before {
      width: 250px;
    }
    .clientsTitle h3 {
    font-size: 16px;
    margin-top: 30px;
    letter-spacing: 1px;
    }
}
  @media screen and (max-width: 250px){
      .mobil_nav a {
      text-decoration: none;
      color: white;
      font-size: 20px;
      font-family: "Merriweather", serif;
      font-weight: bold;
      letter-spacing: 1px;
    }
      .foodWineHreft {
      margin-top: -50px;
      max-width: 105px;
      width: 100%;
      height: 105px;
    }
    .foodWineHreft a {
    font-size: 12px;
    font-weight: 700;
    max-width: 105px;
    width: 100%;
    height: 105px;
    border: 5px solid #e0ca8f;
    }
    .foodWineHreftTwo a {
    font-size: 12px;
    font-weight: 700;
    max-width: 103px;
    width: 100%;
    height: 103px;
    background: #1d1d1d;
    }
    .foodWineHreftTwo {
    max-width: 105px;
    width: 100%;
    height: 105px;
    background: #e0ca8f;
    transform: translateY(-7px);
    z-index: 1;
    }
    .foodWineBefore::before {
      width: 200px;
    }
}
  @media screen and (max-width: 220px){
    .mobil_nav a {
    font-size: 17px;
    }
}
  @media screen and (max-width: 210px){
    .homeMenuImg .homeMenuImgTitle {
      transform: translateY(-20px);
    }
    .homeMenuImg .homeMenuImgTitle h6 {
      font-size: 12px;
    }
}
  @media screen and (max-width: 200px){
      .foodWineBefore::before {
      width: 160px;
    }
}
</style>