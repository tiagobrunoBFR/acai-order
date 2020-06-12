<template>
  <div class="home">
    <TheMaster>
      <h1>Teste Master</h1>
    </TheMaster>
  </div>
</template>

<script>
// @ is an alias to /src
import TheMaster from "@/components/core/TheMaster.vue";

export default {
  name: "Home",
  components: {
    TheMaster
  }
};
</script>
