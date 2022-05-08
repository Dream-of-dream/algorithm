
// 정렬 설명
// str[0] = 쉘 정렬 
var str = ['<b>这是泡沫排序。</b><br>泡沫排序是指比较相邻的两个唱片,如果大小不按顺序排列,就互相交换排列的算法。<br><br><b>气泡排序算法的特征</b><br>优点 : 体现非常简单。<br>缺点 : 1.将不符合顺序的要素与相邻要素进行交换。<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.为了使一个要素从最左到最右移动，需要在排列中与所有其他要素进行交换。<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.特别是即使特定要素已经处于最终排序位置，也会发生交换的情况。<br><br><b>气泡排列的时间复杂度</b><br>上乘 : O(n^2) , 平均 : O(n^2) , 最坏的情况 : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});