var frag = function(element){
    var frag = document.createDocumentFragment();
    while(element.childNodes.length) {
        frag.appendChild(element.childNodes[0]);
    }
    return frag;
}

var replaceSpanWithTextContent = function(parent){
    var spans = parent.querySelectorAll(":scope > span");
    spans.forEach(function(span){
        replaceSpanWithTextContent(span);
        var fragment = frag(span);
        span.replaceWith(fragment);
    });

};

var replaceSpans = function(){
    var pres = Array.from( document.querySelectorAll("pre") );
    pres.forEach(function(pre){
        var spans = pre.querySelectorAll("code>span");
        //var spans = code.querySelectorAll("span span");

        Array.from(spans).forEach(function(span){

            var strongs = span.querySelectorAll("strong");
            strongs.forEach(function(strong){
                replaceSpanWithTextContent(strong);
            });

            replaceSpanWithTextContent(span);
            var fragment = frag(span);
            span.replaceWith(fragment);
        });
        var strongs = pre.querySelectorAll("code>strong");
        strongs.forEach(function(strong){
            replaceSpanWithTextContent(strong);
        })
    });
};

replaceSpans();
document.querySelectorAll("pre span").length;
