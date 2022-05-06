// Set 객체는 JS의 표준내장객체 중 하나
// Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다. 
// 즉, 어떤 값은 그 Set 콜렉션 내에서 유일
CURRENT_SET = new Set();

//TODO 초기 설정
(function init() {
    updateSpeed();
    updateElements();
})();

//TODO create 버튼 클릭시 이벤트 발생
$("#create").on("click", function () {
    console.log("버튼 클릭");
    userCreate();
});

//TODO speed 버튼 클릭시 이벤트 발생
$("#speed").on("input", function () {
    updateSpeed();
});

//TODO elements 버튼 클릭시 이벤트 발생
$("#elements").on("input", function () {
    updateElements();
});

//TODO algorithms 버튼 클릭시 이벤트 발생
$("#algorithms").on("change", function () {
    showDetails();
});

//TODO sort 버튼 클릭시 이벤트 발생
$("#sort").on("click", function () {
    runAlgo();
});

//TODO stop 버튼 클릭시 이벤트 발생
$("#stop").on("click", function () {
    stopAnimation();
});

//TODO reset 버튼 클릭시 이벤트 발생
$("#reset").on("click", function () {
    reset();
});

//TODO restart 버튼 클릭시 이벤트 발생
$("#restart").on("click", function () {
    restart();
});

function userCreate() {
    document.getElementById("userOrRandom").innerHTML = "U";

    USER_INPUT = prompt("원하는 숫자들을 ,로 구분하고 입력해주세요", "99,50,15,20,30,70,74,18,97,16,8,87,75");
    CURRENT_SET = USER_INPUT.split(",");
    TOTAL_ELEMENTS = CURRENT_SET.length;

    for(var i =0; i<TOTAL_ELEMENTS;i++){
        if(CURRENT_SET[i] < 5){
            alert("정수의 값은 5 ~ 100 사이 정수이여야 합니다.")
            return;
        }else if(CURRENT_SET[i] > 100){
            alert("정수의 값은 5 ~ 100 사이 정수이여야 합니다.")
            return;
        }
    }
    if(TOTAL_ELEMENTS > 50){
        alert("정수의 개수는 5개 초과 50개 미만이여야 합니다.")
        return;
    }else if(TOTAL_ELEMENTS < 5){
        alert("정수의 개수는 5개 초과 50개 미만이여야 합니다.")
        return;
    }

    // container clear
    clearContainer();

    console.log(CURRENT_SET);
    // 화면에 bar가 나타나도록 하는 함수 실행 (value로 현재 value의 집합 CURRENT_SET를 넘김)
    insertBars(CURRENT_SET);
}

//TODO speed slider 클릭시 이벤트 발생
function updateSpeed() {
    // index.html에 정의된 SPEED를 speed value로 초기화
    SPEED = document.getElementById("speed").value;
    // speed-count value update(101 - SPEED로)
    document.getElementById("speed-count").innerHTML = 101 - SPEED;
}

//TODO elements slider 클릭시 이벤트 발생
function updateElements() {
    document.getElementById("userOrRandom").innerHTML = "R";
    // container clear
    clearContainer();
    // TOTAL_ELEMENTS가 elements value 가져옴
    TOTAL_ELEMENTS = document.getElementById("elements").value;
    // element-count value update(TOTAL_ELEMENTS으로)
    document.getElementById("element-count").innerHTML = TOTAL_ELEMENTS;
    console.log(TOTAL_ELEMENTS);
    // elements value만큼 random value를 가져옴(CURRENT_SET으로)
    CURRENT_SET = generateRandomSet();
    // 화면에 bar가 나타나도록 하는 함수 실행 (value로 현재 value의 집합 CURRENT_SET를 넘김)
    insertBars(CURRENT_SET);
}

// elements value만큼 random value를 가져오는 함수
function generateRandomSet() {
    let set = new Set();
    while (set.size < TOTAL_ELEMENTS) {
        set.add(Math.round(Math.random() * 99) + 1);
    }

    return set;
}

// container clear 함수
function clearContainer() {
    container.innerHTML = "";
}


