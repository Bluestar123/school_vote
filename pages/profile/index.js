// pages/profile/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridList: [
      {
        num: 608,
        text: '编号'
      },
      {
        num: 608,
        text: '投票'
      },
      {
        num: 608,
        text: '热度'
      },
    ],
    swiperList: [
      {
        src:'http://pic.5tu.cn/uploads/allimg/1911/pic_5tu_big_201911122201021011.jpg',
        height: 0
      },{
        src: 'https://img95.699pic.com/photo/40011/0709.jpg_wh860.jpg',
        height: 0
      },{
        src: 'https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg',
        height: 0    
      }
    ],
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  
imageLoad: function (e) {//获取图片真实宽度  
    const width = wx.getSystemInfoSync().windowWidth
    const index = e.currentTarget.dataset.index
    const imgheight = e.detail.height
    const imgWidth = e.detail.width
    const {swiperList, current} = this.data
    //把每一张图片的对应的高度记录到数组里  
    swiperList[index].height = width * imgheight / imgWidth;
    this.setData({
      swiperList
    })
  },
  bindchange: function (e) {
    this.setData({ 
        current: e.detail.current
    })
  },
  // 打赏
  bindReward() {
    wx.navigateTo({
      url: '/pages/reward/index',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})