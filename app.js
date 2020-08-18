function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add(".bg-activ");
  } else {
    document.body.classList.remove(".bg-activ");
  }
}

window.addEventListener("scroll", bgChanger);
