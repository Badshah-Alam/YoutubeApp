import React from 'react'
import Button from './Button'


// const list=["All", "Live","Gamming"]
const ButtonList = () => {
  return (
    <div className='flex'>
  <Button name="Gamming"/>
  <Button name="Songs"/>
  <Button name="Live"/>
  <Button name="soccer"/>
  <Button name="Cricket"/>
  <Button name="Valentines"/>
  <Button name="Cooking"/>
  <Button name="News"/>

    </div>
  )
}

export default ButtonList
