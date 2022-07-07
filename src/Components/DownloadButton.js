import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import axios from 'axios'
import "./DownloadButton.css"

export default function DownloadButton(props) {

    const hoverRef = useRef(null);

    function onDropDownHover(e) {
        hoverRef.current.style.display = "block";
    }

    function onDropDownLeave(e) {
        hoverRef.current.style.display = null;
    }

    function onLinkClick(e, url, newTab) {
        e.preventDefault();
        if(newTab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }

    function downloadGithubRelease(e, path) {
        e.preventDefault();
        axios.get(`https://api.github.com/repos/${path}/releases/latest`).then(res => {
            if(res.data) {
                window.location.href = res.data.assets[0].browser_download_url;
            }
        });
    }

  return (
    <div className="downloadButton" style={{backgroundColor: props.color }}>
        <div className="download" onClick={ (e) => { props.githubPath ? downloadGithubRelease(e, props.githubPath) : onLinkClick(e, props.url, false) }}>
            <p> {props.name} </p>
        </div> 
        { props.dropdown ?
            <div className="dropdownButton" onMouseOver={onDropDownHover} onMouseLeave={onDropDownLeave}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            : null
        }
        { props.dropdown ?
            <div className="dropdownContent" ref={hoverRef}>
                {
                    props.dropdown.map((item, index) => {
                        return (
                            <div className='dropdownItem' key={index} onClick={ (e) => onLinkClick(e, item.url, true) }>
                                <p> {item.name} </p>
                            </div>
                        )
                    })
                }
            </div>
            : null
        }
    </div>
  )
}
