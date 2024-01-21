const button_kirim = document.querySelector("#kirim"); // mengarah 
const input = document.querySelector("#input");
const div_display = document.querySelector(".container-pesan");
// console.log(button_kirim,'<-ini button id kirim');

const socket = io()
socket.on("connect",()=>console.log("socket connected"))

const createBubbleChat = chat =>{
    const div_pesan = document.createElement("div"); // membuat div yg akn diisi pesan yg dikirim
    div_pesan.classList.add("pesan"); // diberi class pesan
    div_pesan.innerHTML = chat;
    return div_pesan;
}

button_kirim.addEventListener("click",()=>{
    const bubbleChat = createBubbleChat(input.value);
    div_display.appendChild(bubbleChat);
    socket.emit("kirim-pesan", input.value)
    input.value="";
})

socket.on("pesan-baru", pesan=>{
    const bubbleChat = createBubbleChat(pesan)
    bubbleChat.classList.add("pesan-r")
    div_display.appendChild(bubbleChat)
})