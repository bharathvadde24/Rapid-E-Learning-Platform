function toggleRegistrationForm() {
    var registrationForm = document.getElementById("registrationForm");
    var toggleButton = document.querySelector(".toggle-button");

    if (registrationForm.style.display === "none" || registrationForm.style.display === "") {
        registrationForm.style.display = "block";
        toggleButton.textContent = "Close Registration Form";
    } else {
        registrationForm.style.display = "none";
        toggleButton.textContent = "Open Registration Form";
    }
}
