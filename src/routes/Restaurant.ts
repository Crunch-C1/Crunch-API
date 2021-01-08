export { };
const { Restaurant } = require('../models/Restaurant');
const express = require('express');
const router = express.Router();
// import * as restaurantData from '../services/restaurantSample.json';

router.get('/', async (req: any, res: any) => {
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

// router.post('/', async (req: any, rest: any) => {
//     const pages = (<any>restaurantData).pages;
//     let i = 0;
//     for (const page of pages) {
//         const restaurants = (<any>page).data;

//         for(const restaurant of restaurants) {
//             const schemaMenus: any[] = [];
//             const rest = (<any>restaurant);
//             for(const menu of rest.menus) {
//                 const currMenu = (<any>menu);
//                 const schemaMenu: {title: string, subsections: SchemaMenuSection[]} = {
//                     title: currMenu.menu_name,
//                     subsections: []
//                 };
//                 for (const section of currMenu.menu_sections) {
//                     const currSection = (<any>section);
//                     const schemaSection: {title: string, items: SchemaMenuItem[]} = {
//                         title: currSection.section_name,
//                         items: [],
//                     };
//                     for (const item of currSection.menu_items) {
//                         const menuItem = (<any>item);
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
//             try {
//                 const r = {
//                     name: rest.restaurant_name,
//                     phone: rest.restaurant_phone,
//                     website: (<string>rest.restaurant_website).trim() ? rest.restaurant_website : "N/A",
//                     address: (<any>rest.address).formatted,
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