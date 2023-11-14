/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
/* Your Code Here */
 /* const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable 
} */



    function createEmployeeRecord(employee) {
        return {
          firstName: employee[0],
          familyName: employee[1],
          title: employee[2],
          payPerHour: employee[3],
          timeInEvents: [],
          timeOutEvents: []
        };
      }
      function createEmployeeRecords(employees) {
        return employees.map(createEmployeeRecord);
      }

      function createTimeOutEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ')
        this.timeOutEvents.push({
          type: "TimeOut",
          hour: parseInt(hour, 10),
          date: date
        })
        return this
      }
      function createTimeInEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ')
        this.timeInEvents.push({
          type: "TimeIn",
          hour: parseInt(hour, 10),
          date: date
        })
        return this
      }
      function hoursWorkedOnDate(date) {
        const timeInEvent = this.timeInEvents.find(event => event.date === date);
        const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
        return (timeOutEvent.hour - timeInEvent.hour) / 100;
      }
      function wagesEarnedOnDate(date) {
        let hours = hoursWorkedOnDate.call(this, date)
        let pay = hours * this.payPerHour
        return pay
      }
      
      
      function findEmployeeByFirstName(arr, firstName) {
        return arr.find(function(employee) {
          return employee.firstName === firstName
        })
      }
      function allWagesFor() {
        let eligibleDates = this.timeInEvents.map(function(e) {
          return e.date
        })
      
        let payable = eligibleDates.reduce(function(memo, d) {
          return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0)
      
        return payable
      }
      function calculatePayroll(employeeRecords) {
        let payable = employeeRecords.reduce(function(memo, record) {
          return memo + allWagesFor.call(record)
        }, 0)
      
        return payable
      }
      
      