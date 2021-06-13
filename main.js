function getData() {
    var click = document.getElementById("list-drop");
    if (click.style.display ==="none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}

function resize(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}