// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: 0,
    UsersList: ["zhangsan", "lisi", "wangwu", "maliu", "zhaoqi", "qianba"]
  },

  // 跳转到发布笔记页或者授权登录页
  onEditTap() {
    if (false) {
      wx.navigateTo({
        url: "/pages/topic-edit/topic-edit"
      })
    } else {
      wx.navigateTo({
        url: "/pages/auth/auth"
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showToast({
        title:'刷新中....',
        icon:'loading'
    });
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  this.setData({
    pages: pages+1,
  })
  if (this.data.pages % 2 === 0) {
      wx.showToast({
        title:'加载中....',
        icon:'loading'
    });
  } else {
    wx.showToast({
      title: '加载完毕...',
      icon: "error"
    })
  }
  },

  userpage: function() {
    wx.navigateTo({
      url: '../userPage/userPage',
    })
  },

  bindItemTap: function() {
    wx.navigateTo({
      url: '../Details/Details'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})


