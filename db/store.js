const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    write(rsvp) {
        return writeFileAsync('db/db.json', JSON.stringify(rsvp));
    }

    getRSVPs() {
        return this.read().then((rsvps) => {
            let parsedRSVPs;

            // If rsvps isn't an array or can't be turned into one, send back a new empty array
            try {
                parsedRSVPs = [].concat(JSON.parse(rsvps));
            } catch (err) {
                parsedRSVPs = [];
            }

            return parsedRSVPs;
        });
    }

    addRSVP(rsvp) {
        const { name, answer, group } = rsvp;

        if (!name || !answer) {
            throw new Error("rsvp 'name' and 'answer' cannot be blank");
        }

        // Add a unique id to the rsvp using uuid package
        const newRSVP = { name, answer, group };

        // Get all rsvps, add the new rsvp, write all the updated rsvps, return the newrsvp
        return this.getRSVPs()
            .then((rsvps) => [...rsvps, newRSVP])
            .then((updatedRSVPs) => this.write(updatedRSVPs))
            .then(() => newRSVP);
    }

}

module.exports = new Store();
