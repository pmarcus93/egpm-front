<template>
    <div class="col-12 py-2">
        <div class="row mb-3">
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto">
                      <img src="../../assets/icons/contrast.webp" alt="">
                    </span>
                    <span class="col-12 text-box-sobre text-center">+ DE 37 HORAS</span>
                </div>
            </div>
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                   <span class="col-12 icon-box-sobre text-center my-auto">
                     <img src="../../assets/icons/multiplayer.webp" alt="">
                   </span>
                    <span class="col-12 text-box-sobre text-center">+ DE 700 VISITANTES</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto">
                         <img src="../../assets/icons/gamepad.webp" alt="">
                    </span>
                    <span class="col-12 text-box-sobre text-center">+ DE 20 CAMPEONATOS</span>
                </div>
            </div>
            <div class="col-6 bloco-icon py-4">
                <div class="row">
                    <span class="col-12 icon-box-sobre text-center my-auto">
                         <img src="../../assets/icons/leaderboardsComplex.webp" alt="">
                    </span>
                    <span class="col-12 text-box-sobre text-center">+ DE 100 PREMIAÇÕES</span>
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

<style scoped lang="scss">

    $icon-size-small: 75px;
    $icon-size-large: 100px;


    .icon-box-sobre {
       img {
          width: $icon-size-small;
          height: $icon-size-small;
        }

      font-size: 2.5rem;
        @include sm {
          img {
            width: $icon-size-large;
            height: $icon-size-large;
          }
        }
    }

    .text-box-sobre {
        font-size: 1rem;
        @include sm {
            font-size: 1.2em;
        }
        font-weight: bold;
    }

</style>
