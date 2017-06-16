function Pizza(protein) {
  this.protein = protein;

}



$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();

  var inputtedProtein = $("#protein").val();


  var newPizza = new Pizza(inputtedProtein);
