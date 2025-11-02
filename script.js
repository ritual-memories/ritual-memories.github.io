// ===== Fade Presets =====
const fadePresets = {
    narrative: { fadeOut: 600, updateDelay: 500, fadeIn: 900 },
    decision:  { fadeOut: 350, updateDelay: 300, fadeIn: 500 }
};

let currentMode = 'decision';
function setPacingMode(mode) {
    if (fadePresets[mode]) currentMode = mode;
    else console.warn(`Unknown pacing mode: ${mode}`);
}

// ===== Main Option Handler =====
function chooseOption(option) {
const story = document.getElementById('game-text');
const choices = document.getElementById('choices');
const { fadeOut, updateDelay, fadeIn } = fadePresets[currentMode];

// Fade out current text & choices
story.classList.add('fade-out');
choices.classList.add('fade-out');

setTimeout(() => {
// Update story & buttons
if (option === 1) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> We need to decide what to do next. Do you think all of the sacrifices are required for the ritual to succeed? If we assume that I'm one of them... <br><br>Is keeping me away from the ritual enough to stop them?</div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(2)">I think the ritual goes on, even if you're safe.</button>
        <button onclick="setPacingMode('decision'); chooseOption(8)">If we keep you safe, the ritual can't succeed.</button>
    `;
} else if (option === 2) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> All right. Let's get back to work.</div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(3)">So what next?</button>
    `;
} else if (option === 3) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> We need to figure out where the second ritual will take place. I hope we're not already too late.</div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(4)">You didn't get to finish the journal yet, right?</button>
        <button onclick="setPacingMode('decision'); chooseOption(5)">That's great and all, but we have no clues.</button>
    `;
} else if (option === 4) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> Good idea. I'll check the previous pages and let you know if anything stands out.
            <br><br>
            As I flipped through Kessler's notes, I noticed a section where he made observations about the characteristics of ritual locations, where the "convergence" occurs. I'll just type out what he has written, I think my cellphone signal is too weak to send images here. 
            <br><br>
            "The site must be isolated. Far from human observation, hidden in dense forest or barred from access by difficult terrain."
            That matches up with what we already know, this location is certainly isolated, and the cave from last year would've been impossible to find without the coordinates. 
            <br><br>
            "Locations where the dimensional planes intersect often coincide with natural formations: clearing, depressions, unusual stone structures. Places where the ground itself seems... unsettled."
            <br><br>
            And finally, he notes that the cult favors stone altars arranged in perfect symmetry, like those from my vision and the piles in this clearing.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(6)">Isolated locations, clearings, rocks. Got it.</button>
    `;
} else if (option === 5) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> We still have the journal. Let me look through it again. We only read the final two pages, there might be more information there.
            <br><br>
            As I flipped through Kessler's notes, I noticed a section where he made observations about the characteristics of ritual locations, where the "convergence" occurs. I'll just type out what he has written, I think my cellphone signal is too weak to send images here. 
            <br><br>
            "The site must be isolated. Far from human observation, hidden in dense forest or barred from access by difficult terrain."
            That matches up with what we already know, this location is certainly isolated, and the cave from last year would've been impossible to find without the coordinates. 
            <br><br>
            "Locations where the dimensional planes intersect often coincide with natural formations: clearing, depressions, unusual stone structures. Places where the ground itself seems... unsettled."
            <br><br>
            And finally, he notes that the cult favors stone altars arranged in perfect symmetry, like those from my vision and the piles in this clearing.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(6)">Isolated locations, clearings, rocks. Got it.</button>
    `;
} else if (option === 6) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            In summary, yes. I wonder how many locations like that are nearby? This site seems to be in a state of disarray, left to disappear with time. I can't imagine they would be planning to use it again. 
            <br><br>
            It's embarrassing to admit, but I am exhausted. I feel like I haven't slept in days, and the cold air of the night is starting to get to me. I think we've found out all we can here, so I should head home. It'll be easier to collaborate when I have better signal, as well. While I'm gone, maybe you could start looking into potential locations that fit Kessler's criteria.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(7)">I'll see what I can find. Be safe.</button>
        <button onclick="setPacingMode('decision'); chooseOption(7)">Alright, I'll start looking.</button>
        <button onclick="setPacingMode('decision'); chooseOption(7)">Fine, take a break. I'll figure it out myself.</button>
    `;
} else if (option === 7) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I've heard that this is one of the most reliable search engines around (trust). Good luck.
            <br><br>
            <a href="https://notgoogl.github.io/search/" target="_blank" rel="noopener noreferrer">NotGoogl Search Engine</a>
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(14)">Cragmoor Forest: Tell Mae that you've found some information.</button>
        <button onclick="setPacingMode('decision'); chooseOption(15)">Hollowridge Plateau: Tell Mae that you've found some information.</button>
        <button onclick="setPacingMode('decision'); chooseOption(15)">Silverpine Clearing: Tell Mae that you've found some information.</button>
    `;
} else if (option === 8) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> All right. Let's get back to work.</div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(9)">So what next?</button>
    `;
} else if (option === 9) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            If we assume that the ritual cannot take place without me, we need to figure out how the cult collects the vessels after they've... ripened. Are they captured, like I was last time, or... do the symptoms draw them in on their own?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(10)">You didn't get to finish the journal yet, right?</button>
        <button onclick="setPacingMode('decision'); chooseOption(11)">That's great and all, but we have no clues.</button>
    `;
} else if (option === 10) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Good idea. I'll check the previous pages and let you know if anything stands out.
            <br><br>
            As I flipped through Kessler's notes, I noticed a section where he outlines traits of individuals who were chosen as vessels. I'll just type out what he has written, I think my cellphone signal is too weak to send images here. 
            <br><br>
            "Individuals who have experienced significant loss, hardship, or intense personal tragedy are more likely to be 'selected.'" 
            ...Moving on to the next characteristic.
            <br><br>
            "People prone to compulsions, vivid dreams, or obsessive curiosity are at higher risk." 
            Well, you know what they say. Curiosity killed the cat. And me, if things keep going the way they have been. Sorry, was that too dark? 
            <br><br>
            "Those who spend time alone or in secluded areas are more likely to be targeted." 
            …Alone? Check. Secluded? Double check. Apparently, I'm just the ideal candidate, aren't I?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(12)">So... isolated, grieving, and a bit obsessed?</button>
    `;
} else if (option === 11) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            We still have the journal. Let me look through it again. We only read the final two pages, there might be more information there.
            <br><br>
            As I flipped through Kessler's notes, I noticed a section where he outlines traits of individuals who were chosen as vessels. I'll just type out what he has written, I think my cellphone signal is too weak to send images here. 
            <br><br>
            "Individuals who have experienced significant loss, hardship, or intense personal tragedy are more likely to be 'selected.'" 
            ...Moving on to the next characteristic.
            <br><br>
            "People prone to compulsions, vivid dreams, or obsessive curiosity are at higher risk." 
            Well, you know what they say. Curiosity killed the cat. And me, if things keep going the way they have been. Sorry, was that too dark? 
            <br><br>
            "Those who spend time alone or in secluded areas are more likely to be targeted." 
            …Alone? Check. Secluded? Double check. Apparently, I'm just the ideal candidate, aren't I?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(12)">So... isolated, grieving, and a bit obsessed?</button>
    `;
} else if (option === 12) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            In summary, yes. Though those characteristics would also describe most people that end up missing. Hopefully this area keeps thorough records on missing persons...
            <br><br>
            It's embarrassing to admit, but I am exhausted. I feel like I haven't slept in days, and the cold air of the night is starting to get to me. I think we've found out all we can here, so I should head home. It'll be easier to collaborate when I have better signal, as well. While I'm gone, maybe you could start looking into potential disappearances involving people that fit Kessler's criteria.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(13)">I'll see what I can find. Be safe.</button>
        <button onclick="setPacingMode('decision'); chooseOption(13)">Alright, I'll start looking.</button>
        <button onclick="setPacingMode('decision'); chooseOption(13)">Fine, take a break. I'll figure it out myself.</button>
    `;
} else if (option === 13) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I've heard that this is one of the most reliable search engines around (trust). Good luck.
            <br><br>
            <a href="https://notgoogl.github.io/query/" target="_blank" rel="noopener noreferrer">NotGoogl Search Engine</a>
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(26)">Alex Monroe: Tell Mae that you've found some information.</button>
        <button onclick="setPacingMode('decision'); chooseOption(27)">Jordan Whitaker: Tell Mae that you've found some information.</button>
        <button onclick="setPacingMode('decision'); chooseOption(27)">Taylor Greene: Tell Mae that you've found some information.</button>
    `;
} else if (option === 14) {
    story.innerHTML = `
            <div id="game-text">
            You meet up with Mae and arrive together at the ritual site, hidden away deep in a remote forest, miles away from the closest glimpse of civilization. 
            The first thing you notice is the stillness. The silence. The only sound that interrupts the deafening nothingness is your own heartbeat. 
            "This place... It feels exactly like the old ritual site," Mae whispers, seemingly hesitant to interrupt the quiet.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(47)">Right place, then. Let's get going.</button>
    `;
} else if (option === 15) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Nice timing, I just got back home. What did you find?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(16)">Found one that fits best. Here's the address.</button>
        <button onclick="setPacingMode('decision'); chooseOption(16)">Not a perfect fit, but my gut says this one.</button>
    `;
} else if (option === 16) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Okay, I trust you. Are you ready to head there now? We can meet up on the way.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(17)">I'm ready to go.</button>
        <button onclick="setPacingMode('decision'); chooseOption(18)">Are you up for it? Weren't you tired?</button>
    `;
} else if (option === 17) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I'll see you soon, then. Let's end this, for good this time.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(20)">Head to the address.</button>
    `;
} else if (option === 18) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I don't think I've ever been more tired in my life, honestly. But we don't have a lot of time, I'm not sure a nap is a good idea.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(17)">You're right, let's get going.</button>
        <button onclick="setPacingMode('decision'); chooseOption(19)">Let the cult wait. Don't pass out mid-ritual.</button>
    `;
} else if (option === 19) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Well, we can't have that, can we? Got it: short nap. Eyes open, brain mostly working. I'll meet you at the site after. Let's end this, for good this time.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(20)">Head to the address.</button>
    `;
} else if (option === 20) {
    story.innerHTML = ` 
            <div id="game-text">
            You make your way to the address. The area is quiet, almost idyllic. The wind softly rustles the leaves of the trees overhead. After looking around briefly, you spot Mae. He appears to be examining the middle of the area.
            </div> 
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(21)">Call out to him.</button>
        <button onclick="setPacingMode('decision'); chooseOption(21)">Walk over to him.</button>
    `;
} else if (option === 21) {
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            He looks towards you, his expression seems concerned.
            <br><br>
            "This place..." he trails off.
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(22)">It's too... peaceful.</button>
    `;
} else if (option === 22) {
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            "It is," he agrees. "Did we make a mistake? I don't see anything related to the cult here."
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(23)">Well. Rest up—we'll try again in the morning.</button>
    `;
} else if (option === 23) {
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            He hesitates momentarily, before agreeing, "All right, I'll let you know when I get home."
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(24)">Go home.</button>
    `;
} else if (option === 24) {
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Back in text form. So... what's the plan? Should we try to get some sleep?
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(25)">That's risky. What if something happens?</button>
        <button onclick="setPacingMode('decision'); chooseOption(25)">Maybe… but I can't sleep. Too much on my mind.</button>
    `;
} else if (option === 25) { //WRONG LOCATION
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            <div id="game-text">
            Yeah, that makes sense. I'll try my best to stay awake.
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(38)">(Several hours later... Time to check in on Mae...) Are you there?</button> 
    `;
} else if (option === 26) {
    story.innerHTML = ` 
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Nice timing, I just got back home. What did you find?
            </div> 
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(33)">Pretty sure this missing case links to the cult.</button>
        <button onclick="setPacingMode('decision'); chooseOption(33)">Nothing stood out, but this case fits best.</button>
    `;
} else if (option === 27) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Nice timing, I just got back home. What did you find?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(28)">Pretty sure this missing case links to the cult.</button>
        <button onclick="setPacingMode('decision'); chooseOption(28)">Nothing stood out, but this case fits best.</button>
    `;
} else if (option === 28) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Okay, I trust you. What should I do?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(29)">You have to get somewhere the cult can't reach.</button>
    `;
} else if (option === 29) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Do you have any suggestions?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(30)">What if you spend the night at Kessler's house?</button>
        <button onclick="setPacingMode('decision'); chooseOption(31)">Stay somewhere public. Like a hotel with staff.</button>
    `;
} else if (option === 30) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            It's worth a shot, I doubt anyone would find me that deep in the woods. I'll let you know when I get there.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(32)">Some time later...</button>
    `;
} else if (option === 31) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            That sounds like a good plan. Hopefully the front desk agent is up for what could be a very interesting night. I'll let you know when I get there.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(32)">Some time later...</button>
    `;
} else if (option === 32) { //WRONG PERSON
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I've arrived safely, I don't know if I'll be able to stay awake the entire night, but I'll try my best.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(41)">(Several hours later... Time to check in on Mae...) Are you there?</button>
    `;
} else if (option === 33) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Okay, I trust you. What should I do?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(34)">Sounds weird, but maybe handcuff yourself down?</button>
    `;
} else if (option === 34) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            ...I might have zip ties, but that's as close as I'm going to be able to get to handcuffing myself to anything.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(35)">That'll have to work, I hope it holds.</button>
        <button onclick="setPacingMode('decision'); chooseOption(36)">Wait… you don't have a random set of handcuffs?</button>
    `;
} else if (option === 35) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            You and me both. This is going to be a long night.
            <br><br>
            So... what's the plan? Should we try to get some sleep?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(37)">That's risky. What if something happens?</button>
        <button onclick="setPacingMode('decision'); chooseOption(37)">Maybe… but I can't sleep. Too much on my mind.</button>
    `;
} else if (option === 36) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Are you trying to tell me *you* have a random set of handcuffs? What reason could you possibly have to- Actually. You know what? I don't want to know.
            <br><br>
            So... what's the plan? Should we try to get some sleep?
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(37)">That's risky. What if something happens?</button>
        <button onclick="setPacingMode('decision'); chooseOption(37)">Maybe… but I can't sleep. Too much on my mind.</button>
    `;
} else if (option === 37) { //RIGHT PERSON
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            Yeah, that makes sense. I'll try my best to stay awake.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(44)">(Several hours later... Time to check in on Mae...) Are you there?</button>
    `;
} else if (option === 38) {
    story.innerHTML = ` 
            <div id="game-text">
            (You do not receive a reply.)
            </div> 
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(39)">Try again.</button> 
    `;
} else if (option === 39) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I think I accidentally fell asleep for a bit. I saw it. In my dream. The ritual site. I know where it is. And I... I can feel it pulling me in. I... don't know how long I'll be able to resist it. If I stop responding, you have to be ready. I hope it doesn't come to this but here's the location. Just in case.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(40)">It won't come to that.</button>
        <button onclick="setPacingMode('decision'); chooseOption(40)">I'll be ready, just in case.</button>
    `;
} else if (option === 40) { //WRONG LOCATION
    story.innerHTML = `
            <div id="game-text">
            Despite your best efforts, some time after this, his responses stop. It's time. You have to follow.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(63)">Proceed to the ritual.</button>
    `;
} else if (option === 41) {
    story.innerHTML = ` 
            <div id="game-text">
            (You do not receive a reply.)
            </div> 
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(42)">Try again.</button> 
    `;
} else if (option === 42) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I think I accidentally fell asleep for a bit. I saw it. In my dream. The ritual site. I know where it is. And I... I can feel it pulling me in. I... don't know how long I'll be able to resist it. If I stop responding, you have to be ready. I hope it doesn't come to this but here's the location. Just in case.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(43)">It won't come to that.</button>
        <button onclick="setPacingMode('decision'); chooseOption(43)">I'll be ready, just in case.</button>
    `;
} else if (option === 43) { //WRONG PERSON
    story.innerHTML = `
            <div id="game-text">
            Despite your best efforts, some time after this, his responses stop. It's time. You have to follow.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(63)">Proceed to the ritual.</button>
    `;
} else if (option === 44) {
    story.innerHTML = ` 
            <div id="game-text">
            (You do not receive a reply.)
            </div> 
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(45)">Try again.</button> 
    `;
} else if (option === 45) {
    story.innerHTML = `
        <div class="dialogue-container dialogue char-mae">
            <img id="profile-pic" src="images/mae.png" alt="Mae">
            <div id="game-text"><strong>Mae:</strong> 
            I think I accidentally fell asleep for a bit. I saw it. In my dream. The ritual site. I know where it is. And I... I can feel it pulling me in. I... don't know how long I'll be able to resist it. If I stop responding, you have to be ready. I hope it doesn't come to this but here's the location. Just in case.
            </div>
        </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(46)">It won't come to that.</button>
        <button onclick="setPacingMode('decision'); chooseOption(46)">I'll be ready, just in case.</button>
    `;
} else if (option === 46) { //RIGHT PERSON (HANDCUFFS)
    story.innerHTML = `
            <div id="game-text">
            Despite your best efforts, some time after this, his responses stop. It's time. You have to follow.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(88)">Proceed to the ritual.</button>
    `;
} else if (option === 47) {
    story.innerHTML = `
            <div id="game-text">
            As you approach the area where the trees start to thin, you begin to feel a sensation not unlike being deep underwater. Pressure. With every step towards the clearing you take, you feel it bearing down on you with increasing force. You glance over at Mae, wondering if he is also feeling the weight of the silence. If he is, he doesn't show it.
            You move forward. Step by step. Moment by moment. 
            <br><br>
            You can just barely make out shapes in the clearing. Dark, hooded figures, too numerous to count, encircle the entire area. They stand completely still in the darkness, not even seeming to breathe. You and Mae sneak forward, for the first time grateful for the cover of darkness. It doesn't seem like the figures noticed you. Or if they did, they didn't care. As you inch closer to the center of the clearing, you finally are able to glimpse past the hooded figures. 
            <br><br>
            In the middle of the clearing is, without a doubt, the ritual. 
            Eight stone pillars are arranged around a crevice in the ground, each with a small, flickering flame between them and the crevice. 
            In the firelight, you can make out figures attached to all but one of the pillars. Vessels. Sacrifices.
            They all appear to be in a dazed state, completely unaware of their surroundings.
            <br><br>
            Mae seems to be fixated on the empty stone pillar, staring at it with a mixture of fear and uncertainty. Your gut says you need to snap him out of it. Quickly.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(48)">Call out to him.</button>
    `;
} else if (option === 48) {
    story.innerHTML = `
            <div id="game-text">
            He jumps, surprised. However, Mae is not the only one to reach to the unexpected sound. Every cultist making up the outer ring of the clearing is looking at you. Before you can react, dozens of arms reach out, grabbing your arms. You've been caught. You look over at Mae, who fares no better. He looks back at you, struggling to break free from the cultists that had grabbed him, wondering if you have some sort of plan.
            <br><br>
            Unfortunately, the cultists don't seem inclined to give you time to think. After you lock eyes with Mae, you watch his eyes widen. Something cold touches your throat. Something metal. Too late, time seems to stand still. There's nothing you can do, the blade will cut your throat if you move even an inch. You notice Mae is looking past you, at whatever is holding the knife to your throat. No words are exchanged, but there seemed to be a discussion that you could not hear.
            <br><br>
            Mae looks at you again. "As soon as they let you go, run. Run back to the entrance."
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(49)">Agree to do as he says without arguing.</button>
        <button onclick="setPacingMode('decision'); chooseOption(50)">What about you?</button>
    `;
} else if (option === 49) {
    story.innerHTML = `
            <div id="game-text">
            He looks conflicted, but you don't have time to ask him about it. As soon as you agree, the knife leaves your throat, and Mae stops resisting the cultists. As promised, you run. None of the cultists acknowledge you as you run. You don't look back, but you think you can hear a rope being tightened. A quiet sound, but enough to cut through the silence. 
            <br><br>					
            You run until you reach the entrance. You're on your own, for now. What now?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(51)">Try to make out more details about the ritual.</button>
        <button onclick="setPacingMode('decision'); chooseOption(52)">Look for Mae.</button>
    `;
} else if (option === 50) {
    story.innerHTML = `
            <div id="game-text">
            "I'll be okay. They won't do anything to me yet, they need me for their ritual. Don't be afraid."
            <br><br>
            You have no choice but to agree. There's no other option. As soon as you agree, the knife leaves your throat, and Mae stops resisting the cultists. As promised, you run. None of the cultists acknowledge you as you run. You don't look back, but you think you can hear a rope being tightened. A quiet sound, but enough to cut through the silence. 
            <br><br>
            You run until you reach the entrance. You're on your own, for now. What now?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(51)">Try to make out more details about the ritual.</button>
        <button onclick="setPacingMode('decision'); chooseOption(52)">Look for Mae.</button>
    `;
} else if (option === 51) {
    story.innerHTML = `
            <div id="game-text">
            As you strain your eyes to make out details, anything that could be helpful, your eyes are drawn to the far side of the circle of stone pillars. There, between a set of four pillars on each side, sit a group of robed figures. They, like the others, are completely still, but their faces and heads are exposed. They are far enough that you struggle to make out details, but they all seem to have completely shaved heads, and are sitting with their eyes closed, facing the crevice in the middle of the clearing. 
            <br><br>
            But the strange cultists are not why you've come here. Where is Mae?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(52)">Look for Mae.</button>
    `;
} else if (option === 52) {
    story.innerHTML = `
            <div id="game-text">
            You feel a sense of dread rise in your chest as you carefully try to make out the faces of the people tied to the stone pillars. You can only see half of the "vessels" from where you're positioned, and Mae is not among them. 
            <br><br>
            While you can't see where he is, at least that means he's on the side closer to you. Suddenly, you hear a quiet tapping noise coming from your right. The cultists seem unbothered by it, motionless. There's only one person here who would be breaking the silence. Mae.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(53)">Move towards the source of the sound.</button>
    `;
} else if (option === 53) {
    story.innerHTML = `
            <div id="game-text">
            As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            <br><br>
            You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(54)">Look up.</button>
    `;
} else if (option === 54) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the crevice at the center. You realize with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void. 
            <br><br>        
            As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You're just barely able to get to him, when you hear the sickeningly quiet footsteps once again.
            <br><br> 
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            <br><br> 
            You try to ignore it. You can't think about it right now, not if you want to survive.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(55)">Touch Mae's hand to let him know you're there.</button>
        <button onclick="setPacingMode('decision'); chooseOption(56)">Untie the rope and free him immediately.</button>
    `;
} else if (option === 55) { // SO STEALTHY START
    story.innerHTML = `
            <div id="game-text">
            He stops the faint tapping sound in response, but you've reached an impasse. The cultists seem to be reactive to sound, but without talking, you have no way to communicate with Mae.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(57)">Continue.</button>
    `;
} else if (option === 56) { // MOST POPULAR START
    story.innerHTML = `
            <div id="game-text">
            No time like the present. You untie the ropes that hold Mae to the stone pillar. He obviously didn't expect you to do that, and stumbles before catching himself. 
            <br><br>
            Unfortunately, a vessel falling off of a stone pillar does tend to attract the attention of the cultists. Every cultist is looking at you.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(60)">Continue.</button>
    `;
} else if (option === 57) {
    story.innerHTML = `
            <div id="game-text">
            Mae shifts slightly, leaning into the pillar, testing the tension of the ropes. In a controlled, fluid motion, he frees one arm, then the other. The ropes fall to the stone floor with a quiet snap. He's off the pillar, moving into the shadow of a nearby altar. You exhale quietly—you can't risk a sound. The cultists do not seem to have noticed. With each sacrificed vessel, they seem to become more and more entranced. This might be our best opportunity to get out of here...
            <br><br>
            Mae's eyes flick to the remaining vessels. They're all slumped, unconscious or dazed, tied to their own pillars. They barely notice the world around them. You know they'll be of no help, but you're not sure if you'll be able to convince Mae to abandon them, if that's your intention.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(58)">We need to leave.</button>
        <button onclick="setPacingMode('decision'); chooseOption(59)">We should try to save the other vessels.</button>
    `;
} else if (option === 58) {
    story.innerHTML = `
            <div id="game-text">
            Mae glances at you, eyes wide, hesitant. "I… I know. It's probably too late for them… The cultists with the knives will reach them any moment now." His voice is tight, barely a whisper. <br>
            You grasp his arm gently, urging him toward the shadows. He hesitates for a heartbeat longer, then finally nods.
            <br><br>
            As you move away, the ground beneath your feet trembles subtly, a low, resonant vibration that seems to echo from the center of the ritual. The oppressive pressure in your ears eases, and the air feels less heavy. Somewhere deep in the clearing, the precise symmetry of the sacrifices collapses—the ritual's structure falters.
            <br><br>
            Even as you slip further into the shadows, the feeling that you didn't do enough lingers. Mae walks beside you, silent but alert, his quiet grief palpable, yet there is relief in the small victory: the ritual has failed, and for now, the world remains intact.
            </div>
    `;
    choices.innerHTML = `
        <button class="twilight">Ending: Twilight Remnant</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 59) {
    story.innerHTML = `
            <div id="game-text">
            You nod, ready to help, and together you carefully move toward the vessel opposite where Mae was restrained, working quickly to undo the bindings. The vessel slumps down, unconscious. As Mae lifts them up, you hear the soft, eerie footsteps and the dripping of fresh blood that follows. You don't look at Mae, but you can imagine the kind of face he's making, the silent anguish in his eyes.
            <br><br>
            Even as you move the rescued vessel toward the shadows, the ground shivers faintly beneath your feet. The ritual's rhythm, the symmetry of the sacrifices, falters. The black blood no longer flows in perfect alignment. A pressure in your ears eases, and the air feels lighter, as though the void itself hesitates.
            <br><br>
            Mae glances at you, his expression a mixture of relief and grief.  "We stopped it…"
            <br><br>
            You don't answer. Words feel useless. The surviving vessel stirs slightly in Mae's arms, and you both slip into the shadows, carrying the weight of what was lost—and the fragile relief of what you managed to save.
            </div>
    `;
    choices.innerHTML = `
        <button class="twilight">Ending: Twilight Remnant</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 60) {
    story.innerHTML = `
            <div id="game-text">
            Mae's feet hit the stone floor, and for the briefest moment, the cultists hesitate. You see it in the way their formations tighten. Every gaze snaps to him, every body shifts like a tide. Their sole purpose is clear: he must return to the pillar. Fast.
            <br><br>
            You feel the gravity of the moment. Every step you take is a gamble. Every hesitation might undo your fragile advantage.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(61)">Grab Mae and run for the forest.</button>
        <button onclick="setPacingMode('decision'); chooseOption(62)">Fight back.</button>
    `;
} else if (option === 61) {
    story.innerHTML = `
            <div id="game-text">
            You seize Mae's arm and pull. He stumbles, catching himself just in time. The clearing seems to shrink around you as dozens of cultists pivot, their mass of bodies surging toward you.
            <br><br>
            You don't look back, only at the line of trees ahead. You dive between pillars, using stone and ruined altar slabs as blind obstacles. 
            <br><br>
            The world narrows to the feeling of the wind. The warmth of Mae's arm in your hand. The reminders that you're alive. That you are so close to making it. Then a gap opens: a cluster of cultists overcommits to cutting you off, and you slip through. You've made it.
            <br><br>
            Branches whip your face. Leaves tear at your shirt. Behind the trees the clearing is contained, fading into the distance. Into the past. The cultists stream to the edge and then stop. There is a pause, as if the whole world is holding its breath. The pressure in the air stutters; the ordered fall of the sacrifices broken by Mae's absence. The rift wavers like a star that has begun to fold inward, then slackens and shrinks.
            <br><br>
            Mae collapses to his knees in the undergrowth, chest heaving. He looks at the path back, at the smudged, distant circle, and then at you. Relief is thin and raw, threaded with grief for those they couldn't save. The void's pressure eases from your ears; the world feels lighter. You finally release his arm.
            <br><br>
            You made it. The ritual has failed. Mae is alive.
            </div>
    `;
    choices.innerHTML = `
        <button class="twilight">Ending: Twilight Remnant</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 62) {
    story.innerHTML = `
            <div id="game-text">
            Mae struggles as the cultists surge toward him. You lunge to reach him, but the sheer number of them pushes you back. He sways, resisting with all his strength, but each step is met with a wall of bodies pressing him further. One last shove sends him staggering backward.
            <br><br>
            You reach him just as he loses his footing, tripping over a slab of stone and falling toward the ground, his side landing against a small, iron brazier. The metal bites sharply into him. A strangled gasp escapes his lips, and you see a scarlet bloom of blood spreading across his torso.
            <br><br>
            Mae's breathing is shallow, uneven. But his eyes find you, and there's no panic in them; only recognition, and a strange kind of relief. “It's alright,” he says softly, voice thinner than before. “It's… all right.”
            <br><br>
            You shake your head, pressing a hand to his wound as if that could change anything. The air hums with collapsing pressure — the rift shuddering, the void's pull faltering. The ritual unravels, its balance broken by his absence.
            <br><br>
            Mae exhales, a quiet sound between a sigh and a release. His gaze turns toward the trembling light above, then back to you. “You'll be fine,” he murmurs. “You did enough.” His eyes close. The tension in his body fades.
            <br><br>
            The black blood at the center of the ritual recoils violently, writhing away from the new, raw red that stains the stone. The symmetry of the sacrifices shatters; the earth steadies. The forest wind returns, brushing through the clearing like the world itself taking a breath.
            <br><br>
            The cultists freeze, their trance broken. Confused murmurs ripple through them, guilt and fear tangled with disbelief. Mae's body lies motionless upon the brazier. You stay beside him as the silence settles, not because you expect him to wake, but because leaving feels wrong. 
            <br><br>
            Outside the circle, the ground trembles and eases, the void recoiling, leaving a fragile, mournful silence. Its cost is written in the stillness of Mae's form, in the loss of what might have been.
            </div>
    `;
    choices.innerHTML = `
        <button class="stygian">Ending: Stygian Harbinger</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 63) {
    story.innerHTML = `
            <div id="game-text">
            As you approach the area where the trees start to thin, you begin to feel a sensation not unlike being deep underwater. Pressure. With every step towards the clearing you take, you feel it bearing down on you with increasing force. 
            <br>And yet, you move forward. Step by step. Moment by moment. 
            <br><br>
            You can just barely make out shapes in the clearing. Dark, hooded figures, too numerous to count, encircle the entire area. They stand completely still in the darkness, not even seeming to breathe. You sneak forward, for the first time grateful for the cover of darkness. It doesn't seem like the figures noticed you. Or if they did, they didn't care. As you inch closer to the center of the clearing, you finally are able to glimpse past the hooded figures. 
            <br><br>
            <br>In the middle of the clearing is, without a doubt, the ritual. 
            <br>Eight stone pillars are arranged around a crevice in the ground, each with a small, flickering flame between them and the crevice. 
            <br>In the firelight, you can make out figures attached to the pillars. Vessels. Sacrifices.
            <br>They all appear to be in a dazed state, completely unaware of their surroundings.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(64)">Try to make out more details about the ritual.</button>
        <button onclick="setPacingMode('decision'); chooseOption(65)">Look for Mae.</button>
    `;
} else if (option === 64) {
    story.innerHTML = `
            <div id="game-text">
            As you strain your eyes to make out details, anything that could be helpful, your eyes are drawn to the far side of the circle of stone pillars. There, between a set of four pillars on each side, sit a group of robed figures. They, like the others, are completely still, but their faces and heads are exposed. They are far enough that you struggle to make out details, but they all seem to have completely shaved heads, and are sitting with their eyes closed, facing the crevice in the middle of the clearing. 
            <br>But the strange cultists are not why you've come here. Where is Mae?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(65)">Look for Mae.</button>
    `;
} else if (option === 65) {
    story.innerHTML = `
            <div id="game-text">
            You feel a sense of dread rise in your chest as you carefully try to make out the faces of the people tied to the stone pillars. You can only see half of the "vessels" from where you're positioned, and Mae is not among them. 
            <br>While you can't see where he is, at least that means he's on the side closer to you.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(66)">Move left and look for Mae.</button>
        <button onclick="setPacingMode('decision'); chooseOption(78)">Move right and look for Mae.</button>
        <button onclick="setPacingMode('decision'); chooseOption(84)">Wait to see what happens.</button>
    `;
} else if (option === 66) {
    story.innerHTML = `
            <div id="game-text">
            You move to the left. You're able to make out the face of the person on the farthest stone on your side. Mae. 
            <br><br>
            As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            <br>You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(67)">Look up.</button>
    `;
} else if (option === 67) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the impossibly dark crevice at the center. You realize with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(68)">You know where Mae is. Move towards him.</button>
        <button onclick="setPacingMode('decision'); chooseOption(75)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 68) {
    story.innerHTML = `
            <div id="game-text">
            As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight. You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(69)">He's so close. You're almost there. Reach him.</button>
        <button onclick="setPacingMode('decision'); chooseOption(74)">You still have time. You need to be cautious.</button>
    `;
} else if (option === 69) {
    story.innerHTML = `
            <div id="game-text">
            You close the last of the distance separating you and Mae. You need a plan.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(70)">Try to wake him. You know you saw him move.</button>
        <button onclick="setPacingMode('decision'); chooseOption(73)">Untie the rope. Once he's free... Later problem.</button>
    `;
} else if (option === 70) {
    story.innerHTML = `
            <div id="game-text">
            You decide to try and wake him. How?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(71)">Squeeze his hand. Hard.</button>
        <button onclick="setPacingMode('decision'); chooseOption(72)">Punch him. He probably deserves it.</button>
    `;
} else if (option === 71) { // SO STEALTHY START
    story.innerHTML = `
            <div id="game-text">
            Thinking of the best way to wake someone up as quietly as possible, you reach out and take his hand. You squeeze it. Hard. And by some miracle, you feel him squeeze your hand back. Mae is awake.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(57)">Continue.</button>
    `;
} else if (option === 72) { // MOST POPULAR START
    story.innerHTML = `
            <div id="game-text">
            You punch him with as much force as you can muster from the awkward positioning. The impact is louder than you had intended, and you feel a growing sense of panic as the sound echoes around the clearing. You look up at Mae. He's awake, but he looks incredibly alarmed. Surely the entire "being sacrificed for the beginning of the end of the world" is the cause for alarm... Right? You look around. 
            <br><br>
            Every single cultist surrounding the ritual circle is facing you. You can't see their faces, but you can feel hundreds of eyes on you. You hurriedly untie him. Might as well, since you've already been noticed.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(60)">Continue.</button>
    `;
} else if (option === 73) { // MOST POPULAR START
    story.innerHTML = `
            <div id="game-text">
            You turn your attention to the rope around his wrists. Once you untie this, the most likely outcome is he falls off the pillar, crashing into the ground. It will be loud, but you're running out of options. Running out of time. You untie the rope from Mae's wrists, and he falls to the ground unceremoniously. The impact is louder than you had intended, and you feel a growing sense of panic as the sound echoes around the clearing. You look down at Mae. He's awake, but he looks incredibly alarmed. Surely the entire "being sacrificed for the beginning of the end of the world" is the cause for alarm... Right? You look around. 
            <br><br>
            Every single cultist surrounding the ritual circle is facing you. You can't see their faces, but you can feel hundreds of eyes on you. You hurriedly untie him. Might as well, since you've already been noticed.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(60)">Continue.</button>
    `;
} else if (option === 74) { // INNER PEACE START
    story.innerHTML = `
            <div id="game-text">
            You remain where you are, taking in the things happening around you. Aside from the cultists with knives, not a single cultist has moved since you entered the clearing. Your eyes wander unwillingly past where Mae is suspended on the pillar, towards a group of cultists at the far end of the circle, between the last two vessels. Unlike the others, they do not obscure their faces with hoods. Each of them have their eyes closed, and you can't help but think they look... extraordinarily peaceful. It feels wrong to admit this, but after the chaos of the past couple days, your filter is all but worn out. Their heads are all completely shaved, and they appear to sit cross-legged on a pedestal between the two final stone pillars holding Mae and another vessel. 
            <br><br>
            You aren't sure how long you wait, observing these bizarre cultists. Too long.
            <br>Your peaceful trance is interrupted when the lights cast on their hairless faces change: Another set of fires have gone out. The pressure in your ears has grown so intense that you didn't hear the footsteps start again, nor can you hear the quiet, methodical dripping of the black blood spilling towards the crevice.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(105)">Continue.</button>
    `;
} else if (option === 75) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(76)">Start moving towards Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(77)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 76) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 77) { // DOUBLE-EDGED START
    story.innerHTML = `
            <div id="game-text">
            These cultists seem to move in a pattern... If you can somehow disable one of these two, the ritual would stop. You look at the knife if the cultist's hand, still held to the throat of its latest victim.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(108)">Continue.</button>
    `;
} else if (option === 78) {
    story.innerHTML = `
            <div id="game-text">
            You move to the right. You're able to make out the face of the person on the first stone from the entrance on your side. You don't recognize them.
            <br><br>
            As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            <br>You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(79)">Look up.</button>
    `;
} else if (option === 79) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the crevice at the center. You look back at the first stone pillar on your side of the circle, after realizing with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(80)">You need to find Mae. Now.</button>
        <button onclick="setPacingMode('decision'); chooseOption(81)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 80) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight. You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 81) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(82)">Start looking for Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(83)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 82) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 83) { // DOUBLE-EDGED START
    story.innerHTML = `
            <div id="game-text">
            These cultists seem to move in a pattern... If you can somehow disable one of these two, the ritual would stop. You look at the knife if the cultist's hand, still held to the throat of its latest victim.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(108)">Continue.</button>
    `;
} else if (option === 84) {
    story.innerHTML = `
            <div id="game-text">
            You decide to wait, taking in what is happening around you. The cultists still seem to be paying you no mind, utterly still. Utterly silent. The flames in the inner part of the ritual flicker weakly.
            <br><br>					
			As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(85)">Look up.</button>
    `;
} else if (option === 85) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the crevice at the center. You realize with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(86)">You need to find Mae. Now.</button>
        <button onclick="setPacingMode('decision'); chooseOption(87)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 86) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            <br>You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 87) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(82)">Start looking for Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(83)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 88) {
    story.innerHTML = `
            <div id="game-text">
            As you approach the area where the trees start to thin, you begin to feel a sensation not unlike being deep underwater. Pressure. With every step towards the clearing you take, you feel it bearing down on you with increasing force. 
            <br>And yet, you move forward. Step by step. Moment by moment. 
            <br><br>
            You can just barely make out shapes in the clearing. Dark, hooded figures, too numerous to count, encircle the entire area. They stand completely still in the darkness, not even seeming to breathe. You sneak forward, for the first time grateful for the cover of darkness. It doesn't seem like the figures noticed you. Or if they did, they didn't care. As you inch closer to the center of the clearing, you finally are able to glimpse past the hooded figures. 
            <br><br>
            <br>In the middle of the clearing is, without a doubt, the ritual. 
            <br>Eight stone pillars are arranged around a crevice in the ground, each with a small, flickering flame between them and the crevice. 
            <br>In the firelight, you can make out figures attached to the pillars. Vessels. Sacrifices.
            <br>They all appear to be in a dazed state, completely unaware of their surroundings.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(89)">Try to make out more details about the ritual.</button>
        <button onclick="setPacingMode('decision'); chooseOption(90)">Look for Mae.</button>
    `;
} else if (option === 89) {
    story.innerHTML = `
            <div id="game-text">
            As you strain your eyes to make out details, anything that could be helpful, your eyes are drawn to the far side of the circle of stone pillars. There, between a set of four pillars on each side, sit a group of robed figures. They, like the others, are completely still, but their faces and heads are exposed. They are far enough that you struggle to make out details, but they all seem to have completely shaved heads, and are sitting with their eyes closed, facing the crevice in the middle of the clearing. 
            <br>But the strange cultists are not why you've come here. Where is Mae?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(90)">Look for Mae.</button>
    `;
} else if (option === 90) {
    story.innerHTML = `
            <div id="game-text">
            You feel a sense of dread rise in your chest as you carefully try to make out the faces of the people tied to the stone pillars. You can only see half of the "vessels" from where you're positioned, and Mae is not among them. 
            <br>While you can't see where he is, at least that means he's on the side closer to you.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(91)">Move left and look for Mae.</button>
        <button onclick="setPacingMode('decision'); chooseOption(97)">Move right and look for Mae.</button>
        <button onclick="setPacingMode('decision'); chooseOption(102)">Wait to see what happens.</button>
    `;
} else if (option === 91) {
    story.innerHTML = `
            <div id="game-text">
            You move to the left. You're able to make out the face of the person on the farthest stone on your side. Mae. 
            <br><br>
            As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            <br>You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(92)">Look up.</button>
    `;
} else if (option === 92) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the impossibly dark crevice at the center. You realize with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(93)">You know where Mae is. Move towards him.</button>
        <button onclick="setPacingMode('decision'); chooseOption(95)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 93) {
    story.innerHTML = `
            <div id="game-text">
            As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. His left wrist is noticeably bruised and you see a faint, thin indent. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight. You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(94)">He's so close. You're almost there. Reach him.</button>
        <button onclick="setPacingMode('decision'); chooseOption(74)">You still have time. You need to be cautious.</button>
    `;
} else if (option === 94) {
    story.innerHTML = `
            <div id="game-text">
            You close the last of the distance separating you and Mae. You need a plan.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(70)">Try to wake him. You know you saw him move.</button>
        <button onclick="setPacingMode('decision'); chooseOption(73)">Untie the rope. Once he's free... Later problem.</button>
    `;
} else if (option === 95) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(96)">Start moving towards Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(77)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 96) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. His left wrist is noticeably bruised and you see a faint, thin indent. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 97) {
    story.innerHTML = `
            <div id="game-text">
            You move to the right. You're able to make out the face of the person on the first stone from the entrance on your side. You don't recognize them.
            <br><br>
            As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            <br>You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(98)">Look up.</button>
    `;
} else if (option === 98) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the crevice at the center. You look back at the first stone pillar on your side of the circle, after realizing with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(99)">You need to find Mae. Now.</button>
        <button onclick="setPacingMode('decision'); chooseOption(100)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 99) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. His left wrist is noticeably bruised and you see a faint, thin indent. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight. You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 100) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(101)">Start looking for Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(83)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 101) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. His left wrist is noticeably bruised and you see a faint, thin indent. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 102) {
    story.innerHTML = `
            <div id="game-text">
            You decide to wait, taking in what is happening around you. The cultists still seem to be paying you no mind, utterly still. Utterly silent. The flames in the inner part of the ritual flicker weakly.
            <br><br>					
			As you begin to ponder your next move, something breaks the silence. Footsteps. Light. They would be unheard in any other circumstance, but the unbroken silence that consumes the area seems almost desperate to be broken by the smallest of noises, as if the air itself was resisting the touch of the void. 
            You look towards the source of the footsteps. Two of the hooded figures have moved into the inner part of the clearing, each taking up a position at the first set of stone pillars. You see something glint in the hand of the hooded figure across from you as it catches the light of the fire. Before you can even form a guess about the identity of the object, you hear a new sound. A slow, methodical drip. The first set of fires flicker violently in futile protest before disappearing. Your gaze drifts downward, and you see black liquid running from the stone pillar toward the crevice. The black liquid must have extinguished the flame as it passed over it, you think to yourself.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(102)">Look up.</button>
    `;
} else if (option === 102) {
    story.innerHTML = `
            <div id="game-text">
            Your gaze rises, resting on the first stone pillar opposite you, with the hooded cultist still standing behind it, now unmoving. Their arm is still raised... Still? When did they raise their arm? Your eyes follow the path of the raised arm, from elbow to their hand, before being confronted with the source of the dripping sound. A black-bladed knife lays against the neck of the first vessel, as unnatural, black blood falls from the path left in its wake. The blood falls from the neck of the first vessel, flowing into the grooves on the ground, before extinguishing the fire and disappearing into the crevice at the center. You realize with horror that the first set of fires had gone out instantaneously. In a single moment, two vessels were successfully offered to the Endless Void.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(103)">You need to find Mae. Now.</button>
        <button onclick="setPacingMode('decision'); chooseOption(104)">Stay still. The armed cultists are dangerous.</button>
    `;
} else if (option === 103) { // TIME'S UP START
    story.innerHTML = `
            <div id="game-text">
            You look around frantically, trying to catch a glimpse of the vessels that you haven't yet seen. No... No... Not this one either... There! The very last stone pillar. He's close. As you move towards Mae, you notice his hands, tied behind him, around the stone pillar. His left wrist is noticeably bruised and you see a faint, thin indent. You think you see his fingers twitch, but it could've just been your eyes playing tricks on you in the firelight.
            <br>You're able to get to the stone pillar just before him, when you hear the sickeningly quiet footsteps once again.
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(120)">Continue.</button>
    `;
} else if (option === 104) {
    story.innerHTML = `
            <div id="game-text">
            You remain frozen in place, observing the cultists with knives for any sign of further movement. They remain so still that if they hadn't moved moments earlier, you'd think they were statues. After several excruciatingly long moments pass, you tentatively take a step backward, moving back into the crowd of unresponsive cultists. The footsteps begin again. 
            <br><br>
            You don't look. You don't have to. The sound of the dripping. The symmetrical extinguishing of the fires. Two more vessels have been offered to the Void, their blackened blood flowing into the depths of nothingness. The cultists with the knives once again stand motionless, knife still against the throat of the last culled victim. The pressure in your ears grows, and you can smell metal in the air. You can taste the iron on your tongue.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(101)">Start looking for Mae again.</button>
        <button onclick="setPacingMode('decision'); chooseOption(83)">Move towards the cultists with the knives.</button>
    `;
} else if (option === 105) { // INNER PEACE ENDING BEGIN
    story.innerHTML = `
            <div id="game-text">
            You take a step closer. You can't help it.<br>
            What inspires such peace?<br>
            <br>
            The air feels thick, slow. Each breath tastes like dust and honey.<br>
            Their faces — serene, eyes closed, lips curved just so — are all the same.<br>
            Not similar. The same.<br>
            <br>
            Your pulse stutters. The pressure in your skull hums.<br>
            The clearing grows darker. The trees lean inward.<br>
            <br>
            But you don't notice.<br>
            <br>
            You're so close now.<br>
            You could touch them.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(106)">Reach out and touch them.</button>
        <button onclick="setPacingMode('decision'); chooseOption(107)">This is wrong. Pull away.</button>
    `;
} else if (option === 106) {
    story.innerHTML = `
            <div id="game-text">
            You raise your hand... or maybe it raises itself.<br>
            You mean to touch the one in front.<br>
            Their skin looks soft. Waxen. Unmoving.<br>
            <br>
            But you don't get that far.<br>
            <br>
            Behind you, something sharp moves in the dark. The black blades have claimed their final victims. Mae's throat opens, and the blood runs freely — down, down, down into the rift below to feed the unending hunger of the ever expansive nothingness.<br>
            <br>
            You do not fall. You are unmade.<br>
            <br>
            All life dissolves into the quiet.<br>
            Returned to the primordial dark.<br>
            <br>
            Everything is as it should be.<br>
            Everything is.
            </div>
    `;
    choices.innerHTML = `
        <button class="abyssal">Ending: Abyssal Heir</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 107) {
    story.innerHTML = `
            <div id="game-text">
            You jerk back, a shiver crawling up your spine.<br>
            No. This is wrong.<br>
            <br>
            The clearing seems to ripple, folding in on itself. The cultists, their serene smiles, flicker like broken reflections.<br>
            You breathe, and your own heartbeat sounds alien, echoing from everywhere and nowhere.<br>
            <br>
            The black blades move again, silent, graceful.<br>
            Mae is ahead... or behind. You can't be certain.<br>
            You glimpse the blood, impossibly dark, curling and twisting as it flows toward the rift.<br>
            <br>
            Whispers.<br>
            Soft. Insistent.<br>
            It wants you.<br>
            It knows.<br>
            <br>
            Pressure. Head. Everywhere.<br>
            Heartbeat. Alien. Echoing.<br>
            <br>
            Choice.<br>
            Gone.<br>
            Last thought.<br>
            Void.<br>
            <br>
            Everything.<br>
            Is.<br>
            As it should be.
            </div>
    `;
    choices.innerHTML = `
        <button class="abyssal">Ending: Abyssal Heir</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 108) { // DOUBLE EDGED ENDING BEGIN 
    story.innerHTML = `
            <div id="game-text">
            
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(109)">Grab the knife.</button>
    `;
} else if (option === 109) {
    story.innerHTML = `
            <div id="game-text">
            You charge at the knife-wielding cultist. As your fingers close around the black blade, the cultist does not resist. The metal bites into your skin, drawing a thin line of blood, but you don't let go. You wrench the weapon free, staggering back toward the rift. The air trembles. Every cultist has turned to face you now, but they aren't attacking.<br>
            <br>
            They're <em>staring</em>.<br>
            <br>
            At your hand. At the blood dripping from your fingers.<br>
            <br>
            You follow their gaze, watching the droplets fall, red striking black. The moment they meet, the black blood recoils violently, arching and twisting away like it's alive... like it's afraid.<br>
            <br>
            You take a step forward. The cultists flinch.<br>
            <br>
            If the black blood reacts like that to human blood... then maybe it could stop the ritual.<br>
            <br>
            You glance around the clearing. There isn't much time.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(110)">The elder cultists, motionless and smiling.</button>
        <button onclick="setPacingMode('decision'); chooseOption(113)">Mae, unconscious, still suspended from the pillar.</button>
        <button onclick="setPacingMode('decision'); chooseOption(115)">The other remaining vessels, strangers.</button>
    `;
} else if (option === 110) {
    story.innerHTML = `
            <div id="game-text">
            You approach the elders. Their faces are locked in that same wide grin, unblinking, as if carved in wax. Even when the others stirred, these ones never moved, not once. Their silence feels almost defiant.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(111)">Sacrifice</button>
        <button onclick="setPacingMode('decision'); chooseOption(112)">Choose another.</button>
    `;
} else if (option === 111) {
    story.innerHTML = `
            <div id="game-text">
            You press the blade against one of their arms. The surface caves in with a brittle sound, like puncturing old paper. No blood. Not even black. Just dust.<br>
            <br>
            They don't move.<br>
            They can't.<br>
            <br>
            Whatever they once were has already been offered up. There's nothing left to take, nothing left that can bleed.<br>
            <br>
            The knife feels heavier in your hand. You turn back to the others.
            </div>
    `;
    choices.innerHTML = `
        <button class="elders">The elder cultists, motionless and smiling.</button>
        <button onclick="setPacingMode('decision'); chooseOption(117)">Mae, unconscious, still suspended from the pillar.</button>
        <button onclick="setPacingMode('decision'); chooseOption(119)">The other remaining vessels, strangers.</button>
    `;
} else if (option === 112) {
    story.innerHTML = `
            <div id="game-text">
            Time seems to stand still as you hold the fate of the world in your hands. A decision must be made.
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(110)">The elder cultists, motionless and smiling.</button>
        <button onclick="setPacingMode('decision'); chooseOption(113)">Mae, unconscious, still suspended from the pillar.</button>
        <button onclick="setPacingMode('decision'); chooseOption(115)">The other remaining vessels, strangers.</button>
    `;
} else if (option === 113) {
    story.innerHTML = `
            <div id="game-text">
            You look toward Mae, limp against the bindings, a faint rise and fall of breath the only sign he's still alive. You know, deep down, that if this truly could end it, if his blood could save everyone, he would offer it freely.<br><br>
            So why do you hesitate?
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(114)">Sacrifice</button>
        <button onclick="setPacingMode('decision'); chooseOption(112)">Choose another.</button>
    `;
} else if (option === 114) {
    story.innerHTML = `
            <div id="game-text">
            He looks peaceful, almost. Like someone asleep in a dream they'll never wake from.<br>
            <br>
            The knife trembles in your hand. You're alone, with just the low hum of the rift behind you, that endless, starving sound.<br>
            <br>
            You step closer. The air feels heavier here, as if the world itself is waiting for your choice.<br>
            <br>
            He said that if something happened to him, you would have to find a way to stop the ritual on your own.<br>
            You wish he hadn't trusted you with that.<br>
            <br>
            Your grip tightens on the knife, and you close your eyes.<br>
            <br>
            "I'm sorry."<br>
            <br>
            The blade finds its mark in a single motion — deliberate, steady, merciful. His blood spills bright against the black stone, too human, too red. The darkness recoils as though burned. The rift quakes, folds inward on itself, shrinking, collapsing like a dying star devouring its own light.<br>
            <br>
            The cultists fall silent. The world holds its breath.<br>
            <br>
            When it's over, you open your eyes. Mae's body remains bound to the altar — untouched by the collapse, still and quiet, as though he's simply fallen asleep again. His blood stains the stone below, sealing the rift shut.<br>
            <br>
            You reach out. He's already cold.<br>
            <br>
            The air is still. The night is endless.<br>
            But the world endures.
            </div>
    `;
    choices.innerHTML = `
        <button class="stygian">Ending: Stygian Harbinger</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 115) {
    story.innerHTML = `
            <div id="game-text">
            You glance toward the other vessels, faces pale, bodies trembling. You don't know their names, or what lives they had before this. They were just in the wrong place at the wrong time. But you don't know them. 
            <br>Would their blood be easier to wash from your hands?
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(116)">Sacrifice</button>
        <button onclick="setPacingMode('decision'); chooseOption(112)">Choose another.</button>
    `;
} else if (option === 116) {
    story.innerHTML = `
            <div id="game-text">
            You don't know their names. You don't know who they were before this. All you see now are outlines... people reduced to purpose.<br>
            <br>
            Your gaze flicks back to Mae, still motionless. It would be easier if he could tell you what to do. But he can't.<br>
            <br>
            You turn back to the strangers. The knife feels heavier with every heartbeat.<br>
            <br>
            You know what needs to be done.<br>
            <br>
            You walk toward one of them. Their eyes are half-open, unfocused, lost somewhere far away. You tell yourself they don't feel it, that they're already gone. But when the blade meets flesh, there's a sharp breath, a twitch of the fingers. For a second, you think you see them looking at you.<br>
            <br>
            Human blood hits the altar, spilling down across the carved lines. The black blood spasms away from it, shrieking soundlessly, as if in agony. The ground trembles beneath your feet. The rift collapses inward, shrinking, folding in on itself until nothing remains but the echo of the wind.<br>
            <br>
            You drop the knife. It clatters against the stone, slick with red and black.<br>
            <br>
            You've stopped the ritual.<br>
            You've saved the world.<br>
            <br>
            You can tell yourself that, if it helps.<br>
            <br>
            When you finally look back toward Mae, he's still unconscious, the faint rise and fall of his chest barely visible in the dim light.<br>
            <br>
            The night is silent now.<br>
            Too silent.
            </div>
    `;
    choices.innerHTML = `
        <button class="twilight">Ending: Twilight Remnant</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 117) {
    story.innerHTML = `
            <div id="game-text">
            You look toward Mae, limp against the bindings, a faint rise and fall of breath the only sign he's still alive. You know, deep down, that if this truly could end it, if his blood could save everyone, he would offer it freely.<br><br>
            So why do you hesitate?
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(114)">Sacrifice</button>
        <button onclick="setPacingMode('decision'); chooseOption(118)">Choose another.</button>
    `;
} else if (option === 118) {
    story.innerHTML = `
            <div id="game-text">
            Time seems to stand still as you hold the fate of the world in your hands. A decision must be made.
            </div>
    `;
    choices.innerHTML = `
        <button class="elders">The elder cultists, motionless and smiling.</button>
        <button onclick="setPacingMode('decision'); chooseOption(117)">Mae, unconscious, still suspended from the pillar.</button>
        <button onclick="setPacingMode('decision'); chooseOption(119)">The other remaining vessels, strangers.</button>
    `;
} else if (option === 119) {
    story.innerHTML = `
            <div id="game-text">
            You glance toward the other vessels, faces pale, bodies trembling. You don't know their names, or what lives they had before this. They were just in the wrong place at the wrong time. But you don't know them. 
            <br>Would their blood be easier to wash from your hands?
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(116)">Sacrifice</button>
        <button onclick="setPacingMode('decision'); chooseOption(118)">Choose another.</button>
    `;
} else if (option === 120) { // TIME'S UP ENDING BEGIN
    story.innerHTML = `
            <div id="game-text">
            With every movement the armed cultists make, Mae gets closer to death, and the ritual draws closer to completion. You should've moved faster. There's still time. Run.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(121)">Run.</button>
    `;
} else if (option === 121) {
    story.innerHTML = `
            <div id="game-text">
            You run to where Mae remains tied to the stone pillar. As you run, you watch another set of fires darken. Another set of vessels offered. You are out of time.
            </div>
    `;
    choices.innerHTML = `
        <button class="red" onclick="setPacingMode('decision'); chooseOption(122)">Untie him.</button>
    `;
} else if (option === 122) {
    story.innerHTML = `
            <div id="game-text">
            You reach him, your hands shaking as you struggle to undo the bindings. <br>
            The pounding of your heart thrums in your ears, deafening, growing louder with each hurried breath. <br>
            A footstep. Soft. <br>
            Mae's body is rigid against the stone pillar, his tied hands twitching slightly: a cruel, fragile sign of life. <br>
            Step. <br>
            Your fingers slip again, the knot refusing to give. <br>
            Step. <br>
            You smell iron. <br>
            Step. <br>
            The knot finally tears free with a sharp snap. He's free.<br>
            <br>
            Were you too late?
            </div>
    `;
    choices.innerHTML = `
        <button onclick="setPacingMode('decision'); chooseOption(123)">Yes.</button>
        <button onclick="setPacingMode('decision'); chooseOption(124)">I saved him.</button>
    `;
} else if (option === 123) {
    story.innerHTML = `
            <div id="game-text">
            "The bindings are off. I got you out, Mae. You're free," you whisper, your voice trembling.<br>
            But there is no response. No stir, no whisper of thanks. The smell of iron hangs, thick, like a warning. Drip… drip… drip… each drop a pulse in the marrow of your skull. The world shivers.<br>
            <br>
            The fires around you flicker and die. The ritual presses forward, unstoppable. The black blood slides toward the rift like water down an unending slope. You realize, with a sickening clarity, that it's too late. You were just moments away… moments too late.<br>
            <br>
            You reach for him. There is only emptiness. Time stretches sideways, leaking into a dark infinity where nothing remembers your name. The rift sighs, patient, infinite. Whispers curl through your skull: memories that are not yours, voices that are not voices.<br>
            <br>
            And then, silence.<br>
            You are alone.
            </div>
    `;
    choices.innerHTML = `
        <button class="abyssal">Ending: Abyssal Heir</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
} else if (option === 124) {
    story.innerHTML = `
            <div id="game-text">
            You pull Mae towards you as soon as the binding come loose, and you hear a "clang" as the knife hits the stone pillar where Mae's throat was mere seconds ago. <br>
            As the clang of the knife echoes around the clearing, you hear a gasp from the cultists. They all are gazing at the symmetrical vessel on the other side of the circle, just across from where Mae was. The black blood drips from their neck. The symmetry is broken.<br>
            <br>
            For a heartbeat, nothing seems to happen. Then, all at once: the black blood shivers, recoiling as if in pain. The rift wavers, a shadowy gash in the world, and the earth itself seems to groan under a weight it was never meant to bear. The clearing warps around you, the night sky bending and twisting, as if the stars themselves are being tugged inward. <br>
            <br>
            The air vibrates with the echo of a thousand collapsing worlds. You feel it in your chest, a pressure that makes every breath a struggle, every heartbeat a drum of warning. And then, as suddenly as it began, the motion stops. The gravitational pull retreats, the rift shrinks, and the black blood slackens, flowing harmlessly into nothing. Silence hangs over the clearing, thick and electric.<br>
            <br>
            Mae awakens with a jolt, weak but alive. He blinks up at you, as if waking from the edge of a dream too dark to hold. Around you, the remnants of the ritual lie still. The cultists are nowhere to be seen.<br>
            <br>
            It's finally over.
            </div>
    `;
    choices.innerHTML = `
        <button class="twilight">Ending: Twilight Remnant</button>
        <button onclick="setPacingMode('decision'); chooseOption(1)">Restart?</button>
    `;
};

// Fade in new text & choices
story.classList.remove('fade-out');
story.classList.add('fade-in');
choices.classList.remove('fade-out');
choices.classList.add('fade-in');

setTimeout(() => {
    story.classList.remove('fade-in');
    choices.classList.remove('fade-in');
    }, fadeIn);

    }, updateDelay);
    }