window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    const visuals = document.querySelector('.visual');
    const colors = [
        "#B4161B",
        "#23C4ED",
        "#3DBE29",
        "#E8BD0D",
        "#6A1B4D",
        "#CAD5E2"
    ];

    // console.log(pads);

    pads.forEach((pad, index) => {
        pad.addEventListener('click', ()=>{
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    const createBubbles = index => {
        const bubbles = document.createElement('div');
        visuals.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = `jump 1s ease`;
        // bubble.addEventListener("animationend", function() {
        //     visual.removeChild(this);
        // });
    };
}); 