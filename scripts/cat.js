const breed_id = localStorage.getItem("breed_id") || "aege";

const api_url = `https://api.thecatapi.com/v1/images/search?limit=${1000}&breed_ids=${breed_id}&api_key=live_CiIcVoNSpD5lDCb1VzVqyeGcCsShlBwBjO8S7h88HVtOeoV8YiuAhl1O8tPo0KbC`
const container_div = document.getElementById("container");

window.onload = GetData();

async function GetData() {
    try {
        let jresp = await fetch(api_url, {
            method: "GET",
        });
        let data = await jresp.json();

        data.forEach((el, i, data) => {
            let card = document.createElement("div");
            card.id = "card";

            let img = document.createElement('img');
            img.setAttribute("src", el.url);

            let p = document.createElement("p");
            let pTextNode = document.createTextNode("Add to favorite");

            p.addEventListener("click", () => {
                let favorite_images = JSON.parse(localStorage.getItem("cat_image_url")) || [];
                console.log(favorite_images)
                if (favorite_images.includes(el.url)) {
                    alert("Already added in favorites")
                } else {
                    favorite_images.push(el.url);
                    favorite_images = JSON.stringify(favorite_images);
                    localStorage.setItem("cat_image_url", favorite_images);
                    alert("Added to favorites list")

                }

            })

            let name = document.createElement("h1");
            name.innerText = el.breeds[0].name;


            p.appendChild(pTextNode);

            card.append(img, name, p);
            container_div.append(card);

        })

    }
    catch (err) {
        console.log({ err });
    }
}
