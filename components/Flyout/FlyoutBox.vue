<template>
	<Size :onResizeEnd="handleResize">
		<div class="flyout-box" ref="flyoutBox" :role="role">
			<div class="flyout-content">
				<div class="flyout-header" v-if="mobileViewport">
					<Button
						class="close-button"
						@click="onHide"
						title="Close"
						iconName="cross"
						collapsed
					/>
				</div>

				<div class="flyout-main">
					<slot />
				</div>
			</div>
		</div>
	</Size>
</template>

<script>
import noop from '~/utils/noop';
import { Document, Size, Window } from '~/components/EventListener';
import { Button } from '~/components/buttons';

export default {
	components: {
		Button,
		Document,
		Size,
		Window
	},

	props: {
		title: {
			default: '',
			type: String
		},

		onMount: {
			type: Function,
			default: noop
		},

		onHide: {
			type: Function,
			default: noop
		},

		triggerStyle: {
			default: () => ({
    		left: 0,
				top: 0
  		}),
		},

		role: {
			type: String,
			default: undefined
		}
	},

	data() {
		return {
			noop,
			elementStartingRect: {
				right: 0,
    		left: 0,
    		bottom: 0,
				top: 0
  		}
		}
	},

  mounted() {
		this.elementStartingRect = this.flyoutRect;
		this.updatePlacement();

		this.onMount();
  },

  updated() {
		this.updatePlacement();
  },

	methods: {
		handleResize(event) {
			const { elementStartingRect, windowWidth } = this;
			const { borderBox } = event;
			const { width: newWidth, height: newHeight } = borderBox;

			const { x, y, width, height, top, right, bottom, left } = elementStartingRect;

			let newTop = top;
			let newLeft = 0;
			let newRight = windowWidth - newLeft - newWidth;
			let newBottom = bottom + (newHeight - height);

			this.elementStartingRect = new DOMRect(newLeft, newTop, newWidth, newHeight, newTop, newRight, newBottom, newLeft);

			this.updatePlacement();
		},

		updatePlacement() {
			// if (this.mobileViewport) return;

			const flyoutElement = this.flyoutBox;
			const arrowElement = this.arrowElement;

    	const { position, triggerStyle } = this;
			const { viewportShift, left } = this;

			flyoutElement.style.transform = `translateX(${position.left}px) translateY(${position.top}px)`;
			flyoutElement.style.maxHeight = `${position.height}px`;
		}
	},

	computed: {
		flyoutBox() {
			return this.$refs.flyoutBox;
		},

		arrowElement() {
			return this.$refs.arrowElement;
		},

		windowWidth() {
			return process.client ? window.innerWidth : undefined;
		},

		windowHeight() {
			return process.client ? window.innerHeight : undefined;
		},

		mobileViewport () {
			return this.windowWidth < 576;
		},

		flyoutRect() {
			return this.flyoutBox.getBoundingClientRect();
		},

		/* Расчёт выравнивания по центру */

		centeredLeft() {
			const { flyoutRect, triggerStyle } = this;
			const triggerCenter = (triggerStyle.width || 0) / 2;
			const elementCenter = (this.flyoutBox.getBoundingClientRect()).width / 2;
			const centerShift = triggerCenter - elementCenter;
			const centeredLeft = triggerStyle.left + centerShift;
			return Math.round(centeredLeft);
		},

		/* Учёт выхода за пределы экрана */

		viewportShift() {
			const { triggerStyle, flyoutRect, centeredLeft, windowHeight } = this;
			const { left, top, height } = triggerStyle;
			const { elementStartingRect } = this;

			const viewportBox = document.documentElement.getBoundingClientRect();
			const viewportWidth = Math.floor(viewportBox.width);
			const viewportHeight = Math.floor(viewportBox.height);

			const elementLeft = elementStartingRect.left + centeredLeft;
			const elementRight = elementStartingRect.right + centeredLeft;
			const elementBottom = elementStartingRect.bottom + top;

			const viewportShift = {
				left: 0,
				top: 0,
				height: 'auto'
			};

			if (elementLeft < 0) {
				viewportShift.left = Math.ceil(Math.abs(elementLeft));
			} else if (elementRight > viewportWidth) {
				viewportShift.left = Math.floor(viewportWidth - elementRight);
			}

			if (elementBottom > windowHeight) {
				viewportShift.top = -1 * (elementBottom - windowHeight);
			}

			return viewportShift;
		},

  	/* Окончательная позиция с учётом всех сдвигов */

  	position() {
			const { triggerStyle, centeredLeft, viewportLeftShift } = this;
			const { viewportShift } = this;

			return {
				left: centeredLeft + viewportShift.left,
				top: triggerStyle.top + viewportShift.top,
				height: viewportShift.height
			};
		},
	}
};
</script>

<style scoped>
.flyout-box {
	font-size: 1rem;
	padding: 0.5em;
	box-sizing: border-box;
	max-height: 60vh;
	height: auto;

	display: flex;
	flex-direction: column;
}



.flyout-content {
	position: relative;
	background-color: var(--color-background-secondary);

	box-shadow: var(--pixel-shadow), 4px 0px 0 200vw rgba(17, 17, 17, 0.5);
	height: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.flyout-header {
	display: flex;
	position: sticky;
	align-items: center;
	z-index: 1;
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
	top: 0;
	left: 0;
	padding: 0.5em;
	background-color: var(--color-background-secondary);
}

.title {
	display: block;
	width: 100%;
	margin-bottom: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 1em;
	font-size: 1em;
	font-weight: 400;
}

.close-button {
	margin-left: auto;
}

.close-button:hover {
	background-color: var(--color-background-secondary);
}

.flyout-main {
	height: 100%;
	flex: 1;
	overflow-x: hidden;
	overflow-y: scroll;
	overflow-y: overlay;
	padding: 0.5em 0;
}

.flyout-header ~ .flyout-main {
	padding-top: 0em;
	padding-bottom: 1em;
}
</style>