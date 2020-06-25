<template>

  <span>

    <base-alert
      border="left"
      color="blue-grey"
      dark
    >
      <base-row no-gutters>
        <base-col
          cols="8"
          class="grow"
        >
          {{headTitle}}
          <br />
          <span class="grey--text">{{headContent}}</span>
        </base-col>
        <base-col cols="4">
          <base-chip label>{{headAction}}</base-chip>
        </base-col>
      </base-row>
    </base-alert>

    <base-row no-gutters>
      <base-col
        cols="12"
        sm="4"
      >
        <base-container fluid>
          <slot />
        </base-container>
      </base-col>
    </base-row>
  </span>

</template>

<script>
export default {

  props: {
    headTitle: {
      type: String,
      required: true
    },
    headContent: {
      type: String,
      default: ""
    },
    headAction: {
      type: String,
      default: ""
    }
  }


}
</script>

<style>
</style>