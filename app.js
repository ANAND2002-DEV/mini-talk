const myName = localStorage.getItem("myName") || "Me";
const ROOM = "private-room";

function setMood(mood){
  localStorage.setItem("mood", mood);
  document.getElementById("status").innerText =
    myName + ": " + mood;
}

function goChat(){
  location.href = "chat.html";
}

function sendMsg(){
  const msg = document.getElementById("msg").value;
  if(!msg) return;
  const box = document.createElement("div");
  box.className = "msg me";
  box.innerText = msg;
  document.getElementById("messages").appendChild(box);
  document.getElementById("msg").value = "";
}

function loadDeleted(){
  document.getElementById("deleted").innerHTML =
    "<i>No deleted messages yet</i>";
}
