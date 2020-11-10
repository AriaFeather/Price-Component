function textToggle(){
    let switchText = document.getElementById("switch-toggle");
    let priceSwitch1 = document.getElementById("blowup--1");
    let priceSwitch2 = document.getElementById("blowup--2");
    let priceSwitch3 = document.getElementById("blowup--3");

    if (switchText.checked == true){
        priceSwitch1.innerHTML = "&dollar;199.99";
        priceSwitch2.innerHTML = "&dollar;249.99";
        priceSwitch3.innerHTML = "&dollar;399.99";

    }else{
        priceSwitch1.innerHTML = "&dollar;19.99";
        priceSwitch2.innerHTML = "&dollar;24.99";
        priceSwitch3.innerHTML = "&dollar;39.99";
    }
}