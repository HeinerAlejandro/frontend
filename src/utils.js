const getCookie = (name) => {

    var cookieValue = null
    
    if(document.cookie && document.cookie !== ''){

        const cookies = document.cookie.split(';')

        for(let i = 0; i < cookies.length; i++) {

            let cookie = cookies[i].trim()
            console.log(cookie)
            if(cookie.substring(0, name.length + 1) === (name + '=')){

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue
}

export { getCookie };