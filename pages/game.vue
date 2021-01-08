<template>
  <div class="content-wrapper">
		<!-- <h1>Game</h1> -->
		<div class="score-wrapper">
			<h2 class="score">102 м</h2>
		</div>

		<Button @click="playAgain" class="play-again-button">
			<Reload slot="beforeText" class="reload-icon" />
			<span>Еще раз</span>
		</Button>

		<img src="/images/airplane.svg" class="score-illustration" alt="Score illustration" />
  </div>
</template>

<script>
import Fragment from 'vue-fragment'
import Button from '~/components/Button/Button.vue'

import Reload from '~/components/icons/Reload.vue'

export default {
	methods: {
		playAgain() {
			alert('again')
		}
	},

	components: {
		Button,
		Reload,
	}
}
</script>

<style scoped>
.content-wrapper {
	background-color: #8CDBE9;
	text-align: center;
	padding-top: 10vh;
	min-height: 100vh;
}

.score {
	display: inline-block;
	background-color: #fff;
	padding: 0.286em 0.572em;
	font-size: calc(2.8em + 1vw); /* 56px */
	border-radius: 0.214em;
	font-weight: 900;
	margin-bottom: 0.8em;
}

.play-again-button {
	background-color: #fff;
	display: inline-block;
	padding: 0.5em 1.25em;
	font-size: calc(1em + 0.5vw);
	border-radius: 0.5em;
	margin-bottom: 1em;
}

.reload-icon {
	width: 1.125em;
	height: 1.125em;
	font-size: 1em;
}

.score-illustration {
	max-height: calc(100vh - 17em - 5vh);
	width: 100%;
}
</style>
