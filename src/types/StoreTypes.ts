export interface IUser {
    id: number
    login: string
    initials: string
    password: string
    governance: string
    department: string
    jobTitle: string
    efficiency: number
    rating: number
    activeProjects: number
    commandName: string | null
    phone: string | null
    commandId: number | null
}
