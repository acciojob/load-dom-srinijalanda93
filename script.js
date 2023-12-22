document.addEventListener('DOMContentLoaded', function() {
    // Create an element
    function write() {
        const ptag = document.createElement("p");
        
        // Insert the content
        ptag.innerText = "DOM load success";
        
        // Append to the body
        document.body.appendChild(ptag); // Use ptag instead of paragraph
    }

    // Call the function
    write();
});
