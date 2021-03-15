
const imageSpace=document.getElementById('imagesSpace');
const firstImage=document.getElementById('firstImage');
const secondImage=document.getElementById('secondImage');
const thirdImage=document.getElementById('thirdImage');


let picNames=[
  'bag','banana','bathroom','boots','breakfast','bubblegum',
  'chair','cthulhu',
  'dog-duck','dragon',
  'pen','pet-sweep',
  'scissors','shark','sweep',
  'tauntaun',
  'unicorn','usb',
  'water-can','wine-glass'];

// let countr=0;
// let totalViews=0;

function SalesImages(name){
  this.name=name;
  this.views=0;
  this.path=`./img/${name}.jpg`;


  SalesImages.all.push(this);
}
SalesImages.all=[];

for(let i=0;i<picNames.length;i++){
  new SalesImages(picNames[i]);
}


function render(){
  //pick a random index to the first image.
  const firstIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const firstRandomImage=SalesImages.all[firstIndex];

  //a the pathe and the name to the image
  firstImage.src=firstRandomImage.path;
  firstImage.title=firstRandomImage.name;

  //pick a random index to the second image.
  const secondIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const secondRandomImage=SalesImages.all[secondIndex];

  //a the pathe and the name to the image
  secondImage.src=secondRandomImage.path;
  secondImage.title=secondRandomImage.name;

  //pick a random index to the second image.
  const thirdIndex=randomNumOfPic(0,SalesImages.all.length-1);
  const thirdRandomImage=SalesImages.all[thirdIndex];

  //a the pathe and the name to the image
  thirdImage.src=thirdRandomImage.path;
  thirdImage.title=thirdRandomImage.name;
}

function namimageVotee(event) {
  // while (countr!==SalesImages.all.length) {
  //   if (event.target.id === 'firstImage'){
  //     for(let i=0;i<6;i++){
  //       if (SalesImages.all[i].name === event.target.title){
  //         SalesImages.all.views++;
  //         totalViews++;
  //         countr++;
  //       }
  //     }
  //     console.log(SalesImages.all.views);
  //     console.log(totalViews);
  //   }
  // }
// }


  let firstimagep=document.getElementById('firstimagep');
  if (event.target.id === 'firstImage'){
    for(let i=0;i<6;i++){
      if (SalesImages.all[i].name === event.target.title){
        SalesImages.all[i].views++;
      }
      let unodrederList=document.createElement('ul');
      let List=document.createElement('li');
      firstimagep.appendChild(unodrederList);
      unodrederList.appendChild(List);
      List.textContent=SalesImages.all[i].name +': '+SalesImages.all[i].views;
      console.log(SalesImages.all.views);
      render();
    }
  }
  let secondImagep=document.getElementById('secondImagep');
  if (event.target.id === 'secondImage'){
    for(let i=0;i<6;i++){
      if (SalesImages.all[i].name === event.target.title){
        SalesImages.all[i].views++;
      }
      let unodrederList=document.createElement('ul');
      let List=document.createElement('li');
      secondImagep.appendChild(unodrederList);
      unodrederList.appendChild(List);
      List.textContent=SalesImages.all[i].name +': '+SalesImages.all[i].views;
      console.log(SalesImages.all.views);

    }
    render();
  }
  let thirdImagep=document.getElementById('thirdImagep');
  if (event.target.id === 'firstImage'){
    for(let i=0;i<6;i++){
      if (SalesImages.all[i].name === event.target.title){
        SalesImages.all[i].views++;
      }
      let unodrederList=document.createElement('ul');
      let List=document.createElement('li');
      thirdImagep.appendChild(unodrederList);
      unodrederList.appendChild(List);
      List.textContent=SalesImages.all[i].name +': '+SalesImages.all[i].views;
      console.log(SalesImages.all.views);

      render();
    }
  }
}
function randomNumOfPic(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
render();

imageSpace.addEventListener('click',namimageVotee);
