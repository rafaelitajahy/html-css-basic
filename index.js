var chkBike = document.getElementById("id-chkBike");
var btnTesta = document.getElementById("id-btn-testa");

btnTesta.onclick = function() {
  if (chkBike.checked) {
    console.log("true");
  } else {
    console.log("false");
  }
};

chkBike.onchange = function() {
  if (chkBike.checked) {
    btnTesta.disabled = false;
  } else {
    btnTesta.disabled = true;
  }
};
