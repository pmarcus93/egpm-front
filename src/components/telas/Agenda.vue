<template>
    <section>
        <HeaderSubScreen
                titulo="Agenda"
                descricao="Saiba tudo que vai acontecer no 3º Encontro Gamer."
                imagens="http://egpmdeveloper.lucasjunior.com.br/upload/Imagens/20190630153438.jpeg"
        ></HeaderSubScreen>

        <div class="container-fluid">
            <div class="container py-5">

                <div v-for="(data) in datasAgenda" :key="data" class="row pb-4">
                    <div class="col-12 py-2">
                        <h2 class="titulo"><i class="fa fa-calendar mx-1"></i> {{formatarData(data)}}</h2>
                    </div>

                    <agenda-drop-down
                            v-for="(item) in agendamentosPorData[data]"
                            :key="item.id_agenda"
                            :agenda="item"
                            :expand="!(!item.bl_jogo && !item.st_descricao && !item.st_observacao && !item.st_local)"
                    />

                </div>

            </div>
        </div>
    </section>
</template>


<script>
    import AgendaApi from "@/services/AgendaApi";
    import HeaderSubScreen from "../itens/HeaderSubScreen";
    import AgendaDropDown from "../itens/AgendaDropDown";

    export default {
        name: "Agenda",
        components: {AgendaDropDown, HeaderSubScreen},
        data() {
            return {
                agendamentos: [],
                agendamentosPorData: [],
                datasAgenda: []
            }
        },
        methods: {

            formatarData: function (data) {
                let ano = data.split("-")[0];
                let mes = data.split("-")[1];
                let dia = data.split("-")[2];
                return dia + "/" + mes + "/" + ano;
            },

            agruparDatas: function (agendas) {

                let datas = [];

                agendas.forEach(item => {

                    if (datas.length === 0 || datas.indexOf(item.dt_data) < 0) {
                        datas.push(item.dt_data);
                    }
                });

                let agendaPorData = [];

                datas.forEach(data => {
                    agendaPorData[data] = agendas.filter(agenda => {
                        return agenda.dt_data === data;
                    })
                });

                this.datasAgenda = datas;
                this.agendamentosPorData = agendaPorData;

            }
        },
        created() {
            AgendaApi.retornarAgenda(response => {
                this.agendamentos = response.data.data;
                this.agruparDatas(response.data.data);
            })
        }
    }
</script>

<style scoped lang="scss">
    .titulo {
        color: $color-title;
    }

</style>
