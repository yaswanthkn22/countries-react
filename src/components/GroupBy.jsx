const GroupBy = ({onSelect})=>{
    return (
        <div className="region">
            <label htmlFor="region">Filter by region</label>
            <select name="region" id="region" placeholder="Select region" onChange={(e)=>{
                onSelect(e.target.value);
            }}>
                <option value="">All</option>
                <option value="asia">Asia</option>
                <option value="americas">America</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
                <option value="europe">Europe</option>
            </select>
        </div>
    );
};

export default GroupBy