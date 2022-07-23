<template>
	<Page class="page">
		<PageContent>
			<Spotlight />
		</PageContent>
	</Page>
</template>

<script>
import { Page, PageContent } from '~/components/PageLayout';
import { Spotlight } from '~/containers/index';

export default {
	layout: 'dark-theme',

	components: {
		Page,
		Spotlight,
		PageContent,
	}
};
</script>

<style scoped>
</style>