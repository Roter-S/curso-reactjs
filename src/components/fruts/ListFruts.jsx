import ItemFrut from "./ItemFrut"
const ListFruts = ({ fruts }) => {
    return (
        <ul>
            {fruts.map((frut, index) => (
                <ItemFrut key={index} frut={frut} index={index} />
            ))}
        </ul>
    )
}

export default ListFruts