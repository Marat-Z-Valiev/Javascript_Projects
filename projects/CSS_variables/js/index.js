//Change transform values of the box element
const inputs = Array.from($('.controls input'));

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  $('.box').css(`--${this.name}`, this.value + suffix);
  $(this).next().html(this.value + suffix);
}

inputs.forEach(input => $(input).on('change', handleUpdate));
inputs.forEach(input => $(input).on('mousemove', handleUpdate));
