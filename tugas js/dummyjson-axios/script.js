let tampil = document.querySelector('#tampil');
let order = document.querySelector('#order');
let no = 1;

// Alert


// Data Product
function allpro() {
    axios.get("https://dummyjson.com/products").then(function (response) {
        let produk = response.data.products;
        let out = '<h2 class="text-center">DATA PRODUK</h2><table class="table table-striped"><thead><tr><th>ID</th><th>Produk</th><th>Deskripsi</th><th>Update</th><th>Delete</th><th>Cart</th></tr></thead><tbody>';
        produk.forEach(element => {
            out += `<tr>
                        <td>${element.id}</td>
                        <td>${element.title}</td>
                        <td>${element.description}</td>
                        <td><button type="button" class="btn btn-warning" onclick="showpro(${element.id})" data-bs-toggle="modal" data-bs-target="#exampleModal3">Updt</button></td>
                        <td><button type="button" class="btn btn-danger" onclick="delpro(${element.id})" >Dell</button></td>
                        <td>
                            <button type="button" class="btn btn-primary" onclick="cartpro(${element.id})" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>`
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Data Product Via ID
function idpro() {
    // console.log('sapi');
    let idprod = document.getElementById("idprd").value;
    axios.get("https://dummyjson.com/products/" + idprod).then(function (response) {
        let produk = response.data;
        let out = '<h2 class="text-center text-uppercase">Data Produk Via ID</h2><table class="table table-striped"><thead><tr><th>ID</th><th>Produk</th><th>Deskripsi</th></tr></thead><tbody>';
        out += `<tr>
                    <td>${produk.id}</td>
                    <td>${produk.title}</td>
                    <td>${produk.description}</td>
                </tr>`;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Data Product Via Kategori
function catepro() {
    // console.log('hai');
    let cateprod = document.getElementById("cateprd").value;
    axios.get("https://dummyjson.com/products/category/" + cateprod).then(function (response) {
        let produk = response.data.products;
        let out = `<h2 class="text-center text-uppercase">Data Produk ${cateprod}</h2><table class="table table-striped"><thead><tr><th>ID</th><th>Produk</th><th>Deskripsi</th></tr></thead><tbody>`;
        produk.forEach(element => {
            out += `<tr>
                        <td>${element.id}</td>
                        <td>${element.title}</td>
                        <td>${element.description}</td>
                    </tr>`
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Add data Product
function addpro() {
    let data = {
        produk: document.getElementById("produk").value,
        deskripsi: document.getElementById("deskripsi").value,
        kategori: document.getElementById("selected").value
    }
    axios.post("https://dummyjson.com/products/add",JSON.stringify(data)).then(function (response) {
        console.log(data);
    })
}

// Show Update
function showpro(idproduk) {
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        document.getElementById("idd").value = response.data.id;
        document.getElementById("produkk").value = response.data.title;
        document.getElementById("deskripsii").value = response.data.description;
    })
}

// Update Product
function updtpro() {
    let idprod = document.getElementById("idd").value;
    let data = {
        id: document.getElementById("idd").value,
        produk: document.getElementById("produkk").value,
        deskripsi: document.getElementById("deskripsii").value
    }
    axios.put("https://dummyjson.com/products/" + idprod).then(function (response) {
        console.log(data);
    })
}

// Delete Product
function delpro(idproduk) {
    let data = {
        id: idproduk
    };
    axios.delete("https://dummyjson.com/products/" + idproduk, JSON.stringify(data)).then(function (response) {
        alert("Apakah anda yakin ingin menghapus data ini ?")
        console.log("ID " + idproduk + " Sudah dihapus");
    })
}

//----------------------------------------------- PELANGGAN --------------------------------------------- //

// Data Pelanggan
function allpel() {
    axios.get("http://localhost/dummyjson-axios/php/select.php").then(function (response) {
        let pelanggan = response.data;

        let out = '<h2 class="text-center">DATA PELANGGAN</h2><table class="table table-striped"><thead><tr><th>No</th><th>Nama</th><th>Alamat</th><th>Telp</th><th>Update</th><th>Delete</th><th>Cart</th></tr></thead><tbody>';
        pelanggan.forEach(element => {
            out += `<tr>
                        <td>${no++}</td>
                        <td>${element.pelanggan}</td>
                        <td>${element.alamat}</td>
                        <td>${element.telp}</td>
                        <td><button type="button" class="btn btn-warning" onclick="showpel(${element.idpelanggan})" data-bs-toggle="modal" data-bs-target="#exampleModal5">Updt</button></td>
                        <td><button type="button" class="btn btn-danger" onclick="delpel(${element.idpelanggan})">Dell</button></td>
                        <td>
                            <button type="button" class="btn btn-primary" onclick="cartpel(${element.idpelanggan})" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>`;
        });
        out += '</tbody></table>';
        // console.log(response.data);
        tampil.innerHTML = out;
    })
}

// Add Pelanggan
function addpel() {
    let data = {
        pelanggan: document.getElementById("nama").value,
        alamat: document.getElementById("alamat").value,
        telp: document.getElementById("telp").value
    }
    axios.post("http://localhost/dummyjson-axios/php/insert.php",JSON.stringify(data)).then(function (response) {
        // alert(response.data);
        swal("Succes !", "Data sudah disimpan", "success");
        allpel();
    })
}

// Show Update Pelanggan
function showpel(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    }
    axios.post("http://localhost/dummyjson-axios/php/selectupdate.php",JSON.stringify(data)).then(function (response) {
        document.getElementById("idpel").value = response.data.idpelanggan;
        document.getElementById("namapel").value = response.data.pelanggan;
        document.getElementById("alamatpel").value = response.data.alamat;
        document.getElementById("telppel").value = response.data.telp;
    })
}

// Update Pelanggan
function updtpel() {
    let dataPel = {
        idpelanggan: document.getElementById("idpel").value,
        pelanggan: document.getElementById("namapel").value,
        alamat: document.getElementById("alamatpel").value,
        telp: document.getElementById("telppel").value
    }
    axios.post("http://localhost/dummyjson-axios/php/update.php",JSON.stringify(dataPel)).then(function (response) {
        // alert(response.data);
        swal("Succes !", "Data sudah diubah", "success");
        allpel();
    })
}

// Delete Pelaggan
function delpel(idpel) {
    let data = {
        idpelanggan: idpel
    }
    axios.post("http://localhost/dummyjson-axios/php/delete.php",JSON.stringify(data)).then(function (response) {
        // alert(response.data);
        swal({
            title: "Succes",
            text: "Data telah dihapus",
            icon: "warning",
            dangerMode: true,
        });
        allpel();
    })
}


//----------------------------------------------- CART --------------------------------------------- //

// Cart Produk
function cartpro(idproduk) {
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        let produk = response.data;
        let out = '<table class="table table-striped"><thead><tr><th scope="col">ID</th><th scope="col">Nama Pemesan</th><th scope="col">Product</th><th scope="col">Harga</th><th scope="col">Jumlah</th></tr></thead><tbody>';
            out += `<h3 class="text-center text-uppercase">Rincian Order :</h3>
                <tr>
                    <th scope="row">${produk.id}</th>
                    <td id="namapemesan"></td>
                    <td>${produk.title}</td>
                    <td>£`+`${produk.price}</td>
                    <td><div>
                            <input type="number" class="form-control" style="width: 4rem" id="jumlah">
                        </div>
                    </td>
                    <td><button type="button" class="btn btn-primary" onclick="orderr('${produk.id}','${produk.price}','${produk.title}')">Order</button></td>
                </tr>`;
        out += '</tbody></table>';
        // console.log(out);
        order.innerHTML = out;
    })
}

// Cart Pelanggan
var idpel = "";
var namapel = "";
var alamat = "";
function cartpel(idpelanggan) {
    let namapemesan = document.getElementById("namapemesan");
    axios.get("http://localhost/dummyjson-axios/php/selectwhere.php/?id=" + idpelanggan).then(function (response) {
        console.log(response)
        let pel = response.data;
        let out = pel.pelanggan;
        namapemesan.innerHTML = out;

        idpel = pel.idpelanggan;
        namapel = pel.pelanggan;        
        alamat = pel.alamat;
    })
}

// Order
function orderr(idbarang, harga, barang) {
    let idorder = 1;
    let jumlah = document.querySelector("#jumlah").value;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idpel,
        pelanggan: namapel,
        alamat: alamat
    }
    console.log(data);
    axios.post("http://localhost/dummyjson-axios/php/addtocart.php",JSON.stringify(data)).then(function (response) {
        alert("Order Berhasil !");
        window.location.href="http://localhost/dummyjson-axios/index.html";
    })
}