
// 정렬 설명
// str[0] = 버블 정렬 
var str = ['<b>This is bubble sotring.</b><br>Bubble sort is an algorithm that compares two records adjacent to each other and sorts them interchangeably if the sizes are not in order.<br><br><b>Characteristics of the bubble sort algorithm</b><br>Advantages: Implementation is very simple.<br>Disadvantages: 1. Exchange out-of-order elements with adjacent elements.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.In order for one element to move from leftmost to rightmost, it must be exchanged with all other elements in the array.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.In particular, even if a particular element is already in the final alignment position, the exchange occurs.<br><br><b>Time complexity of bubble sort</b><br>Best : O(n^2) , Avg : O(n^2) , Worst : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});