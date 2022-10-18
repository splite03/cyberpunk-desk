<template>
  <div class="background">
    <div class="img" @mousedown="isTextEmpty(lastIdx), grabed = true" @mousemove="move($event)">

      <!-- ТРИ УРОВНЯ ГЛУБИНЫ - СЛОИ ГОРОДА -->

      <div class="depth-levels third-level-depth"></div>
      <div class="depth-levels second-level-depth"></div>
      <div class="depth-levels first-level-depth"></div>

      <!-- БОРДЫ -->

      <div class="light-left-pink-bord light left-pink-bord-wrapper"></div>
      <div class="left-pink-bord-wrapper bord-wrapper">
        <div class="left-pink-bord bord" @click="scale($event)"></div>
      </div>

      <div class="light-behind-orange-yellow-bord light behind-orange-yellow-bord-wrapper"></div>
      <div class="behind-orange-yellow-bord-wrapper bord-wrapper">
        <div class="behind-orange-yellow-bord bord"></div>
      </div>

      <div class="light-big-orange-bord light big-orange-bord-wrapper"></div>
      <div class="big-orange-bord-wrapper bord-wrapper">
        <div class="big-orange-bord bord" @click="scale($event)"></div>
      </div>

      <div class="light-blue-right-bord light blue-right-bord-wrapper"></div>
      <div class="blue-right-bord-wrapper bord-wrapper">
        <div class="blue-right-bord bord"></div>
      </div>

      <div class="light-dark-green-right-bord light dark-green-right-bord-wrapper"></div>
      <div class="dark-green-right-bord-wrapper bord-wrapper">
        <div class="dark-green-right-bord bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-dark-grin-bord-over-prawn light dark-grin-bord-over-prawn-wrapper"></div>
      <div class="dark-grin-bord-over-prawn-wrapper bord-wrapper">
        <div class="dark-grin-bord-over-prawn bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-inn-pink-bord light inn-pink-bord-wrapper"></div>
      <div class="inn-pink-bord-wrapper bord-wrapper">
        <div class="inn-pink-bord bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-lower-blue-bord light lower-blue-bord-wrapper"></div>
      <div class="lower-blue-bord-wrapper bord-wrapper">
        <div class="lower-blue-bord bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-lower-pink-bord light lower-pink-bord-wrapper"></div>
      <div class="lower-pink-bord-wrapper bord-wrapper">
        <div class="lower-pink-bord bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-prawn-bord light prawn-bord-wrapper"></div>
      <div class="prawn-bord-wrapper bord-wrapper">
        <div class="prawn-bord bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-small-blue-bord-left light small-blue-bord-left-wrapper"></div>
      <div class="small-blue-bord-left-wrapper bord-wrapper">
        <div class="small-blue-bord-left bord"></div>
      </div>
      
      <div class="light-small-bottom-right-blue-bord light small-bottom-right-blue-bord-wrapper"></div>
      <div class="small-bottom-right-blue-bord-wrapper bord-wrapper">
        <div class="small-bottom-right-blue-bord bord"></div>
      </div>
      
      <div class="light-small-yellow-bord-left light small-yellow-bord-left-wrapper"></div>
      <div class="small-yellow-bord-left-wrapper bord-wrapper">
        <div class="small-yellow-bord-left bord" @click="scale($event)"></div>
      </div>
      
      <div class="light-whs-yellow-bord light whs-yellow-bord-wrapper"></div>
      <div class="whs-yellow-bord-wrapper bord-wrapper">
        <div class="whs-yellow-bord bord" ></div>
      </div>

      <!-- МАШИНЫ-КОРАБЛИ-ЛЕТАЮЩИЕ ВСЯКИЕ -->

      <div class="dirigible-wrapper">
        <div class="dirigible ship"></div>
        <div class="dirigible-light light-one"></div>
        <div class="dirigible-light light-two"></div>
        <div class="dirigible-light light-tree"></div>
        <div class="dirigible-light light-four"></div>
      </div>

      <div class="between-bildings-ship-wrapper ship-wrapper">
        <div class="between-bildings-ship ship"></div>
        <div class="between-bildings-ship-light light-ship"></div>
      </div>

      <div class="bird-ship-wrapper ship-wrapper">
        <div class="bird-ship ship"></div>
        <div class="bird-ship-light light-ship"></div>
      </div>

      <div class="cool-ship-wrapper ship-wrapper">
        <div class="cool-ship ship"></div>
        <div class="cool-ship-light light-ship"></div>
      </div>

      <div class="fish-ship-wrapper ship-wrapper">
        <div class="fish-ship ship"></div>
        <div class="fish-ship-light light-ship"></div>
      </div>

      <div class="fish-small-ship-wrapper ship-wrapper">
        <div class="fish-small-ship ship"></div>
        <div class="fish-small-ship-light light-ship"></div>
      </div>

      <div class="fish-small-ship-wrapper ship-wrapper" style="right: 200px; top: 300px; animation-delay: .3s;">
        <div class="fish-small-ship ship"></div>
        <div class="fish-small-ship-light light-ship"></div>
      </div>

      <div class="gun-ship-wrapper ship-wrapper">
        <div class="gun-ship ship"></div>
        <div class="gun-ship-light light-ship"></div>
      </div>

      <div class="hot-dog-ship-wrapper ship-wrapper">
        <img src="@/assets/animated-parts/ships/hot-dog-ship-spins.gif" class="hot-dog ship" alt="">
        <img src="@/assets/animated-parts/ships/hot-dog-ship-spins-empty.png" style="position: absolute ; display: none;" class="empty" alt="">
        <div class="hot-dog-light light-ship"></div>
      </div>

      <div class="pink-ship-wrapper ship-wrapper">
        <div class="pink-ship ship"></div>
        <div class="pink-ship-light light-ship"></div>
      </div>

      <div class="pistol-ship-wrapper ship-wrapper">
        <div class="pistol-ship ship"></div>
        <div class="pistol-ship-light light-ship"></div>
      </div>

      <div class="ship2-wrapper ship-wrapper">
        <div class="ship2 ship"></div>
        <div class="ship2-light light-ship"></div>
      </div>

      <div class="ship3-wrapper ship3-1 ship-wrapper">
        <div class="ship3 ship"></div>
        <div class="ship3-light light-ship"></div>
      </div>

      <div class="ship3-wrapper ship3-2 ship-wrapper">
        <div class="ship3 ship"></div>
        <div class="ship3-light light-ship"></div>
      </div>

      <div class="ship-one-wrapper ship-wrapper">
        <div class="ship-one ship"></div>
        <div class="ship-one-light light-ship"></div>
      </div>

      <div class="small-bird-flying-ship-wrapper ship-wrapper">
        <div class="small-bird-flying-ship ship"></div>
      </div>

      <div class="small-bird-flying-ship-two-wrapper ship-wrapper">
        <div class="small-bird-flying-ship-two ship"></div>
      </div>

      <small-ship style="top: 300px; left: 250px"></small-ship>
      <small-ship style="top:348px;left:176px;animation-delay: .5s;"></small-ship>

      
      <!-- ПАЧКА ВОЗЛЕ ЦЕНТРАЛЬНОГО ПРОЖЕКТОРА -->
      
      <small-ship style="top:366px;left:635px;animation-delay: 0;"></small-ship>
      <small-ship style="top:391px;left:677px;animation-delay: .2s;"></small-ship>
      <small-ship style="top:382px;left:729px;animation-delay: .5s;"></small-ship>
      <small-ship style="top:361px;left:774px;animation-delay: .3s;"></small-ship>
      <small-ship style="top:336px;left:665px;animation-delay: .5s;"></small-ship>
      <small-ship style="top:344px;left:720px;animation-delay: .8s;"></small-ship>
      
      <!-- ПАЧКА ПОД САМОЙ ВЫСОКОЙ БАШНЕЙ -->

      <small-ship style="top: 400px; left: 977px; width: 9px; height: 6px; animation-delay: .2s;"></small-ship>
      <small-ship style="top: 420px; left: 1030px; width: 9px; height: 6px; animation-delay: .4s"></small-ship>
      <small-ship style="top: 379px; left: 1011px; width: 9px; height: 6px; animation-delay: .1s"></small-ship>
      <small-ship style="top: 393px; left: 1037px; width: 9px; height: 6px; animation-delay: ..5s"></small-ship>
      <small-ship style="top: 407px; left: 1060px; width: 9px; height: 6px; animation-delay: .3s"></small-ship>
      
      <!-- ПАЧКА ВОЗЛЕ БОЛЬШОГО ЖЕЛТОГО БОРДА -->
      
      <small-ship style="top:249px;left:1460px;animation-delay:0s;z-index: 11;"></small-ship>
      <small-ship style="top:262px;left:1517px;animation-delay:.2s;z-index: 11"></small-ship>
      <small-ship style="top:275px;left:1570px;animation-delay:.5s;z-index: 11"></small-ship>
      <small-ship style="top:231px;left:1492px;animation-delay:.3s;z-index: 11"></small-ship>
      
      <!-- ПАЧКА САМАЯ ПРАВАЯ -->
      
      <small-ship style="top:426px;animation-delay:.2s;right:40px"></small-ship>
      <small-ship style="top:428px;animation-delay:.5s;right:14px"></small-ship>
      <small-ship style="top:451px;animation-delay:.3s;right:7px"></small-ship>
      
      <!-- ПРОЖЕКТОРА -->
      
      <div class="light-stick">
        <img src="@/assets/animated-parts/other/light-stick.png" alt="">
      </div>
      
      <div class="long-light-stick first-light-stick">
        <img src="@/assets/animated-parts/other/long-light-stick.png" alt="">
      </div>
      <div class="long-light-stick second-light-stick">
        <img src="@/assets/animated-parts/other/long-light-stick.png" alt="">
      </div>
      
      <!-- ОСТАЛЬНОЕ -->
      
      <div class="elevator-wrapper">
        <div class="elevator-path"></div>
        <div class="elevator"></div>
      </div>
      <div class="head-zone-click" @click="headMove($event)">
        <img class="people-head" src="@/assets/animated-parts/other/head.png">
      </div>
      <div class="vape"></div>
      <div class="smoke-guy"></div>
      <img src="@/assets/animated-parts/other/first-rope.gif" class="rope short-rope left-side-short-rope" alt="">
      <img src="@/assets/animated-parts/other/first-rope.gif" class="rope short-rope left-side-short-rope-second" alt="">
      <!-- <img src="@/assets/animated-parts/other/second-rope.gif" class="rope long-rope left-side-long-rope" alt=""> -->
      
    </div>

    <!-- БОРД С ЗАМЕТКАМИ -->

    <div class="container">

      <div class="table" v-if="notesOpened">
        <div class="light-top" style="margin-bottom: 5px">
          <div class="light-top" style="box-shadow: 0 0 4px 2px white">
            <div class="light-top" style="box-shadow: 0 0 1px 1px white"></div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-text-wrapper">
            <div class="notes-header-wrapper">
              <p class="text-notes notes-header" style="width: 80%">#Notes {{notes.length}}/14</p>
              <div class="sounds-off" @click="disableSounds($event)"></div>
              <div class="btn-power-blue" @click="togglePower($event, 'off'), playSound('pew')"></div>
            </div>
            <hr>

            <div class="table-input-wrapper upper-wrapper" v-for="(note, index) in notes" :key="note">
              <span class="btn-check-box upper-box" @click="checkBoxToggle(index), playSound('blip')"></span>
              <input :value="note" :class="`text-notes input-text upper-lines`" 
              @click="playSound('tap')"
              @keypress.enter.exact="$event.target.blur()"
              @keypress="rotateBtn()"
              @blur="isTextEmpty(index)"
              @keydown.shift.delete="$event.target.value = '', $event.target.blur()">
            </div>
            <div class="btn-add-outer">
              <div class="btn-add" @click="addNote(), playSound('tap')">
                <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;"></div>
                <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;"></div>
                <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;box-shadow: 0 0 2px 1px #ffffff;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="light-bot">
          <div class="light-bot" style="box-shadow: 0 0 4px 2px white">
            <div class="light-bot" style="box-shadow: 0 0 1px 1px white"></div>
          </div>
        </div>
      </div>

      <div class="table table-cliped" v-if="notesOpened">
        <div class="light-top" style="margin-bottom: 5px">
          <div class="light-top" style="box-shadow: 0 0 4px 2px white">
            <div class="light-top" style="box-shadow: 0 0 1px 1px white"></div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-text-wrapper">
            <div class="notes-header-wrapper" style="padding-left: 30px">
              <p class="text-notes notes-header">#Notes</p>
              <div class="blue-power-wrapper" style="margin-right: 30px">
                <div class="btn-power-click-zone click-zone-btn-power-blue" @click="togglePower($event, 'off')"></div>
                <div class="btn-power blue"></div>
              </div>
            </div>
            <div class="table-input-wrapper" v-for="(note) in notes" :key="note" style="padding-left: 30px">
              <span class="btn-check-box lower-box"></span>
              <p :class="`text-notes input-text`">{{note}}</p>
            </div>
            <div class="btn-add-outer" style="margin-left: 30px">
              <div class="btn-add" >
                <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;"></div>
                <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;"></div>
                <div class="plus-stick" style="top: 20px; width: 20px;left: 25px;box-shadow: 0 0 2px 1px #ffffff;"></div>
                <div class="plus-stick" style="top: 10px; height: 20px;left: 35px;box-shadow: 0 0 2px 1px #ffffff;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="light-bot">
          <div class="light-bot" style="box-shadow: 0 0 4px 2px white">
            <div class="light-bot" style="box-shadow: 0 0 1px 1px white"></div>
          </div>
        </div>
      </div>
      
      <div class="btn-power-wrapper">
        <div class="btn-power-click-zone" @click="togglePower($event, 'on'), playSound('pew')"></div>
        <div class="btn-power"></div>
      </div>

      <div class="back-to">Back to portfolio</div>
      <div class="play" @click.prevent="play($event)"></div>

      <audio loop preload ="auto" class="music">
        <source src="@/audio/electronic-senses-yesterday.mp3">
      </audio>
      <audio preload ="auto" class="pew">
        <source src="@/audio/pew.mp3">
      </audio>
      <audio preload ="auto" class="tap">
        <source src="@/audio/tap.mp3">
      </audio>
      <audio preload ="auto" class="shh">
        <source src="@/audio/shh.mp3">
      </audio>
      <audio preload ="auto" class="blip">
        <source src="@/audio/blip.mp3">
      </audio>

    </div>
  </div>
