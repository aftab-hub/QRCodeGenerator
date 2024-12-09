const imgBox = document.querySelector("#imgBox")
const qrText = document.querySelector("#qrText")
const qrImg = document.querySelector("#qrImg")

let QRapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const generateQR = async() =>{
    if (qrText.value.length > 0) {
        qrImg.src = QRapi + qrText.value
        imgBox.classList.add("show-img")
    }else{
        setTimeout(()=>{
            qrText.classList.add("error")
        },1000)
    }
}