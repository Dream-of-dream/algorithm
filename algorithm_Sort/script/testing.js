// this is a draft file to test functionalities of upcoming/ongoing algos

function runTest() {
    disableInput();
    var origin = getElements();
    var origin_copy = JSON.parse(JSON.stringify(origin));
    var solution = shell(origin_copy);
    if (solution) {
        try {
            animate(origin, solution);
            console.log(solution);
        } catch (e) {}
    }
}

function mergeSort(e) {
    if (e.length <= 1) {
        return e;
    }
    let elements = e;

    const mid = Math.floor(elements.length / 2),
        left = elements.slice(0, mid),
        right = elements.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let solution = new Array(),
        li = 0,
        ri = 0;

    while (li < left.length && ri < right.length) {
        if (left[li] > right[ri]) {
            solution.push(left[li]);
            ++li;

            continue;
        }

        solution.push(right[ri]);
        ++ri;
    }

    return solution.concat(left.slice(li)).concat(right.slice(ri));
}


// else if (TOTAL_ELEMENTS <= 25) {
//     ANIMATION_FRAMES.push(
//         setTimeout(function () {
//             $(".bar").removeClass("compared");
//             const lastFrame = i == frames.length - 1;
//             const elem = frames[i].elements;
//             const highlight = frames[i].highlights;

//             // Highlight compared elements
//             if (highlight.length) {
//                 for (h = 0; h < highlight.length; ++h) {
//                     $(bars[highlight[h]]).addClass("compared");
//                 }
//             }

//             // Swap compared elements
//             if (elem.length) {
//                 $(bars[elem[1]]).swap(bars[elem[0]]);
//             }

//             // Disable stop button once animation ends
//             if (lastFrame) {
//                 $("#stop")
//                     .attr("disabled", true)
//                     // .removeClass("green");
//             }
//         }, (SPEED * TOTAL_ELEMENTS / 80) * TOTAL_ELEMENTS * i)
//     );
// }
// else {
//     ANIMATION_FRAMES.push(
//         setTimeout(function () {
//             $(".bar").removeClass("compared");
//             const lastFrame = i == frames.length - 1;
//             const elem = frames[i].elements;
//             const highlight = frames[i].highlights;

//             // Highlight compared elements
//             if (highlight.length) {
//                 for (h = 0; h < highlight.length; ++h) {
//                     $(bars[highlight[h]]).addClass("compared");
//                 }
//             }

//             // Swap compared elements
//             if (elem.length) {
//                 $(bars[elem[1]]).swap(bars[elem[0]]);
//             }

//             // Disable stop button once animation ends
//             if (lastFrame) {
//                 $("#stop")
//                     .attr("disabled", true)
//                     .removeClass("green");
//             }
//         }, (SPEED * TOTAL_ELEMENTS / 150) * TOTAL_ELEMENTS * i)
//     );
// }