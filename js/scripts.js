function Pizza(first, last, size, cheese, protein, veggies, extra) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSize = size;
  this.cheese = cheese;
  this.proteins = proteins;
  this.veggies = veggies;
  this.toppings;
}


Pizza.prototype.fullCost = function() {
  return + this.pizzaSize;
}

Pizza.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function resetFields() {
  $("#new-first-name").val("");
  $("#new-last-name").val("");
  $("#size").val("1");
  $("#cheese").val("1");
  $("#protein").val("0");
  $("#veggies").val("0");
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();



    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedSize = ("#size").val();
    var inputtedCheese = ("#cheese").val();
    var inputtedProteins = ("#protein").val();
    var inputtedVeggies = ("#veggies").val();

    var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedCheese, inputtedProteins, inputtedVeggies);


    var name = newPizza.fullName();
    var receipt = newPizza.fullCost();

  $("ul#order").append("<li>" + name + " owes $" + receipt + "</span></li>");


  resetFields();
  });
});
