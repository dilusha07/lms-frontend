import { getRequest } from "./util";

const BASE_URL = "/book";

export const getBooks = () => getRequest(`${BASE_URL}`);

export const getbook = (id) => getRequest(`${BASE_URL}/${id}`);