<template>
  <order-card
    head-title="Selecione o Tamanho"
    head-content="Escolha até 1 opção."
    head-action="Obrigatório"
  >
    <base-radio-group
      v-model="name"
      attribute-error="Tamanho"
      :v="v"
    >
      <base-radio
        v-for="(size, index) in sizes"
        :key="index"
        :item-value="size"
      >
        <template v-slot:label>
          {{size.name}} - {{size.price | MoneyFormat}}
        </template>
      </base-radio>

    </base-radio-group>
  </order-card>
</template>

<script>
import OrderCard from "@/components/order/OrderCard.vue";
import MoneyFormat from "../../filters/MoneyFormat";

export default {
  name: "OrderSelectSize",
  components: {
    OrderCard
  },
  filters: {
    MoneyFormat
  },

  props: {
    sizes: {
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