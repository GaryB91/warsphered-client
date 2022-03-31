
async function _fetch(url, method, data, auth) {

    try {
        const response = await fetch(url, {
          method: method,
          cache: 'no-cache',
          ...(auth && {headers: {'Authorization': `Bearer ${auth}`}}),
          ...(data && {body: data})
        });
        if (response.ok) {
          return await response.json();
        } else {
            throw Error("response not OK")
        }
      } catch (error) {
          throw Error(`Failed to make request: ${error.toString()}`);
      }
}
async function _get(url, auth=null) {
    return await _fetch(url, "GET", null, auth)
}
async function _post(url, data, auth=null) {
    return await _fetch(url, "POST", data, auth);
    
}

function get_client() {
    const baseUrl = "http://localhost:8000";
    let token = null;
    async function login(username, password) {
        const form = new FormData();
        form.append("username", username);
        form.append("password", password);
        
        const url = baseUrl + "/token";
        const response = await _post(url, form);
        token = response.access_token;
        return response;
    }
    function logout() {
        token = null;
    }
    function isLoggedIn() {
        return token != null;
    }

    async function me() {
        return await _get(baseUrl + "/users/me", token);
    }

    return {
        login,
        logout,
        isLoggedIn,
        me,
    };
}

export default get_client()