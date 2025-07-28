function RadioGroup({ name, onChange , selectedValue }) {
    return (
        <div>
            {[1,2,3,4,5].map((value, index) => (
                <div key={index} style={{ marginRight: "0rem", display:"inline" }}>
                    <label key={value} style={{ marginRight: "1rem"}} >
                        <input type="radio" name={name} value={value} checked={selectedValue === value} onChange={(e)=>onChange(e.target.value)} />
                        {value}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default RadioGroup