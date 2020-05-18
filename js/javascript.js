var image = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var galery = document.getElementById('galery');
for (img of image){
    galery.innerHTML += `
        <div class="card">
            <a href="#" data-toggle="modal" data-target="#id${img}">
                <img src="img/${img}.jpg" class="card-img-top"></a>
        </div>
        </div>

        <div class="modal fade" id="id${img}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <img class="img-fluid rounded" src="img/${img}.jpg" alt="">
            </div>
        </div>    
        `             
}