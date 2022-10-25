import "./contactForm.scss"


let ContactForm = function() {

    let element = document.createElement("form")
    element.classList.add("contactForm")

    element.innerHTML = `
    <div class="contactForm__group">
        <label for="firstname">Firstname:</label>
        <input type="text" name="firstname" id="firstname" required minlength="2">
    </div>
    <div class="contactForm__group">
        <label for="lastname">Lastname:</label>
        <input type="text" name="lastname" id="lastname" required minlength="3">
    </div>
    <div class="contactForm__group">
        <label for="address">Address:</label>
        <input type="text" name="address" id="address">
    </div>
    <div class="contactForm__group">
        <label for="postalcode">Postalcode:</label>
        <input title="Insert a four digit number..." type="text" name="postalcode" id="postalcode" pattern="[0-9]{4}">
    </div>
    <div class="contactForm__group">
        <label for="city">City:</label>
        <input type="text" name="city" id="city" minlength="3">
    </div>
    <div class="contactForm__group">
        <label for="email">Email:</label>
        <input title="Write a valid email adress" type="emal" name="email" id="email" required pattern="[A-Za-z0-9-._+]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,}">
    </div>
    <div class="contactForm__group">
        <label for="phone">Phone number:</label>
        <input type="tel" name="phone" id="phone" minlength="6">
    </div>
    <div class="contactForm__group">
        <label for="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10" required minlength="10" placeholder="Write message here... "></textarea>
    </div>
    <button type="submit">Send!</button>

    `

   element.addEventListener("submit", function(e) {
    e.preventDefault()
    //console.log(e.target.firstname.value)



    let data = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        address: e.target.address.value,
        postalcode: e.target.postalcode.value,
        city: e.target.city.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value
    }
    console.log(data)
})


return element
}
export default ContactForm