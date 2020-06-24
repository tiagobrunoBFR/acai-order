<template>
  <v-alert
    :border="border"
    :color="color"
    :dark="dark"
  >
    <slot />
  </v-alert>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    border: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }

  }


}
</script>


