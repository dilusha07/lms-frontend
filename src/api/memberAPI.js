export const getMembers = () =>[
    {id: "1", name: "Isuru Dharamadasa"},
    {id: "2", name: "Kssara Gamlath"},

];


import { getRequest} from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(BASE_URL);