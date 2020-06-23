<template>
  <div class="home">
    <TheMaster>
      <form-wizard
        back-button-text="Voltar"
        next-button-text="Próximo"
        finish-button-text="Finalizar"
        title="Pedido Açaí"
        subtitle
      >
        <tab-content
          title="Escolher Sabor"
          :before-change="selectFlavorTab"
        >
          <v-alert
            border="left"
            color="blue-grey"
            dark
          >
            <v-row align="center">
              <v-col class="grow">
                Selecione o sabor
                <br />
                <span class="grey--text">Escolha até 1 opção.</span>
              </v-col>
              <v-col class="shrink">
                <v-chip label>Obrigatório</v-chip>
              </v-col>
            </v-row>
          </v-alert>

          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
            >
              <v-container fluid>
                <base-radio-group
                  v-model="order.flavor"
                  attribute-error="Sabor"
                  :v="$v.order.flavor"
                >
                  <base-radio
                    v-for="(flavor, index) in flavors"
                    :key="index"
                    :label="flavor.name"
                    :item-value="flavor"
                  />

                </base-radio-group>

              </v-container>
            </v-col>
          </v-row>

        </tab-content>

        <tab-content
          title="Escolher Tamanho"
          :before-change="selectSizeTab"
        >
          <v-alert
            border="left"
            color="blue-grey"
            dark
          >
            <v-row align="center">
              <v-col class="grow">
                Selecione o Tamanho
                <br />
                <span class="grey--text">Escolha até 1 opção.</span>
              </v-col>
              <v-col class="shrink">
                <v-chip label>Obrigatório</v-chip>
              </v-col>
            </v-row>
          </v-alert>

          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
            >
              <v-container fluid>

                <base-radio-group
                  v-model="order.size"
                  attribute-error="Tamanho"
                  :v="$v.order.size"
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
              </v-container>
            </v-col>
          </v-row>
        </tab-content>
        <tab-content
          title="Personalizar"
          :before-change="customizationTab"
        >
          <v-alert
            border="left"
            color="blue-grey"
            dark
          >
            <v-row align="center">
              <v-col class="grow">
                Personalização
                <br />
              </v-col>
              <v-col class="shrink">
                <v-chip label>Opcional</v-chip>
              </v-col>
            </v-row>
          </v-alert>

          <v-list>
            <v-list-item-group v-model="order.customizations">
              <v-list-item
                v-for="(customization, index) in customizations"
                :key="`item-${index}`"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>{{customization.name}} - {{customization.price | MoneyFormat}}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-row no-gutters>
                    <v-col
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
                    </v-col>
                    <v-col
                      v-if="customization.amount>0"
                      cols="3"
                    >
                      <v-chip class="ma-2">{{customization.amount}}</v-chip>
                    </v-col>
                    <v-col cols="3">
                      <v-btn
                        @click="customization.amount++"
                        class="ma-2"
                        icon
                        color="pink"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </tab-content>
        <tab-content title="Detalhes Pedido">
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
                <v-row no-gutters>
                  <v-col
                    cols="12"
                    class="black--text font-weight-bold text-h6"
                  >Subtotal: R${{order.total_price | MoneyFormat}}</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col
                    cols="12"
                    class="black--text font-weight-bold text-h6"
                  >Tempo de Preparo: {{order.total_preparation_time}} minutos</v-col>
                  <v-col
                    cols="1"
                    class="black--text font-weight-bold text-h6"
                  ></v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </tab-content>
      </form-wizard>
    </TheMaster>
  </div>
</template>

<script>
import TheMaster from "@/components/core/TheMaster.vue";
import MoneyFormat from "../filters/MoneyFormat";
import {FormWizard, TabContent} from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import {required} from 'vuelidate/lib/validators'

export default {
  name: "Home",
  components: {
    TheMaster,
    FormWizard,
    TabContent
  },
  filters: {
    MoneyFormat
  },

  validations: {
    order: {
      flavor: {
        required,
      },
      size: {
        required
      }

    },

  },

  methods: {
    customizationTab () {
      this.order.customizations = this.customizations.filter(
        customization => customization.amount > 0
      );

      this.order.total_preparation_time = this.totalTimePreparation;

      this.order.total_price = this.totalPrice;

      return true;
    },

    selectFlavorTab () {
      this.$v.order.flavor.$touch();

      if (!this.$v.order.flavor.$invalid) {

        return true

      } else {
        return false
      }
    },

    selectSizeTab () {
      this.$v.order.size.$touch();

      if (!this.$v.order.size.$invalid) {

        return true

      } else {
        return false
      }
    }
  },
  created () {
    this.customizations.forEach(function (item) {
      item.amount = 0;
    });
  },

  computed: {
    totalPrice: function () {
      let totalPriceCustomization = this.order.customizations.reduce(
        (total, customization) =>
          total +
          (parseFloat(customization.amount) * parseFloat(customization.price)),
        0
      );

      return (
        parseFloat(this.order.size.price) + parseFloat(totalPriceCustomization)
      );
    },

    totalTimePreparation: function () {
      let totalTimeCustomization = this.order.customizations.reduce(
        (total, customization) =>
          total +
          (parseInt(customization.amount) *
            parseInt(customization.preparation_time)),
        0
      );

      return (
        parseInt(this.order.size.preparation_time) +
        parseInt(this.order.flavor.preparation_time) +
        parseInt(totalTimeCustomization)
      );
    }
  },

  data () {
    return {
      rules: {
        user: [{
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }, {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change'
        }],
      },
      settings: [],
      order: {
        total_preparation_time: "",
        total_price: "",
        size: "",
        flavor: "",
        customizations: []
      },
      customizations: [
        {
          id: 1,
          name: "granola",
          price: "0.00",
          preparation_time: "0"
        },
        {
          id: 2,
          name: "Leite Ninho",
          price: "3.00",
          preparation_time: "0"
        },
        {
          id: 3,
          name: "Paçoca",
          price: "3.00",
          preparation_time: "3"
        }
      ],
      sizes: [
        {
          id: 1,
          name: "Pequeno",
          price: "10.00",
          preparation_time: "5"
        },
        {
          id: 2,
          name: "Médio",
          price: "13.00",
          preparation_time: "7"
        },
        {
          id: 3,
          name: "Grande",
          price: "15.00",
          preparation_time: "10"
        }
      ],
      flavors: [
        {
          id: 1,
          name: "morango",
          preparation_time: "0"
        },
        {
          id: 2,
          name: "banana",
          preparation_time: "0"
        },
        {
          id: 3,
          name: "kiwi",
          preparation_time: "5"
        }
      ]
    };
  }
};
</script>
