//Get URL Params
const searchQuery = window.location.search;
const URLParams = new URLSearchParams(searchQuery);
const artistparam = URLParams.get('artist');

//Get Artist Names
const artistnames = [flowg.name, kentu.name, kingpinus.name, ogalla.name, linax.name, lilmandres.name, ornestra.name, cozmoss.name];

//Page Elements
const aname_disp = document.getElementById('artistname-displaytext');
const img_disp = document.getElementById('image-display');

//Check if URLParam is correct!
if(artistparam === artistnames[0]) {
    document.title = artistnames[0] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[0];
} else if(artistparam === artistnames[1]) {
    document.title = artistnames[1] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[1];
} else if(artistparam === artistnames[2]) {
    document.title = artistnames[2] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[2];
} else if(artistparam === artistnames[3]) {
    document.title = artistnames[3] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[3];
} else if(artistparam === artistnames[4]) {
    document.title = artistnames[4] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[4];
} else if(artistparam === artistnames[5]) {
    document.title = artistnames[5] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[5];
} else if(artistparam === artistnames[6]) {
    document.title = artistnames[6] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[6];
    img_disp.src = ornestra["galery-links"][0];
} else if(artistparam === artistnames[7]) {
    document.title = artistnames[7] + " || Artistas ALKRecords";
    aname_disp.innerText = artistnames[7];
    img_disp.src = cozmoss["galery-links"][0];
}
