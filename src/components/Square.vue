<template>
    <!-- https://v2.vuejs.org/v2/guide/transitions.html#List-Move-Transitions -->
    <!-- FLIP: First Last Invert Play -->
    <transition-group name="flip-list" tag="ul">
        <!-- [Vue warn]: <TransitionGroup> children must be keyed. -->
        <li v-for="(item, index) in arr" :key="item" class="box">
            {{ item }}
        </li>
    </transition-group>
    <button @click="shuffleArr"></button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
    name: "Square",
    setup() {
        const store = useStore();
        let arr = ref(store.state.dynamicArr);

        function shuffleArr() {
            for (let i = 0; i < 10; i++) {
                let j = Math.floor(Math.random() * arr.value.length);
                let k = Math.floor(Math.random() * arr.value.length);
                while (j === k) {
                    k = Math.floor(Math.random() * arr.value.length);
                }
                [arr.value[i], arr.value[j]] = [arr.value[j], arr.value[i]];
            }
        }
        return {
            arr,
            shuffleArr,
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
    justify-content: center;
    display: flex;
    column-gap: 1rem;
    & li {
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        border: 1px solid var(--main-color);
        list-style-type: none;
    }
}
button {
    width: 100px;
    height: 100px;
}
</style>
