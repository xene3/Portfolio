<template>
  <header>
    <nav>
      <li style="float: left;"><p style="user-select: none;">Joel Ravié</p></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <!-- <li><RouterLink to="/contact">Contact</RouterLink></li> -->
      <li class="active"><RouterLink to="/music">Music</RouterLink></li>
      <li><RouterLink to="/">Home</RouterLink></li>
    </nav>
  </header>
  <body>

    <div class="music">
      <h1>Welcome to my world!</h1>
      <h2>Here you will find everything I've done so far. Feel free to scroll down and listen.
      </h2>
    </div>

    <div class="musicBlock" id="classic">
      <h1>Classic</h1>
      <div>
        <p>Chaos From The Spring</p>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/3SPFzIRX_Ng" title="Chaos From The Spring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div>
        <p>The Winter Arrived</p>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/oJ04vc_eets" title="The Winter Arrived" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    <div class="musicBlock" id="games">
      <h1>Video Games</h1>
      <div>
        <p>Andante Encoraggiante</p>
        <audio controls controlslist="nodownload">
          <source src="AndanteEncoraggiante.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <h6>In this little 8/8 piece I developed a short motif 
          that could evolve into a bigger piece in the future.</h6>
      </div>
      <div>
        <p>Cliché</p>
        <audio controls controlslist="nodownload">
          <source src="cliche.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <h6>In this song I wanted to do a little 'Lo-fi' piece that could match as an ambiance music.</h6>
      </div>
    </div>

    <div class="musicBlock" id="soundtrack">
      <h1>Soundtrack</h1>
      <P>Empty for now</P>
    </div>

    <div class="musicBlock" id="lofi">
      <h1>Lo-fi</h1>
      <P>Empty for now</P>
    </div>
  </body>

</template>
  
<style scoped>
body{
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 5em;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  color: #f7dece;
}

.music{
  display: flex;
  flex-direction: column;
  grid-column: 1 / 5;
  height: auto;
  width: auto;
  margin: 2.5em 2.5em 1em 2.5em;  
}

.music h1{
  font-size: 5em;
}

.music h2{
  font-size: 2em;
  font-weight: 500;
  align-self: center;
}

.music h1, .music h2{
  text-align: center;
}

.musicBlock{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3vw;
  row-gap: 2vw;
  margin: 2.5vw;
  font-size: 3em;
}

.musicBlock iframe{
  border-radius: 20px;
}

.musicBlock audio{
  margin-top: 10px;
  width: 100%;
}
.musicBlock h1{
  grid-column: 1 / 3;
}

.musicBlock div p{
  font-size: .75em;
}

.musicBlock div h6{
  font-weight: 400;
  font-size: 0.5em;
}

@media screen and (max-width: 1000px) {


  .musicBlock{
    font-size: 1.75em;
  }

}

@media screen and (max-width: 600px){

.music h1{
  font-size: 2.5em;
}

.music h2{
  margin-top: 1.1em;
  font-size: 1.25em;
}

.musicBlock{
  margin: 5vw 5vw;
  font-size: 1.5em;
  grid-template-columns: 1fr;
  column-gap: 0;
  row-gap: 4vw;
}

#classic{
  margin-top: 10vh;
}

.musicBlock div{
  grid-column: 1;
}

.musicBlock iframe{
  height: 35vh;
}

}
</style>
