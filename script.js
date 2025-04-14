emailjs.init("llVuTO1BenzxnYl8_");



function PosaljiEmail(meni)
{
    emailjs.send("service_byir83j","template_tkqanhm", {
        meni:meni
    }).then(function(response) {
        console.log("Email poslan!", response.status, response.text);
        setTimeout(function() {
        window.location.href="menu-selected.html";
        },250)
    }, function(error) {
        console.error("Greska pri slanju emaila",error);
        alert("nesto nije u redu");
    });
}



document.addEventListener("DOMContentLoaded", function() {
let meni1=document.getElementById("meni1");
let meni2=document.getElementById("meni2");
let image_button=document.getElementById("image-button");
meni1.addEventListener("click", () => PosaljiEmail("Meni 1"));
meni2.addEventListener("click", () => PosaljiEmail("Meni 2"));


});