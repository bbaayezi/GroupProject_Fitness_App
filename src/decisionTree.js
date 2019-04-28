const tree = {
  withStepsRecommendation(height, weight, age, steps) {
    if(height == 0 || weight == 0) {
      return "Invalid info! Please check your input";
    }
    let indoorLow = ["push-up", "cruches", "weightlifting"];
    let indoorHigh = ["aerobics", "mat tumbling", "burpees"];
    let outdoorLow = ["skating", "riding", "walking"];
    let outdoorHigh = ["hiking", "swimming", "playing basketball"];
    // convert height to M
    height = height / 100;
    let BMI = weight / (height * height);
    if (age > 18 && age < 35) {
      //adult average steps
      if (steps > 12000) {
        if (BMI > 28) {
          //do indoor high intensity exercise
          //做高强度运动，游泳，室内跑步机跑步，平板支撑，哑铃操
          return "Why not try " + indoorHigh[Math.floor(Math.random()*3)] + "?";
        } else {
          //do indoor low intensity exercise
          //做室内低强度运动，仰卧起坐，俯卧撑，举重
          return "Why not try " + indoorLow[Math.floor(Math.random()*3)] + "?";
        }
      } else {
        if (BMI > 28) {
          //do outdoor high intensity exercise
          //室外高强度运动，爬岩，远足，打篮球。。。
          return "Why not try " + outdoorHigh[Math.floor(Math.random()*3)] + "?";
        } else {
          //do outdoor low intensity exercise
          //滑板，自行车。。。
          return "Why not try " + outdoorLow[Math.floor(Math.random()*3)] + "?";
        }
      }
    } else {
      if (steps < 12000 && steps > 8000) {
        //do indoor low intensity exercise
        //做室外低强度运动
        return "Why not try " + outdoorLow[Math.floor(Math.random()*3)] + "?";
      } else {
        //do indoor low intensity exercise
        //做室内低强度运动
        return "Why not try " + indoorLow[Math.floor(Math.random()*3)] + "?";
      }
    }
  },
  withoutStepsRecommendation(height, weight, age) {
    if(height == 0 || weight == 0) {
      return "Invalid info! Please check your input";
    }
    let indoorLow = ["push-up", "cruches", "weightlifting"];
    let indoorHigh = ["aerobics", "mat tumbling", "burpees"];
    let outdoorLow = ["skating", "riding", "walking"];
    let outdoorHigh = ["hiking", "swimming", "playing basketball"];
    height = height / 100;
    let BMI = weight / (height * height);
    if (age > 40) {
      return (
        "Why not try " +
        indoorLow[Math.floor(Math.random()*3)] +
        " / " +
        outdoorLow[Math.floor(Math.random()*3)] +
        " ?"
      );
    } else {
      if (BMI < 28) {
        return (
          "Why not try " +
          indoorLow[Math.floor(Math.random()*3)] +
          " / " +
          outdoorLow[Math.floor(Math.random()*3)] +
          " ?"
        );
      } else {
        return (
          "Why not try " +
          indoorHigh[Math.floor(Math.random()*3)] +
          " / " +
          outdoorHigh[Math.floor(Math.random()*3)] +
          " ?"
        );
      }
    }
  },
  withoutInfo() {
    return "Please fill in your information";
  }
}

module.exports = tree;

