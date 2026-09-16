function calculate()
{
    let left = Number($("#left").val());
    let right = Number($("#right").val());
    let op = $("#operator").val();

    if (
        !Number.isInteger(left) ||
        !Number.isInteger(right) ||
        left < 0 ||
        right < 0
    )
    {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && right === 0)
    {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (op)
    {
        case "+":
            result = left + right;
            break;

        case "-":
            result = left - right;
            break;

        case "*":
            result = left * right;
            break;

        case "/":
            result = left / right;
            break;

        case "%":
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
}

$("#tryme").click(calculate);

setInterval(function ()
{
    alert("Please, use me...");
}, 30000);