<template>
    <div class="fixed-nav">
        <img
            src="@/assets/images/MdiChevronUpCircleOutline.svg"
            alt=""
            v-if="showTop"
            @click="backToTop"
            content="Up"
            v-tippy="{
                arrow: true,
                arrowType: 'round',
                placement: 'right',
            }"
        />
        <img
            src="@/assets/images/MdiChevronDownCircleOutline.svg"
            alt=""
            v-if="showBottom"
            @click="goToBottom"
            content="Down"
            v-tippy="{
                arrow: true,
                arrowType: 'round',
                placement: 'right',
            }"
        />
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
    name: "BottomRightNav",
    setup() {
        let showTop = ref(false);
        let showBottom = ref(true);
        const distanceLimit = 500; // 500px
        window.onscroll = () => {
            // console.log(document.documentElement.scrollHeight);
            // console.log(document.documentElement.clientHeight);
            // window.scrollY: https://developer.mozilla.org/en-US/docs/Web/API/window/scrollY
            let top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                window.scrollY ||
                document.body.scrollTop;
            showTop.value = top > distanceLimit ? true : false;
            // top + clientHeight + bottom => scrollHeight
            // scrollHeight: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
            let bottom =
                document.documentElement.scrollHeight -
                top -
                document.documentElement.clientHeight;
            showBottom.value = bottom < distanceLimit ? false : true;
        };
        let timer = null;
        // back to top
        // reference: https://www.cnblogs.com/xiaohuochai/p/5836179.html
        const backToTop = () => {
            cancelAnimationFrame(timer);
            const startTime = +new Date();
            const top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                window.scrollY ||
                document.body.scrollTop;
            const duration = 500; // 500ms
            timer = requestAnimationFrame(function fn() {
                let currentTime = +new Date() - startTime;
                document.documentElement.scrollTop =
                    (1 - currentTime / duration) * top;
                timer = requestAnimationFrame(fn);
                // exit animation
                if (currentTime >= duration) {
                    cancelAnimationFrame(timer);
                }
            });
        };
        // go to bottom
        const goToBottom = () => {
            cancelAnimationFrame(timer);
            const startTime = +new Date();
            const top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                window.scrollY ||
                document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const duration = 500; // 500ms
            timer = requestAnimationFrame(function fn() {
                let currentTime = +new Date() - startTime;
                document.documentElement.scrollTop =
                    top + (currentTime / duration) * scrollHeight;
                timer = requestAnimationFrame(fn);
                // exit animation
                if (currentTime >= duration) {
                    cancelAnimationFrame(timer);
                }
            });
        };
        return {
            showTop,
            showBottom,
            distanceLimit,
            timer,
            backToTop,
            goToBottom,
        };
    },
};
</script>

<style lang="scss" scoped>
div.fixed-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 5vw;
    transform: translateX(50%);
    bottom: 5vh;
    z-index: 1;
    & :first-child:not(:last-child) {
        margin-bottom: 1rem;
    }
}
img {
    cursor: pointer;
    width: 32px;
    height: 32px;
    &:hover {
        filter: brightness(0) saturate(100%) invert(20%) sepia(95%)
            saturate(4207%) hue-rotate(260deg) brightness(99%) contrast(98%);
        transform: scale(1.3);
        transition: all 0.3s ease 0s;
    }
}
</style>
