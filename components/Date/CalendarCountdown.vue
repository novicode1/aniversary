<template>
	<div class="calendar-countdown">
		<h2 v-if="title" class="title">
			{{ title }}
		</h2>

		<ul class="time-parts-list">
			<li v-if="days" class="time-part-item">
				<span class="time-part-value">{{ years }}</span>
				<span class="time-part-title">years</span>
			</li>
			<li v-if="days" class="time-part-item">
				<span class="time-part-value">{{ months }}</span>
				<span class="time-part-title">months</span>
			</li>
			<li v-if="days" class="time-part-item">
				<span class="time-part-value">{{ days }}</span>
				<span class="time-part-title">days</span>
			</li>
			<li class="time-part-item">
				<span class="time-part-value">{{ hours }}</span>
				<span class="time-part-title">hours</span>
			</li>
			<li class="time-part-item">
				<span class="time-part-value">{{ minutes }}</span>
				<span class="time-part-title">minutes</span>
			</li>
			<li v-if="!days" class="time-part-item">
				<span class="time-part-value">{{ seconds }}</span>
				<span class="time-part-title">seconds</span>
			</li>
		</ul>

		<span class="event-date">* <BaseDate :date="date" /> </span>
	</div>
</template>

<script>
import BaseDate from './Date';

export default {
	components: {
		BaseDate
	},

	props: {
		date: {
			type: Date,
			required: true
		},

		title: {
			type: String,
			default: null
		}
	},

	data () {
		return {
			interval: null,

			years: null,
			months: null,
			days: null,
			hours: null,
			minutes: null,
			seconds: null
		};
	},

	mounted () {
		let moment = this.$moment;
		let currentDate = moment(new Date());
		let date = moment(this.date);

		let diff = date.diff(currentDate);
		let duration = moment.duration(diff);

		const REFRESH_INTERVAL = 1000;

		const EVENT_HAS_STARTED = currentDate > date;

			this.interval = setInterval(() => {
				duration = moment.duration(duration - REFRESH_INTERVAL, 'milliseconds');

				this.years = duration.months();
				this.months = duration.months();
				this.days = duration.days();
				this.hours = duration.hours();
				this.minutes = duration.minutes();
				this.seconds = duration.seconds();

				const TIME_IS_UP = this.hours === 0 && this.minutes === 0 && this.seconds === 0;

				if (TIME_IS_UP) {
					this.$emit('finish');
					clearInterval(this.interval);
				}
			}, REFRESH_INTERVAL);
	}
};
</script>

<style scoped>
.calendar-countdown {
	display: block;
}

.title {
	font-size: 1em;
	color: var(--color-text-default);
	margin-bottom: 0.75em;
	font-weight: 400;
}

.time-parts-list {
	display: block;
	list-style: none;
	margin: 0;
	text-align: center;
}

.time-part-item {
	display: inline-block;
	vertical-align: top;
	padding: 1.125em 0.75em;
	min-width: 6em;
	position: relative;
	background-color: var(--color-background-secondary);
	box-shadow: var(--volumetric-shadow);
}

.time-part-item + .time-part-item {
	margin-left: 0.5em;
}

.time-part-value {
	font-size: calc(1.5em + 0.5vw);
	font-weight: 400;
	margin-bottom: 0.5rem;
	display: block;
	color: var(--color-text-primary);
}

.time-part-title {
	font-weight: 400;
	font-size: 1.125em;
	color: var(--color-text-default);
}

.event-date {
	display: block;
	padding: 0.5em 0.25em 0.25em;
	color: var(--color-text-default);
	font-size: 0.875em;
}

@media screen and (max-width: 576px) {
	.time-parts-list {
		border-radius: 1em;
		background-color: var(--color-background-default);
		box-shadow: var(--volumetric-shadow);
		display: inline-flex;
		width: auto;
		max-width: 100%;
	}

	.time-part-item {
		width: 6em;
		max-width: 100%;
		min-width: initial;
		border-radius: initial;
		/* background-color: initial; */
		box-shadow: none;
		position: relative;
	}


	.time-part-item:first-child:before {
		display: none;
	}

	.time-part-item:before {
		content: '';
		display: inline-block;
		background: var(--color-background-primary);
		opacity: 1;
		width: 1px;
		height: 80%;
		transform: translate(0, -50%);
		top: 50%;
		left: 0;
		position: absolute;
		z-index: 1;
	}

	.time-part-item + .time-part-item {
		margin-left: 0;
	}

	.time-part-title {
		font-size: 1em;
	}
}
</style>