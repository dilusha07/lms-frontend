
import { getRequest,postRequest, deleteRequest} from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);

export const getBook = (id) => getRequest(`${BASE_URL}/${id}`);

export const addMember = (data) =>postRequest(`${BASE_URL}`, data);

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);