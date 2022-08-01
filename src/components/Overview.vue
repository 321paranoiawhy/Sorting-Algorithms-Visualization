<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <p>
            In computer science, a sorting algorithm is an algorithm that puts
            elements of a list into an order. The most frequently used orders
            are numerical order and lexicographical order, and either ascending
            or descending. Efficient sorting is important for optimizing the
            efficiency of other algorithms (such as search and merge algorithms)
            that require input data to be in sorted lists. Sorting is also often
            useful for canonicalizing data and for producing human-readable
            output.
        </p>
    </div>
</template>

<script>
export default {
    name: "Overview",
};
</script>

<style lang="scss" scoped>
div {
    margin-top: 2rem;
}
p {
    width: 60%;
    margin: auto;
    text-align: left;
    text-indent: 2em;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
    padding-left: 1rem;
    border-left: 1px solid var(--main-color);
    &::first-letter {
        font-size: 150%;
        color: var(--main-color);
    }
    background-color: var(--divider-color);
}
</style>
