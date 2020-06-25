const hostName = window && window.location && window.location.hostname;
let env = "";
let environmentName = "";
let movieAPI = "";

if (hostName === "localhost") {
    movieAPI = "http://localhost:5000";
    env = "localhost";
    // movieAPI = "https://ntflx-collection-api.herokuapp.com";
    environmentName = "UAT Environment";
}

if (hostName === "ntflx-collection.herokuapp.com") {
    env = "UAT";
    movieAPI = "https://ntflx-collection-api.herokuapp.com";
    environmentName = "UAT Environment";
}

export const APIs = {
    movieAPI,
    env,
    environmentName,
};