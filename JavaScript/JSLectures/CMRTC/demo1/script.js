/* 
nput type="text" class="inp" />
		<button class="btn">click</button>
		<p class="ans">

*/
let inpEle = document.querySelector(".inp");
let btnEle = document.querySelector(".btn");
let ansEle = document.querySelector(".ans");

btnEle.addEventListener("click", (e) => {
	console.log(inpEle.value);
});
// inpEle.value = "asdfghjk";
console.log(inpEle);

inpEle.addEventListener("keyup", (event) => {
	// console.log(event.target.value);
	// console.log(inpEle.value);
	let email = event.target.value;
	let ans = `${email}`.match(/[a-z0-9]+@[a-z]{3,5}\.com/);
	if (ans != null) {
		console.log("✅✅✅✅");
		ansEle.textContent =ansEle.textContent+  "\n" + ans;
	}
});
console.log(inpEle.value);
