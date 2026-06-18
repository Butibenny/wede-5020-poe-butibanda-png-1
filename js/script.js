// ============================================
    // 1. CONTACT FORM VALIDATION
    // ============================================
   
    const contactForm = document.querySelector('#contactForm');
   
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
           
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
           
            clearErrors();
            let isValid = true;
           
            if (name.length < 2) {
                showError('name', 'Please enter your full name (at least 2 characters)');
                isValid = false;
            }
           
            if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address (e.g., name@example.com)');
                isValid = false;
            }
           
            if (phone.length > 0 && !isValidPhone(phone)) {
                showError('phone', 'Please enter a valid phone number (10-15 digits)');
                isValid = false;
            }
           
            if (message.length < 10) {
                showError('message', 'Please enter a message at least 10 characters long');
                isValid = false;
            }
           
            if (isValid) {
                showSuccess('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            }
        });
    }

    // ============================================
    // 2. QUOTE FORM VALIDATION
    // ============================================
   
    const quoteForm = document.querySelector('#quoteForm');
   
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
           
            const name = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service-type').value;
           
            clearErrors();
            let isValid = true;
           
            if (name.length < 2) {
                showError('fullname', 'Please enter your full name');
                isValid = false;
            }
           
            if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
           
            if (!isValidPhone(phone)) {
                showError('phone', 'Please enter a valid phone number (10-15 digits)');
                isValid = false;
            }
           
            if (service === '') {
                showError('service-type', 'Please select a service type');
                isValid = false;
            }
           
            if (isValid) {
                showSuccess('Thank you! Your quote request has been submitted. We will contact you within 24 hours.');
                quoteForm.reset();
            }
        });
    }

    // ============================================
    // 3. BOOKING FORM VALIDATION
    // ============================================
   
    const bookingForm = document.querySelector('#bookingForm');
   
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
           
            const name = document.getElementById('booking-name').value.trim();
            const phone = document.getElementById('booking-phone').value.trim();
            const service = document.getElementById('booking-service').value;
            const date = document.getElementById('booking-date').value;
           
            clearErrors();
            let isValid = true;
           
            if (name.length < 2) {
                showError('booking-name', 'Please enter your full name');
                isValid = false;
            }
           
            if (!isValidPhone(phone)) {
                showError('booking-phone', 'Please enter a valid phone number (10-15 digits)');
                isValid = false;
            }
           
            if (service === '') {
                showError('booking-service', 'Please select a service');
                isValid = false;
            }
           
            if (date === '') {
                showError('booking-date', 'Please select a preferred date');
                isValid = false;
            } else {
                const selectedDate = new Date(date);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
               
                if (selectedDate < today) {
                    showError('booking-date', 'Please select a future date');
                    isValid = false;
                }
            }
           
            if (isValid) {
                showSuccess('Booking confirmed! We will contact you to confirm the appointment.');
                bookingForm.reset();
            }
        });
    }

    // ============================================
    // 4. REVIEW FORM VALIDATION
    // ============================================
   
    const reviewForm = document.querySelector('#reviewForm');
   
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
           
            const name = document.getElementById('review-name').value.trim();
            const rating = document.getElementById('review-rating').value;
            const review = document.getElementById('review-text').value.trim();
           
            clearErrors();
            let isValid = true;
           
            if (name.length < 2) {
                showError('review-name', 'Please enter your name');
                isValid = false;
            }
           
            if (rating === '' || rating < 1 || rating > 5) {
                showError('review-rating', 'Please select a rating between 1 and 5');
                isValid = false;
            }
           
            if (review.length < 10) {
                showError('review-text', 'Please write a review at least 10 characters long');
                isValid = false;
            }
           
            if (isValid) {
                showSuccess('Thank you for your review! Your feedback helps us improve.');
                reviewForm.reset();
            }
        });
    }

    // ============================================
    // 5. HELPER FUNCTIONS
    // ============================================
   
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
   
    function isValidPhone(phone) {
        const cleaned = phone.replace(/[\s\-\(\)]/g, '');
        return /^\d{10,15}$/.test(cleaned);
    }
   
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.add('error-field');
           
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = '❌ ' + message;
           
            const existingError = field.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
           
            field.parentElement.insertBefore(errorDiv, field.nextSibling);
        }
    }
   
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function(error) {
            error.remove();
        });
       
        const fields = document.querySelectorAll('.error-field');
        fields.forEach(function(field) {
            field.classList.remove('error-field');
        });
    }
   
    function showSuccess(message) {
        const existingSuccess = document.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
       
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = '✅ ' + message;
       
        const form = document.querySelector('form');
        if (form) {
            form.parentElement.insertBefore(successDiv, form.nextSibling);
        }
       
        successDiv.scrollIntoView({ behavior: 'smooth' });
    }

    // ============================================
    // 6. ACCORDION (For Safety Tips)
    // ============================================
   
    const accordionButtons = document.querySelectorAll('.accordion-btn');
   
    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
           
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });

    // ============================================
    // 7. IMAGE SLIDER (For Gallery)
    // ============================================
   
    const sliderImages = document.querySelectorAll('.slider-img');
    let currentSlide = 0;
   
    if (sliderImages.length > 0) {
        for (let i = 1; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
       
        const sliderContainer = document.querySelector('.slider-container');
       
        if (sliderContainer) {
            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = '→';
            nextBtn.style.position = 'absolute';
            nextBtn.style.top = '50%';
            nextBtn.style.right = '20px';
            nextBtn.style.transform = 'translateY(-50%)';
            nextBtn.style.padding = '10px 15px';
            nextBtn.style.backgroundColor = 'rgba(0,0,0,0.5)';
            nextBtn.style.color = 'white';
            nextBtn.style.border = 'none';
            nextBtn.style.borderRadius = '50%';
            nextBtn.style.cursor = 'pointer';
            nextBtn.style.fontSize = '1.5rem';
            nextBtn.style.zIndex = '10';
           
            const prevBtn = document.createElement('button');
            prevBtn.innerHTML = '←';
            prevBtn.style.position = 'absolute';
            prevBtn.style.top = '50%';
            prevBtn.style.left = '20px';
            prevBtn.style.transform = 'translateY(-50%)';
            prevBtn.style.padding = '10px 15px';
            prevBtn.style.backgroundColor = 'rgba(0,0,0,0.5)';
            prevBtn.style.color = 'white';
            prevBtn.style.border = 'none';
            prevBtn.style.borderRadius = '50%';
            prevBtn.style.cursor = 'pointer';
            prevBtn.style.fontSize = '1.5rem';
            prevBtn.style.zIndex = '10';
           
            sliderContainer.style.position = 'relative';
            sliderContainer.appendChild(nextBtn);
            sliderContainer.appendChild(prevBtn);
           
            nextBtn.addEventListener('click', function() {
                sliderImages[currentSlide].style.display = 'none';
                currentSlide = (currentSlide + 1) % sliderImages.length;
                sliderImages[currentSlide].style.display = 'block';
            });
           
            prevBtn.addEventListener('click', function() {
                sliderImages[currentSlide].style.display = 'none';
                currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
                sliderImages[currentSlide].style.display = 'block';
            });
        }
    }

    // ============================================
    // 8. BACK TO TOP BUTTON
    // ============================================
   
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '⬆ Top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '30px';
    backToTopBtn.style.right = '30px';
    backToTopBtn.style.padding = '12px 20px';
    backToTopBtn.style.backgroundColor = '#f4a261';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '30px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.fontSize = '1rem';
    backToTopBtn.style.fontWeight = 'bold';
    backToTopBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.zIndex = '100';
    backToTopBtn.style.transition = 'all 0.3s ease';
   
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e76f51';
        this.style.transform = 'scale(1.05)';
    });
   
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f4a261';
        this.style.transform = 'scale(1)';
    });
   
    document.body.appendChild(backToTopBtn);
   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
   
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('✅ All JavaScript functions loaded successfully!');
