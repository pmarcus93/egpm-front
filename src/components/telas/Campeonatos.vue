<template>
    <div class="campeonatos">
        <div class="container-fluid">
            <div class="row">
                <ItemCampeonato v-for="(campeonato, indice) in campeonatos" v-if="indice < 6"
                                :titulo="campeonato.st_nome"
                                :imagem="campeonato.st_imagem"
                                :rota="campeonato.id_jogo"
                ></ItemCampeonato>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemCampeonato from "../itens/ItemCampeonato";
    import EgpmApi from "@/services/EgpmApi.js";

    export default {
        name: "Campeonatos",
        components: {ItemCampeonato},
        created() {
            EgpmApi.getAllCampeonatos(campeonatos => {
                this.campeonatos = campeonatos.data;
            })
        },
        data: function () {
            return {
                campeonatos: []
            }
        }
    }
</script>

<style scoped>
    .campeonatos {
        background: black;
    }

</style>