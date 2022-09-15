import React, { PropsWithChildren } from "react"
import { BulletsSchema } from "./BulletTypes"
import { useDevice } from "vtex.device-detector"
import { useListContext } from "vtex.list-context"
import { getBulletsAsTSXList } from "./modules/bulletsAsList"

export interface BulletsGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletsGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []


  console.log("Bullets", bullets)

  const bulletsContent = getBulletsAsTSXList(bullets)

  if (false) {
    console.log(children, list)
  }

  return (
    isMobile
      ?
      <div>Aqui estamos en mobile</div>
      :
      <div>{bulletsContent}</div>
  )
}

export default BulletGroup