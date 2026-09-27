 function calculateArea() {
            // Get the radius from the user using the prompt() function
             let radius = prompt("Enter the radius of the circle:");
	        radius = Number(radius);
	        let area = Math.PI * radius * radius;
	         document.body.innerText = `The area of the circle with radius ${radius} is ${area.toFixed(2)}`;
	 
            
         
}
calculateArea();
