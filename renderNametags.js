
function renderNametags(nametags) {
    let string = '';
    for (let i = 0; i < nametags.length; i++) {
        const name = nametags[i];
        string += `
        <div style = " display: flex;
        

        "> 
        <div style = "
        border-radius: 20px;
        background-color: blue;
        height: 50px;
        width: 500px;
        ">
        <p style = "color: white"> Hello my name is: </p>
        </div>
        <div>
        <p>${name}</p>
        </div>
        </div>
        `
    }


    return `
        <div class="text-center mt-5">
            ${string}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}