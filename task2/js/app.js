// setInterval(function(){
// debugger; 
var numbers = 0;
var counter = 0;
setInterval(function count(grade) {
  // debugger; 
  var grade = grade || 0;
  // var step = grade == 0 ? 2 : 1;
  var step = 2;
  var highestNumber = grade % 2 == 0 ? 9 : 6;
  var flag = false;

  $('.digit-' + grade + '[data-position]').each(function() { //get in eacth digit-N
    if ($(this).attr("data-position") == 'top') {



      $(this).attr("data-position", 'bottom');

      $(this).css("z-index", "0");

      $(this).children().each(function() { //loop thru all digit-X div's childrens
        // debugger;
        // $(this).each(function() { //loop thru
          if ($(this).children().text() <= (highestNumber-1)) {
            $(this).children().text(+$(this).children().text() + step);
          } else {
            // debugger
            // console.log($(this).children().text());
            // flag = true;
            // console.log(numbers);
            $(this).children().text(+$(this).children().text() - (highestNumber - 1));

          }
        // });
      });


      $(this).children().eq(2).removeClass('before-half');
      $(this).children().eq(3).removeClass('after-half');

    } else {

      $(this).attr("data-position", 'top');

      $(this).children().each(function() { //get in each
        // debugger;
        // $(this).each(function() {
          if ($(this).children().text() <= highestNumber) {
            // $(this).children().text(+$(this).children().text());//dont need this rigth now
          } else {
            // console.log($(this).children().text());
            // flag = true;
            $(this).children().text(+$(this).children().text() - (highestNumber + 1));

          }
        // });
      });



      $(this).css("z-index", "1");
      $(this).children().eq(2).addClass('before-half');
      $(this).children().eq(3).addClass('after-half');
    }//else end




  });



      if (flag) {
        if ((counter % 2) == 0) {
          count(grade + 1);
        }
        counter++;
      }


}, 500);



// setInterval(function count2(grade){
//   numbers +=1;
//   console.log(numbers);
//   // debugger; 
//   var grade = grade || 0;
//   var step = grade == 0 ? 2 : 1;
//   var highestNumber = grade % 2 == 0 ? 2 : 9;
//   console.log('inside');
//   // debugger;

//    //get in eacth digit-N

    

//     // if ($(this).attr("data-position") == 'top') {

//     //   console.log('inside first if');

//     //   $(this).attr("data-position", 'bottom');

//     //   console.log('position changed');

//       $('.digit-1[data-position]').first().toggleClass('top-index');
//       $('.digit-1[data-position]').first().toggleClass('bottom-index');

//       $('.digit-1[data-position]').first().children().each(function() { //get in each
//         // debugger;
//         $(this).each(function() {
//           if ($(this).children().text() < highestNumber) {
//             $(this).children().text(+$(this).children().text() + step+1);
//           } else {
//             $(this).children().text(+$(this).children().text() - (highestNumber - 1));
//           }
//         });
//       });

//       $('.digit-1[data-position]').first().children().eq(2).toggleClass('before-half');
//       $('.digit-1[data-position]').first().children().eq(3).toggleClass('after-half');

//     // } else {

//       // $(this).attr("data-position", 'top');

//       $('.digit-1[data-position]').next().children().each(function() { //get in each
//         // debugger;
//         $(this).each(function() {
//           if ($(this).children().text() <= highestNumber) {
//             $(this).children().text(+$(this).children().text() + step);
//             // $(this).children().text(+$(this).children().text());//dont need this rigth now
//           } else {

//             $(this).children().text(+$(this).children().text() - (highestNumber + 1));

//           }
//         });
//       });

//       $('.digit-1[data-position]').next().toggleClass('top-index');
//       $('.digit-1[data-position]').next().toggleClass('bottom-index');
//       $('.digit-1[data-position]').next().children().eq(2).toggleClass('before-half');
//       $('.digit-1[data-position]').next().children().eq(3).toggleClass('after-half');

//     //else end
// }, 1000);