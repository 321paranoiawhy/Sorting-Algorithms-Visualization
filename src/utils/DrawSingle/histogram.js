const histogram = (ctx, item, index) => {
    const scale = 3;
    const [rectWidth, rectHeight] = [1, item];
    ctx.fillStyle = `hsla(${item},100%,50%,1)`;
    ctx.beginPath();
    ctx.fillRect(
        index,
        -item,
        rectWidth,
        rectHeight
    );
    ctx.closePath();
};

export { histogram }