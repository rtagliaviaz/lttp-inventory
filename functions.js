export const out = (items, i) => {
  items[i].parentElement.classList.remove('boarde')
  items[i].parentElement.style.border = 'none'
  items[i].style.padding = '5px'
}

export const ins = (items, i, selImg, selTitle, cursorSound) => {
  items[i].parentElement.style.border = '2.5px solid #20c028'
  items[i].style.padding = '2.5px'
  items[i].parentElement.classList.add('boarde')
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

export const callInv = (inventory, openInv) => {
  inventory.style.display = ('block')
  inventory.classList.add('animate__slideInDown')
  openInv.play()
}

export const byeInv = (inventory, closeInv) => {
  inventory.classList.remove('animate__slideInDown')
  inventory.classList.add('animate__slideOutUp')
  closeInv.play()
}


