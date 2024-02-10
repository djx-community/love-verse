import { Router } from 'express'
import OpenAI from "openai";
import dotenv from 'dotenv'
dotenv.config()

const indexRouter = Router();

indexRouter.get('/', async function (req, res) {
    try {
        const { yourName, valentineName
        } = req.query
        if (!yourName || !valentineName)
            throw new Error("Your name and your valentine name are required")

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "I am going to assign you a task. From now on wards i will give you the names of a couple. You need to generate a small love poem in 6 lines divided into 3 stanza which do need to have a small meaning related to their name. You can try to process the meaning of the name from any langauge. and add emoji at the end of every stanza's"
                },
                {
                    "role": "user",
                    "content": `Can you generate a love poem for ${yourName} and ${valentineName}`
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        res.status(200).send(response.choices[0].message.content)
    } catch (err) {
        const message = err instanceof Error ? err.message : "error occurred";
        res.status(400).json({ message: message, data: err });
    }
})

export default indexRouter
