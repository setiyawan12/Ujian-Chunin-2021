const apiService = 'https://dhiyo-api-article.herokuapp.com/articles'
fetch (apiService)
    .then(res => res.json())
    .then(res=>{
            res.data.map(user=>{
            console.log(`${user.tittle}:`);
        });
    });