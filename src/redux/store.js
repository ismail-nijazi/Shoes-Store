import { createSlice, configureStore } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
	name: "navbarVisibility",
	initialState: { visibility: true },
	reducers: {
		show: (state) => {
			state.visibility = true;
		},
		hide: (state) => {
			state.visibility = false;
		},
	},
});

const shoppingCartSlice = createSlice({
	name: "cartVisibility",
	initialState: { visibility: true },
	reducers: {
		show: (state) => {
			state.visibility = true;
		},
		hide: (state) => {
			state.visibility = false;
		},
	},
});

const cartProducts = createSlice({
	name: "cartProducts",
	initialState: { cartProducts: [] },
	reducers: {
		addProduct: (state, action) => {
			let productExist = false;
			for (let i = 0; i < state.cartProducts.length; i++) {
				if (
					state.cartProducts[i].id === action.payload.id &&
					state.cartProducts[i].size === action.payload.size
				) {
					productExist = true;
					state.cartProducts[i].count += 1;
					state.cartProducts[i].price =
						state.cartProducts[i].count *
						state.cartProducts[i].basePrice;
				}
			}
			if (!productExist) {
				state.cartProducts.push(action.payload);
			}
		},
		decreaseTheCount: (state, action) => {
			for (let i = 0; i < state.cartProducts.length; i++) {
				if (
					state.cartProducts[i].id === action.payload.id &&
					state.cartProducts[i].size === action.payload.size
				) {
					state.cartProducts[i].count -= 1;
					state.cartProducts[i].price =
						state.cartProducts[i].count *
						state.cartProducts[i].basePrice;
					if (state.cartProducts[i].count <= 0) {
						state.cartProducts.splice(i, 1);
					}
				}
			}
		},
	},
});

const aboutPageSections = createSlice({
	name: "aboutSections",
	initialState: { sections: [] },
	reducers: {
		addSectionRef: (state, action) => {
			state.sections.push(action.payload);
		},
	},
});

const filter = createSlice({
	name: "filter",
	initialState: {
		brands: { 1: "Nike", 2: "Adidas", 3: "Vans", 4: "Ugg", 5: "Puma" },
		sizes: {
			1: "36",
			2: "37",
			3: "38",
			4: "39",
			5: "40",
			6: "41",
			7: "42",
			8: "43",
			9: "44",
			10: "45",
			11: "46",
		},
		types: {
			1: "Sneakers",
			2: "Sandals",
			3: "Boots",
			4: "Oxfords",
		},
		colors: ["#fff", "#000", "#999", "#cf2525", "#0a48f2"],
	},
	reducers: {},
});

