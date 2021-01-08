<template>
    <div class="box">
        <div class="spinner"><span class="visually-hidden">Загрузка</span></div>
    </div>
</template>


<style scoped>
.box .spinner {
    border: 2px solid rgba(0, 0, 0, 0.3);
	border-top-color: #fff;
	animation: spinner 600ms linear infinite;
    width: 1em;
    height: 1em;
    border-radius: 50%;
}

@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}
</style>
