
function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            var ourResponse = JSON.parse(this.responseText);
            var item = ourResponse.products;
            var myText = "";
            for(var i = 0; i<item.length; i++){
                var cartona =   `
                                    <div class="col-md-4">
                                        <img src="${item[i].images[0]}" alt="" class="img-fluid mb-2" style="height: 350px; background-color: blue;">
                                        <h3 class=" text-center text-danger">${item[i].id}</h3>
                                        <h5 class="text-center text-primary">${item[i].title}</h5>
                                        <button class="btn btn-info btn-block w-50 mx-auto mb-4" onclick="toggleShow(${i})">Show Data</button>
                                        <div id="ourData-${i}" style="display:none;">
                                            <p >${item[i].category}</p>
                                            <p id="desc-${i}">${item[i].description}</p>
                                        </div>
                                        <button class="btn btn-info btn-block w-50 mx-auto mb-4" onclick="togglePrice(${i})">Price</button>
                                        <p id="ourPrice-${i}" style="display: none;"><strong style="color: green">${item[i].price - item[i].price*item[i].discountPercentage/100}</strong> Instead of <strong style="text-decoration: line-through; color: red"> ${item[i].price}</strong></p>
                                        <button class="btn btn-info btn-block w-50 mx-auto mb-4" onclick="toggleRating(${i})">Rating</button>
                                        <p id="ourRating-${i}" style="display: none;"><strong>${item[i].rating}</strong></p>
                                    </div>
                                `;
                myText+=cartona;
            }
            document.querySelector('.test').innerHTML = myText;
        }
    }
    xhttp.open("GET","https://dummyjson.com/products", true);
    xhttp.send();
}


function toggleShow(index){
    var Data = document.getElementById(`ourData-${index}`);
    var DataOfdesc = document.getElementById(`desc-${index}`);
    if(Data.style.display === 'none'){
        Data.style.display = "block";
        Data.style= "color: red; font-family: monospace; font-size: 25px; text-align: center;";
        DataOfdesc.style = "color: blue;";
    }else{
        Data.style.display= "none";
    }
}

function togglePrice(index){
    var Price = document.getElementById(`ourPrice-${index}`);
    if(Price.style.display === 'none'){
        Price.style.display = "block";
        Price.style = "text-align: center;"
    }else{
        Price.style.display = "none";
    }
}

function toggleRating(index){
    var Rating = document.getElementById(`ourRating-${index}`);
    if(Rating.style.display === 'none'){
        Rating.style.display = "block";
        Rating.style = "color: blue; font-size: 25px; font-family: monospace; text-align: center;";
    }else{
        Rating.style.display = "none";
    }
}

getApi();
