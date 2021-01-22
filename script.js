$(".true").click(function() {
    $(".answer1").text("Correct!");
    $(".answer1").css("color", "green"); // optional?
});

$(".false").click(function() {
    $(".answer1").text("Incorrect!");
        $(".answer1").css("color", "red"); // optional?
});

$(".next").click(function() {
    $(".question1").hide();
});

$(".next").click(function() {
    $(".question2").show();
});

$(".choiceA").click(function() {
    $(".answer2").text("Correct!");
});

$(".choiceB").click(function() {
    $(".answer2").text("Incorrect!");
});