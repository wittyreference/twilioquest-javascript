class TargetingSolution {
  // Constructor function that takes an object literal with x, y, and z properties
  // and stores them as instance variables
  constructor(config) {
    this.x = config.x;
    this.y = config.y;
    this.z = config.z;
  }

  // Instance function that returns a formatted string containing the instance's target coordinates
  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900,
  });
  
  console.log(m.target()); // would print "(10, 15, 900)"