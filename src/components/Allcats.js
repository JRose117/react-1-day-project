// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const Allcats = () => {
//   const [errors, setErrors] = useState(false)
//   const [catsId, setCatsId] = useState([])
//   const [cats, setCats] = useState([])

//   useEffect(() => {
//     const getCatData = async () => {
//       try {
//         const { data } = await axios.get('https://cataas.com/api/cats')
//         setCatsId(data)
//       } catch (err) {
//         console.log(err)
//         setErrors(true)
//       }
//     }
//     getCatData()
//   }, [])

//   useEffect(() => {
//     const getData = async (_id) => {
//       try {
//         const { data } = await axios.get(`https://cataas.com/cat/${_id}`)
//         setCats(prevCats => [...prevCats, { _id, data }])
//       } catch (err) {
//         console.log(err)
//         setErrors(true)
//       }
//     }

//     catsId.forEach(cat => {
//       getData(cat._id)
//     })
//   }, [catsId])

//   return (
//     <>
//       { cats.map(cat => {
//         const { _id, data } = cat
//         console.log(_id)
//         console.log(data)
//         return (
//           <img
//             src={data}
//             alt={`Cat image ${_id}`}
//             key={_id}
//           />
//         )
//       }) }
//     </>
//   )

// }
// export default Allcats
