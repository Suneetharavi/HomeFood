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
    {name: 'Desserts', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Chicken-65', emoji: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg', category: categories[2], price: 15.95},
    {name: 'Veg-Noodles', emoji: 'https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-veg-schezwan-noodles-recipe-video-how-to-make-easy-veg-schezwan-noodles.jpg',  category: categories[2], price: 11.95},
    {name: 'Fried Rice', emoji: 'https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg', category: categories[1], price: 15.95},
    {name: 'Paneer-65', emoji: 'https://viras.cafe/wp-content/uploads/2023/02/Paneer-65.jpeg', category: categories[2], price: 12.95},
    {name: 'Gobi Manchuria', emoji: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/1-53.jpg', category: categories[2], price: 15.95},
    {name: 'Veg Manchuria', emoji: 'https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg', category: categories[2], price: 15.95},
    {name: 'SpringRolls', emoji: 'https://www.allrecipes.com/thmb/3aFPnkHifpku4TQ0Pq5VpgMEKRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/245343_AuthenticVietnameseSpringRolls_ddmf_01_4x3_JD_5538-f1bbd0a7f8924959a2498f19ed93bc95.jpg', category: categories[2], price: 9.95},
    {name: 'Idly', emoji: 'https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg', category: categories[0], price: 6.95},
    {name: 'Fried Egg', emoji: 'https://www.sonshinekitchen.com/wp-content/uploads/2018/03/fried-eggs-recipe.jpg', category: categories[0], price: 5.95},
    {name: 'Dosa', emoji: 'https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa.jpg', category: categories[0], price: 6.95},
    {name: 'Poori', emoji: 'https://1.bp.blogspot.com/-GG2xQ4rLYj4/YG3Dw2G3GuI/AAAAAAAATIc/jcCDbMS6JpEIbXPnx-vlVy7bZjxk0FhTwCNcBGAsYHQ/s640/Puffed-Poori.jpg', category: categories[0], price: 6.95},
    {name: 'Egg Noodles', emoji: 'https://www.kannammacooks.com/wp-content/uploads/stir-fried-egg-hakka-noodles-1-2.jpg', category: categories[2], price: 13.95},
    {name: 'Chicken Noodles', emoji: 'https://static.toiimg.com/thumb/54458787.cms?imgsize=153197&width=800&height=800', category: categories[2], price: 14.95},
    {name: 'Alludus Spzl Chicken Biryani', emoji:'https://hamariweb.com/recipes/images/recipeimages/3464.jpg', category: categories[1], price: 25.95},
    {name: 'Paneer Biryani', emoji: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/10/SRG_-CKK-Shoot-18_226-scaled.jpg?v=1633580575', category: categories[1], price: 16.95},
    {name: 'Veg Dum Biryani', emoji: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_P0Ea8VchbM5szodD9mmK0xR4VaBFs-05ig&usqp=CAU', category: categories[1], price: 15.95},
    {name: 'French Fries', emoji: 'https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=540&q=82&fm=jpg&fit=crop&dm=1662474181&s=df605b62c9fee026dcef2c0301541888', category: categories[2], price: 2.95},
    {name: 'GulabJamun', emoji: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg/640px-Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg', category: categories[3], price: 7.95},
    {name: 'Rasamalai', emoji: 'https://i0.wp.com/www.dhabastyle.com/wp-content/uploads/2017/04/website-1.jpg?resize=640%2C640&ssl=1', category: categories[3], price: 8.95},
    {name: 'Fried Chicken', emoji: 'https://leitesculinaria.com/wp-content/uploads/2021/02/batter-fried-chicken-fp.jpg', category: categories[2], price: 9.95},
    {name: 'Pancakes', emoji: 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21-500x500.jpg', category: categories[0], price: 7.95},
    {name: 'Rasagulla', emoji: 'https://t3.ftcdn.net/jpg/01/24/13/32/360_F_124133223_wT7dPKKkL83cdkZTascooO8REQISsY1f.jpg', category: categories[3], price: 2.95},
    {name: 'CarrotHalwa', emoji: 'https://www.vidhyashomecooking.com/wp-content/uploads/2023/01/CarrotHalwaRecipe.jpg', category: categories[3], price: 6.95},
    {name: 'WheatHalwa', emoji: 'https://rakskitchen.net/wp-content/uploads/2014/10/15475692122_76bac68929_z.jpg', category: categories[3], price: 6.95},
  ]);

  console.log(items)

  process.exit();

})();