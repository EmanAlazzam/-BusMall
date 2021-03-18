//get the id for the images to generate them.
const imageSpace=document.getElementById('imagesSpace');
const firstImage=document.getElementById('firstImage');
const secondImage=document.getElementById('secondImage');
const thirdImage=document.getElementById('thirdImage');

//git the id for the button and the imang's chart
let buttonId=document.getElementById('ShowList');
let chartid = document.getElementById('chartid').getContext('2d');

const secondButton=document.getElementById('secondButton');
//A constructer function.
function SalesImages(url,name){
  this.name=name;
  this.votes=0;
  this.view=0;
  this.totalViews=0;
  this.imgURL=url;

  //this to push the attriput to global array by calling it all "all is just a name you can change it".
  SalesImages.all.push(this);
}

//declearing the Array.
SalesImages.all=[];

//to generat the random image.
function randomNumOfPic(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//new attribut depending on the name of the image here i just sent the names and their extention.
new SalesImages('./img/bag.jpg', 'bag');
new SalesImages('./img/banana.jpg', 'banana');
new SalesImages('./img/bathroom.jpg', 'bathroom');
new SalesImages('./img/boots.jpg', 'boots');
new SalesImages('./img/breakfast.jpg', 'breakfast');
new SalesImages('./img/bubblegum.jpg', 'bubblegum');
new SalesImages('./img/chair.jpg', 'chair');
new SalesImages('./img/cthulhu.jpg', 'cthulhu');
new SalesImages('./img/dog-duck.jpg', 'dog-duck');
new SalesImages('./img/dragon.jpg', 'dragon');
new SalesImages('./img/pen.jpg', 'pen');
new SalesImages('./img/pet-sweep.jpg', 'pet-sweep');
new SalesImages('./img/scissors.jpg', 'scissors');
new SalesImages('./img/shark.jpg', 'shark');
new SalesImages('./img/sweep.png', 'sweep');
new SalesImages('./img/tauntaun.jpg', 'tauntaun');
new SalesImages('./img/unicorn.jpg', 'unicorn');
new SalesImages('./img/usb.gif', 'usb');
new SalesImages('./img/water-can.jpg', 'water-can');
new SalesImages('./img/wine-glass.jpg', 'wine-glass');


//first counter being declear to use later for counting some things
let countr=25;

//function to pic a random image each time the user click and append the images into three seperet places in html.
function render(){
  //pick a random index to the first image.
  const firstIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const firstRandomImage=SalesImages.all[firstIndex];
  SalesImages.all[firstIndex].view++;
  ImagesViews.push(SalesImages.all[firstIndex].view);

  //pick a random index to the second image.
  const secondIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const secondRandomImage=SalesImages.all[secondIndex];
  SalesImages.all[secondIndex].view++;
  ImagesViews.push(SalesImages.all[secondIndex].view);

  //pick a random index to the second image.
  const thirdIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const thirdRandomImage=SalesImages.all[thirdIndex];
  SalesImages.all[thirdIndex].view++;
  ImagesViews.push(SalesImages.all[thirdIndex].view);


  if(secondRandomImage!==firstRandomImage && thirdRandomImage!==secondRandomImage && firstRandomImage !== thirdRandomImage){
  //a the pathe and the name to the image
    firstImage.src=firstRandomImage.imgURL;
    firstImage.title=firstRandomImage.name;

    //a the pathe and the name to the image
    secondImage.src=secondRandomImage.imgURL;
    secondImage.title=secondRandomImage.name;

    //a the path and the name to the image
    thirdImage.src=thirdRandomImage.imgURL;
    thirdImage.title=thirdRandomImage.name;

  }
}
//the function to run the images.
function runningTheImages(event) {
  if (event.target.id === 'firstImage' || event.target.id === 'secondImage' ||event.target.id === 'thirdImage'){
    countr--;//first counter been used for counting the number of clicking.

    for(let i=0;i<SalesImages.all.length;i++){

      // SalesImages.all[i].view++;//calculat the views
      // ImagesViews.push(SalesImages.all[i].view);

      if (SalesImages.all[i].name === event.target.title){
        SalesImages.all[i].votes++;//calculat the vote for each image
        // imagesVotes[i].push(SalesImages.all[i].votes);

        //pushing all of the votes and names into their arrayes so that I can use them globaly.
        // ImagesName.push(SalesImages.all[i].name);
        imagesVotes.push(SalesImages.all[i].votes);

        // SalesImages.all.totalViews = SalesImages.all.totalViews + SalesImages.all[i].votes;

        //checking things
        console.log(SalesImages.all[i].view);
        console.log(SalesImages.all[i].votes);
        console.log(countr);
        console.log(SalesImages.all[i].totalViews);
      }
    }
    //this to check if the number of clicking is 25 or less.
    if (countr >0) {
      render();
    }
    //to remove the clicking the counter reach 25.
    else {
      removeEventListener('click', runningTheImages);
      localStorage.setItem('Keies', JSON.stringify(SalesImages.all));
      // createChart();
    }
  }
}
//the votes and names arrayes to use them globaly.
let ImagesName=['bag','banana','bathroom','wine-glass','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can'];
let imagesVotes=[];
let ImagesViews=[];

//Chart function.
function createChart(){
  Chart.defaults.global.defaultFontFamily='lato';
  Chart.defaults.global.defaultFontSize=15;
  Chart.defaults.global.defaultFontColor='#00004d';


  for(let i=0;i<SalesImages.all[i].length;i++){
    imagesVotes.push(SalesImages.all[i].name);
    console.log(SalesImages.all[i].votes);
  }
  console.log(imagesVotes);

  for(let i=0;i<SalesImages.all[i].length;i++){
    ImagesViews.push(SalesImages.all[i].view);
    console.log(SalesImages.all[i].view);
  }
  console.log(imagesVotes);
  //chart object.
  let chartObject=new Chart(chartid,{
    type: 'bar',//different types of Charts: bar , horizontalBar, pie, line, doughnuts, radar

    data: {
      labels:ImagesName,
      datasets: [{
        label: 'Images Options Votes',
        backgroundColor:'#ff9999',
        borderWidth:1,
        // borderColor: '#00004d',
        hoverBorderWidth:3,
        hoverBorderColor:'#4d0026',
        data: imagesVotes,
      },
      {
        label: 'Images Options Views',
        backgroundColor:'#4d4d00',
        borderWidth:1,
        // borderColor: '#00004d',
        hoverBorderWidth:3,
        hoverBorderColor:'#660033',
        data: ImagesViews,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    }
  });
}

console.log(localStorage);

//call the appended imaged.
render();

//Adding the click event
imageSpace.addEventListener('click',runningTheImages);
buttonId.addEventListener('click',createChart);
buttonId.addEventListener('click',dataStore);

//get storeged Data from Local Storge
function dataStore() {
  let dataNew = localStorage.getItem('Keies');
  console.log(dataNew);

  if (dataNew){
    const updatedData=JSON.parse(dataNew);
    SalesImages.all=updatedData;
    console.log(updatedData);
}
  // convert the data (array) from a string to Object
  return JSON.parse(dataNew);
}

dataStore();
