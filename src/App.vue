<template>
  <div id="app">
  <div class="mobil_nav" style="overflow: hidden;">
      <fonts icon="bars" class="bars" @click="menu" :class=" active ? 'addClassBars':' ' "/>
      <router-link to="/"  exact>FOOD & WINE</router-link>
  </div>
  <div class="mobil_menu" style="overflow: hidden;" :class=" active ? 'addClass':' ' ">
  <ul>
    <li><router-link to="/" active-class="activ" exact>ГЛАВНАЯ</router-link></li>
    <li><router-link to="/menu" active-class="activ" exact>МЕНЮ</router-link></li>
    <li><router-link to="/special" active-class="activ" exact>ОСОБЫЙ</router-link></li>
    <li><router-link to="/about" active-class="activ" exact>О НАС</router-link></li>
    <li><router-link to="/contact" active-class="activ" exact>КОНТАКТЫ</router-link></li>
  </ul>
  </div>
  <div class="nav_con" style="overflow: hidden;">
        <div class="nav_header"></div>
        <div class="nav">
      <div class="logo">
      <router-link to="/"  exact>
          <span>FOOD & WINE</span>
          <p>wine & winery restaurant</p>
      </router-link>
    </div>
    </div>
  </div>
  <div class="menu" style="overflow: hidden;">
    <nav>
      
    <ul>
      <li><router-link to="/" active-class="activ" exact>ГЛАВНАЯ</router-link></li>
      <li><router-link to="/menu" active-class="activ" exact>МЕНЮ</router-link></li>
      <li><router-link to="/special" active-class="activ" exact>ОСОБЫЙ</router-link></li>
      <li><router-link to="/about" active-class="activ" exact>О НАС</router-link></li>
      <li><router-link to="/contact" active-class="activ" exact>КОНТАКТЫ</router-link></li>
    </ul>
  </nav>
  </div>
 
  
    <router-view/>

  <div class="footer">
    <div class="row">

    <div class="col-3   blockOne">
      <div class="a">
        <router-link to="/"  exact>
          <span>FOOD & WINE</span>
        </router-link>
      </div>
      <div class="text">
        <span class="span">Адрес:</span>
        <ul>
          <li>Qo'qon shaxar, Alisher Navoiy ko'chasi, 113-uy.</li>
          <li><span>Telephone: </span> +(998 99) 006-71-34</li>
          <li><span>E-mail: </span> Axadjona88@gmail.com</li>
        </ul>
      </div>
    </div>

    <div class="col-4   blockTwo">
      <h6>Обратитесь к нам</h6>
      <form action="">
        <input type="text" placeholder="Имя*">
        <input type="text" placeholder="Эл. адрес*">
        <textarea name="" id="" cols="0" rows="5" placeholder="Ваше сообщение*"></textarea>
        <div class="sInput">
        <input class="submit" type="submit" value="Отправить">
        </div>
      </form>
    </div>

    <div class="col-1"></div>

    <div class="col-4   blockThree">
      <h6>Информационное письмо</h6>
      <p>Идите в ногу с самыми последними новостями ресторана и событий. Введите вашу эл.почту и подписывайтесь в наше информационное письмо.</p>
      <form action="">
        <input type="email" name="" id="" placeholder="Эл. адрес*">
        <div class="submitC">
        <input type="submit" value="Отправить" class="submit">
        </div>

      </form>
    </div>

    </div>
  </div>

  </div>
</template>

<script>




export default {
  name: 'App',
  components: {
    
   
  },
  data() {
    return {
      active:false
    }
  },
  methods: {
    menu(){
      this.active=!this.active
    }
  },
}
</script>

