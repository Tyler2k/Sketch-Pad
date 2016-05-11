$(document).ready(function() {
    var selectedButton = "";
    // Displays the initial grid
    displayGrid(24);
    $(".square").mouseenter(function() {
        $(this).css("background", "white");
    });
    // Clears grid when clicks
    $(".clear").click(function() {
        cleanGrid();
    });
    // Resets to default white color
    $(".default").on("click", function() {
        selectedButton = "default";
        $(".input").show("slow");
        $("#text").keyup(function(e) { // Detects if user presses enter on keyboard instead of enter on screen
            if (e.keyCode === 13) {
                setGrid();
                start(selectedButton);
            }
        });
        $("#enter").on("click", function() {
            setGrid();
            start(selectedButton);
        });

        $("#text").val(""); // Erases value from text box for next use
    });

    // Leaves color trails
    $(".trail").click(function() {
        selectedButton = "trail";
        $(".input").show("slow");
        $("#text").keyup(function(e) { // Detects if user presses enter on keyboard instead of enter on screen
            if (e.keyCode === 13) {
                setGrid();
                start(selectedButton);
            }
        });
        $("#enter").on("click", function() {
            setGrid();
            start(selectedButton);
        });
        $("#text").val(""); // Erases value from text box for next use
    });

    // Displays a random color each time the mouse enters a square
    $(".random").click(function() {
        selectedButton = "random";
        $(".input").show("slow");
        $("#text").keyup(function(e) { // Detects if user presses enter on keyboard instead of enter on screen
            if (e.keyCode === 13) {
                setGrid();
                start(selectedButton);
            }
        });
        $("#enter").on("click", function() {
            setGrid();
            start(selectedButton);
        });
        $("#text").val(""); // Erases value from text box for next use
    });
});

// Calculates box size and creates divs accordingly
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

function setGrid() {
    var size = document.getElementById("text").value;
    displayGrid(size);
    cleanGrid();
    $(".input").hide("slow");

}

function cleanGrid() {
    $(".square").css("background", "#004080").css('opacity', '1');
}
// Creates a random rgb color
function randomColor() {
    var red = Math.floor(Math.random() * 256) + 1
    var blue = Math.floor(Math.random() * 256) + 1
    var green = Math.floor(Math.random() * 256) + 1
    return "#" + red.toHex() + blue.toHex() + green.toHex();
}

// Converts rgb color to hex
Number.prototype.toHex = function() {
        if (this < 16) {
            return "0" + this.toString(16);
        } else {
            return this.toString(16);
        }

    }
// Starts sketch based on what button the user selected
function start(button) {
    if (button == "default") {
        $(".square").mouseenter(function() {
            $(this).css("background", "white");
        });
    } else if (button == "trail") {
        $(".square").hover(function() {
            $(this).css("opacity", 0);
        }, function() {
            $(this).fadeTo('slow', 1);
        });
    } else if (button == "random") {
        $(".square").mouseenter(function() {
            $(this).css("background", randomColor());
        });
    }
}