// x --> index
// y --> -item
// width --> rectWidth
// height --> rectHeight

const scatter2Line = (ctx, item, index) => {
    const [rectWidth, rectHeight] = [2, 2];
    ctx.beginPath();
    ctx.fillRect(
        index,
        -item,
        rectWidth,
        rectHeight
    );
    ctx.closePath();
};

export { scatter2Line }