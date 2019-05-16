<template>

        <div class="container-full">

            <Rainbow></Rainbow>

            <div class="row">
                <div class="col-12 rodape my-auto py-3">
                    <p class="text-center my-auto">© 2019 EGMP3. Direitos reservados a FAPAM - Faculdade de Pará de Minas.
                        <br>Desenvolvido pelos alunos
                        do Curso de Gestão de Tecnologia da Informação.</p>
                </div>
            </div>
    </div>

</template>

<script>
    import Rainbow from "../itens/Rainbow";
    export default {
        name: "Rodape",
        components: {Rainbow}
    }
</script>

<style scoped>
    .rodape {
        background: #111;
        color: whitesmoke;
    }
</style>