const Pluck = new Tone.PluckSynth().toMaster();

const Membrane = new Tone.MembraneSynth().toDestination();

const AM = new Tone.AMSynth().toDestination();

const noiseSynth = new Tone.NoiseSynth().toDestination();

const Duo = new Tone.DuoSynth().toDestination();

const FM = new Tone.FMSynth().toDestination();

const MonoSquare = new Tone.MonoSynth({
	oscillator: {
		type: "square"
	},
	envelope: {
		attack: 0.1
	}
}).toDestination();

const MonoTri = new Tone.MonoSynth({
	oscillator: {
		type: "triangle"
	},
	envelope: {
		attack: 0.1
	}
}).toDestination();

const MonoSine = new Tone.MonoSynth({
	oscillator: {
		type: "sine"
	},
	envelope: {
        attack: 0.1
    }        
}).toDestination();

const MonoSaw = new Tone.MonoSynth({
	oscillator: {
		type: "sawtooth"
	},
	envelope: {
		attack: 0.1
	}
}).toDestination();

// const snare = new Tone.Sampler({
// 	urls: {
// 		A1: "snare.mp3",
// 		A2: "snare.mp3",
// 	},
// 	baseUrl: "https://tonejs.github.io/audio/drum-samples/CR78",
// 	onload: () => {
// 		sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
// 	}
// }).toDestination();

const snare = new Tone.Sampler({
	urls: {
		A1: "snare.mp3",
		// A2: "G2.mp3",
	},
	baseUrl: "https://tonejs.github.io/audio/drum-samples/CR78/",
	onload: () => {
		sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
	}
}).toDestination();


document.getElementById("pad1").addEventListener("click", function () {
    Pluck.triggerAttackRelease("C4", "8n");
});
window.addEventListener("keydown", function (event) {
    if (event.key == "&")
    Pluck.triggerAttackRelease("C4", "8n");
});

    document.getElementById("pad2").addEventListener("click", function () {
        Membrane.triggerAttackRelease("Eb1", "8n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.code == "Digit2")
        Membrane.triggerAttackRelease("Eb1", "8n");
    });

document.getElementById("pad3").addEventListener("click", function () {
    noiseSynth.triggerAttackRelease("8n", 0.05);
});
window.addEventListener("keydown", function (event) {
    if (event.code == "Digit3")
    noiseSynth.triggerAttackRelease("8n", 0.05);
});

    document.getElementById("pad4").addEventListener("click", function () {
        Duo.triggerAttackRelease("C2", "2n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.code == "Digit4")
        Duo.triggerAttackRelease("C2", "2n");
    });

document.getElementById("pad5").addEventListener("click", function () {
    FM.triggerAttackRelease("G4", "4n");
});
window.addEventListener("keydown", function (event) {
    if (event.key == "a")
    FM.triggerAttackRelease("G4", "4n");
});

    document.getElementById("pad6").addEventListener("click", function () {
        FM.triggerAttackRelease("G3", "4n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "z")
        FM.triggerAttackRelease("G3", "4n");
    });


document.getElementById("pad7").addEventListener("click", function () {
    FM.triggerAttackRelease("C4", "4n");
});
window.addEventListener("keydown", function (event) {
    if (event.key == "e")
    FM.triggerAttackRelease("C4", "4n");
});

    document.getElementById("pad8").addEventListener("click", function () {
        FM.triggerAttackRelease("Eb4", "4n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "r")
        FM.triggerAttackRelease("Eb4", "4n");
    });

document.getElementById("pad9").addEventListener("click", function () {
    MonoSquare.triggerAttackRelease("C4", "8n");
});
window.addEventListener("keydown", function (event) {
    if (event.key == "q")
    MonoSquare.triggerAttackRelease("C4", "8n");
});

    document.getElementById("pad10").addEventListener("click", function () {
    MonoTri.triggerAttackRelease("C4", "8n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "s")
        MonoTri.triggerAttackRelease("C4", "8n");
    });

document.getElementById("pad11").addEventListener("click", function () {
MonoSine.triggerAttackRelease("C4", "8n");

});
window.addEventListener("keydown", function (event) {
    if (event.key == "d")
    MonoSine.triggerAttackRelease("C4", "8n");
});

    document.getElementById("pad12").addEventListener("click", function () {
    MonoSaw.triggerAttackRelease("C4", "8n");
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "f")
        MonoSaw.triggerAttackRelease("C4", "8n");
    });

document.getElementById("pad13").addEventListener("click", function () {
AM.triggerAttackRelease("C4", "4n");
});
window.addEventListener("keydown", function (event) {
    if (event.key == "w")
    AM.triggerAttackRelease("C4", "4n");
});


    document.getElementById("pad14").addEventListener("click", function () {
	snare.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
    });
    window.addEventListener("keydown", function (event) {
        if (event.key == "x")
		    snare.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
    });

// document.getElementById("pad15").addEventListener("click", function () {

// });
// window.addEventListener("keydown", function (event) {
//     if (event.key == "c")

// });

//     document.getElementById("pad16").addEventListener("click", function () {

//     });
//     window.addEventListener("keydown", function (event) {
//         if (event.key == "v")

//     });

const feedbackDelay = new Tone.FeedbackDelay("8n", 0.4).toDestination();
//connect a synth to an echo effect
FM.connect(feedbackDelay);
