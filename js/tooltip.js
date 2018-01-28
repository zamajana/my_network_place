// JavaScript Document
   function showTip(oEvent) {
        var oDiv = document.getElementById("napomena");
        oDiv.style.visibility = "visible";
        oDiv.style.left = oEvent.clientX + 1;
        oDiv.style.top = oEvent.clientY + 1;
    }

    function hideTip(oEvent) {
        var oDiv = document.getElementById("napomena");
        oDiv.style.visibility = "hidden";
    }