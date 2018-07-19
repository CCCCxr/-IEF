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
