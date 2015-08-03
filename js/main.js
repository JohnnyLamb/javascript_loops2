// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');


  var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];



// solution for problem 1
 // for(var i=0; i < students.length-1; i++) {
 // console.log(students[i]);}


// solution for problem 2
//  for(var i=0; i < students.length; i++) {
//   if(students[i] === "joe" || students[i] === "rachel" || students[i] === "lily"){
//       console.log(students[i]);

//   }
// }

// solution for problem 3

// for(var i=0; i < students.length; i++) {
//   students.reverse();
//  console.log(students[i]);

// }

// solution for problem 4


for(var i=0; i < students.length; i++) {

  if(students[i] === "joe" || students[i] === "lily"){
    console.log(students[i]);
  }
  else{
    console.log(students[i]);
     console.log(students[i]);

  }


}



});
