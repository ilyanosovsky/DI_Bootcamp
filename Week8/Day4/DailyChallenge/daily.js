// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.titleV = title;
        this.uploaderV = uploader;
        this.timeV = time;
    }
    watch() {
        const watchV = `${this.uploaderV} watched all ${this.timeV} seconds of ${this.titleV}`;
        console.log(watchV);
    }
}

const newVideo = new Video("Titanic", "Ivan", 10);
newVideo.watch();

const catalog = [
    {title: "Hangover",
     uploader: "Jhon",
     time: 5},
     {title: "Storm",
     uploader: "Emma",
     time: 9},
     {title: "Limitless",
     uploader: "Dmitriy",
     time: 7}
];

catalog.forEach((el,index) => {
    (new Video(el["title"],el["uploader"],el["time"])).watch();
});