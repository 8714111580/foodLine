document.addEventListener('DOMContentLoaded', () => {
    const foodContainer = document.querySelector('.food-container');

    // Mock data for food items
    const foodItems = [
        { title: 'Hotdog', price: '$12.99', image: 'img/hotdog.jpg' },
        { title: 'Burrito', price: '$14.99', image: 'img/burrito.jpg' },
        { title: 'Pizza', price: '$16.99', image: 'img/pizza.jpg' },
        { title: 'Burger', price: '$18.99', image: 'img/burger.jpg' },
        // { title: 'Delicious Food 5', price: '$19.99', image: 'food5.jpg' },
    ];

    // Function to create a food tile
    function createFoodTile({ title, price, image }) {
        const tile = document.createElement('div');
        tile.classList.add('food-tile');

        tile.innerHTML = `
            <img src="${image}" alt="${title}" class="food-image">
            <div class="food-details">
                <h2 class="food-title">${title}</h2>
                <p class="food-price">${price}</p>
            </div>
        `;

        tile.addEventListener('click', () => {
            alert(`You clicked on ${title}`);
        });

        tile.addEventListener('mouseenter', () => {
            tile.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        tile.addEventListener('mouseleave', () => {
            tile.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });

        return tile;
    }

    // Populate the container with food tiles
    foodItems.forEach(item => {
        const foodTile = createFoodTile(item);
        foodContainer.appendChild(foodTile);
    });
});
