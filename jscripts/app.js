var sketchContent = document.querySelector('.sketch-block');

sketchListCreation();


function sketchListCreation() {
    var data = service.getCatalogData();
    function addCatalog(sketch) {
        var li = document.createElement("li");
        var div = document.createElement('div');
        var img = document.createElement('img');
        var a = document.createElement('a');
        var frame = document.querySelector('iframe');
        img.src = sketch.sketch;
        //a.href = sketch.site;
        li.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
        a.onclick = function () {
            frame.src = sketch.site;
        };
        return li;
    }
    var ul = document.createElement('ul');
    for (var i = 0; i < data.length; i++) {
        var li = addCatalog(data[i]);
        sketchContent.appendChild(ul);
        ul.appendChild(li);
    }
}
