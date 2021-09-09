<template>
  <b-container fluid id="contact">
    <b-container fluid id="nMenu">
      <div class="nMenufirst">
        <div class="title">
          <div class="hr"></div>
          <h3>КОНТАКТЫ</h3>
          <div class="hr"></div>
        </div>
        <ul>
          <li>
            <router-link to="/" exact>ГЛАВНАЯ</router-link>
          </li>
          <li>КОНТАКТЫ</li>
        </ul>
      </div>
    </b-container>
    <b-container class="container">
      <div class="contactTitle">
        <h1>Свяжитесь</h1>
        <div class="blocklar">
          <div class="block">
            <p> <span>Адрес:</span> Узбекистан, г.Ташкент ул. Навои 7</p>
            <p> <span>Телефон:</span> +(998 91) 286-48-45</p>
            <p> <span>E-mai:</span> axadjona88@gmail.com</p>
          </div>
           <div class="block">
            <p> <span>Мы открытые:</span> Mon - Fri 7am - 11am (breakfast) Mon - FriI 11am - 8pm (lunch) Sat 8am - 12pm (breakfast) Sat 12pm - 4pm (lunch)</p>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6064.426913952982!2d70.96198200000002!3d40.536873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa5d8bbb9bee93!2sLife%20Tech!5e0!3m2!1sen!2sus!4v1631174742979!5m2!1sen!2sus" width="600" height="450" style="border: 0; margin: 0 auto;  max-width: 750px; width: 100%;" allowfullscreen="" loading="lazy"></iframe>
    </b-container>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
#contact #nMenu {
  background: url(../assets/bg-careers.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#contact .container{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 50px;
}
#contact .container .contactTitle h1{
  font-family: "Merriweather Sans";
  color: white;
  text-align: center;
  margin: 20px 0;
}
#contact .container .blocklar{
  max-width: 750px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  color: red;
}
#contact .container .blocklar .block{
  max-width: 400px;
  width: 100%;
}
#contact .container .blocklar .block:nth-child(1) p{
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #9b9b9b;
  font-size: 13px;
  text-align: center;
}
#contact .container .blocklar .block p span{
  font-size: 18px;
  color: white;
  font-weight: 600;
  text-align: start;
  margin-right: 5px;
}
#contact .container .blocklar .block:nth-child(2) p{
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #9b9b9b;
  font-size: 13px;
  text-align: left;
}
#contact .container .blocklar .block:nth-child(2) p span{
  max-width: 450px;
  width: 100%;
}
@media screen and (max-width:770px){
  #contact .container .blocklar{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
#contact .container .blocklar .block{
  max-width: 100% !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#contact .container .blocklar .block p{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#contact .container .blocklar .block:nth-child(2) p{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#contact .container .blocklar .block:nth-child(2) p span{
  max-width: 150px;
  width: 100%;
}
}
</style>