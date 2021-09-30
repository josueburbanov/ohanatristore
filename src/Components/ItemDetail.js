
const ItemDetail = (props) => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="flex">
                <img src={props.itemFetched.pictureUrl} className="px-10 my-20"></img>
            </div>
            <div className="flex flex-col justify-center divide-y divide-yellow-500 px-36">
                <div className="h-36">
                    <div className="text-2xl font-bold">{props.itemFetched.title}</div>
                    <div>${props.itemFetched.price}</div>
                    <div>Stock ({props.itemFetched.stock})</div>
                </div>
                <div>{props.itemFetched.description}</div>
            </div>
        </div>
    )
}
export default ItemDetail;