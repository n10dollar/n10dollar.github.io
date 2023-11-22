import general from "../data/general.json"

export function sortProjects(projects) {
    return projects.sort(compareProjectsDescending)
}

function compareProjects(proj1, proj2) {
    let proj1Val = proj1.year + general.months[proj1.month] / 13
    let proj2Val = proj2.year + general.months[proj2.month] / 13

    return proj1Val - proj2Val
}

function compareProjectsDescending(proj1, proj2) {
    let proj1Val = proj1.year + general.months[proj1.month] / 13
    let proj2Val = proj2.year + general.months[proj2.month] / 13

    return proj2Val - proj1Val
}

export function fetchText(URL, setVal) {
    import(`../data/text/${URL}`)
        .then(module => {
            const textData = module.default
            return fetch(textData)
        })
        .then(response => response.text())
        .then(textContext => {
            setVal(textContext)
            console.log(textContext)
        })
        .catch(error => console.log(error))
}