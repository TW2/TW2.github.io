function getNavigatorLanguage() {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
    }else{
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
}

function isFrench() {
    return getNavigatorLanguage() == 'fr';
}

function populateAdvice() {
    if(isFrench()) {
        var frAdvice = "Le but de cette page est de décrire le fonctionnement des projets opensource que je code "
                + "pour moi-même et tous.<br />Vous pouvez visiter le blog ou le canal Discord (en parlant Anglais ou "
                + "Français). Pour ceux qui ne connaissent pas Discord, c'est un logiciel et solution cloud qui "
                + "permet de discuter avec d'autres membres enregistrés ou non. Vous pouvez passer discuter et "
                + "contribuer à des projets. Vous pouvez copier, forké et partager."
        document.getElementById("advice").innerHTML = frAdvice;
    }else{
        var enAdvise = "This page goal is to describe opensource software I code for myself and people.<br />"
                + "You can visit the blog and the Discord channel (speak in English or French). "
                + "For those who can't knows Discord, it's just a cloud and softs which permits "
                + "the chat with others registered or unregistered users. You can visit it to say me "
                + "Hello or to contribute to code with me. You can copy, fork and share. Enjoy!";
        document.getElementById("advice").innerHTML = enAdvise;
    }
}

// fren - Language
function populateFrEn() {
    var txtFrEn;
    if(isFrench()) {
        txtFrEn = '<div id="fren">Ce site est en Français comme stipulé dans votre navigateur.</div>';
    }else{
        txtFrEn = '<div id="fren">This site is in English because French is unavailable.</div>';
    }
    document.getElementById("fren").innerHTML = txtFrEn;
}

// cmlk - Caramel Milkshake (cmilkshake)
function populateCmlk() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">Caramel Milkshake (cmilkshake)</span><br />'
                + '<span class="project-desc">Logiciel de comparaison de sous-titres.</span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="images/cmlk.png" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">Caramel Milkshake (cmilkshake)</span><br />'
                + '<span class="project-desc">Subtitles comparison software.</span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="images/cmlk.png" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("cmlk").innerHTML = txt;
}

// cnmp - CNM Player
function populateCnmp() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">CNM Player</span><br />'
                + '<span class="project-desc">Ce logiciel sert à lire des comics et mangas au format CNM.</span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="images/cnmp.png" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">CNM Player</span><br />'
                + '<span class="project-desc">This software permits reading in CNM format.</span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="images/cnmp.png" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("cnmp").innerHTML = txt;
}

// cnms - CNM Studio
function populateCnms() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">CNM Studio</span><br />'
                + '<span class="project-desc">Le Studio CNM crée des fichiers CNM pour comics et mangas multilingues.</span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="images/cnms.png" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name">CNM Studio</span><br />'
                + '<span class="project-desc">CNM Studio create CNM files for multilingual comics and mangas.</span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="images/cnms.png" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("cnms").innerHTML = txt;
}

// cool - CoolTable
function populateCool() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("cool").innerHTML = txt;
}

// csass - CSASS
function populateCSASS() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("csass").innerHTML = txt;
}

// leaf - Feuille
function populateLeaf() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("leaf").innerHTML = txt;
}

// kara - Karaoke Utilities
function populateKara() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("kara").innerHTML = txt;
}

// kgms - KGM Swing
function populateKgms() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("kgms").innerHTML = txt;
}

// kuro - KuroShiro
function populateKuro() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("kuro").innerHTML = txt;
}

// mtdb - Mirage-Team Database
function populateMtdb() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("mtdb").innerHTML = txt;
}

// pac - Points and Curves
function populatePac() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("pac").innerHTML = txt;
}

// time - TimeLibrary
function populateTime() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("time").innerHTML = txt;
}

// ygg - Yggdrasil
function populateYgg() {
    var txt;
    if(isFrench()) {
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Aller à la page du projet.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }else{
        txt = '<table witdh="1500">'
                + '<tr><td width="600" height="169">'
                + '<span class="project-name"></span><br />'
                + '<span class="project-desc"></span><br />'
                + '<span class="project-link"><a href="#">Go to the project page.</a></span>'
                + '</td><td>'
                + '<img src="" />'
                + '</td></tr>'
                + '</table>';
    }
    document.getElementById("ygg").innerHTML = txt;
}

// Keep this function at end of script
function onloadInit() {
    populateAdvice();
    populateFrEn();
    populateCmlk();
    populateCnmp();
    populateCnms();
    populateCool();
    populateCSASS();
    populateLeaf();
    populateKara();
    populateKgms();
    populateKuro();
    populateMtdb();
    populatePac();
    populateTime();
    populateYgg();
}