// business logic
function Pizza(first, last, size, cheese, proteins, veggies) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSize = size;
  this.cheese = cheese;
  this.proteins = proteins;
  this.veggies = veggies;
  this.toppings;
}

Pizza.prototype.fullCost = function() {
  this.toppings = this.cheese + this.proteins + this.veggies;
  return this.toppings + this.pizzaSize;
}

Pizza.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function resetFields() {
  $("#new-first-name").val("");
  $("#new-last-name").val("");
  $("#size").val("5");
  $("#cheese").val("1");
  $("#protein").val("0");
  $("#veggies").val("0");
}

// user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
//input info from fields
  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedSize = parseInt($("#size").val());
  var inputtedCheese = parseInt($("#cheese").val());
  var inputtedProteins = parseInt($("#protein").val());
  var inputtedVeggies = parseInt($("#veggies").val());

  var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedCheese, inputtedProteins, inputtedVeggies);

  var name = newPizza.fullName();
  var receipt = newPizza.fullCost();

  $("ul#order").append("<li>" + name + " owes $" + receipt + "</span></li>");

  resetFields();
  });
});
