//Accessing the element
const containerElement = document.querySelector('.container')
//Arrow function
const products =()=>{
    //fetch the data from json
    fetch('project.json')
    //fetch the data from the api
    fetch('https://dummyjson.com/users')
    //convert the data into json format
    .then(res=>res.json())
    .then(item=>{
    console.log(item)
    item.users.map((data)=>{
        containerElement.innerHTML +=`
        <div class="card">
          <img src="${data.image}" class="card-img-top" alt="----" />
          <div class="card-body">
            <h3 class="profile-name">${data.firstName} ${data.lastName}</h3>
                <p class="about">${data.address.address} ${data.address.city}</p>
                <p class="email"><b>${data.email}</b></p>
                <p class="phone">${data.phone}</p>
                <p class="university"><b>${data.university}</b></p>
                <p class="company">${data.company.department}</p>
                
           </div>
          <div class="websites">
            <a href="https://mail.google.com/" target="_blank">
              <img src="./images/email.png" width="20px" height="20px" />
            </a>
            <a href="https://github.com/saritha174" target="_blank">
              <img src="./images/github.png" width="20px" height="20px" />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <img src="./images/twitter.png" width="20px" height="20px" />
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
              <img src="./images/instagram.png" width="20px" height="20px" />
            </a>
            <a href="https://www.facebook.com/login.php/" target="_blank">
              <img src="./images/facebook.png" width="20px" height="20px" />
            </a>
          </div>
        </div>`
    })
    
    })
}
products()