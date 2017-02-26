window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("siden vises");
	// læs produktliste
	$.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?",
		visProduktListe);
}

function visProduktListe(listen) {
	console.table(listen);
	listen.forEach(visProdukt);
}

function visProdukt(produkt) {

	...

	if(produkt.vegetar == true) {
		klon.querySelector(".produkt").classList.add("vegetar");
	}

	// tilføj produkt-id til modalknap
	klon.querySelector(".modalknap").dataset.produkt = produkt.id;

	// registrer klik på modalknap
	klon.querySelector(".modalknap").addEventListener("click", modalKnapKlik)
		// append klon til .produkt_liste
	document.querySelector(".produktliste").appendChild(klon);
}

function modalKnapKlik(event) {
	console.log("knapklik", event);

	// find det produkt id, hvis knap der blev trykket på
	var produktId = event.target.dataset.produkt;
	console.log("Klik på produkt: ", produktId);

	$.getJSON("http://petlatkea.dk/2017/dui/api/product?callback=?", {
		id: produktId
	}, visModalProdukt);
}

function visModalProdukt(produkt) {
	console.log("vis modal for ", produkt);

	// find modal_template - klon den
	var klon =
		document.querySelector("#modal_template").content.cloneNode(true);

	// put data i klonen
	klon.querySelector(".data_navn").innerHTML = produkt.navn;

	// sletter det der stod i modal-content
	document.querySelector(".modal-content").innerHTML = "";

	// append klonen til modal-content
	document.querySelector(".modal-content").appendChild(klon);
}


/*
json filtrering.

Jeg har en jason fil - med produkt informationer

	1. Jeg skal lave et template
2. Det skal vise et vise et produkt
3. Templated skal klones til alle mine andre produkter
Der skal bruges et modal, produkttemplate og så alle produkter

Filrere produkt efter status -
	Filtere udsolgte produkter vegetarretter os.
Data skal hentes fra en database i json format.*/

//Her fjerner vi udsolgte produkter



function visProduktListe(listen) {
	console.table(listen;)
}

listen = listen.filter(fjernUdsolgt);

listen.forEach(visProdukt);


Function FjernUdsolgte(produkt) {
	return !produkt.udsolgt;
}

Kan også skrives sådan her:


	function visProduktListe(listen) {
		console.table(listen;)

		listen = listen.filter(function (produkt) {
			return !produkt.udsolgt;
		});

		listen forEach(visProdukt);
	}
)



function visProduktListe(listen) {
	console.table(listen;)

//	Den her linje fjerner alle udsolgte produkter

listen = listen.filter(produkt => !produkt.udsolgt);

	listen.forEach(visProdukt);

}

CSS selecter - grim tilbudsmarkering

.produkt.tilbud {
	background-color: greenyellow;

}

produkt.vegetar {
	background-color: red
}

// jeg klikker på en knap.

document.querySelector("filterknap:vegetar") addEventListener("click), filterVegetar);

//Find alle ikke vegerat produkter

function filterVegetar (event ) {
console.log("klik på vegetar-filter");

//skjul dem - tilføj klassen hide

	var liste = document.querySelectorAll("produkt:not(vegetar)");

}




