<template>
    <div class="secao-right-body">
        <div class="container-fluid">
            <div class="row">
                <section class="col-12 section parallax d-flex" :class="classimage">
                    <div class="col-sm-6 my-auto ">
                        <h1 class=" text-left mb-4 titulo-secao-right"
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
        name: "SecaoRight",
        props: ["titulo", "imagem", "descricao", "colorborder", "classimage", "parallax"],
    }
</script>

<style scoped>

    .titulo-secao-right {
        font-size: 4em;
        font-family: Archive;
    }

    .secao-right-body {
        color: whitesmoke;
    }

    .section {
        position: relative;
        height: 100vh;
        justify-content: flex-end;
    }

    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform: translateZ(-2px) scale(2.1);
        background-size: 100%;
        z-index: -1;
    }

    .bgcampeonatos::after {
        background: url('https://lh3.googleusercontent.com/4gMAYZ9SGF6GtFbnKB5DGLU0nD8fTvXdCbTV8PF4xqp6Ua3EjBsqjgNO-5xSzoM_D1a5v57nzO-Lsz764mOmmHenFpgK3-cg6CRjsHUZRq-0mnAhpZigO8ZInsaNW7SnMsQ9eSUy01iRIQ5k4lWkx4Jk83Sq6mDRPLRMTgIHnsxgN3tev91FR8emMhh8mNEIGdT1ogOIpxU7lZ_QYS1_NCkjWQ90QnkpVSPtJkrDFWOLb5pVEN-oC9FiM5j6JOSr6y0Q59JiwQrhKy0ebT5BPLmHAcW2rvznJjKgZAw8HR1q7dIjTNMcKxppOkLWncj9XXf2QAvOLzJlb11zNJ_4RBNFYD60jAiz5fLLb6Joh1ofTP2C67vSbOz0avwipZg_IQiJ8L-89_6qP30kLfsiBgkvMbeyTmM2jlJkcTCfLwcPnXQ-lsop80lIL9PWKq9awOo8pS2Fcdj84DPZUYCJbOtb6ahEsLtuSFmtEPz5gLVlzDJfuS8eYwtSR0XcDVm_NRqo1zkHh8047bmC9-uRjx-X5dPzgomNoWSeOUCQArXgdA433zLeZVk5Ny4mQuvR3Nggor27G-LOmNY7VkEK6AtiSi1H_JiHuk9p_ONOjmyl1yNDw6d09gR-_BV8p_3Gj5xHayd4qbUiQf8fanNZkRN1jO-S29sH=w1760-h990-no') center/cover;
    }

    .bgfreeplay::after {
        background: url('https://lh3.googleusercontent.com/ZONfvR89XgEOzdoO0G4bu7f-Z7QB1QuaXL3uA810A_GnEATz99xho_zV1stBwuNRx-NG89ArIPyvCLme5EQcxVcr6WeKSFWVYeg1HD-cpfsmijnCdtXDO43CRDWJvFhhI9TFZwdr0da-i8W32PRhuNHh_5RXoPh1o8gkFyk9__Wf_NFi3M0z-oYBpQ5KKWUnMb8Vt9MhDHPa-GmbHbmUuJxAWxW4WxqIPPI8isWfAN6XNI0Qvhr2cV64Z71HsFsFqU2d-AQVKYLqYRpAKC5MGHwVSQBO3_B9-mx5qH1bItIGtW0l69GY2hcYg868tXF7jwaWbb6BeuOjHwBIzPgycBubFPYXlVJUcsQSV8NEtvv4LjYQFCVwLZYMkfsHMUb8n7OMPSJQ3QXm4bYQcrCbqVWgKY2tl9z7aoc_nmzYtd4NFnixbLENn1obZ3IFfSOitMdglSuF9Gho9IS6GPSD0Ed_6MN-tV0bJaygP4xP_0MwIzju3j2F2w23ZwOjVziK7ld6CIX6flBqRO_qAHBbQkTwQxynIy_TiFhI-R0sjWstDmuDJWdV_18orA3Gf_EFvLmVaWjSDRtnbxAhmU7CceJdMnsOyWR_VbWe-lrEnlrU0YryqWB-V0NWVlG0J6AjnNFZCAzN_N5oDPTK7vphrgktFH909MDp=w1762-h990-no') center/cover;
    }

</style>