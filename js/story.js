document.addEventListener("DOMContentLoaded", function() {
  const storyBeginsButton = document.getElementById('storyBeginsButton');
  const mainConflictButton = document.getElementById('mainConflictButton');
  const openingSceneButton = document.getElementById('openingSceneButton');
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');
  const modalText = document.getElementById('modalText');

  storyBeginsButton.addEventListener('click', () => {
    showModal("How the story begins", "The beginning of the plot sets up with the main character, " +
      "the passionate teacher, experiencing frustration and burnout from traditional teaching methods. " +
      "This frustration leads the teacher to explore game-based learning and eventually convince school administrators " +
      "to allow the teacher to try out the approach.<br><br>" +
      "However, the teacher faces resistance from colleagues who are skeptical of the effectiveness of game-based " +
      "learning, parents who are concerned about screen time and their children's academic performance, and even " +
      "students who may prefer traditional teaching methods. These obstacles can lead to conflicts and challenges that " +
      "the player must navigate and overcome to successfully introduce game-based learning into the classroom.");
  });

  mainConflictButton.addEventListener('click', () => {
    showModal("Main conflict", "Once upon a time in a small town, a group of students at the local high school " +
      "were struggling to engage with their education. The traditional teaching methods were not resonating with them, " +
      "and many were falling behind.<br><br>" +
      "One day, a new teacher arrived at the school with a revolutionary idea: to use games as a tool for education. " +
      "The teacher had a background in game design and was passionate about the potential for games to teach critical " +
      "thinking, problem-solving, and teamwork.<br><br>" +
      "The teacher began by introducing simple games into the classroom, like board games and puzzles, to get the " +
      "students used to the idea of learning through play. As the students became more comfortable, the teacher " +
      "introduced more complex games that required them to use higher-order thinking skills.<br><br>" +
      "The students quickly became engrossed in the games, and their grades began to improve. They were learning without " +
      "even realizing it, and the teacher was thrilled to see them making progress.<br><br>" +
      "However, not everyone was happy about the new approach. The more traditional teachers at the school saw the games " +
      "as a distraction from real learning, and some parents were skeptical about the value of games in education.");
  });

  openingSceneButton.addEventListener('click', () => {
    showModal("Opening Scene", "The screen fades in to a busy school hallway filled with students bustling to " +
      "their next class. We see our main character, an enthusiastic and innovative teacher named Sarah, weaving through " +
      "the crowd with a sense of purpose.<br><br>" +
      "Sarah stops at the door of the teachers' lounge, takes a deep breath, and opens the door. Inside, a group of " +
      "teachers sits at a table, talking and laughing. Sarah approaches them, hoping to start a conversation about " +
      "game-based learning.<br><br>" +
      "\"Hey guys, have you heard about game-based learning?\" Sarah asks, her voice bright with enthusiasm.<br><br>" +
      "One teacher rolls her eyes. \"Oh, not this again. What's the point of games in the classroom?\"<br><br>" +
      "\"They're engaging and interactive, and they help students retain information,\" Sarah replies, her voice becoming " +
      "more assertive. \"I've been using them in my classes, and the students love it.\"<br><br>" +
      "Another teacher chimes in. \"But what about the standards and curriculum? How do we make sure the students are " +
      "still learning what they need to?\"<br><br>" +
      "Sarah takes a deep breath, ready for the familiar argument. \"We can align the games with the curriculum and " +
      "standards, and make sure they're still learning the required content. And think about it - wouldn't you rather " +
      "have engaged and excited students in your classroom?\"<br><br>" +
      "The teachers exchange skeptical looks, but Sarah doesn't back down. She knows the benefits of game-based learning, " +
      "and she's determined to convince her colleagues. The tension in the room is palpable, but Sarah's passion for " +
      "this topic is evident.<br><br>" +
      "As the scene ends, Sarah steps out of the lounge, feeling a mixture of excitement and frustration. She knows that " +
      "introducing game-based learning into the school system won't be easy, but she's ready for the challenge. The " +
      "conflict between Sarah and her colleagues sets the stage for the game's core mechanics, as players must navigate " +
      "resistance and skepticism to successfully introduce game-based learning to the school system.");
  });

  closeModal.addEventListener('click', () => {
    closeModalFunction();
  });

  function showModal(title, text) {
    modalText.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    modal.style.display = 'block';
  }

  function closeModalFunction() {
    modal.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      closeModalFunction();
    }
  }
});

const scrollToTopLink = document.querySelector("header a");
scrollToTopLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
