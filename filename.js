function sayHello()
{
	// alert("It's funny to study programming")
	const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
}
// const list = document.getElementById("list");

// list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;