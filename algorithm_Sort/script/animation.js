// Swap HTML elements
$.fn.swap = function(elem) {
    elem = elem.jquery ? elem : $(elem);
    return this.each(function() {
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
        (function(frames, i, bars, ANIMATION_FRAMES, SPEED, TOTAL_ELEMENTS) {
            //요소 개수에 따라서 속도 달라지는 부분
            if(TOTAL_ELEMENTS <= 15){
            ANIMATION_FRAMES.push(
                setTimeout(function() {
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
                }, SPEED * TOTAL_ELEMENTS * i)
            );
            }
            else if(TOTAL_ELEMENTS <= 25){
                ANIMATION_FRAMES.push(
                    setTimeout(function() {
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
                    }, (SPEED*TOTAL_ELEMENTS/80) * TOTAL_ELEMENTS * i)
                );
            }
            else {
                ANIMATION_FRAMES.push(
                    setTimeout(function() {
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
                    }, (SPEED*TOTAL_ELEMENTS/150) * TOTAL_ELEMENTS * i)
                );
            }
        })(frames, i, bars, ANIMATION_FRAMES, SPEED , TOTAL_ELEMENTS);
    }
}

function stopAnimation() {
    for (let i = 0; i < ANIMATION_FRAMES.length; ++i) {
        clearTimeout(ANIMATION_FRAMES[i]);
    }

    $(".bar").removeClass("compared");
    disableInput(false);
}
