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
    direction: 90
  },
  bindended: function(e) {
    console.log(e);
    var id = e.currentTarget.id.split('_')[1]
    this.setData({
      playIndex: id
    })
    console.log(id);
    setTimeout(() => {
      this.fnPlay(id)
    }, 500)
  },
  videoPlay: function(e) {
    var length = this.data.autiplays.length
    var id = e.currentTarget.id
    var that = this
    that.setData({
      playIndex: id
    })
    setTimeout(() => {
      this.fnPlay(id)
    }, 500)
  },
  fnPlay:function (id) {
    var prveId = Number(id)+1;
    console.log(prveId)
    var videoContext = wx.createVideoContext('index'+id+'_'+prveId)
    console.log('play', videoContext)
    videoContext.play()
    wx.onCompassChange(function (res) {
      if(Math.floor(res.direction)>270){
          console.log('_______________开启全屏___________');
        videoContext.requestFullScreen();
      }else{
        console.log('_______________关闭全屏___________');
        videoContext.exitFullScreen();

      }
      console.log(res.direction)
    })
  },
  onLoad: function () {
  }
})
