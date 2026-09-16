const ft_list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

let todos = [];

// โหลดข้อมูลจาก cookie
loadTodos();

// ปุ่ม New
newBtn.addEventListener("click", function () {

    let text = prompt("New TO DO:");

    if (text && text.trim() !== "") {

        todos.unshift(text);

        saveTodos();
        renderTodos();
    }
});

// แสดงรายการ
function renderTodos() {

    ft_list.innerHTML = "";

    todos.forEach((todo, index) => {

        const div = document.createElement("div");

        div.className = "todo";
        div.textContent = todo;

        div.addEventListener("click", function () {

            if (confirm("Delete this TO DO?")) {

                todos.splice(index, 1);

                saveTodos();
                renderTodos();
            }
        });

        ft_list.appendChild(div);
    });
}

// บันทึก cookie
function saveTodos() {

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        ";path=/";
}

// โหลด cookie
function loadTodos() {

    const cookies = document.cookie.split(";");

    for (let c of cookies) {

        c = c.trim();

        if (c.startsWith("todos=")) {

            const value = decodeURIComponent(
                c.substring(6)
            );

            todos = JSON.parse(value);

            renderTodos();

            return;
        }
    }
}