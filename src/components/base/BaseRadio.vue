<template>

  <v-radio
    :label="label"
    :value="itemValue"
  >
    <template v-slot:label>
      <slot name="label"></slot>
    </template>
  </v-radio>

</template>

<script>

export default {
  name: "BaseRadio",
  props: {
    label: {
      type: String,
      default: ""
    },

    itemValue: {
      type: [String, Object],
      required: true
    },

  },

};
</script>
