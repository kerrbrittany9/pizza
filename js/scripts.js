function Pizza(protein) {
  this.firstName = first;
  this.lastName = last;
  this.protein = protein;
  this.veggies = veggies;

}



$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    $("input:checkbox[name=protein]:checked").each(function(){
    var inputtedProtein= $(this).val();
      $("input:checkbox[name=vegetables]:checked").each(function(){
    var inputtedVeggies= $(this).val();

    var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedProtein, inputtedVeggies);


    $("#protein").append(inputtedProtein + "<br>");

  });


    $("#vegetables").show();

     $("#vegetables").append(inputtedVeggies + "<br>");

    });
  });
});
