<script setup>
</script>

<template>
  <header>
    <nav>
      <li style="float: left;"><p style="user-select: none;">Joel Ravié</p></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <!-- <li><RouterLink to="/contact">Contact</RouterLink></li> -->
      <li><RouterLink to="/music">Music</RouterLink></li>
      <li class="active"><RouterLink to="/">Home</RouterLink></li>
    </nav>
  </header>
  <body>
    <div class="introduction">
      <h1>Hello, I'm Joel</h1>
      <h2>a passionate Argentine composer and music producer dedicated to create unique and captivating sonic landscapes.</h2>
    </div>
    <button class="aboutBtn"><RouterLink to="/about">About Me</RouterLink></button> 
  </body>


</template>

<style scoped>

body{
  display: flex;
  position: absolute;
  top: 15em;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}
.introduction{
  height: auto;
  widows: auto;
  margin: 2.5em;
  color: #f7dece;
}

.introduction h1{
  font-size: 7em;
}

.introduction h2{
  font-size: 2.5em;
  font-weight: 500;
}

.introduction h1, .introduction h2{
  text-align: center;
}

.aboutBtn{
  width: fit-content;
  padding: .5em;
  align-self: center;
  border-style: solid;
  border-width: 3px;
  border-radius: 10px;
  border-color: #9ec4bbb4;
  list-style-type: none;
  cursor: pointer;
  transition: background-color 0.25s, transform 0.25s, border-width 0.1s;
}

.aboutBtn:hover{
  background-color: #eed7c5;
  transform: scale(1.15);
  border-width: 5px;
  border-color: #9ec4bb;
}

.aboutBtn a{
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  text-decoration: none;
  color: #2d2e2c;
}

@media screen and (max-width: 600px){

  body{
    top: 10em;
  }
  .introduction h1{
    font-size: 2.5em;
  }
  
  .introduction h2{
    font-size: 1em;
  }

  .aboutBtn{
    font-size: .75em;
  }
}
</style>
