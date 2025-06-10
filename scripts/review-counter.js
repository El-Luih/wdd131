document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('numReviews');


    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = JSON.parse(reviewCount);
    }

    reviewCount++;

    localStorage.setItem('numReviews', JSON.stringify(reviewCount));
});