function insertBars(set) {
    const userOrRandom = document.getElementById("userOrRandom").innerText;

    // container 길이 / 요소의 개수 -> 한 요소가 차지하는 가로길이
    const width = CONTAINER_WIDTH / TOTAL_ELEMENTS;
    console.log("userOrRandom : " + userOrRandom);
    // 화면에 나타나는 bar create
    const arr = Array.from(set);
    // elements의 개수만큼 반복
    for (let i = 0; i < arr.length; ++i) {
        // div속성인 bar 변수 생성
        let bar = document.createElement("div");
        // calss : bar로 설정
        bar.setAttribute("class", "bar");
        // style : 가로,세로 길이(세로 길이는 value에 영향을 받음)
        if (userOrRandom === "R") {
            bar.setAttribute("style", "width: " + width + "px; height: " + (arr[i] + 5) + "%;");
        } else {
            bar.setAttribute("style", "width: " + width + "px; height: " + (arr[i]) + "%;");
        }
        // bar에 표시되는 숫자
        bar.innerHTML = arr[i];
        // container에 부착(container는 화면에 나타나는 layout)
        container.appendChild(bar);
    }
}

// button, slider의 status 변경(defult true)
function disableInput(what = true) {
    // sort, slider-input, algorithms(알고리즘 선택), order disabled(what)
    $(".sort").attr("disabled", what);
    $(".slider-input").attr("disabled", what);
    $("select#algorithms").attr("disabled", what);
    $("select#order").attr("disabled", what);

    // stop button을 누르지 못하도록 변경,green css 삭제
    $("#stop")
        .attr("disabled", true)
        .removeClass("green");

    if (what) {
        // sort의 green css remove
        // stop의 disbled false로 update, green css 부착
        $(".sort").removeClass("green");
        $("#stop")
            .attr("disabled", false)
            .addClass("green");

        return;
    }
    // sort에 green css 부착
    $(".sort").addClass("green");
}

// TODO reset버튼 click시 발생하는 event
function reset() {
    // animation.js에 있는 stopAnimation함수 실행
    stopAnimation();
    // updateSpeed 함수, updateElements 실행
    updateSpeed();
    updateElements();
}

// TODO restart버튼 click시 발생하는 event
function restart() {
    // animation.js에 있는 stopAnimation함수 실행
    stopAnimation();
    // container clear
    clearContainer();
    // container에 bar부착 (CURRENT_SET을 매개변수로 넘김)
    insertBars(CURRENT_SET);
    // button, slider의 status 변경
    disableInput(false);
}

// sort button click시 실행되는 함수
function runAlgo() {
    // 만약 SPEED가 0보다 작거나 같다면 출력하고 종료
    if (SPEED <= 0) {
        console.log("Abnormal delay.");
        return;
    }

    //각 정렬 홈페이지에서 숨겨진 div태그안에 text가져와서 그에 맞는 알고리즘 초기화
    const algo = document.getElementById("algo").innerText;

    // order 변수 생성 (현재 무슨 정렬인지)
    const order = $("select#order")
        .children("option:selected")
        .val();


    // let elements = JSON.parse(JSON.stringify(getElements()));
    let elements = getElements();
    const solution = solve(algo, order, elements);
    console.log("getElements() : " + getElements());
    console.log("JSON.stringify() : " + JSON.stringify(getElements()));
    console.log("JSON.parse(JSON.stringify(getElements())) : " + JSON.parse(JSON.stringify(getElements())));

    if (solution) {
        // button, slider의 status 변경
        disableInput();
        // 동작과정 보여주기 실행
        animate(solution);
    }

    // 자신의 요소의 개수를 반환하는 함수
    function getElements() {
        let els = Array();
        for (let i = 0; i < bars.length; ++i) {
            els.push(parseInt(bars[i].innerHTML));
        }
        return els;
    };

    // 어떤 알고리즘을 선택했는지 확인하는 함수
    function solve(algo, order, input) {
        switch (algo) {
            case "bubble": {
                return Algorithms.bubble(input, order);
            }
            case "comb": {
                return Algorithms.comb(input, order);
            }
            case "heap": {
                return Algorithms.heap(input, order);
            }
            case "insertion": {
                return Algorithms.insertion(input, order);
            }
            case "selection": {
                return Algorithms.selection(input, order);
            }
            case "shell": {
                return Algorithms.shell(input, order);
            }
            default: {
                return false;
            }
        }
    }

    // console.log("CONTAINER_WIDTH : " + CONTAINER_WIDTH);
    // console.log("TOTAL_ELEMENTS : " + TOTAL_ELEMENTS);
    // console.log("SPEED : " + SPEED);
    // console.log("container : " + container);
    // console.log("bars : " + bars);
    // console.log("-----------------------------------");
}
