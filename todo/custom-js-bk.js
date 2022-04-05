let snack = document.getElementById("snackbar");

taskArr = [];
let count = 0;

function addTaskList(taskName, countVal) {
  count = countVal;

  // li node created
  let linode = document.createElement("li");
  linode.classList.add("ckb_label");

  // label element for li created
  let labelNode = document.createElement("label");
  labelNode.setAttribute("for", `ckbox_${count + 1}`);

  // sno i created
  let snoNode = document.createElement("i");
  let snotextnode = document.createTextNode(count + 1);
  snoNode.appendChild(snotextnode);
  snoNode.classList.add("sno");

  // checkbox node created
  let checkBoxNode = document.createElement("input");
  checkBoxNode.type = "checkbox";
  checkBoxNode.name = "todocheckbox";
  checkBoxNode.value = "1";
  checkBoxNode.id = `ckbox_${count + 1}`;
  checkBoxNode.classList.add("hidden_field");

  // span checbox icon created
  let spanNode = document.createElement("span");

  // textnode for taskname created
  let textnode = document.createTextNode(taskName);

  // edit button create
  let editButton = document.createElement("button");
  editButton.setAttribute("id", `edit_btn_${count + 1}`);
  editButton.setAttribute("class", "btn_edit fa fa-pencil");

  // edit button create
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", `edit_btn_${count + 1}`);
  deleteButton.setAttribute("class", "btn_delete fa fa-trash");

  // label node append
  labelNode.append(checkBoxNode, textnode, spanNode);

  // all li node append
  linode.append(snoNode, labelNode, editButton, deleteButton);

  document.getElementById("nodeList").appendChild(linode);
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

};

// function myFunction(){
//     alert('Hello')
// }

// const element = document.querySelector(".btn_edit");
// element.addEventListener("click", function (){alert('this')});

// console.log(element)

for (i=0;i<=)