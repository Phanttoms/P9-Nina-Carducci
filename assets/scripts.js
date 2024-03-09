const images = [
	{
		src: "./assets/images/gallery/concerts/aaron-paul.webp",
		alt: "Foule à un concert de nuit",
		categorie: "Concert",
		id: "1",
	},
	{
		src: "./assets/images/gallery/entreprise/ali-morshedlou.webp",
		alt: "Homme en costume regardant l'objectif",
		categorie: "Entreprises",
		id: "2",
	},
	{
		src: "./assets/images/gallery/entreprise/jason-goodman.webp",
		alt: "Deux femmes assisent rigolant",
		categorie: "Entreprises",
		id: "3",
	},
	{
		src: "./assets/images/gallery/mariage/hannah-busing.webp",
		alt: "Gros plan sur des mains",
		categorie: "Mariages",
		id: "4",
	},
	{
		src: "./assets/images/gallery/portraits/ade-tunji.webp",
		alt: "Portrait d'un homme fermant les yeux",
		categorie: "Portrait",
		id: "5",
	},
	{
		src: "./assets/images/gallery/mariage/jakob-owens.webp",
		alt: "Deux mariés marchant joyeusement",
		categorie: "Mariages",
		id: "6",
	},
	{
		src: "./assets/images/gallery/portraits/nino-van-prattenburg.webp",
		alt: "Portrait d'une femme regardant vers le bas",
		categorie: "Portrait",
		id: "7",
	},
	{
		src: "./assets/images/gallery/concerts/austin-neill.webp",
		alt: "Chanteur sur scene avec de la fumée",
		categorie: "Concert",
		id: "8",
	},
	{
		src: "./assets/images/gallery/entreprise/mateus-campos-felipe.webp",
		alt: "Femme joyeuse devant un ordinateur portable",
		categorie: "Entreprises",
		id: "9",
	},
];

const gallery = document.querySelector(".gallery");

// Barre contenant les filtre Tous, Concert, Entreprise, Mariages, Portrait
function navFilter() {
	const filterCategorie = [
		"Tous",
		"Concert",
		"Entreprises",
		"Mariages",
		"Portrait",
	];
	const boxFilter = document.createElement("ul");
	boxFilter.classList.add("my-4");
	boxFilter.classList.add("tags-bar");
	boxFilter.classList.add("nav");
	boxFilter.classList.add("nav-pills");

	for (let i = 0; i < filterCategorie.length; i++) {
		const elementLi = document.createElement("li");
		elementLi.classList.add("nav-item");
		elementLi.classList.add("active");

		const elementSpan = document.createElement("span");
		elementSpan.id = filterCategorie[i];
		elementSpan.textContent = filterCategorie[i];
		elementSpan.classList.add("nav-link");

		elementLi.appendChild(elementSpan);
		boxFilter.appendChild(elementLi);
	}

	gallery.appendChild(boxFilter);
}

navFilter();

const filter = document.querySelectorAll(".nav-link");

filter.forEach(function (element) {
	element.addEventListener("click", function () {
		const ifFilter = element.getAttribute("id");
		filter.forEach(function (btn) {
			btn.classList.remove("active-tag");
			btn.classList.remove("active");
		});

		element.classList.add("active-tag");
		element.classList.add("active");

		const gallerieItems = document.querySelectorAll(".gallery-item");
		gallerieItems.forEach(function (item) {
			if (ifFilter === "Tous" || item.classList.contains(ifFilter)) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		});
	});
});

// Fonction pour afficher la gallerie
function galleryContent() {
	const boxGallery = document.createElement("div");
	boxGallery.classList.add("gallery-items-row");
	boxGallery.classList.add("row");

	images.forEach(function (img) {
		const boxImg = document.createElement("div");
		boxImg.classList.add("item-column");
		boxImg.classList.add("mb-4");
		boxImg.classList.add("col-12");
		boxImg.classList.add("col-sm-6");
		boxImg.classList.add("col-md-4");
		boxImg.classList.add("col-lg-4");
		boxImg.classList.add("col-xl-4");

		const contentImg = document.createElement("img");
		contentImg.classList.add("gallery-item");
		contentImg.classList.add("img-fluid");
		contentImg.classList.add(img.categorie);
		contentImg.style.display = "none";
		contentImg.src = img.src;

		boxImg.appendChild(contentImg);
		boxGallery.appendChild(boxImg);
	});

	gallery.appendChild(boxGallery);
}

galleryContent();
