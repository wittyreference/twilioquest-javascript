function scanAndFilter(freightItems, forbiddenString) {
  
  /*
    let filteredItems = [];
  
    filteredItems = freightItems.forEach((item) => {
        if (item !== forbiddenString) {
            filteredItems.push(item);
        }
    });

  */
  let filteredItems = freightItems.filter(function(doTheThing){
    return doTheThing !== forbiddenString
  });


    return filteredItems;
  }
  
  const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );

  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']