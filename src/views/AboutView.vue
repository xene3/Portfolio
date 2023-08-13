

<template>
    <header>
      <nav>
        <li style="float: left;"><p style="user-select: none;">Joel Ravié</p></li>
      <li class="active big"><RouterLink to="/about">About</RouterLink></li>
      <!-- <li><RouterLink to="/contact">Contact</RouterLink></li> -->
      <li class="big"><RouterLink to="/music">Music</RouterLink></li>
      <li class="big"><RouterLink to="/">Home</RouterLink></li>
      <li class="burger" @click="menuBurger"><font-awesome-icon icon="fa-solid fa-bars" /></li>
      </nav>
    </header>
    <body v-if="hiddenMenu">
        <div class="about">
            <h1>Freelance music composer</h1>
            <p>I'm from Buenos Aires, Argentina. As a composer, I've worked with many genres such as: Classic, Lo-fi and Experimental. 
                As you visit my website, I invite you to explore my portfolio of music compositions. 
                You will find my work, both in professional recordings and sheet music. 
                Each composition represents my unique style and my ability to tell stories through music. Hope you enjoy them. <br>
                If you want to start working, please email me at <a href="mailto:joelraviemusic@gmail.com?subject=I want to work with you">joelraviemusic@gmail.com</a>  
            </p>
        </div>
    </body>

    <body class="menuBurger" v-else>
    <RouterLink to="/" @click="close">Home</RouterLink>
    <RouterLink to="/music" @click="close">Music</RouterLink>
    <RouterLink to="/about" @click="close">About</RouterLink>
    <font-awesome-icon icon="fa-solid fa-x" class="x" @click="close"/>
    </body>

</template>
  
<style scoped>

body{
  display: flex;
  width: 100%;
  position: absolute;
  top: 5em;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

.about{
  height: auto;
  margin: 2.5em;
  color: #f7dece;
}

.about h1{
  font-size: 5em;
}

.about p{
  font-size: 2em;
  font-weight: 500;
}

.about h1, .about p{
  text-align: center;
}

.about p a{
  color: #9ec4bb;
  user-select: all;
  transition: all 0.25s;
}

.about p a::selection{
  background-color: #f7dece;
}

.about p a:hover{
  color: #f7dece;
}

.about p a:hover::selection{
  background-color: #9ec4bb;
}

@media screen and (max-width: 600px){

.about h1{
  font-size: 2.5em;
}

.about p{
  margin-top: 1.1em;
  font-size: 1em;
}

.aboutBtn{
  font-size: .75em;
}
}
</style>

<script setup>
import {ref} from "vue";

const hiddenMenu = ref(true);
const menuBurger =() =>{
  hiddenMenu.value = false;
}

const close =() =>{
  hiddenMenu.value = true;
}
</script>