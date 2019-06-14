<template>
    <div class="campeonatos">
        <div class="container-fluid ">
            <div class="row">
                <ItemCampeonato v-for="(campeonato) in campeonatos"
                                :titulo="campeonato.st_nome"
                                :imagem="campeonato.st_imagem"
                                :rota="campeonato.id_jogo"
                                :iscampeonato="campeonato.bl_campeonato"
                ></ItemCampeonato>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemCampeonato from "../itens/ItemCampeonato";
    import EgpmApi from "@/services/EgpmApi.js";
    import JogoApi from "@/services/JogoApi";

    export default {
        name: "Campeonatos",
        components: {ItemCampeonato},
        created() {
            JogoApi.getAll(campeonatos => {
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
        background: #000000;
    }
</style>