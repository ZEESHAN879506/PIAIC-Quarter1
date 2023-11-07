/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ['irfan908', 'ahmed890', 'ahsan675', 'ikram676', 'hasan453'];
var new_users = ['aaliyan564', 'ahmed890', 'saif345', 'ikram676', 'bilal563'];
var currentUsersLower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newuser = new_users_1[_i];
    newuser = newuser.toLowerCase();
    var found = false;
    for (var _a = 0, currentUsersLower_1 = currentUsersLower; _a < currentUsersLower_1.length; _a++) {
        var currentUser = currentUsersLower_1[_a];
        if (currentUser === newuser)
            found = true;
    }
    if (found)
        console.log("The username ".concat(newuser, " already taken.Please choose a new user_name."));
    else
        console.log("The username ".concat(newuser, " is available."));
}
