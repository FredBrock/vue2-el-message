<template>
  <div class="el-message el-message--success">
    <p class="el-message__content">{{ message }}</p>
    <i class="el-message__closeBtn el-icon-close" @click="close">x</i>
  </div>
</template>
<style></style>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>
