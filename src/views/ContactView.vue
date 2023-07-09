<template>
  <header>
    <nav>
      <li style="float: left;"><p style="user-select: none;">Joel Ravié</p></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li class="active"><RouterLink to="/contact">Contact</RouterLink></li>
      <li><RouterLink to="/music">Music</RouterLink></li>
      <li><RouterLink to="/">Home</RouterLink></li>
    </nav>
  </header>
  <body>
    <div class="contact">
    <h1>Let's Work Together!</h1>
      <form @submit="submitForm">
        <label for="name">Full Name *</label>
        <label for="musicStyle">Music Style / Need *</label>
        <label for="email" class="endBig" id="emailLabel">Email *</label>


        <input type="text" name="name" id="name" placeholder="Igor Stravinsky" required :style='inputName' @input="checkName">

        <select name="musicStyle" id="musicStyle" required :style='inputStyle' @click="checkStyle">
          <option value="none" v-show="selected"  >Select One:</option>
          <option value="classic">Classic</option>
          <option value="VideoGame">Video-Game</option>
          <option value="Lofi">Lo-Fi</option>
          <option value="soundtrack">Soundtrack</option>
          <option value="other">Other</option>
        </select>

        <input type="email" name="email" id="email" placeholder="Igorstravinsky@gmail.com" required class="endBig" :style='inputEmail' @input="checkEmail">

        <label for="budget">Budget</label>
        <label for="deadline">Deadline</label>
        <label for="important" class="importantLabel">Important Information</label>

        <input type="number" name="budget" id="budget" placeholder="$200" :style='inputBudget' @input="checkBudget">
        <input type="date" name="deadline" id="deadline" :style='inputDeadline' @input="checkDeadline">
        <input type="text" name="important" id="important" placeholder="I need it in 44.1 kHz, 24 bits." class="endBig" :style='inputImportant' @input="checkImportant">

        <label for="message" class="allForm">Message *</label>
        <textarea name="message" id="message" rows="4" placeholder="Hello, I need an awesome music for my videogame!" required class="allForm" :style='inputMessage' @input="checkMessage"></textarea>

        <input type="submit" value="Submit" style="margin-top: 2em;" class="submit">
      </form>
    </div>
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

.contact{
  height: auto;
  widows: auto;
  margin: 5em 2.5em;
  color: #f7dece;
  font-family: 'Poppins', sans-serif;
}

.contact h1{
  font-size: 3em;
}

form{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.5em;
}

.input-empty {
  background-color: #ffcccc; /* Cambia el color de fondo según tus preferencias */
}



form input, #message, form select{
  background-color: #ffffff75;
  border-style: solid;
  border-color: #9ec4bbb4;
  border-radius: 7px;
  border-width: 3.5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25em;
  font-weight: 500;
  padding: 5px 7px;
  transition: all 0.25s;
  color: #9ec4bbb4;
  border-color: #9ec4bbb4;
}

form input::placeholder, form textarea::placeholder{
  color: #9ec4bbb4;
  border-color: #9ec4bbb4;
}

form input:focus, #message:focus, form select:focus{
  outline: none;
  background-color: #eed7c5;
  border-color: #9ec4bb;
}

form label{
  margin-top: 1.5em;
}

.submit{
  background-color: #eed7c5d0;
  color: #414240;
  cursor: pointer;
  width: fit-content;
  padding: 7px;
}

.submit:hover{
transform: scale(1.2);
background-color: #eed7c5;
}

.endBig, .importantLabel{
  grid-column: 3 / 5;
}

.allForm{
  grid-column: 1 / 5;
}

@media screen and (max-width: 600px){

}


@media screen and (max-width: 900px) {

  /* .contact h1{
    font-size: 2.5em;
  }

  form{
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1em;
  }

  form input, #message, form select{
    font-size: 1em;
  }

  .endBig{
    grid-column: 2 / 3;
  }

  .allForm{
    grid-column: 1 / 3;
  }

  #name, #musicStyle{
    grid-row: 2 / 3;
  }

  #email, #emailLabel{
    grid-column: 1 / 3;
  }

  #budget, #deadline{
    grid-row: 6 / 7;
  }

  #important, .importantLabel{
    grid-column: 1 / 3;
  } */

}
</style>

<script setup>

import {ref, computed} from 'vue';

const selected = ref(true);
selected.value = false;

const inputName = ref('');
const name = ref(document.getElementById('name'));

const inputStyle = ref('');
const style = ref(document.getElementById('style'));

const inputEmail = ref('');
const email = ref(document.getElementById('email'));

const inputBudget = ref('');
const budget = ref(document.getElementById('budget'));

const inputDeadline = ref('');
const deadline = ref(document.getElementById('deadline'));

const inputImportant = ref('');
const important = ref(document.getElementById('important'));

const inputMessage = ref('');
const message = ref(document.getElementById('message'));

const inputSubmit = ref('');

const checkName = () =>{
  if(name.value != ''){
    inputName.value = ' background-color: #eed7c5; color: #414240;';
  }
}

const checkStyle = () =>{
  inputStyle.value = ' background-color: #eed7c5; color: #414240;';
}

const checkEmail = () =>{
  if(email.value != ''){
    inputEmail.value = ' background-color: #eed7c5; color: #414240;';
  }
}

const checkBudget = () =>{
  if(budget.value != ''){
    inputBudget.value = ' background-color: #eed7c5; color: #414240;';
  }
}

const checkDeadline = () =>{
  if(deadline.value != ''){
    inputDeadline.value = ' background-color: #eed7c5; color: #414240;';
  }
}

const checkImportant = () =>{
  if(important.value != ''){
    inputImportant.value = ' background-color: #eed7c5; color: #414240;';
  }
}

const checkMessage = () =>{
  if(message.value != ''){
    inputMessage.value = 'background-color: #eed7c5; color: #414240;';
  }
}

</script>
