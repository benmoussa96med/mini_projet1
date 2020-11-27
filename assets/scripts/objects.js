// const person ={
//     first_name:'Max',
//     age:30,
//     hobbies:['sports','Cooking'],
//     greet:function(){
//         alert('Hi there ');
//     }
// };
// //person.greet();
// console.log(person);
// person.isAdmin=true;
// console.log(person);
// delete person.age;
// console.log(person);
const AddmovieBtn=document.querySelector('#add-movie-btn');
const SearchBtn=document.querySelector('#search-btn');
const movies=[];

const RenderMovies=()=>{
    const movielist=document.getElementById('movie-list');
    if(movies.length===0){
        movielist.classList.remove('visible');
        return;
    }
    else {
        movielist.classList.add('visible');
    }
    movielist.innerHTML='';
movies.forEach((movie)=>{
const movieel=document.createElement('li');
movieel.textContent=movie.info.title;
movielist.append(movieel);
});
}
const AddmovieHandler=()=>{
    const title=document.getElementById('title').value;
    const extra_name=document.getElementById('extra-name').value;
    const extra_value=document.getElementById('extra-value').value;

    if(title.trim()==='' || extra_name.trim()==='' || extra_value.trim()==='' ){
      return  alert('please add text');
    }
          const newmovie={
            info:{
                title,
                [extra_name]:extra_value,
            },
            id:Math.random()
            };
                movies.push(newmovie);
                RenderMovies();
               // console.log(newmovie);
                
};
AddmovieBtn.addEventListener('click',AddmovieHandler);