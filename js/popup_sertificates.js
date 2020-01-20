const window_sertificates = document.getElementById("myModal_sertificates");
const btn_sertificates = document.getElementById("myBtn_sertificates");
const span_sertificates = document.getElementsByClassName("close_sertificates")[0];

btn_sertificates.onclick = function() {
    window_sertificates.style.display = "block";
}

span_sertificates.onclick = function() {
    window_sertificates.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == window_sertificates) {
        window_sertificates.style.display = "none";
    }
}