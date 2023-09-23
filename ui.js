class UI {
  constructor() {
    this.profileDiv = document.getElementById("profile");
    this.repoDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.cardBody = document.querySelector(".card-body");
  }

  clearInput() {
    this.inputField.value = "";
  }

  showUserInfo(user) {
    this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="${user.html_url}" target="_blank">
                        <img class="img-fluid mb-2"
                            src="${user.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong>${user.name}</strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-warning">
                        Followers <span class="badge badge-light">${user.followers}</span>
                    </button>
                    <button class="btn btn-info">
                        Following <span class="badge badge-light">${user.following}</span>
                    </button>
                    <button class="btn btn-success">
                        Repos Count <span class="badge badge-light">${user.public_repos}</span>
                    </button>
                    <hr>
                    <li class="list-group d-flex">
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-auto" style="width: 30px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                            <span id="company">${user.company}</span>
                        </li>
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-auto" style="width: 30px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        <span id="location">${user.location}</span>
                        </li>
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-auto" style="width: 30px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span id="email">${user.email}</span>
                        </li>
                    </li>
                </div>
            </div>
        </div> `;
  }

  showRepoInfo(repos) {
    this.repoDiv.innerHTML = "";

    repos.forEach(repo => {
      this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-2">
                        <a href="${repo.html_url}" target="_blank" id = "repoName">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-danger">
                            Stars <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                        </button>
                        <button class="btn btn-dark">
                            Forks <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                        </button>
                    </div>
                </div>
            </div> `;
    });
  }

  showError(message) {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = message;
    this.cardBody.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  addSearchedUserToUI(username) {
    let users = Storage.getSearchedUsersFromStorage();

    if (users.indexOf(username) === -1) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = username;
      this.lastUsers.appendChild(li);
    }
  }

  clearAllSearchedFromUI() {
    this.lastUsers.innerHTML = "";
  }
}
