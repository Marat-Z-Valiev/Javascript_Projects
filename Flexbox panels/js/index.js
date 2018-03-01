  const panels = Array.from($('.panels'));
  function toggleOpen(){
    $(this).toggleClass('open');
  }
  function toggleActive(e){
    if(e.originalEvent.propertyName.includes('flex')){
      $(this).toggleClass('open-active');
    }
  }
  panels.forEach(panel => $(panel).on('click', toggleOpen));
  panels.forEach(panel => $(panel).on('transitionend', toggleActive));
