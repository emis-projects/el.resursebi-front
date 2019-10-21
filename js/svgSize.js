window.onload = function screenSize() {
    const svgSize = document.getElementById('fullImg');
    svgSize.setAttribute("viewBox", "0 0 " + screen.width + " " + screen.height);
};