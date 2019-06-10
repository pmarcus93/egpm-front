<template>
    <div>
        <div class="col-12 py-4 links text-center align-content-center align-middle">
            <router-link to="/inicio">
                <button class="btn btn-light mx-3"> Inicio</button>
            </router-link>
            <router-link to="/campeonatos">
                <button class="btn btn-light"> Campeonatos</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped>

</style>