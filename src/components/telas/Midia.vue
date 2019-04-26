<template>
    <div class="midia py-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <Secao titulo="#EGPM na mídia"></Secao>
                </div>

                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wW9VDhyh2C0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Secao from "../itens/Secao";

    export default {
        name: 'Midia',
        components: {Secao}
    }
</script>

<style>

    .midia {
        background: #2F55A6;
        color: white;
    }

</style>

