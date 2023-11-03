// Smooth scrolling

document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
        });
    });
});

// Show more buttons

document.querySelectorAll('.show-more-button').forEach(button => {
    button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const descriptionWrapper = projectCard.querySelector('.description-wrapper');
        const hiddenText = projectCard.querySelector('.hidden-text');

        if (descriptionWrapper.style.maxHeight) {
            descriptionWrapper.style.maxHeight = null;
            hiddenText.style.display = 'none';
        } else {
            descriptionWrapper.style.maxHeight = 'none';
            hiddenText.style.display = 'block';
        }
    });
});


