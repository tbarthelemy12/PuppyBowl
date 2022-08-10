// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/*
Types of fetch / http requests:  aka request methods
GET (gets the data)
POST (creates data)
PUT (updated data)
DELETE (deletes data)
*/


export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(
      `${APIURL}players`
    );
    const result = await response.json();
    console.log(result.data.players)
    return result.data.players;
  } 
  catch(err) {
    console.log(err.message)
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `${APIURL}players/${playerId}`
    )
    const result = await response.json();
    return result.data.player;
  }
  catch(err) {
    console.log(err.message)
  }
};




export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(
      `${APIURL}players`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerObj),
      }
    );
    
    const result = await response.json();
    return result.data.newPlayer;
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `${APIURL}players/${playerId}`, {method: "DELETE"}
    )
    const result = await response.json()
    if (result.error) throw result.error 
    return 

  }
  catch (err){
    console.error(err)
  }
};