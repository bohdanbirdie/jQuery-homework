// setInterval(function(){
// debugger;
var numbers = 0;
var counter = [0, 0, 0, 0, 0, 0];

// data-countdown-start="91:00:02:15"

setBaseTime();

function setBaseTime() {
  var maxGrade = 7;
  var highestNumber;
  var baseTime = $('.wrapper').attr('data-countdown-start');
  baseTime = baseTime.replace(/:/g, '').split('').reverse().join('');

  for (var i = 0; i <= maxGrade - 2; i++) {
    highestNumber = i % 2 == 0 ? 9 : 5;
    // console.log(baseTime[i]);
    // console.info(i);
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
  for (var i = maxGrade - 1; i <= maxGrade; i++) {
    highestNumber = 9;
    // console.log(baseTime[i]);
    // console.info(i);
    $('.real-' + i).each(function() {
      $(this).text(+baseTime[i] + 1);
    });
    $('.next-' + i).each(function() {
      $(this).text(+baseTime[i]);
    });
    $('.double-next-' + i).each(function() {
      console.log(baseTime[i]);

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
  var grade = grade || 0;
  // var step = grade == 0 ? 2 : 1;
  var step = 2;
  var highestNumber;
  if (grade === 6 || grade === 7) {
    highestNumber = 9;
  } else {
    highestNumber = grade % 2 == 0 ? 9 : 5;
  }
  // console.log(highestNumber);
  // var lowestNumber = grade % 2 == 0 ? 9 : 6;
  var flag = [false, false, false, false, false, false];

  $('.digit-' + grade + '[data-position]').each(function() { //get in eacth digit-N;
    if ($(this).attr("data-position") == 'top') { //if this element if top - set it to boottom and do changes

      $(this).attr("data-position", 'bottom');

      // $(this).css("z-index", "0");
      $(this).removeClass('top-index');
      $(this).addClass('bottom-index');


      $(this).children().each(function() { //loop thru all digit-X div's childrens


        // if ($(this).children().text() <= (highestNumber - 1)) { //use this for not reversed timer
        if ($(this).children().text() > (0)) { //if number is lower then highest number for current digit
          $(this).children().text(+$(this).children().text() - step); // do one more step (change to '+' for not reversed timer)
        } else { // else set the overflow flag and reset number 


          flag[grade] = true;

          // $(this).children().text(+$(this).children().text() - (highestNumber - 1));//use this for not reversed timer
          $(this).children().text(highestNumber - 1);

        }
      });


      $(this).children().eq(2).removeClass('before-half');
      $(this).children().eq(3).removeClass('after-half');

    } else { //current element is bottom - set it to top

      $(this).attr("data-position", 'top');

      $(this).children().each(function() { //loop thru all childrens of current element

        // if ($(this).children().text() <= highestNumber) {//use this for not reversed timer
        if ($(this).children().text() > -1) {
          // $(this).children().text(+$(this).children().text());//dont need this rigth now
        } else {
          $(this).children().text(+$(this).children().text() + (highestNumber + 1));
        }
      });
      // $(this).css("z-index", "1");
      $(this).removeClass('bottom-index');
      $(this).addClass('top-index');
      $(this).children().eq(2).addClass('before-half');
      $(this).children().eq(3).addClass('after-half');
    } //else end
  });
  // console.log(flag[grade]);

  if (flag[grade]) {
    if ((counter[grade] % 2) == 0) {
      count(grade + 1);
    }
    counter[grade] += 1;

  }


}, 1000);
