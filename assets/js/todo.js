$("ul").on("click", "li", function() {
  $(this).toggleClass("finished");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().remove();
  event.stopPropagation;
});

$("input[type='text'").keypress(function(event) {
  if (event.key === "Enter"){
    var inputText = $(this).val();
    $(this).val("");
    $("ul").append('<li><span class="delete"><i class="fas fa-trash"></i></span>' + inputText + "</li>");
  }
});

$(".add").click(function(){
  $("input").toggleClass("show");
})