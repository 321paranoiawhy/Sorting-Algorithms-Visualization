<template>
    <div class="margin-top-bottom">
        <div class="switch-container">
            <div class="switch">
                <!-- https://element-plus.org/zh-CN/component/switch.html -->
                <!-- order -->
                <template v-if="orderSwitch">
                    <span :class="order ? 'on' : 'off'">Order: </span>
                    <!-- when direction switch is false, then el-switch will not have class 'left' -->
                    <!-- cause there is just one switch (order switch) -->
                    <el-switch
                        v-model="order"
                        style="
                            --el-switch-on-color: var(--main-color);
                            --el-switch-off-color: var(--third-color);
                        "
                        :content="
                            order ? `Ascending Order` : `Descending Order`
                        "
                        v-tippy="{
                            arrow: true,
                            arrowType: 'round',
                            placement: 'bottom',
                        }"
                        @click="showOrder()"
                        :class="{ left: directionSwitch }"
                    ></el-switch>
                </template>
            </div>
            <div class="switch">
                <!-- direction -->
                <template v-if="directionSwitch">
                    <span class="right" :class="direction ? 'on' : 'off'"
                        >Direction:
                    </span>
                    <el-switch
                        v-model="direction"
                        style="
                            --el-switch-on-color: var(--main-color);
                            --el-switch-off-color: var(--third-color);
                        "
                        :content="
                            direction
                                ? `from Start to End`
                                : `from End to Start`
                        "
                        v-tippy="{
                            arrow: true,
                            arrowType: 'round',
                            placement: 'bottom',
                        }"
                        @click="showDirection()"
                    ></el-switch>
                </template>
            </div>
        </div>

        <!-- canvas -->
        <canvas
            ref="canvas"
            width="360"
            height="360"
            :content="sortFunction"
            v-tippy="{
                arrow: true,
                arrowType: 'round',
                placement: 'right',
            }"
        ></canvas>
        <!-- image to be clicked -->
        <div class="image">
            <template v-for="(item, index) in imageControls">
                <img
                    v-if="index !== playOrPause"
                    :key="index"
                    :src="require('@/assets/images/' + item.image_src + '.svg')"
                    alt=""
                    :content="item.content"
                    v-tippy="{
                        arrow: true,
                        arrowType: 'round',
                        placement: 'bottom',
                    }"
                    @click="Fn(item.click)"
                />
            </template>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import { drawAll } from "@/utils/DrawAll/drawAll.js";

// TODO dynamically import function
import { bubbleSort } from "@/utils/SortingAlgorithms/bubbleSort.js";
import { insertionSort } from "@/utils/SortingAlgorithms/insertionSort.js";
import { mergeSort } from "@/utils/SortingAlgorithms/mergeSort.js";
import { selectionSort } from "@/utils/SortingAlgorithms/selectionSort.js";
import { quickSort } from "@/utils/SortingAlgorithms/quickSort.js";
import { shellSort } from "@/utils/SortingAlgorithms/shellSort.js";
import { heapSort } from "@/utils/SortingAlgorithms/heapSort.js";
import { bogoSort } from "@/utils/SortingAlgorithms/bogoSort.js";
import { radixSort } from "@/utils/SortingAlgorithms/radixSort.js";
import { countingSort } from "@/utils/SortingAlgorithms/countingSort.js";
import { cocktailShakerSort } from "@/utils/SortingAlgorithms/cocktailShakerSort.js";

const _ = require("lodash");

import imageControls from "/public/data/imageControls.json";

import { ElNotification } from "element-plus";

