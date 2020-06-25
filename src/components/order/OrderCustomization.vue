<template>
  <order-card
    head-title="Personalização"
    head-action="Opcional"
  >
    <v-list>
      <v-list-item-group v-model="name">
        <v-list-item
          v-for="(customization, index) in customizations"
          :key="`item-${index}`"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{customization.name}} - {{customization.price | MoneyFormat}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <base-row no-gutters>
              <base-col
                v-if="customization.amount>0"
                cols="3"
              >
                <v-btn
                  @click="customization.amount--"
                  class="ma-2"
                  icon
                  color="pink"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </base-col>
              <base-col
                v-if="customization.amount>0"
                cols="3"
              >
                <base-chip class="ma-2">{{customization.amount}}</base-chip>
              </base-col>
              <base-col cols="3">
                <v-btn
                  @click="customization.amount++"
                  class="ma-2"
                  icon
                  color="pink"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </base-col>
            </base-row>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </order-card>
</template>

<script>
import OrderCard from "@/components/order/OrderCard.vue";
import MoneyFormat from "../../filters/MoneyFormat";

export default {
  name: "OrderCustomization",
  components: {
    OrderCard
  },
  filters: {
    MoneyFormat
  },
  props: {
    customizations: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Object, Array, Number],

    },

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
