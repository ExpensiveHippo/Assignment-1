//Intersection Observer to add/remove class when elements appear on the screen to trigger transitions.
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    }),
    {
        threshold: 0.7,
    }
})

//get all elements required for transition
const connectors = document.querySelectorAll(".connector");
const stages = document.querySelectorAll(".stage-number");
const signsAndSymptoms = document.querySelectorAll(".sns");

//observe these elements
connectors.forEach((con) => observer.observe(con));
signsAndSymptoms.forEach((sns) => observer.observe(sns));

//
for (let i = 0; i < stages.length; i++) {
    stages[i].addEventListener("click", event => {
        document.querySelector(".active")?.classList.remove("active"); //only one stage should be active at any point in time.
        stages[i].classList.add("active");
        document.querySelector(".sns:not(.hidden)")?.classList.add("hidden"); //only one sns should not be hidden at any point in time. 
        signsAndSymptoms[i].classList.remove("hidden");
    })}
