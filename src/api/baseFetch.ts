const ip = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev`;

interface baseFetchProps {
    url: string,
    method: "GET" | "POST" | "PUT" | "POST",
    body?: any
}
const baseFetch = async (props: baseFetchProps) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    try {
        const res = await fetch(`${ip}${props.url}`, {
            method: props.method,
            body: JSON.stringify(props.body),
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        })
        if (res.ok === false)
            throw new Error(await res.text());

        return await res.json();
    } catch (e) {
        console.log("[baseFetch error]", e)
    } finally {
        clearTimeout(timeoutId)
    }
}

export default baseFetch;