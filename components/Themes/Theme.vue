<template>
	<Props class="theme">
		<slot />
	</Props>
</template>

<script>
import { Props } from '~/components/ControlFlow';

export default {
	components: {
		Props
	}
};
</script>

<style scoped>
.theme {
	--color-accent-primary: #EE1B24;
	--color-accent-secondary: #FA6400;
	--color-compliment-primary: #007AFE;
	--color-compliment-secondary: #3880D1;

	--color-text-default: #595858;
	--color-text-primary: #111;
	--color-text-secondary: #999;

	--color-background-default: #fff;
	--color-background-primary: #eee;
	--color-background-secondary: #f3f3f3;

	--color-scrollbar: rgba(212, 214, 219, 0.5);

	--color-accent: var(--color-accent-primary);
	--color-compliment: var(--color-compliment-primary);

	--color-positive: #7BB342;
	--color-neutral: #FFAE50;
	--color-negative: #E83D5C;

	--focus-color: rgba(131,192,253,.5);
}

.theme {
	-webkit-tap-highlight-color: rgba(0,0,0,0.1);
}

.theme ::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	background: none;
}

.theme ::-webkit-scrollbar-track {
	background: none;
	display: none;
}


.theme ::-webkit-scrollbar-thumb {
		border: 2px solid transparent;
		background: var(--color-scrollbar);
		background-clip: padding-box;
		border-radius: 5px;
	}

.theme ::-webkit-scrollbar-button,
.theme ::-webkit-scrollbar-track-piece,
.theme ::-webkit-scrollbar-corner,
.theme ::-webkit-resizer {
	display: none;
}

/* CSS hack for Firefox specifically to not pollute Dev Tools */
@-moz-document url-prefix() {
	* {
		scrollbar-color: var(--color-scrollbar) transparent;
		scrollbar-width: thin;
	}
}
</style>