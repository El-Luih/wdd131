document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const reviewsSection = document.getElementById('others-reviews');


    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        reviews.forEach(addReviewToDOM);
    }


    function addReviewToDOM({ name, lastName, gender, review }) {
        const article = document.createElement('article');
        article.className = 'review';


        const iconSrc = gender === 'female' ? 'images/female-icon.svg' : 'images/male-icon.svg';
        const iconAlt = gender === 'female' ? 'Female User Icon' : 'Male User Icon';

        article.innerHTML = `
            <img src="${iconSrc}" alt="${iconAlt}" class="user-icon" loading="lazy">
            <p>"${review}"</p>
            <cite>- ${name} ${lastName}</cite>
        `;
        reviewsSection.appendChild(article);
    }


    if (form) {
        form.addEventListener('submit', function (e) {

            const name = form.elements['name'].value.trim();
            const lastName = form.elements['last-name'].value.trim().charAt(0).toUpperCase() + '.';
            const gender = form.elements['gender'].value;
            const review = form.elements['review'].value.trim();

            const newReview = { name, lastName, gender, review };


            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            reviews.push(newReview);
            localStorage.setItem('reviews', JSON.stringify(reviews));


            addReviewToDOM(newReview);

        });
    }

    loadReviews();


    // LABELS



    function setLabelColor(input, isValid) {
        const label = input.closest('form').querySelector(`label[for='${input.id}']`);
        if (label) label.style.color = isValid ? '' : 'red';
    }


    ['name', 'last-name', 'review'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => {
                setLabelColor(input, input.checkValidity());
                input.style.borderColor = input.checkValidity() ? '' : 'red';
            });

            setLabelColor(input, input.checkValidity());
            input.style.borderColor = input.checkValidity() ? '' : 'red';
        }
    });


    const radioInputs = document.querySelectorAll("input[name='gender']");
    const genderLabel = document.querySelector("h4.input-label");
    const optionsField = document.querySelector('.options-field');
    function checkRadio() {
        const checked = Array.from(radioInputs).some(r => r.checked);
        if (optionsField) optionsField.style.border = checked ? '' : '2px solid red';
        if (genderLabel) genderLabel.style.color = checked ? '' : 'red';
    }
    radioInputs.forEach(radio => {
        radio.addEventListener('change', checkRadio);
    });

    checkRadio();
});







