function navneet(id){
    alert(id)
}
const APIURL="http://localhost:3000/products";
fetch(APIURL)
.then(res=> res.json())
.then(data=>{
    data.forEach((val,ind) => {
        product = document.getElementById('product_row');
        product.innerHTML += `
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="product_card">
                <span class="prdoId">${val.id}</span>
                <h2 class="prod_title">${val.pname}</h2>
                <p>
                    <span class="quantitySpan">Quantity :- <i>${val.quantity}</i></span
                    ><span class="price"><i class="fa fa-inr"></i>${val.price}</span>
                </p>
                <hr />
                <button class="btn-product btn btn-primary btn-edit" onclick="navneet(${ind+1})" data-toggle="modal" data-target="#myModal">Edit</button>
                <button class="btn-product btn btn-secondary btn-delete">Delete</button>
            </div>
        </div>
        `
        console.log(`ID :- ${val.id}, Name :- ${val.pname}, price :- ${val.price} => index = ${ind}, Quantity :- ${val.quantity}`);
    });
});


