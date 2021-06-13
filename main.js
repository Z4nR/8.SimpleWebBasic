function getData() {
    var click = document.getElementById("list-drop");
    if (click.style.display ==="none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}

function hiddenList() {
    var list = document.getElementsById("list-drop");
    if (list.style.display === "inline-block") {
        list.style.display = "none";
    } else {
        list.style.display = "inline-block";
    }
}