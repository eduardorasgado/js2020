//console.log(document.all)

let elements = [];

elements.push(document.head);
elements.push(document.body);
elements.push(document.domain)
// accesing to forms
elements.push(document.forms[0].id)
elements.push(document.forms[0].method)
// we can access the links
elements.push(document.links[0].href)
elements.push(document.links[0].classList)

// images inside document
elements.push(document.images)
// printing all images outer html properties
for(let i = 0; i < elements[elements.length - 1].length; i++) {
    //console.log(elements[elements.length - 1][i].outerHTML);
}

//console.log(elements);