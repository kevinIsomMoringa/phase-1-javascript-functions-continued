// code your solution here
function saturdayFun(funActivity="roller-skate") {
    return `This Saturday, I want to ${funActivity}!`
};

const mondayWork = function (mondayActivity="go to the office") {
    return `This Monday, I will ${mondayActivity}.`
};

function wrapAdjective(param1='*') {
    const innerFunction = function (innerParam="special") {
        return `You are ${param1}${innerParam}${param1}!` 
    }
    return innerFunction
}
// console.log(saturdayFun('go party'))
// console.log(saturdayFun())
// console.log(mondayWork('go to Moringa school'))
// console.log(mondayWork())
console.log(wrapAdjective()())



// const array = (function (thingToAdd) {
//     const base = 3;
//     return [
//       function () {
//         return base + thingToAdd;
//       },
//       function () {
//         return base;
//       },
//     ];
//   })(2);
