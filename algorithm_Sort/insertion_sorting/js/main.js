
// 정렬 설명
// str[0] = 선택 정렬 
var str = ['<b>이것은 선택정렬입니다.</b><br>선택 정렬(selection sort)이란 데이터 배열에서 가장 작은 데이터를 선택하여 앞으로 보내는 정렬입니다.<br><br><b>선택 정렬(selection sort) 알고리즘의 특징</b><br>장점 : 자료 이동 횟수가 미리 결정된다.<br>단점 : 1.안정성을 만족하지 않는다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.즉, 값이 같은 레코드가 있는 경우에 상대적인 위치가 변경될 수 있다.<br><br><b>선택 정렬(selection sort)의 시간복잡도</b><br>Best : O(n^2) , Avg : O(n^2) , Worst : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});