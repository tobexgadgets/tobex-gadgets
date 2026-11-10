// Full Catalog Dataset for TOBEX GADGETS (All Local PNG Image Paths Set)
const products = [
  // --- iPHONES ---
  { 
    id: 1, name: "iPhone XR", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 256GB Storage options available.", 
    price: "₦220,000 - ₦255,000", numericPrice: 235000, 
    image: "XR.png",
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch LCD", res: "1792 x 828", refresh: "60Hz", weight: "194 g" }, 
    performance: { chip: "Apple A12 Bionic", ram: "3 GB RAM", storage: "64GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "N/A", telephoto: "N/A", selfie: "7MP Selfie" }, 
    battery: { capacity: "2,942 mAh", charging: "15W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 4, name: "iPhone 11", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 256GB Storage options available.", 
    price: "₦260,000 - ₦340,000", numericPrice: 300000, 
    image: "11.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch LCD", res: "1792 x 828", refresh: "60Hz", weight: "194 g" }, 
    performance: { chip: "Apple A13 Bionic", ram: "4 GB RAM", storage: "64GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,110 mAh", charging: "18W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 5, name: "iPhone 11 Pro", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 512GB Storage options available.", 
    price: "₦340,000 - ₦415,000", numericPrice: 375000, 
    image: "11pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "5.8-inch OLED", res: "2436 x 1125", refresh: "60Hz", weight: "188 g" }, 
    performance: { chip: "Apple A13 Bionic", ram: "4 GB RAM", storage: "64GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 2x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,046 mAh", charging: "18W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 6, name: "iPhone 11 Pro Max", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 512GB Storage options available.", 
    price: "₦380,000 - ₦470,000", numericPrice: 425000, 
    image: "11promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.5-inch OLED", res: "2688 x 1242", refresh: "60Hz", weight: "226 g" }, 
    performance: { chip: "Apple A13 Bionic", ram: "4 GB RAM", storage: "64GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 2x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,969 mAh", charging: "18W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 7, name: "iPhone 12 Mini", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 256GB Storage options available.", 
    price: "₦230,000 - ₦290,000", numericPrice: 260000, 
    image: "12mini.png",
    icon: "fa-mobile-screen-button",
    design: { size: "5.4-inch OLED", res: "2340 x 1080", refresh: "60Hz", weight: "135 g" }, 
    performance: { chip: "Apple A14 Bionic", ram: "4 GB RAM", storage: "64GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "2,227 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 8, name: "iPhone 12", category: "iphones", type: "UK Used", 
    desc: "64GB / 128GB / 256GB Storage options available.", 
    price: "₦300,000 - ₦390,000", numericPrice: 345000, 
    image: "12.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2532 x 1170", refresh: "60Hz", weight: "164 g" }, 
    performance: { chip: "Apple A14 Bionic", ram: "4 GB RAM", storage: "64GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "2,815 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 9, name: "iPhone 12 Pro", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦430,000 - ₦500,000", numericPrice: 465000, 
    image: "12pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2532 x 1170", refresh: "60Hz", weight: "189 g" }, 
    performance: { chip: "Apple A14 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 2x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "2,815 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 10, name: "iPhone 12 Pro Max", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦550,000 - ₦620,000", numericPrice: 585000, 
    image: "12promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2778 x 1284", refresh: "60Hz", weight: "228 g" }, 
    performance: { chip: "Apple A14 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 2.5x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,687 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 11, name: "iPhone 13 Mini", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦300,000 - ₦360,000", numericPrice: 330000, 
    image: "13mini.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "5.4-inch OLED", res: "2340 x 1080", refresh: "60Hz", weight: "141 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "4 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "2,438 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 12, name: "iPhone 13", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦440,000 - ₦510,000", numericPrice: 475000, 
    image: "13.png",
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2532 x 1170", refresh: "60Hz", weight: "174 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "4 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,227 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 13, name: "iPhone 13 Pro", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦560,000 - ₦700,000", numericPrice: 630000, 
    image: "13pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2532 x 1170", refresh: "120Hz ProMotion", weight: "204 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "6 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,095 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 14, name: "iPhone 13 Pro Max", category: "iphones", type: "UK Used", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦600,000 - ₦750,000", numericPrice: 675000, 
    image: "13promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2778 x 1284", refresh: "120Hz ProMotion", weight: "240 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "6 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,352 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 15, name: "iPhone 14", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦490,000 - ₦590,000", numericPrice: 540000, 
    image: "14.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2532 x 1170", refresh: "60Hz", weight: "172 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,279 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 16, name: "iPhone 14 Plus", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦550,000 - ₦650,000", numericPrice: 600000, 
    image: "14plus.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2778 x 1284", refresh: "60Hz", weight: "203 g" }, 
    performance: { chip: "Apple A15 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,323 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 17, name: "iPhone 14 Pro", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦700,000 - ₦850,000", numericPrice: 775000, 
    image: "14pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2556 x 1179", refresh: "120Hz ProMotion", weight: "206 g" }, 
    performance: { chip: "Apple A16 Bionic", ram: "6 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,200 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 18, name: "iPhone 14 Pro Max", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦850,000 - ₦1,050,000", numericPrice: 950000, 
    image: "14promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2796 x 1290", refresh: "120Hz ProMotion", weight: "240 g" }, 
    performance: { chip: "Apple A16 Bionic", ram: "6 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,323 mAh", charging: "20W Fast", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 19, name: "iPhone 15", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦650,000 - ₦790,000", numericPrice: 720000, 
    image: "15.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2556 x 1179", refresh: "60Hz", weight: "171 g" }, 
    performance: { chip: "Apple A16 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,349 mAh", charging: "20W USB-C", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 20, name: "iPhone 15 Plus", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦770,000 - ₦900,000", numericPrice: 835000, 
    image: "15plus.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2796 x 1290", refresh: "60Hz", weight: "201 g" }, 
    performance: { chip: "Apple A16 Bionic", ram: "6 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,383 mAh", charging: "20W USB-C", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 21, name: "iPhone 15 Pro", category: "iphones", type: "UK Used / New", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦850,000 - ₦1,050,000", numericPrice: 950000, 
    image: "15pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2556 x 1179", refresh: "120Hz ProMotion", weight: "187 g" }, 
    performance: { chip: "Apple A17 Pro", ram: "8 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,274 mAh", charging: "23W USB-C", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 22, name: "iPhone 15 Pro Max", category: "iphones", type: "UK Used / New", 
    desc: "256GB / 512GB / 1TB Storage options available.", 
    price: "₦950,000 - ₦1,200,000", numericPrice: 1075000, 
    image: "15promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2796 x 1290", refresh: "120Hz ProMotion", weight: "221 g" }, 
    performance: { chip: "Apple A17 Pro", ram: "8 GB RAM", storage: "256GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 5x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,422 mAh", charging: "23W USB-C", wireless: "MagSafe (15W)" } 
  },
  { 
    id: 23, name: "iPhone 16", category: "iphones", type: "Brand New / Clean", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦850,000 - ₦1,100,000", numericPrice: 975000, 
    image: "16.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.1-inch OLED", res: "2556 x 1179", refresh: "60Hz", weight: "170 g" }, 
    performance: { chip: "Apple A18", ram: "8 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,561 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 24, name: "iPhone 16 Plus", category: "iphones", type: "Brand New / Clean", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦900,000 - ₦1,100,000", numericPrice: 1000000, 
    image: "16plus.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.7-inch OLED", res: "2796 x 1290", refresh: "60Hz", weight: "199 g" }, 
    performance: { chip: "Apple A18", ram: "8 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "N/A", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,674 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 25, name: "iPhone 16 Pro", category: "iphones", type: "Brand New / Clean", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦1,100,000 - ₦1,400,000", numericPrice: 1250000, 
    image: "16pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.3-inch OLED", res: "2622 x 1206", refresh: "120Hz ProMotion", weight: "199 g" }, 
    performance: { chip: "Apple A18 Pro", ram: "8 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "12MP Ultra-wide", telephoto: "12MP 5x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,582 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 26, name: "iPhone 16 Pro Max", category: "iphones", type: "Brand New / Clean", 
    desc: "256GB / 512GB / 1TB Storage options available.", 
    price: "₦1,300,000 - ₦1,500,000", numericPrice: 1400000, 
    image: "16promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.9-inch OLED", res: "2868 x 1320", refresh: "120Hz ProMotion", weight: "227 g" }, 
    performance: { chip: "Apple A18 Pro", ram: "8 GB RAM", storage: "256GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "48MP Ultra-wide", telephoto: "12MP 5x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,685 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 27, name: "iPhone 17", category: "iphones", type: "Brand New", 
    desc: "256GB / 512GB Storage options available.", 
    price: "₦1,150,000 - ₦1,400,000", numericPrice: 1275000, 
    image: "17.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.3-inch OLED", res: "2622 x 1206", refresh: "120Hz ProMotion", weight: "177 g" }, 
    performance: { chip: "Apple A19", ram: "8 GB RAM", storage: "256GB - 512GB" }, 
    camera: { main: "48MP Fusion Main", ultrawide: "48MP Ultra-wide", telephoto: "N/A", selfie: "18MP Center Stage" }, 
    battery: { capacity: "3,692 mAh", charging: "25W Fast", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 281, name: "iPhone Air", category: "iphones", type: "UK Used / Grade A", 
    desc: "256GB (eSIM / Physical SIM) & 512GB options available.", 
    price: "₦1,100,000 - ₦1,350,000", numericPrice: 1180000, 
    image: "air.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.5-inch OLED", res: "2736 x 1260", refresh: "120Hz ProMotion", weight: "165 g" }, 
    performance: { chip: "Apple A19 Pro", ram: "12 GB RAM", storage: "256GB - 512GB" }, 
    camera: { main: "48MP Fusion Main", ultrawide: "N/A", telephoto: "N/A", selfie: "18MP Center Stage" }, 
    battery: { capacity: "3,149 mAh", charging: "20W USB-C", wireless: "MagSafe (20W)" } 
  },

  { 
    id: 292, name: "iPhone 17 Pro", category: "iphones", type: "Brand New", 
    desc: "256GB / 512GB / 1TB Storage options available.", 
    price: "₦1,450,000 - ₦1,850,000", numericPrice: 1650000, 
    image: "17pro.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.3-inch OLED", res: "2622 x 1206", refresh: "120Hz ProMotion", weight: "206 g" }, 
    performance: { chip: "Apple A19 Pro", ram: "12 GB RAM", storage: "256GB - 1TB" }, 
    camera: { main: "48MP Main", ultrawide: "48MP Ultra-wide", telephoto: "48MP Telephoto", selfie: "18MP Center Stage" }, 
    battery: { capacity: "4,252 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },
  { 
    id: 303, name: "iPhone 17 Pro Max", category: "iphones", type: "Brand New", 
    desc: "256GB / 512GB / 1TB / 2TB Storage options available.", 
    price: "₦1,750,000 - ₦2,200,000", numericPrice: 1975000, 
    image: "17promax.png", 
    icon: "fa-mobile-screen-button",
    design: { size: "6.9-inch OLED", res: "2868 x 1320", refresh: "120Hz ProMotion", weight: "233 g" }, 
    performance: { chip: "Apple A19 Pro", ram: "12 GB RAM", storage: "256GB - 2TB" }, 
    camera: { main: "48MP Main", ultrawide: "48MP Ultra-wide", telephoto: "48MP Telephoto", selfie: "18MP Center Stage" }, 
    battery: { capacity: "5,088 mAh", charging: "25W USB-C", wireless: "MagSafe (25W)" } 
  },

  // --- SAMSUNG GALAXY S SERIES ---
  { 
    id: 33, name: "Samsung Galaxy S9 / S9+", category: "samsung", type: "UK Used", 
    desc: "64GB / 128GB Storage options available.", 
    price: "₦160,000 - ₦190,000", numericPrice: 175000, 
    image: "s9.png", 
    icon: "fa-mobile-button",
    design: { size: "5.8/6.2-inch AMOLED", res: "2960 x 1440", refresh: "60Hz", weight: "189 g" }, 
    performance: { chip: "Snapdragon 845", ram: "4/6 GB RAM", storage: "64GB - 128GB" }, 
    camera: { main: "12MP Dual", ultrawide: "N/A", telephoto: "N/A", selfie: "8MP Selfie" }, 
    battery: { capacity: "3,500 mAh", charging: "15W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 34, name: "Samsung Galaxy S10e / S10", category: "samsung", type: "UK Used", 
    desc: "128GB Storage options available.", 
    price: "₦180,000 - ₦259,000", numericPrice: 220000, 
    image: "s10.png", 
    icon: "fa-mobile-button",
    design: { size: "6.1-inch AMOLED", res: "3040 x 1440", refresh: "60Hz", weight: "157 g" }, 
    performance: { chip: "Snapdragon 855", ram: "8 GB RAM", storage: "128GB" }, 
    camera: { main: "12MP Main", ultrawide: "16MP Ultra-wide", telephoto: "12MP 2x Zoom", selfie: "10MP Selfie" }, 
    battery: { capacity: "3,400 mAh", charging: "15W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 35, name: "Samsung Galaxy S10+ / 5G", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦250,000 - ₦360,000", numericPrice: 305000, 
    image: "s10plus.png", 
    icon: "fa-mobile-button",
    design: { size: "6.7-inch AMOLED", res: "3040 x 1440", refresh: "60Hz", weight: "198 g" }, 
    performance: { chip: "Snapdragon 855", ram: "8 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "12MP Main", ultrawide: "16MP Ultra-wide", telephoto: "12MP 2x Zoom", selfie: "10MP Dual" }, 
    battery: { capacity: "4,500 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 36, name: "Samsung Galaxy S20 / S20 FE", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB Storage options available.", 
    price: "₦250,000 - ₦350,000", numericPrice: 300000, 
    image: "s20.png", 
    icon: "fa-mobile-button",
    design: { size: "6.5-inch AMOLED", res: "2400 x 1080", refresh: "120Hz", weight: "190 g" }, 
    performance: { chip: "Snapdragon 865", ram: "6/8 GB RAM", storage: "128GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "8MP 3x Zoom", selfie: "32MP Selfie" }, 
    battery: { capacity: "4,500 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 37, name: "Samsung Galaxy S20+ / S20 Ultra", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦280,000 - ₦500,000", numericPrice: 390000, 
    image: "s20ultra.png", 
    icon: "fa-mobile-button",
    design: { size: "6.9-inch AMOLED", res: "3200 x 1440", refresh: "120Hz", weight: "222 g" }, 
    performance: { chip: "Snapdragon 865", ram: "12 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "108MP Main", ultrawide: "12MP Ultra-wide", telephoto: "48MP Periscope", selfie: "40MP Selfie" }, 
    battery: { capacity: "5,000 mAh", charging: "45W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 38, name: "Samsung Galaxy S21 / S21 FE", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB Storage options available.", 
    price: "₦210,000 - ₦350,000", numericPrice: 280000, 
    image: "s21.png", 
    icon: "fa-mobile-button",
    design: { size: "6.4-inch AMOLED", res: "2400 x 1080", refresh: "120Hz", weight: "177 g" }, 
    performance: { chip: "Snapdragon 888", ram: "8 GB RAM", storage: "128GB - 256GB" }, 
    camera: { main: "12MP Main", ultrawide: "12MP Ultra-wide", telephoto: "8MP 3x Zoom", selfie: "32MP Selfie" }, 
    battery: { capacity: "4,500 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 39, name: "Samsung Galaxy S21+ / S21 Ultra", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦285,000 - ₦770,000", numericPrice: 527000, 
    image: "s21ultra.png", 
    icon: "fa-mobile-button",
    design: { size: "6.8-inch AMOLED", res: "3200 x 1440", refresh: "120Hz Adaptive", weight: "227 g" }, 
    performance: { chip: "Snapdragon 888", ram: "12/16 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "108MP Main", ultrawide: "12MP Ultra-wide", telephoto: "Dual 10MP Zooms", selfie: "40MP Selfie" }, 
    battery: { capacity: "5,000 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 40, name: "Samsung Galaxy S22 / S22+", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB Storage options available.", 
    price: "₦285,000 - ₦450,000", numericPrice: 367000, 
    image: "s22.png", 
    icon: "fa-mobile-button",
    design: { size: "6.1/6.6-inch AMOLED", res: "2340 x 1080", refresh: "120Hz", weight: "167 g" }, 
    performance: { chip: "Snapdragon 8 Gen 1", ram: "8 GB RAM", storage: "128GB - 256GB" }, 
    camera: { main: "50MP Main", ultrawide: "12MP Ultra-wide", telephoto: "10MP 3x Zoom", selfie: "10MP Selfie" }, 
    battery: { capacity: "3,700 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 41, name: "Samsung Galaxy S22 Ultra", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB / 512GB / 1TB Storage options available.", 
    price: "₦489,000 - ₦800,000", numericPrice: 644500, 
    image: "s22ultra.png", 
    icon: "fa-mobile-button",
    design: { size: "6.8-inch AMOLED", res: "3088 x 1440", refresh: "120Hz Adaptive", weight: "228 g" }, 
    performance: { chip: "Snapdragon 8 Gen 1", ram: "12 GB RAM", storage: "128GB - 1TB" }, 
    camera: { main: "1080MP Main", ultrawide: "12MP Ultra-wide", telephoto: "Dual 10MP Zooms", selfie: "40MP Selfie" }, 
    battery: { capacity: "5,000 mAh", charging: "45W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 42, name: "Samsung Galaxy S23 / S23+", category: "samsung", type: "UK Used", 
    desc: "128GB / 256GB / 512GB Storage options available.", 
    price: "₦431,000 - ₦600,000", numericPrice: 515500, 
    image: "s23.png", 
    icon: "fa-mobile-button",
    design: { size: "6.1/6.6-inch AMOLED", res: "2340 x 1080", refresh: "120Hz", weight: "168 g" }, 
    performance: { chip: "Snapdragon 8 Gen 2", ram: "8 GB RAM", storage: "128GB - 512GB" }, 
    camera: { main: "50MP Main", ultrawide: "12MP Ultra-wide", telephoto: "10MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "3,900 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 43, name: "Samsung Galaxy S23 Ultra", category: "samsung", type: "UK Used / New", 
    desc: "256GB / 512GB / 1TB Storage options available.", 
    price: "₦645,000 - ₦1,200,000", numericPrice: 922500, 
    image: "s23ultra.png", 
    icon: "fa-mobile-button",
    design: { size: "6.8-inch AMOLED", res: "3088 x 1440", refresh: "120Hz Adaptive", weight: "234 g" }, 
    performance: { chip: "Snapdragon 8 Gen 2", ram: "12 GB RAM", storage: "256GB - 1TB" }, 
    camera: { main: "200MP Main", ultrawide: "12MP Ultra-wide", telephoto: "Dual 10MP Zooms", selfie: "12MP Selfie" }, 
    battery: { capacity: "5,000 mAh", charging: "45W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 44, name: "Samsung Galaxy S24 / S24 FE", category: "samsung", type: "Brand New / Used", 
    desc: "128GB / 256GB Storage options available.", 
    price: "₦550,000 - ₦986,000", numericPrice: 768000, 
    image: "s24.png", 
    icon: "fa-mobile-button",
    design: { size: "6.2/6.7-inch AMOLED", res: "2340 x 1080", refresh: "120Hz", weight: "167 g" }, 
    performance: { chip: "Snapdragon 8 Gen 3", ram: "8 GB RAM", storage: "128GB - 256GB" }, 
    camera: { main: "50MP Main", ultrawide: "12MP Ultra-wide", telephoto: "10MP 3x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "4,000 mAh", charging: "25W Fast", wireless: "Yes (Qi)" } 
  },
  { 
    id: 45, name: "Samsung Galaxy S24 Ultra", category: "samsung", type: "Brand New / Used", 
    desc: "256GB / 512GB / 1TB Storage options available.", 
    price: "₦730,000 - ₦1,800,000", numericPrice: 1265000, 
    image: "s24ultra.png", 
    icon: "fa-mobile-button",
    design: { size: "6.8-inch AMOLED", res: "3120 x 1440", refresh: "120Hz Adaptive", weight: "232 g" }, 
    performance: { chip: "Snapdragon 8 Gen 3", ram: "12 GB RAM", storage: "256GB - 1TB" }, 
    camera: { main: "200MP Main", ultrawide: "12MP Ultra-wide", telephoto: "50MP 5x Zoom", selfie: "12MP Selfie" }, 
    battery: { capacity: "5,000 mAh", charging: "45W Super Fast", wireless: "Yes (Qi)" } 
  },
  // --- LAPTOPS (COMPLETE MACBOOK PRICE LIST) ---
  { 
    id: 50, name: "MacBook Air 2015", category: "laptops", type: "UK Used", 
    desc: "4GB/8GB RAM, 128GB/256GB SSD options available.", 
    price: "₦250,000 - ₦350,000", numericPrice: 300000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Display", res: "1440 x 900", refresh: "60Hz", weight: "1.35 kg" }, 
    performance: { chip: "Intel Core i5 / i7", ram: "4GB / 8GB RAM", storage: "128GB - 256GB SSD" }, 
    camera: { main: "720p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "54Wh Battery", charging: "MagSafe 2", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 51, name: "MacBook Air 2017", category: "laptops", type: "UK Used", 
    desc: "8GB RAM, 128GB / 256GB SSD options available.", 
    price: "₦300,000 - ₦380,000", numericPrice: 340000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Display", res: "1440 x 900", refresh: "60Hz", weight: "1.35 kg" }, 
    performance: { chip: "Intel Core i5 (5th Gen)", ram: "8 GB RAM", storage: "128GB - 256GB SSD" }, 
    camera: { main: "720p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "54Wh Battery", charging: "MagSafe 2", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 52, name: "MacBook Air 2018", category: "laptops", type: "UK Used", 
    desc: "Retina Display, 8GB RAM, 128GB / 256GB SSD.", 
    price: "₦350,000 - ₦480,000", numericPrice: 415000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.25 kg" }, 
    performance: { chip: "Intel Core i5 (8th Gen)", ram: "8 GB RAM", storage: "128GB - 256GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "50.3Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 53, name: "MacBook Air 2019", category: "laptops", type: "UK Used", 
    desc: "True Tone Retina Display, 8GB RAM, 128GB / 256GB SSD.", 
    price: "₦380,000 - ₦500,000", numericPrice: 440000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.25 kg" }, 
    performance: { chip: "Intel Core i5", ram: "8 GB RAM", storage: "128GB - 256GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "49.9Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 54, name: "MacBook Air 2020 (Intel)", category: "laptops", type: "UK Used", 
    desc: "Magic Keyboard, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦450,000 - ₦650,000", numericPrice: 550000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.29 kg" }, 
    performance: { chip: "Intel Core i3 / i5 / i7", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "49.9Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 55, name: "MacBook Pro 2015", category: "laptops", type: "UK Used", 
    desc: "Retina Display, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦300,000 - ₦480,000", numericPrice: 390000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 15.4-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.58 kg" }, 
    performance: { chip: "Intel Core i5 / i7", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "74.9Wh Battery", charging: "MagSafe 2", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 56, name: "MacBook Pro 2016", category: "laptops", type: "UK Used", 
    desc: "Touch Bar options, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦400,000 - ₦580,000", numericPrice: 490000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 15.4-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.37 kg" }, 
    performance: { chip: "Intel Core i5 / i7", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "49.2Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 57, name: "MacBook Pro 2017", category: "laptops", type: "UK Used", 
    desc: "Reliable Intel Performance, up to 16GB RAM / 512GB SSD.", 
    price: "₦400,000 - ₦650,000", numericPrice: 525000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 15.4-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.37 kg" }, 
    performance: { chip: "Intel Core i5 / i7", ram: "8GB / 16GB RAM", storage: "128GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "49.2Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 58, name: "MacBook Pro 2018", category: "laptops", type: "UK Used", 
    desc: "Quad-Core Intel i5/i7, up to 16GB RAM & 1TB SSD.", 
    price: "₦500,000 - ₦850,000", numericPrice: 675000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 15.4-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.37 kg" }, 
    performance: { chip: "Intel Core i5 / i7 (8th Gen)", ram: "8GB / 16GB RAM", storage: "256GB - 1TB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "58Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 59, name: "MacBook Pro 2019", category: "laptops", type: "UK Used", 
    desc: "Powerful Intel i7/i9, up to 16GB RAM & 1TB SSD.", 
    price: "₦550,000 - ₦950,000", numericPrice: 750000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 15.4 / 16-inch Retina", res: "3072 x 1920", refresh: "60Hz", weight: "2.0 kg" }, 
    performance: { chip: "Intel Core i5 / i7 / i9", ram: "8GB / 16GB RAM", storage: "256GB - 1TB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "100Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 60, name: "MacBook Pro 2020 (Intel)", category: "laptops", type: "UK Used", 
    desc: "Intel Core i5 / i7, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦600,000 - ₦850,000", numericPrice: 725000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.4 kg" }, 
    performance: { chip: "Intel Core i5 / i7 (10th Gen)", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "58Wh Battery", charging: "USB-C", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 61, name: "MacBook Air M1 (2020)", category: "laptops", type: "UK Used", 
    desc: "Apple M1 Chip, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦650,000 - ₦1,050,000", numericPrice: 850000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.29 kg" }, 
    performance: { chip: "Apple M1 Chip", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "49.9Wh (Up to 18 hrs)", charging: "USB-C Power", wireless: "Wi-Fi 6" } 
  },
  { 
    id: 62, name: "MacBook Air M2 (2022)", category: "laptops", type: "UK Used / New", 
    desc: "Redesigned M2 Chip, 8GB/16GB RAM, 256GB/512GB SSD.", 
    price: "₦850,000 - ₦1,300,000", numericPrice: 1075000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.6-inch Liquid Retina", res: "2560 x 1664", refresh: "60Hz", weight: "1.24 kg" }, 
    performance: { chip: "Apple M2 Chip", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "1080p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "52.6Wh Battery", charging: "MagSafe 3", wireless: "Wi-Fi 6" } 
  },
  { 
    id: 63, name: "MacBook Air M3 (2024)", category: "laptops", type: "Brand New / Clean", 
    desc: "Apple M3 Chip, up to 24GB RAM & 512GB SSD.", 
    price: "₦1,100,000 - ₦1,800,000", numericPrice: 1450000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.6 / 15.3-inch Liquid Retina", res: "2560 x 1664", refresh: "60Hz", weight: "1.24 kg" }, 
    performance: { chip: "Apple M3 Chip", ram: "8GB / 16GB / 24GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "1080p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "66.5Wh Battery", charging: "MagSafe 3", wireless: "Wi-Fi 6E" } 
  },
  { 
    id: 64, name: "MacBook Air M4 (2025)", category: "laptops", type: "Brand New", 
    desc: "Next-gen M4 Chip performance, 16GB/24GB RAM, up to 1TB SSD.", 
    price: "₦1,400,000 - ₦2,300,000", numericPrice: 1850000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.6 / 15.3-inch Liquid Retina", res: "2560 x 1664", refresh: "60Hz", weight: "1.24 kg" }, 
    performance: { chip: "Apple M4 Chip", ram: "16GB / 24GB RAM", storage: "256GB - 1TB SSD" }, 
    camera: { main: "1080p Center Stage", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "Long-life Battery", charging: "MagSafe 3", wireless: "Wi-Fi 6E" } 
  },
  { 
    id: 65, name: "MacBook Air M5 (2026)", category: "laptops", type: "Brand New", 
    desc: "Flagship M5 Chip, 16GB/24GB RAM, 512GB - 1TB SSD.", 
    price: "₦1,950,000 - ₦3,000,000", numericPrice: 2475000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.6 / 15.3-inch Liquid Retina", res: "2560 x 1664", refresh: "60Hz", weight: "1.24 kg" }, 
    performance: { chip: "Apple M5 Chip", ram: "16GB / 24GB RAM", storage: "512GB - 1TB SSD" }, 
    camera: { main: "1080p Center Stage", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "All-day Battery", charging: "MagSafe 3", wireless: "Wi-Fi 7 / 6E" } 
  },
  { 
    id: 66, name: "MacBook Pro M1 (2020)", category: "laptops", type: "UK Used", 
    desc: "Apple M1 Chip with Active Cooling, up to 16GB RAM & 512GB SSD.", 
    price: "₦800,000 - ₦1,250,000", numericPrice: 1025000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3-inch Retina", res: "2560 x 1600", refresh: "60Hz", weight: "1.4 kg" }, 
    performance: { chip: "Apple M1 Chip", ram: "8GB / 16GB RAM", storage: "256GB - 512GB SSD" }, 
    camera: { main: "FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "58.2Wh (Up to 20 hrs)", charging: "USB-C", wireless: "Wi-Fi 6" } 
  },
  { 
    id: 67, name: "MacBook Pro M1 Pro / Max (2021)", category: "laptops", type: "UK Used / Clean", 
    desc: "14-inch & 16-inch models, M1 Pro or M1 Max, up to 64GB RAM & 1TB SSD.", 
    price: "₦1,200,000 - ₦2,400,000", numericPrice: 1800000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "14.2 / 16.2-inch XDR", res: "3024 x 1964", refresh: "120Hz ProMotion", weight: "1.6 kg" }, 
    performance: { chip: "Apple M1 Pro / M1 Max", ram: "16GB - 64GB RAM", storage: "512GB - 1TB SSD" }, 
    camera: { main: "1080p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "70Wh - 100Wh", charging: "MagSafe 3", wireless: "Wi-Fi 6" } 
  },
  { 
    id: 68, name: "MacBook Pro M2 / Pro / Max (2022/2023)", category: "laptops", type: "UK Used / New", 
    desc: "M2, M2 Pro, and M2 Max configurations across 13, 14, and 16-inch sizes.", 
    price: "₦950,000 - ₦2,900,000", numericPrice: 1925000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "13.3 / 14.2 / 16.2-inch XDR", res: "3024 x 1964", refresh: "120Hz ProMotion", weight: "1.6 kg" }, 
    performance: { chip: "Apple M2 / M2 Pro / M2 Max", ram: "8GB - 64GB RAM", storage: "256GB - 1TB SSD" }, 
    camera: { main: "1080p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "70Wh - 100Wh", charging: "MagSafe 3", wireless: "Wi-Fi 6E" } 
  },
  { 
    id: 69, name: "MacBook Pro M3 / Pro / Max (2023)", category: "laptops", type: "Brand New / Clean", 
    desc: "M3, M3 Pro, and M3 Max chips in Space Black & Silver.", 
    price: "₦1,300,000 - ₦3,400,000", numericPrice: 2350000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "14.2 / 16.2-inch Liquid Retina XDR", res: "3024 x 1964", refresh: "120Hz ProMotion", weight: "1.61 kg" }, 
    performance: { chip: "Apple M3 / M3 Pro / M3 Max", ram: "8GB - 48GB RAM", storage: "512GB - 1TB SSD" }, 
    camera: { main: "1080p FaceTime HD", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "70Wh - 100Wh", charging: "MagSafe 3", wireless: "Wi-Fi 6E" } 
  },
  { 
    id: 70, name: "MacBook Pro M4 / Pro / Max (2024)", category: "laptops", type: "Brand New", 
    desc: "High-performance M4 series chips for professional workloads.", 
    price: "₦1,800,000 - ₦4,200,000", numericPrice: 3000000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "14.2 / 16.2-inch Liquid Retina XDR", res: "3024 x 1964", refresh: "120Hz ProMotion", weight: "1.62 kg" }, 
    performance: { chip: "Apple M4 / M4 Pro / M4 Max", ram: "16GB - 48GB RAM", storage: "512GB - 1TB SSD" }, 
    camera: { main: "1080p Center Stage", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "72Wh - 102Wh", charging: "MagSafe 3", wireless: "Wi-Fi 6E" } 
  },
  { 
    id: 71, name: "MacBook Pro M5 / Pro / Max (2025/2026)", category: "laptops", type: "Brand New", 
    desc: "Ultimate flagship M5 architecture with up to 7TB options and extreme performance.", 
    price: "₦2,000,000 - ₦7,000,000", numericPrice: 4500000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-laptop",
    design: { size: "14.2 / 16.2-inch Liquid Retina XDR", res: "3024 x 1964", refresh: "120Hz ProMotion", weight: "1.62 kg" }, 
    performance: { chip: "Apple M5 / M5 Pro / M5 Max", ram: "16GB - 48GB RAM", storage: "512GB - 2TB SSD" }, 
    camera: { main: "1080p Center Stage", ultrawide: "N/A", telephoto: "N/A", selfie: "Built-in webcam" }, 
    battery: { capacity: "72Wh - 102Wh", charging: "MagSafe 3", wireless: "Wi-Fi 7 / 6E" } 
  },

  // --- GAMING (PLAYSTATION CONSOLES & ACCESSORIES) ---
  { 
    id: 72, name: "PlayStation 3 (PS3 Fat / Slim / Super Slim)", category: "gaming", type: "UK Used", 
    desc: "160GB / 250GB / 320GB / 500GB storage options available.", 
    price: "₦100,000 - ₦180,000", numericPrice: 140000, 
    image: "ps3.png",
    icon: "fa-gamepad",
    design: { size: "Home Console", res: "1080p HD", refresh: "60Hz", weight: "2.0 kg" }, 
    performance: { chip: "Cell Broadband Engine", ram: "256MB XDR RAM", storage: "160GB - 500GB HDD" }, 
    camera: { main: "N/A", ultrawide: "N/A", telephoto: "N/A", selfie: "N/A" }, 
    battery: { capacity: "Wireless DualShock 3", charging: "USB Cable", wireless: "Bluetooth" } 
  },
  { 
    id: 73, name: "PlayStation 4 (PS4 Fat / Slim / Pro)", category: "gaming", type: "UK Used / Clean", 
    desc: "500GB / 1TB / 2TB storage options available with controllers.", 
    price: "₦180,000 - ₦480,000", numericPrice: 330000, 
    image: "ps4.png",
    icon: "fa-gamepad",
    design: { size: "Home Console", res: "1080p to 4K Support", refresh: "60Hz", weight: "2.1 kg" }, 
    performance: { chip: "Custom AMD Jaguar", ram: "8GB GDDR5", storage: "500GB - 2TB HDD" }, 
    camera: { main: "Supports PS Camera", ultrawide: "N/A", telephoto: "N/A", selfie: "N/A" }, 
    battery: { capacity: "DualShock 4 Wireless", charging: "Micro-USB", wireless: "Wi-Fi & Bluetooth" } 
  },
  { 
    id: 74, name: "PlayStation 5 (PS5 Standard / Digital / Slim)", category: "gaming", type: "Brand New / Clean", 
    desc: "825GB / 1TB SSD, Disc or Digital editions available.", 
    price: "₦780,000 - ₦1,200,000", numericPrice: 990000, 
    image: "ps5.png",
    icon: "fa-gamepad",
    design: { size: "Next-Gen Console", res: "4K UHD Output", refresh: "Up to 120Hz", weight: "3.2 kg" }, 
    performance: { chip: "Custom AMD Zen 2 / RDNA 2", ram: "16GB GDDR6", storage: "825GB - 1TB Custom SSD" }, 
    camera: { main: "Supports HD Camera", ultrawide: "N/A", telephoto: "N/A", selfie: "N/A" }, 
    battery: { capacity: "DualSense 1,560 mAh", charging: "USB-C Dock", wireless: "Wi-Fi 6 & Bluetooth" } 
  },
  { 
    id: 75, name: "PlayStation 5 Pro", category: "gaming", type: "Brand New", 
    desc: "2TB Ultra-fast SSD with advanced ray tracing and GPU upgrade.", 
    price: "₦1,600,000 - ₦2,000,000", numericPrice: 1800000, 
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-gamepad",
    design: { size: "Pro Console Form", res: "4K Pro Render", refresh: "Up to 120Hz", weight: "3.1 kg" }, 
    performance: { chip: "Enhanced AMD Zen 2 / RDNA", ram: "16GB GDDR6 + 2GB DDR5", storage: "2TB Custom SSD" }, 
    camera: { main: "Supports HD Camera", ultrawide: "N/A", telephoto: "N/A", selfie: "N/A" }, 
    battery: { capacity: "DualSense Wireless", charging: "USB-C", wireless: "Wi-Fi 7 & Bluetooth" } 
  },
  { 
    id: 76, name: "PlayStation Accessories (Controllers, Headsets, Portal)", category: "gaming", type: "Brand New", 
    desc: "PS4/PS5 Controllers, Headsets, Charging Docks, Cooling Stands & PS Portal.", 
    price: "₦10,000 - ₦500,000", numericPrice: 100000, 
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80", 
    icon: "fa-gamepad",
    design: { size: "Accessory / Peripheral", res: "N/A", refresh: "N/A", weight: "Varies" }, 
    performance: { chip: "OEM / Original Sony Accessories", ram: "N/A", storage: "N/A" }, 
    camera: { main: "N/A", ultrawide: "N/A", telephoto: "N/A", selfie: "N/A" }, 
    battery: { capacity: "Built-in rechargeable", charging: "USB-C", wireless: "Bluetooth / Wireless" } 
  }
];

document.addEventListener("DOMContentLoaded", function() {
  setupThemeToggle();
  renderProducts("all");
  setupFilterListeners();
  setupNativeDatalistSearch();
});

function setupThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const htmlElement = document.documentElement;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem("tobex_theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      themeIcon.className = "fa-solid fa-sun";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
      const currentTheme = htmlElement.getAttribute("data-theme");
      if (currentTheme === "light") {
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("tobex_theme", "dark");
        themeIcon.className = "fa-solid fa-moon";
      } else {
        htmlElement.setAttribute("data-theme", "light");
        localStorage.setItem("tobex_theme", "light");
        themeIcon.className = "fa-solid fa-sun";
      }
    });
  }
}

function setupNativeDatalistSearch() {
  const datalist = document.getElementById("catalogList");
  if (datalist) {
    datalist.innerHTML = "";
    products.forEach(function(p) {
      const option = document.createElement("option");
      option.value = p.name;
      datalist.appendChild(option);
    });
  }

  const input1 = document.getElementById("compareInput1");
  const input2 = document.getElementById("compareInput2");
  if (input1) input1.value = "iPhone XR";
  if (input2) input2.value = "Samsung Galaxy S23 Ultra";

  const compareBtn = document.getElementById("triggerCompareBtn");
  if (compareBtn) {
    compareBtn.addEventListener("click", renderComparisonGridFromInputs);
  }

  renderComparisonGridFromInputs();
}

function renderComparisonGridFromInputs() {
  const input1 = document.getElementById("compareInput1");
  const input2 = document.getElementById("compareInput2");
  const input3 = document.getElementById("compareInput3");

  const query1 = input1 ? input1.value.trim().toLowerCase() : "";
  const query2 = input2 ? input2.value.trim().toLowerCase() : "";
  const query3 = input3 ? input3.value.trim().toLowerCase() : "";

  const queries = [query1, query2, query3].filter(function(q) { return q !== ""; });
  const gridContainer = document.getElementById("comparisonGrid");
  if (!gridContainer) return;
  
  gridContainer.style.setProperty('--col-count', queries.length);
  gridContainer.innerHTML = "";

  if (queries.length === 0) {
    gridContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Please type devices above and click Compare Devices Now.</p>';
    return;
  }

  const selectedProducts = queries.map(function(q) {
    return products.find(function(p) { return p.name.toLowerCase() === q; }) || 
           products.find(function(p) { return p.name.toLowerCase().indexOf(q) !== -1; });
  }).filter(Boolean);

  if (selectedProducts.length === 0) {
    gridContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">No matching devices found in stock.</p>';
    return;
  }

  const minPrice = Math.min.apply(null, selectedProducts.map(function(p) { return p.numericPrice; }));

  selectedProducts.forEach(function(dev) {
    const isCheapest = dev.numericPrice === minPrice;
    const colCard = document.createElement("div");
    colCard.className = "compare-column-card";

    const design = dev.design || { size: "Standard Spec", res: "Standard HD", refresh: "Standard", weight: "N/A" };
    const perf = dev.performance || { chip: "Standard Processor", ram: "Standard RAM", storage: "Various options" };
    const cam = dev.camera || { main: "Equipped Camera", ultrawide: "N/A", telephoto: "N/A", selfie: "Equipped" };
    const bat = dev.battery || { capacity: "Standard Battery", charging: "Standard", wireless: "N/A" };

    const mediaCompareHTML = dev.image && dev.image !== "" 
      ? '<img src="' + dev.image + '" alt="' + dev.name + '" style="width: 100%; height: 100%; object-fit: contain;" />'
      : '<div style="font-size: 1.8rem; color: var(--primary-blue);"><i class="fa-solid ' + dev.icon + '"></i></div>';

    colCard.innerHTML = `
      <div class="compare-header-box">
        <div style="width: 70px; height: 70px; margin: 0 auto 10px; background: rgba(128,128,128,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          ${mediaCompareHTML}
        </div>
        <h4>${dev.name}</h4>
        <div class="price-badge ${isCheapest ? 'winner-highlight' : ''}">${dev.price} ${isCheapest ? '⭐ Best Price' : ''}</div>
      </div>

      <div class="spec-category-group">
        <div class="spec-category-header"><i class="fa-solid fa-mobile"></i> Display</div>
        <div class="spec-category-body">
          <div class="spec-row"><span class="spec-label">Screen:</span><span class="spec-val">${design.size}</span></div>
          <div class="spec-row"><span class="spec-label">Resolution:</span><span class="spec-val">${design.res}</span></div>
        </div>
      </div>

      <div class="spec-category-group">
        <div class="spec-category-header"><i class="fa-solid fa-microchip"></i> Performance</div>
        <div class="spec-category-body">
          <div class="spec-row"><span class="spec-label">Chip:</span><span class="spec-val">${perf.chip}</span></div>
          <div class="spec-row"><span class="spec-label">RAM:</span><span class="spec-val">${perf.ram}</span></div>
        </div>
      </div>

      <div class="spec-category-group">
        <div class="spec-category-header"><i class="fa-solid fa-battery-full"></i> Battery</div>
        <div class="spec-category-body">
          <div class="spec-row"><span class="spec-label">Capacity:</span><span class="spec-val">${bat.capacity}</span></div>
          <div class="spec-row"><span class="spec-label">Charging:</span><span class="spec-val">${bat.charging}</span></div>
        </div>
      </div>

      <a href="https://wa.me/2348092312691?text=${encodeURIComponent('Hello Tobex Gadgets! I want to order ' + dev.name + ' (' + dev.price + ')')}" target="_blank" class="btn-buy-wa" style="margin-top: auto;">
        <i class="fa-brands fa-whatsapp"></i> Order ${dev.name}
      </a>
    `;

    gridContainer.appendChild(colCard);
  });
}

function renderProducts(category) {
  const container = document.getElementById("productContainer");
  if (!container) return;
  container.innerHTML = "";

  const filtered = category === "all" 
    ? products 
    : products.filter(function(p) { return p.category === category; });

  filtered.forEach(function(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const waText = encodeURIComponent(
      "Hello Tobex Gadgets! I am interested in buying: " + product.name + " (" + product.price + "). Is it available?"
    );

    const mediaHTML = product.image && product.image !== "" 
      ? '<img src="' + product.image + '" alt="' + product.name + '" class="product-thumb" />'
      : '<div class="card-icon"><i class="fa-solid ' + product.icon + '"></i></div>';

    card.innerHTML = `
      <div class="card-img-wrapper">
        ${mediaHTML}
      </div>
      <span class="card-tag">${product.type}</span>
      <h4 class="card-title">${product.name}</h4>
      <p class="card-desc">${product.desc}</p>
      <div class="card-price">${product.price}</div>
      <a href="https://wa.me/2348092312691?text=${waText}" target="_blank" class="btn-buy-wa">
        <i class="fa-brands fa-whatsapp"></i> Buy via WhatsApp
      </a>
    `;
    container.appendChild(card);
  });
}

function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      buttons.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderProducts(btn.getAttribute("data-category"));
    });
  });
}
