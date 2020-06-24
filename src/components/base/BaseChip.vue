<template>
  <v-chip :label="label">
    <slot />
  </v-chip>
</template>

<script>
export default {
  props: {
    label: {
      type: Boolean,
      default: false
    }
  }
}
</script>
