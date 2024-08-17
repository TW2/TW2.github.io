function view_cmlk() {

    var header = '<div class="barre-du-haut"><div class="titre-de-app">'
        + 'Caramel Milkshake'
        + '</div><div class="infos-du-haut">'
        + 'Caramel Milkshake is a comparison tool for ASS scripts.'
        + '</div></div>';

    var body = '<div><a href="images/2020-07-30 - CaramelMilkshake 2.4.0 - 001.png">'
        + '<img src="images/2020-07-30 - CaramelMilkshake 2.4.0 - 001.png" alt="Image of CMLK" height="180px">'
        + '</a></div>'
        + '<div class="main-text">'
        + 'Caramel Milkshake is a program to compare two ASS side by side. You can immediately view changes.'
        + '</div>';

    document.getElementById("app-header").innerHTML = header;
    document.getElementById("main-page").innerHTML = body;
}