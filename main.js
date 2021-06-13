function getData() {
    var click = document.getElementById("list-drop");
    if (click.style.display ==="none") {
        click.style.display = "flex";
        click.style.flexDirection = "column";
    } else {
        click.style.display = "none";
    }
}