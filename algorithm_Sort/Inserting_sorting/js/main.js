
// 정렬 설명
// str[0] = 선택 정렬 
var str = ['<b>이것은 삽입정렬입니다.</b><br>삽입 정렬(Inserting sort)이란 정렬이 되어있지 않은 부분의 데이터를 뽑아서 정렬된 부분의 적절한 위치에 삽입하는 방법이다.<br><br><b>삽입 정렬(Inserting sort) 알고리즘의 특징</b><br>장점 : 대부분의 원소가 이미 정렬되어 있는 경우, 매우 효율적일 수 있다.<br>Selection Sort나 Bubble Sort과 같은 O(n^2) 알고리즘에 비교하여 상대적으로 빠르다.<br>단점 : 평균과 최악의 시간복잡도가 O(n^2)으로 비효율적이다.<br>Bubble Sort와 Selection Sort와 마찬가지로, 배열의 길이가 길어질수록 비효율적이다.<br><br><b>삽입 정렬(Inserting sort)의 시간복잡도</b><br>Best : O(n) , Avg : O(n^2) , Worst : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});