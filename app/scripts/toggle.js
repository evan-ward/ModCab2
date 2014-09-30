//Toggle climate descriptions in climate state.
var $button = $('.btn'),
    $text   = $('.txt'),
    visible = true;

$button.hover(function(){
  if ( visible ) {
    $text.slideUp(0,function(){
    $text.removeClass('hide')
         .slideDown('fast');
  });
} else {
  $text.slideUp('fast',function(){
    $text.addClass('hide')
         .slideDown(0);
  });
}
visible = ! visible;
});