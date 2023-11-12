module.exports = (res, status, props) => {

    const data = {
        error: {
            code: status,
        },
    }

    if (status === 200) {
        data.data = props
        if (Array.isArray(props)) data.count = props.length
    }

    // Bad Request
    if (status === 400) data.error.message = "The request was unacceptable, often due to an incorrect query string parameter."

    // Request Failed
    if (status === 402) data.error.message = "The parameters were valid but the request failed."

    // Forbidden
    if (status === 403) data.error.message = "The user doesn't have permissions to perform the request."

    // Not Found
    if (status === 404) data.error.message = "The requested resource doesn't exist."

    // The requested resource doesn't exist.
    if (status === 429) data.error.message = "The rate limit has been exceeded."

    // Server Errors
    if ([500, 502, 503, 504].includes(status)) data.error.message = "Something went wrong on our end."

    if (!data.error.message) delete data.error

    return res.json(data)

}