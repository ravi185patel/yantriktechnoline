/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function homeloader() {
    $.ajax({
        type: "POST",
        url: "producttype.htm?cmdAction=getProductgrp",
        success: function (data) {
//            document.getElementById("productgrpid").innerHTML = data;
//            $("#productgrpid").html(data);
            var id = document.getElementById("containerff");
            if(document.getElementById("productgrpid")){
                id.removeChild(document.getElementById("productgrpid"));
            }
            var view = document.createElement("div");
            view.id = "productgrpid";
            view.className="row";
            view.innerHTML = data;
            id.appendChild(view);
        },
        error: function (e) {

        },
        done: function (e) {
            console.log("DONE");
        }
    });

    getProductByGrp("null", 0);

}
function getProductByGrp(productgrp, index) {
//    for (var i = 0; i <= 3; i++) {
//        if (document.getElementById("forclassli" + i) && document.getElementById("forclassli" + i).hasAttribute("class")) {
//            document.getElementById("forclassli" + i).removeAttribute("class");
//        }
//    }
//    if (document.getElementById("forclassli" + index)) {
//        document.getElementById("forclassli" + index).setAttribute("class", "filter-active");
//    }

    $.ajax({
        type: "POST",
        url: "products.htm?cmdAction=getProducts",
        data: "&productgrp=" + productgrp,
        success: function (data) {
            var id = document.getElementById("containerff");
            if(document.getElementById("productid")){
                id.removeChild(document.getElementById("productid"));
            }
            var view = document.createElement("div");
            view.id = "productid";
            view.className="row portfolio-container";
            view.innerHTML = data;
            id.appendChild(view);
        },
        error: function (e) {

        },
        done: function (e) {
            console.log("DONE");
        }
    });
}
function getLoginPage() {
    $.ajax({
        type: "POST",
        url: "login111.htm?cmdAction=getLoginPage",
        success: function (data) {
            console.log("success");
            document.getElementById("loginid").innerHTML = data;
            $("#exampleModal").modal();
        },
        error: function (e) {

        },
        done: function (e) {
            console.log("DONE");
        }
    });

}
//function sendEmail() {
//    var formEl = document.forms.contactForm;
//    $.ajax({
//        type: "POST",
//        url: "sendEmail.htm",
//        data: new FormData(formEl),
//        success: function (data) {
//            console.log("success");
////            document.getElementById("loginid").innerHTML = data;
////            $("#exampleModal").modal();
//        },
//        error: function (e) {
//
//        },
//        done: function (e) {
//            console.log("DONE");
//        }
//    });
//}