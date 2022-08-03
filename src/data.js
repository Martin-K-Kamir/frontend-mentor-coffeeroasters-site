export default {
	products: [
		{
			key: 1,
			title: "Gran Espresso",
			desc: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
			dir: 'home',
			img: "image-gran-espresso",
			imgType: "png",
			imgWidth: 240,
			imgHeight: 189,
			alt: "Gran Espresso Package",
		},
		{
			key: 2,
			title: "Planalto",
			desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
			dir: 'home',
			img: "image-planalto",
			imgType: "png",
			imgWidth: 240,
			imgHeight: 189,
			alt: "Planalto Package",
		},
		{
			key: 3,
			title: "Piccollo",
			desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
			dir: 'home',
			img: "image-piccollo",
			imgType: "png",
			imgWidth: 240,
			imgHeight: 189,
			alt: "Piccollo Package",
		},
		{
			key: 4,
			title: "Danche",
			desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
			dir: 'home',
			img: "image-danche",
			imgType: "png",
			imgWidth: 240,
			imgHeight: 189,
			alt: "Danche Package",
		}
	],
	features: [
		{
			key: 1,
			title: "Best quality",
			desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
			dir: 'home',
			img: "icon-coffee-bean",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "Coffee Bean",
		},
		{
			key: 2,
			title: "Exclusive benefits",
			desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
			dir: 'home',
			img: "icon-gift",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "Gift",
		},
		{
			key: 3,
			title: "Free shipping",
			desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
			dir: 'home',
			img: "icon-truck",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "Truck",
		},
	],
	steps: [
		{
			key: 1,
			title: "Pick your coffee",
			desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
		},
		{
			key: 2,
			title: "Choose the frequency",
			desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
		},
		{
			key: 3,
			title: "Receive and enjoy!",
			desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
		},
	],
	headquarters: [
		{
			key: 1,
			title: "England",
			street: "68 Asfordby Rd",
			city: "London",
			postcode: "SY6 1YA",
			phoneNum: "+44 1241 918425",
			dir: 'about',
			img: "icon-uk",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "United Kingdom state shape",
		},
		{
			key: 2,
			title: "Canada",
			street: "1528 Eglinton Avenue",
			city: "Toronto",
			postcode: "Ontario M4P 1A6",
			phoneNum: "+1 416 485 2997",
			dir: 'about',
			img: "icon-canada",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "Canada state shape",
		},
		{
			key: 3,
			title: "Australia",
			street: "36 Swanston Street",
			city: "Kewell",
			postcode: "Victoria",
			phoneNum: "+61 4 9928 3629",
			dir: 'about',
			img: "icon-australia",
			imgType: "svg",
			imgWidth: 70,
			imgHeight: 70,
			alt: "Australia state shape",
		},
	],
	form: [
		{
			key: 1,
			title: "How do you drink your coffee?",
			id: "preferences",
			tab: "Preferences",
			isOpen: true,
			isChecked: false,
			item: [
				{
					key: 1,
					title: "Capsule",
					desc: "Compatible with Nespresso systems and similar brewers",
					ref: "beanType",
				},
				{
					key: 2,
					title: "Filter",
					desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
					ref: "beanType",
				},
				{
					key: 3,
					title: "Espresso",
					desc: "Dense and finely ground beans for an intense, flavorful experience",
					ref: "beanType",
				}
			]
		},
		{
			key: 2,
			title: "What type of coffee?",
			id: "beanType",
			tab: "Bean Type",
			isOpen: false,
			isChecked: false,
			item: [
				{
					key: 1,
					title: "Single Origin",
					desc: "Distinct, high quality coffee from a specific family-owned farm",
					ref: "quantity"
				},
				{
					key: 2,
					title: "Decaf",
					desc: "Just like regular coffee, except the caffeine has been removed",
					ref: "quantity"
				},
				{
					key: 3,
					title: "Blended",
					desc: "Combination of two or three dark roasted beans of organic coffees",
					ref: "quantity"
				}
			]
		},
		{
			key: 3,
			title: "How much would you like?",
			id: "quantity",
			tab: "Quantity",
			isOpen: false,
			isChecked: false,
			item: [
				{
					key: 1,
					title: "250g",
					desc: "Perfect for the solo drinker. Yields about 12 delicious cups",
					ref: "grindOption"
				},
				{
					key: 2,
					title: "500g",
					desc: "Perfect option for a couple. Yields about 40 delecidle cups",
					ref: "grindOption"
				},
				{
					key: 3,
					title: "1000g",
					desc: "Perfect for offices and events. Yields about 90 delightful cups",
					ref: "grindOption"
				}
			]
		},
		{
			key: 4,
			title: "Want us to grind them?",
			id: "grindOption",
			tab: "Grind Option",
			isOpen: false,
			isChecked: false,
			disabledMsg: "Capsule option is selected, which disable griding option",
			item: [
				{
					key: 1,
					title: "Wholebean",
					desc: "Best choice if you cherish the full sensory experience",
					ref: "deliveries",
				},
				{
					key: 2,
					title: "Filtered",
					desc: "For drip or pour-over coffee methods such as V60 or Aeropress",
					ref: "deliveries"
				},
				{
					key: 3,
					title: "Cafetiére",
					desc: " Course ground beans specially suited for french press coffee",
					ref: "deliveries"
				}
			]
		},
		{
			key: 5,
			title: "How often should we deliver?",
			id: "deliveries",
			tab: "Deliveries",
			isOpen: false,
			isChecked: false,
			item: [
				{
					key: 1,
					title: "Every week",
					desc: "$7.20 per shipment. Includes free first-class shipping",
				},
				{
					key: 2,
					title: "Every 2 weeks",
					desc: "$9.60 per shipment. Includes free priority shipping",
				},
				{
					key: 3,
					title: "Every month",
					desc: "$12.00 per shipment. Includes free priority shipping",
				}
			]
		},
	],
	quantityPrices: [
		{
			id: "250g",
			delivery: [
				{
					id: "Every week",
					value: 7.20
				},
				{
					id: "Every 2 weeks",
					value: 9.60
				},
				{
					id: "Every month",
					value: 12.00
				},
			]
		},
		{
			id: "500g",
			delivery: [
				{
					id: "Every week",
					value: 13.00
				},
				{
					id: "Every 2 weeks",
					value: 17.50
				},
				{
					id: "Every month",
					value: 22.00
				},
			]
		},
		{
			id: "1000g",
			delivery: [
				{
					id: "Every week",
					value: 22.00
				},
				{
					id: "Every 2 weeks",
					value: 32.00
				},
				{
					id: "Every month",
					value: 42.00
				},
			]
		},
	],
	deliveryRatios: [
		{
			id: "Every week",
			ratio: 4,
		},
		{
			id: "Every 2 weeks",
			ratio: 2,
		},
		{
			id: "Every month",
			ratio: 1,
		},
	]
}