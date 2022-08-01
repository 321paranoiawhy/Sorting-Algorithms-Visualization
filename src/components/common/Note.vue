<template>
    <div class="note">
        <!-- https://unicode-table.com/cn/261E/ -->
        <span class="NOTE">☞ {{ left }}</span>
        <!-- <span class="text-align-left">
            {{ right }} <span class="colored">{{ coloredSpan }}</span></span
        > -->
        <!-- <span class="text-align-left"> {{ innerHTML }}</span> -->
        <span class="text-align-left" v-html="innerHTML"> </span>
    </div>
</template>

<script>
export default {
    // https://vuejs.org/guide/essentials/component-basics.html#passing-props
    // use like this
    // <Note left="NOTE 1" right="This is a \[note\]."></Note>
    props: {
        left: {
            type: String,
            default: "NOTE 1",
        },
        right: {
            type: String,
            default: "This is a \[note\].",
            // <span class="text-align-left">This is a <span class="colored">note</span>.</span>
        },
    },
    setup(props) {
        // "\[colored text here\]"
        // notice: "\" should be preceded with a \
        // \\[ => <span class="colored">
        // \] => </span>
        let innerHTML = props.right
            .replaceAll("\\[", '<span class="colored">')
            .replaceAll("\\]", "</span>");
        return {
            innerHTML,
        };
    },
};
</script>

<style lang="scss" scoped>
div.note {
    display: flex;
    margin: 2rem auto;
    min-height: 3rem;
    width: clamp(300px, 30vw, 600px);
    padding: 1.5rem 1rem 1.5rem 0.5rem;
    border-left: 3px solid var(--main-color);
    background-color: var(--second-color);
    & span.NOTE {
        font-size: 1.3rem;
        white-space: nowrap;
    }
    & span.text-align-left {
        text-align: left;
        margin-left: 2rem;
    }
}
// BUG this specified css style could not be rendered correctly,
// guess it is because the render order of v-html string and css stylesheet
// to fix it, just expose the css style to global css stylesheet like common.css
// span.colored {
//     color: var(--main-color);
// }
</style>
