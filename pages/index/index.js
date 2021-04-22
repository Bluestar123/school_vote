// index.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    audioInstance: null,
    audioOn: false,// 旋转
    adimg: 'https://up.enterdesk.com/edpic_360_360/27/8f/93/278f938be4b460a57962d542eee989f6.jpg',
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
    ranklist: Array(12).fill({
      name: '456',
      avatar: 'https://up.enterdesk.com/edpic_360_360/27/8f/93/278f938be4b460a57962d542eee989f6.jpg',
      popularity: 111111111
    }),
    topRankList: [],
    nowTime: new Date().getTime(), //获取当前日期
    endTime: 1690990399000,//结束日期时间戳
    remainTime: null,
    countDownTxt:null,
    inputVal: ''
  },
  onLoad() {
    this.setData({
      topRankList: this.data.ranklist.slice(0, 3)
    })

    // 倒计时时间
    this.setData({
      remainTime: this.data.endTime - this.data.nowTime
    }, () => {
      util.countDown(this);
    })

    this._initAudio()
  },

  onShow() {
    
  },
  // 获取滚动条当前位置
  onPageScroll: function(e) {
    let isTop = e.scrollTop > 100;
    this.setData({
      floorstatus: isTop ? true : false
    });
  },
  // 排名列表搜索
  bindinput(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 回到顶部
  goTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  
  // 初始化音频
  _initAudio() {
    // 获取音频实例
    const audioInstance = wx.createInnerAudioContext()
    audioInstance.loop = true
    this.data.audioInstance = audioInstance
  },
  // 音频播放
  bindAudioAction() {
    const { audioInstance, audioOn } = this.data
    this.setData({
      audioOn: !audioOn
    }, () => {
      if (audioOn) {
        audioInstance.pause()
      } else {
        audioInstance.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'
        audioInstance.play()
      }
    })
  },
  // 跳转个人主页
  bindTapTopRankItem() {
    console.log(555555)
    wx.navigateTo({
      url: '/pages/profile/index',
    })
  },
  bindJoin() {
    wx.navigateTo({
      url: '/pages/signup/index',
    })
  }
})
