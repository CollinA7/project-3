import React, { useState } from 'react'
import ParkList from '../components/ParkList'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import Button from 'react-bootstrap/esm/Button'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import StateForm from '../components/StateForm';

const ParkData = () => {
    const states = [
        'AL',
        'AK',
        'AS',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'DC',
        'FM',
        'FL',
        'GA',
        'GU',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MH',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'MP',
        'OH',
        'OK',
        'PW',
        'PA',
        'PR',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VI',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
    ]

    const selectedState = states.map((state) => state)
    console.log(selectedState)

    const [search, setSearch] = useState('')

   const handleSearch = (data) => {
    console.log(data);
    setSearch(data)
   }

    return (
        <div className="container">
            <div>
                {/* TODO: add form data here */}

                <StateForm searchhandler={handleSearch}></StateForm>

                <ParkList searchTerm={search}></ParkList>
            </div>
        </div>
    )
}

export default ParkData
