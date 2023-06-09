import { isReady as wppIsReady } from "@/ports/whatsapp-js"; 

export const isReady = () => wppIsReady();