// es5 

    /**
     * 餐厅类
     * @param moeny 金钱
     * @param seatNum 座位数量
     * @param 职员列表
     * @method addOfficeClerk 招聘职员
     * @method removeOfficeClerk 删除某个职员
    */
   function Restaurant (options) {
    this.cash = options.cash;
    this.seats = options.seats;
    this.staff = options.staff
  }
  Restaurant.prototype.addStaff = function (staff) {
    this.staff.push(staff)
  };
  Restaurant.prototype.removeStaff = function (staff) {
    this.staff.forEach((item,index) => {
      if (item == staff) {
        this.staff.splice(index,1)
      }
    })
  }

  
  /**
   * 职员类
   * @param name 姓名
   * @param salary 工资
   * @method finishWork 完成一次工作
   * 
  */
  function Staff (name,salary) {
    this.name = name;
    this.salary = salary;
  }
  Staff.prototype.finishWork = function () {
    console.log('do something')
  }
  /**
   * 服务员类 继承职员类
   * @method 
  */
  function Waiter (name,salary) {
    Staff.call(this,name,salary)
  } 
  Waiter.prototype = new Staff();
  Cook.prototype.constructor = Cook;
  /**
   * 厨师类 继承职员类
  */
  function Cook (name,salary) { 
    Staff.call(this,name,salary)
  }
  Cook.prototype = new Staff();
  Cook.prototype.constructor = Cook;
  
  /**
   * 顾客类
   * @method order 点菜
   * @method eat 吃
  */
  function Customer () {}
  Customer.prototype.order = function () {
    console.log('order')
  }
  Customer.prototype.eat = function () {
    console.log('eat')
  }
  /**
   * 菜品类
   * @param name 菜名
   * @param price 出售价格
   * @param cost 成本价格
  */
  function Dishes (options) {
    this.name = options.name;
    this.price = options.name;
    this.cost = options.cost
  }