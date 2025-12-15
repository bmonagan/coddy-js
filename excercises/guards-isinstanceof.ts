// TODO: Write your code here

// Create type aliases for Movie and Song
type Movie = { 
    title: string,
    director: string
}
type Song = {
    title:string,
    artist:string
}
// Create the getMediaInfo function
function getMediaInfo(media: Movie | Song): string { 
    if ('director' in media) {
        return `Movie: ${media.title} directed by ${media.director}`;
    }
    else { 
        return `Song: ${media.title} by ${media.artist}`;
    }
}


// Create the processValue function
function processValue(value: string | Date):number {
    if (value instanceof Date) {
        return value.getFullYear();
    }
    else {
        return value.length;
    }
}


// Create test data
const movie1: Movie = { title: "Inception", director: "Christopher Nolan" };
const song1: Song = { title: "Bohemian Rhapsody", artist: "Queen" };
const movie2: Movie = { title: "The Matrix", director: "The Wachowskis" };
const song2: Song = { title: "Imagine", artist: "John Lennon" };

const testDate: Date = new Date("2023-12-25");
const testString: string = "TypeScript";

// Print the outputs
console.log(getMediaInfo(movie1));
console.log(getMediaInfo(song1));
console.log(getMediaInfo(movie2));
console.log(getMediaInfo(song2));
console.log(processValue(testDate));
console.log(processValue(testString));