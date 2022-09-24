<template>
  <div>
    <div class="container">
      <div class="header">
        <h1 class="page-title">Документы</h1>
        <div class="controls">
          <b-button variant="flat"><BookmarkIcon /></b-button>
          <b-button variant="flat"><PlusIcon class="pr-1" />Новый тип</b-button>
          <b-button variant="flat"><PlusIcon class="pr-1" />Новый документ</b-button>
        </div>
      </div>
      <div class="search-form">
        <span class="search-icon">
          <SearchIcon />
        </span>
        <input class="search-input" type="text" v-model="query" placeholder="Поиск">
        <b-button v-show="query.length" size="sm" class="clear-button" variant="flat" @click="clearSearch">
          <CloseIcon />
        </b-button>
      </div>
      <draggable v-model="getCategories" v-bind="dragOptions" group="categories" class="categories-list mb-4">
        <div v-for="category in getCategories" :key="category.id">
          <CategoryCard :category="category" :q="query" :dragOptions="dragOptions" @toggleShow="toggleVisibility" />
        </div>
      </draggable>
      <div class="documents-list">
        <DocumentsList :query="query" :dragOptions="dragOptions" @setDocs="updateDocs" :documents="documents" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CategoryCard from '../base/CategoryCard'
import DocumentsList from '../base/DocumentsList'
import BookmarkIcon from '../../assets/icons/bookmark'
import PlusIcon from '../../assets/icons/plus'
import CloseIcon from '../../assets/icons/close'
import SearchIcon from '../../assets/icons/search'
export default {
  components: {
    draggable,
    CategoryCard,
    DocumentsList,
    BookmarkIcon,
    PlusIcon,
    SearchIcon,
    CloseIcon
  },
  data () {
    return {
      query: '',
      categories: [
        {
          id: 1,
          title: 'Обязательные для всех',
          descr: 'Документы, обязательные для всех сотрудников без исключения',
          badges: ['red', 'yellow', 'orange'],
          visible: true,
          docs: [
            {
              id: 11,
              title: 'Паспорт',
              required: true,
              for: 'Для всех',
              badges: ['blue']
            },
            {
              id: 12,
              title: 'ИНН',
              required: true,
              for: 'Для всех',
              badges: []
            },
          ]
        },
        {
          id: 2,
          title: 'Обязательные для трудоустройства',
          descr: 'Документы, без которых невозможно трудоустройства человека на какую бы то ни было должность в компании вне зависимости от гражданства',
          badges: [],
          visible: false,
          docs: []
        },
        {
          id: 3,
          title: 'Специальные',
          descr: '',
          badges: [],
          visible: false,
          docs: []
        },
      ],
      documents: [
        {
          id: 13,
          title: 'Тестовое задание кандидата',
          required: false,
          for: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
          badges: []
        },
        {
          id: 14,
          title: 'Трудовой договор',
          required: false,
          for: '',
          badges: ['blue', 'gray'],
        },
        {
          id: 15,
          title: 'Мед книжка',
          required: false,
          for: '',
          badges: []
        }
      ],
      dragOptions: {
        animation: 400,
        handle: ".drag-btn",
        ghostClass: 'on-drag',
        dragClass: "dragging",
        chosenClass: "chosen-ticket"
      }
    }
  },
  computed: {
    getCategories: {
      get () {
        if (!this.query.length) return this.categories
        const sortedCats = this.categories.filter(cat => cat.title.toLowerCase().includes(this.query.toLowerCase()) || cat.docs.some(doc => doc.title.toLowerCase().includes(this.query.toLowerCase())))
        return sortedCats
      },
      set (newVal) {
        if (!this.query.length) this.categories = newVal
        else {
          const oldData = this.categories.filter(cat => cat.title.toLowerCase().indexOf(this.query.toLowerCase()) === -1)
          this.categories = [...newVal, ...oldData]
        }
      }
    }
  },
  methods: {
    clearSearch () {
      this.query = ''
    },
    toggleVisibility (id) {
      this.categories = this.categories.map(cat => cat.id === id ? { ...cat, visible: !cat.visible } : cat)
    },
    updateDocs (newVal) {
      this.documents = newVal
    }
  }
}
</script>

<style lang="scss" scoped>

</style>