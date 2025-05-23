import arcjet, {tokenBucket, shield, detectBot} from "@arcjet/node";

import "dotenv/config.js"

//init arcjet

export const aj = arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules:[
        // shield protects you app from common attacks eg.SQL injection, XSS, CSRF attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // block all the bots except search engine
            allow:[
                "CATEGORY:SEARCH_ENGINE"
                // see the full list at https://arcject.com/bot-list
            ]
        }),
        // rate limiting 

        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]
})