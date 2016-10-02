//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 轩辕',
    userInfo: {},
    btnText:'showHello',
    showHello:true,
    items:[1,2,3]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btnClick:function(){
    console.log('按钮被点击了');
    this.setData({
      showHello:!this.data.showHello
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
