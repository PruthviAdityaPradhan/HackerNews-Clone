// Sample data - replace this with actual data retrieved from the backend
const newsData = [
    { id: 1, title: 'News Title 1', url: 'https://example.com/news1', upvotes: 10, comments: 5 },
    { id: 2, title: 'News Title 2', url: 'https://example.com/news2', upvotes: 15, comments: 8 },
    { id: 3, title: 'News Title 3', url: 'https://example.com/news3', upvotes: 25, comments: 9 },
    { id: 4, title: 'News Title 4', url: 'https://example.com/news4', upvotes: 5, comments: 2 },
    // Add more news items as needed
];

// Function to render news items on the page
function renderNewsItems() {
    const newsListElement = document.getElementById('news-list');
    newsListElement.innerHTML = '';

    newsData.forEach(newsItem => {
        const newsItemElement = document.createElement('div');
        newsItemElement.className = 'news-item';
        newsItemElement.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p>URL: <a href="${newsItem.url}" target="_blank">${newsItem.url}</a></p>
            <p>Upvotes: ${newsItem.upvotes}</p>
            <p>Comments: ${newsItem.comments}</p>
            <button onclick="markAsRead(${newsItem.id})">Mark as Read</button>
            <button onclick="deleteNews(${newsItem.id})">Delete</button>
        `;
        newsListElement.appendChild(newsItemElement);
    });
}

// Function to mark a news item as read
function markAsRead(newsItemId) {
    // Implement the logic to mark the news item as read (you may update this in the backend)
    console.log(`Marking news item ${newsItemId} as read`);
}

// Function to delete a news item
function deleteNews(newsItemId) {
    // Implement the logic to delete the news item (you may update this in the backend)
    console.log(`Deleting news item ${newsItemId}`);
}

// Initial rendering of news items
renderNewsItems();