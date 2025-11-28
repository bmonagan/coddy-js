
const festivalData = {
	movies: [{
		id: 1,
		title: "Inception",
		director: "Christopher Nolan",
		year: 2010,
		mainGenre: "Sci-Fi",
		secondGenre: undefined,
		avgRating: 0,
		available: true
	}],
	venues: [{
		id: 1,
		name: "Main Theater",
		capacity: 200,
	}],
	screenings: [{
		id: 1,
		movieId: 1,
		venueId: 1,
		date: '2023-10-29',
		time: '13:35:00',
		availableSeats: 200
	}],
	tickets: new Set()
};

function manageFestival(actions, data) {
    let results = [];
    
    actions.forEach((action, index) => {
        const currentData = data[index];
        
        switch(action) {
            case "listMovies":
               results.push(festivalData.movies);
               break;

            case "listVenues":
               results.push(festivalData.venues);
               break;

            case "listTickets":
                results.push(festivalData.tickets);
               break;
 
            case "listScreenings":
                results.push(festivalData.screenings);
                break;
            case "addMovie":
                const new_movie = {
                    id: festivalData.movies.length + 1,
                    title : currentData.title,
                    director : currentData.director,
                    year : currentData.year,
                    mainGenre : currentData.mainGenre,
                    secondGenre : currentData.secondGenre,
                    avgRating : 0,
                    available : true
                }
                festivalData.movies.push(new_movie);
                results.push("Movie added successfully!")
                break;
            case "addVenue":
                const new_venue = {
                    id: festivalData.venues.length + 1,
                    name : currentData.name,
                    capacity : currentData.capacity
                }
                festivalData.venues.push(new_venue);
                results.push('Venue added successfully!');
                break;
            case "addScreening":
                let mclear = false;
                let vclear = false;
                let screenings = true;
                for (movie of festivalData.movies){
                    if (currentData.movieId === movie.id){
                        mclear = true;
                        break;
                    }}
                for (venue of festivalData.venues){
                    if (currentData.venueId === venue.id){
                        vclear = true;
                        break;
                    }}
                for (screen of festivalData.screenings){
                    if (currentData.date === screen.date && currentData.time === screen.time){
                        screenings = false;
                        break;
                    }
                }
                if (mclear && vclear && screenings){
                    let availableSeats = 0;
                    for (venue of festivalData.venues){
                        if (currentData.venueId === venue.id){
                            availableSeats = venue.capacity;
                        }
                    }
                    festivalData.screenings.push({
                        id: festivalData.screenings.length + 1,
                        movieId: currentData.movieId,
                        venueId : currentData.venueId,
                        date : currentData.date,
                        time : currentData.time,
                        availableSeats: availableSeats

                    })
                    results.push("Screening added successfully!");

                }
                else if (!screenings){
                    results.push("Screening already exists at this time!")
                }
                else {
                    results.push("Movie or venue not found!")

                }
                break;

                
            default:
                results.push("Invalid action!");
        }
    });
    
    return results;
}