// x --> index
// y --> -item / scale
// width --> rectWidth
// height --> rectHeight (2 * item / scale)

const waveform = (ctx, item, index) => {
    const [rectWidth, rectHeight] = [2, item];
    ctx.beginPath();
    ctx.fillRect(
        index,
        -item / 2,
        rectWidth,
        rectHeight
    );
    ctx.closePath();
};

export { waveform }