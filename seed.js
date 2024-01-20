require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Breakfast', sortOrder:10},
    {name: 'Biryani Spzls', sortOrder: 20},
    {name: 'Appetizers', sortOrder:30},
    {name: 'Drinks', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Chicken-65', emoji: '🍗', category: categories[2], price: 15.95},
    {name: 'Veg-Noodles', emoji: '🍜',  category: categories[2], price: 11.95},
    {name: 'Fried Rice', emoji: '🥘', category: categories[1], price: 15.95},
    {name: 'Paneer-65', emoji: '🧈', category: categories[2], price: 12.95},
    {name: 'Gobi Manchuria', emoji: '🍢', category: categories[2], price: 15.95},
    {name: 'Veg Manchuria', emoji: '🍣', category: categories[2], price: 15.95},
    {name: 'SpringRolls', emoji: '🍖', category: categories[2], price: 9.95},
    {name: 'Idly', emoji: '⚪', category: categories[0], price: 6.95},
    {name: 'Fried Egg', emoji: '🍳', category: categories[0], price: 5.95},
    {name: 'Dosa', emoji: '🥖', category: categories[0], price: 6.95},
    {name: 'Poori', emoji: '🌕', category: categories[0], price: 6.95},
    {name: 'Egg Noodles', emoji: '🍝', category: categories[2], price: 13.95},
    {name: 'Chicken Noodles', emoji: '🥙', category: categories[2], price: 14.95},
    {name: 'Alludus Spzl Chicken Biryani', emoji:'🍚🍗', category: categories[1], price: 25.95},
    {name: 'Paneer Biryani', emoji: '🍚🧈', category: categories[1], price: 16.95},
    {name: 'Veg Biryani', emoji: '🥗', category: categories[1], price: 15.95},
    {name: 'French Fries', emoji: '🍟', category: categories[2], price: 2.95},
    {name: 'Milk', emoji: '🥛', category: categories[3], price: 1.95},
    {name: 'Coffee', emoji: '☕', category: categories[3], price: 1.95},
    {name: 'Fried Chicken', emoji: '🍗', category: categories[2], price: 9.95},
    {name: 'Pancakes', emoji: '🥞', category: categories[0], price: 7.95},
    {name: 'Tea', emoji: '🍵', category: categories[3], price: 2.95},
  ]);

  console.log(items)

  process.exit();

})();