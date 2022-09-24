<template>
  <div class="doc-element">
    <span class="doc-title">{{ doc.title }}</span>
    <template v-if="doc.badges.length"><Badge v-for="(badge, i) in doc.badges" :key="i" :color="badge" /></template>
    <span v-if="doc.required" class="required-warn text-danger">Обязательный</span>
    <span class="desctiption-text">{{ doc.for }}</span>
    <ActionButtons />
  </div>
</template>

<script>
import ActionButtons from './ActionButtons';
export default {
  components: {
    ActionButtons
  },
  props: {
    doc: {
      type: Object,
      required: true
    }
  }
}
</script>
