import { connect } from "mongoose";
import { environment } from "../environments/environment";

export const databaseConnect = async () => {
    try {
        await connect(environment.apiURI!);
        console.log("Conexão bem sucedida!");
    } catch (error) {
        console.log(error);
    }
}