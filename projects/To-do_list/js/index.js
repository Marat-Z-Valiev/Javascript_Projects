const button = $('#add-item');
const input = $('#input');
const checkboxes = $('input[type="checkbox"]');
// const delete = $('.delete-icon');

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

  $(document).on('click','.delete-icon', function() {
    $(this).closest('div').remove();
  });
