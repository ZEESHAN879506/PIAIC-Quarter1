/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
  that reads I love TypeScript.*/ 
  function  make_shirts(size:string="Large",text:string="I love TypeScript."){
    
    return {size,text};
 };

 console.log(make_shirts());

/* Make a large shirt and a medium shirt with the default message, */ 
  function  make_shirts1(size:string="Medium",text:string="I love TypeScript."){
    
    return {size,text};
 };

 console.log(make_shirts1());

 //   shirt of any size with a different message.
 function  make_shirts2(size:string="Small",text:string="I love JavaScript."){
    return {size,text};
 };

 console.log(make_shirts2());

