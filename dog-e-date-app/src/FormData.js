export default function GetFormData(e) {
    const data1 = {}
    let formKey
    const data = new FormData(e.target)
    for (let key of data.keys()) {
        formKey = `${key
            }`
        data1[formKey
        ] = data.get(key)
    }
    return data1
}
