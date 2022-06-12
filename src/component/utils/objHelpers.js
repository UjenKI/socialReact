export const sortIdObjKey = (items, itemId, objPropKey, newObjProps) => {
    console.log(items, itemId, objPropKey, newObjProps)
    return items.map((item) => {
        if(item[objPropKey] === itemId){
            return {
                ...item,
                ...newObjProps
            }
        }
        return item
    })
}