
//get the id for the images to generate them.
const imageSpace=document.getElementById('imagesSpace');
const firstImage=document.getElementById('firstImage');
const secondImage=document.getElementById('secondImage');
const thirdImage=document.getElementById('thirdImage');

//git the id for the button and the imang's name list
let buttonId=document.getElementById('ShowList');
let imageList=document.getElementById('imageb');

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

  //a the pathe and the name to the image
  firstImage.src=firstRandomImage.imgURL;
  firstImage.title=firstRandomImage.name;

  //pick a random index to the second image.
  const secondIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const secondRandomImage=SalesImages.all[secondIndex];

  //a the pathe and the name to the image
  secondImage.src=secondRandomImage.imgURL;
  secondImage.title=secondRandomImage.name;

  //pick a random index to the second image.
  const thirdIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const thirdRandomImage=SalesImages.all[thirdIndex];

  //a the path and the name to the image
  thirdImage.src=thirdRandomImage.imgURL;
  thirdImage.title=thirdRandomImage.name;
}

//the function to run the images.
function runningTheImages(event) {
  if (event.target.id === 'firstImage' || event.target.id === 'secondImage' ||event.target.id === 'thirdImage'){
    countr--;//first counter been used for counting the number of clicking.
    for(let i=0;i<SalesImages.all.length;i++){

      if (SalesImages.all[i].name === event.target.title){
        SalesImages.all[i].votes++;//calculat the vote for each image

        SalesImages.all[i].view++;//calculat the views
        SalesImages.all.totalViews = SalesImages.all.totalViews + SalesImages.all[i].votes;

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
    }
  }
}


//second counter being declear to use later for counting some things
// let countr2=0;

//this to show the list of selected products
function showList() {
  for(let i=0;i<SalesImages.all.length;i++){
    // countr2++;

    //creating the unordered list banana had 3 votes, and was seen 5 times.
    let unodrederList=document.createElement('ul');
    let List=document.createElement('li');

    List.textContent=SalesImages.all[i].name +' had '+SalesImages.all[i].votes + ', and was seen ' + SalesImages.all[i].view + ' times.';
    console.log(List);

    //append the elemens to each other.
    imageList.appendChild(unodrederList);
    unodrederList.appendChild(List);

  }
  //creating the unordered list banana had 3 votes, and was seen 5 times.
  let unodrederList=document.createElement('ul');
  let List=document.createElement('li');

  List.textContent='The total of voted images '+ SalesImages.all.totalViews;
  console.log(List);

  //append the elemens to each other.
  imageList.appendChild(unodrederList);
  unodrederList.appendChild(List);

}


//call the appended imaged.
render();

//Adding the click event
imageSpace.addEventListener('click',runningTheImages);
buttonId.addEventListener('click',showList);

