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
    for (let i = 0; i < frames.length; ++i) {
        (function (frames, i, bars, ANIMATION_FRAMES, SPEED, TOTAL_ELEMENTS) {
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

                    // swap : Array에서 두 요소를 바꾸기 위하여 사용 
                    // Swap compared elements
                    // 요소를 변경 하는 코드, 요소가 변경 됬을 경우 변경된 요소의 색상을 바꿈
                    if (elem.length) {
                        $(bars[elem[1]]).swap(bars[elem[0]]);
                        $(bars[elem[0]]).addClass("completion");
                    }

            
                    if(i == (frames.length -1)) {
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
