let grid = document.querySelector('.grid3')

for (let i = 0; i <= 7; i++) {
    let content1 = document.createElement('div')
    let left = document.createElement('div')
    let right = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let b = document.createElement('b')
    let btn = document.createElement('button')
    let span = document.createElement('span')
    let column = document.createElement('div')
    let magaz = document.createElement('span')
    let button = document.createElement('button')
    let menu = document.createElement('i')




    content1.classList.add('phone1')
    btn.classList.add('buy')
    left.classList.add('left1')
    right.classList.add('right1')
    span.classList.add('material-symbols-outlined')
    span.classList.add('flex5')
    column.classList.add('column')
    menu.classList.add('bx')
    menu.classList.add('bx-heart')
    button.classList.add('buypr')
    img.src = "./img/rme.jpeg"

    p.innerHTML = "Смартфон Realme GT  Master  Edition 5G 6/128GB Daybreak blue"
    b.innerHTML = "3 960 000 сум"
    btn.innerHTML = "330 000 сум x 12 мес"
    
    button.innerHTML = "В рассрочку"

    grid.append(content1)
    content1.append(left, right, menu, column)
 
    left.append(img)
    column.append(p, b, btn)
    content1.append(magaz, button)
}


let slide = document.querySelectorAll('.slide-item')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    if (slide_next ===-1) {
    } else {
        slide_next--
        shou_slide(slide_next)
    }

}


next.onclick = () => {
    if (slide_next === 4) {
    } else {
        slide_next++
        shou_slide(slide_next)
    }
}



