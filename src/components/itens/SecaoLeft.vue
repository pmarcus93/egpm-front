<template>
    <div class="secao-left-body">
        <div class="container-fluid">
            <div class="row">
                <section class="col-12 section static d-flex" :class="classimage">
                    <div class="col-sm-6 my-auto box-info">
                        <h1 class="text-left mb-4 titulo-secao-left"
                            v-bind:style="{ 'border-bottom':  colorborder + ' solid 3px' }">{{titulo}}</h1>
                        <p class="mt-3">{{descricao}}</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoLeft",
        props: ["imagem", "descricao", "titulo", "colorborder", "classimage"],
    }
</script>

<style scoped>
    .titulo-secao-left {
        font-size: 4em;
        font-family: Archive;
    }

    .secao-left-body {
        color: whitesmoke;
    }

    .box-info {
        z-index: 2;
    }

    .static::after{
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .section {
        position: relative;
        height: 100vh;
        justify-content: flex-start;
    }

    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform: translateZ(-1px) scale(1.9);
        background-size: 100%;
        z-index: -1;
    }

    .bgpalestra::after {
        background: url('https://lh3.googleusercontent.com/3qV4HSPakRghRhQACieKIo10v9VPzy-kQ8bWV_wfAkEPi9Bwia3eB8qudZG4uAeX-UgrbqCOlR_lZps7QCeCraSY2uxnnR7qrz4jkROdNJREZzWTqhcfFWGyW4lkk_YZWIT2zn6jZzwn9Rlcx0N8SC7oOUR6-sWO_A3crFvVui1Smem_YrrmhAiecU7IubGxgUFtUiefbFWIqlNaqYTwcHwHqeqzH3QUiwyL1tUYYWdOK0Vau6u6lrI4k4tghPVC36dAO0RwmHrK4Hmpw7Qi2ySJajD7-pni1nXRGNwI4L9QpT-xfletQXMyA2fAUkc3V0ovCQMEgZvXpMu9Ur1WHC0iZqDyQ5gNR_CuPB0lxcEdtJPnaHnr_InN1agqycCKq4g1MD8Y0rq_cMgMyxD5TFMxXtby4Hhjcaxzkt-G06uq7lG-uKgeSivv_c2Pf9-druUMBc58hfIBfMD-HdCvJie0vZdVA6J6_40rotVrqYIvBXQsHA8tnilabv6a1fQ_rMTFOGEcCD10m0U1fvywO8LhoGafVGLrh-RObXHNA2ae96acQOqI1dwCHhi1sZOXtRkSrc6I0LQLzfs4r2ONOTV5c4kFiDw17iaM0WLe-uDzq40pvuenMGJm40pYqbBFavx3oV_cxClA_fm9mKgzi2w2uZuWcRQ_=w1760-h990-no') center/cover;

    }

</style>