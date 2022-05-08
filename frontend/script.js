



fetch("https://api-getstories.herokuapp.com/getStories")
.then(res => res.json())
.then(stories => showStories(stories));

showStories = stories => {
  const storieDiv = document.querySelector('#data');
  stories.forEach(story => {
    const storyElement = document.createElement('div');
    storyElement.innerHTML= `<p>- ${story.title}</p><a href="${story.link}">View Full Artical...</a>`;
    storieDiv.append(storyElement);
  });
 
}

