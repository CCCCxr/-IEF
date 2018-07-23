/**
 * 单例模式的定义是：保证一个类仅有一个一个实例，并提供一个访问它的全局访问点。
 * 要实现一个单例模式，一个经典的方式是创建一个类，类中又一个方法能创建该类的实例对象，
 * 还有一个标记，记录是否已经创了过了实例对象。如果对象已经存在，就返回第一次实例化对象的引用。
 */

/**
* 餐厅类
* @param moeny 金钱
* @param seatNum 座位数量
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
  // 单例
  static getInstance (options) {
    if (!this.instance) {
      this.instance = new Restaurant(options)
    }
  }
}
/**
 * 职员类
 * @param name 姓名
 * @param salary 工资
 * @method finishWork 完成一次工作
 * 
*/
class Staff {
  constructor (name,salary) {
    this.name = name;
    this.salary = salary;
  }
  finishWork () {
    console.log('do something')
  }
}
/**
* 服务员类 继承职员类
*/
class Waiter extends Staff {
  constructor (name,salary) {
    super (name,salary)
  }
}
/**
 * 厨师类 继承职员类
*/
class Cook extends Staff {
  constructor (name,salary) {
    super (name,salary)
  }
}
/**
 * 顾客类
 * @method order 点菜
 * @method eat 吃
*/
class Customer {
  constructor () {

  }
  order () {
    console.log('order')
  }
  eat () {
    console.log('eat')
  }
}

/**
* 菜品类
* @param name 菜名
* @param price 出售价格
* @param cost 成本价格
*/
class Dishes {
  constructor (options) {
    this.name = options.name;
    this.price = options.price;
    this.cost = options.cost
  }
}
