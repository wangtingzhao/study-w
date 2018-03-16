Page({
    data: {
      activeNum: 0,
      imgUrls: [
        'http://lamezhi-bj.oss-cn-beijing.aliyuncs.com/data/files/mall/ad/580.jpg',
        'http://lamezhi-bj.oss-cn-beijing.aliyuncs.com/data/files/mall/ad/434.jpg?1487465169',
        'http://lamezhi-bj.oss-cn-beijing.aliyuncs.com/data/files/mall/ad/381.jpg?1487465169'
      ],
      title_list: [ '今日精选','女装','男装','母婴', '美食','美妆','鞋包','内衣','百货','配饰'],
      cate_list: [
        {"img":"../../image/icon_1.png","title":"销量榜"},
        {"img":"../../image/icon_2.png","title":"聚划算"},
        {"img":"../../image/icon_3.png","title":"边买边看"},
        {"img":"../../image/icon_4.png","title":"海涛精选"},
        {"img":"../../image/icon_5.png","title":"九块九邮"},
        {"img":"../../image/icon_6.png","title":"淘抢购"},
        {"img":"../../image/icon_7.png","title":"金牌卖家"},
        {"img":"../../image/icon_8.png","title":"天猫精选"},
        {"img":"../../image/icon_9.png","title":"商品分类"},
        {"img":"../../image/icon_10.png","title":"品牌优选"}
      ],
      seckill_goods:[
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_127/small_201710081745276500.jpg?17591","goods_name":"卜珂 黄油曲奇饼干 网红爆款","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_52/201711221637321887.jpg?17591","goods_name":"禾畦 永丰红小豆400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_27/201712091043472362.jpg?17591","goods_name":"台式手工牛扎饼干180g 三种口味可选","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_134/201711221445342585.jpg?17591  ","goods_name":"禾畦 绿芯黑豆400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_116/201711221801562445.jpg?17591","goods_name":"禾畦 营养八宝米400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_12/201711281753324644.jpg?17591","goods_name":"华畅 火锅蘸料120g 原味/辣味","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_153/201711221532336880.jpg?17591","goods_name":"禾畦 原生态玉米渣450g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_105/201711301608256730.jpg?17591","goods_name":"华畅 八角大茴香40g 调味炖料","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_123/201712141008431145.jpg?17591","goods_name":"蜜朋 单晶冰糖300g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_149/201712181732297537.jpg?17591","goods_name":"粤盐 精选海盐250g 无碘","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_111/201712251821518322.jpg?17591","goods_name":"华畅 孜然粉35g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_35/small_201707201407156595.jpg?17591","goods_name":"古法四物玫瑰黑糖 15块","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_151/small_201710091112318649.jpg?17591","goods_name":"金稻 超声波充电洁面仪 深层清洁","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_75/small_201710091057556307.jpg?17591","goods_name":"丝话颜语 水嫩光泽面膜组合5片装","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_191/small_201710091103117420.jpg?17591","goods_name":"丝话颜语 海洋红藻保湿蚕丝面膜5片/盒","goods_id":"1","price":'15'}
      ],
      seckill_goods:[
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_127/small_201710081745276500.jpg?17591","goods_name":"卜珂 黄油曲奇饼干 网红爆款","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_52/201711221637321887.jpg?17591","goods_name":"禾畦 永丰红小豆400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_27/201712091043472362.jpg?17591","goods_name":"台式手工牛扎饼干180g 三种口味可选","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_134/201711221445342585.jpg?17591  ","goods_name":"禾畦 绿芯黑豆400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_116/201711221801562445.jpg?17591","goods_name":"禾畦 营养八宝米400g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_12/201711281753324644.jpg?17591","goods_name":"华畅 火锅蘸料120g 原味/辣味","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_153/201711221532336880.jpg?17591","goods_name":"禾畦 原生态玉米渣450g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_105/201711301608256730.jpg?17591","goods_name":"华畅 八角大茴香40g 调味炖料","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_123/201712141008431145.jpg?17591","goods_name":"蜜朋 单晶冰糖300g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_149/201712181732297537.jpg?17591","goods_name":"粤盐 精选海盐250g 无碘","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_111/201712251821518322.jpg?17591","goods_name":"华畅 孜然粉35g","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_35/small_201707201407156595.jpg?17591","goods_name":"古法四物玫瑰黑糖 15块","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_151/small_201710091112318649.jpg?17591","goods_name":"金稻 超声波充电洁面仪 深层清洁","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_75/small_201710091057556307.jpg?17591","goods_name":"丝话颜语 水嫩光泽面膜组合5片装","goods_id":"1","price":'15'},
        {"img":"http://www.lamezhi.com/data/files/store_2/goods_191/small_201710091103117420.jpg?17591","goods_name":"丝话颜语 海洋红藻保湿蚕丝面膜5片/盒","goods_id":"1","price":'15'}
      ]
    },
    onLoad: function () {
      
    },
    box: function() {
        this.setData({
          activeNum:1
        })
        console.log(this.data.activeNum)
    }
  })