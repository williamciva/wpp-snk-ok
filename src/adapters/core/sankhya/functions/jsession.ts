import { getJSessionId, setJSessionId } from '@/core'

export const getJsessionId = (): string => getJSessionId()
export const setJsessionId = (jsessionid: string): boolean => setJSessionId(jsessionid)