const selectedFilters = createSlice({
	name: "selectedFilters",
	initialState: {
		allProducts: [
			{
				name: "Product 3",
				price: 149,
				types: "Sneakers",
				image: "/Images/products/shoe-3.png",
				moreInfo: "some more info about product 3",
				sizes: [40, 41, 42, 43, 45, 46],
				colors: ["#fff", "#000", "#999"],
				arrivalDate: "2021-06-05",
				brand: "Adidas",
				id: 3,
			},
			{
				name: "Product 4",
				price: 119,
				types: "Sneakers",
				image: "/Images/products/shoe-4.png",
				moreInfo: "some more info about product 4",
				sizes: [38, 39, 40, 41, 42],
				colors: ["#cf2525", "#0a48f2"],
				arrivalDate: "2021-08-15",
				brand: "Adidas",
				id: 4,
			},
			{
				name: "Product 1",
				price: 99,
				types: "Sneakers",
				image: "/Images/products/shoe-1.png",
				moreInfo: "some more info about product 1",
				sizes: [35, 36, 38, 39, 40, 41, 42],
				colors: ["#fff", "#000", "#999"],
				arrivalDate: "2021-11-10",
				brand: "Puma",
				id: 1,
			},
			{
				name: "Product 2",
				price: 199,
				types: "Sneakers",
				image: "/Images/products/shoe-2.png",
				moreInfo: "some more info about product 2",
				sizes: [40, 41, 42, 43],
				colors: ["#fff", "#000", "#0a48f2"],
				arrivalDate: "2021-09-28",
				brand: "Nike",
				id: 2,
			},
			{
				name: "Product 7",
				price: 149,
				types: "Boots",
				image: "/Images/products/shoe-7.png",
				moreInfo: "some more info about product 7",
				sizes: [36, 37, 38, 39, 40, 41, 42],
				colors: ["#fff"],
				arrivalDate: "2021-06-05",
				brand: "Vans",
				id: 7,
			},

			{
				name: "Product 5",
				price: 119,
				types: "Sneakers",
				image: "/Images/products/shoe-5.png",
				moreInfo: "some more info about product 5",
				sizes: [38, 39, 40, 41, 42, 43],
				colors: ["#fff", "#000"],
				arrivalDate: "2021-08-15",
				brand: "Nike",
				id: 5,
			},
			{
				name: "Product 6",
				price: 119,
				types: "Oxfords",
				image: "/Images/products/shoe-6.png",
				moreInfo: "some more info about product 6",
				sizes: [40, 41, 42, 43, 44, 45],
				colors: ["#0a48f2"],
				arrivalDate: "2021-10-21",
				brand: "Vans",
				id: 6,
			},
		],
		productToBeShown: [],
		filters: {
			brands: [],
			types: [],
			colors: [],
			sizes: [],

		},
	},
	reducers: {
		filterProducts: (state) => {
			function getIndex(arr, product) {
				for (let index = 0; index < arr.length; index++) {
					if (arr[index].id === product.id) {
						return index;
					}
				}
				return -1;
			}
			let prdocutListCopy = [...state.productToBeShown];
			let count_emptyFilters = 0;
			state.productToBeShown = [];
			for (const [key, value] of Object.entries(state.filters)) {
				let filterType = key === "brands" ? "brand" : key;

				if (value.length > 0) {
					const dependentFilters = key === "colors" || key === "sizes"
					let productList = dependentFilters ? prdocutListCopy : [...state.allProducts];
					for (let index = 0; index < productList.length; index++) {
						for (const filter of value) {
							const correctData = isNaN(filter) ? filter : +filter;
							if (Array.isArray(productList[index][filterType])) {
								if (productList[index][filterType].includes(correctData)) {
									const productIndex = getIndex(state.productToBeShown, productList[index]);
									if (productIndex === -1) {
										state.productToBeShown.push(productList[index])
									}
								}
								else if (dependentFilters) {
									state.productToBeShown.splice(index, 1);
								}
							} else {
								if (correctData === productList[index][filterType]) {
									const productIndex = getIndex(state.productToBeShown, productList[index]);
									if (productIndex === -1) {
										state.productToBeShown.push(productList[index])
									}
								}
								else if (dependentFilters) {
									state.productToBeShown.splice(index, 1)
								}
							}


						}
					}
				} else {
					count_emptyFilters++;
				}
			}

			if (count_emptyFilters === Object.keys(state.filters).length) {
				state.productToBeShown = state.allProducts;
			}
		},
		addRemoveFilter: (state, action) => {
			// action payload will be in {type:"typeOfFilter", item:"selectedFilter"} format
			const type = action.payload.type;
			const item = action.payload.item;
			const exists = state.filters[type].indexOf(item);

			if (exists !== -1) {
				state.filters[type].splice(exists, 1);
			} else {
				state.filters[type].push(item);
			}
		},
	},
});


const SelectedProduct = createSlice({
	name: "selectedProduct",
	initialState: {
		product: {}
	},
	reducers: {
		changeProduct: (state, action) => {
			state.product = action.payload;
		}
	}
})


const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: [
					"aboutSections/addSectionRef",
					"aboutSections.sections",
				],
				// Ignore these field paths in all actions
				ignoredActionPaths: ["sections"],
				// Ignore these paths in the state
				ignoredPaths: ["aboutPageSections.sections"],
			},
		}),
	reducer: {
		navbarVisibility: navbarSlice.reducer,
		cartVisibility: shoppingCartSlice.reducer,
		cartProducts: cartProducts.reducer,
		aboutPageSections: aboutPageSections.reducer,
		filters: filter.reducer,
		selectedFilters: selectedFilters.reducer,
		selectedProduct: SelectedProduct.reducer
	},
});

export default store;

export const navbarActions = navbarSlice.actions;
export const shoppingCartActions = shoppingCartSlice.actions;
export const cartProductsActions = cartProducts.actions;
export const aboutSections = aboutPageSections.actions;
export const filtersSelection = selectedFilters.actions;
export const productDetail = SelectedProduct.actions;
