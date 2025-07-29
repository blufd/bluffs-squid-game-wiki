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

    // Only run this code if there are gallery images on the page
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                // Find the figcaption associated with the clicked image
                captionText.innerHTML = this.nextElementSibling.innerHTML;
            }
        });

        // Get the <span> element that closes the modal
        const closeBtn = document.querySelector(".close-button");

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
        
        // Also close modal if user clicks on the background
        modal.onclick = function(event) {
            if (event.target == modal) {
                 modal.style.display = "none";
            }
        }
    }
});