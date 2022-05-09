// Swap HTML elements
$.fn.swap = function (elem) {
    elem = elem.jquery ? elem : $(elem);
    return this.each(function () {
        $(document.createTextNode(""))
            .insertBefore(this)
            .before(elem.before(this))
            .remove();
    });
};

let ANIMATION_FRAMES = [];
function animate(solution) {
    ANIMATION_FRAMES = [];

    // Add empty frame at the end
    solution.addFrame(new Frame());

    const frames = solution.getFrames();
    console.log("ddd : " + frames.length);
    for (let i = 0; i < frames.length; ++i) {

        (function (frames, i, bars, ANIMATION_FRAMES, SPEED, TOTAL_ELEMENTS) {
            //요소 개수에 따라서 속도 달라지는 부분
            if (TOTAL_ELEMENTS <= 15) {
                ANIMATION_FRAMES.push(
                    setTimeout(function () {
                        $(".bar").removeClass("compared");
                        const lastFrame = i == frames.length - 1;
                        const elem = frames[i].elements;
                        const highlight = frames[i].highlights;

                        console.log("elem : ", elem, " highlight : ", highlight);

                        // Highlight compared elements
                        if (highlight.length) {
                            for (h = 0; h < highlight.length; ++h) {
                                $(bars[highlight[h]]).addClass("compared");
                            }
                        }

                        // swap : Array에서 두 요소를 바꾸기 위하여 사용 
                        // Swap compared elements
                        // 요소를 변경 하는 코드, 요소가 변경 됬을 경우 변경된 요소의 색상을 바꿈
                        if (elem.length) {
                            $(bars[elem[1]]).swap(bars[elem[0]]);
                            // $(bars[elem[0]]).addClass("completion");
                            console.log("elem : ", elem, " highlight : ", highlight);
                        }


                        if (i == (frames.length - 1)) {
                            $(bars).addClass("completion")
                        }

                        // removeclass : 선택된 요소 값의 클래스를 제거 할 수 있다.
                        // Disable stop button once animation ends
                        if (lastFrame) {
                            $("#stop")
                                .attr("disabled", true)
                                .removeClass("green");
                        }
                    }, SPEED * TOTAL_ELEMENTS * i)
                );
            }
            else if (TOTAL_ELEMENTS <= 25) {
                ANIMATION_FRAMES.push(
                    setTimeout(function () {
                        $(".bar").removeClass("compared");
                        const lastFrame = i == frames.length - 1;
                        const elem = frames[i].elements;
                        const highlight = frames[i].highlights;

                        // Highlight compared elements
                        if (highlight.length) {
                            for (h = 0; h < highlight.length; ++h) {
                                $(bars[highlight[h]]).addClass("compared");
                            }
                        }

                        // Swap compared elements
                        if (elem.length) {
                            $(bars[elem[1]]).swap(bars[elem[0]]);
                        }

                        // Disable stop button once animation ends
                        if (lastFrame) {
                            $("#stop")
                                .attr("disabled", true)
                                .removeClass("green");
                        }
                    }, (SPEED * TOTAL_ELEMENTS / 80) * TOTAL_ELEMENTS * i)
                );
            }
            else {
                ANIMATION_FRAMES.push(
                    setTimeout(function () {
                        $(".bar").removeClass("compared");
                        const lastFrame = i == frames.length - 1;
                        const elem = frames[i].elements;
                        const highlight = frames[i].highlights;

                        // Highlight compared elements
                        if (highlight.length) {
                            for (h = 0; h < highlight.length; ++h) {
                                $(bars[highlight[h]]).addClass("compared");
                            }
                        }

                        // Swap compared elements
                        if (elem.length) {
                            $(bars[elem[1]]).swap(bars[elem[0]]);
                        }

                        // Disable stop button once animation ends
                        if (lastFrame) {
                            $("#stop")
                                .attr("disabled", true)
                                .removeClass("green");
                        }
                    }, (SPEED * TOTAL_ELEMENTS / 150) * TOTAL_ELEMENTS * i)
                );
            }
        })(frames, i, bars, ANIMATION_FRAMES, SPEED, TOTAL_ELEMENTS);
    }
}

function stopAnimation() {
    for (let i = 0; i < ANIMATION_FRAMES.length; ++i) {
        clearTimeout(ANIMATION_FRAMES[i]);
    }

    $(".bar").removeClass("compared");
    disableInput(false);
}
