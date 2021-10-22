import React from 'react'
import { languageContext } from '../pages/_app'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

export default function DownloadButton({link, children}) {
    const [lang, setLang] = useContext(languageContext)
    return (
        <a style={{textDecoration: "none"}} href={"/content/mtd_graphics.rar"} download>
        <div download className="download-button">
            <div className="download-button--left">
                <FontAwesomeIcon icon={faCloudDownloadAlt}/>
            </div>
            <div className="download-button--right">
                <span>{lang === "en" ? "Download" : "Ladda ned"}</span>
            </div>
        </div>
        </a>
    )
}
