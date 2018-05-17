//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'blob:http://player.youku.com/903aeec7-6a1e-4d43-af44-e310396b8510',
      'blob:http://player.youku.com/903aeec7-6a1e-4d43-af44-e310396b8510',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'blob:http://player.youku.com/903aeec7-6a1e-4d43-af44-e310396b8510',
      'blob:http://player.youku.com/903aeec7-6a1e-4d43-af44-e310396b8510'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 0,
    duration: 0,
    number: 0
  },
  bindchanges:function(e){ 
      console.log(e);
   },
  changeIndicatorDots: function(e) {
    console.log(e);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
