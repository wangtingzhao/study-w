Page({
    data: {
      logs: []
    },
    onLoad: function () {
      
    },
    open_img: function(){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
        }
      })
    },
    Release: function() {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
           x: '' ,
           y: ''
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          console.log(res.data)
        }
      })
    }
  })