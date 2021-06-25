console.log("hello world");

const picture = document.querySelector("#cool-cat")

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
picture.addEventListener("mouseover", () => {
	alert("You have a smile so bright, we need sunglasses to look at you!")
})
