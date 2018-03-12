Page({
    data: {
      userInfo: {

      }
    },
    onLoad: function () {
      var that = this;
      wx.getUserInfo({
        success: function(res){
          console.log(that);
            that.setData({
              userInfo:res.rawData
            })
            // that.userInfo = res.rawData;
        }
      })
    }
  })