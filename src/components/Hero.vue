<template>
    <header class="h-screen p-8 flex items-center justify-center shrink-0">
        <div class="flex items-center justify-center sm:gap-6 gap-3 flex-col">
            <div class="w-100">
                <img class="sm:mb-8 mb-5 sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]" src="../assets/profile.png" alt="Orhan Emre Dikicigil">
                <div class="flex items-center justify-center gap-6">
                    <a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://github.com/orhanemree">
                        <img class="w-full" src="../assets/icons/github.svg" alt="github">
                    </a>
                    <a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://twitter.com/orhanemredkcgl">
                        <img class="w-full" src="../assets/icons/twitter.svg" alt="twitter">
                    </a>
                    <a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="mailto:orhanemre.dev@gmail.com">
                        <img class="w-full" src="../assets/icons/gmail.svg" alt="gmail">
                    </a>
                    <a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://hashnode.com/@orhanemre">
                        <img class="w-full" src="../assets/icons/hashnode.svg" alt="hashnode">
                    </a>
                </div>
            </div>
            <div class="w-auto text-center">
                <div class="sm:text-2xl text-lg sm:mb-8 mb-5">
                    Hi I am Orhan Emre. I love programming and I want to be a big programmer. I think I can call myself a self-taught developer. I design UI / UXs, write codes and create contents. You can contact me with my social accounts.
                </div>
                <a class="transition px-8 py-2 rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-black" href="https://blog.orhanemre.me/">Visit my Blog</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Hero",
}
</script>