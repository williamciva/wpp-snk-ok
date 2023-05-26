import { Login } from "./login"

export type RequestBody =
    undefined |
    Login
    

export type Body = {
    requestBody: RequestBody
}