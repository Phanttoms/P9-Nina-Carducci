const images = [
	{
		src: "./assets/images/gallery/concerts/aaron-paul.webp",
		alt: "Foule à un concert de nuit",
		category: "Concert",
		id: "1",
	},
	{
		src: "./assets/images/gallery/entreprise/ali-morshedlou.webp",
		alt: "Homme en costume regardant l'objectif",
		category: "Entreprises",
		id: "2",
	},
	{
		src: "./assets/images/gallery/entreprise/jason-goodman.webp",
		alt: "Deux femmes assisent rigolant",
		category: "Entreprises",
		id: "3",
	},
	{
		src: "./assets/images/gallery/mariage/hannah-busing.webp",
		alt: "Gros plan sur des mains",
		category: "Mariages",
		id: "4",
	},
	{
		src: "./assets/images/gallery/portraits/ade-tunji.webp",
		alt: "Portrait d'un homme fermant les yeux",
		category: "Portrait",
		id: "5",
	},
	{
		src: "./assets/images/gallery/mariage/jakob-owens.webp",
		alt: "Deux mariés marchant joyeusement",
		category: "Mariages",
		id: "6",
	},
	{
		src: "./assets/images/gallery/portraits/nino-van-prattenburg.webp",
		alt: "Portrait d'une femme regardant vers le bas",
		category: "Portrait",
		id: "7",
	},
	{
		src: "./assets/images/gallery/concerts/austin-neill.webp",
		alt: "Chanteur sur scene avec de la fumée",
		category: "Concert",
		id: "8",
	},
	{
		src: "./assets/images/gallery/entreprise/mateus-campos-felipe.webp",
		alt: "Femme joyeuse devant un ordinateur portable",
		category: "Entreprises",
		id: "9",
	},
];

const filters = [
	{
		name: "Tous",
		category: "Tous",
	},
	{
		name: "Concert",
		category: "Concert",
	},
	{
		name: "Entreprises",
		category: "Entreprises",
	},
	{
		name: "Mariages",
		category: "Mariages",
	},
	{
		name: "Portrait",
		category: "Portrait",
	},
];

// Récupération de la gallerie
const gallery = document.querySelector(".gallery");

// Sauvegarde des images actuel en fonction du filtre actif
let filteredImages = images;

// Creation des filtres
function createFilter(param) {
	const ulFilter = document.createElement("ul");
	ulFilter.classList.add("my-4-tags-bar", "nav", "nav-pills");

	param.forEach((element) => {
		ulFilter.innerHTML += `<li class="nav-item"><span class="nav-link active-tag" data-images-toggle="${element.category}">${element.name}</span></li>`;
	});

	gallery.appendChild(ulFilter);
}

createFilter(filters);

function activeFilter() {
	const navLink = document.querySelectorAll(".nav-link");

	document.addEventListener("DOMContentLoaded", function () {
		const defaultFilter = document.querySelector(
			'.nav-link[data-images-toggle="Tous"]'
		);
		defaultFilter.classList.add("active");
		defaultFilter.click();
	});

	navLink.forEach((element) => {
		element.addEventListener("click", () => {
			navLink.forEach((btn) => {
				btn.classList.remove("active");
			});
			element.classList.add("active");
		});
	});
}

activeFilter();

// Creation de la gallerie d'images et ecouteur d'evenement pour ouvertur de la modal
function createGallery(param) {
	const imgGallery = document.createElement("div");
	imgGallery.classList.add("gallery-items-row", "row");

	param.forEach((element) => {
		// Creation de la balise qui va contenir les images
		const itemColumn = document.createElement("div");
		itemColumn.classList.add(
			"item-column",
			"mb-4",
			"col-12",
			"col-sm-6",
			"col-md-4",
			"col-lg-4",
			"col-xl-4"
		);
		itemColumn.setAttribute("data-gallery-tag", element.category);

		// Creation de la balise image
		const image = document.createElement("img");
		image.classList.add(
			"gallery-item",
			"img-fluid",
			element.category,
			"modal-trigger"
		);
		image.setAttribute("data-gallery-tag", element.category);
		image.setAttribute("src", element.src);
		image.setAttribute("alt", element.alt);
		image.setAttribute("loading", "lazy");

		// Ajout d'un gestionnaire d'événement de clic à chaque image pour ouvrir la modal
		image.addEventListener("click", function () {
			const imageSrc = this.getAttribute("src");
			const imageAlt = this.getAttribute("alt");
			const imageCategory = this.getAttribute("data-gallery-tag");
			openModal(imageSrc, imageAlt, imageCategory);
		});

		itemColumn.appendChild(image);
		imgGallery.appendChild(itemColumn);
	});

	gallery.appendChild(imgGallery);
}

