<template>
    <!-- 1. left ul fixed -->
    <ul id="left-ul">
        <li
            v-for="(item, index) in sortArr"
            @click="changeComponent(index)"
            :class="{ active: currentIndex === index }"
        >
            <span class="animation" :class="{ zero: index === 0 }"
                ><span class="fixed-width" v-if="index !== 0">{{
                    convertToRoman(index)
                }}</span
                >{{ item }}</span
            >
        </li>
    </ul>

    <!-- 2. center content -->
    <div id="center-content">
        <!-- Error: <router-view> can no longer be used directly inside <transition> or <keep-alive>. -->
        <!-- <Transition name="bounce">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </Transition> -->

        <!-- Transition: https://vuejs.org/guide/built-ins/transition.html#the-transition-component -->
        <!-- keep-alive: https://vuejs.org/guide/built-ins/keep-alive.html -->
        <!-- Dynamic Components: https://vuejs.org/guide/essentials/component-basics.html#dynamic-components -->

        <router-view v-slot="{ Component }">
            <Transition name="animation" mode="out-in">
                <keep-alive>
                    <component :is="showComponent" />
                </keep-alive>
            </Transition>
        </router-view>
    </div>

    <!-- 3. right placeholder fixed -->
    <!-- Advertising for Rent -->
    <div id="right-placeholder">
        <p>AD WELCOME</p>
    </div>

    <!-- GitHub right-top corner -->
    <!-- https://tholman.com/github-corners/ -->
    <!-- change <svg style="fill=:#7d30fa;"> -->
    <a
        href="https://github.com/321paranoiawhy/Sorting-Algorithms-Visualization"
        aria-label="View source on GitHub"
    >
        <svg
            id="github-corner"
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style="
                fill: #7d30fa;
                color: #fff;
                position: fixed;
                top: 0;
                border: 0;
                right: 0;
            "
            aria-hidden="true"
        >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                style="transform-origin: 130px 106px"
                class="octo-arm"
            ></path>
            <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
                class="octo-body"
            ></path>
        </svg>
    </a>
</template>

<script>
// @ is an alias to /src
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Driver from "driver.js";

import { shuffle } from "@/utils/shuffle.js";

import Overview from "@/components/Overview.vue";
import BubbleSort from "@/components/BubbleSort.vue";
import MergeSort from "@/components/MergeSort.vue";
import SelectionSort from "@/components/SelectionSort.vue";
import InsertionSort from "@/components/InsertionSort.vue";
import QuickSort from "@/components/QuickSort.vue";
import ShellSort from "@/components/ShellSort.vue";
import HeapSort from "@/components/HeapSort.vue";
import BogoSort from "@/components/BogoSort.vue";
import RadixSort from "@/components/RadixSort.vue";
import CountingSort from "@/components/CountingSort.vue";
import CocktailShakerSort from "@/components/CocktailShakerSort.vue";

