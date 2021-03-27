//basic
window.scroll
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
    ctx.font = window.innerWidth / 40 + 'px Times New Roman';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black'
    let lineHeight = window.innerWidth / 40
    ctx.fillText('WELCOME!', x, y)
    ctx.fillText('ENJOY', x, y + lineHeight)
    ctx.fillText('YOUR STAY', x, y + lineHeight * 2)
}
let textsYpos = 0
function backgroundAnim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ffbb00'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const maxScroll = window.innerWidth / 1.5
    const w = window.innerWidth * (0.3 + window.scrollY / maxScroll * 0.7);
    const h = w * 2;
    const x = (window.innerWidth - w) / 2;
    const y = window.innerHeight / 2 - h * 0.3
    if (window.scrollY < maxScroll) {
        for (let y = 0; y < 8; y++) {
            for (let x = y % 2; x < 5; x += 2) {
                let xpos = x * window.innerWidth / 4
                let ypos = y * window.innerHeight / 5.5
                makeText(xpos, ypos + textsYpos)
            }
        }
        ctx.strokeRect(x, y, w, h)
    }
    ctx.clearRect(x, y, w, h)
    if (textsYpos > -window.innerHeight / 2.75)
        textsYpos -= 0.1
    else
        textsYpos = 0
    //erase area

}

(function render() {
    requestAnimationFrame(render);
    cursorAnim();
    backgroundAnim();
}())
// render()