// rho --> item / scale
// theta --> index * Math.PI / 180
// x --> rho * cos(theta)
// y --> rho * sin(theta)
// width --> rectWidth
// height --> rectHeight

const scatter2Spiral = (ctx, item, index) => {
    // item / scale, in order to avoid drawing rectangles out of bounds
    const scale = 3;
    const [rectWidth, rectHeight] = [2, 2];
    ctx.beginPath();
    ctx.fillRect(
        (item / scale) * Math.cos((index * Math.PI) / 180),
        (item / scale) * Math.sin((index * Math.PI) / 180),
        rectWidth,
        rectHeight
    );
    ctx.closePath();
};

export { scatter2Spiral }