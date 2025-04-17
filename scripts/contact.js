// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitBtn = document.getElementById("submit-button")

submitBtn.addEventListener("click", function (){
    const replacePage = document.getElementById("contact-page")
    const submitMsg = document.createElement("p")
    submitMsg.style.fontSize = "24px"
    submitMsg.style.textAlign = "center"
    submitMsg.textContent = "Thank you for your message!"
    replacePage.replaceWith(submitMsg)
})


