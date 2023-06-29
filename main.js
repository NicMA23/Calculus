window.onload = function () {
    // Get references to the box elements
    const boxes = document.querySelectorAll('.box');

    // Add event listeners to each box
    boxes.forEach(function (box) {
        const image = box.querySelector('.image');

        // Event handler when mouse enters the box
        function handleMouseEnter() {
            image.style.transform = 'translateY(-10px)';
        }

        // Event handler when mouse leaves the box
        function handleMouseLeave() {
            image.style.transform = 'translateY(0)';
        }

        // Add event listeners
        box.addEventListener('mouseenter', handleMouseEnter);
        box.addEventListener('mouseleave', handleMouseLeave);
    });
};
