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
// Testing oit step 3
const Emp3 = new Manager("Ashley", "Marketing", 8 )

console.log(Emp3.describe())