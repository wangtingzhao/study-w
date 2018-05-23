//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autiplays: [
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'},
      {imgurl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7a/d8/6164-b8b9-11e7-a638-00163e064d23'},
      {imgurl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',numbers:false,url:'http://qnvideo.ixiaochuan.cn/zyvd/7d/81/5461-b8b9-11e7-ae41-00163e056771'}
    ],
    playIndex: null,
  },
  bindended: function(e){
    wx.stopCompass({
        success: function (res) {
            console.log(res)
        }
    })
      let id = e.currentTarget.id.split(' ')[1]
      this.setData({
          playIndex: id
      })
      var videoContext = wx.createVideoContext('index'+id)
      videoContext.play()
  },
  videoPlays: function (e) {
    console.log(e);
    var length = this.data.autiplays.length
    var id = e.currentTarget.id
    console.log(this.data.playIndex, id) // 当前播放与当前点击
    function fnPlay(v) {
        console.log(v)
        v.play()
        // wx.onCompassChange(function (res) {
        //   if(Math.floor(res.direction)>270){
        //       console.log('_______________开启全屏___________');
        //       v.requestFullScreen();
        //   }else{
        //     console.log('_______________关闭全屏___________');
        //     v.exitFullScreen();
        //   }
        //   console.log(res.direction)
        // })
    }
    if (!this.data.playIndex) { // 没有播放时播放视频
      this.setData({
        playIndex: id
      })
      var videoContext = wx.createVideoContext('index'+id)
      setTimeout(() => {
        fnPlay(videoContext)
      }, 5000)
      
    } else {            // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('index' +this.data.playIndex)
      videoContextPrev.seek(0)
      videoContextPrev.pause()
      this.setData({
        playIndex: id
      })
      var videoContextCurrent = wx.createVideoContext('index' +this.data.playIndex)
      setTimeout(() => {
        fnPlay(videoContextCurrent)
      }, 5000)
    }
  },
  onLoad: function () {
    wx.startCompass({
        success:function(res){
            console.log(res);
        }
    })
  }
})
