// Function to create course cards
const createCoursesCards = (data) => {
    const container = document.getElementById('main');
    data.forEach(function (course, idx) {
        // Construct card content
        const card = document.createElement('a');
        card.href = `./details.html?course=${idx}`;
        card.id = `course-${idx}`;
        card.classList.add('course-card');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('course-img');
        imgDiv.id = `img-${idx}`;
        card.appendChild(imgDiv);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('course-info');

        const intimation = document.createElement('h2');
        intimation.classList.add('text-overflow-clip');
        intimation.textContent = course.intimation;

        const title = document.createElement('h1');
        title.classList.add('text-overflow-clip');
        title.textContent = course.title;

        const author = document.createElement('h3');
        author.classList.add('text-overflow-clip');
        author.textContent = `Author: ${course.author}`;

        infoDiv.appendChild(intimation);
        infoDiv.appendChild(title);
        infoDiv.appendChild(author);

        card.appendChild(infoDiv);

        container.appendChild(card);

        // Set background image for the course card
        document.getElementById(`img-${idx}`).style.backgroundImage = `url(${course.ImagePath})`;
    });
};

// Invoke function to create course cards
createCoursesCards(data);