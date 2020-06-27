const items = document.getElementsByClassName('item-img')
const selImg = document.getElementById('selected-img')
const selTitle = document.getElementById('item-selected-title')

import {out, ins, callInv, byeInv} from './functions.js'
console.log(out)

const inventory = document.querySelector('.inventory')

//audio
const cursorSound = new Audio('./sfx/menu-cursor.wav')
const openInv = new Audio('./sfx/menu-open.wav')
const closeInv = new Audio('./sfx/menu-close.wav')
const forestTheme = new Audio ('./music/Forest of Mystery.mp3')



for (let i = 0; i < items.length; i++) { 
  items[i].onmouseenter = () => {
    items[i].parentElement.style.border = '2.5px solid #20c028'
    items[i].style.padding = '2.5px'
    
    selImg.src = `./items/${items[i].parentElement.id}.png`
    let itemsId = `${items[i].parentElement.id}`
    let title = itemsId.replace(/-+/g, ' ')
    if (title == 'BOMBOS MEDALLION') {
      selTitle.style.left = '6px'
      selTitle.innerText = title
    } else {
    selTitle.innerText = title
    selTitle.style.left = '8px'
    }
  
    cursorSound.play()

  }

  items[i].onmouseout = () => {
    items[i].parentElement.style.border = 'none'
    items[i].style.padding = '5px'
    
  }


  onkeydown = (e) => {
    out(items, i )

    if (e.keyCode == 13) { ~
      // console.log('enter')
      inventory.classList.remove('animate__slideOutUp')
      callInv(inventory, openInv)
      forestTheme.volume=0.3
      forestTheme.play()
    }

    if (e.keyCode == 27) {
      // console.log('esc')
      byeInv(inventory, closeInv)
    }
   
    if(e.keyCode == 37) {
      if (i>0) {
        i--
      }
      // console.log('left')
    }
    if(e.keyCode == 38) {
      
     
      if(i==0 || i==1 || i==2 || i==3 || i==4) {
        i = i-0
      } else {
        i = i-5
      }
      // console.log('up')
    }
    if(e.keyCode == 39) {
      if (i<19) {
        i++
      }
      // console.log('right')
    }
    if(e.keyCode == 40) {

      if(i==15 || i==16 || i==17 || i==18 || i==19) {
        i = i+0
      } else {
        i = i+5
        
      } 
      // console.log('down')
    }

    ins(items, i, selImg, selTitle, cursorSound)

  }
  // const ins = () => {
    
  //   items[i].parentElement.style.border = '2.5px solid #20c028'
  //   items[i].style.padding = '2.5px'
  //   items[i].parentElement.classList.add('boarde')
  //   selImg.src = `./items/${items[i].parentElement.id}.png`
  //   let itemsId = `${items[i].parentElement.id}`
  //   let title = itemsId.replace(/-+/g, ' ')
  //   if (title == 'BOMBOS MEDALLION') {
  //     selTitle.style.left = '6px'
  //     selTitle.innerText = title
  //   } else {
  //     selTitle.innerText = title
  //     selTitle.style.left = '8px'
  //   }
  //   cursorSound.play()
    
    
  // }

  // const out = () => {
  //   items[i].parentElement.classList.remove('boarde')
  //   items[i].parentElement.style.border = 'none'
  //   items[i].style.padding = '5px'
    
  // }

  // const callInv = () => {
  //   inventory.style.display = ('block')
  //   inventory.classList.add('animate__slideInDown')
  //   openInv.play()
  // }

  // const byeInv = () => {
  //   inventory.classList.remove('animate__slideInDown')
  //   inventory.classList.add('animate__slideOutUp')
  //   closeInv.play()
  // }
  

}