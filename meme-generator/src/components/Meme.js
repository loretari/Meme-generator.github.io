import React from 'react';
import memesData from '../memesData'

export default function Meme() {

    function getMemeImage() {
       const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
return (
    <main>
        <form className= 'form'>
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
                Get a new name image
            </button>
        </form>
    </main>
)
}