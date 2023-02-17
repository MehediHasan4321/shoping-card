document.getElementById("shoping-icon").addEventListener("click",()=>{
    document.getElementById("slider").style.width = `550px`
})
document.getElementById("crose-icon").addEventListener("click",()=>{
    document.getElementById("slider").style.width = `0px`
})


document.getElementById("card-one").addEventListener("click",()=>{
    const productHeading =getInnerText("card-1-heading")
    const productPrice = getInnerText("card-1-price")
    const productQuentity = 1;
    const totalPrice = parseInt(productPrice) * productQuentity;
    vouser(productHeading,productPrice,productQuentity,totalPrice)
})

function vouser(productHeading,productPrice,productQuentity,totalPrice){
    const ol = document.createElement("ol");
    ol.innerHTML = `
    <li>${1}</li>
    <li class="text-lg font-semibold">${productHeading}</li>
    <li>${productPrice}</li>
    <li>${productQuentity}</li>
    <li>${totalPrice}</li>`
    ol.classList.add("ol-list")
    document.getElementById("parent").appendChild(ol)
}

function getInnerText (id){
    const elementText = document.getElementById(id).innerText

    return elementText
}