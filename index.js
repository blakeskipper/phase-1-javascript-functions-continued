// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

// +This Saturday, I want to roller-skate!

// +This Saturday, I want to bathe my dog!







// +This Monday, I will go to the office.
// +This Monday, I will work from home.



