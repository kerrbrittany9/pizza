function Pizza(first, last, size, protein, veggies) {
  this.firstName = first;
  this.lastName = last;
  this.protein = protein;
  this.veggies = veggies;
  this.pizzaSize = size;

}

Pizza.prototype.fullOrder = function() {
  return this.firstName + " " + this.lastName + " " + this.pizzaSize + " " + this.protein + " " + this.veggies;
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();

    var inputtedSize = $("#size").val()
    debugger

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    $("input:checkbox[name=protein]:checked").each(function(){
    var inputtedProtein= $(this).val();
      $("input:checkbox[name=vegetables]:checked").each(function(){
    var inputtedVeggies= $(this).val();



    var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedProtein, inputtedVeggies);

  $("ul#order").append("<li>" + newPizza.fullOrder() + "</span></li>");

    });
  });
});
});
