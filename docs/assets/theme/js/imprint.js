addCopyright();

function addCopyright() {

    let copyrightElement = document.getElementsByClassName("md-copyright")[0];
    copyrightElement.innerHTML = "";

    let impressumLink = document.createElement("a");
    impressumLink.href = "https://germanrp.eu/index.php?legal-notice/";
    impressumLink.innerHTML = "Impressum";
    copyrightElement.appendChild(impressumLink);
}