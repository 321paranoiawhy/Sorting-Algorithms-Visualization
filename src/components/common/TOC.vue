<template>
    <div class="fixed-TOC" ref="TOC">
        <ul>
            <!-- TOC -->
            <span>TOC</span>

            <li
                v-for="(item, index) in content"
                :key="index"
                :class="{
                    'first-level': level[index] === '1',
                    'second-level': level[index] === '2',
                    'third-level': level[index] === '3',
                    'fourth-level': level[index] === '4',
                }"
            >
                <a
                    :href="'#' + anchor[index]"
                    :content="tippy[index]"
                    v-tippy="{
                        arrow: true,
                        arrowType: 'round',
                        placement: 'right',
                    }"
                    >{{ item }}</a
                >
            </li>
        </ul>
        <img src="@/assets/images/MdiTableOfContents.svg" alt="" class="menu" />
        <div class="container">
            <div class="circle"></div>

            <div class="circle"></div>

            <div class="circle"></div>

            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { nextTick } from "vue";

export default {
    name: "TOC",
    props: {
        content: {
            type: Array,
            default: [],
        },
        // anchor: {
        //     type: Array,
        //     default: [],
        // },
        // level: {
        //     type: Array,
        //     default: [],
        // },
    },
    setup() {
        const TOC = ref(null);
        const anchor = ref([]);
        const tippy = ref([]);
        const level = ref([]);

        onMounted(() => {
            const centerContent = document.querySelector("#center-content");
            // TOC.value.onmouseover = () => {
            //     centerContent.style.filter = "blur(50px)";
            //     // TOC.value.style.filter = "";
            // };
            // TOC.value.onmouseout = () => {
            //     centerContent.style.filter = "";
            // };

            // 1. nextTick: https://vuejs.org/api/general.html#nexttick
            // https://blog.csdn.net/qq_41619796/article/details/118996974
            nextTick(() => {
                anchor.value = [];
                let heading = document.querySelectorAll("[class^=gradient]");
                heading.forEach((item, index) => {
                    anchor.value[index] = item.id;
                    // anchor.value.push(item.id);
                    tippy.value[index] = item.id.replaceAll("-", " ");
                    // tippy.value.push(item.id.replaceAll("-", " "));
                    level.value[index] = item.tagName.slice(1);
                    // level.value.push(item.tagName.slice(1));
                });
                // console.log(anchor.value[0]);
            });
            // 2. setTimeout
            // setTimeout(() => {
            //     console.log(document.querySelectorAll("h2"));
            // }, 2000);
        });
        return {
            TOC,
            anchor,
            tippy,
            level,
        };
    },
};
</script>

<style lang="scss" scoped>
// variables
$circle-radius: 0.5rem;
$vertical-line-width: 2px;

$base-before-left: -1.5rem;
$base-after-left: calc($base-before-left + $circle-radius / 2);

$li-height: 2rem;

$first-level-margin-left: 0rem;
$second-level-margin-left: 1rem;
$third-level-margin-left: 2rem;
$fourth-level-margin-left: 3rem;

a,
a:link,
a:visited,
a:hover,
a:active {
    text-decoration: none;
    color: inherit;
}

div.fixed-TOC {
    display: flex;
    align-items: center;
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    right: 10vw;
    width: fit-content;
    z-index: 100;
    &:hover {
        // margin-right: 0;
        & ul {
            visibility: visible;
            width: 150px;
            // width: clamp(150px, 10vw, 200px);
        }
    }
    & img {
        width: 36px;
        height: 36px;
        // align right
        margin-left: auto;
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(20%) sepia(95%)
            saturate(4207%) hue-rotate(260deg) brightness(99%) contrast(98%);
    }
    & ul {
        visibility: hidden;
        width: 0;
        transition: all 1s;
        box-sizing: border-box;
        padding-left: 0;
        & li {
            list-style-type: none;
            position: relative;
            height: $li-height;
            line-height: $li-height;
            text-align: left;
            // TODO
            color: var(--main-color);
            // all li have the same before circle
            &::before {
                position: absolute;
                content: " ";
                top: 50%;
                width: $circle-radius;
                height: $circle-radius;
                background-color: var(--main-color);
                display: inline-block;
                transform: translateY(-50%);
                border-radius: 50%;
            }
            // the last li has not after vertical line |
            &:not(:last-child)::after {
                position: absolute;
                content: " ";
                top: calc($li-height / 2 + $circle-radius / 2);
                width: $vertical-line-width;
                height: calc($li-height - $circle-radius);
                display: block;
                transform: translateX(-50%);
                background-color: var(--main-color);
                opacity: 0.3;
            }
        }
        & span {
            color: var(--main-color);
        }
    }
}

li.first-level {
    margin-left: $first-level-margin-left;
    &::before {
        left: $base-before-left;
    }
    &::after {
        left: $base-after-left;
    }
}
li.second-level {
    margin-left: $second-level-margin-left;
    &::before {
        left: calc($base-before-left - $second-level-margin-left);
    }
    &::after {
        left: calc($base-after-left - $second-level-margin-left);
    }
}
li.third-level {
    margin-left: $third-level-margin-left;
    &::before {
        left: calc($base-before-left - $third-level-margin-left);
    }
    &::after {
        left: calc($base-after-left - $third-level-margin-left);
    }
}
li.fourth-level {
    margin-left: $fourth-level-margin-left;
    &::before {
        left: calc($base-before-left - $fourth-level-margin-left);
    }
    &::after {
        left: calc($base-after-left - $fourth-level-margin-left);
    }
}

// ripple animation: https://www.cnblogs.com/cs-whut/p/13551757.html
.container {
    position: absolute;
    right: 18px;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.circle {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--second-color);
}
.circle:nth-child(1) {
    animation: ripple 3s linear infinite;
}
.circle:nth-child(2) {
    animation: ripple 3s linear 0.8s infinite;
}
.circle:nth-child(3) {
    animation: ripple 3s linear 1.6s infinite;
}
@keyframes ripple {
    from {
        opacity: 1;
        transform: scale(0);
    }

    to {
        opacity: 0;
        transform: scale(3);
    }
}
</style>
