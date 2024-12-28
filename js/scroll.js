const refresh = document.getElementById(`refresh`);
refresh.style.display = "none";

refresh.addEventListener('click', () => {
     document.body.scrollTo({ top: 0, behavior: 'smooth' });
     document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          refresh.style.display = "block";
     } else {
          refresh.style.display = "none";
     }
}