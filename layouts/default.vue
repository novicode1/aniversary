<template>
  <Root class="root">
    <main class="page-wrapper">
      <div class="page-content">
        <nuxt/>
      </div>
      <!-- <Header/> -->
    </main>
    <!-- <Footer class="footer-push"/> -->
  </Root>
</template>

<script>
import Root from "~/layouts/root";
// import Header from "~/components/Header/Header.vue"
// import Footer from "~/components/Footer/Footer.vue"

export default {
  components: {
    Root,
    // Header,
    // Footer
  }
};
</script>


<style scoped>
</style>
