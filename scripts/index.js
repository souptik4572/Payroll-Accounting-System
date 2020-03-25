const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const setupUI = (user) => {
  if(user){
    const html = `<div>Logged is as ${user.email}</div>`;
    accountDetails.innerHTML = html;
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else{
    accountDetails.innerHTML = '';
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}
const setupGuides = (data) => {
  if(data.length){
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${guide.Name}</div>
          <div class="collapsible-body white"><p>Wage:</p>\t\t\t${guide.Wage}</div>
          <div class="collapsible-body white"><p>Dearness Allowance:</p>\t\t\t${guide.dear}</div>
          <div class="collapsible-body white"><p>Project Allowance:</p>\t\t\t${guide.project}</div>
          <div class="collapsible-body white"><p>Rent Allowance:</p>\t\t\t${guide.rent}</div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  }
  else{
    guideList.innerHTML = '<h5 class="center-align">Login or SignUp to use the product and save your data</h5>';
  }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});