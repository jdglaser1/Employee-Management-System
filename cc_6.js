// Step 2 creating the class
class Employee{
    constructor(name,department){
        this.name = name
        this.department = department
    }
    // Adding a method that returns the string about the employee
    describe(){
        console.log(`${this.name} works in ${this.department}`)
    }


}


// Step 3 creating a subclass for manager
class Manager extends Employee{
    constructor (name,department,teamSize){
        super(name,department)
        this.teamSize = teamSize
    }
// This part describes the manager's role inheriting the name and department and adding the teamSize
    describe(){
        return `${this.name} is the manager of the ${this.department}. They oversee ${this.teamSize} people.`
    }
}
// Step 4 creating a few sample employees and managers
const Emp1 = new Employee("Josh", "Analyst")
const Emp2 = new Employee("Jane", "Accounting")
const Emp3 = new Employee("Zach", "Sales")
const Emp4 = new Manager("Ashley", "Marketing", 8 )
const Emp5 = new Manager("Eric", "Sales", 30)

// Step 5. creating a class called company with employees as an array

class Company{
    constructor() {
        this.employees = []
    }
    //This part adds the employee to the array
    addEmployee(employee){
        this.employees.push(employee)
    }
    //this part logs the employee description
    listEmployees(){
       this.employees.forEach(employee => {
        console.log(employee.describe())
       })

    }
}

