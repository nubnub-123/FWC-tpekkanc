let size = 200;

const colors = ["red", "green", "blue"];
let colorIndex = 0;

function updateBalloon()
{
    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        backgroundColor: colors[colorIndex]
    });
}

$("#balloon").click(function ()
{
    size += 10;

    if (size > 420)
    {
        size = 200;
        colorIndex = 0;
    }
    else
    {
        colorIndex = (colorIndex + 1) % 3;
    }

    updateBalloon();
});

$("#balloon").mouseleave(function ()
{
    if (size > 200)
        size -= 5;

    colorIndex = (colorIndex + 2) % 3;

    updateBalloon();
});