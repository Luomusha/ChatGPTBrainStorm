import { SPARK_HOST, SPARK_VERSION } from "@/common/config";
import { sparkAuthorization, sparkRequest } from "@/common/util";
import assert from "assert";

export async function GET(req: Request) {

    const authorization = sparkAuthorization()
    assert(SPARK_HOST)
    const param = new URLSearchParams({
        "authorization": authorization,
        "date": new Date().toUTCString(),
        "host": SPARK_HOST
    })

    const ws = new WebSocket(`ws://${SPARK_HOST}/${SPARK_VERSION}/chat?${param}`);
    const request = sparkRequest()

    ws.onopen = () => {
        ws.send(JSON.stringify(request))
    }

    ws.onmessage = (data) => {
        console.log(data)
    }
    return new Response(authorization);
}