<style>
body{
  margin: 0;
}
#app{
  background: #1d1d1d;
  height: auto;
 
}
.nav_header{
  width: 100%;
  height: 40px;
  background: #2a2a2a;
}
.nav{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 20px !important;
  padding-top: 58px;
  padding-bottom: 20px;
}
.nav::before{
  display: block;
  content: ' ';
  width: 353px;
  height: 1px;
  top: 0;
  position: absolute;
  background: linear-gradient(to right, #1d1d1d, #e0ca8f 50%, #1d1d1d);
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo::after{
  display: block;
  content: " ";
  width: 150px;
  height: 200px;
  background: url(../src/assets/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
}
.logo a{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align:center;
  position: relative;
  z-index: 1;
}
.logo a::before{
    position: absolute;
    left: -100px;
    margin-top: -1px;
    content: "";
    display: inline-block;
    height: 1px;
    width: 100px;
    background: linear-gradient(to right, #1d1d1d 0%, #fff 100%);
    opacity: .3;

}
.logo a::after{
  position: absolute;
  right:  -100px;
  margin-top: -1px;
  content: "";
  display: inline-block;
  height: 1px;
  width: 100px;
  background: linear-gradient(to left, #1d1d1d 0%, #fff 100%);
  opacity: .3;

}
.logo span{
      font-family: "Merriweather", serif;
  color: white;
  text-align:center;
  font-size: 30px;
  letter-spacing: 4px;
  font-weight: bold;
}
.logo p{
  font-family: "Merriweather Sans", sans-serif;
  color: #9b9b9b;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  margin-top: 10px;
  font-weight: 500;
}
.menu{
  height: 50px;
  position: sticky;
  position: -webkit-sticky;
  display: block;
  top: 0; 
  background: #1d1d1d;
  z-index: 111;
  margin-bottom: 20px;
  
}
nav{
  max-width: 660px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
nav ul{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}
nav ul li{
  list-style: none;
}
nav ul li a{
  display: block;
  padding: 8px 25px;
  font-size: 14px;
  color: #e0ca8f;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  position: relative;
  transition: .2s;
}
nav ul li a::after{
  display: block;
  content: ' ';
  width: 1px;
  height: 20px;
  position: absolute;
  top: 30%;
  right: -10px;
  background: white;
  opacity: .11;
}
nav ul li:nth-child(5) a::after{
  display: none;
}
nav ul li a:hover{
  background: #e0ca8f;
  color: black;
}
.activ{
  background: #e0ca8f;
  color: #000 !important;
}
.mobil_nav{
  position: fixed;
  display: none;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 20px;
  background: #1d1d1d;
  z-index: 111;
}
.mobil_nav a{
  text-decoration:none;
  color: white;
  font-size: 30px;
  font-family: "Merriweather", serif;
  font-weight: bold;
  letter-spacing: 1px;
}
.bars{
  font-size: 30px;
  color: #e0ca8f;
  margin-right: 20px;
  cursor: pointer;
  transition: all .5s;
}
.addClassBars{
color: #fdfdfd;
}
.mobil_menu{
  display: none;
  position: fixed;
  max-width: 270px;
  width: 100%;
  height: 1000px;
  background: #1d1d1d;
  margin-top: 58px;
  left: -1000px;
  transition: all .5s;
  z-index: 111;
}
.addClass{
  display: none;
  position: fixed;
  max-width: 270px;
  width: 100%;
  height: 1000px;
  background: #1d1d1d;
  margin-top: 58px;
  left: 0px;
}
.mobil_menu ul{
  width: 100%;
  padding: 0;
  margin: 0;
 
}
.mobil_menu ul li{
  list-style: none;
}
.mobil_menu ul li a{
  display: block;
  padding: 15px 20px;
  font-size: 14px;
  color: #e0ca8f;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  position: relative;
  transition: .2s;
}
.mobil_menu ul li a:hover{
  background: #e0ca8f;
  color: #000;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
}
.footer .blockOne{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.footer .blockOne .a{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 116px;
}
.footer .blockOne .a::before{
  display: block;
  content: ' ';
  width: 253px;
  height: 1px;
  background-image: -webkit-linear-gradient(left, #1d1d1d, #e0ca8f 50%, #1d1d1d);
}
.footer .blockOne .a a{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
  transform: translateY(-14px);
}
.footer .blockOne .a a span{
  z-index: 1;
}
.footer .blockOne .a a::after{
  position: absolute;
  display: block;
  content: ' ';
  width: 130px;
  height: 180px;
  background: url(../src/assets/logo.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.footer .text{
  max-width: 250px;
  width: 100%;
  color: white;
  transform: translate(0px, 50px);
  padding-left: 30px;
}
.footer .text .span{
  font-size: 18px;
  color: #adadad;
}
.footer .text ul{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}
.footer .text ul li{
  list-style: none;
  color: #adadad;
  font-size: 13px;
  text-align: left;
  margin-top: 5px;
}
.footer .blockTwo{
  padding: 0;
}
.footer .blockTwo h6{
  font-family: "Merriweather", serif;
  color: white;
  font-size: 18px;
}
.footer .blockTwo form{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;

}
.footer .blockTwo form input{
  width: 100%;
  color: #9b9b9b;
  padding: 5px 15px;
  background: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 10px;
}
.footer .blockTwo form textarea{
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  padding: 5px 15px;
  outline: none;
} .footer .blockTwo form .sInput{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.footer .blockTwo form .submit{
  width: auto;
  border: none;
  margin: 0;
  padding: 0;
  color: #e0ca8f;
  text-transform: uppercase;
  font-family: "Merriweather", serif;
  font-weight: 700;
  letter-spacing: 2px;
}
.footer .blockThree{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}
.footer .blockThree h6{
  font-family: "Merriweather", serif;
  color: white;
  font-size: 18px;
}
.footer .blockThree p{
  width: 80%;
  color: #9b9b9b;
  font-size: 14px;
  margin-top: 20px;
}
.footer .blockThree form{
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.footer .blockThree form input{
  width: 100%;
  color: #9b9b9b;
  padding: 5px 15px;
  background: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 10px;
}
.footer .blockThree form .submitC{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 15px;
}
.footer .blockThree form .submit{
  width: auto;
  border: none;
  margin: 0;
  padding: 0;
  color: #e0ca8f;
  text-transform: uppercase;
  font-family: "Merriweather", serif;
  font-weight: 700;
  letter-spacing: 2px;
}
@media screen and (max-width: 925px){
  .footer .row{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
  }

  .footer .blockOne {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    max-width: 100%;
    width: 100%;
  }
  
  .footer .text{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .footer .text .span {
    text-align: center;
  }
  .footer .text ul li {
    width: 100%;
    text-align: center;
    transform: translate(0);
  }
  .footer .blockTwo {
    margin: 70px auto;
    max-width: 100%;
    width: 100%;
  }
  .footer .blockTwo form{
    margin: 0 auto;
    width: 90%;
  }
  .footer .blockTwo form input{
    margin-top: 30px;
  }
  .footer .blockTwo form textarea{
    margin-top: 30px;
  }
  .footer .blockTwo form .submit{
    margin-top: 30px;
  }
  .footer .blockTwo h6{
    text-align: center;
  }
  .footer .blockThree {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .footer .blockThree form {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer .blockThree p {
    text-align: center;
  }
}
@media screen and (max-width: 800px){
  .nav_con{
    display: none;
  }
  .menu{
    display: none;
  }
  .mobil_nav{
    display: flex;
  }
  .mobil_menu{
    display: block;
  }
  .addClass{
    display: block;
  }

}
@media screen and (max-width: 290px){
  .mobil_nav a {
    font-size: 25px;
  }
}
@media screen and (max-width: 260px){
  .footer .blockOne{
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
  }
  .footer .blockTwo{
    max-width: 200px;
    width: 100%;
    margin: 50px auto;
  }
  .footer .blockThree{
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
  }
  .footer .blockTwo form .sInput {
    justify-content: center;
  }
  .footer .blockThree form .submitC {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
  .footer .text {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
  .footer .text .span {
    font-size: 15px;
    text-align: center;
  }

  .footer .text ul li {
    padding: 0 20px;
    font-size: 12px;
    text-align: left;
    padding: 0 20px 0 0;
  }

}
@media screen and (max-width: 220px){
  .bars{
    font-size: 25px;
  }
}
@media screen and (max-width: 200px){
  .footer .blockOne{
    max-width: 150px;
    width: 100%;
    margin: 0 auto;
  }
  .footer .blockTwo{
    max-width: 150px;
    width: 100%;
    margin: 50px auto;
  }
  .footer .blockThree{
    max-width: 150px;
    width: 100%;
    margin: 0 auto;
  }
}

</style>
