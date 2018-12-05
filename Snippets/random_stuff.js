





// Another layer of information is added to this object
var infoMatrix = {
  programmingAptitude : {
    goodAtLogic : false,
    loveComputers : true
  },
  interestInWeb: false
};

// Nested if-else block added
function should_i_learn_js(infoMatrix) {
  // The initial decision on whether to learn JavaScript or not!
  var focusOnJavaScript = null;
  // The following if-else block determines whether you should learn JavaScript 
  if (infoMatrix.programmingAptitude.loveComputers == true) {
    if (infoMatrix.programmingAptitude.goodAtLogic == true) {
      focusOnJavaScript = "Yes";
    }
    else {
      focusOnJavaScript = "May be!"
    }
  }
  else {
    focusOnJavaScript = "No";
  }
  return focusOnJavaScript;
};

// Call the function
should_i_learn_js(infoMatrix);


