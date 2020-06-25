<template>
  <v-navigation-drawer
    color="secondary"
    @input="(value) => $emit('input', value)"
    app
    clipped
    :value="value"
    dark
    overflow
  >
    <v-list dense>
      <v-list-item
        link
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        active-class="primary"
      >
        <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "TheDrawer",
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      items: [
        {title: "Pedido", icon: "restaurant_menu", to: {name: "Home"}}
      ]
    };
  },
  methods: {
    changeDrawer () {
      this.$emit("change-drawer");
    }
  }
};
</script>
