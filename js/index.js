// javascript for index.html
const blog = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');
const getPeople = async (term) =>{
    // const uri = '  http://localhost:3000/peaple';
    // const uri = '  http://localhost:3000/peaple?_sort=age';//how to sort by exact value
     let uri = '  http://localhost:3000/peaple?_sort=age&_order=desc'; //how to sort descending
    // search
    if(term){
        uri+=`&q=${term}`;
    }
    
    
     const res = await fetch(uri);
    const people = await res.json();
    console.log(people);
    let show = '';
    people.forEach(person => {
            show+= `
            <div>
            <h4>${person.name}</h2>
            <h3>${person.age}<h3>
            <a href="/details.html?id=${person.id}">read more... </a>
            </div>
            `
    });
    blog.innerHTML = show;
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    getPeople(searchForm.term.value.trim());

});
addEventListener('DOMContentLoaded',()=>getPeople());