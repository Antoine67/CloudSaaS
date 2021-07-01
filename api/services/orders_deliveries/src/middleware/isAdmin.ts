export default function isAdmin(jwt: any) : boolean { 
    return jwt.roleIdentifier == "ceseat-technic"
}