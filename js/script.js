// ===================================
// BHUMIKA JII SPA SERVICE
// SMOOTH PAGE ANIMATIONS
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(
        ".profile-section, .booking-section, .stats-section, .about-section, .services-section, .limited-section, .bottom-booking"
    );

    sections.forEach((section, index) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(25px)";

        setTimeout(() => {

            section.style.transition = "all 0.6s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }, index * 150);

    });

});


// ===================================
// BOOKING BUTTON
// ===================================

const bookingButtons = document.querySelectorAll(".booking-btn");

bookingButtons.forEach(button => {

    button.addEventListener("click", function () {

        console.log("Booking button clicked");

    });

});
