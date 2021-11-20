// JavaScript Comparison and Logical Operators

// ==	equal to		
// ===	equal value and equal type	
// !=	not equal	
// !==	not equal value or not equal type	
// >	greater than	
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// &&	and 
// || or 
// ! not

concat(arr1,[...]) // Joins two or more arrays, and returns a copy of the joined arrays
copyWithin(target,[start],[end]) // Copies array elements within the array, to and from specified positions
entries() // Returns a key/value pair Array Iteration Object
every(function(currentval,[index],[arr]),[thisVal]) // Checks if every element in an array pass a test
fill(val,[start],[end]) // Fill the elements in an array with a static value

find(function(currentval,[index],[arr]),[thisVal]) // Returns the value of the first element in an array that pass a test
filter(function(currentval,[index],[arr]),[thisVal]) //	Creates a new array with every element in an array that pass a test
https://jsfiddle.net/konfigear/srg43e2y/9/

findIndex(function(currentval,[index],[arr]),[thisVal]) // Returns the index of the first element in an array that pass a test


map(function(currentval,[index],[arr]),[thisVal]) // Creates a new array with the result of calling a function for each array element
forEach(function(currentval,[index],[arr]),[thisVal]) // Calls a function for each array element
https://jsfiddle.net/konfigear/t2rwj0ma/

from(obj,[mapFunc],[thisVal]) // Creates an array from an object
includes(element,[start]) // Check if an array contains the specified element
indexOf(element,[start]) // Search the array for an element and returns its position
isArray(obj) // Checks whether an object is an array
join([seperator]) // Joins all elements of an array into a string
keys() // Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf(element,[start]) // Search the array for an element, starting at the end, and returns its position
pop() // Removes the last element of an array, and returns that element
push(item1,[...]) // Adds new elements to the end of an array, and returns the new length

reduce(function(total,currentval,[index],[arr]),[initVal]) // Reduce the values of an array to a single value (going left-to-right)
https://jsfiddle.net/konfigear/zgr78enc/25/

reduceRight(function(total,currentval,[index],[arr]),[initVal]) // Reduce the values of an array to a single value (going right-to-left)
reverse() // Reverses the order of the elements in an array
shift() // Removes the first element of an array, and returns that element
slice([start],[end]) // Selects a part of an array, and returns the new array
some(function(currentval,[index],[arr]),[thisVal]) // Checks if any of the elements in an array pass a test
sort([compareFunc]) // Sorts the elements of an array
splice(index,[quantity],[item1,...]) // Adds/Removes elements from an array
toString() // Converts an array to a string, and returns the result
unshift(item1,...) // Adds new elements to the beginning of an array, and returns the new length
valueOf() // Returns the primitive value of an array