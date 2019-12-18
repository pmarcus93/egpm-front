<template>
    <a
       target="_blank"
       rel="noopener"
       :href="button.st_link"
       :class="isFixed && 'fixed'"
       class="btn ticket">
        <i class="fa fa-ticket-alt fa-2x mr-2"></i>
        <span>ADQUIRA SEU INGRESSO!</span>
    </a>

<!--    <a v-if="button.bl_ativo"-->
<!--       class="ticket"-->
<!--       target="_blank"-->
<!--       rel="noopener"-->
<!--       :href="button.st_link">-->
<!--        <i class="fa fa-ticket-alt fa-2x"></i>-->
<!--    </a>-->
</template>

<script>
    export default {
        name: "ButtonTicket",
        props: ["button", "isFixed"],
    }
</script>

<style scoped lang="scss">

    .ticket {
        color: #000000;
        background: $color-primary;
        display: inline-flex;
        align-items: center;
    }

    .ticket.fixed {
        @include md {
            display: flex;
            bottom: 20px;
            position: fixed;
            right: 30px;
            z-index: 5;
        }
    }

</style>
