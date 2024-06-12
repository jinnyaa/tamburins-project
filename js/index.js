
// main-top
window.scroll({behavior: 'smooth'});

const images = document.querySelectorAll('.main-top-img-container img');
images.forEach(image => {
    image.style.transition = 'transform 1s ease-out';
});


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const image1 = document.getElementById('main-1');
    const image2 = document.getElementById('main-2');
    const image3 = document.getElementById('main-3');
    const image4 = document.getElementById('main-4');
    const image5 = document.getElementById('main-5');
    const image6 = document.getElementById('main-6');
    const image7 = document.getElementById('main-7');

	image1.style.transform = `translateY(${scrollPosition * -0.8}px) translateX(${scrollPosition * -1}px)`;
	image2.style.transform = `translateY(${scrollPosition * -0.8}px) translateX(${scrollPosition * 0.1}px)`;
	image3.style.transform = `translateY(${scrollPosition * -0.6}px) translateX(${scrollPosition * 1}px)`;
	image4.style.transform = `translateY(${scrollPosition * 0.5}px) translateX(${scrollPosition * -1.5}px)`;
	image5.style.transform = `translateY(${scrollPosition * 1}px) translateX(${scrollPosition * -1.2}px)`;
	image6.style.transform = `translateY(${scrollPosition * 1.2}px) translateX(${scrollPosition * 2}px)`;
	image7.style.transform = `translateY(${scrollPosition * 0}px) translateX(${scrollPosition * 1.2}px)`;

});




// rotate-new
window.addEventListener('scroll', function() {
    var viewportHeight = window.innerHeight;
    var element = document.querySelector('.rotate-new');
    var elementRect = element.getBoundingClientRect();
    var scrollTop = window.scrollY;

    if (elementRect.top <= 0) {
        var rotateAngle = Math.abs(elementRect.top) / 8;
        rotateAngle = Math.max(0, rotateAngle);


        var scaleFactor = 1 + Math.abs(elementRect.top) / (0.5 * viewportHeight); // 빠르게 확대

        document.querySelector('.rotate-img img').style.transform = 
            'translate(-50%, -50%) rotate(' + rotateAngle + 'deg) scale(' + scaleFactor + ')';
    }
});




// double-txt
let typeSplit;

function runSplit() {
  typeSplit = new SplitType(".split-word", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".split-word",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 0.5
  });
}





