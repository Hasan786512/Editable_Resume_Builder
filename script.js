// Upload Profile Picture
function uploadProfilePic(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var img = document.getElementById('profile-pic');
            img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Save Contact Information
function saveContact() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    alert("Contact Saved:\nEmail: ".concat(email, "\nPhone: ").concat(phone));
}
// Save Education Information
function saveEducation() {
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    alert("Education Saved:\nDegree: ".concat(degree, "\nUniversity: ").concat(university));
}
// Save Experience
function saveExperience() {
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    alert("Experience Saved:\nJob Title: ".concat(jobTitle, "\nCompany: ").concat(company));
}
// Add Skills
function addSkill() {
    var skill = document.getElementById('skill').value;
    if (skill) {
        var list = document.getElementById('skills-list');
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        list.appendChild(listItem);
        document.getElementById('skill').value = '';
    }
    else {
        alert('Please enter a skill.');
    }
}
// Save Social Accounts
function saveSocial() {
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    alert("Social Profiles Saved:\nLinkedIn: ".concat(linkedin, "\nGitHub: ").concat(github));
}
