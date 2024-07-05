const favorite_images = JSON.parse(localStorage.getItem("cat_image_url")) || [];
const container_div = document.getElementById("container");
GetData(favorite_images)


async function GetData(favorite_images) {

    document.getElementById("container").innerHTML = null
    
    if (favorite_images.length) {

        favorite_images.forEach((el, i, favorite_images) => {
           
            let card = document.createElement("div");
            card.id = "card";
            let img = document.createElement('img');
            img.src = el;
            let p = document.createElement("p");
            p.innerText = "Mark as unfavorite";

            p.addEventListener("click", () => {
                console.log("yes I am here ", i)
                deleteData(el, i);
            })

            card.append(img, p);

            container_div.append(card);
        })
    }
}

function deleteData(el, i) {
    console.log("index : ",i);
    const favorite_images = JSON.parse(localStorage.getItem("cat_image_url")) || [];
    favorite_images.splice(i, 1);
    localStorage.setItem("cat_image_url", JSON.stringify(favorite_images));
    GetData(favorite_images)
    alert("Removed from favorites")
}


