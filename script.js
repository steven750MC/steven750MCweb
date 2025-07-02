const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

boxes.forEach(box => {
  observer.observe(box);
});
const text = "سلام من استیون هستم، برنامه نویس اندروید با زبان کاتلین و جتپک کامپوز، کمی پایتون و وب. سعی میکنم با برنامه نویسی و ادیتم به دیگران کمک کنم";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("bio").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 75);
  }
}

window.addEventListener("load", type);
