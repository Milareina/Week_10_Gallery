let currentImageIndex = 1;
const totalImages = 4;

function showImage(index) {
    for (let i = 1; i <= totalImages; i++) {
        const img = document.getElementById("image" + i);
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }
}

document.getElementById("prev").onclick = function() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = totalImages;
    }
    showImage(currentImageIndex);
}

document.getElementById("next").onclick = function() {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1;
    }
    showImage(currentImageIndex);
}
