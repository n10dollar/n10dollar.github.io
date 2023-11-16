import {useEffect} from "react"

function TitleWrapper({component: Component, title}) {
    useEffect(() => {
        document.title = title
      }, [title]);

    return <Component />
}

export default TitleWrapper