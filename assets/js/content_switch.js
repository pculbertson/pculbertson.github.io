document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.content-button');
  const contentSections = document.querySelectorAll('.content-section');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      // Hide all sections
      contentSections.forEach(section => {
        section.classList.add('d-none');
      });

      // Show the target section
      document.getElementById(`${target}-container`).classList.remove('d-none');

      // Update active button
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Programmatically click "Other" button
  document.getElementById('click-join-link').addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      document.querySelector('.content-button[data-target="join"]').click();
      document.querySelector(".join-container").scrollIntoView();
  });

  // Show default content (e.g., publications)
  document.getElementById('highlights-container').classList.remove('d-none');
  buttons[0].classList.add('active');
});
