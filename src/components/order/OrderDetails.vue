<template>
  <div class="d-flex flex-column mb-6">
    <v-card class="pa-2">
      <v-card-title>{{order.flavor.name}} {{order.size.name}} R$ {{order.size.price | MoneyFormat}}</v-card-title>
      <v-card-text>
        <ul>
          <li
            v-for="custom in order.customizations"
            :key="custom.id"
          >{{custom.amount}}x {{custom.name}} - {{custom.price | MoneyFormat}}</li>
        </ul>
        <br />
        <v-divider></v-divider>
        <br />
        <base-row no-gutters>
          <base-col
            cols="12"
            class="black--text font-weight-bold text-h6"
          >Subtotal: R${{order.total_price | MoneyFormat}}</base-col>
        </base-row>
        <base-row no-gutters>
          <base-col
            cols="12"
            class="black--text font-weight-bold text-h6"
          >Tempo de Preparo: {{order.total_preparation_time}} minutos</base-col>
          <base-col
            cols="1"
            class="black--text font-weight-bold text-h6"
          ></base-col>
        </base-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import MoneyFormat from "../../filters/MoneyFormat";
export default {
  name: "OrderDetails",
  props: {
    order: {
      type: Object
    }
  },
  filters: {
    MoneyFormat
  },
}
</script>