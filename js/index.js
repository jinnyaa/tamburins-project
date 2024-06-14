

// main-top
const images = document.querySelectorAll('.main-top-img-container img');
images.forEach(image => {
    image.style.transition = 'transform .5s ease-out';
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxTransformValue = 1000;  // 예시: 최대 transform 값

    const image1 = document.getElementById('main-1');
    const image2 = document.getElementById('main-2');
    const image3 = document.getElementById('main-3');
    const image4 = document.getElementById('main-4');
    const image5 = document.getElementById('main-5');
    const image6 = document.getElementById('main-6');
    const image7 = document.getElementById('main-7');

    image1.style.transform = `translateY(${Math.min(scrollPosition * -0.8, maxTransformValue)}px) translateX(${Math.min(scrollPosition * -1, maxTransformValue)}px)`;
    image2.style.transform = `translateY(${Math.min(scrollPosition * -0.8, maxTransformValue)}px) translateX(${Math.min(scrollPosition * 0.1, maxTransformValue)}px)`;
    image3.style.transform = `translateY(${Math.min(scrollPosition * -0.6, maxTransformValue)}px) translateX(${Math.min(scrollPosition * 1, maxTransformValue)}px)`;
    image4.style.transform = `translateY(${Math.min(scrollPosition * 0.5, maxTransformValue)}px) translateX(${Math.min(scrollPosition * -1.5, maxTransformValue)}px)`;
    image5.style.transform = `translateY(${Math.min(scrollPosition * 1, maxTransformValue)}px) translateX(${Math.min(scrollPosition * -1.2, maxTransformValue)}px)`;
    image6.style.transform = `translateY(${Math.min(scrollPosition * 1.2, maxTransformValue)}px) translateX(${Math.min(scrollPosition * 2, maxTransformValue)}px)`;
    image7.style.transform = `translateY(${Math.min(scrollPosition * 0, maxTransformValue)}px) translateX(${Math.min(scrollPosition * 1.2, maxTransformValue)}px)`;
});





document.addEventListener('DOMContentLoaded', function() {
  var lines = document.querySelectorAll('.line');

  function toggleActiveClass() {
      var screenHeight = window.innerHeight || document.documentElement.clientHeight;

      lines.forEach(function(line) {
          var bounding = line.getBoundingClientRect();

          if (bounding.top <= screenHeight / 2 && bounding.bottom >= screenHeight / 2) {
              line.classList.add('active');
          }
      });
  }

  toggleActiveClass();

  window.addEventListener('scroll', toggleActiveClass);
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


        var scaleFactor = 1 + Math.abs(elementRect.top) / (0.5 * viewportHeight); 

        document.querySelector('.rotate-img img').style.transform = 
            'translate(-50%, -50%) rotate(' + rotateAngle + 'deg) scale(' + scaleFactor + ')';
    }
});

// product-detail
const left = document.querySelector('#logo-moving-left')

window.addEventListener("mousemove", (e) => {
 left.style.setProperty('--distance-left', e.offsetX / -3 + "px")
})



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


// double-txt Parallax Effect
function createParallaxEffect() {
  const doubleimages = document.querySelectorAll('.double-txt-img-box img');

  doubleimages.forEach((img, index) => {
    const speed = img.getAttribute('data-speed');
    const parallaxTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.double-txt-img-box',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });

    parallaxTL.to(img, {
      yPercent: (index + 1) * speed * 20,
      ease: 'none'
    });
  });
}

createParallaxEffect();




// multipleharmonies Parallax Effect
function createParallaxEffectMultipleHarmonies() {
  const images = document.querySelectorAll('.multipleharmonies-img-box img');

  images.forEach((img, index) => {
      const speed = img.getAttribute('data-speed');
      const parallaxTL = gsap.timeline({
          scrollTrigger: {
              trigger: '.multipleharmonies-img-box',
              start: 'top center', 
              end: 'bottom top',   
              scrub: true,
          }
      });

      parallaxTL.to(img, {
          yPercent: (index + 1) * speed * 10,
          ease: 'none'
      });
  });
}

createParallaxEffectMultipleHarmonies();

// multipleharmonies Parallax Effect
function createParallaxEffectMultipleHarmonies() {
  const multipleharmoniesimages = document.querySelectorAll('.multipleharmonies-img-box img');

  multipleharmoniesimages.forEach((img, index) => {
      const multipleharmoniesspeed = img.getAttribute('data-speed');
      const multipleharmoniesparallaxTL = gsap.timeline({
          scrollTrigger: {
              trigger: '.multipleharmonies-img-box',
              start: 'top center', 
              end: 'bottom top',   
              scrub: true,
          }
      });

      multipleharmoniesparallaxTL.to(img, {
          yPercent: (index + 1) * multipleharmoniesspeed * 10,
          ease: 'none'
      });
  });
}

createParallaxEffectMultipleHarmonies();




// popupstore Parallax Effect
function createParallaxEffectPopupstore() {
  const images = document.querySelectorAll('.popupstore-img-cols img');

  images.forEach((img, index) => {
      const speed = img.getAttribute('data-speed');
      const parallaxTL = gsap.timeline({
          scrollTrigger: {
              trigger: '.popupstore',
              start: 'top top', 
              end: 'bottom bottom',   
              scrub: true,
          }
      });

      parallaxTL.to(img, {
          yPercent: (index + 1) * speed * -10,
          ease: 'none'
      });
  });
}

createParallaxEffectPopupstore();

