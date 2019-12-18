<template>
    <a
       target="_blank"
       rel="noopener"
       :href="button.st_link"
       class="btn ticket"
       :class="isFixed ? 'fixed btn-lg' : 'not-fixed'" >
       <i class="fa fa-ticket-alt fa-2x mr-2 mr-md-3"></i>
        <span>ADQUIRA SEU INGRESSO!</span>
    </a>
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

    .ticket.not-fixed {
        display: inline-flex;
        @include md {
            display: none;
        }
    }

</style>
