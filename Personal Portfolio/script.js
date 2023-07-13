 
    
    let bttn = document.getElementById('btn');
    let menu = document.getElementById('menue');
    bttn.addEventListener('click',()=>{

    if(menu.style.display == 'block')
    {
        (menu.style.display = 'none');  
    }
    else
    {
        (menu.style.display = 'block');
    }
});


 setTimeout(()=>{
     console.log("jai sri ram");
     const para = ("HTML5, CSS3, JavaScript & Bootstrap");
    document.getElementById('para').innerHTML= para;
 },3000);

// import Typed from 'typed.js';



//   const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//link of intership
