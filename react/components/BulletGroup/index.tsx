import React, { PropsWithChildren } from "react"
import { BulletsSchema } from "./BulletTypes"
import { useDevice } from "vtex.device-detector"
import { useListContext, ListContextProvider } from "vtex.list-context"
import { getBulletsAsTSXList } from "./modules/bulletsAsList"
import { useCssHandles } from "vtex.css-handles"

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

  const CSS_HANDLES = ["bullet__container"]

  const handles = useCssHandles(CSS_HANDLES)
  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
          ?
          <div className={handles.bullet__container}>
            {bulletsContent}
          </div>
          :
          children
      }
    </ListContextProvider>
  )
}

export default BulletGroup