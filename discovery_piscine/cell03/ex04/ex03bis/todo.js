let todos = [];

loadTodos();

$("#newBtn").click(function ()
{
    let text = prompt("New TO DO:");

    if (text && text.trim() !== "")
    {
        todos.unshift(text.trim());

        saveTodos();
        renderTodos();
    }
});

function renderTodos()
{
    $("#ft_list").empty();

    $.each(todos, function (index, todo)
    {
        $("<div>")
            .addClass("todo")
            .text(todo)
            .click(function ()
            {
                if (confirm("Delete this TO DO?"))
                {
                    todos.splice(index, 1);

                    saveTodos();
                    renderTodos();
                }
            })
            .appendTo("#ft_list");
    });
}

function saveTodos()
{
    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        ";max-age=31536000;path=/";
}

function loadTodos()
{
    const match = document.cookie.match(
        /(?:^|;\s*)todos=([^;]+)/
    );

    if (match)
    {
        todos = JSON.parse(
            decodeURIComponent(match[1])
        );

        renderTodos();
    }
}