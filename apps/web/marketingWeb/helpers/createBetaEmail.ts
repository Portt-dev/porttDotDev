import axios from 'axios'

const createBetaEmail = async (
  email: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (emailRegEx.test(email)) {
    try {
      // show the loading animation
      setLoading(true)
      await axios.get(`/api/invitation/${email}`)
      // if the user inputted a value email and we did not get an error, return true and show the toast
      return true
    } catch (error) {
      console.error(error) // we want to silently fail this
      return false // break out of function and not show the confirmation toast
    } finally {
      // set the loading to false
      setLoading(false)
    }
  }
  // return false if the user did not enter a valid email
  return false
}

export default createBetaEmail
