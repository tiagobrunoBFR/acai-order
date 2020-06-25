<template>
  <order-card
    head-title="Selecione o sabor"
    head-content="Escolha até 1 opção."
    head-action="Obrigatório"
  >
    <base-radio-group
      v-model="name"
      attribute-error="Sabor"
      :v="v"
    >
      <base-radio
        v-for="(flavor, index) in flavors"
        :key="index"
        :label="flavor.name"
        :item-value="flavor"
      />

    </base-radio-group>
  </order-card>
</template>

<script>
import OrderCard from "@/components/order/OrderCard.vue";

export default {
  name: "OrderSelectFlavor",
  components: {
    OrderCard
  },

  props: {
    flavors: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Object],
      default: ""
    },
    v: {
      type: Object,
      required: false
    }
  },
  computed: {
    name: {
      get () {
        return this.value;
      },
      set (value) {
        this.$emit("input", value);
      }
    }
  }
}
</script>
