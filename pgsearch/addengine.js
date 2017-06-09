// vim: encoding=UTF-8 expandtab sts=4 sw=4 ts=4 tw=74

function addEngine(src, img, name, cat)
{
    if (((typeof window.sidebar)=="object") 
        && ((typeof window.sidebar.addSearchEngine)=="function")) {
            window.sidebar.addSearchEngine(
                "http://www.itpug.org/pgsearch/"+src,
                "http://www.itpug.org/pgsearch/"+img,
                name,
                cat);
    } else {
            alert("I plugin di ricerca sono installabili solo sui"
                + " browser della famiglia Mozilla (Firefox, Mozilla"
                + " e Netscape 6+, ...).");
    }
}
