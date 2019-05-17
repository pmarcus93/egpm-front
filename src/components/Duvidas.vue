<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>
            <BannerMenor
            titulo="Dúvidas"
            descricao="As dúvidas mais frequentes respondidas."
            ></BannerMenor>
        </div>
        <div class="container">
            <div class="row no-gutters">
                <div v-for="(item, indice) in duvidas" v-if="indice<4" class="col-md-3 col-sm-12 ">
                    <ItemDuvida v-if="indice%2 == 0"
                                :duvida="item.pergunta"
                                :resposta="item.resposta"
                    ></ItemDuvida>
                    <ItemDuvida v-else
                                background="#89FFC7"
                                :duvida="item.pergunta"
                                :resposta="item.resposta"
                    ></ItemDuvida>
                </div>
            </div>
        </div>

        <div class="fundo-duvidas">
            <div class="container">
                <div class="row ">
                    <div class="col-12 mt-4 perguntas">
                        <div v-for="(item, indice) in duvidas">
                            <DuvidaBox
                                    :pergunta="item.pergunta"
                                    :resposta="item.resposta"
                            ></DuvidaBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Patrocinadores></Patrocinadores>

        <div class="container-fluid">
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
    import DuvidaBox from "./DuvidaBox";
    import FundoFixo from "./itens/FundoFixo";

    export default {
        name: "Duvidas",
        components: {FundoFixo, DuvidaBox, Patrocinadores, Rodape, ItemDuvida, BannerMenor, Rainbow, Navbar, Duvida},
        data: function () {
            return {
                duvidas: [
                    {
                        pergunta: "Menores de idade podem participar do envento?",
                        resposta: "Sim. Desde que tenham um responsável como acompanhamte.",
                        rota: "menores-de-idade"
                    },
                    {
                        pergunta: "Ingresso é válido para os 2 dias de evento?",
                        resposta: "Sim. O ingresso é único e válida para participar durante todos os dias de evento.",
                        rota: "ingresso-valido"
                    },
                    {
                        pergunta: "Posso participar de mais de um campeonato?",
                        resposta: "Sim. Desde que seja feita a inscrição previamente e que não haja conflitos de horários.",
                        rota: "posso-participar"
                    },
                    {
                        pergunta: "Posso participar de mais de um campeonato?",
                        resposta: "Sim. Desde que seja feita a inscrição previamente e que não haja conflitos de horários.",
                        rota: "posso-participar"
                    }
                ]
            }
        }
    }

</script>

<style scoped>

    .fundo-duvidas {
        background: #fff;
        margin-top: 20px;
        -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);
    }

</style>