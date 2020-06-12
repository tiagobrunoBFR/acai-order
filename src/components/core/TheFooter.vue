<template>
  <v-footer color="primary" :inset="true" app class="dark_purple">
    <v-layout justify-start row wrap>
      <v-flex dark pa-3 py-3 text-xs-start white--text xs10>
        &copy; {{ new Date().getFullYear() }}
        <strong>
          <slot name="title"></slot>
        </strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

