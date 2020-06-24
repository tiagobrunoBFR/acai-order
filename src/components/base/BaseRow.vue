<template>
  <v-row
    :align="align"
    :no-gutters="noGutters"
  >
    <slot></slot>
  </v-row>
</template>

<script>
export default {
  name: "BaseRow",
  props: {
    align: {
      type: String,
      default: "center"
    },
    noGutters: {
      type: Boolean,
      default: false
    }
  }

};
</script>