</template>

<script>
import logic from './logic.js'

export default logic
</script>

<style>
.play{
  height: 30px;
  width: 30px;
  z-index: 50;
  position: absolute;
  top: 32px;
  left: 350px;
  background-size: cover;
  background-image: url(@/assets/animated-parts/other/play.png);
}
.play:hover{
  background-image:url(@/assets/animated-parts/other/play-light.png) ;
}
.playing{
  background-image:url(@/assets/animated-parts/other/pause.png) ;
}
.playing:hover{
  background-image:url(@/assets/animated-parts/other/pause-light.png) ;
}
.back-to{
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 36px;
  z-index: 50;
  color: rgba(255, 255, 255, 0.297);
  cursor: pointer;
  transition: all .4s ease-in-out;
}
.back-to:hover{
  color: #beebff;
  text-shadow: 0 0 15px #7dfffc;
}
.btn-power-wrapper{
  position: absolute;
  top: calc(50% - 94px);
  left: calc(50% - 85px);
  height: 189px;
  width: 171px;
  z-index: 49;
  transition: all .3s ease-in-out;
}
.btn-power-click-zone{
  height: 114px;
  width: 101px;
  position: absolute;
  top: calc(50% - 57px);
  left: calc(50% - 50px);
  cursor: pointer;
}
.btn-power{
  background-image: url(@/assets/animated-parts/other/power-hover-unlight.png);
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 55;
  transition: all .15s ease-in-out;
}
.btn-power-click-zone:hover + .btn-power{
  background-image: url(@/assets/animated-parts/other/power-hover-light.png);
}
.btn-power-blue{
  background-image: url(@/assets/animated-parts/other/power-hover-blue-light.png);
  background-size: cover;
  transition: all .3s;
  height: 60px;
  width: 60px;
  cursor: pointer;
}
.sounds-off{
  background-image: url(@/assets/animated-parts/other/sound-off.png);
  background-size: cover;
  transition: all .3s;
  height: 60px;
  width: 60px;
  cursor: pointer;
}
.sounds-off:hover, .btn-power-blue:hover{
  opacity: .7;
}
.sounds-disabled{
  background-image: url(@/assets/animated-parts/other/sound-off-disabled.png);
}
.btn-power-blue-clicked{
  background-image: url(@/assets/animated-parts/other/power-hover-blue-unlight.png);
}
.notes-header-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.hider-table{
  height: 20px;
  width: 1000px;
  overflow: hidden;
  position: absolute;
  top: 92px;
  left: 195px;
}
.table { 
  width: 1000px;
  height: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;  
  left: calc(50% - 500px);
  transform: scaleX(0);
  opacity: 1;
  animation: scaleX-full .5s .3s forwards 1 steps(15), scale-full .6s .8s forwards 1 steps(15); 
  /* scale-null .6s forwards 1 steps(15),scaleX-null .5s .6s forwards 1 steps(15) */
}
.table-cliped{
  margin: 0;
  position: absolute;
  background-color: #77ffff;
  overflow: hidden;
  clip-path: polygon(0% -5%, 100% -5%,100% 0%, 0% 0%);
  animation: glitch 25s 5s infinite steps(70), scaleX-full .5s .3s forwards 1 steps(15), scale-full .6s .8s forwards 1 steps(15); ;
}
.light-top { 
  width: 100%;
  box-shadow: 0 0 10px 10px #00e0ff;
}
.table-body { 
  height: 100%;
  background: linear-gradient(to bottom, #00e0ff6b, #dc00ff6b);
  overflow: hidden;
}
.light-bot { 
  width: 100%;
  box-shadow: 0 0 10px 10px #00e0ff;
}
.table-text-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  width: 100%;
  padding-top: 30px;
}
.table-input-wrapper{
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  transition: height .8s ease-in-out;
  height: 40px;
}
.btn-check-box{
  height: 20px;
  width: 20px;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 12%;
  margin: 0 10px 0 20px;
  transition: box-shadow .1s ease-in-out, background-color .1s ease-in-out;
}
.btn-check-box:hover{
  box-shadow: 0 0 4px 2px rgb(85, 215, 255);
}
.btn-add{
  align-self: center;
  height: 40px;
  width: 72px;
  position: relative;
  margin: 0 auto;
  transition: transform .2s ease-in-out;
}
.btn-add-outer{
  align-self: center;
  width: 84px;
  background: #00fff74d;
  border-radius: 5%;
  border: 3px solid #7dfffc;
  margin-top: 20px;
}
.plus-stick{
  box-shadow: 0 0 5px 4px #61ecff;
  position: absolute;
}
.btn-add-rotate{
  transform: rotate(45deg);
}
.text-notes{
  font-size: 40px;
  color: white;
  text-shadow: 0 0 5px rgb(133 184 255), 0 0 10px rgb(53 137 255), 0 0 15px rgb(0 107 255);
  background: transparent;
  border: 0;
  width: 100%;
  padding-left: 10px;
}
.checked-box{
  box-shadow: 0 0 8px 3px rgb(85, 215, 255);
  background-color: white;
}
.notes-header{
  margin-left: 20px;
  font-size: 48px;
}
.input-text:focus-visible{
  outline: 0;
  background: #00e1ff4a;
}
@keyframes scale-null {
  to{
    top: 50%;
    height: 0;
  }
}
@keyframes scaleX-null {
  to{
    transform: scaleX(0);
  }
}
@keyframes scale-full {
  to{
    /* transform: scaleY(1); */
    height: 80vh;
    top: 10%;
  }
}
@keyframes scaleX-full {
  50%{
    opacity: 1;
  }
  100%{
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes glitch {
  20%{
    clip-path: polygon(0% 110%, 100% 110%,100% 115%, 0% 115%);
  }
  100%{
    clip-path: polygon(0% 110%, 100% 110%,100% 115%, 0% 115%);
  }
}
</style>