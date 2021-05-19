'use strict';

class AngajatIT {
    constructor(CNP, nume, prenume, vechime, departament) {
        this.CNP = CNP
        this.nume = nume
        this.prenume = prenume
        this.vechime = vechime
        this.departament = departament
    }

    afiseazaVarsta() {
        const an = String(this.CNP).slice(1, 3);
        const luna = String(this.CNP).slice(3, 5);
        const zi = String(this.CNP).slice(5, 7);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        if (((an > 0 && an < 21) || an == '00') && luna < date) {
            let anul = `20${an}`
            console.log(year - Number(anul) - 1)
        } else if (((an > 0 && an < 21) || an == '00') && luna > date) {
            console.log(year - Number(anul))
        } else {
            let anul = `19${an}`
            console.log(`${this.nume} are ${year - Number(anul)} de ani.`)
        }

    }
    afiseazaAnulAngajarii() {
        const date = new Date();
        const year = date.getFullYear();
        const anulAngajarii = year - this.vechime;
        console.log(`${this.nume} lucreaza din ${anulAngajarii}.`);
    }

    lucraza() {
        console.log('Neimplementat');
    }

}

class Qa extends AngajatIT {

    constructor(CNP, nume, prenume, vechime, departament) {
        super(CNP, nume, prenume, vechime, departament);
    }

    lucraza() {
        console.log('Software tester')
    }
}

class Developer extends AngajatIT {

    constructor(CNP, nume, prenume, vechime, departament) {
        super(CNP, nume, prenume, vechime, departament);
    }

    lucraza() {
        console.log('Software developer')
    }
}

let andrei = new Developer(1050714111111, 'Andrei', 'Pop', 4, "Tehnic");

console.log(andrei.CNP);
andrei.lucraza();
andrei.afiseazaVarsta();
andrei.afiseazaAnulAngajarii();