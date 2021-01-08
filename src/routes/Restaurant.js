const { Restaurant } = require('../models/Restaurant');
const express = require('express');
const router = express.Router();
// const restaurantData = require('../services/restaurantSample.json');

router.get('/', async (req, res) => {
    try {
        const result = await Restaurant.find();
        res.json(result);
    } catch(err) {
        res.json({
            error: "Could not find restaurant",
            message: err
        });

    }
});


// interface SchemaMenuItem {
//     name: string;
//     price: string;
// }

// interface SchemaMenuSection {
//     title: string;
//     items: SchemaMenuItem[];
// }

// router.post('/', async (req, rest) => {
//     const pages = restaurantData.pages;
//     let i = 0;
//     for (const page of pages) {
//         const restaurants = page.data;
//         for(const restaurant of restaurants) {
//             const schemaMenus = [];
            
//             const rest = restaurant;
//             for(const menu of rest.menus) {
//                 const currMenu = menu;
//                 const schemaMenu = {
//                     title: currMenu.menu_name,
//                     subsections: []
//                 };
//                 for (const section of currMenu.menu_sections) {
//                     const currSection = section;
//                     const schemaSection = {
//                         title: currSection.section_name,
//                         items: [],
//                     };
//                     for (const item of currSection.menu_items) {
//                         const menuItem = item;
//                         const schemaMenuItem = {
//                             name: menuItem.name,
//                             price: menuItem.price
//                         };
//                         schemaSection.items.push(schemaMenuItem);
//                     }
//                     schemaMenu.subsections.push(schemaSection);
//                 }
//                 schemaMenus.push(schemaMenu);
//             }
//             let cuisines = [];
//             for (let cuisine of restaurant.cuisines) {
//                 cuisines.push(cuisine);
//             }
//             try {
//                 const r = {
//                     name: rest.restaurant_name,
//                     phone: rest.restaurant_phone,
//                     cuisines: cuisines,
//                     website: (rest.restaurant_website).trim() ? rest.restaurant_website : "N/A",
//                     address: (rest.address).formatted,
//                     menus: schemaMenus
//                 };
//                 await Restaurant(r).save();
        
//                 console.log("Saved restaurant " + i++);
//                 // console.log(r.menus[0].subsections[0].items.length);
//             } catch(err) {
//                 console.log("Couldn't save restaurant" + rest.restaurant_name);
//             }
//         }
//     }
//     rest.json({message: "TEST"});
// });

module.exports = router;