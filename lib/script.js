export default function scriptFunction() {
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      // function toggleLoading(button) {
      //   button.classList.toggle("button--loading");
      //   setTimeout(function () {
      //     button.classList.remove("button--loading");
      //   }, 5000);
      // }
      // setTimeout(function () {
      //   document
      //     .querySelector(".product .product-control .head span")
      //     .text("Đầu tư dễ dàng chỉ từ 1.000.000đ");
      // }, 4000);

      // document.querySelector(".hamburger").click(function () {
      //   document.querySelector(this).toggleClass("is-active");
      // });
      // // slide
      // let isDown = false;
      // let startX;
      // let scrollLeft;
      // const slider = document.querySelector(".items");

      // const end = () => {
      //   isDown = false;
      //   slider.removeClass("active");
      // };

      // const start = (e) => {
      //   isDown = true;
      //   slider.addClass("active");
      //   startX = e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
      //   scrollLeft = slider.scrollLeft();
      // };

      // const move = (e) => {
      //   if (!isDown) return;

      //   e.preventDefault();
      //   const x =
      //     e.pageX || e.originalEvent.touches[0].pageX - slider.offset().left;
      //   const dist = x - startX;
      //   slider.scrollLeft(scrollLeft - dist);
      // };

      // (() => {
      //   slider.on("mousedown", start);
      //   slider.on("touchstart", start);

      //   slider.on("mousemove", move);
      //   slider.on("touchmove", move);

      //   slider.on("mouseleave", end);
      //   slider.on("mouseup", end);
      //   slider.on("touchend", end);
      // })();
      // load more
      document.querySelector("#readmoredes").click(function () {
        document.querySelector("#readmoredes").css("display", "none");
        document.querySelector("#more").css("display", "block");
      });
      document.querySelector(".download-btn").click(function () {
        document.querySelector(".download-btn").addClass("button--loading");
        setTimeout(() => {
          document
            .querySelector(".download-btn")
            .removeClass("button--loading");
          document.querySelector(".pop-up-down").css("display", "block");
          document.querySelector("body").css("overflow", "hidden");
        }, 7000);
      });
      document.querySelector(".pop-up-down span").click(function () {
        document.querySelector(".pop-up-down").css("display", "none");
        document.querySelector("body").css("overflow", "visible");
      });
      document.querySelector("#readmorefea").click(function () {
        console.log(83823832);
        document.querySelector("#readmorefea").css("display", "none");
        document.querySelector("#morefea").css("display", "block");
      });

      document
        .querySelector(".product .product-control .control .btnUpload")
        .click(function (e) {
          e.preventDefault();
        });

      document.querySelector(".feature .head a").click(function (e) {
        e.preventDefault();
      });

      document
        .querySelector(".extend  .app-extend .item .ci .inf a")
        .click(function (e) {
          e.preventDefault();
        });

      // extend
    });
  }
}
