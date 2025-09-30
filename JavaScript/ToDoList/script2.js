let inp = document.querySelector(".inp");
let addTask = document.querySelector(".addTask");

addTask.addEventListener("click", (e) => {
  if (inp.value) {
    // console.log(inp.value);

    // createELe task  div
    let task = document.createElement("div");

    task.classList.add("task");
    //      createELe taskdes  p
    let taskDes = document.createElement("p");
    taskDes.classList.add("taskDes");
    taskDes.textContent = inp.value;

    task.appendChild(taskDes);

    //      createELe taskDel  btn
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.classList.add("delTask");

    task.appendChild(delBtn);

    document.querySelector(".box2").appendChild(task);
    console.log(task);
  }
});

//delete task
