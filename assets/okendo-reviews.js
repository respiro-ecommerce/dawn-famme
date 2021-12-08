window.okeReviewsWidgetOnInit = function () {
    // Move reviews aggegrate and review button into control
    const writeReviewButton = document.querySelector(".js-okeReviews-writeReview:not(.is-okeReviews-hidden)");
    const reviewsDropdown = document.querySelector(".okeReviews-reviews-controls .okeReviews-reviews-controls-select");

    if (reviewsDropdown) {
        if (writeReviewButton) {
            reviewsDropdown.insertAdjacentElement("beforebegin", writeReviewButton);
        }

        const reviewsAggregateMain = document.querySelector(".okeReviews-reviewsAggregate-primary");
        const reviewsControlHeader = document.querySelector(".okeReviews-reviews-controls .okeReviews-reviews-controls-sort");
        reviewsAggregateMain.insertAdjacentElement("beforeend", reviewsControlHeader);
    }
};