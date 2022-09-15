import React from "react"
import Bullet from "../Bullet"
import { BulletsSchema } from "../BulletTypes"

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullet: any, index) => {
    console.log("Mi bullets es", bullet)
    return <Bullet
      key={index}
      src={bullet.image}
      titleBullet={bullet.titleBullet}
      link={
        bullet.link
          ?
          bullet.link
          :
          {
            url: "",
            attributeNofollow: false,
            atributeTitle: "",
            openNewTab: false,
            newTab: false
          }
      }
    />
  })
)
