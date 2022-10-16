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
        notes:['Hello','My name is Daniel','And here is Notes','...','Welcome!'],
        inputHandler: '',
        lastIdx: 0,
      }
    },
    methods:{
        // штучка чтобы в зуме свайпать бэк и чекать позишн элементов, для точной настройки в инструментах разработчика(а потом в продашн)
      move(e){
        let topPos =  document.documentElement.style
        let leftPos = document.documentElement.style
        
        if (!this.grabed) return
        topPos.setProperty('--top-pos',`${this.y += e.movementY}px` )
        leftPos.setProperty('--left-pos', `${this.x += e.movementX}px`)
      },
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
      },
      // ОБНОВЛЕНИЕ GIF ПРИ КАЖДОЙ ПЕРЕЗАГРУЗКЕ, ЧТОБЫ СИНХРОНИЗИРОВАТЬ С BOX-SHADOW
      gifRestart(){
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
      },
      // ЛОЧИМ СКРОЛЛ ИБО ТАК ПРОЩЕ ВСЕГО ДОДЖИТЬ МОМЕНТЫ С РЕСАЙЗОМ
      lockScroll(){
        window.addEventListener('keydown', (event) => {
          if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
          }
        })
        window.addEventListener('mousewheel', (event) => {
          if (event.ctrlKey == true) {
            event.preventDefault();
          }
        },{passive: false})
      },
      isTextEmpty(idx){
        let lines = document.querySelectorAll('.upper-lines')

        this.rotateBtn()
        try{
          if (lines[idx].value.trim() === ''){
            this.notes.splice(idx, 1)
            return
          }
          this.submitLine(idx)
        }catch {
          console.log('Out of lines');
        }
      },
      submitLine(idx){
        try{
          let line = document.querySelectorAll('.upper-lines')[idx]
          this.notes[idx] = line.value
          console.log(this.notes[idx]);
        }catch{
          console.log('error submit');
        }
      },
      rotateBtn(){
        const btnAdd = document.querySelector('.btn-add')

        btnAdd.classList.remove('btn-add-rotate')
      },
      checkBoxToggle(idx){
        const upper = document.querySelectorAll('.upper-box')
        const lower = document.querySelectorAll('.lower-box')

        if(!upper[idx].classList[2]){
          upper[idx].classList.add('checked-box')
          lower[idx].classList.add('checked-box')
          return
        }
        upper[idx].classList.remove('checked-box')
      },
      addNote(){
        let lastLine = document.querySelectorAll('.upper-lines')[this.notes.length - 1]
        const btnAdd = document.querySelector('.btn-add')

        if(lastLine.value !== ''){
          this.notes.push('')
          setTimeout(() => {
            document.querySelectorAll('.upper-lines')[this.notes.length - 1].focus() // Обращаемся напрямую, ибо после пуша дом-дерево дополнилось и переменная стала неактуальна
          }, 1)
          btnAdd.classList.add('btn-add-rotate')
          return
        }
      }
    },
    mounted(){
      this.gifRestart()
      this.lockScroll()
    }
  }