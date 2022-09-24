<template>
  <div>
    <div class="category-element">
      <div :class="['category-card']" :aria-expanded="category.visible ? 'true' : 'false'" :aria-controls="`category-${category.id}`" role="button" @click="$emit('toggleShow', category.id)">
        <div :class="['chevron-container', category.visible ? 'visible' : '']">
          <ChevronIcon class="chevron" />
        </div>
        <span class="category-title pr-3">{{ category.title }}</span>
        <template v-if="category.badges.length"><Badge v-for="(badge, i) in category.badges" :key="i" :color="badge" /></template>
        <span class="desctiption-text">{{ category.descr }}</span>
        <ActionButtons />
      </div>
    </div>
    <b-collapse :id="`category-${category.id}`" v-model="category.visible" class="category-docs">
      <div>
        <span v-if="!category.docs.length" class="no-content-text">Документов не найдено.</span>
        <DocumentsList :documents="category.docs" :query="q" :dragOptions="dragOptions" @setDocs="updateDocs" />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import DocumentsList from './DocumentsList';
import ActionButtons from './ActionButtons';
import ChevronIcon from '../../assets/icons/chevron'
export default {
  components: {
    ChevronIcon,
    DocumentsList,
    ActionButtons
  },
  emits: ['toggleView'],
  props: {
    category: {
      type: Object,
      required: true
    },
    q: {
      type: String,
      required: true
    },
    dragOptions: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateDocs (newVal) {
      this.category.docs = newVal
    }
  }
}
</script>
