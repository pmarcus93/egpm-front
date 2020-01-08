<template>
    <section>
        <HeaderSubScreen
                titulo="Agenda"
                descricao="Saiba tudo que vai acontecer no 3º Encontro Gamer."
                imagens="http://egpmdeveloper.lucasjunior.com.br/upload/Imagens/20190630153438.jpeg"
        ></HeaderSubScreen>

        <div class="container-fluid">
            <div class="container py-5">
                <div class="row">
                    <div class="col-12 py-2">
                        <h2 class="titulo"><i class="fa fa-calendar mx-1"></i> 01/02/2020</h2>
                    </div>

                    <agenda-drop-down v-for="(item) in agendamentos" :key="item.id_agenda" :agenda="item"/>

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
                agendamentos: []
            }
        },
        created() {
            AgendaApi.retornarAgenda(response => {
                this.agendamentos = response.data;
            })
        }
    }
</script>

<style scoped lang="scss">
    .titulo {
        color: $color-title;
    }

</style>
