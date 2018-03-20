const button = $('#add-item');
const input = $('#input');
const checkboxes = $('input[type="checkbox"]');

//Add new checklist item by clcking on the button and pressing enter
  button.click(function() {
    let inputValue = input.val();
    if(inputValue != ''){
      $('.todo-list').append(`<div class="item"><input type="checkbox"><p>${inputValue}</p><span><img class="delete-icon hidden" src="images/delete.svg"></span></div>`);
      input.val('');
    }
  });
  //Add item on clicking the enter key
  input.keydown(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault;
      button.click();
    }
  });

//Delete an item by clicking on delete icon
  $(document).on('click','.delete-icon', function() {
    $(this).closest('div').remove();
  });

//Display delete icon on mouse hover
  $(document).on('mouseover','.item', function() {
    $(this).find('img').removeClass('hidden');
  });

//Hide delete icon on mouse out
  $(document).on('mouseout','.item', function() {
    $(this).find('img').addClass('hidden');
  });

  //Add sort functionality using Jquery UI
  $(function(){
    $('.todo-list').sortable();
  })
