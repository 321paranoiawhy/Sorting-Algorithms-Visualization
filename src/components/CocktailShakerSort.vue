<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Cocktail Shaker Sort -->
        <Heading
            anchor="Cocktail-Shaker-Sort"
            content="Cocktail Shaker Sort"
            heading="h2"
        ></Heading>
        <Prism :source="cocktailShakerSort"></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[i] > array[i + 1]\] ⟶ \[array[i] < array[i + 1]\] and \[array[j - 1] > array[j]\] ⟶ \[array[j - 1] < array[j]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 2"
            right="Here are several data visualization of Counting Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="cocktailShakerSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
import { cocktailShakerSort } from "@/utils/SortFunction/CocktailShakerSort/cocktailShakerSort";

export default {
    name: "CocktailShakerSort",
    setup() {
        return {
            cocktailShakerSort,
        };
    },
};
</script>
