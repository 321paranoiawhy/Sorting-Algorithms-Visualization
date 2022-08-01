import { circle } from "../DrawSingle/circle";
import { scatter2Line } from "../DrawSingle/scatter2Line";
import { scatter2Spiral } from "../DrawSingle/scatter2Spiral";
import { needle } from "../DrawSingle/needle";
import { waveform } from "../DrawSingle/waveform";
import { histogram } from "../DrawSingle/histogram";

const drawAll = (canvas, arr, delay, type) => {
    const ctx = canvas.value.getContext("2d");
    switch (type) {
        // 1. circle
        case "circle":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        -canvas.value.width / 2,
                        -canvas.value.height / 2,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        circle(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        // 2. scatter2Line
        case "scatter2Line":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        0,
                        -canvas.value.height,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        scatter2Line(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        // 3. scatter2Spiral
        case "scatter2Spiral":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        -canvas.value.width / 2,
                        -canvas.value.height / 2,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        scatter2Spiral(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        // 4. needle
        case "needle":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        -canvas.value.width / 2,
                        -canvas.value.height / 2,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        needle(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        // 5. waveform
        case "waveform":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        0,
                        -canvas.value.height / 2,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        waveform(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        // 6. histogram
        case "histogram":
            return new Promise((resolve) => {
                setTimeout(() => {
                    // clear canvas
                    ctx.clearRect(
                        0,
                        -canvas.value.height,
                        canvas.value.width,
                        canvas.value.height
                    );
                    arr.forEach((item, index) => {
                        histogram(ctx, item, index);
                    });
                    resolve("draw success");
                }, delay);
            });
            break;
        default:
            break;

    }
};

export { drawAll }