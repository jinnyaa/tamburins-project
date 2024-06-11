var controller = new ScrollMagic.Controller();

// build scene 1
var scene = new ScrollMagic.Scene({
	triggerElement: ".maintop-line",
	duration: "110%"
})
// animate 1
.setTween(".maintop-line-h.line-h", {
	height: "110%"
})

.addTo(controller);
