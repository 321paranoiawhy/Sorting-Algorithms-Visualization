<template>
    <router-view />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
    setup() {
        onMounted(() => {
            // set "lang" of html to "en-US"
            // https://forum.vuejs.org/t/settings-lang-sv-to-the-html-tag/7047/4
            document.documentElement.setAttribute("lang", "en-US");
        });
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: Merriweather;
    src: "./assets/fonts/Merriweather-Regular.ttf";
}
#app {
    font-family: Merriweather sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body {
    margin: 0;
}
</style>
