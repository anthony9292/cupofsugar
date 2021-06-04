// const postProduct = async (event) => {
//     event.preventDefault();

//     const product = document.getElementById('product').value;
//     const type = document.getElementById('type').value;
//     const quantity = document.getElementById('quantity').value;
//     const description = document.getElementById('description').value;

//     const response = await fetch('/api/products', {
//         method: 'POST',
//         body: JSON.stringify({ product, type, quantity, description }),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('Failed to post');
//     }
// };

const viewPostTemplate = async () => {
    const response = await fetch('/api/products/create', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('/create')
    }
}


document.getElementById('get-post-form').addEventListener('click', viewPostTemplate);
// document.getElementById('post').addEventListener('submit', postProduct);