function Pizza(first, last, size, toppings) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSize = size;
  this.toppings = toppings;
}



Pizza.prototype.fullOrder = function() {
  return this.firstName + " " + this.lastName + ": " + this.pizzaSize + " pizza with " + this.toppings;
}

function resetFields() {
  $("#new-first-name").val("");
  $("#new-last-name").val("");
  $("#size").val("small");
  // $("#toppings").val("unchecked");
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();


    var inputtedSize = $("#size").val()
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
    var inputtedToppings= $(this).val();

    var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedToppings);

    var order = newPizza.fullOrder();

  $("ul#order").append("<li>" + order + "</span></li>");

    });
  resetFields();
  });
});
