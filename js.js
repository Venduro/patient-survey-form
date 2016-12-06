//Javascript will only run once the DOM has fully loaded.
$( document ).ready(function() {
  //variable created for the form
  var $form = $('.form');
  //section A1 radio buttons
  // var $A1 = $('[name="A1"]');
  // var $A1 = $("input[name='A1']:checked");
  // var $B1 = $('#B1');
  // var $C1 = $('#C1');

  $form.on('submit', function (e) {
    e.preventDefault();

    var $A1 = $("input[name='A1']:checked");
    console.log($A1.val());
    // var $li = $('<li>');
    // var A1Value = $('<li>').html($A1.val());
    //
    // $li.append($A1Value);
  });
});
