// rho --> item / scale
// theta --> index * Math.PI / 180
// x --> rho * cos(theta)
// y --> rho * sin(theta)
// width --> rectWidth
// height --> rectHeight

const needle = (ctx, item, index) => {
    // item / scale, in order to avoid drawing rectangles out of bounds
    const scale = 3;
    // const [rectWidth, rectHeight] = [2, 2];
    // ctx.beginPath();
    // ctx.fillRect(
    //     (item / scale) * Math.cos((index * Math.PI) / 180),
    //     (item / scale) * Math.sin((index * Math.PI) / 180),
    //     rectWidth,
    //     rectHeight
    // );
    // ctx.closePath();

    const rho = 360 / 2;
    // ctx.fillStyle = JSON.parse(localStorage.getItem('HSLA'))[item];
    ctx.fillStyle = `hsla(${item},100%,50%,1)`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(0, 0, item / scale, index * Math.PI / 180, (index + 1) * Math.PI / 180);
    // ctx.arc(0, 0, rho, index * Math.PI / 180, (index + 0.5) * Math.PI / 180);
    ctx.closePath();
    ctx.fill();
};

export { needle }