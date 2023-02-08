import React from "react"

const ServiceDownPopup = () => {
    const [language, setLanguage] = React.useState("en")

    React.useEffect(() => {
        if (localStorage.getItem("language") !== "") {
        setLanguage(localStorage.getItem("language"))
        }
    }, [])


    return (
        <div>
            <img src="/warning.svg" alt="Warning" width="10%" />
            <p>PRISM online referral service is not available from December 31 2022 to February 28 th 2023 for regular maintenance and upgrades. We apologize for the inconvinience.</p>
            <hr/>
            <p>Le service de référence en ligne PRISM n'est pas disponible du 31 décembre 2022 au 28 février 2023 en raison d'une maintenance et de mises à niveau. Nous nous excusons pour ce désagrément.</p>
        </div>
    )
}

export default ServiceDownPopup
