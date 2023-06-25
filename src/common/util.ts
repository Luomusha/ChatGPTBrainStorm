import assert from "assert"
import { SPARK_API_KEY, SPARK_API_SECRET, SPARK_APP_ID, SPARK_HOST, SPARK_VERSION } from "./config"
import { createHmac } from "crypto"

export const sparkAuthorization = (): string => {
    const currentTime = new Date().toUTCString()
    console.log("time", currentTime)

    const tmp = `host: ${SPARK_HOST}
date: ${currentTime}
GET /${SPARK_VERSION}/chat HTTP/1.1`
    assert(SPARK_API_SECRET, "SPARK_API_SECRET is required")
    const hmac = createHmac('sha256', Buffer.from(SPARK_API_SECRET, 'utf8'));
    hmac.update(Buffer.from(tmp, 'utf8'));
    const hash = hmac.digest();
    const signature = hash.toString("base64")
    const authorization_origin = `api_key="${SPARK_API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`
    const authorization = Buffer.from(authorization_origin).toString("base64")

    return authorization
}

export const sparkRequest = () => {
    return {
        "header": {
            "app_id": SPARK_APP_ID,
            "uid": "12345"
        },
        "parameter": {
            "chat": {
                "domain": "general",
                "temperature": 0.5,
                "max_tokens": 1024,
            }
        },
        "payload": {
            "message": {
                "text": [
                    { "role": "user", "content": "你是谁" }, // 用户的历史问题
                    { "role": "assistant", "content": "....." },  // AI的历史回答结果
                    { "role": "user", "content": "你会做什么" }  // 最新的一条问题，如无需上下文，可只传最新一条问题
                ]
            }
        }
    }
}