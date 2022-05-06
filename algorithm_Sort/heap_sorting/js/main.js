
// 정렬 설명
// str[0] = 힙 정렬 
var str = ['<b>이것은 힙정렬입니다.</b><br>힙 정렬(heap sort)이란 최대 힙 트리를 구성하는 정렬입니다.<br><br><b>힙 정렬(heap sort) 알고리즘의 특징</b><br>장점 : 1. 시간 복잡도가 좋습니다.<br>단점 : 1.데이터의 상태에 따라 O(nlog)시간 복잡도라도 조금 느립니다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.불안정 정렬입니다.<br><br><b>힙 정렬(heap sort)의 시간복잡도</b><br>O(N*logN)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});