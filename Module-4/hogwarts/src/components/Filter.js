import React from 'react';

const Filter = ({greasedOnly, handleCheck, sort, handleSelect}) => {
  return(
    <div>
      <div>
        <label>
          Greased Only?:
          <input
            name="greasedOnly"
            type="checkbox"
            checked={greasedOnly}
            onChange={handleCheck} />
        </label>
        </div>
        <div>
          <label>
            Sort By:
            <select value={sort} onChange={handleSelect}>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </label>
        </div>
    </div>
  )
}

export default Filter
