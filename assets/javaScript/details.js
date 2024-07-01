// Sample clicked course (to be replaced with actual logic to fetch course data based on query parameter)
const clickedIdx = new URLSearchParams(window.location.search).get('course');
const clickedCourse = data[clickedIdx];

// Function to generate details for clicked course
const generateDetails = (course) => {
    const container = document.getElementById('course-intro');

    const backgroundDiv = document.createElement('div');
    backgroundDiv.classList.add('background-color');

    const summaryDiv = document.createElement('div');
    summaryDiv.classList.add('course-summary');

    const intimation = document.createElement('h2');
    intimation.classList.add('course-intimation');
    intimation.textContent = course.intimation;

    const title = document.createElement('h1');
    title.classList.add('course-title');
    title.textContent = course.title;

    const description = document.createElement('p');
    description.classList.add('course-description');
    description.textContent = course.description;

    summaryDiv.appendChild(intimation);
    summaryDiv.appendChild(title);
    summaryDiv.appendChild(description);

    const favouriteOptionsDiv = document.createElement('div');
    favouriteOptionsDiv.classList.add('favourite-options');

    const courseImgDiv = document.createElement('div');
    courseImgDiv.id = 'course-img';
    courseImgDiv.style.backgroundImage = `url(${course.ImagePath})`;

    const alignOptionsDiv = document.createElement('div');
    alignOptionsDiv.classList.add('align-options');

    const author = document.createElement('h2');
    author.classList.add('course-author', 'line-height');
    author.innerHTML = `<span>${course.title}</span> by <a href="#">${course.author}</a>`;

    const addOptionDiv = document.createElement('div');
    addOptionDiv.classList.add('add-option', 'line-height');

    const interestedText = document.createElement('p');
    interestedText.textContent = 'Interested about this topic?';

    const addButton = document.createElement('button');
    addButton.classList.add('button');
    addButton.textContent = 'Add to favourites';

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-regular', 'fa-heart');

    addButton.appendChild(heartIcon);
    addOptionDiv.appendChild(interestedText);
    addOptionDiv.appendChild(addButton);

    const creditText = document.createElement('p');
    creditText.classList.add('credit');
    creditText.textContent = 'Unlimited Credits';

    addOptionDiv.appendChild(creditText);
    alignOptionsDiv.appendChild(author);
    alignOptionsDiv.appendChild(addOptionDiv);

    favouriteOptionsDiv.appendChild(courseImgDiv);
    favouriteOptionsDiv.appendChild(alignOptionsDiv);

    const subTopicsDiv = document.createElement('div');
    subTopicsDiv.id = 'sub-topics';
    subTopicsDiv.classList.add('sub-topics');

    const topicHeadDiv = document.createElement('div');
    topicHeadDiv.id = 'topic-head';

    const subTopicsTitle = document.createElement('h3');
    subTopicsTitle.textContent = `${course.title} Sub Topics`;

    topicHeadDiv.appendChild(subTopicsTitle);
    subTopicsDiv.appendChild(topicHeadDiv);

    container.appendChild(backgroundDiv);
    container.appendChild(summaryDiv);
    container.appendChild(favouriteOptionsDiv);
    container.appendChild(subTopicsDiv);

    // Append sub topics
    course.subTopics.forEach(function (topic, idx) {
        const topicDiv = document.createElement('div');
        topicDiv.classList.add('topic');
        topicDiv.id = `topic-${idx}`;

        const topicText = document.createElement('h2');
        topicText.innerHTML = `<i class="fa-regular fa-circle-check check-style"></i> ${topic}`;

        topicDiv.appendChild(topicText);
        subTopicsDiv.appendChild(topicDiv);
    });

    // Add event listener to "Add to favourites" button
    addButton.addEventListener('click', () => {
        addToFavorites(course);
    });
};

// Function to add course to favourites
const addToFavorites = (course) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.title === course.title)) {
        favorites.push(course);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Course added to favourites!');
    } else {
        alert('Course is already in favourites.');
    }
};

// Invoke function to generate details for clicked course
generateDetails(clickedCourse);
