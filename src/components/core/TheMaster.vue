<template>
  <v-layout>
    <the-drawer v-model="drawer" @change-drawer="changeDrawer"></the-drawer>

    <the-toolbar @change-drawer="changeDrawer">
      <template v-slot:title>
        <span>Pedido Açaí</span>
      </template>
    </the-toolbar>

    <v-main>
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <div style="height:100%;width:100%;max-width:100%">
            <slot></slot>
          </div>
        </v-layout>
      </v-container>
    </v-main>

    <the-footer>
      <template v-slot:title>
        <span>Pedido Açaí</span>
      </template>
    </the-footer>
  </v-layout>
</template>
<script>
import TheDrawer from "@/components/core/TheDrawer";
import TheFooter from "@/components/core/TheFooter";
import TheToolbar from "@/components/core/TheToolbar";

export default {
  name: "TheMaster",
  components: {
    TheDrawer,
    TheFooter,
    TheToolbar
  },

  computed: {
    drawer: {
      get() {
        return this.$store.state.app.drawerStore;
      },
      set(value) {
        this.$store.commit("app/SET_DRAWER", value);
      }
    }
  },

  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
