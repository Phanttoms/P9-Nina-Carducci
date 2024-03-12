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
	boxFilter.classList.add("my-4", "tags-bar", "nav", "nav-pills");

	for (let i = 0; i < filterCategorie.length; i++) {
		const elementLi = document.createElement("li");
		elementLi.classList.add("nav-item", "active");

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

function showFilter(a, b) {
	b.forEach(function (item) {
		if (a === "Tous" || item.classList.contains(a)) {
			item.style.display = "block";
			item.classList.add("fade-in");
		} else {
			item.style.display = "none";
		}
	});
}

function buttonFilter() {
	const filter = document.querySelectorAll(".nav-link");

	document.addEventListener("DOMContentLoaded", function () {
		const allFilter = document.querySelector('.nav-link[id="Tous"]');
		allFilter.classList.add("active-tag", "active");
		allFilter.click();
	});

	filter.forEach(function (element) {
		const idFilter = element.getAttribute("id");
		element.addEventListener("click", function () {
			filter.forEach(function (btn) {
				btn.classList.remove("active-tag", "active");
			});
			element.classList.add("active-tag", "active");

			const gallerieItems = document.querySelectorAll(".gallery-item");
			const divImg = document.querySelectorAll(".item-column");
			showFilter(idFilter, gallerieItems);
			showFilter(idFilter, divImg);
		});
	});
	galleryContent();
}

buttonFilter();

// Fonction pour afficher la gallerie
function galleryContent() {
	const boxGallery = document.createElement("div");
	boxGallery.classList.add("gallery-items-row", "row");

	images.forEach(function (img) {
		const boxImg = document.createElement("div");
		boxImg.classList.add(
			"item-column",
			"mb-4",
			"col-12",
			"col-sm-6",
			"col-md-4",
			"col-lg-4",
			"col-xl-4",
			img.categorie
		);
		boxImg.style.display = "none";

		const contentImg = document.createElement("img");
		contentImg.classList.add("gallery-item", "img-fluid", img.categorie);
		contentImg.style.display = "none";
		contentImg.src = img.src;

		boxImg.appendChild(contentImg);
		boxGallery.appendChild(boxImg);
	});

	gallery.appendChild(boxGallery);
}

// galleryContent();

// Fonction Modal
// const gallerieItems = document.querySelectorAll(".gallery-item");
// gallerieItems.forEach(function (item) {
// 	item.addEventListener("click", function () {
// 		openModal();
// 	});
// });

// function openModal() {
// 	modal();
// }

// function closeModal() {

// }

// function modal(imageUrl) {
// 	const lightBox = document.createElement("div");
// 	lightBox.classList.add("modal", "fade", "show");

// 	const modalDialog = document.createElement("div");
// 	modalDialog.classList.add("modal-dialog");
// 	lightBox.appendChild(modalDialog);

// 	const modalContent = document.createElement("div");
// 	modalContent.classList.add("modal-content");
// 	modalDialog.appendChild(modalContent);

// 	const modalBody = document.createElement("div");
// 	modalBody.classList.add("modal-body");
// 	modalContent.appendChild(modalBody);

// 	const prevButton = document.createElement("div");
// 	prevButton.textContent = "<";
// 	prevButton.classList.add("mg-prev");
// 	modalBody.appendChild(prevButton);

// 	const imgModal = document.createElement("img");
// 	imgModal.setAttribute("src", imageUrl);
// 	imgModal.classList.add("lightboxImage", "img-fluid");
// 	modalBody.appendChild(imgModal);

// 	const nextButton = document.createElement("div");
// 	nextButton.textContent = ">";
// 	nextButton.classList.add("mg-prev");
// 	modalBody.appendChild(nextButton);

// 	gallery.appendChild(lightBox);
// }
