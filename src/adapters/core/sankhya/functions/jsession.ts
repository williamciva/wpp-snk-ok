import { getJSessionId as getJSessionIdCore, setJSessionId as setJsessionIdCore } from '@/core'

export function getJSessionId(): string { return getJSessionIdCore() }
export function setJSessionId(jsessionid: string): boolean { return setJsessionIdCore(jsessionid) }
