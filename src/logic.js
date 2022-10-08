import smallShip from '@/components/small-ship.vue';

export default {
  components:{smallShip},
    data(){
      return{
        grabed: false,
        x: 0,
        y: 0,
        animated: false,
        // НИЖЕ ФЛАГИ ДЛЯ SCALE ONCLICK
        leftPinkBord: false,
        bigOrangeBord: false,
        darkGreenRightBord: false,
        darkGrinBordOverPrawn: false,
        innPinkBord: false,
        lowerBlueBord: false,
        lowerPinkBord: false,
        prawnBord: false,
        smallYellowBordLeft: false,
        // xStart: 0,
        // yStart: 0,
        // curX:0,
        // curY: 0,
        // xPos:0,
        // yPos: 0
      }
    },
    methods:{
        // штучка чтобы в зуме свайпать бэк и чекать позишн элементов, для точной настройки в инструментах разработчика(а потом в продашн)
      move(e){
        let topPos =  document.documentElement.style
        let leftPos = document.documentElement.style
        console.log(e);
        if (!this.grabed) return
        topPos.setProperty('--top-pos',`${this.y += e.movementY}px` )
        leftPos.setProperty('--left-pos', `${this.x += e.movementX}px`)
      },
      // movePhone(e){
      //   let topPos =  document.documentElement.style
      //   let leftPos = document.documentElement.style
      //   let x = e.touches[0].clientX
      //   let y = e.touches[0].clientY

      //   if (!this.grabed) return
      //   topPos.setProperty('--top-pos',`${(this.yPos + (y - this.yStart))/ 25}px`)
      //   leftPos.setProperty('--left-pos', `${(this.xPos + (x-this.xStart))/ 25}px` )
      //   this.xPos += (x - this.xStart)
      //   this.yPos += (y - this.yStart)
        
      // },
      scaleFalsityToggle(bord){
        if (bord === 'left-pink-bord')  this.leftPinkBord = !this.leftPinkBord
        if (bord === 'big-orange-bord') this.bigOrangeBord = !this.bigOrangeBord
        if (bord === 'dark-green-right-bord') this.darkGreenRightBord = !this.darkGreenRightBord
        if (bord === 'dark-grin-bord-over-prawn') this.darkGrinBordOverPrawn = !this.darkGrinBordOverPrawn
        if (bord === 'inn-pink-bord') this.innPinkBord = !this.innPinkBord
        if (bord === 'lower-blue-bord') this.lowerBlueBord = !this.lowerBlueBord
        if (bord === 'lower-pink-bord') this.lowerPinkBord = !this.lowerPinkBord
        if (bord === 'prawn-bord') this.prawnBord = !this.prawnBord
        if (bord === 'small-yellow-bord-left') this.smallYellowBordLeft = !this.smallYellowBordLeft
      },
      scaleFalsity(bord){
        if (bord === 'left-pink-bord') return this.leftPinkBord 
        if (bord === 'big-orange-bord') return this.bigOrangeBord 
        if (bord === 'dark-green-right-bord') return this.darkGreenRightBord 
        if (bord === 'dark-grin-bord-over-prawn') return this.darkGrinBordOverPrawn
        if (bord === 'inn-pink-bord') return this.innPinkBord 
        if (bord === 'lower-blue-bord') return this.lowerBlueBord
        if (bord === 'lower-pink-bord') return this.lowerPinkBord
        if (bord === 'prawn-bord') return this.prawnBord
        if (bord === 'small-yellow-bord-left') return this.smallYellowBordLeft
      },
      scale(e){
        let bord = e.target
        let light = document.querySelector(`.light-${bord.classList[0]}`)
        let root = document.documentElement.style
        let opacitys = window.getComputedStyle(light).opacity
        
        console.log(bord.classList[0]);
        // Проверка на каждый борд, чтобы можно было щелкать несколько штук
        if(this.scaleFalsity(bord.classList[0])) return

        // Подготовка к анимации
        this.scaleFalsityToggle(bord.classList[0])
        bord.style.animation = 'none'
        root.setProperty('--url-image-animation', `var(--${bord.classList[0]})`)
        light.style.animation = 'none'
        light.style.opacity = `${opacitys}`
    
        // Анимация клика и возврат к light-in-out. Первый тайм-аут нужен, чтобы произошел рендер
        setTimeout(() => {
          bord.style.animation = 'click-bord 1s'
          root.setProperty('--url-image-animation-off', `var(--${bord.classList[0]}-off)`)
          root.setProperty('--opacity-light-in-out', `${opacitys}`)
          light.style.animation = 'click-bord-light 1s'
        }, 1)
        setTimeout(() => {
            light.style.animation = 'light-in-out 6s .4s infinite steps(var(--steps))'
            light.style.opacity = `1`
            this.scaleFalsityToggle(bord.classList[0])
        },1001)
      }
    },
    mounted(){
      window.addEventListener('mouseup',() => this.grabed = false)
      setTimeout(() => {
        document.querySelector('.gun-ship-wrapper').style.left = '-100px'
      }, 39999);

      const img = document.querySelector('.img')
      const background = document.querySelector('.background')

      // img.addEventListener('touchstart', (e) => {

      //   this.xStart = e.touches[0].clientX
      //   this.yStart = e.touches[0].clientY
      //   this.grabed = true
      // })
      // img.addEventListener('touchend', () => {

      //   this.grabed = false
      //   this.curX = this.xPos - this.xStart
      //   this.curY = this.yPos - this.yStart
      // })
      // background.addEventListener('touchmove', (e) => {
      //   this.movePhone(e)
      // })

      const hotdog = document.querySelector('.hot-dog')
      const empty = document.querySelector('.empty')
      let hotdogSrc = hotdog.getAttribute('src')
      let emptySrc = empty.getAttribute('src')

      hotdog.setAttribute('src', emptySrc)
      hotdog.style.opacity = '0'
      setTimeout(() => {
        hotdog.setAttribute('src', hotdogSrc)
        hotdog.style.opacity = '1'
      }, 30)
    }
  }