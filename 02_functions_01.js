function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`            
        case "subadmin":
            return `${name} is sub admin to create and delete access`            
        case "testprep":
            return `${name} is allow to create tests`            
        default:
            return `${name} is a trial user`            
    }
}
var getRole = getUserRole('chintu','userchintu')
console.log(getUserRole("dhanush","admin"));
console.log(getUserRole('sekhar','testprep'));
console.log(getRole);