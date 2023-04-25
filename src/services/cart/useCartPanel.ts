//Creare la costante che rappresenta lo stato globale.
import {create} from "zustand";

export interface CarStateOverlay {
    //stato iniziale del pannello
    open: boolean,
    //azioni apertura e chiusura del pannello cart
    toggle: () => void,
    openOverlay: () => void;
    closeOverlay: () => void;
}

//create è una funzione che restituisce un oggetto con le proprietà e le azioni che servono
//per aggiornare lo stato.
//Set => scrive
//Get => legge
export const useCartPanel = create<CarStateOverlay>((set, get) => ({
    open: false,
    toggle: () => set({open: !get().open}),
    openOverlay: () => set({open: true}),
    closeOverlay: () => set({open: false}),

}))