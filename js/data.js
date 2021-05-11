export async function fetchCreate(method, url, data = null) {

    try {
       return await fetch(url, {
            method,
            body: data,
        })
        .then(response => ifErr(response))
        .then(data => data.json())
    }
    catch (err) {
        console.log(err)
    }

    function ifErr(data) {
        if(!data.ok) {
            throw Error('something just went wrong')
        }
        return data
    }
}