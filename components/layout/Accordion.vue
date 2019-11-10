<template>
    <div class="">
        <div class="tab__header">
            <a href="#" class="text-primary tab__link p-4 block no-underline border-t-2 border-primary flex justify-between" @click.prevent="active = !active">
                {{title}}
                <span class="down-Arrow" v-show="!active">&#9660;</span>
                <span class="up-Arrow" v-show="active">&#9650;</span>
            </a>
        </div>
        <div class="tab__content" v-show="active"><slot /></div>
    </div>
</template>
<script>
    export default {
        props: [
            'title'
        ],
        data() {
            return {
                active: false,
            }
        },
    }
</script>