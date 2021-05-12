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
        const date = new Date();
        const year = date.getFullYear();
        if ((an > 0 && an < 21) || an == '00') {
            let anul = `20${an}`
            console.log(anul);
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

    lucraza() {
        console.log('Software tester')
    }
}

class Developer extends AngajatIT {

    lucraza() {
        console.log('Software developer')
    }
}

let andrei = new Developer(1930714111111, 'Andrei', 'Pop', 4, "Tehnic");

// console.log(andrei.CNP);
// andrei.lucraza();
// andrei.afiseazaVarsta();
// andrei.afiseazaAnulAngajarii();