let inp = document.querySelector(".inp");
let addTask = document.querySelector(".addTask");

function checkBegin(tasks) {
	if (!tasks) {
		return;
	}
	let tasksArr = tasks.split(",");
	tasksArr.forEach((element) => {
		// console.log(inp.value);

		// createELe task  div
		let task = document.createElement("div");

		task.classList.add("task");
		//      createELe taskdes  p
		let taskDes = document.createElement("p");
		taskDes.classList.add("taskDes");
		taskDes.textContent = element + " " + new Date().toLocaleDateString();

		task.appendChild(taskDes);

		//      createELe taskDel  btn
		let delBtn = document.createElement("button");
		delBtn.textContent = "❌";
		delBtn.classList.add("delTask");

		task.appendChild(delBtn);

		document.querySelector(".box2").appendChild(task);
		delBtn.addEventListener("click", (e) => {
			console.log(e.target.parentElement);

			delBtn.parentElement.remove();
		});
		console.log(task);
	});
}
checkBegin(localStorage.getItem("tasks"));

addTask.addEventListener("click", (e) => {
	if (inp.value) {
		// store this in localstorage also
		let tasksArr = localStorage.getItem("tasks").split(",");
		let newArr = [inp.value, ...tasksArr];
		localStorage.setItem("tasks", newArr.toString());

		// console.log(inp.value);

		// createELe task  div
		let task = document.createElement("div");

		task.classList.add("task");
		//      createELe taskdes  p
		let taskDes = document.createElement("p");
		taskDes.classList.add("taskDes");
		taskDes.textContent = inp.value + " " + new Date().toLocaleDateString();

		task.appendChild(taskDes);

		//      createELe taskDel  btn
		let delBtn = document.createElement("button");
		delBtn.textContent = "❌";
		delBtn.classList.add("delTask");

		task.appendChild(delBtn);

		document.querySelector(".box2").appendChild(task);
		delBtn.addEventListener("click", (e) => {
			console.log(e.target.parentElement);

			delBtn.parentElement.remove();
		});
		console.log(task);
	}
});

// let tt = document.querySelector(".taskTemp");
// // tt.remove();
// localStorage.setItem("v1", JSON.stringify({ a: 12, b: "123" }));

// let d = JSON.parse(localStorage.getItem("v1"));
// console.log(d);

// let s = document.querySelectorAll("button");
// console.log(s.parentElement);

// console.log(addTask.parentElement);
// // addTask.parentElement.remove();
let arr = ["hi", "hello"];
console.log(arr.toString());
console.log(arr.toString().split(","));
localStorage.setItem("tasks", arr.toString());
