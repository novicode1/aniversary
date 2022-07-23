<template>
	<div>
		<Notifications />
			<nuxt />

		<ClientOnly>
			<PortalTarget multiple name="flyout" />
		</ClientOnly>
	</div>
</template>

<script>
import { PortalTarget } from 'portal-vue';

import { Notifications } from '~/components/PageLayout';
import LocaleStorage from '~/services/locale-storage';

export default {
	components: {
		PortalTarget,
		Notifications
	}
};
</script>