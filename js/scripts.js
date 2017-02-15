$(document).ready(function(){
  $(".appointment").submit(function(event) {
    var nameCollected = $("input#name").val();
    $(".userName").text(nameCollected);

    var description = $("input#description").val();
    $(".appDescription").text(description);

    var dateCollected = $("input#date").val();
    $(".appDate").text(dateCollected);

    var startTimeCollected = $("input#startTime").val();
    $(".appStart").text(startTimeCollected);

    var endTimeCollected = $("input#endTime").val();
    $(".appEnd").text(endTimeCollected);

    $(".confirmation").show();

    event.preventDefault();
  });
});
