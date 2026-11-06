console.log("Samitha Computer Institute website loaded successfully!");
// ================================
// COURSE FILTER
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");

const courseCards = document.querySelectorAll(".full-course-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        // Add active class to clicked button
        button.classList.add("active");


        // Get selected filter
        const selectedFilter = button.getAttribute("data-filter");


        // Show or hide courses
        courseCards.forEach(function(card) {

            const courseLevel = card.getAttribute("data-level");


            if (
                selectedFilter === "all" ||
                selectedFilter === courseLevel
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});
// ================================
// REGISTRATION FORM VALIDATION
// ================================

const registrationForm = document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        // Stop page from refreshing
        event.preventDefault();


        // Get form values
        const name = document.getElementById("studentName").value.trim();

        const email = document.getElementById("studentEmail").value.trim();

        const phone = document.getElementById("studentPhone").value.trim();

        const course = document.getElementById("courseSelect").value;

        const message = document.getElementById("registrationMessage");


        // Check required fields
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            course === ""
        ) {

            message.textContent =
                "Please fill in all required fields.";

            message.style.color = "#dc2626";

            return;
        }


        // Show success message
        message.textContent =
            "Registration submitted successfully! 🎉";

        message.style.color = "#16a34a";


        // Clear form
        registrationForm.reset();

    });

}
// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();


        // Get form values
        const name = document.getElementById("contactName").value.trim();

        const email = document.getElementById("contactEmail").value.trim();

        const subject = document.getElementById("contactSubject").value.trim();

        const userMessage = document.getElementById("contactMessage").value.trim();

        const statusMessage =
            document.getElementById("contactMessageStatus");


        // Check required fields
        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            userMessage === ""
        ) {

            statusMessage.textContent =
                "Please fill in all fields.";

            statusMessage.style.color = "#dc2626";

            return;
        }


        // Show success message
        statusMessage.textContent =
            "Message sent successfully! We'll get back to you soon. 🎉";

        statusMessage.style.color = "#16a34a";


        // Clear the form
        contactForm.reset();

    });

}