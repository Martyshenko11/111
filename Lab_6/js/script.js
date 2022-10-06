const sec = document.getElementById('add_sec');

function Add() {
    fetch('https://randomuser.me/api').then((response) => {
        return response.json();
    }).then((response) => {
        const users = response.results[0];
        const person = new Person(
            users.picture,
            users.name,
            users.location.city,
            users.location.country,
            users.location.postcode);
        person.create_sec();
    });
}

function Remove() {
    while (sec.firstChild) sec.removeChild(sec.firstChild);
}

class Person {
        constructor (picture, name, city, country, postcode) {
        this.picture = picture;
        this.name = name;
        this.city = city;
        this.country = country;
        this.postcode = postcode;
    }

    getInit() {
        return `${this.name.title} ${this.name.first} ${this.name.last}`;
    }

    create_sec() {
        const user = document.createElement('div');
        user.id = 'user';
        const image = document.createElement('img');
        image.src = this.picture.medium;
        user.appendChild(image);
        const inf = document.createElement('span');
        inf.innerHTML = `${this.getInit()}<br>City: ${this.city}<br>Country: ${this.country}<br>Postcode: ${this.postcode}`;
        user.appendChild(inf);

        sec.appendChild(user);

        console.log(this.picture, this.getInit(), this.city, this.country, this.postcode);
    }
}