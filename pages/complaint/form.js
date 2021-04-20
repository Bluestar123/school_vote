// pages/complaint/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaVal: '',
    imgList: [],
    concat: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },
  // 输入投诉内容
  bindinput(e) {
    this.setData({
      textareaVal: e.detail.value
    })
  },
  // 选图片
  bindChooseImg() {
    const _this = this
    wx.chooseImage({
      count: 4 - _this.data.imgList.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(res)
        _this.setData({
          imgList: [..._this.data.imgList, ...tempFilePaths]
        })
      }
    })
  },
  // 勾选
  bindRadio() {
    this.setData({
      checked: !this.data.checked
    })
  },
  // 提交
  bindSubmit() {

  }
})