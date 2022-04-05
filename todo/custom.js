let snack = document.getElementById("snackbar");

taskArr = [];
let count = 0;
edit_buttons = []
function addTaskList(taskName, countVal) {
  count = countVal;
  document.getElementById('nodeList').innerHTML+=
  `<li>
  <i class="sno">${countVal+1}</i>
  <label for="ckbox_${countVal+1}" class="ckb_label">
    <input type="checkbox" name="todo_checkbox" id="ckbox_${countVal+1}" class="hidden_field" name="todocheckbox" />
    ${taskName}
    <span></span>
  </label>

  <button class="btn_edit" id="edit_btn_${countVal+1}"><i class="fa fa-pencil"></i></button>
  <button class="btn_delete" id="delete_btn_${countVal+1}"><i class="fa fa-trash"></i></button>
</li>`;
edit_buttons.push(`edit_btn_${countVal+1}`)
}

document.getElementById("btnAddTask").onclick = function () {
  let task = document.getElementById("taskTextbox").value;
  if (task == "") {
    snack.innerText = "Please enter value for task add";
    snack.style.background = "red";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 2000);
    document.getElementById("taskTextbox").classList.add("fill_this");
    document.getElementById("taskTextbox").focus();
  } else if (taskArr.includes(task) || taskArr.includes(task.toLowerCase())) {
    snack.innerText = "already include";
    snack.style.background = "goldenrod";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 2000);
    document.getElementById("taskTextbox").value = "";
  } else {
    document.getElementById("noTaskLi").style.display = "none";
    taskArr.push(task);
    item_index = taskArr.indexOf(task);
    addTaskList(task, item_index);
    snack.innerText = "task added successfully";
    snack.style.background = "green";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 2000);
    console.log(taskArr);

    document.getElementById("taskTextbox").value = "";
  }

  alert(edit_buttons)
};

document.getElementById('taskTextbox').onkeyup = function(){
  this.classList.remove("fill_this")
}

