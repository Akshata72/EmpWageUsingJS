//UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work 
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
//Math.random() provides a random number from 0,1 ) 
let empCheck = Math.floor(Math.random() * 3) ;
switch (empCheck) {
    case IS_ABSENT:
        
        empHrs = 0;
        break;
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS; //const PART_TIME_HOURS = 4;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS; //const PART_TIME_HOURS = 8;
        break;
    default:
        break;
}

let empWage = empHrs * WAGE_PER_HOUR; //const WAGE_PER_HOUR = 20;
console.log("Emp Wage: " + empWage);


//UC3 Get Working Hours
console.log("Emp Hours: " +empHrs);
//UC4 -  Calculating  Wages for a month assuming 20 working days in amonth
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//Functions are a great way to reuse code.
// function for  getworkinghours( parameter)
function GetWorkingHours(empCheck){
switch (empCheck) {
    case IS_ABSENT:   //0    
       return 0; // 0
        break;
    case IS_PART_TIME: //1
        return PART_TIME_HOURS; //const PART_TIME_HOURS = 4;
        break;
    case IS_FULL_TIME: //2
        return FULL_TIME_HOURS; //const PART_TIME_HOURS = 8;
        break;
    default:
        return  null; //null 'no value' or nonexistence of any value
}
}
//UC4 -  Calculating  Wages for a month assuming 20 working days in amonth
let empHrs = 0;
const WORKING_DAYS_IN_A_MONTH = 20;
for (let days = 1; days <= WORKING_DAYS_IN_A_MONTH; days++) {
//Math.random() provides a random number from 0,1,2 ) 
let empCheck = Math.floor(Math.random() * 3) ;
    empHrs += GetWorkingHours(empCheck);  // empHrs=empHrs+ empCheck random value
}
//calculate empWage
let empWage = empHrs * WAGE_PER_HOUR;
//oP
console.log("Total Hours: " + empHrs + "\nTotal Wage: " + empWage);