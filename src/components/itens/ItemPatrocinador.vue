<template>
    <div class="col-sm-12 col-md-2 my-2">
        <div class="row">
            <div class="col-12 logoParceiro text-center">
                <a :href="link">
                    <img class="" :src="imagem" :title="'Logo da empresa ' + altimg">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemPatrocinador",
        props: [
            "imagem",
            "link",
            "altimg"
        ]
    }
</script>

<style scoped lang="scss">

    .logoParceiro {
        @include sm {
            transition: linear all .2s;
            :hover {
                transform: scale(1.1);
            }
        }
    }

    .logoParceiro img {
        max-width: 75%;
        @include sm {
            max-width: 100%;
        }
    }

</style>