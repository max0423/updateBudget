
const axios = require('axios');

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const selectUser1 = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const handleGridRowsUpdated1 =  (rows) =>{

    console.log("You handle Grids ", rows);
    return {
        type: 'handleGridRowsUpdated',
        payload: rows
    }
   
  }

  export const getGithubDataAsyn =() => dispatch =>{
 
    // return  axios.get('https://myfirstapi.azurewebsites.net/api/values')
     return  axios.get('https://node888.azurewebsites.net/api/items')
     .then(res => {
       console.log(res.data.json);
       var result = res.data.json;
       dispatch(receiveGehubData(result));
    })

  }

  export const receiveGehubData = (json) =>({
      type: "getGithubData",
      payload : json
  })