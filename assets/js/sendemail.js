function sendMail(contactForm) {
    emailjs.send("gmail","rosie-resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response)
        },
        function(error) {
            console.log("Failed", error)
        });
        return false
}