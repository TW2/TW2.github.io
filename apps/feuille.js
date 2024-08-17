function view_feuille() {

    var header = '<div class="barre-du-haut"><div class="titre-de-app">'
        + 'Feuille'
        + '</div><div class="infos-du-haut">'
        + 'Feuille, formerly AssFxMaker, which means Leaf in english, is a toolbox for fansub.'
        + '</div></div>';

    var body = '<div><a href="images/2024-08-16-feuille-karaoke.png">'
        + '<img src="images/2024-08-16-feuille-karaoke.png" alt="Image of Feuille (Karaoke)" height="180px">'
        + '</a></div>'
        + '<div class="main-text">'
        + 'Feuille is a tool that combines a lot of modules that can be open or close. Feuille goals is to provide'
        + ' many parts that can be useful for the anime and drama. Its focus is simplicity. Historic modules from'
        + ' AssFxMaker are Karaoke, ASS Drawing and Scripting coding to use with karaoke presets. Here comes also'
        + ' new modules based on progress of AssFxMaker as Feuille specific module which is ASS comparison and'
        + ' yggdrasil modules, that are for the future, which are ASS Table, OCR...<br /><br />'
        + 'Karaoke use presets and your own templates with or without use of scripting. The presets are elements'
        + ' to choose before writing a template. There are 4 usable presets:<br />'
        + '<ul>'
        +     '<li>Basic -> you use it to do a simple karaoke line.</li>'
        +     '<li>Period -> you use it to do a karaoke line that use at least two templates which loop.</li>'
        +     '<li>Random -> you use it to do a karaoke line that use at least two templates randomly chosen.</li>'
        +     '<li>Symmetric -> you use it to do a karaoke line that use at least two templates mirrored in the center of your line.</li>'
        + '</ul>'
        + 'The Scripting part of AssFxMaker is now including in karaoke templates dialog.'
        + '<br /><br />'
        + 'ASS Drawing offers simple way to create a drawing using tool to create lines or curves, using layers'
        + ' to do a better design according dimension. You can also use transformations as translation, rotation'
        + ' and scaling. The possibilities are not finished so I let you try it by yourself.<br /><br />'
        + 'ASS Comparison offers way to view what are the changes between to scripts visually.<br /><br />'
        + 'ASS Table is a simple tool to open, save, create, modify an ASS script.<br /><br />'
        + 'Video lets you see a video file (but lacks of subtitles display for the moment).<br /><br />'
        + 'Audio lets you time your ASS events (but still in progress, maybe done in the future).<br /><br />'
        + 'OCR try to get text from your video (but still in progress, maybe done in the future).<br /><br />'
        + '</div>';

    document.getElementById("app-header").innerHTML = header;
    document.getElementById("main-page").innerHTML = body;
}