<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger" id="exampleModalLabel">刪除 {{ item.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{ item.title }}</strong> (刪除後將無法恢復)
        </div>
        <div class="modal-footer">
          <button type="button" class="l-btn btn--secondary me-3" data-bs-dismiss="modal">取消</button>
          <button type="button" class="l-btn btn--primary" @click="$emit('del-item')">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    item: {}
  },
  data () {
    return {
      modal: ''
    }
  },
  emits: ['del-item'],
  mixins: [modalMixin]
}
</script>
