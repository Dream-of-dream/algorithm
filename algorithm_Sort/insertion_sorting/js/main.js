
// 정렬 설명
// str[0] = 삽입 정렬 
var str = ['<b>이것은 삽입정렬입니다.</b><br>삽입 정렬(insertion sort)이란 두 번쨰 자료부터 시작 하여 그앞(앞쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘 입니다.<br><br><b>삽입 정렬(insertion sort) 알고리즘의 특징</b><br>장점 : 레코드의 수가 적을 경우 알고리즘 자체가 매우 간단하므로 다른 복잡한 정렬 방법보다 유리할 수 있디ㅏ.<br>단점 : 1.비교적 많은 레코드들의 이동을 포함한다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.레코드 수가 많고 레코드 크기가 클 경우에 적합하지 않다.<br><br><b>삽입 정렬(insertion sort)의 시간복잡도</b><br>Best : O(n), Worst : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});