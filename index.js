// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Bryon",
//         dogBreed: "Poodle"
//     })
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (object) {
//         console.log(object)
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnorok!")
//         console.log(error.message)
//     })

function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify({
            name: username,
            email: useremail
        })
    })
    .then(res => res.json())
    .then(obj => document.body.append(obj.id))
    .catch(error => document.body.append(error.message))
}