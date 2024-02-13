const product = [
    {
        id: 0,
        image: './image 20.jpg',
        title: 'Rice',
        price: 100,
    
    },
    {
        id: 1,
        image: './image 31a.jpg',
        title:  'Orange-juice',
        price:  50,
    },
    {
        id: 2,
        image: './image 30.jpg',
        title: 'Rice-stew',
        price:  200,
    },
    {
        id: 3,
        image: './image 28.jpg',
        title: 'fried-eggs',
        price: 100,
    },
    {
        id: 4,
        image: './image 35.jpg',
        title: 'Supaghetti',
        price: 100,
    },
    {
        id: 5,
        image: './image 36.jpg',
        title: 'White-Tea',
        price: 50,
    },
    {
        id: 6,
        image: './image 11.jpg',
        title:  'Chapati',
        price:  50,
    },
    {
        id: 7,
        image: './image 52.jpg',
        title: 'eggs',
        price: 60,
    },
    {
        id: 8,
        image:'./image 28.jpg',
        title: 'Toast',
        price: 20,
    },
    {
        id: 9,
        image: './image 100.jpg',
        title: 'Fish',
        price: 100,
    },
    {
        id: 10,
        image: './image 103.jpg',
        title: 'Black-tea',
        price: 40,
    },
    {
        id: 11,
        image: './image a.jpg',
        title: 'wings',
        price: 400,
    },
    {
        id:12,
        image: './image e.jpg',
        title: 'Bread',
        price: 30,
    },
    {
        id: 13,
        image: './image f.jpg',
        title:'White-bread',
        price: 50,
    },
    {
        id: 14,
        image: './image i.jpg',
        title: 'lemon-juice',
        price: 150,
    },
    {
        id: 15,
        image: './image m.jpg',
        title: 'sausage',
        price: 50,
    },
    {
        id: 16,
        image: './image n.jpg',
        title: 'bugger',
        price: 50,
    },
    {
        id: 17,
        image: './image o.jpg',
        title: 'smokies',
        price: 50,
    },
    {
        id: 18,
        image: './image p.jpg',
        title: 'bugger',
        price: 200,
    },
    {
        id: 19,
        image: './image q.jpg',
        title: 'fried',
        price: 100,
    },
    {
        id: 20,
        image: './image r.jpg',
        title: 'black-tea',
        price: 50,
    },
    {
        id: 21, 
        image: './image s.jpg',
        title: 'kales',
        price: 50, 
    }
    
];

const categories = [...new Set(product.map((item) => item.category))];

let i = 0;
var cart = [];

function addtocart(a) {
    const selectedItem = product[a]; // Use 'a' directly as index
    cart.push({ ...selectedItem });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty ";
        document.getElementById("total").innerHTML = "Ksh " + 0 + ".00";
    } else {
        document.getElementById("cartitem").innerHTML = cart.map((items, index) => {
            const { image, title, price } = items;
            total += price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'>
                    </div>
                    <p style='font-size:12px'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');

        document.getElementById("total").innerHTML = "Ksh " + total.toFixed(2);
    }
}

// Initial display
document.getElementById('root').innerHTML = categories
    .map((category) => {
        const itemsInCategory = product.filter((item) => item.category === category);
        return itemsInCategory
            .map((item) => {
                const { image, title, price } = item;
                return `
                    <div class='box'>
                        <div class='img-box'>
                            <img class='images' src='${image}' alt='${title}'></img>
                        </div>
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>${price}.00</h2>
                            <button onclick="addtocart(${i++})">Add to cart</button>
                        </div>
                    </div>
                `;
            })
            .join('');
    })
    .join('');

    

    document.addEventListener("DOMContentLoaded", function() {
        // Find the menu button element
        var menuButton = document.getElementById("Download Menu");
    
        // Add a click event listener to the menu button
        menuButton.addEventListener("click", function() {
            // Redirect the user to the menu page
            window.location.href = "menu.html"
 // Replace "menu-page.html" with the actual URL of your menu page
        });
    });
    