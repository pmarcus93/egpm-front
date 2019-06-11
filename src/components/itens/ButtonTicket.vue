<template>
    <button class="ticket btn"><i class="fa fa-ticket-alt fa-2x"></i></button>
</template>

<script>
    export default {
        name: "ButtonTicket"
    }
</script>

<style scoped lang="scss">
    .ticket {
        display: none;
        @include md {
            background: $rainbow-blue;
            bottom: 20px;
            border: none;
            border-radius: 50%;
            color: #fff;
            display: block;
            height: 70px;
            position: fixed;
            right: 30px;
            transition: all linear .2s;
            width: 70px;
            z-index: 5;
            :hover {
                transform: scale(1.1);
                color: #fff;
            }
        }
    }
</style>