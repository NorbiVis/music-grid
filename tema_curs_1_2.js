const URL = ' https://randomuser.me/api/'

async function utilizator() {
    const rezultat = await fetch(URL);
    const date = await rezultat.json();
    const utilizator = date.results[0];
    console.log(utilizator)
    document.getElementById('img').setAttribute('src', utilizator.picture.medium)
    document.getElementById('gender').innerHTML = utilizator.gender;
    document.getElementById('nume').innerHTML = utilizator.name.first + " " + utilizator.name.last;
    document.getElementById('age').innerHTML = utilizator.dob.age;
    document.getElementById('email').innerHTML = utilizator.email;
}


document.getElementById('persoana').addEventListener('click', utilizator);