//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    a: 0,
    imgUrls: [
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:true,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/e3/ec/dff1-c5b9-11e7-86e0-00163e02acff'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/ab/fd/de08-7cba-11e7-ab70-00163e05e6f5'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/e4/79/67a0-c5b9-11e7-86e0-00163e02acff'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/e3/ec/dff1-c5b9-11e7-86e0-00163e02acff'}

    ],
    imgUrls1: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    circular: false,
    interval: 0,
    duration: 0,
    number: 0
  },
  bindchanges:function(e){ 
    var _index = e.detail.current;
    console.log(e);
    console.log(_index);
    this.setData({
      a: _index
    })
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
