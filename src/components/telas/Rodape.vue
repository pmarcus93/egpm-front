<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 rodape my-auto py-3 text-center">
                <p>Made with ❤ in Pará de Minas<br>
                    <a href="https://github.com/pmarcus93">@pmarcus93</a>
                    | <a href="https://github.com/Lucasmg37">@lucasmg37</a>
                    | <a href="https://github.com/educmsilva">@educmsilva</a>
                </p>
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