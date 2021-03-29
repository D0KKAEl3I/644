//basic
const date = document.getElementById('date')
const today = new Date()
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthList[today.getMonth()]
const day = today.getDate()
date.innerText = `${day} ${month}`
//cursor
const cursor = document.getElementById('cursor');
const cursorInfo = {
    dx: window.innerWidth / 2,
    dy: window.innerHeight / 2,
    x: 0,
    y: 0,
    speed: 0.15
}
window.onmousemove = e => {
    cursorInfo.x = e.clientX
    cursorInfo.y = e.clientY
}
function cursorAnim() {
    cursor.style.left = cursorInfo.dx + 'px';
    cursor.style.top = cursorInfo.dy + 'px';
    cursorInfo.dx += (cursorInfo.x - cursorInfo.dx) * cursorInfo.speed;
    cursorInfo.dy += (cursorInfo.y - cursorInfo.dy) * cursorInfo.speed;
}
//background
const canvas = document.getElementsByTagName('canvas')[0]
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.onresize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
document.onresize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

}
function makeText(x, y) {
    let lineHeight = window.innerWidth / 30
    ctx.font = lineHeight + 'px Times New Roman';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black'
    ctx.fillText('WELCOME!', x, y)
    ctx.fillText('ENJOY', x, y + lineHeight)
    ctx.fillText('YOUR STAY', x, y + lineHeight * 2)
}
let textsYpos = 0
function backgroundAnim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ffbb00'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const doorImage = document.getElementById('intro-door')
    const maxScroll = window.innerWidth / 1.5
    // const scope = 1
    const scope = (window.scrollY / maxScroll) * (window.innerWidth / doorImage.clientWidth) + 0.9
    const w = doorImage.clientWidth * scope
    const h = doorImage.clientHeight * scope
    const x = (window.innerWidth - w) / 2;
    const y = window.innerHeight / 2 - h * 0.3
    if (window.scrollY < maxScroll) {
        for (let y = 0; y < 8; y++) {
            for (let x = y % 2; x < 5; x += 2) {
                let xpos = x * window.innerWidth / 4
                let ypos = y * window.innerHeight / 4
                makeText(xpos, ypos + textsYpos)
            }
        }
        ctx.strokeRect(x, y, w, h)
    }
    ctx.clearRect(x, y, w, h)
    if (textsYpos > -window.innerHeight / 2)
        textsYpos -= 0.45
    else
        textsYpos = 0

}

(function render() {
    requestAnimationFrame(render);
    cursorAnim();
    backgroundAnim();
}())
// render()