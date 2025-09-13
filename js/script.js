document.addEventListener('DOMContentLoaded', () => {
    // --- Table of Contents Toggle ---
    const toggleLink = document.querySelector('.toggle-contents');
    const contentsList = document.querySelector('#contents-list');

    if (toggleLink && contentsList) {
        toggleLink.addEventListener('click', () => {
            const isHidden = contentsList.classList.toggle('hidden');
            toggleLink.textContent = isHidden ? '[show]' : '[hide]';
        });
    }

    // --- Image Gallery Modal (Lightbox) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const galleryImages = document.querySelectorAll(".gallery-image");
    const portraitImage = document.querySelector(".infobox-image"); // <- add portrait

    // Function to open modal
    function openModal(img, caption = "") {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = caption || img.alt || "";
    }

    // --- Gallery images ---
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.onclick = function() {
                const figcaption = this.nextElementSibling ? this.nextElementSibling.innerHTML : "";
                openModal(this, figcaption);
            }
        });
    }

    // --- Portrait image ---
    if (portraitImage) {
        portraitImage.addEventListener("click", () => {
            openModal(portraitImage, portraitImage.alt);
        });
    }

    // Close modal (X button)
    const closeBtn = document.querySelector(".close-button");
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
