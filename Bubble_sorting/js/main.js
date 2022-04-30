
// 정렬 설명
// str[0] = 버블 정렬 
var str = ['<b>이것은 버블정렬입니다.</b><br>버블정렬(bubble sort)이란 서로 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환하여 정렬하는 알고리즘입니다.<br><br><b>버블 정렬(bubble sort) 알고리즘의 특징</b><br>장점 : 구현이 매우 간단하다.<br>단점 : 1.순서에 맞지 않은 요소를 인접한 요소와 교환한다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열에서 모든 다른 요소들과 교환되어야 한다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.특히 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 일어난다.<br><br><b>버블 정렬(bubble sort)의 시간복잡도</b><br>Best : O(n^2) , Avg : O(n^2) , Worst : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});