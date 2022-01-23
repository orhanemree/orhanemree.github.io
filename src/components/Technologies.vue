<template>
    <div class="h-screen p-15%">
        <h1 class="text-center sm:text-4xl text-2xl">Technologies I Use</h1>
        <hr class="mt-4 mb-10 w-9/12 mx-auto">
        <ul class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
            <li class="flex gap-2 items-center justify-start shrink-0 break-normal font-medium" v-for="technology in technologies" :key="technology">
                <img class="sm:w-10 w-8" :src="getPath(technology)" :alt="technology">
                <span class="sm:text-xl text-md">{{ technology }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Technologies",
    data(){
        return{
            technologies: ["HTML 5", "CSS 3", "SASS", "TailwindCSS", "JavaScript", "Vue.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Figma", "Inkscape", "Python", "Flask"]
        }
    },
    methods: {
        getPath(img) {
            img = img.replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/[\s_]+/g, "")
            .replace("-", "")
            .replace(".", "")
            .toLowerCase()
            return `/src/assets/icons/${img}.svg`
        }
    }
}
</script>