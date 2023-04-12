const xlsx = "C:\Users\Stefan\Desktop\TEST!\Phones.xlsx";
function getData() {
   const resp = fetch(xlsx);
   const respData = resp.document();
   console.log(respData);
   return respData;

}
getData();

const form = document.querySelector(".form");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("btn");
const sortPrice = document.getElementById("sort-by-price")

searchBtn.addEventListener("click", () => {
   if (searchInput === "galaxy s23") {

      searchBtn.classList.remove("galaxy-a-series");
      searchBtn.classList.remove("galaxy-a-series");
   } else if (searchInput === "galaxy a") {
      searchBtn.classList.remove("galaxy-s23-series");
      searchBtn.classList.remove("galaxy-z-series");
   } else {
      searchInput === "galaxy z";
      searchBtn.classList.remove("galaxy-s23-series");
      searchBtn.classList.remove("galaxy-a-series");
   }

});

/*sortPrice.addEventListener("select", () => {
   if(value==="High to low")
   

   else{

   }
});*/

const s23Lavender = document.getElementsByClassName(".color__sample--lavender");
const s23Cream = document.getElementsByClassName(".color__sample--cream");
const s23PhantomBlack = document.getElementsByClassName(".color__sample--PhantomBlack");
const s23Green = document.getElementsByClassName(".color__sample--green");
const buttonColor = color - picker.querySelector(".color__samples");
const spanColors = document.querySelectorAll(".color-value")


buttonColor.addEventListener("click", () => {
   if (s23Cream) {
      document.getElementById("C:\Users\Stefan\Desktop\TEST!\GalaxyS23_Cream.png")
      buttonColor.classList.add("active");
      spanColors.values(s23Cream);

   } else {

      // buttonColor.classList.add("active");
   }


});


const hiddenItems = document.querySelectorAll('.hidden');
const loadMore = document.getElementById('loadmore');
document.querySelectorAll('.cards-container:nth-child(-n+6)').forEach(
   elem => elem.classList.remove('hidden')
);
loadMore.addEventListener('click', function (e) {
   e.preventDefault();
   document.querySelectorAll('.cards-container:hidden:nth-child(-n+2)').forEach(
      elem => elem.classList.remove('hidden')
   )
   if (hiddenItems.length == 0) {
      loadMore.classList.add('hidden');
   }
});


const cardsContainer = document.querySelectorAll(".cards-container")
form.addEventListener("submit", (e) => {
   const searchTerm = search.value;
});


const sortByPriceSelect = document.getElementById('sort-by-price');
const flex = document.getElementById('flex');

sortByPriceSelect.addEventListener('change', () => {
   const selectedValue = sortByPriceSelect.value;
   const productsArray = Array.from(productList.children);

   if (selectedValue === 'low-to-high') {
      productsArray.sort((a, b) => {
         const priceA = parseFloat(a.dataset.price);
         const priceB = parseFloat(b.dataset.price);
         return priceA - priceB;
      });
   } else if (selectedValue === 'high-to-low') {
      productsArray.sort((a, b) => {
         const priceA = parseFloat(a.dataset.price);
         const priceB = parseFloat(b.dataset.price);
         return priceB - priceA;
      });
   }
   productList.innerHTML = '';
   productsArray.forEach((product) => {
      productList.appendChild(product);
   });
});


const path = 'C:\Users\Stefan\Desktop\TEST!\Phones.xlsx';
const workbook = fetch(path)
   .then((res) => res.arrayBuffer())
   .then((arrayBuffer) => XLSX.read(arrayBuffer, { type: 'array' }));
console.log(res);
const worksheet = workbook.Sheets['Sheet1'];
const data = XLSX.utils.sheet_to_json(worksheet);

const sortByCameraSelect = document.getElementById('sort-by-camera');
const productList = document.getElementById('product-list');
//sortByCameraSelect.addEventListener('change', () => {

const selectedValue = sortByCameraSelect.value;
const productsArray = Array.from(productList.children);
