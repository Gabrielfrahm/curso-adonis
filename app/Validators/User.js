'use strict'

const Antl = use('Antl');

class User {
  get validateAll (){
    return true;
  }


  get rules () {
    return {
      // validation rules
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
    }
  }

  get messages () {
    return Antl.list('Validation')
  }
}

module.exports = User
