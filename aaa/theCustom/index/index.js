var dataObj = require("../../js/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['全部','1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
    array1: ['全部','男', '女'],
    array2: ['全部','1.68m-1.70m', '1.71m-1.75m', '1.76m-1.80m'],
    array3: ['全部','华南', '黑龙江', '哈尔滨'],
    array4: ['全部','华南', '黑龙江', '哈尔滨'],
    index: 0,
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    newData:[],
    standbyData:[],
  },
  bindPickerChange: function (e) {
    function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    };
    var temporaryData = [];
    var temporaryData1 = [];
    var keyword = this.data.array[e.detail.value];
    var keyword1 = this.data.array2[this.data.index2];
    var keyword2 = this.data.array1[this.data.index1];
    var keyword3 = this.data.array3[this.data.index3];
    var keyword4 = this.data.array4[this.data.index4];

    var len = this.data.standbyData.length;
    var data = this.data.standbyData
      function cl(){
        var temporaryData = [];
        for (var n = 0; n < len; n++) {
          if (IsInArray(data[n].age, keyword)) {
            temporaryData.push(data[n]);
          }
        };
        temporaryData1 = Array.from(new Set(temporaryData));
      };
      cl();

      var len1 = temporaryData1.length;
      function cl1() {
        var temporaryData = [];
        for (var n = 0; n < len1; n++) {
          if (IsInArray(temporaryData1[n].height, keyword1)) {
            temporaryData.push(temporaryData1[n]);
          }
        };
        temporaryData1 = Array.from(new Set(temporaryData));
      };
      cl1();
    var len2 = temporaryData1.length;
      function cl2() {
        var temporaryData = [];
        for (var n = 0; n < len2; n++) {
          if (IsInArray(temporaryData1[n].sex, keyword2)) {
            temporaryData.push(temporaryData1[n]);
          }
        };
        temporaryData1 = Array.from(new Set(temporaryData));
      };
      cl2();
      var temporaryData2 = temporaryData1;
      var len3 = temporaryData1.length;
      function cl3() {
        var temporaryData = [];
        for (var n = 0; n < len3; n++) {
          if (IsInArray(temporaryData2[n].region, keyword3)) {
            temporaryData.push(temporaryData2[n]);
          } else if (IsInArray(temporaryData2[n].intention, keyword4))
            temporaryData.push(temporaryData2[n]);
        };
        temporaryData1 = Array.from(new Set(temporaryData));
      };
      cl3();
    this.setData({
      index: e.detail.value,
      listData: temporaryData1,
    })
  },
  bindPickerChange1: function (e) {
    function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    };
    var temporaryData = [];
    var temporaryData1 = [];
    var keyword = this.data.array[this.data.index];
    var keyword1 = this.data.array2[this.data.index2];
    var keyword2 = this.data.array1[e.detail.value];
    var keyword3 = this.data.array3[this.data.index3];
    var keyword4 = this.data.array4[this.data.index4];

    var len = this.data.standbyData.length;
    var data = this.data.standbyData
    function cl() {
      var temporaryData = [];
      for (var n = 0; n < len; n++) {
        if (IsInArray(data[n].sex, keyword2)) {
          temporaryData.push(data[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl();
    var len1 = temporaryData1.length;
    function cl1() {
      var temporaryData = [];
      for (var n = 0; n < len1; n++) {
        if (IsInArray(temporaryData1[n].height, keyword1)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl1();
    var len2 = temporaryData1.length;
    function cl2() {
      var temporaryData = [];
      for (var n = 0; n < len2; n++) {
        if (IsInArray(temporaryData1[n].age, keyword)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl2();
    var temporaryData2 = temporaryData1;
    var len3 = temporaryData1.length;
    function cl3() {
      var temporaryData = [];
      for (var n = 0; n < len3; n++) {
        if (IsInArray(temporaryData2[n].region, keyword3)) {
          temporaryData.push(temporaryData2[n]);
        } else if (IsInArray(temporaryData2[n].intention, keyword4))
          temporaryData.push(temporaryData2[n]);
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl3();
    this.setData({
      index1: e.detail.value,
      listData: temporaryData1,
    })
  },
  bindPickerChange2: function (e) {
    function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    };
    var temporaryData = [];
    var temporaryData1 = [];
    var keyword = this.data.array[this.data.index];
    var keyword1 = this.data.array2[e.detail.value];
    var keyword2 = this.data.array1[this.data.index1];
    var keyword3 = this.data.array3[this.data.index3];
    var keyword4 = this.data.array4[this.data.index4];

    var len = this.data.standbyData.length;
    var data = this.data.standbyData
    function cl() {
      var temporaryData = [];
      for (var n = 0; n < len; n++) {
        if (IsInArray(data[n].height, keyword1)) {
          temporaryData.push(data[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl();

    var len1 = temporaryData1.length;
    function cl1() {
      var temporaryData = [];
      for (var n = 0; n < len1; n++) {
        if (IsInArray(temporaryData1[n].age, keyword)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl1();
    var len2 = temporaryData1.length;
    function cl2() {
      var temporaryData = [];
      for (var n = 0; n < len2; n++) {
        if (IsInArray(temporaryData1[n].sex, keyword2)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl2();
    var temporaryData2 = temporaryData1;
    var len3 = temporaryData1.length;
    function cl3() {
      var temporaryData = [];
      for (var n = 0; n < len3; n++) {
        if (IsInArray(temporaryData2[n].region, keyword3)) {
          temporaryData.push(temporaryData2[n]);
        } else if (IsInArray(temporaryData2[n].intention, keyword4))
          temporaryData.push(temporaryData2[n]);
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl3();
    this.setData({
      index2: e.detail.value,
      listData: temporaryData1,
    })
  },
  bindPickerChange3: function (e) {
    function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    };
    var temporaryData = [];
    var temporaryData1 = [];
    var keyword = this.data.array[this.data.index];
    var keyword1 = this.data.array2[this.data.index2];
    var keyword2 = this.data.array1[this.data.index1];
    var keyword3 = this.data.array3[e.detail.value];
    var keyword4 = this.data.array4[this.data.index4];

    var len = this.data.standbyData.length;
    var data = this.data.standbyData
    function cl() {
      var temporaryData = [];
      for (var n = 0; n < len; n++) {
        if (IsInArray(data[n].age, keyword)) {
          temporaryData.push(data[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl();
    var len1 = temporaryData1.length;
    function cl1() {
      var temporaryData = [];
      for (var n = 0; n < len1; n++) {
        if (IsInArray(temporaryData1[n].height, keyword1)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl1();
    var len2 = temporaryData1.length;
    function cl2() {
      var temporaryData = [];
      for (var n = 0; n < len2; n++) {
        if (IsInArray(temporaryData1[n].sex, keyword2)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl2();
    var temporaryData2 = temporaryData1;
    var len3 = temporaryData1.length;
    function cl3() {
      var temporaryData = [];
      for (var n = 0; n < len3; n++) {
        if (IsInArray(temporaryData2[n].region, keyword3)) {
          temporaryData.push(temporaryData2[n]);
        } else if (IsInArray(temporaryData2[n].intention, keyword4))
          temporaryData.push(temporaryData2[n]);
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl3();
    this.setData({
      index3: e.detail.value,
      listData: temporaryData1,
    })
  },
  bindPickerChange4: function (e) {
    function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    };
    var temporaryData = [];
    var temporaryData1 = [];
    var keyword = this.data.array[this.data.index];
    var keyword1 = this.data.array2[this.data.index2];
    var keyword2 = this.data.array1[this.data.index1];
    var keyword3 = this.data.array3[this.data.index3];
    var keyword4 = this.data.array4[e.detail.value];

    var len = this.data.standbyData.length;
    var data = this.data.standbyData
    function cl() {
      var temporaryData = [];
      for (var n = 0; n < len; n++) {
        if (IsInArray(data[n].age, keyword)) {
          temporaryData.push(data[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl();
    var len1 = temporaryData1.length;
    function cl1() {
      var temporaryData = [];
      for (var n = 0; n < len1; n++) {
        if (IsInArray(temporaryData1[n].height, keyword1)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl1();
    var len2 = temporaryData1.length;
    function cl2() {
      var temporaryData = [];
      for (var n = 0; n < len2; n++) {
        if (IsInArray(temporaryData1[n].sex, keyword2)) {
          temporaryData.push(temporaryData1[n]);
        }
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl2();
    var temporaryData2 = temporaryData1;
    var len3 = temporaryData1.length;
    function cl3() {
      var temporaryData = [];
      for (var n = 0; n < len3; n++) {
        if (IsInArray(temporaryData2[n].region, keyword3)) {
          temporaryData.push(temporaryData2[n]);
        } else if (IsInArray(temporaryData2[n].intention, keyword4))
          temporaryData.push(temporaryData2[n]);
      };
      temporaryData1 = Array.from(new Set(temporaryData));
    };
    cl3();
    this.setData({
      index4: e.detail.value,
      listData: temporaryData1,
    })
  },
  onJump:function(e){
    var postId = e.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "/theCustom/two/two?id="+postId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
    listData: dataObj.listData,
    standbyData: dataObj.listData,
    });
    // console.log(this.data.newlistData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
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
  
  }
})