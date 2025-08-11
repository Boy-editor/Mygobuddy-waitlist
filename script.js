// Form handling
        document.getElementById('waitlistForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const buddyData = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                location: formData.get('location'),
                primarySkill: formData.get('primarySkill'),
                experience: formData.get('experience'),
                timestamp: new Date().toISOString()
            };
            
            // Store data (in memory since localStorage not available)
            console.log('New buddy signup:', buddyData);
            
            // Show success message
            document.getElementById('successMessage').classList.remove('hidden');
            this.reset();
            
            // Update counter
            const counter = document.getElementById('buddyCount');
            const currentCount = parseInt(counter.textContent.replace(',', ''));
            counter.textContent = (currentCount + 1).toLocaleString();
            
            // Scroll to success message
            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
            }, 5000);
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