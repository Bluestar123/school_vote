// components/top-rank.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      default: []
    },
    hideVote: {
      type: Boolean,
      default: false
    },
    cls: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindTapItem(e) {
      this.triggerEvent('bindTapTopRankItem')
    }
  }
})
