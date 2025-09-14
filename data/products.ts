
const products = [
  // Fashion
{
  id: "fashion-1",
  name: "Men's Casual Shirt",
  category: "fashion",
  price: 29.99,
  discount: 10,
  image: "/images/fashion1.jpg",
  description: "Comfortable and stylish casual shirt for men.",
  isBestseller: true,
  stock: 20
},
{
  id: "fashion-2",
  name: "Women's Summer Dress",
  category: "fashion",
  price: 49.99,
  discount: 20,
  image: "/images/fashion2.jpg",
  description: "Lightweight summer dress perfect for sunny days.",
  stock: 20
},
{
  id: "fashion-3",
  name: "Men's Jeans",
  category: "fashion",
  price: 39.99,
  discount: 15,
  image: "/images/fashion3.jpg",
  description: "Classic blue jeans for everyday wear.",
  isBestseller: true,
  stock: 20
},
{
  id: "fashion-4",
  name: "Women's Handbag",
  category: "fashion",
  price: 59.99,
  discount: 10,
  image: "/images/fashion4.jpg",
  description: "Elegant handbag with multiple compartments.",
  stock: 20
},
{
  id: "fashion-5",
  name: "Sneakers",
  category: "fashion",
  price: 69.99,
  discount: 5,
  image: "/images/fashion5.jpg",
  description: "Stylish sneakers for casual outings.",
  stock: 20
},
{
  id: "fashion-6",
  name: "Leather Belt",
  category: "fashion",
  price: 19.99,
  image: "/images/fashion6.jpg",
  description: "Durable leather belt for formal occasions.",
  isBestseller: true,
  stock: 20
},
{
  id: "fashion-7",
  name: "Sunglasses",
  category: "fashion",
  price: 24.99,
  discount: 5,
  image: "/images/fashion7.jpg",
  description: "UV protection sunglasses with sleek frame.",
  stock: 20
},
{
  id: "fashion-8",
  name: "Wool Scarf",
  category: "fashion",
  price: 14.99,
  image: "/images/fashion8.jpg",
  description: "Warm scarf for winter fashion.",
  stock: 20
},
{
  id: "fashion-9",
  name: "Wrist Watch",
  category: "fashion",
  price: 79.99,
  discount: 20,
  image: "/images/fashion9.jpg",
  description: "Luxury wristwatch with leather strap.",
  stock: 20
},
{
  id: "fashion-10",
  name: "Formal Blazer",
  category: "fashion",
  price: 99.99,
  discount: 15,
  image: "/images/fashion10.jpg",
  description: "Elegant blazer for business meetings.",
  isBestseller: true,
  stock: 20
},

// Electronics
{
  id: "electronics-1",
  name: "Wireless Earbuds",
  category: "electronics",
  price: 59.99,
  discount: 15,
  image: "/images/electronics1.jpg",
  description: "High-quality sound and noise cancellation earbuds.",
  stock: 20
},
{
  id: "electronics-2",
  name: "Smartphone Charger",
  category: "electronics",
  price: 19.99,
  discount: 5,
  image: "/images/electronics2.jpg",
  description: "Fast charging USB-C smartphone charger.",
  isBestseller: true,
  stock: 20
},
{
  id: "electronics-3",
  name: "Bluetooth Speaker",
  category: "electronics",
  price: 49.99,
  discount: 10,
  image: "/images/electronics3.jpg",
  description: "Portable speaker with deep bass sound.",
  isBestseller: true,
  stock: 20
},
{
  id: "electronics-4",
  name: "Laptop Stand",
  category: "electronics",
  price: 29.99,
  image: "/images/electronics4.jpg",
  description: "Adjustable laptop stand for ergonomic use.",
  stock: 20
},
{
  id: "electronics-5",
  name: "Smartwatch",
  category: "electronics",
  price: 199.99,
  discount: 20,
  image: "/images/electronics5.jpg",
  description: "Track fitness and notifications with ease.",
  isBestseller: true,
  stock: 20
},
{
  id: "electronics-6",
  name: "USB Hub",
  category: "electronics",
  price: 14.99,
  image: "/images/electronics6.jpg",
  description: "Expand your device’s connectivity.",
  stock: 20
},
{
  id: "electronics-7",
  name: "Gaming Mouse",
  category: "electronics",
  price: 39.99,
  discount: 10,
  image: "/images/electronics7.jpg",
  description: "Precision mouse with customizable buttons.",
  stock: 20
},
{
  id: "electronics-8",
  name: "4K Monitor",
  category: "electronics",
  price: 299.99,
  discount: 25,
  image: "/images/electronics8.jpg",
  description: "Ultra-clear display for gaming and work.",
  stock: 20
},
{
  id: "electronics-9",
  name: "External Hard Drive",
  category: "electronics",
  price: 89.99,
  discount: 15,
  image: "/images/electronics9.jpg",
  description: "Store and backup files easily.",
  isBestseller: true,
  stock: 20
},
{
  id: "electronics-10",
  name: "Webcam",
  category: "electronics",
  price: 49.99,
  discount: 5,
  image: "/images/electronics10.jpg",
  description: "High-definition webcam for video calls.",
  stock: 20
},

// Home & Kitchen
{
  id: "home-1",
  name: "Stainless Steel Cookware Set",
  category: "home",
  price: 99.99,
  discount: 25,
  image: "/images/home1.jpg",
  description: "Durable cookware set for all your cooking needs.",
  stock: 20
},
{
  id: "home-2",
  name: "Vacuum Cleaner",
  category: "home",
  price: 129.99,
  discount: 10,
  image: "/images/home2.jpg",
  description: "Powerful vacuum cleaner for spotless floors.",
  stock: 20
},
{
  id: "home-3",
  name: "Air Fryer",
  category: "home",
  price: 89.99,
  discount: 15,
  image: "/images/home3.jpg",
  description: "Healthier cooking with less oil.",
  isBestseller: true,
  stock: 20
},
{
  id: "home-4",
  name: "Blender",
  category: "home",
  price: 59.99,
  discount: 5,
  image: "/images/home4.jpg",
  description: "Blend smoothies, soups, and more.",
  stock: 20
},
{
  id: "home-5",
  name: "Coffee Maker",
  category: "home",
  price: 79.99,
  discount: 20,
  image: "/images/home5.jpg",
  description: "Brew fresh coffee quickly.",
  isBestseller: true,
  stock: 20
},
{
  id: "home-6",
  name: "Microwave Oven",
  category: "home",
  price: 119.99,
  discount: 10,
  image: "/images/home6.jpg",
  description: "Compact microwave with multiple settings.",
  stock: 20
},
{
  id: "home-7",
  name: "Dish Rack",
  category: "home",
  price: 19.99,
  image: "/images/home7.jpg",
  description: "Organize dishes neatly.",
  stock: 20
},
{
  id: "home-8",
  name: "Water Purifier",
  category: "home",
  price: 149.99,
  discount: 15,
  image: "/images/home8.jpg",
  description: "Clean and safe drinking water.",
  isBestseller: true,
  stock: 20
},
{
  id: "home-9",
  name: "Cutlery Set",
  category: "home",
  price: 29.99,
  discount: 5,
  image: "/images/home9.jpg",
  description: "Elegant cutlery for daily use.",
  stock: 20
},
{
  id: "home-10",
  name: "Pressure Cooker",
  category: "home",
  price: 69.99,
  discount: 10,
  image: "/images/home10.jpg",
  description: "Cook meals faster and more efficiently.",
  stock: 20
},

// Sports & Outdoors
{
  id: "sports-1",
  name: "Yoga Mat",
  category: "sports",
  price: 29.99,
  discount: 10,
  image: "/images/sports1.jpg",
  description: "Non-slip yoga mat for exercise.",
  stock: 20
},
{
  id: "sports-2",
  name: "Running Shoes",
  category: "sports",
  price: 79.99,
  discount: 20,
  image: "/images/sports2.jpg",
  description: "Lightweight shoes for better performance.",
  stock: 20
},
{
  id: "sports-3",
  name: "Dumbbell Set",
  category: "sports",
  price: 49.99,
  discount: 15,
  image: "/images/sports3.jpg",
  description: "Strength training for home workouts.",
  stock: 20
},
{
  id: "sports-4",
  name: "Water Bottle",
  category: "sports",
  price: 12.99,
  discount: 5,
  image: "/images/sports4.jpg",
  description: "Stay hydrated during workouts.",
  stock: 20
},
{
  id: "sports-5",
  name: "Camping Tent",
  category: "sports",
  price: 99.99,
  discount: 25,
  image: "/images/sports5.jpg",
  description: "Durable tent for outdoor adventures.",
  stock: 20
},
{
  id: "sports-6",
  name: "Football",
  category: "sports",
  price: 19.99,
  image: "/images/sports6.jpg",
  description: "Standard football for sports lovers.",
  stock: 20
},
{
  id: "sports-7",
  name: "Fitness Tracker",
  category: "sports",
  price: 49.99,
  discount: 10,
  image: "/images/sports7.jpg",
  description: "Track your fitness goals.",
  isBestseller: true,
  stock: 20
},
{
  id: "sports-8",
  name: "Hiking Backpack",
  category: "sports",
  price: 59.99,
  discount: 20,
  image: "/images/sports8.jpg",
  description: "Carry essentials on your trip.",
  stock: 20
},
{
  id: "sports-9",
  name: "Skipping Rope",
  category: "sports",
  price: 9.99,
  image: "/images/sports9.jpg",
  description: "Improve fitness and stamina.",
  stock: 20
},
 // Books
{
  id: "books-1",
  name: "Mystery Novel",
  category: "books",
  price: 14.99,
  discount: 5,
  image: "/images/books1.jpg",
  description: "Thrilling mystery story.",
  stock: 20
},
{
  id: "books-2",
  name: "Science Fiction",
  category: "books",
  price: 19.99,
  discount: 10,
  image: "/images/books2.jpg",
  description: "Explore futuristic worlds.",
  isBestseller: true,
  stock: 20
},
{
  id: "books-3",
  name: "Cooking Guide",
  category: "books",
  price: 24.99,
  discount: 15,
  image: "/images/books3.jpg",
  description: "Delicious recipes at your fingertips.",
  stock: 20
},
{
  id: "books-4",
  name: "Travel Diary",
  category: "books",
  price: 12.99,
  image: "/images/books4.jpg",
  description: "Inspire your wanderlust.",
  stock: 20
},
{
  id: "books-5",
  name: "History Book",
  category: "books",
  price: 29.99,
  discount: 20,
  image: "/images/books5.jpg",
  description: "Dive into historical events.",
  stock: 20
},
{
  id: "books-6",
  name: "Art Techniques",
  category: "books",
  price: 18.99,
  image: "/images/books6.jpg",
  description: "Learn from art masters.",
  isBestseller: true,
  stock: 20
},
{
  id: "books-7",
  name: "Self Help",
  category: "books",
  price: 16.99,
  discount: 10,
  image: "/images/books7.jpg",
  description: "Boost your personal growth.",
  stock: 20
},
{
  id: "books-8",
  name: "Children's Book",
  category: "books",
  price: 9.99,
  discount: 5,
  image: "/images/books8.jpg",
  description: "Fun stories for kids.",
  stock: 20
},
{
  id: "books-9",
  name: "Poetry Collection",
  category: "books",
  price: 11.99,
  image: "/images/books9.jpg",
  description: "Beautiful poems to reflect on.",
  stock: 20
},
{
  id: "books-10",
  name: "Language Guide",
  category: "books",
  price: 21.99,
  discount: 15,
  image: "/images/books10.jpg",
  description: "Learn new languages easily.",
  stock: 20
},

// Toys & Games
{
  id: "toys-1",
  name: "Building Blocks",
  category: "toys",
  price: 19.99,
  discount: 10,
  image: "/images/toys1.jpg",
  description: "Creative building blocks for kids.",
  stock: 20
},
{
  id: "toys-2",
  name: "Board Game",
  category: "toys",
  price: 29.99,
  discount: 15,
  image: "/images/toys2.jpg",
  description: "Fun game for family nights.",
  stock: 20
},
{
  id: "toys-3",
  name: "Puzzle Set",
  category: "toys",
  price: 14.99,
  image: "/images/toys3.jpg",
  description: "Challenging puzzles for brain training.",
  stock: 20
},
{
  id: "toys-4",
  name: "Remote Car",
  category: "toys",
  price: 49.99,
  discount: 20,
  image: "/images/toys4.jpg",
  description: "High-speed remote-controlled car.",
  isBestseller: true,
  stock: 20
},
{
  id: "toys-5",
  name: "Dollhouse",
  category: "toys",
  price: 39.99,
  discount: 10,
  image: "/images/toys5.jpg",
  description: "Detailed dollhouse for imaginative play.",
  stock: 20
},
{
  id: "toys-6",
  name: "Water Gun",
  category: "toys",
  price: 12.99,
  discount: 5,
  image: "/images/toys6.jpg",
  description: "Fun water gun for outdoor play.",
  stock: 20
},
{
  id: "toys-7",
  name: "Stuffed Animal",
  category: "toys",
  price: 24.99,
  image: "/images/toys7.jpg",
  description: "Soft and cuddly companion.",
  stock: 20
},
{
  id: "toys-8",
  name: "Art Kit",
  category: "toys",
  price: 22.99,
  discount: 10,
  image: "/images/toys8.jpg",
  description: "Everything you need for creative art.",
  stock: 20
},
{
  id: "toys-9",
  name: "Musical Toy",
  category: "toys",
  price: 19.99,
  discount: 5,
  image: "/images/toys9.jpg",
  description: "Interactive musical instrument.",
  isBestseller: true,
  stock: 20
},
{
  id: "toys-10",
  name: "Train Set",
  category: "toys",
  price: 59.99,
  discount: 20,
  image: "/images/toys10.jpg",
  description: "Complete train set for kids.",
  stock: 20
},

 
];




export default products;

