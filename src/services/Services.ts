/* eslint-disable no-useless-catch */
import axios from "axios";
import { GeneratePoemRequestInterface } from "./Helper";

const instance = axios.create({
    baseURL: "https://love-verse.latenightcoders.site",
});

export const Services = {
    generatePoem: async ({ yourName, valentineName }: GeneratePoemRequestInterface) => {
        try {
             return await instance.get("/", {
                params: {
                    yourName,
                    valentineName,
                },
            });
        } catch (error) {
            // Handle error here
            throw error;
        }
    },
};
