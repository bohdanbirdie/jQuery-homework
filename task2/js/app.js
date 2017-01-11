// debugger;
var numbers = 0;
var counter = [0, 0, 0, 0, 0, 0];

// data-countdown-start="91:00:02:15"

setBaseTime();

function setBaseTime() { //Set the base time and date from data-countdown-start
  var maxGrade = 7;
  var highestNumber;
  var baseTime = $('.wrapper').attr('data-countdown-start');
  baseTime = baseTime.replace(/:/g, '').split('').reverse().join(''); //covert input time string to number and use it as array

  for (var i = 0; i <= maxGrade - 2; i++) {//set the time without date, cause date has higher highestNumber
    highestNumber = i % 2 == 0 ? 9 : 5;
    $('.real-' + i).each(function() {
      $(this).text(+baseTime[i] + 1);
    });
    $('.next-' + i).each(function() {
      $(this).text(+baseTime[i]);
    })
    $('.double-next-' + i).each(function() {
      if (baseTime[i] == 0) {
        $(this).text(highestNumber);
      } else {
        $(this).text(+baseTime[i] - 1);
      }
    })
  }

  // debugger;
  for (var i = maxGrade - 1; i <= maxGrade; i++) {//set only date with correct highestNumber
    highestNumber = 9;
    $('.real-' + i).each(function() {
      $(this).text(+baseTime[i] + 1);
    });
    $('.next-' + i).each(function() {
      $(this).text(+baseTime[i]);
    });
    $('.double-next-' + i).each(function() {
      if (baseTime[i] == 0) {
        $(this).text(highestNumber - 1);
      } else {
        $(this).text(+baseTime[i] - 1);
      }
    });
  }
}



setInterval(function count(grade) {
  // debugger; 
  var grade = grade || 0;//will be 0 for lowest grade digit
  var step = 2;
  var highestNumber;
  if (grade === 6 || grade === 7) {
    highestNumber = 9;
  } else {
    highestNumber = grade % 2 == 0 ? 9 : 5;
  }

  var flag = [false, false, false, false, false, false];//array for overflow flags

  $('.digit-' + grade + '[data-position]').each(function() { //get in eacth digit-N;
    if ($(this).attr("data-position") == 'top') { //if this element if top - set it to boottom and do changes
      $(this).attr("data-position", 'bottom');
      $(this).removeClass('top-index');
      $(this).addClass('bottom-index');
      $(this).children().each(function() { //loop thru all current digit div's childrens

        // IMPORTANT
        // if ($(this).children().text() <= (highestNumber - 1)) { //use this for not reversed timer

        if ($(this).children().text() > (0)) { //if number is lower then highest number for current digit
          $(this).children().text(+$(this).children().text() - step); // do one more step (change to '+' for not reversed timer)
        } else { // else set the overflow flag and reset number 
          flag[grade] = true;

          // IMPORTANT
          // $(this).children().text(+$(this).children().text() - (highestNumber - 1));//use this for not reversed timer
          $(this).children().text(highestNumber - 1);
        }
      });
      $(this).children().eq(2).removeClass('before-half');
      $(this).children().eq(3).removeClass('after-half');
    } else { //current element is bottom - set it to top
      $(this).attr("data-position", 'top');
      $(this).children().each(function() { //loop thru all childrens of current element
        // IMPORTANT
        // if ($(this).children().text() <= highestNumber) {//use this for not reversed timer
        if ($(this).children().text() > -1) {
          // $(this).children().text(+$(this).children().text());//dont need this rigth now
        } else {
          $(this).children().text(+$(this).children().text() + (highestNumber + 1));
        }
      });
      $(this).removeClass('bottom-index');
      $(this).addClass('top-index');
      $(this).children().eq(2).addClass('before-half');
      $(this).children().eq(3).addClass('after-half');
    } //else end
  });

  if (flag[grade]) {//call recursion for higher grade digit
    if ((counter[grade] % 2) == 0) {//this block prevent double function call when flag is true (not a bug, feature)
      count(grade + 1);
    }
    counter[grade] += 1;
  }
}, 1000);
