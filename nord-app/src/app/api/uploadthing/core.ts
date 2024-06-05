import { currentUser } from "@clerk/nextjs";

async function postPDFUrl(userId: string) {
    console.log("userId", userId);
    const res = fetch(`http:172.18.0.4:3001/chunk`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "userId": userId }),
    });
}