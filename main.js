// fetch("https://restcountries.com/v3.1/all")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error("Error:", error));

const coutriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");

async function getCountry() {
	const url = await fetch("https://restcountries.com/v3.1/all");
	if (url.status === 200) {
		const res = await url.json();
		console.log(res);
		res.forEach(element => {
			showCountry(element);
		});
	}
}

getCountry();

async function showCountry(data) {
	const country = document.createElement("div");
	country.classList.add("country");
	country.innerHTML = `<div class="country-img">
				<img src="${data.flags['png']}" alt="${data.flags['alt']}">
			</div>
			<div class="country-info">
				<h5>${data.name['common']}</h5>
				<p><strong>Population:</strong> ${data.population}</p>
				<p><strong>Region:</strong> ${data.region}</p>
				<p><strong>Capital:</strong> ${data.capital}</p>
			</div>`;
	coutriesElem.appendChild(country);
}
dropDown.addEventListener("click", ()=> {
	dropElem.classList.toggle("showDropDown");
});

