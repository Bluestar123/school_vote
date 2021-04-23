// pages/reward/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridList: [
      {
        num: 601,
        text: '已报名'
      },
      {
        num: 23334,
        text: '累计人数'
      },
      {
        num: 121601,
        text: '访问量'
      },
    ],
    list: new Array(10).fill({
      src:'/images/flower.png',
      money: 123,
      description: '可抵五票'
    }),
    rewardList: [],
    count: 2,
    totalMoney: '10.00',
    current: 0,
    activeIndex: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {length} = this.data.list
    const page = Math.ceil(length / 9)
    const rewardList = []
    for (let i=0;i<page;i++) {
      let obj = {}
      obj.list = this.data.list.slice(i * 9, i*9+9)
      rewardList.push(obj)
    }
    this.setData({
      rewardList
    })
  },

  increase() {
    this.setData({
      count: ++this.data.count
    })
  },
  decrease() {
    this.setData({
      count: --this.data.count
    })
  },

  bindchangeSwiper(e) {
    this.setData({
      activeIndex: null,
      current: e.detail.current
    })
  },

  bindClickItem(e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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