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
    autoplay: false,
    playIndex: 0,
    endPlay: true
  },
  bindended:function (e){
      console.log(e);
      let id = e.currentTarget.id.split('_')[1],
          nextId = (Number(id)+1),
          videoContextNext = wx.createVideoContext('index'+id+'_'+nextId);
          this.setData({
              playIndex: id
          })
          videoContextNext.play();
  },
  videoPlays: function (e) {
      console.log(e);
    var length = this.data.autiplays.length,
        id = e.detail.current,
        nextId = (Number(id)+1),
        previousId = this.data.playIndex,
        prevnnextID = (Number(previousId)+1),
        stopPrveId = '';   
        if(id > previousId){
            // index1_2
            if(previousId <= 1){
                stopPrveId = 0;
            }else{
                stopPrveId = (Number(previousId)-1);
            }
            var videoPrevVide = wx.createVideoContext('index'+stopPrveId+'_'+previousId);
            videoPrevVide.seek(0);
            videoPrevVide.pause();
            videoPrevVide.pause();
            console.log('回滚',videoPrevVide )
        }else{
            
            var videoPrevVide = wx.createVideoContext('index'+previousId+'_'+prevnnextID);
                videoPrevVide.seek(0);
                videoPrevVide.pause();
                videoPrevVide.pause();
                console.log('正常滚',videoPrevVide)
        }
        console.log('正常滚', 'index'+stopPrveId+'_'+previousId)
        console.log('回滚','index'+previousId+'_'+prevnnextID)
        console.log('当前id',previousId,'滚动id',id );
        console.log('当前播放','index'+id+'_'+nextId)
    this.setData({
        playIndex:id
    });
    
    var videoContext = wx.createVideoContext('index'+id+'_'+nextId);
        setTimeout(()=> {
            videoContext.play();
        }, 500)
  },
  loadPlay: function() {
      console.log(11);
    let id = this.data.playIndex,
        nextId = (Number(id)+1);
    var videoContext = wx.createVideoContext('index'+id+'_'+nextId);
        console.log(videoContext)
        videoContext.play();
  },
  onLoad: function () {
    //   setTimeout(()=>{
    //     this.loadPlay();
    //   }, 1000)
  }
})
