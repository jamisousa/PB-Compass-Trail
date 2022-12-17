/*
working with classes

*/

abstract class Department{
    // name: string;
    // private id:number;
    protected employees: string[] = [];
    
    constructor(protected readonly id:number, public name:string){
        
    }
    
    abstract describe(this:Department): void;
    
    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(name:string){
        return{name:name};
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor(id:number, admins:string[]){
        super(id,'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`Department (${this.name}): ](${this.id})`);
    }
}

class AccountingDepartment extends Department{

    private lastReport:string;
    private static instance: AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please add a valid report.');
        }
        this.addReport(value);
    }

    private constructor(id:number, private reports:string[]){
        super(id,'ACC');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }

        this.instance = new AccountingDepartment(2,[]);
        return this.instance;
    }

    addEmployee(name:string){
        if(name==='Jam'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports(){
        console.log(this.reports);
    }

    describe() {
        console.log(`Accounting ID: (${this.id})`);
    }
}

const employee1 = Department.createEmployee('Jamsss');
console.log(employee1);


const it = new ITDepartment(1,['Jams']);

// const accounting = new AccountingDepartment(2,[]);
const accounting = AccountingDepartment.getInstance();


accounting.addReport('Report one...');
accounting.addEmployee('Jamss');
accounting.printEmployeeInfo();
accounting.mostRecentReport = 'Report two...';
//console.log(accounting.mostRecentReport);
accounting.printReports();
//const accountingCopy = {describe: accounting.describe};
//accountingCopy.describe();

accounting.describe();