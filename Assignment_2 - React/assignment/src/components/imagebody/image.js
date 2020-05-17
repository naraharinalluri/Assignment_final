import React, { Component } from 'react';
import styles from "./image.module.css"

class Image extends Component {
    render() {
        return (

            <div className={styles.images}>

                <img id={styles.imgg} className="img-fluid" src="./Capture1.png" alt="" />

            </div>

        );
    }
}

export default Image;