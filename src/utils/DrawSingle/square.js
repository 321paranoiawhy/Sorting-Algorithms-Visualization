const square = (ctx, item, index) => {
    const rho = 360 / 2;
    ctx.fillStyle = `hsla(${item},100%,50%,1)`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(0, 0, rho, index * Math.PI / 180, (index + 1) * Math.PI / 180);
    // ctx.arc(0, 0, rho, index * Math.PI / 180, (index + 0.5) * Math.PI / 180);
    ctx.closePath();
    ctx.fill();
};

export { square }