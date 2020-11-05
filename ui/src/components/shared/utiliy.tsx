
export const FetchData = async (num: number, type : string) => {
    var url: string = `http://localhost:3001/api/math/${type}/${num}`;
    // const response= await fetch(url)
    // const data = await response.json()
    // return data.result

    const retRes = await fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            return data.result
        })
        .catch(function(){
            return 'Not supported'
        })

    return retRes
}