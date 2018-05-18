// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    object:{
      date:"Jan 28 2018"
        },
      title:"小时候的冰棍儿与雪糕",
      postImg:"/images/post/bjl.jpg",
      avatar:"/images/avatar/touxiang.jpg",
      content:" 冰棍儿与雪糕绝对不是一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，...",
      readingNum:92,
      collectionNum:{
        array:[108]
        },
      conmmentNum:7
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postList = [{
      object: {
        date: "Jan 28 2018"
      },
      title: "小时候的冰棍儿与雪糕",
      postImg: "/images/post/bjl.jpg",
      avatar: "/images/avatar/touxiang.jpg",
      content: " 冰棍儿与雪糕绝对不是一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，...",
      readingNum: 92,
      collectionNum: {
        array: [108]
      },
      conmmentNum: 7
    },
    {
      object: {
        date: "Jan 9 2018"
      },
      title: "你从未了解过的宇宙",
      postImg: "/images/post/yuzhou.jpg",
      avatar: "/images/avatar/touxiang2.jpg",
      content: " 宇宙是广袤空间和其中存在的各种天体以及弥漫物质的总称。宇宙起源是一个极其复杂的问题。 宇宙是物质世界，它处于不断的运动和发展中。千百年来，科学家们一直在探寻宇宙是什么时候、如何形成的。直到今天，许多科学家认为，宇宙是由大约137亿年前发生的一次大爆炸形成的...",
      readingNum: 92,
      collectionNum: {
        array: [108]
      },
      conmmentNum: 7
    },
    {
      object: {
        date: "Jan 26 2018"
      },
      title: "大家都喜欢的跑车",
      postImg: "/images/post/paoche.jpg",
      avatar: "/images/avatar/touxiang3.jpg",
      content: " 跑车的英文名是SportsCar或SportyCar，属于一种低底盘、线条流畅、动力突出的汽车类型，其最大特点是不断追求速度极限。跑车的分类有很多种，按车身结构可分为轿跑、敞篷跑车、双门跑车，按价值可分为平民跑车、超级跑车...",
      readingNum: 92,
      collectionNum: {
        array: [108]
      },
      conmmentNum: 7
    }];
   this.setData({
     postList:postList
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready:页面被渲染')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow:页面被显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide:页面被隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享');
  }
})