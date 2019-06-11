<template>

    <div :id="'accordion'+id_duvida">
        <div class="card">
            <div class="card-header" :id="'heading'+id_duvida">
                <h5 class="mb-0">
                    <button class="btn collapsed"
                            type="button"
                            data-toggle="collapse"
                            :data-target="'#collapseOne'+id_duvida"
                            aria-expanded="true"
                            :aria-controls="'collapseOne'+id_duvida">
                        {{duvida}}
                    </button>
                </h5>
            </div>

            <div :id="'collapseOne'+id_duvida"
                 class="collapse"
                 :aria-labelledby="'heading'+id_duvida"
                 :data-parent="'#accordion'+id_duvida">

                <div class="card-body">
                    {{resposta}}
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ItemDuvida",
        props: ["duvida", "resposta", "id_duvida"],
    }
</script>

<style scoped lang="scss">

    .card-header {
        background-color: $rainbow-blue;
        
        button {
            color: $light-text;
        }
    }

</style>
