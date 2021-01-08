<template>
    <nuxt-link
        :to="linkTo"
        class="button"
        :class="className"
    >
        <span class="before-text-content" v-if="this.$slots.beforeText">
            <slot name="beforeText"/>
        </span>

        <span class="button-text" :class="this.$slots.beforeText || this.$slots.afterText ? 'inline-block' : ''">
            {{ buttonText }}
            <slot></slot>
        </span>

        <span class="after-text-content" v-if="this.$slots.afterText">
            <slot name="afterText"/>
        </span>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        linkTo: {
            default: '/'
        },
        className: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.button {
    font-size: 1em;
    line-height: 1.2;
    display: inline-block;
    vertical-align: baseline;
    padding: 0.846em calc(1.077em - 4px);
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.33em;
    font-weight: 500;
    color: #111;
    transition: opacity var(--smooth-animation), transform var(--smooth-animation);
}

.button:hover {
    opacity: 0.8;
}

.inline-block, .before-text-content, .after-text-content {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
}

.before-text-content + .button-text {
    margin-left: 0.25em;
}

.button-text + .after-text-content {
    margin-left: 0.25em;
}

.before-text-content >>> svg, .after-text-content >>> svg {
    display: block;
    line-height: 1;
}
</style>
