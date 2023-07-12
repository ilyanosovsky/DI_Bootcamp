
const getData = async () => {
    try {
        const res = await fetch('/api/products');
        const data = await res.json();
        console.log(data);
        render(data);
    } catch (err) {
        console.log(err);
    }
};
getData();

//search 
const searchInput = async () => {
    const val = document.getElementById('search-input').value;
    try {
        const res = await fetch(`/api/products/search?name=${val}`);
        const data = await res.json();
        render(data);
    } catch (err) {
        console.log(err);
    }
}

//add items from the browser
const add = async () => {
    const name = document.getElementById('name-input').value;
    const price = document.getElementById('price-input').value;
    try {
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({name,price})
        });
        const data = await res.json();
        render(data);
    } catch (err) {
        console.log(err);
    }
}


//update items from the browser
const update = async () => {
    const name = document.getElementById('name-input-update').value;
    const price = document.getElementById('price-input-update').value;
    const id = document.getElementById('product-id-input').value;
    try {
        const res = await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({id,name,price})
        });
        const data = await res.json();
        render(data);
    } catch (err) {
        console.log(err);
    }
}

//delete items from the browser
const deleteInput = async () => {
    const id = document.getElementById('delete-input').value;
    try {
        const res = await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
        getData();
    } catch (err) {
        console.log(err);
    }
}


const render = (arr) => {
    const html = arr.map((item) => {
        return `
        <div style="display:inline-block; border:1px solid #000; margin:20px;padding:25px;">
    <h2>${item.name}</h2>
    <h4>${item.price}</h4>
        </div>`;
    });
    document.getElementById('root').innerHTML = html.join('');
};


