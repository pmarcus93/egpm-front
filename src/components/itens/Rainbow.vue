<template>
    <div class="container-full">
        <div class="row">
            <div class="col-4 border-rainbow rainbow-green"></div>
            <div class="col-2 border-rainbow rainbow-red"></div>
            <div class="col-1 border-rainbow rainbow-yellow"></div>
            <div class="col-5 border-rainbow rainbow-blue"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rainbow"
    }
</script>

<style scoped>
    .border-rainbow {
        height: 4px;
    }

    .rainbow-blue {
        background: #3255A5;
    }

    .rainbow-green {
        background: #3BAC7A;
    }

    .rainbow-red {
        background: #EA2A3A;
    }

    .rainbow-yellow {
        background: #FCD047;
    }

</style>