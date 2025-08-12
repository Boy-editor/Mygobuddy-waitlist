document.getElementById('waitlistForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    try {
        const res = await fetch(this.action, {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            document.getElementById('successMessage').classList.remove('hidden');
            this.reset();

            // Update counter
            const counter = document.getElementById('buddyCount');
            const currentCount = parseInt(counter.textContent.replace(',', ''));
            counter.textContent = (currentCount + 1).toLocaleString();

            // Redirect to thankyou.html after a short delay to show success message
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 2000); // 2-second delay to allow user to see success message
        } else {
            alert("Something went wrong, please try again.");
        }
    } catch (error) {
        console.error(error);
        alert("Unable to submit form right now.");
    }
});

// Animate counter on load
function animateCounter() {
    const counter = document.getElementById('buddyCount');
    const target = 2847;
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Start counter animation when page loads
window.addEventListener('load', animateCounter);

// Add floating animation to service cards
document.querySelectorAll('.grid > div').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('float');
});