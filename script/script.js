//cursor
const cursor = document.getElementById('cursor');
const cursorInfo = {
    dx: (document.body.clientWidth - cursor.clientWidth) / 2,
    dy: (document.body.clientHeight - cursor.clientHeight) / 2,
    x: 0,
    y: 0,
    speed: 0.2

}
window.onmousemove = e => {
    cursorInfo.x = e.clientX - cursor.clientWidth / 2
    cursorInfo.y = e.clientY - cursor.clientHeight / 2
    console.log(cursorInfo)
}
function animate() {
    requestAnimationFrame(animate);
    cursor.style.left = cursorInfo.dx + 'px';
    cursor.style.top = cursorInfo.dy + 'px';
    cursorInfo.dx += (cursorInfo.x - cursorInfo.dx) * cursorInfo.speed;
    cursorInfo.dy += (cursorInfo.y - cursorInfo.dy) * cursorInfo.speed;
}
animate()
    ``
//background
const canvas = document.getElementsByTagName('canvas')[0]
const ctx = canvas.getContext('2d')
function makeText(x, y) {
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.strokeText('WELCOME!', x, y)
    ctx.strokeText('ENJOY', x, y + 50)
    ctx.strokeText('YOUR STAY', x, y + 100)
}
makeText(150, 100)
window.onresize = () => {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
}