var listItems = document.querySelector('.links-list-items');
var videoContainer = document.querySelector('#videoWraper');


listItems.addEventListener('click', e => {
  var info = e.target.textContent.trim();
  console.clear();
  console.log(info);
  switch(info) {
      
  case 'Intro and Setup':
    videoContainer.setAttribute('src', 'https://www.youtube.com/embed/x1rQ61otgtU'); 
    break;
      
  case 'UseQuery hook':
   videoContainer.setAttribute('src', 'https://www.youtube.com/embed/yccbCol546c'); 
    break;
      
  case 'React Query Dev tools':
   videoContainer.setAttribute('src', 'https://www.youtube.com/embed/-i3ZQP1yPEs'); 
    break;
      
  case 'Query Variables':
   videoContainer.setAttribute('src', 'https://www.youtube.com/embed/QwF7-K106eQ'); 
    break;
      
  case 'Pagination':
   videoContainer.setAttribute('src', 'https://www.youtube.com/embed/K8kgh5C3WP8'); 
    break;
      
  default:
    videoContainer.setAttribute('src','https://www.youtube.com/embed/x1rQ61otgtU');
    break;
  }
  
});