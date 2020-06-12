<template>
  <v-app-bar color="primary" app clipped-left dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title white--text>
      <slot name="title"></slot>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheToolbar",
  computed: {
    drawer: {
      get() {
        return this.$store.state.app.drawerStore;
      },
      set(value) {
        this.$store.commit("app/SET_DRAWER", value);
      }
    }
  }
};
</script>

<style scoped>
</style>
