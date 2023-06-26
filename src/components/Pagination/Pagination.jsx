
const Pagination = ({cardsPerPage, totalCards, onClick}) => {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);  
    }
    return (
           <ul>
           { pageNumbers.map(page=>(
            <li key={page} onClick={()=> onClick(page)}>{page}</li>
           ))}
           </ul>

    )
}

export default Pagination
