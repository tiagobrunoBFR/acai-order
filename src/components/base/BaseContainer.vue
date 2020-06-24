<template>
  <v-container fluid>
    <slot />
  </v-container>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>
