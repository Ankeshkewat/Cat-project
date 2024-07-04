const api_url = 'https://api.thecatapi.com/v1/breeds?api_key=live_CiIcVoNSpD5lDCb1VzVqyeGcCsShlBwBjO8S7h88HVtOeoV8YiuAhl1O8tPo0KbC';
const container_div = document.getElementById('container');

window.onload = GetData();

async function GetData() {
    try {
        const jresp = await fetch(api_url, {
            method: "GET"
        });
        const data = await jresp.json();
        // console.log({ data });

        data.forEach((el, i, data) => {
            console.log(el)
            let card = document.createElement('div');
            card.id ="card";

            let img = document.createElement('img');
            if (el.image?.url) {
                img.setAttribute('src', el.image["url"]);
            }
            
            let name = document.createElement('h1');
            let nameTextNode = document.createTextNode(el.name);
            name.appendChild(nameTextNode);

            let desc = document.createElement('p');
            desc.innerText = el.description;

            let origin = document.createElement('p');
            origin.innerText ="Origin : " + el.origin;
            origin.setAttribute('class',"origin");

            let life_span = document.createElement('p');
            life_span.innerText ="Life Span : " + el.life_span;
            life_span.setAttribute('class',"life_span");

            let habbits_div = document.createElement('div');
            habbits_div.className = 'habbits_div';

            card.append(img,name,desc,origin,life_span);
            container_div.append(card)
        })
    }
    catch (err) {
        console.log({ err });
        // setTimeout(() => { alert("Something went wrong") }, 2000);
    }
}