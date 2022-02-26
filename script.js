// =======================1==============================
const list =document.getElementById('list')



fetch('https://ghibliapi.herokuapp.com/films').then(res => {
    const json = res.json();
    return json;
}).then(json => {

    json.forEach(element => {
        const li = (`<li>Title - ${element.title} <br> Release Date - ${element.release_date}
            <div>Director - ${element.director}</div><br>
            <div>Description - ${element.description}</div><br> 
            <div><img src=${element.image}></div><br> 
            </li>`);
        list.insertAdjacentHTML('beforeend', li)
    });

})
// ========================2===============================


const selection = document.getElementById('selection');
const imge = document.getElementById('imge');

const listObj = {
    'akita': 'Akita',
    'beagle': 'Beagle',
    'dalmatian': 'Dalmatian',
    'germanshepherd': 'German Shepherd',
    'husky': 'Husky',
    'labrador': 'Labrador',
    'pug': 'Pug',
    'retriever/golden': 'Golden Retriever',
    'spaniel/cocker': 'Cocker Spaniel'
};


for (const [key, value] of Object.entries(listObj)) {
    selection.insertAdjacentHTML('beforeend', `<option value = ${key}>${value}</option>`);
}



selection.addEventListener('change', e => {
    console.log(document.getElementById('selection').value);
    fetch(`https://dog.ceo/api/breed/${document.getElementById('selection').value}/images/random`).then(res => {
        const json = res.json();
        return json;
    }).then(json => {
        if (json.message != 'Breed not found (master breed does not exist)') {
            imge.style.display = 'block';
            imge.src = json.message;
        } else {
            imge.style.display = 'none';
        }
    })
}, true);

// ========================3===============================

const bookSearch = document.getElementById('book-search');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const pages = document.getElementById('pages');

form.addEventListener('click', e => {
    e.preventDefault();
});

submit.addEventListener('click', e => {
    const value = bookSearch.value.split(' ').join('+');

    pages.innerHTML="";

    fetch(`http://openlibrary.org/search.json?q=${value}`).then(res => {
        const json = res.json();
        return json;
    }
    ).then(
        json => {
            console.log(json);
            console.log(json.numFound);
            for (let i = 1; i <= Math.ceil(+json.numFound / 100); i++) {
                pages.insertAdjacentHTML('beforeend', `<a href="#">${i}</a>`)
            }

            for (const [key, value] of Object.entries(json.docs)) {

                const li = (`<li>
                                <p> Title - ${value.title} <br> First Publish Year - ${value.first_publish_year}</p>
                                <p>Author Name - ${value.author_name}</p>
                                <p>Subject - ${value.subject}</p> 
                           </li>`);
                result.insertAdjacentHTML('beforeend', li)
            }

        }
    )
});

// ===============================4=========================
const resultN4 = document.getElementById('resultN4');

fetch(`https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`).then(res => {
    const json = res.json();
    return json;
}).then(json => {
    const div = (`<div>
                                <p> Title: ${json.title}
                                <p>  Description:  ${json.description}</p>
                                <p> Director: ${json.director}</p> 
                                <p> Producer: ${json.producer}</p> 
                                <p> Release Date: ${json.release_date}</p> 

                           </div>`);
    resultN4.insertAdjacentHTML('beforeend', div)
});