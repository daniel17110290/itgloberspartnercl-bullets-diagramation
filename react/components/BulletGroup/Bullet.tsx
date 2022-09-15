import React from "react"
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes"
//import {useCssHandles} from "vtex.css-handles"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  console.log("datos para mi bullet:", src, titleBullet, link)
  return (
    <div>
      <Link
        to={link.url}
      >
        <p>Mi imagen {src}</p>
        <p>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "imagen de bullet",
      type: "string",
      widget: {
        "ui-widget": "image-uploader"
      }
    }
  }
}

export default Bullet

