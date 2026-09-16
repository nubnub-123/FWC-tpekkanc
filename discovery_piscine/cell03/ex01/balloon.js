const balloon = document.getElementById("balloon");

let size = 200;

const colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", function ()
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

balloon.addEventListener("mouseleave", function ()
{
    if (size > 200)
    {
        size -= 5;
    }

    colorIndex = (colorIndex + 2) % 3;

    updateBalloon();
});

function updateBalloon()
{
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}