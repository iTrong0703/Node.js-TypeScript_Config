type Handle = () => Promise<string>
const fullname = 'Nguyen Thanh Trong'

const handle: Handle = () => Promise.resolve(fullname)

handle().then(console.log)
