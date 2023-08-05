const SearchBox = (props) =>{
    return (
        <div className="col col-sm-4">
            <input 
                type="text"
                placeholder="Search Movies...."
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)}
             />
        </div>
    )
}

export default SearchBox ; 