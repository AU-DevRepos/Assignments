let obj;

function pintar(color = 'green') {
    console.log(color);
    if (obj) {
        obj.style.backgroundColor = color;
    }
}

document.addEventListener("click", (event) => {
    const target = event.target;

    // Skip if the target has no ID
    if (!target.id) return;

    // Add an event listener only if it hasn't been added already
    if (!target.hasListener) {
        target.addEventListener("click", () => pintar('yellow')); // Pass as a function reference
        target.hasListener = true; // Custom property to prevent duplicate listeners
    }

    // Update the global object reference
    obj = target;
});
