const button=document.getElementById('boton1')

button.addEventListener('click',getData)

function getData(){
    //Create a new instance of XMLHTTPRequest
    const xhr = new XMLHttpRequest()
    //Open a connection with the GET method to the empleado.json file
    //In fact it could be a URL but in this example i will use a file 
    xhr.open('GET','empleado.json',true)
    //When the "onload" event will happen then the anonymous function will be executed but
    //only if the status has no problems
    xhr.onload = function () {
        if (this.status === 200){
            //parsing to JSON to be able to loop through the response
            const person = JSON.parse(this.responseText)
            //Create a UL element to contain each key:value pair of the object 
            let listaData=document.createElement('ul')
            //Getting the empleado div to insert on it the UL element
            let lista=document.getElementById('empleado')
            //for each to iterate through the object is the best option because it doesn't 
            //matter how many key:value pairs has the object
            for(const ele in person){
                //Create a li element for each key:value pair
                let elemento=document.createElement('li')
                    
                elemento.innerHTML=`${ele}:  ${person[ele]}`
                listaData.appendChild(elemento)
            }
            lista.appendChild(listaData)                
        }
    }
    xhr.send()
}