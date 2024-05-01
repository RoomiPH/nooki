import { Schema, type } from '@colyseus/schema';

export interface NoteState {
    userId: string;
    note: string;
}

export class Notes extends Schema {
    @type('string')
    public latestUpdatedBy: string | undefined;

    @type('string')
    public note: string | undefined;
}
