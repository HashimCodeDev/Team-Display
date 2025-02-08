document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            member.classList.add('show-details');
        });

        const closeBtn = member.querySelector('.close-details');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            member.classList.remove('show-details');
        });
    });
});