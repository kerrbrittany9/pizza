function Pizza(protein) {
  this.firstName = first;
  this.lastName = last;
  this.protein = protein;
  this.veggies = veggies;
  this.pizzaSize= size;

}



$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();

  var inputtedProtein = $("#protein").val();


  var newPizza = new Pizza(inputtedProtein);


   $("input:checkbox[name=protein]:checked").each(function(){
     var workTransportationMode = $(this).val();
     $("#work-responses").append(workTransportationMode + "<br>");
   });
