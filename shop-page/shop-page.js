




function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    alert("PRODUCT TAG COPYID");
    }




    var loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = "none"
    })