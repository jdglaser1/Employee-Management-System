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
const Emp1 = new Employee("Josh", "Analyst")
const Emp2 = new Employee("Jane", "Accounting")
// Testing out step 2
console.log(Emp1.describe())
