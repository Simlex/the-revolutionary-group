import { SetStateAction, Dispatch } from "react"

export interface PageProps {
    isDonationPopupVisible: boolean, 
    setIsDonationPopupVisible: Dispatch<SetStateAction<boolean>> 
  }