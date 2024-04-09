const BASE_URL = "http://leaemerlyn.pythonanywhere.com"

export async function getGraph (selectCountries){

    const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(selectCountries),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const stuff = await response.text()

    return stuff
}