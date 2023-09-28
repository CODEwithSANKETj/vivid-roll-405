const data = [
  {
    image: '',
    brand: '',
    title: '',
    details: '',
    price: 1,
    category: ''
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_ee00a414-7e44-4ab6-8129-aadda2f19498.png?v=1685797240',
    brand: 'ROYAL CANIN',
    title: 'Royal Canin - Shih Tzu Adult Dry Food',
    details: 'Suitable for dogs over 10 months old, ROYAL CANIN® Shih Tzu Adult is specially formulated with all the nutritional needs of your adult Shih Tzu in mind.ROYAL CANIN® Shih Tzu Adult contains an exclusive combination of nutrients that help to maintain your dogs skin health',
    price: 549,
    category: 'dog'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/Farmina-Vet-Life-Cardiac-Canine-Formula-Dog-Food-2kg-1170x1170-1.jpg?v=1670331357',
    brand: 'VET LIFE',
    title: 'Vet Life Cardiac Canine Formula Dry Dog Food 2 kg',
    details: 'Support heart function in the case of chronic cardiac insufficiency. Farmina Vet Life Cardiac Dry Dog Food is a dietetic and complete feed for adult dogs, indicated for the support of cardiac function in case of chronic cardiac insufficiency.',
    price: 1932,
    category: 'dog'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_834x834_72d04f47-27c3-44e6-b925-87b0417cbb69.webp?v=1679466519',
    brand: 'HIMALAYA',
    title: 'Himalaya Healthy Pet Food - Puppy - Chicken & Rice',
    details: 'Healthy Pet food - Puppy is a complete and balanced food with over 20 nutrients, vitamins, and minerals, which provides a perfect balance of nutrition and is fortified with herbs for additional health benefits for puppies.',
    price: 2499,
    category: 'dog'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_a3ffac9d-e7ae-4749-9dd2-78196e034daf.jpg?v=1689165279',
    brand: 'WHISKAS',
    title: 'Whiskas Kitten (2-12 months) Dry Cat Food - Ocean Fish Flavor with Milk',
    details: 'Whiskas Ocean Fish cat food is a nutritionally complete and balanced recipe that has carefully been created to cater to the requirements of an adult cat’s system. Flavorful pockets',
    price: 475,
    category: 'cat'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/Farmina-Vet-Life-Gastrointestinal-Wet-Cat-Food.jpg?v=1670332126',
    brand: 'VET LIFE',
    title: 'Vet Life Gastrointestinal Feline Cat Wet Food, 85 gm',
    details: 'Inflammatory gastro-intestinal disorders, convalescence. Farmina Vet Life Gastrointestinal is a complete dietetic food for cats formulated to reduce acute intestinal absorption disorders. It favors recovery nutrition and convalescence thanks to the increased level of electrolytes and to a highly digestible ingredients.',
    price: 1143,
    category: 'cat'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_a96ec1fa-7dd1-48b7-ac57-68316024ea4c.png?v=1685795497',
    brand: 'ROYAL CANIN',
    title: 'Royal Canin - Fit32 Dry Cat Food',
    details: 'Royal Canin Fit 32 pet food is suitable for adult cats between 1-7 years old, its been specially designed to meet all of your cats nutritional requirements for supporting and maintaining the healthy situation that your cat is currently in.',
    price: 1584,
    category: 'cat'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/57c91479-aef4-4a3d-a304-44835df6846b_1.448de7dbef33fe2b8477034b9fd6c6b6_1_4238e93e-7d75-4402-8e36-f9f11b63ad7b.webp?v=1666088744',
    brand: 'PAWSINDIA',
    title: 'Wobble Wag Giggle ball Interactive Dog Toy',
    details: 'Uks best-selling interactive dog toy is now in India. Wobble Wag Giggle Ball is sure to catch your doggos attention with funny sounds and become their favourite toy in no',
    price: 1499,
    category: 'dog_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/06.jpg?v=1661422511',
    brand: 'PAWSINDIA',
    title: 'Rubber Bottle Dog Chew Toy',
    details: 'Introducing the Rubber Bottle Dog Chew Toy, a one-of-a-kind toy designed based on observing what captures a dos attention the most  a plastic bottle! But fear not, its completely non-toxic!',
    price: 810,
    category: 'dog_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_57.jpg?v=1662616936',
    brand: 'PAWSINDIA',
    title: 'Licks Peanut Butter for dogs 340 gm',
    details: 'IS PEANUT BUTTER DOG FOR DOGS? We noticed your doggos love for treats and developed one to satiate their craving for we present you with a delicious dog treat - Peanut Butter.',
    price: 349,
    category: 'dog_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/UltimateInteractiveDogToysComboPacks_1.jpg?v=1609580606',
    brand: 'PAWSINDIA',
    title: 'Ultimate Interactive Dog Toy',
    details: 'This Combo pack contains 2 items and is curated by Animal Experts and Recommended vets WICKED BONE : WORLDS FIRST INTERACTIVE GAMING DEVICE FOR ANIMALS AND HUMANS',
    price: 4599,
    category: 'dog_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/CheerbleBallGrey.jpg?v=1689148739',
    brand: 'CHEERBLE',
    title: 'Cheerble Ball for Cats Grey',
    details: 'Made with love your feline friends unlimited entertainment! The Cheerble cat ball toy is a hands-free, 100% automated cat toy that bounces, rolls, and rattles about the house to keep your cat active and entertained whether you’re at home or away.',
    price: 2939,
    category: 'cat_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/1_19_43bbfc2a-b239-4261-b265-b55d62488f5f.jpg?v=1643372597',
    brand: 'CHEERBLE',
    title: 'Cheerble Amusing Cat Collar',
    details: 'Wearable Smart Laser Cat Toy by Cheerble Help your furry friend stay active by hunting an uncatchable red dot. This wearable smart laser cat toy by Cheerble is all set to be your cat’s favorite toy.',
    price: 2249,
    category: 'cat_toy'
  },
  {
    image: 'https://pawsindia.com/cdn/shop/products/Image1_6.jpg?v=1643694807',
    brand: 'FOFOS',
    title: 'Comic House Cat Scratcher',
    details: 'Fofos comic house cat scratcher is an interactive cat scratcher toy that is designed to look like a cute cat playing house and provides your cat with a private place to rest.',
    price: 1045,
    category: 'cat_toy'
  },
  {
    image: '',
    brand: '',
    title: '',
    details: '',
    price: 1,
    category: ''
  }
];
