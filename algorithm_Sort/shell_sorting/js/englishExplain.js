
// 정렬 설명
// str[0] = 쉘 정렬 
var str = ['<b>This is shell Sorting.</b><br>A shell sort is a partial list by extracting each k-th element of the list to be sorted. In this case, k is called a gap An alignment that reduces the interval k by half for each rotation and repeats until the interval k is 1.<br><br><b>Features of Shell Sorting Algorithm</b><br>Advantage : When the exchange of data occurs in a non-continuous partial list, it travels a larger distance.<br>Weakness : 1.If the insertion location is far away, the number of movements will increase<br><br><br><b>Time Complexity of Shell Sort</b><br>Best : O(n) , Avg : O(n1.5) , Worst : O(n2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});