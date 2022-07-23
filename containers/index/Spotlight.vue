<template>
	<section class="section">
		<h2>Danya + Nastya</h2>

		<CalendarCounter :date="new Date('March 24, 2019 19:00:00')" />
			<img
				src="/static/authors.png"
				width="850"
				height="1020"
				alt="Authors in hats"
				class="authors-image"
			/>
	</section>
</template>

<script>
import { DateFromNow, CalendarCounter } from '~/components/Date';

export default {

	components: {
		DateFromNow,
		CalendarCounter
	}
};
</script>

<style scoped>
.section {
	text-align: center;
}

.authors-image {
	display: block;
	max-width: 100%;
	width: 15em;
	height: auto;
	margin: 1em auto 0;
	box-shadow:
		12px 0px 0px #111111,
		-12px 0px 0px #111111,
		0px -12px 0px #111111,
		0px 12px 0px #111111,
		inset 0px -12px 0px rgba(17, 17, 17, 0.3);
}
</style>
