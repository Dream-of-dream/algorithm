
// 정렬 설명
// str[0] = 콤브 정렬 
var str = ['<b>이것은 콤브정렬입니다.</b><br>콤브 정렬(comb sort)이란 특정한 감소량을 통해 차이를 줄여가며 서로 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환하여 정렬하는 알고리즘입니다..<br><br><b>콤브 정렬(comb sort) 알고리즘의 특징</b><br>장점 : 1. 버블 정렬의 답답함을 해결하기 위해 고안된 비교적 간단한 정렬이다.<br>단점 : 1.stable sort가 아니다<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.즉 알고리즘들의 순서가 항상 같지 않기 때문에 안정성이 비교적 떨어집니다.<br><br><b>콤브 정렬(comb sort)의 시간복잡도</b><br>O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});