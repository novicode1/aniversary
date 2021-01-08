<template>
	<button
			:class="className"
			class="button"
			:type="type"
			:disabled="showSpinner"
	>
			<span :class="showSpinner ? 'main-content-hidden' : ''" class="main-content">
					<span class="before-text-content" v-if="this.$slots.beforeText">
							<slot name="beforeText"/>
					</span>

					<span class="button-text" :class="this.$slots.beforeText || this.$slots.afterText ? 'inline-block' : ''">
							{{ buttonText }}<slot></slot>
					</span>

					<span class="after-text-content" v-if="this.$slots.afterText">
							<slot name="afterText"/>
					</span>
			</span>

			<Spinner v-show="showSpinner" class="loading-spinner" />
	</button>
</template>

<script>
import Spinner from '~/components/icons/Spinner.vue';

export default {
	props: {
			className: {
					type: String,
					default: ''
			},
			showSpinner: {
					type: Boolean,
					default: false
			},
			buttonText: {
					type: String,
					default: ''
			},
			type: {
					type: String,
					default: 'button'
			}
	},

	components: {
			Spinner
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
	border: none;
	font-weight: 500;
	color: currentColor;
	position: relative;
	transition: opacity var(--smooth-animation), transform var(--smooth-animation);
}

.main-content {
	display: block;
}

.main-content.main-content-hidden {
	opacity: 0;
	display: inline-block;
	vertical-align: top;
	line-height: inherit;
}

.loading-spinner {
	display: inline-block;
	vertical-align: top;
	line-height: inherit;
}

.button:disabled {
	opacity: 0.7;
	cursor: progress;
	background-color: #D8D8D8;
}

.button .loading-spinner {
	font-size: 1.125em;

	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}


@media screen and (min-width: 576px) {
	.button:hover {
		opacity: 0.8;
	}
}

.button-text {
	display: block;
}

.inline-block, .before-text-content, .after-text-content {
	display: inline-block;
	vertical-align: middle;
	line-height: 1;
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
