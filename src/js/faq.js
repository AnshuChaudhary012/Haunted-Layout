const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");
        // Check if this FAQ is already open
        const isOpen = !answer.classList.contains("hidden");
        // Close all FAQs
        faqItems.forEach((faq) => {
            faq.querySelector(".faq-answer").classList.add("hidden");
            faq.querySelector(".faq-icon").classList.remove("rotate-180");
        });
        // If it was closed, open it
        if (!isOpen) {
            answer.classList.remove("hidden");
            icon.classList.add("rotate-180");
        }
    });
});