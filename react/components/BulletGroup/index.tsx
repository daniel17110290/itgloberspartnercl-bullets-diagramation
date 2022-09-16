import React, { PropsWithChildren } from "react"
import { BulletsSchema } from "./BulletTypes"
import { useDevice } from "vtex.device-detector"
import { useListContext, ListContextProvider } from "vtex.list-context"
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
  const newListContextValue = list.concat(bulletsContent)

  if (false) {
    console.log(children, list)
  }

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
          ?
          <div>{bulletsContent}</div>
          :
          children
      }
    </ListContextProvider>
  )
}

export default BulletGroup