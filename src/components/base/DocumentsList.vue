<template>
  <draggable v-model="filteredDocs" group="docs" v-bind="dragOptions" class="documents-container">
    <DocumentCard v-for="doc in filteredDocs" :doc="doc" :key="doc.id" />
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'
  import DocumentCard from './DocumentCard'
  export default {
    components: {
      draggable,
      DocumentCard
    },
    emits: ['setDocs'],
    props: {
      documents: {
        type: Array,
        required: true
      },
      query: {
        type: String,
        required: true
      },
      dragOptions: {
        type: Object,
        required: true
      }
    },
    computed: {
      filteredDocs: {
        get () {
          if (!this.query.length) return this.documents
          return this.documents.filter(doc => doc.title.toLowerCase().includes(this.query.toLowerCase()))
        },
        set (newVal) {
          if (!this.query.length) this.$emit('setDocs', newVal)
          else {
            const oldData = this.documents.filter(doc => doc.title.toLowerCase().indexOf(this.query.toLowerCase()) === -1)
            this.$emit('setDocs', [...newVal, ...oldData])
          }
        }
      }
    }
  }
</script>
