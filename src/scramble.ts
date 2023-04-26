export default class Scramble {
    private date: number;
    private scramble: string;
    private time: number;
    private penalty: number;
    private comment: string;

    constructor(date: number, scramble: string, time: number, penalty: number = 0, comment: string = "") {
        this.date = date;
        this.scramble = scramble;
        this.time = time;
        this.penalty = penalty;
        this.comment = comment;
    }

    public getDate(): number {
        return this.date;
    }

    public getScramble(): string {
        return this.scramble;
    }

    public getTime(): number {
        return this.time;
    }

    public getPenalty(): number {
        return this.penalty;
    }

    public getComment(): string {
        return this.comment;
    }

    public static fromJson(json: any): Scramble[] {
        let scrambles: Scramble[] = [];

        json.forEach(scramble => {
            scrambles.push(new Scramble(scramble.date, scramble.scramble, scramble.time, scramble.penalty, scramble.comment));
        });

        return scrambles;
    }

    public static getMean(scrambles: Scramble[]): number {
        let sum: number = 0;

        scrambles.forEach(scramble => {
            sum += scramble.getTime();
        });

        return sum / scrambles.length;
    }

    public static organizeByDate(scrambles: Scramble[]): Map<string, Scramble[]> {
        let organized: Map<string, Scramble[]> = new Map<string, Scramble[]>();

        scrambles.forEach(scramble => {
            const date: Date = new Date(scramble.getDate());
            const key: string = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

            organized[key].push(scramble);
        });


        return organized;
    }
}