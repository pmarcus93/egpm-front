<template>
    <div>
        <div class="col-12 py-4 links text-center align-content-center align-middle">
            <router-link to="/inicio">
                <button class="btn btn-lg btn-outline-warning mx-3"> Inicio</button>
            </router-link>
            <router-link to="/campeonatos">
                <button class="btn btn-lg btn-outline-warning"> Campeonatos</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped lang="scss">

    .btn-outline-warning {
        color: $color-primary;
        border-color: $color-primary;
        :hover {
            color: #212529;
            background-color:$color-primary;
        }
    }

</style>
