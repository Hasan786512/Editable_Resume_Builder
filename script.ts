// Upload Profile Picture
function uploadProfilePic(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById('profile-pic') as HTMLImageElement;
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Save Contact Information
function saveContact(): void {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    alert(`Contact Saved:\nEmail: ${email}\nPhone: ${phone}`);
}

// Save Education Information
function saveEducation(): void {
    const degree = (document.getElementById('degree') as HTMLSelectElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    alert(`Education Saved:\nDegree: ${degree}\nUniversity: ${university}`);
}

// Save Experience
function saveExperience(): void {
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    alert(`Experience Saved:\nJob Title: ${jobTitle}\nCompany: ${company}`);
}

// Add Skills
function addSkill(): void {
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    if (skill) {
        const list = document.getElementById('skills-list') as HTMLUListElement;
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        list.appendChild(listItem);
        (document.getElementById('skill') as HTMLInputElement).value = '';
    } else {
        alert('Please enter a skill.');
    }
}

// Save Social Accounts
function saveSocial(): void {
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    alert(`Social Profiles Saved:\nLinkedIn: ${linkedin}\nGitHub: ${github}`);
}
