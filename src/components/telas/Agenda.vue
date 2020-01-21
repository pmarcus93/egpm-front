<template>
    <section>
        <HeaderSubScreen
                titulo="Agenda"
                descricao="Programe-se e aproveite ao máximo o #EGPM3!"
                imagens="https://egpmdeveloper.lucasjunior.com.br/upload/Imagens/90e1a0980ba0b94ea05956a46213aa1d8567ade5914476645f63b0b8096de100.jpg"
        />

        <div class="container-fluid">
            <div class="container py-5">

                <div v-if="agendamentos.length === 0 && loaded === true" class="row pb-4">
                    <div class="col-12 my-1 py-3 item-agenda">
                        <div class="info-agenda-titulo text-center">
                            A agenda será disponibilizada em breve, fique ligado!
                        </div>
                    </div>
                </div>

                <div v-for="(data) in datasAgenda" :key="data" class="row pb-4">
                    <div class="col-12 py-2">
                        <h3 class="titulo"><i class="fa fa-calendar mx-1"></i> {{formatarData(data)}}</h3>
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
                datasAgenda: [],
                loaded: false,
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

                if (response.data.data === undefined) {
                    this.agendamentos = [];
                } else {
                    this.agendamentos = response.data.data;
                    this.agruparDatas(response.data.data);
                }

                this.loaded = true;
            })
        }
    }
</script>

<style scoped lang="scss">
    .titulo {
        color: $color-title;
    }

    .info-agenda-titulo {
        font-size: 1.2em;
        font-weight: 600;
    }

    .item-agenda {
        border-radius: 5px;
        background: $color-primary;
    }


</style>
