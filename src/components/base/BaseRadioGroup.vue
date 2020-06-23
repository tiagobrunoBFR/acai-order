<template>
  <form-group
    :validator="v"
    :name="attributeError"
  >
    <template slot-scope="{ attrs }">

      <v-radio-group
        @input="v.$touch()"
        v-bind="attrs"
        v-model="name"
        :mandatory="mandatory"
      >
        <slot />
      </v-radio-group>
    </template>
  </form-group>
</template>

<script>
import FormGroup from "@/components/vuelidate/FormGroup.vue";

export default {
  name: "BaseGroupRadio",
  comments: {
    FormGroup
  },
  props: {
    attributeError: {
      type: String,
      default: ""
    },


    label: {
      type: String,
      default: ""
    },



    mandatory: {
      type: Boolean,
      default: false
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
};
</script>
