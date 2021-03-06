import { IMAGES } from "../constants/index";


const loadImages =  () => (
     { type: IMAGES.LOAD }
)

const setImages =  (images) => (
    { type: IMAGES.LOAD_SUCCESS, images }
)

const setError =  (error) => (
    { type: IMAGES.LOAD_FAIL, error }
)
const detailView = (index) => (
    { type: DETAIL_VIEW , index }
)


export {
    loadImages,
    setImages,
    setError,
    detailView
}

