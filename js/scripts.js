// function Pizza(protein) {
//   this.firstName = first;
//   this.lastName = last;
//   this.protein = protein;
//   this.veggies = veggies;
//   this.pizzaSize= size;
//
// }



$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
$("#protein").show();
  // var inputtedProtein = $("#protein").val();
  $("input:checkbox[name=protein]:checked").each(function(){
    var inputtedProtein= $(this).val();

    // var newPizza = new Pizza(inputtedProtein);



     $("#protein").append(inputtedProtein + "<br>");
   });
 });
});
