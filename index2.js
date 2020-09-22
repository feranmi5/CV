let cvdoc1 = window.localStorage.getItem("f_name");
let cvdoc2 = window.localStorage.getItem("m_name");
let cvdoc3 = window.localStorage.getItem("l_name");
let cvdoc4 = window.localStorage.getItem("email");
let cvdoc5 = window.localStorage.getItem("address");
let cvdoc6 = window.localStorage.getItem("phone");

document.getElementById("name").innerHTML=cvdoc1+' '+cvdoc2+' '+cvdoc3
document.getElementById("email").innerHTML=cvdoc4
document.getElementById("address").innerHTML=cvdoc5
document.getElementById("phone").innerHTML=cvdoc6