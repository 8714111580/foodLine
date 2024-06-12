document.addEventListener('DOMContentLoaded', () => {
    const foodContainer = document.querySelector('.food-container');

    // Mock data for food items
    const foodItems = [
        { title: 'Others', price: 'Rs.20', image: 'img/foods/others.png' },
        { title: 'Cakes', price: 'Rs.399', image: 'img/foods/cake.png' },
        { title: 'Coffee', price: 'Rs.15', image: 'img/foods/coffee.png' },
        { title: 'Bakers', price: 'Rs.150', image: 'img/foods/bakery.png' },
        // { title: 'Delicious Food 5', price: 'Rs.19.99', image: 'food5.jpg' },
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

        // tile.addEventListener('click', () => {
        //     alert(`You clicked on ${title}`);
        // });

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
