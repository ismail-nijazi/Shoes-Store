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
                const product = { ...action.payload };
                product.price = product.count * product.basePrice;
                state.cartProducts.push(product);
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
        countOfIndependentFilter: 0,
        filters: {
            brand: [],
            types: [],
            colors: [],
            sizes: [],
        },
        priceFilter: 200,
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

            function filterByPrice() {
                for (let i = 0; i < state.productToBeShown.length; i++) {
                    if (state.productToBeShown[i].price > state.priceFilter) {
                        state.productToBeShown.splice(i, 1);
                        i--;
                    }
                }
            }
            const dependentFiltersList = ["colors", "sizes", "types"];
            let prdocutListCopy = [...state.productToBeShown];
            let productToBeRemoved = [];
            state.productToBeShown = [];
            // Check if is there any filter checked and if it is not so it will set filtered products to all products
            if (state.countOfIndependentFilter === 0) {
                state.productToBeShown = [...state.allProducts];
                prdocutListCopy = [...state.allProducts];
            }
            for (const [key, value] of Object.entries(state.filters)) {
                if (value.length > 0) {
                    // if filter depends on filtered products
                    const dependentFilters = dependentFiltersList.includes(key);
                    let productList = dependentFilters
                        ? prdocutListCopy
                        : [...state.allProducts];
                    for (let index = 0; index < productList.length; index++) {
                        for (const filter of value) {
                            const correctData = isNaN(filter)
                                ? filter
                                : +filter;
                            if (dependentFilters) {
                                if (
                                    !productList[index][key].includes(
                                        correctData
                                    )
                                ) {
                                    productToBeRemoved.push(productList[index]);
                                }
                            } else if (Array.isArray(productList[index][key])) {
                                if (
                                    productList[index][key].includes(
                                        correctData
                                    )
                                ) {
                                    const productIndex = getIndex(
                                        state.productToBeShown,
                                        productList[index]
                                    );
                                    if (productIndex === -1) {
                                        state.productToBeShown.push(
                                            productList[index]
                                        );
                                    }
                                }
                            } else {
                                if (correctData === productList[index][key]) {
                                    const productIndex = getIndex(
                                        state.productToBeShown,
                                        productList[index]
                                    );
                                    if (productIndex === -1) {
                                        state.productToBeShown.push(
                                            productList[index]
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }
            productToBeRemoved.forEach((productToRemove) => {
                for (let i = 0; i < state.productToBeShown.length; i++) {
                    if (productToRemove.id === state.productToBeShown[i].id) {
                        state.productToBeShown.splice(i, 1);
                    }
                }
            });
            filterByPrice();
        },
        addRemoveFilter: (state, action) => {
            // action payload will be in {type:"typeOfFilter", item:"selectedFilter"} format
            const type = action.payload.type;
            const item = action.payload.item;
            if (type === "price") {
                state.priceFilter = item;
            } else {
                const exists = state.filters[type].indexOf(item);
                if (exists !== -1) {
                    state.filters[type].splice(exists, 1);
                    if (type === "brand") {
                        state.countOfIndependentFilter -= 1;
                    }
                } else {
                    state.filters[type].push(item);
                    if (type === "brand") {
                        state.countOfIndependentFilter += 1;
                    }
                }
            }
        },
    },
});

const SelectedProduct = createSlice({
    name: "selectedProduct",
    initialState: {
        product: {},
    },
    reducers: {
        changeProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        navbarVisibility: navbarSlice.reducer,
        cartVisibility: shoppingCartSlice.reducer,
        cartProducts: cartProducts.reducer,
        filters: filter.reducer,
        selectedFilters: selectedFilters.reducer,
        selectedProduct: SelectedProduct.reducer,
    },
});

export default store;

export const navbarActions = navbarSlice.actions;
export const shoppingCartActions = shoppingCartSlice.actions;
export const cartProductsActions = cartProducts.actions;
export const filtersSelection = selectedFilters.actions;
export const productDetail = SelectedProduct.actions;