export default {
    name: "HomeView",
    components: {
        Overview,
        BubbleSort,
        SelectionSort,
        InsertionSort,
        MergeSort,
        QuickSort,
        ShellSort,
        HeapSort,
        BogoSort,
        RadixSort,
        CountingSort,
        CocktailShakerSort,
    },
    setup() {
        onMounted(() => {
            const fullPath = router.currentRoute.value.fullPath.slice(1);
            if (router.currentRoute.value.fullPath === "/") {
                // initial page: Overview
                router.push("/Overview");
            } else {
                currentIndex.value = fullPath.includes("#")
                    ? routerArr.indexOf(
                          fullPath.substring(0, fullPath.indexOf("#"))
                      )
                    : routerArr.indexOf(fullPath);
                showComponent.value = routerArr[currentIndex.value];
            }

            const driver = new Driver({ animate: true });
            // define the steps for introduction
            driver.defineSteps([
                {
                    element: "#left-ul",
                    popover: {
                        className: "first-step-popover-class",
                        title: "Sorting Algorithms",
                        description: "Click to change",
                        position: "right",
                    },
                },
                {
                    element: "#center-content",
                    popover: {
                        title: "Main Content",
                        description:
                            "All about the specified sorting algorithm",
                        position: "right",
                    },
                },
                {
                    element: "#right-placeholder",
                    popover: {
                        title: "AD",
                        description: "Email: paranoiawhy@gmail.com",
                        position: "right",
                    },
                },
                {
                    element: "#github-corner",
                    popover: {
                        title: "View source on GitHub",
                        position: "right",
                    },
                },
            ]);
            // start the introduction
            // driver.start();
        });

        const sortArr = [
            "Overview",
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Shell Sort",
            "Heap Sort",
            "Bogo Sort",
            "Radix Sort",
            "Counting Sort",
            "Cocktail Shaker Sort",
        ];
        // sortArr = ["Overview"].concat(sortArr);

        const routerArr = sortArr.map((item) => item.replaceAll(" ", ""));

        let showComponent = ref(routerArr[0]);

        let currentIndex = ref(0);

        const router = useRouter();

        // Global After Hooks: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks
        router.afterEach((to, from) => {
            let fullPath = to.fullPath.slice(1);
            currentIndex.value = fullPath.includes("#")
                ? routerArr.indexOf(
                      fullPath.substring(0, fullPath.indexOf("#"))
                  )
                : routerArr.indexOf(fullPath);
            showComponent.value = routerArr[currentIndex.value];
        });

        let changeComponent = (index) => {
            showComponent.value = routerArr[index];
            router.push(`/${showComponent.value}`);
        };

        // https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
        // https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
        function convertToRoman(num) {
            let roman = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1,
            };
            let str = "";
            for (let i of Object.keys(roman)) {
                let q = Math.floor(num / roman[i]);
                num -= q * roman[i];
                str += i.repeat(q);
            }
            return str;
        }

        // 0 ~ 359
        const length = 360;
        // https://lodash.com/docs/4.17.15#shuffle
        let shuffleArr = shuffle([...new Array(length).keys()]);

        // 0 ~ 9
        const boxLength = 10;
        let dynamicArr = shuffle([...new Array(boxLength).keys()]);

        const store = useStore();
        store.commit("getShuffleArr", shuffleArr);
        store.commit("getDynamicArr", dynamicArr);

        return {
            sortArr,
            routerArr,
            showComponent,
            currentIndex,
            changeComponent,
            convertToRoman,
            length,
            shuffleArr,
            dynamicArr,
        };
    },
};
</script>

<style lang="scss" scoped>
.animation-enter-from,
.animation-leave-to {
    opacity: 0;
}

.animation-enter-to,
.animation-leave-from {
    opacity: 1;
}

.animation-enter-active,
.animation-leave-active {
    transition: opacity 0.5s;
}

#center-content {
    margin-left: 10vw;
    margin-right: 10vw;

    box-sizing: border-box;
    // padding-right: calc(10vw + 1.5rem);
    position: relative;
}
ul {
    width: 10vw;
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    border-right: 1px solid var(--divider-light);
    // fixed
    position: fixed;
    top: 0;
    overflow-y: auto;
}
#right-placeholder {
    width: 10vw;
    height: 100vh;
    // fixed
    position: fixed;
    top: 0;
    right: 0;
    border-left: 1px solid var(--divider-light);
    & p {
        font-size: 2rem;
        margin-top: 150px;
        // https://www.runoob.com/w3cnote/css-nowrap-break-word.html
        // 1. no line break
        white-space: nowrap;
        // 2. word wrap
        // word-wrap:break-word;
        letter-spacing: 10px;
        transform: rotate(90deg);
        color: var(--main-color);
    }
}
ul li {
    list-style-type: none;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    &.active {
        background-color: var(--second-color);
        color: var(--main-color);
        border-radius: 0.5rem;
    }
    & span.animation {
        position: relative;
        &::after {
            position: absolute;
            content: " ";
            width: 0%;
            height: 3px;
            background-color: var(--main-color);
            left: 50%;
            top: 100%;
            transition: all 0.4s ease-in-out;
        }
    }
    & span.zero {
        margin-left: 2rem;
    }
    & span.fixed-width {
        display: inline-block;
        width: 2rem;
    }
    &:hover span {
        color: var(--main-color);
        &::after {
            width: 100%;
            left: 0;
        }
    }
}
.github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
    0%,
    100% {
        transform: rotate(0);
    }
    20%,
    60% {
        transform: rotate(-25deg);
    }
    40%,
    80% {
        transform: rotate(10deg);
    }
}
</style>
