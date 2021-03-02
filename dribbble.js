console.log('made it in here');

async function dribConnect(){
    let accesstoken = `ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae`;

    let endpoint = `https://api.dribbble.com/v2/user/shots?access_token=${accesstoken}&per_page=6`;

      const response = await fetch(endpoint)
      const data = await response.json();
    //   console.log(data);
     
    return data;
} 

async function displayDrib(){
    const shots = await dribConnect();
    console.log(shots);
    let ul = document.querySelector('#dribbbleShots');

    const html = shots.map(
        shots => `<li class="shot">
                    <a href="https://dribbble.com/charliestableford">
                    <div class="title">${shots.title}</div>
                    <img src="${shots.images.normal}"/>
                    </a>
                  </li>`
    );

    ul.innerHTML = html.join('');

    // ul.innerHTML =
    // `<li class="shot" target="_blank" href="${shots.html_url}">
    //     <div class="title">${shots.title}</div>
    //     <img src="${shots.images.hidpi}"/>
    // </li>`;
}



// {
//     "access_token": "ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae",
//     "token_type": "Bearer",
//     "scope": "public",
//     "created_at": 1596231192
// }

window.onload(displayDrib());
