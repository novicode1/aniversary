<template>
<div class="image-wrapper">
	<img :src="imageUrl" :alt="alt" crossorigin="anonymous" v-if="imageUrl && imageUrl.length">
</div>
</template>

<script>
export default {
	props: {
		alt: {
			default: 'Нет изображения'
		},

		imageUrl: {
			required: false
		}
	}
}
</script>

<style scoped>
.image-wrapper {
	position: relative;
	overflow: hidden;
	background: url("./preloader.svg") no-repeat;
	background-size: 50% auto;
	background-position: center;
	background-color: #F3F3F3;
}

.image-wrapper img {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: 101%;
	min-height: 101%;
	max-width: initial;
	object-fit: cover;
	width: 1px;
	height: auto;
	color: transparent;
	image-orientation: from-image;
}

.image-wrapper .image-preloader {
	width: 4em;
	object-fit: initial;
	min-width: initial;
	min-height: initial;
}
</style>
