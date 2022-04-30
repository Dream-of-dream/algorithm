var str = [1, 2, 3]

$(document).ready(function () {
    $("#test1").click(function () {
        $("#main_right").html(str[1]);
    });
});