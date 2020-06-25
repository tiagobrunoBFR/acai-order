<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
  >
    <slot />
  </v-col>
</template>

<script>
export default {
  name: "BaseCol",
  props: {
    sm: {
      type: String,
      default: ""
    },
    cols: {
      type: String,
      default: ""
    },
    md: {
      type: String,
      default: ""
    }
  }
}
</script>
