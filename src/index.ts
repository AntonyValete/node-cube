import fs from 'fs';
import path from 'path';
import { Scramble } from './scramble.js';

function isNotDNF(scramble: Scramble): boolean {
    return scramble.getPenalty() !== 2;
}

function main() {
    const __dirname = path.resolve();

    const _scrambleJsonPath = path.join(__dirname, '/public/assets/scrambles/scrambles.json');
    
    fs.readFile(_scrambleJsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        let scrambles: Scramble[] = Scramble.fromJson(data);
    
        Scramble.sortByDate(scrambles);

        console.log(`The last scramble you solved was on ${new Date(scrambles[scrambles.length - 1].getDate()).toLocaleDateString()}`);

        Scramble.sortByTime(scrambles);

        console.log(`Your best time is ${scrambles.find(isNotDNF).getTime() / 1000} seconds`);
    });
}

export default main;