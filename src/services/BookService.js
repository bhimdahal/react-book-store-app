
 export  function getAllBooks() {
    // return await fetch({
    //   method: 'GET',
    //   url: 'http://localhost:8080/api/books',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    return  fetch('http://localhost:8080/api/books');
  }
   