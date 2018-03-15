const button = $('#add-item');
const input = $('#input');
const checkboxes = $('input[type="checkbox"]');

//Add new checklist item by clcking on the button and pressing enter
  button.click(function() {
    let inputValue = input.val();
    if(inputValue != ''){
      $('.todo-list').append(`<div class="item"><input type="checkbox"><p>${inputValue}</p><span><img class="delete-icon" src="images/delete.svg"></span></div>`);
      input.val('');
    }
  });
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

  //Add sort functionality using Jquery UI
  $(function(){
    $('.todo-list').sortable();
  })
