<<<<<<< HEAD
// class Frame {
//     constructor(e, h) {
//         this.elements = [];
//         this.highlights = [];
//         this.information = "";

//         if (e != undefined && e.length) {
//             this.elements = e;
//         }

//         if (h != undefined && h.length) {
//             this.highlights = h;
//         }
//     }

//     addHighlights(highlights) {
//         for (const e of highlights) {
//             this.highlights.push(e);
//         }
//     }

//     addElements(elements) {
//         for (const e of elements) {
//             this.elements.push(e);
//         }
//     }
// }

// class Animation {
//     constructor() {
//         this.frames = [];
//     }

//     addFrame(frame) {
//         const temp = JSON.parse(JSON.stringify(frame)); // Only store a copy
//         this.frames.push(temp);
//     }    

//     getFrames() {
//         return this.frames;
//     }
// }

// class Algorithms {
//     static bubble(e, order) {
//         let elements = e;
//         let solution = new Animation();
//         let swapped = false;

//         for (let i = 0; i < elements.length; ++i) {
//             swapped = false;
//             for (let j = 0; j < elements.length - 1; ++j) {
//                 solution.addFrame(new Frame([], [j, j + 1]));

//                 if (order == "desc" ? elements[j] < elements[j + 1] : elements[j] > elements[j + 1]) {
//                     swapped = true;

//                     const temp = elements[j];
//                     elements[j] = elements[j + 1];
//                     elements[j + 1] = temp;

//                     solution.addFrame(new Frame([j, j + 1], [j, j + 1]));
//                 }
//             }

//             if (!swapped) {
//                 break;
//             }
//         }
//         return solution;
//     }
// }
=======
var str = [1, 2, 3]

$(document).ready(function () {
    $("#test1").click(function () {
        $("#main_right").html(str[1]);
    });
});
>>>>>>> 8dd183799b8d3d40a21ca19f1be1587dbbf763d2
