   window.addEventListener("load", sidenVises);

   function sidenVises() {
   	console.log("siden vises");
   	$.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);

   }

   function visProduktListe(listen) {
   	console.table(listen);
   	listen.forEach(visProdukt);
   }

   function visProdukt(produkt) {
   	console.log(produkt);
   	// klomnmne templete
   	var klon = document.querySelector("#produkt_template").content.cloneNode(true);
   	// indsæt data i klon


   	klon.querySelector(".data_navn").innerHTML = produkt.navn;
   	klon.querySelector(".data_pris").innerHTML = produkt.pris;


   	var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
   	klon.querySelector(".data_rabatpris").innerHTML = rabatpris;
   	// Append klon til produkt-liste

   	klon.querySelector(".data_billede").src = "/imgs/small/" + produkt.billede + "-sm.jpg";



   	document.querySelector(".produktliste").appendChild(klon);

   }
