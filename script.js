document.addEventListener('DOMContentLoaded', function() {
	//create an element
	funtion write(){
	const ptag=document.CreateElement("p");
		//insert the content
		ptag.innerText= "DOM load success";
		//append to the body
		document.body.appendChild(paragraph);
	}
	//call the function
	write();
	
	
})