createGallery(images);

// Affichage des images par rapport au filtre
function showFilter(a, b) {
	b.forEach(function (item) {
		if (a === "Tous" || item.getAttribute("data-gallery-tag").includes(a)) {
			item.style.display = "block";
			item.classList.add("fade-in");
		} else {
			item.style.display = "none";
		}
	});
}

function useFilter() {
	const filtre = document.querySelectorAll(".nav-link");

	filtre.forEach((element) => {
		const idFilter = element.getAttribute("data-images-toggle");
		element.addEventListener("click", () => {
			// Réinitialiser l'index currentImageIndex lorsque vous changez de catégorie
			currentImageIndex = 0;

			// Supprimer les images actuelles de la galerie
			const imgGallery = document.querySelector(".gallery-items-row");
			imgGallery.parentNode.removeChild(imgGallery);

			// Récupérer les images correspondant au filtre sélectionné
			filteredImages = images.filter(
				(img) => img.category === idFilter || idFilter === "Tous"
			);

			// Recréer la galerie avec les images filtrées
			createGallery(filteredImages);

			// Appliquer les effets de filtre sur les nouvelles images
			const imgfilter = document.querySelectorAll(".gallery-item");
			const imgBox = document.querySelectorAll(".item-column");
			showFilter(idFilter, imgfilter);
			showFilter(idFilter, imgBox);
		});
	});
}

useFilter();

// Fonction pour créer la modal
let currentImageIndex = 0;
let currentCategory = "";

function openModal(imageSrc, imageAlt, imageCategory) {
	const customModal = document.querySelector(".custom-modal");
	const customModalContainer = document.querySelector(
		".custom-modal-container"
	);
	const body = document.querySelector("body");
	body.classList.add("modal-open");

	setTimeout(() => {
		customModalContainer.classList.add("active");
	}, 50); // Délai de 50 millisecondes avant d'ajouter la classe "active"
	const modalBox = document.createElement("div");
	modalBox.classList.add("custom-modal-content");
	modalBox.innerHTML = `
                <div class="modal-body">
                    <span class="arrowModal arrowModalLeft"><</span>
                    <img class="imgModal" src="${imageSrc}" alt="${imageAlt}" data-gallery-tag="${imageCategory}">
					<span class="arrowModal arrowModalRight">></span>
                </div>
			`;
	customModal.appendChild(modalBox);

	const modal = document.querySelector(".overlayModal");
	modal.addEventListener("click", closeModal);

	// Gestionnaire d'événement pour passer à l'image précédente
	const arrowLeft = document.querySelector(".arrowModalLeft");
	arrowLeft.addEventListener("click", showPreviousImage);

	// Gestionnaire d'événement pour passer à l'image suivante
	const arrowRight = document.querySelector(".arrowModalRight");
	arrowRight.addEventListener("click", showNextImage);

	// Mise à jour des informations sur l'image actuelle
	currentCategory = imageCategory;
	currentImageIndex = findImageIndex(imageSrc, imageCategory);
}

// Fonction pour trouver l'index d'une image dans le tableau images
function findImageIndex(imageSrc, imageCategory) {
	return filteredImages.findIndex(
		(image) => image.src === imageSrc && image.category === imageCategory
	);
}

// Fonction pour afficher l'image précédente dans la modal
function showPreviousImage() {
	currentImageIndex =
		(currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
	updateModalImage();
}

// Fonction pour afficher l'image suivante dans la modal
function showNextImage() {
	currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
	updateModalImage();
}

// Fonction pour mettre à jour l'image affichée dans la modal
function updateModalImage() {
	const currentImage = document.querySelector(".imgModal");
	currentImage.src = filteredImages[currentImageIndex].src;
	currentImage.alt = filteredImages[currentImageIndex].alt;
	currentImage.setAttribute(
		"data-gallery-tag",
		filteredImages[currentImageIndex].category
	);
}

// Fonction pour fermer la modal
function closeModal() {
	const cleanModal = document.querySelector(".custom-modal-content");
	const disableModal = document.querySelector(".custom-modal-container");
	const body = document.querySelector("body");

	body.classList.remove("modal-open");

	disableModal.classList.remove("active");
	cleanModal.parentNode.removeChild(cleanModal);
}
