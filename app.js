
const post_from = document.getElementById('post-from');
const msg = document.querySelector('.msg');
const output = document.querySelector('.output');


//getallpost

const getallpost = () => {

    let getpost = readLsData('post');

    if(!getpost){
        output.innerHTML = `
        <h3>Post Is not found!</h3>
        
        
        `

    }





    //jodi thake

    if(getpost){
        let list = '';
        getpost.reverse().map(data => {

            list += `

            <div class="card-body">
                            <div class="up">
                             <div class="main-body">
                                 <img src="${data.aphoto}" alt="">
                                 <div class="right-pro">
                                 <b>${data.aname}</b>
                                 <h4>Chief Executive Officer, Hong Kong and Macau at Mercer</h4>
                                 <span>2d . <i class="fas fa-globe-asia"></i></span>
                                 </div>
                             </div>
 
                             <div class="right-dot">
                                 <div class="dropdown">
                                     <a class=" dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                         <i class="fas fa-ellipsis-h"></i>
                                     </a>
                                   
                                     <ul class="dropdown-menu">
                                       <li><a class="dropdown-item" href="#">Edit</a></li>
                                       <li><a class="dropdown-item" href="#">Delete</a></li>
                                       
                                     </ul>
                                   </div>
                             </div>
                            </div>
 
 
                            <div class="content-area-linkedin my-3">
                             <p>${data.pcontent}</p>
                            </div>
                            
 
                         </div>
                         <img class="w-100" src="${data.pphoto}" alt="">

                         <hr>
            
            
            
            
            `


        });

        output.innerHTML = list ; 
    }
}

getallpost();







// get element

post_from.onsubmit = (e) => {
    e.preventDefault();


    let getdata = new FormData(e.target);
    let data = Object.fromEntries(getdata.entries());
    let {aname,aphoto,pcontent,pphoto} = Object.fromEntries(getdata.entries());




    // validation massage

    if(!aname || !aphoto || !pcontent || !pphoto){
        msg.innerHTML = setalert('Field must not be empty!')

    }else{
        createLsData('post',data)
        msg.innerHTML = setalert('Data Stable','success')
        e.target.reset();
        getallpost();


    }
    console.log(data)

}