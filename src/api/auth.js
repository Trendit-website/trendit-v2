
import API from "../services/AxiosInstance";
import { formatError, showSuccess } from "../utilities/messagePopup";




// logout admin //EXAMPLE
export async function logoutAdminAction() {
    let data = await logoutAdmin()
        .then(async (response) => {
            showSuccess('sucess')
            return response.data;
        })
        .catch((error) => {
            formatError(error?.response?.data || 'invalid address!');
        });

    return data
}

const logoutAdmin = async () => {
    let resources = await API.delete('admin/logout')
    return resources;
}

// logout admin end




// login 
export async function loginUserAction(json) {
    let data = await loginUser(json)
        .then(async (response) => {
            showSuccess('successful login')
            return response.data;
        })
        .catch((error) => {
            formatError(error?.response?.data?.message || "Something went wrong");
        });

    return data
}

// login 
export async function signUpUserAction(json) {
    let data = await loginUser(json)
        .then(async (response) => {
            showSuccess('successful login')
            return response.data;
        })
        .catch((error) => {
            formatError(error?.response?.data?.message || "Something went wrong");
        });

    return data
}

const loginUser = async (data) => {

    const json = {
        "username":data?.username,
        "password":data?.password }
    let resources = await API.post('login/signin', json )
    return resources;
}
// login end