// setInterval(function(){
// debugger; 
var numbers = 0;
var counter = [0, 0, 0, 0, 0, 0];

setInterval(function count(grade) {
  // debugger; 
  var grade = grade || 0;
  // var step = grade == 0 ? 2 : 1;
  var step = 2;
  var highestNumber = grade % 2 == 0 ? 9 : 6;
  var flag = [false, false, false, false, false, false];

  $('.digit-' + grade + '[data-position]').each(function() { //get in eacth digit-N
    if ($(this).attr("data-position") == 'top') { //if this element if top - set it to boottom and do changes



      $(this).attr("data-position", 'bottom');

      $(this).css("z-index", "0");

      $(this).children().each(function() { //loop thru all digit-X div's childrens
        // debugger;
        // $(this).each(function() { //loop thru
        if ($(this).children().text() <= (highestNumber - 1)) { //if number is lower then highest number for current digit
          $(this).children().text(+$(this).children().text() + step); // do one more step
        } else { // else set the overflow flag and reset number 
          // debugger
          // console.log($(this).children().text());
          flag[grade] = true;
          // console.log(numbers);
          $(this).children().text(+$(this).children().text() - (highestNumber - 1));

        }
        // });
      });


      $(this).children().eq(2).removeClass('before-half');
      $(this).children().eq(3).removeClass('after-half');

    } else {//current element is bottom - set it to top

      $(this).attr("data-position", 'top');

      $(this).children().each(function() { //get in each
        // debugger;
        // $(this).each(function() {
        if ($(this).children().text() <= highestNumber) {
          // $(this).children().text(+$(this).children().text());//dont need this rigth now
        } else {
          // console.log($(this).children().text());
          // flag[grade] = true;
          $(this).children().text(+$(this).children().text() - (highestNumber + 1));

        }
        // });
      });



      $(this).css("z-index", "1");
      $(this).children().eq(2).addClass('before-half');
      $(this).children().eq(3).addClass('after-half');
    } //else end




  });

  console.log(flag[grade]);

  if (flag[grade]) {
    if ((counter[grade] % 2) == 0) {
      count(grade + 1);
    }
    counter[grade] += 1;

  }


}, 400);
