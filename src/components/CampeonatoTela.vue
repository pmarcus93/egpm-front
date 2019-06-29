<template>
    <section>
        <HeaderSubScreen
                titulo="Games"
                descricao="Confira os detalhes dos games que estarão presentes no evento. Regras dos campeonatos, categoria, trailer,
                    plataformas e muito mais!"
                imagens="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">

        </HeaderSubScreen>

        <div class="container pb-5">
            <div class="row">
                <ItemCampeonato v-for="(item) in campeonatos"
                                :titulo="item.st_nome"
                                :imagem="item.st_imagem"
                                :rota="item.id_jogo"
                                :iscampeonato="item.bl_campeonato"
                ></ItemCampeonato>
            </div>
        </div>
    </section>

</template>

<script>
    import ItemCampeonato from "./itens/ItemCampeonato";
    import JogoApi from "@/services/JogoApi.js";
    import HeaderSubScreen from "./itens/HeaderSubScreen";

    export default {
        name: "CampeonatoTela",
        components: {HeaderSubScreen, ItemCampeonato},
        created() {
            var self = this;
            JogoApi.getCampeonatos(campeonatos => {
                self.campeonatos = campeonatos.data;
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
</style>
