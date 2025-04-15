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
function CreateImage()
{
    let image=document.createElement("img");
    image.src="style/assets/aaa.jpg";
    document.getElementById("image-button").innerHTML="<3";
    document.getElementById("mail-sent").appendChild(image);
    image.style.width="300px";
    image.style.height="auto";

}




document.addEventListener("DOMContentLoaded", function() {
    let meni1 = document.getElementById("meni1");
    let meni2 = document.getElementById("meni2");
    let image_button = document.getElementById("image-button");

    // Proverite da li su elementi pronađeni
    if (meni1) {
        meni1.addEventListener("click", () => PosaljiEmail("Meni 1"));
    } else {
        console.error("Element sa ID-jem 'meni1' nije pronađen.");
    }

    if (meni2) {
        meni2.addEventListener("click", () => PosaljiEmail("Meni 2"));
    } else {
        console.error("Element sa ID-jem 'meni2' nije pronađen.");
    }

    if (image_button) {
        image_button.addEventListener("click", () => CreateImage());
    } else {
        console.error("Element sa ID-jem 'image-button' nije pronađen.");
    }
});

