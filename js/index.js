//Global variable......
var num = 0;


document.getElementById("shoping-icon").addEventListener("click",()=>{
    document.getElementById("slider").style.width = `550px`
})
document.getElementById("crose-icon").addEventListener("click",()=>{
    document.getElementById("slider").style.width = `0px`
})


//document.getElementById("total-item").innerText= serialNumber





document.getElementById("card-one").addEventListener("click",(e)=>{
    const productHeading =getInnerText("card-1-heading")
    const productPrice = getInnerText("card-1-price")
    const productQuentity = 1;
    const totalPrice = parseInt(productPrice) * productQuentity;
    vouser(productHeading,productPrice,productQuentity,totalPrice)
    sumOfTotalPrice(totalPrice)
    
    
})
document.getElementById("card-two").addEventListener("click",()=>{
   
    const productHeading = getInnerText("card-2-heading")
    const productPrice = getInnerText("product-2-price");
    const productQuentity = 2;
    const totalPrice = parseInt(productPrice) * productQuentity; 
    vouser(productHeading,productPrice,productQuentity,totalPrice)
    sumOfTotalPrice(totalPrice)

    
})
document.getElementById("card-three").addEventListener("click",()=>{
    const productHeading = getInnerText("card-3-heading")
    const productPrice = getInnerText("card-3-price");
    const productQuentity = 2;
    const totalPrice = parseInt(productPrice) * productQuentity;
    vouser(productHeading,productPrice,productQuentity,totalPrice)
    sumOfTotalPrice(totalPrice)
  
    
})
document.getElementById("card-four").addEventListener("click",()=>{
    const productHeading = getInnerText("card-4-heading")
    const productPrice = getInnerText("card-4-price");
    const productQuentity = 2;
    const totalPrice = parseInt(productPrice) * productQuentity;
    vouser(productHeading,productPrice,productQuentity,totalPrice)
    sumOfTotalPrice(totalPrice)
 
    
})
let serialNumber = 0
function vouser(productHeading,productPrice,productQuentity,totalPrice){
    serialNumber ++
    const ol = document.createElement("ol");
    ol.innerHTML = `
    <li>${serialNumber}</li>
    <li class="text-lg font-semibold">${productHeading}</li>
    <li>${productPrice}</li>
    <li>${productQuentity}</li>
    <li>${totalPrice}</li>`
    ol.classList.add("ol-list")
    document.getElementById("parent").appendChild(ol)
    document.getElementById("total-item").innerText = serialNumber
}

function getInnerText (id){
    const elementText = document.getElementById(id).innerText

    return elementText
}

function sumOfTotalPrice(newAmount){
    const prevValue = getInnerText("total");
    const currentTotol = newAmount + parseInt(prevValue)
    document.getElementById("total").innerText = currentTotol;
}


