const PRODUCTS = [
  {id:"LAY001",name:"Animal Print Hijab",price:319,category:"hijab",description:"Animal Print Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY001.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY002",name:"Bandana",price:269,category:"accessories",description:"Bandana — thoughtfully selected for the Layora collection.",image:"assets/products/LAY002.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY003",name:"Bridal Georgette",price:340,category:"hijab",description:"Bridal Georgette — thoughtfully selected for the Layora collection.",image:"assets/products/LAY003.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY004",name:"Bubble Satin Stone",price:319,category:"hijab",description:"Bubble Satin Stone — thoughtfully selected for the Layora collection.",image:"assets/products/LAY004.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY005",name:"Cotton Hijab",price:200,category:"hijab",description:"Cotton Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY005.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY006",name:"Cotton Black & White Hijab",price:140,category:"hijab",description:"Cotton Black & White Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY006.jpg",colours:["Black","White","Other"],featured:false},
  {id:"LAY007",name:"Cotton Print Hijab",price:259,category:"hijab",description:"Cotton Print Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY007.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY008",name:"Digital Print Hijab",price:299,category:"hijab",description:"Digital Print Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY008.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY009",name:"Edgem Embroidery",price:349,category:"hijab",description:"Edgem Embroidery — thoughtfully selected for the Layora collection.",image:"assets/products/LAY009.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY010",name:"Embroidery Organza",price:329,category:"hijab",description:"Embroidery Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY010.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY011",name:"Floral Print Cotton Hijab",price:140,category:"hijab",description:"Floral Print Cotton Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY011.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY012",name:"Hesh Nine Black Hijab",price:299,category:"hijab",description:"Hesh Nine Black Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY012.jpg",colours:["Black","Other"],featured:false},
  {id:"LAY013",name:"Heavy Chiffon Crochet",price:299,category:"hijab",description:"Heavy Chiffon Crochet — thoughtfully selected for the Layora collection.",image:"assets/products/LAY013.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY014",name:"Heavy Chiffon",price:200,category:"hijab",description:"Heavy Chiffon — thoughtfully selected for the Layora collection.",image:"assets/products/LAY014.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY015",name:"Jersey Jersey",price:289,category:"hijab",description:"Jersey Jersey — thoughtfully selected for the Layora collection.",image:"assets/products/LAY015.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY016",name:"Lux Organza",price:299,category:"hijab",description:"Lux Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY016.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY017",name:"Malaysian Cotton",price:269,category:"hijab",description:"Malaysian Cotton — thoughtfully selected for the Layora collection.",image:"assets/products/LAY017.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY018",name:"Moja Hand Sleeves",price:169,category:"accessories",description:"Moja Hand Sleeves — thoughtfully selected for the Layora collection.",image:"assets/products/LAY018.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY019",name:"Moja Jersey",price:299,category:"hijab",description:"Moja Jersey — thoughtfully selected for the Layora collection.",image:"assets/products/LAY019.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY020",name:"Moja Kids Jersey",price:299,category:"hijab",description:"Moja Kids Jersey — thoughtfully selected for the Layora collection.",image:"assets/products/LAY020.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY021",name:"Moja Kids Organza",price:299,category:"hijab",description:"Moja Kids Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY021.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY022",name:"Moja Loop Pin",price:149,category:"pins",description:"Moja Loop Pin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY022.jpg",colours:["Gold","Silver","Black","Other"],featured:false},
  {id:"LAY023",name:"Moja Magnetic Hijab",price:369,category:"hijab",description:"Moja Magnetic Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY023.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY024",name:"Moja Magnetic Pin",price:120,category:"pins",description:"Moja Magnetic Pin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY024.jpg",colours:["Gold","Silver","Black","Other"],featured:false},
  {id:"LAY025",name:"Moja Malaysian Georgette",price:299,category:"hijab",description:"Moja Malaysian Georgette — thoughtfully selected for the Layora collection.",image:"assets/products/LAY025.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY026",name:"Moja Organza",price:299,category:"hijab",description:"Moja Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY026.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY027",name:"Moja Shoulder Sleeves",price:299,category:"accessories",description:"Moja Shoulder Sleeves — thoughtfully selected for the Layora collection.",image:"assets/products/LAY027.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY028",name:"Moja Strips Chiffon",price:299,category:"hijab",description:"Moja Strips Chiffon — thoughtfully selected for the Layora collection.",image:"assets/products/LAY028.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY029",name:"Moja Tie Cap",price:149,category:"accessories",description:"Moja Tie Cap — thoughtfully selected for the Layora collection.",image:"assets/products/LAY029.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY030",name:"Muna Satin Hijab",price:299,category:"hijab",description:"Muna Satin Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY030.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY031",name:"Niqab",price:169,category:"accessories",description:"Niqab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY031.jpg",colours:["Black","Beige","Other"],featured:false},
  {id:"LAY032",name:"Ombre Chiffon",price:269,category:"hijab",description:"Ombre Chiffon — thoughtfully selected for the Layora collection.",image:"assets/products/LAY032.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY033",name:"Ombre Double Color",price:249,category:"hijab",description:"Ombre Double Color — thoughtfully selected for the Layora collection.",image:"assets/products/LAY033.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY034",name:"Ombre Turkish Cotton",price:269,category:"hijab",description:"Ombre Turkish Cotton — thoughtfully selected for the Layora collection.",image:"assets/products/LAY034.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY035",name:"Organic Cotton Prayer Dress",price:569,category:"accessories",description:"Organic Cotton Prayer Dress — thoughtfully selected for the Layora collection.",image:"assets/products/LAY035.jpg",colours:["Black","Beige","Pink","Other"],featured:false},
  {id:"LAY036",name:"Organza",price:249,category:"hijab",description:"Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY036.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY037",name:"Organza Shimmer Rhinestone",price:319,category:"hijab",description:"Organza Shimmer Rhinestone — thoughtfully selected for the Layora collection.",image:"assets/products/LAY037.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY038",name:"Organza Yusra",price:349,category:"hijab",description:"Organza Yusra — thoughtfully selected for the Layora collection.",image:"assets/products/LAY038.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY039",name:"Pashmina Hijab",price:319,category:"hijab",description:"Pashmina Hijab — thoughtfully selected for the Layora collection.",image:"assets/products/LAY039.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY040",name:"Ravka Heavy Chiffon",price:299,category:"hijab",description:"Ravka Heavy Chiffon — thoughtfully selected for the Layora collection.",image:"assets/products/LAY040.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY041",name:"Organza",price:319,category:"hijab",description:"Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY041.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY042",name:"Scrunchies",price:149,category:"accessories",description:"Scrunchies — thoughtfully selected for the Layora collection.",image:"assets/products/LAY042.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY043",name:"Sidra Cap",price:60,category:"caps",description:"Sidra Cap — thoughtfully selected for the Layora collection.",image:"assets/products/LAY043.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY044",name:"Shimmer Crush Satin",price:349,category:"hijab",description:"Shimmer Crush Satin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY044.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY045",name:"Shining Print",price:200,category:"hijab",description:"Shining Print — thoughtfully selected for the Layora collection.",image:"assets/products/LAY045.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY046",name:"Textured Satin",price:319,category:"hijab",description:"Textured Satin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY046.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY047",name:"Velvet Scrunchies",price:159,category:"accessories",description:"Velvet Scrunchies — thoughtfully selected for the Layora collection.",image:"assets/products/LAY047.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY048",name:"Yusra Chiffon",price:319,category:"hijab",description:"Yusra Chiffon — thoughtfully selected for the Layora collection.",image:"assets/products/LAY048.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY049",name:"Yusra Georgette Strips",price:299,category:"hijab",description:"Yusra Georgette Strips — thoughtfully selected for the Layora collection.",image:"assets/products/LAY049.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY050",name:"Zara Bonnet Cap",price:149,category:"caps",description:"Zara Bonnet Cap — thoughtfully selected for the Layora collection.",image:"assets/products/LAY050.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY051",name:"Zara Crinkled Cotton",price:269,category:"hijab",description:"Zara Crinkled Cotton — thoughtfully selected for the Layora collection.",image:"assets/products/LAY051.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY052",name:"Zara Crushed Organza",price:299,category:"hijab",description:"Zara Crushed Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY052.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY053",name:"Zara Glimmer Organza",price:299,category:"hijab",description:"Zara Glimmer Organza — thoughtfully selected for the Layora collection.",image:"assets/products/LAY053.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY054",name:"Zara Hijab Tie Cap",price:169,category:"caps",description:"Zara Hijab Tie Cap — thoughtfully selected for the Layora collection.",image:"assets/products/LAY054.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY055",name:"Zara Lux Jersey",price:299,category:"hijab",description:"Zara Lux Jersey — thoughtfully selected for the Layora collection.",image:"assets/products/LAY055.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY056",name:"Zara Lux Satin",price:299,category:"hijab",description:"Zara Lux Satin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY056.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY057",name:"Zara Triple Black",price:349,category:"hijab",description:"Zara Triple Black — thoughtfully selected for the Layora collection.",image:"assets/products/LAY057.jpg",colours:["Black","Other"],featured:true},
  {id:"LAY058",name:"Zara Magnetic Pin",price:120,category:"pins",description:"Zara Magnetic Pin — thoughtfully selected for the Layora collection.",image:"assets/products/LAY058.jpg",colours:["Gold","Silver","Black","Other"],featured:false},
  {id:"LAY059",name:"Zara Malaysian Georgette",price:299,category:"hijab",description:"Zara Malaysian Georgette — thoughtfully selected for the Layora collection.",image:"assets/products/LAY059.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY060",name:"Zara Neck Cover",price:199,category:"accessories",description:"Zara Neck Cover — thoughtfully selected for the Layora collection.",image:"assets/products/LAY060.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY061",name:"Zara Shaper",price:119,category:"accessories",description:"Zara Shaper — thoughtfully selected for the Layora collection.",image:"assets/products/LAY061.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY062",name:"Zara Shoulder Sleeve",price:299,category:"accessories",description:"Zara Shoulder Sleeve — thoughtfully selected for the Layora collection.",image:"assets/products/LAY062.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false},
  {id:"LAY063",name:"Zara Tube Cap",price:149,category:"accessories",description:"Zara Tube Cap — thoughtfully selected for the Layora collection.",image:"assets/products/LAY063.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:true},
  {id:"LAY064",name:"Zara Watercolor",price:299,category:"hijab",description:"Zara Watercolor — thoughtfully selected for the Layora collection.",image:"assets/products/LAY064.jpg",colours:["Black","Beige","Pink","Maroon","Other"],featured:false}
];      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY013",
    "name": "Heavy Chiffon Crochet",
    "price": 299,
    "category": "hijab",
    "description": "Heavy Chiffon Crochet — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY013.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY014",
    "name": "Heavy Chiffon",
    "price": 200,
    "category": "hijab",
    "description": "Heavy Chiffon — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY014.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY015",
    "name": "Jersey Jersey",
    "price": 289,
    "category": "hijab",
    "description": "Jersey Jersey — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY015.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY016",
    "name": "Lux Organza",
    "price": 299,
    "category": "hijab",
    "description": "Lux Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY016.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY017",
    "name": "Malaysian Cotton",
    "price": 269,
    "category": "hijab",
    "description": "Malaysian Cotton — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY017.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY018",
    "name": "Moja Hand Sleeves",
    "price": 169,
    "category": "accessories",
    "description": "Moja Hand Sleeves — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY018.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY019",
    "name": "Moja Jersey",
    "price": 299,
    "category": "hijab",
    "description": "Moja Jersey — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY019.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY020",
    "name": "Moja Kids Jersey",
    "price": 299,
    "category": "hijab",
    "description": "Moja Kids Jersey — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY020.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY021",
    "name": "Moja Kids Organza",
    "price": 299,
    "category": "hijab",
    "description": "Moja Kids Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY021.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY022",
    "name": "Moja Loop Pin",
    "price": 149,
    "category": "pins",
    "description": "Moja Loop Pin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY022.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY023",
    "name": "Moja Magnetic Hijab",
    "price": 369,
    "category": "hijab",
    "description": "Moja Magnetic Hijab — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY023.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY024",
    "name": "Moja Magnetic Pin",
    "price": 120,
    "category": "pins",
    "description": "Moja Magnetic Pin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY024.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY025",
    "name": "Moja Malaysian Georgette",
    "price": 299,
    "category": "hijab",
    "description": "Moja Malaysian Georgette — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY025.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY026",
    "name": "Moja Organza",
    "price": 299,
    "category": "hijab",
    "description": "Moja Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY026.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY027",
    "name": "Moja Shoulder Sleeves",
    "price": 299,
    "category": "accessories",
    "description": "Moja Shoulder Sleeves — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY027.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY028",
    "name": "Moja Strips Chiffon",
    "price": 299,
    "category": "hijab",
    "description": "Moja Strips Chiffon — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY028.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY029",
    "name": "Moja Tie Cap",
    "price": 149,
    "category": "accessories",
    "description": "Moja Tie Cap — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY029.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY030",
    "name": "Muna Satin Hijab",
    "price": 299,
    "category": "hijab",
    "description": "Muna Satin Hijab — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY030.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY031",
    "name": "Niqab",
    "price": 169,
    "category": "accessories",
    "description": "Niqab — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY031.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY032",
    "name": "Ombre Chiffon",
    "price": 269,
    "category": "hijab",
    "description": "Ombre Chiffon — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY032.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY033",
    "name": "Ombre Double Color",
    "price": 249,
    "category": "hijab",
    "description": "Ombre Double Color — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY033.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY034",
    "name": "Ombre Turkish Cotton",
    "price": 269,
    "category": "hijab",
    "description": "Ombre Turkish Cotton — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY034.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY035",
    "name": "Organic Cotton Prayer Dress",
    "price": 569,
    "category": "accessories",
    "description": "Organic Cotton Prayer Dress — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY035.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY036",
    "name": "Organza",
    "price": 249,
    "category": "hijab",
    "description": "Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY036.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY037",
    "name": "Organza Shimmer Rhinestone",
    "price": 319,
    "category": "hijab",
    "description": "Organza Shimmer Rhinestone — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY037.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY038",
    "name": "Organza Yusra",
    "price": 349,
    "category": "hijab",
    "description": "Organza Yusra — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY038.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY039",
    "name": "Pashmina Hijab",
    "price": 319,
    "category": "hijab",
    "description": "Pashmina Hijab — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY039.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY040",
    "name": "Ravka Heavy Chiffon",
    "price": 299,
    "category": "hijab",
    "description": "Ravka Heavy Chiffon — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY040.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY041",
    "name": "Organza",
    "price": 319,
    "category": "hijab",
    "description": "Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY041.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY042",
    "name": "Scrunchies",
    "price": 149,
    "category": "accessories",
    "description": "Scrunchies — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY042.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY043",
    "name": "Sidra Cap",
    "price": 60,
    "category": "caps",
    "description": "Sidra Cap — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY043.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY044",
    "name": "Shimmer Crush Satin",
    "price": 349,
    "category": "hijab",
    "description": "Shimmer Crush Satin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY044.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY045",
    "name": "Shining Print",
    "price": 200,
    "category": "hijab",
    "description": "Shining Print — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY045.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY046",
    "name": "Textured Satin",
    "price": 319,
    "category": "hijab",
    "description": "Textured Satin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY046.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY047",
    "name": "Velvet Scrunchies",
    "price": 159,
    "category": "accessories",
    "description": "Velvet Scrunchies — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY047.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY048",
    "name": "Yusra Chiffon",
    "price": 319,
    "category": "hijab",
    "description": "Yusra Chiffon — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY048.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY049",
    "name": "Yusra Georgette Strips",
    "price": 299,
    "category": "hijab",
    "description": "Yusra Georgette Strips — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY049.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY050",
    "name": "Zara Bonnet Cap",
    "price": 149,
    "category": "caps",
    "description": "Zara Bonnet Cap — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY050.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY051",
    "name": "Zara Crinkled Cotton",
    "price": 269,
    "category": "hijab",
    "description": "Zara Crinkled Cotton — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY051.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY052",
    "name": "Zara Crushed Organza",
    "price": 299,
    "category": "hijab",
    "description": "Zara Crushed Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY052.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY053",
    "name": "Zara Glimmer Organza",
    "price": 299,
    "category": "hijab",
    "description": "Zara Glimmer Organza — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY053.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY054",
    "name": "Zara Hijab Tie Cap",
    "price": 169,
    "category": "caps",
    "description": "Zara Hijab Tie Cap — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY054.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY055",
    "name": "Zara Lux Jersey",
    "price": 299,
    "category": "hijab",
    "description": "Zara Lux Jersey — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY055.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY056",
    "name": "Zara Lux Satin",
    "price": 299,
    "category": "hijab",
    "description": "Zara Lux Satin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY056.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY057",
    "name": "Zara Triple Black",
    "price": 349,
    "category": "hijab",
    "description": "Zara Triple Black — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY057.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY058",
    "name": "Zara Magnetic Pin",
    "price": 120,
    "category": "pins",
    "description": "Zara Magnetic Pin — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY058.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY059",
    "name": "Zara Malaysian Georgette",
    "price": 299,
    "category": "hijab",
    "description": "Zara Malaysian Georgette — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY059.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY060",
    "name": "Zara Neck Cover",
    "price": 199,
    "category": "accessories",
    "description": "Zara Neck Cover — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY060.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY061",
    "name": "Zara Shaper",
    "price": 119,
    "category": "accessories",
    "description": "Zara Shaper — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY061.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY062",
    "name": "Zara Shoulder Sleeve",
    "price": 299,
    "category": "accessories",
    "description": "Zara Shoulder Sleeve — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY062.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  },
  {
    "id": "LAY063",
    "name": "Zara Tube Cap",
    "price": 149,
    "category": "accessories",
    "description": "Zara Tube Cap — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY063.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": true
  },
  {
    "id": "LAY064",
    "name": "Zara Watercolor",
    "price": 299,
    "category": "hijab",
    "description": "Zara Watercolor — thoughtfully selected for the Layora collection.",
    "image": "assets/products/LAY064.jpg",
    "colours": [
      "Black",
      "Beige",
      "Pink",
      "Maroon",
      "Other"
    ],
    "featured": false
  }
];
