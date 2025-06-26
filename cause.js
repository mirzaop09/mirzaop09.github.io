// Reasons database const reasons = [ { text: "You always know how to make me laugh, even on my worst days! 😊", emoji: "🌟", gif: "gif1.gif" }, { text: "jo plan hua tha , In bengali ota dee 🙈💗 ", emoji: "😆", gif: "gif2.gif" }, { text: "Kitnii Chillati hy mere upar isliyee, hehehe 💕", emoji: "👂", gif: "gif1.gif" }, { text: "Our inside jokes are literally the best thing ever~", emoji: "🚀", gif: "gif2.gif" }, // Romantic reasons for Karina { text: "Your smile lights up even my darkest days. 💡💖", emoji: "😊", gif: "gif3.gif" }, { text: "Every moment with you feels like magic. ✨", emoji: "🔮", gif: "gif4.gif" }, { text: "Your laugh is the most beautiful melody in my world. 🎶", emoji: "🎵", gif: "gif5.gif" }, { text: "I fall more in love with you every single day. 💗", emoji: "💘", gif: "gif6.gif" } ];

// State management let currentReasonIndex = 0; const reasonsContainer = document.getElementById('reasons-container'); const shuffleButton = document.querySelector('.shuffle-button'); const reasonCounter = document.querySelector('.reason-counter'); let isTransitioning = false;

// Create reason card with gif function createReasonCard(reason) { const card = document.createElement('div'); card.className = 'reason-card';

const text = document.createElement('div');
text.className = 'reason-text';
text.innerHTML = `${reason.emoji} ${reason.text}`;

const gifOverlay = document.createElement('div');
gifOverlay.className = 'gif-overlay';
gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Memory">`;

card.appendChild(text);
card.appendChild(gifOverlay);

gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "back.out"
});

return card;

}

// Display new reason function displayNewReason() { if (isTransitioning) return; isTransitioning = true;

if (currentReasonIndex < reasons.length) {
    const card = createReasonCard(reasons[currentReasonIndex]);
    reasonsContainer.appendChild(card);

    // Update counter
    reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;

    currentReasonIndex++;

    // Check if we should transform the button
    if (currentReasonIndex === reasons.length) {
        gsap.to(shuffleButton, {
            scale: 1.1,
            duration: 0.5,
            ease: "elastic.out",
            onComplete: () => {
                shuffleButton.textContent = "Enter Our Storylane 💫";
                shuffleButton.classList.add('story-mode');
                shuffleButton.addEventListener('click', () => {
                    gsap.to('body', {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => {
                            window.location.href = 'last.html';
                        }
                    });
                });
            }
        });
    }

    // Create floating elements
    createFloatingElement();

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
} else {
    window.location.href = "#storylane";
}

}

// Initialize button click shuffleButton.addEventListener('click', () => { gsap.to(shuffleButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 }); displayNewReason(); });

// Floating elements function function createFloatingElement() { const elements = ['🌸', '✨', '💖', '🦋', '⭐']; const element = document.createElement('div'); element.className = 'floating'; element.textContent = elements[Math.floor(Math.random() * elements.length)]; element.style.left = Math.random() * window.innerWidth + 'px'; element.style.top = Math.random() * window.innerHeight + 'px'; element.style.fontSize = (Math.random() * 20 + 10) + 'px'; document.body.appendChild(element);

gsap.to(element, {
    y: -500,
    duration: Math.random() * 10 + 10,
    opacity: 0,
    onComplete: () => element.remove()
});

}

// Custom cursor const cursor = document.querySelector('.custom-cursor'); document.addEventListener('mousemove', (e) => { gsap.to(cursor, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.2 }); });

// Create initial floating elements setInterval(createFloatingElement, 2000);

