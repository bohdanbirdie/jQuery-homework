// setInterval(function(){
// debugger; 
setInterval(function count(grade) {
  // debugger; 
  var grade = grade || 0;
  var step = grade == 0 ? 2 : 1;
  var highestNumber = grade % 2 == 0 ? 9 : 6;

  $('.digit-' + grade + '[data-position]').each(function() { //get in eacth digit-N
    if ($(this).attr("data-position") == 'top') {

      $(this).attr("data-position", 'bottom');

      $(this).css("z-index", "0");

      $(this).children().each(function() { //get in each
        // debugger;
        $(this).each(function() {
          if ($(this).children().text() < 9) {
            $(this).children().text(+$(this).children().text() + step);
          } else {
            count(grade + 1);
            $(this).children().text(+$(this).children().text() - (highestNumber - 1));
          }
        });
      });

      $(this).children().eq(2).removeClass('before-half');
      $(this).children().eq(3).removeClass('after-half');

    } else {

      $(this).attr("data-position", 'top');

      $(this).children().each(function() { //get in each
        // debugger;
        $(this).each(function() {
          if ($(this).children().text() <= highestNumber) {
            // $(this).children().text(+$(this).children().text());//dont need this rigth now
          } else {

            $(this).children().text(+$(this).children().text() - (highestNumber + 1));

          }
        });
      });

      $(this).css("z-index", "1");
      $(this).children().eq(2).addClass('before-half');
      $(this).children().eq(3).addClass('after-half');
    }//else end



  });



}, 600);


// }, 1);