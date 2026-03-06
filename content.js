function modifyPlayers() {
    document.querySelectorAll(".player-tagline").forEach((playerEl) => {
        playerEl.querySelectorAll(".cc-user-block-component").forEach((userInfoEl) => {
            const title = userInfoEl.querySelector(".cc-user-title-component");
            if (!title) {
                const gm = document.createElement("a");
                gm.href = "/members/titled-players";
                gm.target = "_blank";
                gm.textContent = "GM";
                gm.classList.add("cc-user-title-component", "cc-text-x-small-bold");
                userInfoEl.prepend(gm);
            }
        });
    });
}

const observer = new MutationObserver(modifyPlayers);

observer.observe(document.body, {
  childList: true,
  subtree: true
});