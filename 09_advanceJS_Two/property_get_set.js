function User(Name, email){
    this._Name = Name;
    this._email = email;

    // console.log(this);
    Object.defineProperty(this, 'email', {
       get: function(){
        return `${this._email}@gmail.com`
       },
       set: function(value){
        this._email = value;
       }
    })
}
const details = new User('Yash', 'rajputyash8561')
console.log(details.email);