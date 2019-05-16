<template>
    <div>
        <div class="container-fluid">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
            <BannerMenor></BannerMenor>
        </div>
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-3 col-sm-12 ">
                    <ItemDuvida
                            duvida="Menores de idade podem participar do envento?"
                            resposta="Sim. Desde que tenham um responsável como acompanhamte."
                    ></ItemDuvida>
                </div>

                <div class="col-md-3 col-sm-12 ">
                    <ItemDuvida
                            background="#89FFC7"
                            duvida="Ingresso é válido para os 2 dias de evento?"
                            resposta="Sim. O ingresso é único e válida para participar durante todos os dias de evento."
                    ></ItemDuvida>
                </div>

                <div class="col-md-3 col-sm-12 ">
                    <ItemDuvida
                            duvida="Posso participar de mais de um campeonato?"
                            resposta="Sim. Desde que seja feita a inscrição previamente e que não haja conflitos de horários."
                    ></ItemDuvida>
                </div>

                <div class="col-md-3 col-sm-12 ">
                    <ItemDuvida
                            background="#89FFC7"
                            duvida="Posso participar de mais de um campeonato?"
                            resposta="Sim. Desde que seja feita a inscrição previamente e que não haja conflitos de horários."
                    ></ItemDuvida>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <Patrocinadores></Patrocinadores>
            <Rodape></Rodape>
        </div>
    </div>
</template>

<script>
    import Duvida from "./telas/Duvida";
    import Navbar from "./itens/Navbar";
    import Rainbow from "./itens/Rainbow";
    import BannerMenor from "./itens/BannerMenor";
    import ItemDuvida from "./itens/ItemDuvida";
    import Rodape from "./telas/Rodape";
    import Patrocinadores from "./telas/Patrocinadores";

    export default {
        name: "Duvidas",
        components: {Patrocinadores, Rodape, ItemDuvida, BannerMenor, Rainbow, Navbar, Duvida}
    }
</script>

<style scoped>

</style>