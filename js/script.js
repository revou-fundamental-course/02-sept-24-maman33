// fungsi untuk menampilkan luas dan keliling jajar genjang
function tryDom() {
  let getDOM = document.getElementById("jajar-genjang-btn");
  getDOM.style.backgroundColor = "red";
  console.log(getDOM);

  let getDOM2 = document.getElementById("segitiga-btn");
  getDOM2.style.backgroundColor = "bisque";
  console.log(getDOM2);

  let segitiga = document.getElementsByClassName("segitiga");
  let jajargenjang = document.getElementsByClassName("jajar-genjang");
  segitiga[0].style.display = "none";
  jajargenjang[0].style.display = "inline";
}

// fungsi untuk menampilkan luas dan keliling segitiga
function tryDom2() {
  let getDOM = document.getElementById("jajar-genjang-btn");
  getDOM.style.backgroundColor = "white";
  console.log(getDOM);

  let getDOM2 = document.getElementById("segitiga-btn");
  getDOM2.style.backgroundColor = "red";
  console.log(getDOM2);

  let segitiga = document.getElementsByClassName("segitiga");
  let jajargenjang = document.getElementsByClassName("jajar-genjang");
  segitiga[0].style.display = "inline";
  jajargenjang[0].style.display = "none";
}

// fungsi untuk validasi data input untuk luas segitiga
function validateLuasSegitiga() {
  let panjangSegitiga = document.getElementById("panjang-alas-segitiga").value;
  let tinggiSegitiga = document.getElementById("tinggi-segitiga").value;

  if (panjangSegitiga == "" || tinggiSegitiga == "") {
    alert("Form masih kosong");
  } else {
    console.log(panjangSegitiga);
    console.log(tinggiSegitiga);

    let luasSegitiga = 0.5 * panjangSegitiga * tinggiSegitiga;

    document.getElementById("result-luas-segitiga").innerHTML =
      "Hasil Perhitungan: " + luasSegitiga;
  }
}

// fungsi untuk validasi data input untuk keliling segitiga
function validateKelilingSegitiga() {
  let s1 = document.getElementById("sisi-pertama-segitiga").value;
  let s2 = document.getElementById("sisi-kedua-segitiga").value;
  let s3 = document.getElementById("sisi-ketiga-segitiga").value;

  if (s1 == "" || s2 == "" || s3 == "") {
    alert("Form masih kosong");
  } else {
    console.log(s1);
    console.log(s2);
    console.log(s3);

    let kelilingSegitiga = parseInt(s1) + parseInt(s2) + parseInt(s3);

    document.getElementById("result-keliling-segitiga").innerHTML =
      "Hasil Perhitungan: " + kelilingSegitiga;
  }
}

// fungsi untuk validasi data input untuk luas jajar genjang
function validateLuasJajarGenjang() {
  let alasJajarGenjang = document.getElementById(
    "panjang-alas-jajar-genjang"
  ).value;
  let tinggiJajarGenjang = document.getElementById(
    "tinggi-jajar-genjang"
  ).value;

  if (alasJajarGenjang == "" || tinggiJajarGenjang == "") {
    alert("Form masih kosong");
  } else {
    console.log(alasJajarGenjang);
    console.log(tinggiJajarGenjang);

    let luasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;

    document.getElementById("result-luas-jajar-genjang").innerHTML =
      "Hasil Perhitungan: " + luasJajarGenjang;
  }
}

// fungsi untuk validasi data input untuk keliling jajar genjang
function validateKelilingJajarGenjang() {
  let s1 = document.getElementById("sisi-pertama-jajar-genjang").value;
  let s2 = document.getElementById("sisi-kedua-jajar-genjang").value;
  let s3 = document.getElementById("sisi-ketiga-jajar-genjang").value;
  let s4 = document.getElementById("sisi-keempat-jajar-genjang").value;

  if (s1 == "" || s2 == "" || s3 == "" || s4 == "") {
    alert("Form masih kosong");
  } else {
    console.log(s1);
    console.log(s2);
    console.log(s3);
    console.log(s4);

    let kelilingJajarGenjang =
      parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4);

    document.getElementById("result-keliling-jajar-genjang").innerHTML =
      "Hasil Perhitungan: " + kelilingJajarGenjang;
  }
}

// fungsi untuk reset data input luas segitiga
function resetLuasSegitiga() {
  let panjangAlasSegitiga = document.getElementById("panjang-alas-segitiga");
  let tinggiSegitiga = document.getElementById("tinggi-segitiga");

  panjangAlasSegitiga.value = "";
  tinggiSegitiga.value = "";
  document.getElementById("result-luas-segitiga").innerHTML =
    "Hasil Perhitungan ";
}

// fungsi untuk reset data input keliling segitiga
function resetKelilingSegitiga() {
  let sisiPertamaSegitiga = document.getElementById("sisi-pertama-segitiga");
  let sisiKeduaSegitiga = document.getElementById("sisi-kedua-segitiga");
  let sisiKetigaSegitiga = document.getElementById("sisi-ketiga-segitiga");

  sisiPertamaSegitiga.value = "";
  sisiKeduaSegitiga.value = "";
  sisiKetigaSegitiga.value = "";
  document.getElementById("result-keliling-segitiga").innerHTML =
    "Hasil Perhitungan: ";
}

// fungsi untuk reset data input luas jajar genjang
function resetLuasJajarGenjang() {
  let panjangAlasJajarGenjang = document.getElementById(
    "panjang-alas-jajar-genjang"
  );
  let tinggiJajarGenjang = document.getElementById("tinggi-jajar-genjang");

  panjangAlasJajarGenjang.value = "";
  tinggiJajarGenjang.value = "";
  document.getElementById("result-luas-jajar-genjang").innerHTML =
    "Hasil Perhitungan ";
}

// fungsi untuk reset data keliling jajar genjang
function resetKelilingJajarGenjang() {
  let sisiPertamaJajarGenjang = document.getElementById(
    "sisi-pertama-jajar-genjang"
  );
  let sisiKeduaJajarGenjang = document.getElementById(
    "sisi-kedua-jajar-genjang"
  );
  let sisiKetigaJajarGenjang = document.getElementById(
    "sisi-ketiga-jajar-genjang"
  );
  let sisiKeempatJajarGenjang = document.getElementById(
    "sisi-keempat-jajar-genjang"
  );

  sisiPertamaJajarGenjang.value = "";
  sisiKeduaJajarGenjang.value = "";
  sisiKetigaJajarGenjang.value = "";
  sisiKeempatJajarGenjang.value = "";
  document.getElementById("result-keliling-jajar-genjang").innerHTML =
    "Hasil Perhitungan: ";
}
