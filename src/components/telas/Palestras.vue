<template>
    <SecaoLeft
    titulo="PALESTRAS"
    descricao="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she"
    imagem="https://lh3.googleusercontent.com/3qV4HSPakRghRhQACieKIo10v9VPzy-kQ8bWV_wfAkEPi9Bwia3eB8qudZG4uAeX-UgrbqCOlR_lZps7QCeCraSY2uxnnR7qrz4jkROdNJREZzWTqhcfFWGyW4lkk_YZWIT2zn6jZzwn9Rlcx0N8SC7oOUR6-sWO_A3crFvVui1Smem_YrrmhAiecU7IubGxgUFtUiefbFWIqlNaqYTwcHwHqeqzH3QUiwyL1tUYYWdOK0Vau6u6lrI4k4tghPVC36dAO0RwmHrK4Hmpw7Qi2ySJajD7-pni1nXRGNwI4L9QpT-xfletQXMyA2fAUkc3V0ovCQMEgZvXpMu9Ur1WHC0iZqDyQ5gNR_CuPB0lxcEdtJPnaHnr_InN1agqycCKq4g1MD8Y0rq_cMgMyxD5TFMxXtby4Hhjcaxzkt-G06uq7lG-uKgeSivv_c2Pf9-druUMBc58hfIBfMD-HdCvJie0vZdVA6J6_40rotVrqYIvBXQsHA8tnilabv6a1fQ_rMTFOGEcCD10m0U1fvywO8LhoGafVGLrh-RObXHNA2ae96acQOqI1dwCHhi1sZOXtRkSrc6I0LQLzfs4r2ONOTV5c4kFiDw17iaM0WLe-uDzq40pvuenMGJm40pYqbBFavx3oV_cxClA_fm9mKgzi2w2uZuWcRQ_=w1760-h990-no">
    </SecaoLeft>
</template>

<script>
    import Secao from "../itens/Secao";
    import SecaoLeft from "../itens/SecaoLeft";

    export default {
        name: "Palestras",
        components: {SecaoLeft, Secao}
    }
</script>

<style scoped>

    .titulo-secao-palestras {
        font-size: 4em;
        font-family: Archive;
    }

    .palestras {
        color: whitesmoke;
    }

    .fundo-palestra {
        background: url("../../assets/palestra-background.jpg") center/cover;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;

    }

    .secao-right {
        z-index: 3;
    }

    .py-100 {
        padding-top: 15%;
        padding-bottom: 15%;
    }

</style>