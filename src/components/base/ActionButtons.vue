<template>
  <div class="actions" @click.stop.prevent>
    <b-button size="sm" class="edit-btn" variant="flat">
      <PencilIcon />
    </b-button>
    <b-button size="sm" class="remove-btn" variant="flat">
      <TrashIcon />
    </b-button>
    <b-button size="sm" class="drag-btn" variant="flat">
      <MoveIcon />
    </b-button>
  </div>
</template>

<script>
  import MoveIcon from '../../assets/icons/move'
  import PencilIcon from '../../assets/icons/pencil'
  import TrashIcon from '../../assets/icons/trash'
  export default {
    components: { MoveIcon, PencilIcon, TrashIcon }
  }
</script>
