import React from 'react';
import memesData from '../memesData'

export default function Meme() {

    const [memImage, setMemImage] = React.useState('');

    function getMemeImage() {
       const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemImage(memesArray[randomNumber].url)

    }
return (
    <main>
        <div className= 'form'>
            <input
            type= 'text'
            placeholder= 'Top-text'
            className= 'form--input'
            />
            <input
                type= 'text'
                placeholder= 'Bottom text'
                className= 'form--input'
            />
            <button
                onClick={getMemeImage}
                className= 'form--button'>
                Get a new meme image
            </button>
        </div>
        <img src={memImage} className= 'meme--image'/>
    </main>
)
}