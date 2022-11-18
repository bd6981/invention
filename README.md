# Web of Inventions: Project #2
## Project Description
Have you ever had an idea and thought, 'I should invent that'? Web of Inventions is an Api driven database. We offer a free, user-friendly tool to search through 10 million Patents from the United States Patent and Trademark Office(USPTO). Future inventors like you, need a way to look up whats aready been done, or how they can do it differently. There are companies that will do patent searches for a charge. But, what if you dont want to pay someone a whole bunch of money just for them to tell you, "Whelp, cant do that." That's why WOI is here for you! Happy Searching My Friend!

## Project Links
- [GitHub Repo](https://github.com/bd6981/invention.git)
-TBD [Deployed Version](https://invention-mu.vercel.app/Home)
-TBD [Project Recording](https://youtu.be/Ie_kRsdioJw)

## Wireframes & React Component Hierarchy
***TBD
- [wireframes](wire.jpeg)
- [react architecture]()

Define the the React components and the architectural design of your app.


#### MVP EXAMPLE
- Client is presented a functional application
- The application utilizes an Api.
- The Api data rendering is functional.
- When utilizing the app, the client can request Api data.
- Render Api data on page. 
- Allow user to utilize basic functionality

#### PostMVP EXAMPLE

- On furthering with Mvp goals I would like to add a filtered section to add a material search and date search. Let's say I wanted to look up to see if there are any patients/inventions with this material. The client can type that into the material search box, they will then be taken to the results page which would display relevant data. This app would really help nerdy people like me that love inventions, but would also help people that are looking to create a patient but need to be sure it hasn't already been created

## User Stories
As a user, I want to see I a how-to on utilizing the search engine. 
As a user, I want to be able to have a clean Website to view when looking for the data.
As a user, I want to be able to click the search button and be displayed results.
As a user, I want to be able to view the info I search for. 



## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.


| Component | Description | 
| --- | :---: |   
| App | Contains data structure and include React Router| 
| Home | Contains Header and Search containers as well as being the Home base| 
| About | Contains the description of the site| 
| How-To | Conatins instructions on how to utilize the site|
| SearchBar | Contains SearchBar functionality|  
| Footer | Contains Git Repo| 

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Implementing Router structure | H | 3 hrs| 4hrs | 3hrs |
| Implementing Api | H | 4hrs| 15hrs | 15hrs |
| Filtering Api Data | H | 15hrs| 20hrs |
| Total | H | TBDhrs| TBDhrs | 38hrs |

## Issues and Resolutions
 The biggest issue that arose was implementing my api and having it render on the screen. I was missing a few key components that Alo and Jan helped me correct. I had a couple of elements backwards in my hook and with my .map. We consoled it out and and figured out how to correct it. once corrected the live search rendered api content.

#### SAMPLE.....
    let searchQuery = (text) => {
  if(!text) {
    setPatents([])
   
  }else{
  let matches = search.patents.filter((data) => {
    const regex = new RegExp(`${text}`, "gi");
    return data.patent_title.match(regex);
  });
  
  setPatents(matches)

};
}
