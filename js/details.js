// javascript for details.html
const detail = document.querySelector('.details');
const remove = document.querySelector('.btn');
const id = new URLSearchParams(window.location.search).get('id');
const getDetails = async()=>{
    const res =  await fetch('http://localhost:3000/peaple/'+id)
const people = await res.json();
console.log(people);
let show =`
           <div>
            <h4>${people.name}</h2>
            <h3>${people.age}<h3>
            </div>
            `;
detail.innerHTML = show;
}

//delete data from json file
const deleteObject = async()=>{
    const res = await fetch('http://localhost:3000/peaple/'+id,{
    method:'DELETE'
    });
    location.replace('./index.html');
}
remove.addEventListener('click',()=>deleteObject());
addEventListener('DOMContentLoaded',() =>getDetails());