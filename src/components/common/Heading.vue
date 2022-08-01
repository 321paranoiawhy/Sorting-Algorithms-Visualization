<template>
    <!-- h1 h2 h3 h4 h5 h6 -->
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements -->
    <!-- https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements -->
    <h1 v-if="heading === 'h1'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h1>
    <h2 v-if="heading === 'h2'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h2>
    <h3 v-if="heading === 'h3'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h3>
    <h4 v-if="heading === 'h4'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h4>
    <h5 v-if="heading === 'h5'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h5>
    <h6 v-if="heading === 'h6'" class="gradient" :id="anchor">
        <span>{{ content }}</span>
        <a :href="`#${anchor}`" class="anchor">#</a>
    </h6>
</template>

<script>
export default {
    // https://vuejs.org/guide/essentials/component-basics.html#passing-props
    // use like this
    // <Heading heading="h2" anchor="h2" content="h2"></Heading>
    props: {
        heading: {
            type: String,
            // default value is "h2"
            default: "h2",
        },
        anchor: {
            type: String,
            default: "h2",
        },
        content: {
            type: String,
            default: "h2",
        },
    },
};
</script>

<style lang="scss" scoped>
.gradient {
    text-align: left;
    margin-left: 2rem;
    & a.anchor {
        float: left;
        margin-left: -1rem;
        padding-right: 0.5rem;
        text-decoration: none;
        color: var(--main-color);
        // opacity default value is 0
        opacity: 0;
    }
    &:hover {
        a.anchor {
            // set opacity to 1
            opacity: 1;
            transition: opacity 0.4s;
        }
    }
    & span {
        // gradient color
        background: linear-gradient(
            45deg,
            hsl(262, 95%, 50%) 25%,
            hsl(322, 95%, 50%)
        );
        background-clip: text;
        color: transparent;
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
    &:hover span::after {
        width: 100%;
        left: 0;
    }
}
</style>
