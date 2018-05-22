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
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
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
    autiplays: [
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'}
    ],
    indicatorDots: false,
    autoplay: false,
    circular: false,
    scrollY:true,
    interval: 0,
    duration: 0,
    number: 0,
    video1: false,
    video2: false,
    playIndex: null,
    Accelerometer: ''
  },
  bindchanges:function(e){ 
    var _index = e.detail.current;
    console.log(e);
    console.log(_index);
    this.setData({
      a: _index
    })
    // var data = this.data.imgUrls;
    // data.forEach((e, index) => {
    //   e.numbers = false;
    //   if(index == _index) {
    //     e.numbers = true;
    //   }
    // });
    // this.data.imgUrls = [];
    // this.setData({
    //   imgUrls: data
    // })
    console.log(this.data.imgUrls);
   },
  changeIndicatorDots: function(e) {
    console.log(e);
  },
  videoPlay: function(e) {
    var length = this.data.autiplays.length
    var id = e.currentTarget.id
    console.log(e);
    var that = this
    that.setData({
      playIndex: id
    })
    setTimeout(fnPlay, 500)

    function fnPlay() {
        var videoContext = wx.createVideoContext('index' + that.data.playIndex)
        videoContext.play()
        wx.onCompassChange(function (res) {
          if(Math.floor(res.direction)>290){
            videoContext.requestFullScreen();
          }else{
            videoContext.exitFullScreen();
          }
          console.log(res.direction)
        })
    }
  },
  videoPlays: function (e) {
    console.log(e);
    var length = this.data.autiplays.length
    var id = e.detail.current  
    console.log(this.data.playIndex, id) // 当前播放与当前点击
    if (!this.data.playIndex) { // 没有播放时播放视频
      console.log('没')
      this.setData({
        playIndex: id
      })
      var videoContext = wx.createVideoContext('index'+id)
      videoContext.play()
      wx.onCompassChange(function (res) {
        if(Math.floor(res.direction)>290){
          videoContext.requestFullScreen();
        }else{
          videoContext.exitFullScreen();
        }
        console.log(res.direction)
      })
    } else {   
      console.log('有')                 // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('index' +this.data.playIndex)
      console.log(videoContextPrev);
      videoContextPrev.seek(0)
      videoContextPrev.pause()
      this.setData({
        playIndex: id
      })
      console.log(this.data.playIndex);
      var videoContextCurrent = wx.createVideoContext('index' +this.data.playIndex)
      videoContextCurrent.play()
      wx.onCompassChange(function (res) {
        if(Math.floor(res.direction)>290 || Math.floor(res.direction)<=80 || Math.floor(res.direction)>100 ){
          videoContext.requestFullScreen();
        }else{
          videoContext.exitFullScreen();
        }
        console.log(res.direction)
      })
      console.log(videoContextCurrent.play());
    }
  },
  tabautoPlay:function() {
    this.data.video1 = !this.data.video1;
    this.data.video2 = !this.data.video2;
    console.log('video1', this.data.video1);
    console.log('video2', this.data.video2)
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
