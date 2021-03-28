import HttpResource from "./http-resource";
import {api} from "./api";


const plansHttp = new HttpResource(api, "plans")

export default plansHttp