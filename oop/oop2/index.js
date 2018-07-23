/**
 * 单例模式的定义是：保证一个类仅有一个一个实例，并提供一个访问它的全局访问点。
 * 要实现一个单例模式，一个经典的方式是创建一个类，类中又一个方法能创建该类的实例对象，
 * 还有一个标记，记录是否已经创了过了实例对象。如果对象已经存在，就返回第一次实例化对象的引用。
 */

/**
 * 餐厅类
 * @param cash 金钱
 * @param seats 座位数量
 * @param staff 职员列表
 * @method addOfficeClerk 招聘职员
 * @method removeOfficeClerk 删除某个职员
 */
class Restaurant {
  constructor (options) {
    this.cash = options.cash;
    this.seats = options.seats;
    this.staff = options.staff;
    this.instance = null;
  }
  addStaff (staff) {
    this.staff.push(staff)
  }
  removeStaff(staff) {
    this.staff.forEach((item,index) => {
      if (item == staff) {
        this.staff.splice(index,1)
      }
    })
  }
  // 利用闭包来创建单例，也符合懒加载的特性
  getInstance  (function(options) {
    let instance = null;
    return function (options) {
      if (!instance) {
        instance = new Restaurant(options)
      }
    }
  })();
}
let ifeRestaurant1 = Restaurant.getInstance({
  cash:1000000,
  seats: 20,
  staff:[]
})

let ifeRestaurant2 = Restaurant.getInstance({
  cash:1000000,
  seats: 20,
  staff:[]
})
console.log(ifeRestaurant1 == ifeRestaurant2)