 /*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
 that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
  Call the function three times, using a different number of arguments each time.*/
  function sandwiches(items:string[]){
    let summary =" you ordered sandwich with following items: ";
    summary=summary+items;
      console.log(summary);
 };

sandwiches(['mayo, ','vegetables, ']);
sandwiches(['onion, ','chicken spread, ','chicken,']);
sandwiches(['chilli sauce, ','olive, ','chicken tikka, ','cheese']);
