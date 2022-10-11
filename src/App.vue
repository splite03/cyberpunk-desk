<template>
  <div class="background" @mousemove="move($event)">
    <div class="img" @mousedown.prevent="grabed = true">

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

      <img src="@/assets/animated-parts/other/test.png" style="height:600px; width: 1000px; position: absolute; top: 200px; left: 250px; z-index: 51;opacity: 0; animation: opacity-on .4s forwards" alt="">
      <img src="@/assets/animated-parts/other/test-purple.png" style="height:600px; width: 1000px; position: absolute; top: 200px; left: 250px; z-index: 50;opacity: 0; animation: opacity-on .4s forwards" alt="">
      <img src="@/assets/animated-parts/other/test-white.png" style="height:600px; width: 1000px; position: absolute; top: 200px; left: 250px; z-index: 51;opacity: .8;;animation: opacity-off .4s forwards" alt="">
      <input type="text" style="font-family: 'Pixel'">

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
      <div class="head-zone-click">
        <div class="people-head"></div>
      </div>
      <div class="vape"></div>
      <div class="smoke-guy"></div>

    </div>
  </div>
  <div class="container"></div>
</template>

<script>
import logic from './logic.js'

export default logic
</script>
