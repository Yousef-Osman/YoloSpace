import{Photo} from 'src/app/interfaces/photo'

export interface User {
    id:number,
    username: string,
    firstName?: string,
    lastName?: string,
    gender?: number,
    age?: number,
    lastActive?:Date,
    dateCreated:Date,
    knownAs: string,
    introduction?: string,
    lookingFor?: string,
    interests?: string,
    city?: string,
    country?: string,
    photoUrl?: string,
    photos?: Photo[]
}
