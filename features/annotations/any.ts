/* 
  Type any
    - A type, just as string or boolean are
    - Means TS has no idea what this is. Cant check the correct property references
    - Avoid variables with 'any' at all costs!!
*/

// - Function that returns the 'any' type
const json1 = '{"x": 10, "y": 20}';
const coordinates1 = JSON.parse(json);

console.log(coordinates1);

coordinates1.whatever;
// This works because coordinates1 returns type any
// and TS is unable to do an error checking
