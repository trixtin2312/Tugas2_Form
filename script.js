const tombol = document.getElementById('tombol')
const nama = document.getElementById('nama')
const nim = document.getElementById('nim')
const email = document.getElementById('email')
const telp = document.getElementById('telp')
const tgl = document.getElementById('tgl')
const pesan = document.getElementById('pesan')

tombol.addEventListener('click', (e) => {
    if (nama.value === '' || nama.value == null) {
        nama.style.border = '2px solid red';
        return false
    } else {
        nama.style.border = '1px solid black';
    };

    if (nim.value === '' || nim.value == null) {
        nim.style.border = '2px solid red';
        return false
    } else {
        nim.style.border = '1px solid black'; 
    };

    if (email.value === '' || email.value == null) {
        email.style.border = '2px solid red';
        return false
    } else {
        email.style.border = '1px solid black'; 
    };

    if (telp.value === '' || telp.value == null) {
        telp.style.border = '2px solid red';
        return false
    } else {
        telp.style.border = '1px solid black'; 
    };

    if (tgl.value === '' || tgl.value == null) {
        tgl.style.border = '2px solid red';
        return false
    } else {
        tgl.style.border = '1px solid black'; 
    };

    if (pesan.value === '' || pesan.value == null) {
        pesan.style.border = '2px solid red';
        return false
    } else {
        pesan.style.border = '1px solid black'; 
    };
}
)