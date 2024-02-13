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
                    "content": "Dear AI, I have a task for you. I'll provide you with the names of a couple. Your job is to craft a concise love poem in 6 lines, split into 3 stanzas, ensuring each line doesn't exceed 25 characters (this is crucial). Also ensure that after each stanza there should be two new line characters in valid html .Failure to comply will result in consequences. The poem should carry a subtle meaning related to their names, drawing inspiration from any language. It would be better if you can add some rhymes to the poem. Please include an emoji at the end of each stanza. Also, kindly replace all the new lines (that is \n) with html new line (which is <br>) before delivering the response."
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

        res.status(200).json({
            status: "success",
            message: "Love poem generated successfully",
            data: response.choices[0].message.content
        })
    } catch (err) {
        const message = err instanceof Error ? err.message : "error occurred";
        res.status(400).json({
            status: "error",
            message: message, data: err
        });
    }
})

export default indexRouter
