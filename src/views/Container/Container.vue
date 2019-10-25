<template>
    <div class="container">
        <slot name="content">
            <p>Nothing to see!</p>
        </slot>
    </div>
</template>

<script>

export default {
    name: 'Container'
}
</script>

<style lang="scss" scoped>
    @import './container.scss';
</style>