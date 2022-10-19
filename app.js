const items = document.querySelectorAll(".notification-header span");
const [numberOfUnread, markReadButton] = items;
const unreadNotifications = document.querySelectorAll(".unread");

markReadButton.addEventListener("click", () => {
  numberOfUnread.textContent = "0";
  markReadButton.style.display = "none";
  unreadNotifications.forEach((element) => {
    const unReadIcon = element.querySelector(
      " .inner-notification-container .notification-details .notification-message .unread-icon"
    );
    unReadIcon.style.display = "none";
    element.classList.toggle("unread");
  });
});
