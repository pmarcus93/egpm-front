<template>
    <div class="col-sm-6 py-2">
        <div class="row mb-3">
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto"><i class="fa fa-clock"></i></span>
                    <span class="col-12 text-box-sobre text-center">32 HORAS</span>
                </div>
            </div>

            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto"><i class="fa fa-user"></i></span>
                    <span class="col-12 text-box-sobre text-center">900 VISITANTES</span>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto"><i class="fa fa-gamepad"></i></span>
                    <span class="col-12 text-box-sobre text-center">40 CAMPEONATOS</span>
                </div>
            </div>

            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto"><i class="fa fa-trophy"></i></span>
                    <span class="col-12 text-box-sobre text-center">150 PLAYERS</span>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "BlocoIcons"
    }
</script>

<style scoped>
    .bloco-icon{
        transition: all linear .2s;
    }
    .bloco-icon:hover {
        background: #f5ffe1;
        transform: scale(1.09);
    }
    .icon-box-sobre {
        font-size: 4em;
    }

    .text-box-sobre {
        font-size: 1.5em;
        font-weight: bold;
    }

</style>