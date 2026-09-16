const ft_list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

let todos = [];

// โหลดข้อมูลจาก cookie ตอนเปิดหน้าเว็บ
loadTodos();

// ปุ่ม New
newBtn.addEventListener("click", function () {

    let text = prompt("New TO DO:");

    if (text && text.trim() !== "") {

        todos.unshift(text.trim());

        saveTodos();
        renderTodos();
    }
});

// แสดงรายการทั้งหมด
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

// บันทึกลง Cookie
function saveTodos() {

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        ";max-age=31536000;path=/";
}

// โหลดจาก Cookie
function loadTodos() {

    const match = document.cookie.match(
        /(?:^|;\s*)todos=([^;]+)/
    );

    if (match) {

        todos = JSON.parse(
            decodeURIComponent(match[1])
        );

        renderTodos();
    }
}