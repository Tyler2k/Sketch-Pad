$(document).ready(function() {
    displayGrid(24);

    $(".square").mouseenter(function() {
        $(this).css("background", "white");
    });

    $(".clear").click(function() {
        cleanGrid();
    });

    $(".custom").on("click", function() {
        $(".input").show("slow");
        $("#enter").on("click", function() {
            var size = document.getElementById("text").value;
            setGrid(size);
            $(".square").mouseenter(function() {
                $(this).css("background", "white");
            });
        });
        $("#text").val("");
    });

    $(".trail").click(function() {
        $(".input").show("slow");
        $(".square").unbind();
        $("#enter").on("click", function() {
            var size = document.getElementById("text").value;
            setGrid(size);
            $(".square").hover(function() {
                $(this).css("opacity", 0);
            }, function() {
                $(this).fadeTo('fast', 1);
            });
        });
        $("#text").val("");
    });

    $(".random").click(function() {
        $(".input").show("slow");
        $("#enter").on("click", function() {
            var size = document.getElementById("text").value;
            setGrid(size);
            $(".square").mouseenter(function() {
                $(this).css("background", randomColor());
            });
        });
        $("#text").val("");
    });
});

function displayGrid(columns) {
    var grid = $(".grid").html("");
    var boxSize = grid.width() / columns - 2;
    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < columns; j++) {
            grid.append($("<div class='square'></div>").height(boxSize).width(boxSize));
        }
    }
    $("#text").attr("placeholder", "How many columns? (1-99)");
}

function setGrid(num) {
    displayGrid(num);
    cleanGrid();
    $(".input").hide("slow");

}

function cleanGrid() {
    $(".square").css("background", "#004080").css('opacity', '1');
}

function randomColor() {
    var red = Math.floor(Math.random() * 256) + 1
    var blue = Math.floor(Math.random() * 256) + 1
    var green = Math.floor(Math.random() * 256) + 1
    return "#" + red.toHex() + blue.toHex() + green.toHex();
}

Number.prototype.toHex = function() {
    if (this < 16) {
        return "0" + this.toString(16);
    } else {
        return this.toString(16);
    }

}