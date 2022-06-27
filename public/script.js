
const enter = document.querySelector('.btn');
//console.log(enter)

enter.addEventListener('click',(event)=>{
    event.preventDefault();
    const city = document.querySelector('.search').value;
    //console.log(city)
   // console.log(city)
    //return city;
    


fetch ('/weather',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({city})
}).then(res =>res.json()).then(data =>{console.log(data)})
})