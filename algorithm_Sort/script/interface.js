CURRENT_SET = new Set();

(function init() {
    updateSpeed();
    updateElements();
})();

// Add bind events on UI elements
$("#speed").on("input", function() {
    updateSpeed();
});

$("#elements").on("input", function() {
    updateElements();
});

$("#algorithms").on("change", function() {
    showDetails();
});

$("#sort").on("click", function() {
    runAlgo();
});

$("#stop").on("click", function() {
    stopAnimation();
});

$("#reset").on("click", function() {
    reset();
});

$("#restart").on("click", function() {
    restart();
});

function updateSpeed() {
    SPEED = document.getElementById("speed").value;
    document.getElementById("speed-count").innerHTML = 101 - SPEED;
}

function updateElements() {
    clearContainer();
    TOTAL_ELEMENTS = document.getElementById("elements").value;
    document.getElementById("element-count").innerHTML = TOTAL_ELEMENTS;
    CURRENT_SET = generateRandomSet();
    insertBars(CURRENT_SET);
}

function generateRandomSet() {
    let set = new Set();
    while (set.size < TOTAL_ELEMENTS) {
        set.add(Math.round(Math.random() * 99) + 1);
    }

    return set;
}

function clearContainer() {
    container.innerHTML = "";
}

function insertBars(set) {
    const width = CONTAINER_WIDTH / TOTAL_ELEMENTS;

    // Generate bars
    const arr = Array.from(set);
    for (let i = 0; i < arr.length; ++i) {
        let bar = document.createElement("div");
        bar.setAttribute("class", "bar");
        bar.setAttribute("style", "width: " + width + "px; height: " + (arr[i] + 5) + "%;");
        bar.innerHTML = arr[i];
        container.appendChild(bar);
    }
}



function disableInput(what = true) {
    $(".sort").attr("disabled", what);
    $(".slider-input").attr("disabled", what);
    $("select#algorithms").attr("disabled", what);
    $("select#order").attr("disabled", what);

    // Swap colors
    $("#stop")
        .attr("disabled", true)
        .removeClass("green");

    if (what) {
        $(".sort").removeClass("green");
        $("#stop")
            .attr("disabled", false)
            .addClass("green");

        return;
    }

    $(".sort").addClass("green");
}

function reset() {
    stopAnimation();
    updateSpeed();
    updateElements();
}

function restart() {
    stopAnimation();
    clearContainer();
    insertBars(CURRENT_SET);
    disableInput(false);
}

function runAlgo() {
    if (SPEED <= 0) {
        console.log("Abnormal delay.");
        return;
    }
    //각 정렬 홈페이지에서 숨겨진 div태그안에 text가져와서 그에 맞는 알고리즘 초기화
    const algo = document.getElementById("algo").innerText;

    const order = $("select#order")
        .children("option:selected")
        .val();

    let elements = JSON.parse(JSON.stringify(getElements()));
    const solution = solve(algo, order, elements);

    if (solution) {
        disableInput();
        animate(solution);
    }

    function getElements() {
        let els = Array();

        for (let i = 0; i < bars.length; ++i) {
            els.push(parseInt(bars[i].innerHTML));
        }

        return els;
    };
    
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

    console.log("CONTAINER_WIDTH : " + CONTAINER_WIDTH);
    console.log("TOTAL_ELEMENTS : " + TOTAL_ELEMENTS);
    console.log("SPEED : " + SPEED);
    console.log("container : " + container);
    console.log("bars : " + bars);
    console.log("-----------------------------------");
}