export const displayImage = (photo: string | undefined, fname: string, lname: string): string => {
  return photo ? `${process.env.REACT_APP_BACKEND_BASE_URL}image/${photo}`
    : `https://avatars.dicebear.com/api/bottts/:${fname}${lname}.svg?b=bbbbbb`
}
