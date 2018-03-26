$('.block:first')
  .addClass('current first')
  .append('<span class="btn" id="next">Lets go!</span>')
  
$('.block:last')
  .addClass('empty last')
  .append('<span class="btn" id="prev">Prev</span>') 
  
$('.block').not(':first, :last')
  .addClass('empty')
  .append('<span class="btn" id="next">Next<i class="fa fa-hand-o-right"></i></span>')
  .append('<span class="btn" id="prev">Prev</span>');
  
$('.btn').click( function() {
  var dir = event.target.id;
  var current = $('.current'),
      next = $('.current').next('div'),
      prev = $('.current').prev('div');
	  
  if (dir == 'next') {
    current.removeClass('current').addClass('filled');
    next.removeClass('empty').addClass('current');
  }
  if (dir == 'prev') {
    current.removeClass('current').addClass('empty');
    prev.removeClass('filled').addClass('current');
  }

$(':input[required]').closest('.block').addClass('mandatory');
});

;


/* When 'nth-last-child2 is brought into the code, everything stops working. 
I don't know what I did wrong with it. Use the below code to see what I mean.

$('.block:first')
  .addClass('current first')
  .append('<span class="btn" id="next">Lets go!</span>');
  
$('.block:last')
  .addClass('empty last')
  .append('<span class="btn" id="prev">Prev</span>') 
  
$('.block:nth-last-child(2)')
  .addClass('current nth-last-child2')
  .append('<span clas="btn" id="nth-last-child2"><i class="fa fa-rocket"></i>)</span>')
  .append('<span class="btn" id="prev">Prev</span>')
  
$('.block').not(':first, :last, :nth-last-child2')
  .addClass('empty')
  .append('<span class="btn" id="next">Next<i class="fa fa-hand-o-right"></i></span>')
  .append('<span class="btn" id="prev">Prev</span>');

$('.btn').click( function() {
  var dir = event.target.id;
  var current = $('.current'),
      next = $('.current').next('div'),
      prev = $('.current').prev('div'),
      nth-last-child2 = $('.current').nth-last-child2('div');
	  
  if (dir == 'next') {
    current.removeClass('current').addClass('filled');
    next.removeClass('empty').addClass('current');
  }
  if (dir == 'prev') {
    current.removeClass('current').addClass('empty');
    prev.removeClass('filled').addClass('current');
  }
  if (dir == 'nth-last-child2').click( function getReceipt() {
    current.removeClass('current').addClass('filled');
    prev.removeClass('filled').addClass('current');
  }
)*/
