<template>
    <div class="p-15% pb-0">
        <h1 class="text-center sm:text-4xl text-2xl">My Projects</h1>
        <hr class="mt-4 mb-10 w-9/12 mx-auto">
        <ul class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <li class="relative p-4 bg-gray text-center rounded" v-for="project in projects" :key="project">
                <a :href="`${project.homepage ? project.homepage : project.html_url}`">
                    <div class="text-2xl mb-10 capitalize">{{project.name.replaceAll("-", " ")}}</div>
                    <div class="text-blue mb-10 break-all text-sm">{{project.html_url}}</div>
                    <div class="mb-16">{{project.description}}</div>
                </a>
                <a class="absolute bottom-4 block py-1 px-5 left-1/2 translate-x-1/-2 bg-transparent transition rounded hover:bg-blue hover:text-gray text-sm" :href="`${project.html_url}`">View on GitHub</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return{  
            projects: [],
        }
    },
    mounted(){
        this.fetchProjects();
    },
    methods: {
        fetchProjects(){
            this.axios.get("https://api.github.com/users/orhanemree/repos")
            .then(response => {
                response.data.forEach(repo => {
                    if (repo.topics.includes("project")){
                        this.projects.push(repo);
                    }
                })
            })
        }
    }
}
</script>