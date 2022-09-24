<template functional>
  <div class="badge" :style="`background: ${props.color}`"></div>
</template>

<script>
  export default {
    props: {
      color: {
        typeof: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.badge {
  margin: 0 5px 1px;
  display: inline-block;
  line-height: 0;
  word-spacing: 0;
  font-size: 0;
  width: 7px;
  height: 7px;
  border-radius: 4px;
}
</style>