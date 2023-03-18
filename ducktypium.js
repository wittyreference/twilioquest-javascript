class Ducktypium {
    constructor(color) {
    this.color = color
    this.calibrationSequence = []

    switch(color)
    {
      case "red":
        break;
      case "blue":
        break;
      case "yellow":
        break;
      default:
        throw new Error('ERRRRROOOOORRRRR! You cannot use that color');
    }
  }

  refract(color)
  {
    if (this.color === "red")
    {
      if (color === "blue") {
        return "purple";}
      else if (color === "yellow") {
        return "orange";}
    }

    if (this.color === "blue")
    {
      if (color === "red") {
        return "purple";}
      else if (color === "yellow") {
        return "green";}
    }

    if (this.color === "yellow")
    {
      if (color === "red") {
        return "orange";}
      else if (color === "blue") {
        return "green";}
    }

    if (this.color == color)
    {
      return color;
    }
    }
  
    calibrate(calibrationPower)
    {
        var numbers = [];
  
        calibrationPower.sort().forEach(function(number)
        {
              numbers.push(number*3);
        })
  
        this.calibrationSequence = numbers;
  
    }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium("red");
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract("blue")); // prints 'purple'
  console.log(dt.refract("red")); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]