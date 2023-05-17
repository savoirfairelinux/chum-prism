import React, { useState } from "react"
import layoutStyles from "./layout.module.scss"

const Popup = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            {open &&
                (<div className={layoutStyles.modalIndex}>
                    <div className={layoutStyles.modalContent}>
                        <div className={layoutStyles.modalContentCloseWrapper}>
                            <div className={layoutStyles.modalContentClose} onClick={() => setOpen(false)}>&times;</div>
                        </div>
                        <div>
                            <div className={layoutStyles.modalTitle}>Attention !!!</div>
                            <p>Afin que votre demande soit acheminée à l'équipe d'intervenants, veuillez cliquer sur le bouton "Envoyer le formulaire" qui se situe à la fin du formulaire de référence en ligne PRISM. Si vous quittez le formulaire de référence avant de cliquer sur le bouton "Envoyer le formulaire", l'équipe ne sera pas informée de votre demande.</p>
                            <hr />
                            <div className={layoutStyles.modalTitle}>Attention !!!</div>
                            <p>In order for your service request to be forwarded to the service team, please click on the "Send the form" button located at the end of the PRISM online referral form. If you exit the online referral form before clicking the "Send the form" button, the team will not be notified of your service request.</p>
                        </div>
                    </div>
                </div>)
            }
        </>

    )
}

export default Popup;
