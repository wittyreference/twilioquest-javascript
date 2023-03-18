// This function takes in an array of objects called reservoirs
function sumRadLevels(reservoirs) {
    // Declare a variable called total and initialize it to 0
    let total = 0;
  
    // Iterate over each object in the reservoirs array using a for...of loop
    for (const reservoir of reservoirs) {
      // Check if the current reservoir object has a property called radiation
      if (reservoir.radiation !== undefined) {
        // If it does, parse the radsCountCurrent value as an integer and add it to the total variable
        total += parseInt(reservoir.radiation.radsCountCurrent);
      }
    }
  
    // Return the value of the total variable
    return total;
  }
  
  console.log("Test case data:");
  console.log(
    sumRadLevels([
      {
        id: 623,
        label: "Reservoir-2A-East-Wing",
        radiation: {
          radsCountCurrent: "190",
          monitorSystemGuid: "8453b2e7-0cf3-43fa-8909-cab00f75d413",
        },
        type: "raw",
        contents: 83,
      },
      {
        id: 21,
        label: "Reservoir-2B-East-Wing",
        type: "distilled",
        contents: 120,
      },
      {
        id: 617,
        label: "Reservoir-3F-North-Wing",
        radiation: {
          radsCountCurrent: "39",
          monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e",
        },
        type: "raw",
        contents: 100,
      },
      {
        id: 100,
        label: "Reservoir-3G-North-Wing",
        radiation: {
          radsCountCurrent: "712",
          monitorSystemGuid: "e1e73107-f0ad-495d-a11c-e730543f1ad5",
        },
        type: "raw",
        contents: 98,
      },
    ])
  );
  