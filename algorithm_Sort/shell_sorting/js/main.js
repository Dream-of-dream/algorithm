
// 정렬 설명
// str[0] = 쉘 정렬 
var str = ['<b>이것은 쉘정렬입니다.</b><br>쉘 정렬(shell sort)이란 정렬해야 할 리스트의 각 k번쨰 요소를 추출해서 부분리스트를 만든다. 이떄, k를 간격(gap)이라고 한다 각회전마다 간격 k를 절반으로 줄이는데 간격 k가 1이 될떄 까지 반복하는 정렬 입니다.<br><br><b>쉘 정렬(shell sort) 알고리즘의 특징</b><br>장점 : 연속적이지 않은 부분 리스트에서 자료의 교환이 일어나면 더 큰 거리를 이동한다.<br>단점 : 1.삽입할 위치가 멀리 떨어져 있으면 이동해야 하는 횟수가 많아진다<br><br><br><b>쉘 정렬(shell sort)의 시간복잡도</b><br>Best : O(n) , Avg : O(n1.5) , Worst : O(n2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});