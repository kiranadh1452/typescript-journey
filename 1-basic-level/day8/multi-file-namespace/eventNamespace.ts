namespace EventNamespace {
    export interface EventInterface {
        name: string;
        readonly time: string;
        readonly place: string;
        readonly note: string;
    }

    export class Event implements EventInterface {
        name: string;
        time: string;
        place: string;
        note: string;

        constructor(name: string, time: string, place: string, note: string) {
            this.name = name;
            this.time = time;
            this.place = place;
            this.note = note;
        }

        showInfo(): void {
            console.log(
                `Name: ${this.name}, Time: ${this.time}, Place: ${this.place}, Note: ${this.note}`
            );
        }
    }
}
