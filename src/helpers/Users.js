import jsonwebtoken from 'jsonwebtoken'
import Promise from 'bluebird'

const {signAsync} = Promise.promisifyAll(jsonwebtoken)

export const sign = User => signAsync({_id: User._id, email: User.email, name: User.name}, 'blackGoku', {})
