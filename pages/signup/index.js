// pages/signup/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      {
        src: '/images/male.png'
      },
      {
        src: '/images/male.png'
      },
      {
        src: '/images/male.png'
      },
      {
        src: '/images/male.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 选图片
  bindChooseImg() {
    const _this = this
    wx.chooseImage({
      count: _this.data.imgList.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        _this.setData({
          imgList: [..._this.data.imgList, ...tempFilePaths]
        })
      }
    })
  },
})