export default {
    name: "Controls",
    // use like this
    // cancel order switch and direction switch
    // <Controls sortFunction="bubbleSort" type="circle" :orderSwitch="false" :directionSwitch="false"></Controls>
    props: {
        sortFunction: {
            type: String,
            default: "bubbleSort",
        },
        type: {
            type: String,
            default: "circle",
        },
        orderSwitch: {
            type: Boolean,
            default: true,
        },
        directionSwitch: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        const store = useStore();

        const canvas = ref(null);

        // if sort function is in exception array, then enlarge delay, as it is so fast
        const exception = ["mergeSort"];
        let delay = exception.includes(props.sortFunction) ? ref(200) : ref(10);
        let playOrPause = ref(2);

        let order = ref(true);
        const showOrder = () => {
            order = !order;
            ElNotification({
                title: "Current Order",
                message: order ? "Ascending Order" : "Descending Order",
                position: "top-right",
                type: "success",
            });
        };

        let direction = ref(true);
        const showDirection = () => {
            direction = !direction;
            ElNotification({
                title: "Current Direction",
                message: direction ? "from Start to End" : "from End to Start",
                position: "top-right",
                type: "success",
            });
        };

        const option = {
            delay: delay,
            order: order,
            direction: direction,
            type: props.type,
            sortFunction: props.sortFunction,
        };

        // 1. switch
        // switch (type) {
        //     case "bubbleSort":
        //         bubbleSort();
        //         break;
        //     default:
        //         break;
        // }
        // 2. key-value object, value is a sort function here
        const sortFunctionMapping = {
            bubbleSort: bubbleSort,
            insertionSort: insertionSort,
            mergeSort: mergeSort,
            selectionSort: selectionSort,
            quickSort: quickSort,
            shellSort: shellSort,
            heapSort: heapSort,
            bogoSort: bogoSort,
            radixSort: radixSort,
            countingSort: countingSort,
            cocktailShakerSort: cocktailShakerSort,
        };
        // console.log(sortFunctionMapping["bubbleSort"]);
        // console.log(sortFunctionMapping[option.sortFunction]);

        onMounted(() => {
            if (canvas.value) {
                const ctx = canvas.value.getContext("2d");
                switch (option.type) {
                    case "circle":
                        // move to the center of canvas
                        ctx.translate(
                            canvas.value.width / 2,
                            canvas.value.height / 2
                        );
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    case "scatter2Line":
                        ctx.fillStyle = "#7d30fa";
                        // move to the bottom-left of canvas
                        ctx.translate(0, canvas.value.height);
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    case "scatter2Spiral":
                        ctx.fillStyle = "#7d30fa";
                        // move to the center of canvas
                        ctx.translate(
                            canvas.value.width / 2,
                            canvas.value.height / 2
                        );
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    case "needle":
                        // move to the center of canvas
                        ctx.translate(
                            canvas.value.width / 2,
                            canvas.value.height / 2
                        );
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    case "waveform":
                        ctx.fillStyle = "#7d30fa";
                        // move to the midpoint of left border of canvas
                        ctx.translate(0, canvas.value.height / 2);
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    case "histogram":
                        ctx.fillStyle = "#7d30fa";
                        // move to the bottom-left of canvas
                        ctx.translate(0, canvas.value.height);
                        // draw all initially and immediately
                        drawAll(canvas, store.state.shuffleArr, 0, option.type);
                        break;
                    default:
                        break;
                }
            }
        });

        const Fn = (parameter) => {
            let storeStateArr = store.state.shuffleArr;
            switch (parameter) {
                case "slowDown":
                    // setTimeout min delay: 4 ms, max delay: 2147483647 (2 ** 31 - 1)
                    // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#maximum_delay_value
                    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
                    // https://johnresig.com/blog/how-javascript-timers-work/
                    // 10 -> 20 -> 40 -> 80 -> 160
                    // 160 -> 180 -> 200 -> 220 -> 240...
                    delay.value < 100
                        ? (delay.value += delay.value)
                        : (delay.value += 20);
                    ElNotification({
                        title: "Current Delay",
                        message: `${delay.value} ms`,
                        position: "top-right",
                        type: "success",
                    });
                    break;
                case "speedUp":
                    // 10 -> 5 -> 2.5 -> 1.25 -> 0.75...
                    delay.value /= 2;
                    ElNotification({
                        title: "Current Delay",
                        message: `${delay.value} ms`,
                        position: "top-right",
                        type: "success",
                    });
                    break;
                case "play":
                    if (playOrPause.value === 2) {
                        playOrPause.value = 1;
                        Promise.resolve(
                            sortFunctionMapping[option.sortFunction](
                                canvas,
                                JSON.parse(
                                    JSON.stringify(store.state.shuffleArr)
                                ),
                                option
                            )
                        ).then(() => (playOrPause.value = 2));
                    }
                    break;
                // TODO
                case "pause":
                    break;
                case "restart":
                    if (playOrPause.value === 2) {
                        playOrPause.value = 1;
                        Promise.resolve(
                            sortFunctionMapping[option.sortFunction](
                                canvas,
                                JSON.parse(
                                    JSON.stringify(store.state.shuffleArr)
                                ),
                                option
                            )
                        ).then(() => (playOrPause.value = 2));
                    }
                    break;
                case "shuffle":
                    if (playOrPause.value === 2) {
                        playOrPause.value = 1;
                        let newArray = _.shuffle(store.state.shuffleArr);
                        drawAll(canvas, newArray, 0, option.type);
                        // animation delay 1000ms
                        setTimeout(() => {
                            Promise.resolve(
                                sortFunctionMapping[option.sortFunction](
                                    canvas,
                                    newArray,
                                    option
                                )
                            ).then(() => (playOrPause.value = 2));
                        }, 1000);
                    }
                    break;
                // TODO
                case "download":
                    break;
                default:
                    break;
            }
        };
        return {
            imageControls,
            canvas,
            exception,
            delay,
            playOrPause,
            order,
            showOrder,
            direction,
            showDirection,
            option,
            sortFunctionMapping,
            Fn,
        };
    },
};
</script>

<style lang="scss" scoped>
// FLIP animation
.flip-list-move {
    transition: transform 1s;
}
ul {
    display: flex;
    // align-items: center;
    & li {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        border: 1px solid var(--main-color);
        list-style-type: none;
    }
}

div.margin-top-bottom {
    margin: 1rem auto;
}
canvas {
    border: 1px solid var(--main-color);
    margin: 1rem 1rem 0;
}
img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    user-select: none;
    // https://angel-rs.github.io/css-color-filter-generator/
    &:hover {
        filter: brightness(0) saturate(100%) invert(20%) sepia(95%)
            saturate(4207%) hue-rotate(260deg) brightness(99%) contrast(98%);
        transform: scale(1.3);
        transition: all 0.3s ease 0s;
    }
    // https://segmentfault.com/a/1190000010210199
    transform: scale(1);
    transition: all 0.3s ease 0s;
    margin-top: 1rem;
    margin-bottom: 1rem;
    &:first-of-type {
        margin-right: 0.5rem;
    }
    &:last-child {
        margin-left: 0.5rem;
    }
    &:not(:first-of-type):not(:last-child) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
}
div.switch-container {
    display: flex;
    justify-content: center;
}
.el-switch.left {
    margin-right: 1rem;
}
span {
    &.right {
        margin-left: 1rem;
    }
    &.on {
        color: var(--main-color);
        vertical-align: middle;
    }
    &.off {
        color: var(--third-color);
        vertical-align: middle;
    }
}
</style>
