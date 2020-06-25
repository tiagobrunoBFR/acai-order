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

          <order-select-flavor
            v-model="order.flavor"
            :v="$v.order.flavor"
            :flavors="flavors"
          />

        </tab-content>

        <tab-content
          title="Escolher Tamanho"
          :before-change="selectSizeTab"
        >

          <order-select-size
            v-model="order.size"
            :v="$v.order.size"
            :sizes="sizes"
          />
        </tab-content>
        <tab-content
          title="Personalizar"
          :before-change="customizationTab"
        >

          <order-customization
            v-model="order.customizations"
            :customizations="customizations"
          />

        </tab-content>
        <tab-content title="Detalhes Pedido">
          <order-details :order="order" />
        </tab-content>
      </form-wizard>
    </TheMaster>
  </div>
</template>

<script>
import TheMaster from "@/components/core/TheMaster.vue";
import OrderSelectFlavor from "@/components/order/OrderSelectFlavor.vue";
import OrderSelectSize from "@/components/order/OrderSelectSize.vue";
import OrderCustomization from "@/components/order/OrderCustomization.vue";
import OrderDetails from "@/components/order/OrderDetails.vue";
import {FormWizard, TabContent} from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import {required} from 'vuelidate/lib/validators'
import {mapActions, mapGetters} from "vuex"
export default {
  name: "Home",
  components: {
    TheMaster,
    FormWizard,
    TabContent,
    OrderCustomization,
    OrderSelectFlavor,
    OrderSelectSize,
    OrderDetails
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

    ...mapActions({
      listSizes: 'size/listSizes',
      listFlavors: 'flavor/listFlavors',
      listCustomization: 'customization/listCustomization',
    }),

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
    this.listSizes()
    this.listFlavors()
    this.listCustomization()
  },

  computed: {

    ...mapGetters({
      sizes: 'size/sizes',
      flavors: 'flavor/flavors',
      customizations: 'customization/customizations'

    }),

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
      order: {
        total_preparation_time: "",
        total_price: "",
        size: "",
        flavor: "",
        customizations: []
      },
    };
  }
};
</script>
