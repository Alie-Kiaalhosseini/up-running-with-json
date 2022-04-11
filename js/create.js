// javascript for create.html
const form = document.querySelector('form');
const creat = async(e)=>{
    e.preventDefault();

    const doc = {
        name : form.title.value,
        age: form.body.value,
    }
    
    //fetch api
    const uri = 'http://localhost:3000/peaple';
    await fetch(uri,{
        method:'POST',
        body: JSON.stringify(doc),
        headers:{'Content-Type': 'application/json'}
    });
    location.replace('/index.html');
}
form.addEventListener('submit',creat);