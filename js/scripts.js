function Pizza(first, last, size, toppings) {
  this.firstName = first;
  this.lastName = last;
  this.pizzaSize = size;
  this.toppings;
}
 function Toppings () {
  this.cheese = cheese
  this.proteins = protein;
  this.veggies = veggies;
  this.extra = extra
}

Pizza.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Pi

function resetFields() {
  $("#new-first-name").val("");
  $("#new-last-name").val("");
  $("#size").val("small");
  $("#cheese").val("1");
  $("#protein").val("2");
  $("#veggies").val("2");
  $("#extra").val("1");
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();


    var inputtedSize = $("#size").val()
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedCheese = parseInt("#cheese").val();
    var inputtedProteins = parseInt("#protein").val();
    var inputtedVeggies = parseInt("#veggies").val();
    var inputtedExtra = parseInt("#extra").val();


    var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedToppings);

    var newToppings = new Topping (cheese, protein, veggies, extra);

    var name = newPizza.fullName();

  $("ul#order").append("<li>" + name + "</span></li>");

    });
  resetFields();
  });
});
