<template>
	<div class="root">
		<nuxt v-if="!$slots.default"/>
		<slot/>
	</div>
</template>

<script>
import "~/styles/fonts.css";

export default {
  components: {
  },

  head() {
    return {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5 shrink-to-fit=no"
        },
      ],
    };
  }
};
</script>
