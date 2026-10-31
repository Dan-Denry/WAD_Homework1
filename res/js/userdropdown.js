document.getElementsByClassName("user_profile")[0].addEventListener("click", userProfileClicked);

function userProfileClicked() {
    document.getElementsByClassName("user_dropdown")[0].classList.toggle("user_dropdown_show");
}
