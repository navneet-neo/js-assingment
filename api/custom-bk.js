const APIURL="http://localhost:3001/products";
fetch(APIURL)
.then(res=> res.json())
.then(data=>{
    data.forEach((val,ind) => {
        colNode = document.createElement('div');
        colNode.setAttribute('class',"col-lg-4 col-md-4 col-sm-6");
        
        productNode = document.createElement('div');
        productNode.setAttribute('class',"product_card");
        
        prodId = document.createElement('span');
        prodId.setAttribute('class',"prdoId");
        prodId.textContent = `#${val.id}`

        headNode = document.createElement('h2');
        headNode.setAttribute('class',"prod_title");
        headNode.textContent = val.pname;

        pNode = document.createElement('p')

        quantitySpan = document.createElement('span')
        quantitySpan.setAttribute('class',"quantitySpan");
        quantVal = document.createElement('i');
        quantVal.textContent = val.quantity;
        quantitySpan.textContent = 'Quantity :- ';
        quantitySpan.append(quantVal);

        priceSpan = document.createElement('span');
        priceSpan.setAttribute('class',"price");
        priceSpan.textContent = `$${val.price}`;

        pNode.append(quantitySpan , priceSpan);
        
        hrNode = document.createElement('hr');

        btnEdit = document.createElement('button');
        btnEdit.setAttribute('id',`btnedit${ind+1}`);
        btnEdit.setAttribute('class',`btn-product btn btn-primary btn-edit`);
        btnEdit.textContent = "Edit";

        btnDelete = document.createElement('button');
        btnDelete.setAttribute('id',`btndelete${ind+1}`);
        btnDelete.setAttribute('class',`btn-product btn btn-secondary btn-delete`);
        btnDelete.textContent = "Delete";

        productNode.append(prodId , headNode , pNode , hrNode , btnEdit, btnDelete);
        colNode.append(productNode);

        document.getElementById("product_row").appendChild(colNode);
        // console.log(`price :- ${val.price} => index = ${ind}`);
    });
});

// document.addEventListener('click', function(e){
//     if(e.target && e.target.id== 'btnedit1'){
//        alert(this.parentElement)
//     }
// });



// console.log(document.getElementById('product_row').innerHTML)


