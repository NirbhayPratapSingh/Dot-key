



function ChangeImg1() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_360x.jpg?v=1644862704"
}


function ChangeImg2() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_15_360x.jpg?v=1644862704"
}


function ChangeImg3() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_360x.jpg?v=1644862704"
}


function ChangeImg4() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_360x.jpg?v=1644862704"
}


function ChangeImg5() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_360x.jpg?v=1644862704"
}


function ChangeImg6() {
    document.getElementById("image").src = "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_0e90978d-13d9-458e-86e9-6f8cc9b3633e_360x.jpg?v=1644862704"
}


function like() {

    var like = document.getElementById("like");

    if (like.innerText = "🤍") {
        like.innerText = "🖤"
    }
    else{
        like.innerText = "🤍"
    }
   
}
document.querySelector("#main_img_product").addEventListener("click",openimage)

function openimage(event){
location.href="cocoa.html";
}
function change_1() {
    var btn=document.getElementById("main_img_product");
    btn.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_home_4.png?v=1645176921"
}

function change_2() {
    var btn=document.getElementById("main_img_product");
    
    btn.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/bodycare_desktop.png?v=1639668460"
}
