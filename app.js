

function openTasks(index) {
        let elem = document.getElementById('tasks' + index)
        let display = elem.style.display
        elem.style.display = (display === "block") ? "none" : "block"
}
                
