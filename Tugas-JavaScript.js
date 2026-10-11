
// TUGAS JAVASCRIPT
// Case 1: User Data Cleaner
// Case 2: E-Commerce Product Filter


// CASE 1: USER DATA CLEANER

const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedString = rawNames.trim();

const namesArray = cleanedString.split(",");

const formattedNames = namesArray.map((name) => {
    return name.trim().toLowerCase();
});

const finalNames = formattedNames.join(" | ");

console.log("========== CASE 1: USER DATA CLEANER ==========");
console.log("String awal:", rawNames);
console.log("Array nama:", formattedNames);
console.log("Hasil akhir:", finalNames);


// CASE 2: E-COMMERCE PRODUCT FILTER

const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

const activeProducts = products.filter((product) => {
    return product.active === true;
});

const activeProductNames = activeProducts.map((product) => {
    return product.name.toUpperCase();
});

const totalPrice = activeProducts.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("\n========== CASE 2: E-COMMERCE PRODUCT FILTER ==========");
console.log("Semua produk:", products);
console.log("Produk aktif:", activeProducts);
console.log("Nama produk kapital:", activeProductNames);
console.log("Total harga produk aktif:", totalPrice);
