const artistname = document.getElementById('artistname-disp');

const artists = [document.getElementById('artist-flowg'), document.getElementById('artist-kentu'), document.getElementById('artist-kingpinus'), document.getElementById('artist-ogalla'), document.getElementById('artist-linax'), document.getElementById('artist-lilmandres'), document.getElementById('artist-ornestra'), document.getElementById('artist-cozmoss')];


//Display Name
artists[0].addEventListener('mouseenter', () => {
    artistname.innerHTML = "FlowG";
});

artists[0].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[1].addEventListener('mouseenter', () => {
    artistname.innerHTML = "Kentu";
});

artists[1].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[2].addEventListener('mouseenter', () => {
    artistname.innerHTML = "KingPinus";
});

artists[2].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[3].addEventListener('mouseenter', () => {
    artistname.innerHTML = "Ogalla";
});

artists[3].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[4].addEventListener('mouseenter', () => {
    artistname.innerHTML = "Linax";
});

artists[4].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[5].addEventListener('mouseenter', () => {
    artistname.innerHTML = "LilMandres";
});

artists[5].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[6].addEventListener('mouseenter', () => {
    artistname.innerHTML = "Ornestra";
});

artists[6].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

artists[7].addEventListener('mouseenter', () => {
    artistname.innerHTML = "Cozmoss";
});

artists[7].addEventListener('mouseleave', () => {
    artistname.innerHTML = "";
});

//Redirect
artists[0].addEventListener('click', () => {
    window.location.href = "";
});

artists[1].addEventListener('click', () => {
    window.location.href = "";
});

artists[2].addEventListener('click', () => {
    window.location.href = "";
});

artists[3].addEventListener('click', () => {
    window.location.href = "";
});

artists[4].addEventListener('click', () => {
    window.location.href = "";
});

artists[5].addEventListener('click', () => {
    window.location.href = "";
});

artists[6].addEventListener('click', () => {
    window.location.href = "";
});

artists[7].addEventListener('click', () => {
    window.location.href = "";
});