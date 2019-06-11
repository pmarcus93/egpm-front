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
            display: block;
            color: #fff;
            background: #3255A5;
            border: none;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            transition: all linear .2s;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 5;
            :hover {
                transform: scale(1.1);
                color: #fff;
            }
        }
    }
</style>