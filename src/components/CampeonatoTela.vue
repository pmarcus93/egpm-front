<template>
    <section>
        <HeaderSubScreen
                titulo="Games"
                descricao="Confira os detalhes dos games que estarão presentes no evento. Regras dos campeonatos, categoria, trailer,
                    plataformas e muito mais!"
                imagens="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
        </HeaderSubScreen>
        <Campeonatos></Campeonatos>
    </section>

</template>

<script>
    import JogoApi from "@/services/JogoApi.js";
    import HeaderSubScreen from "./itens/HeaderSubScreen";
    import Campeonatos from "./telas/GameList";

    export default {
        name: "CampeonatoTela",
        components: {Campeonatos, HeaderSubScreen},
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
