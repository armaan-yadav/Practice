const istatus = document.querySelector("h3");
const addFriend = document.querySelector("#addFriend");
let flag = false;
addFriend.addEventListener('dblclick', function () {
  if (flag == false) {
    istatus.textContent = "Friends";
    istatus.style.color = "green";
    addFriend.textContent = "Remove Friend";
    flag = true;
  } else {
    istatus.textContent = "Stranger";
    istatus.style.color = "red";
    addFriend.textContent = "Add Friend";
    flag = false;
  }
});
