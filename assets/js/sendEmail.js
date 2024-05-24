function sendMail(contactForm) {
    emailjs.send("gmail", "diego-cv", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    contactForm.reset();
    window.alert("Thank you! Project request sent.");
    return false;  // To block from loading a new page
}