Page({
    data: {
      num: 0,
      data:'【我剁手都要买的宝贝（【直营】BBIA 丝绒哑光雾面口红/唇膏），快来和我一起瓜分红I包】http://m.tb.cn/h.WFI2a6d 点击链接，再选择浏览器打开；或复制这条信息￥GaAz0pk6IZd￥后打开手淘'
    },
    onLoad: function () {
      console.log(this.data)
    },
    tabaja: function(num){
      if(num == 0){
        
      }else if(num == 1){

      }else if(num == 2){

      }else if(num == 3){

      }else{
        
      }
    },
    fz: function() {
      wx.setClipboardData({
        data: this.data.data,
        success: function(res) {
          wx.getClipboardData({
            success: function(res) {
              console.log(res.data) // data
            }
          })
        }
      })
    }
  })