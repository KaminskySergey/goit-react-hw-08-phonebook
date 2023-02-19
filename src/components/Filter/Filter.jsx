

import { nanoid } from 'nanoid'
import Box from 'components/Box/Box'
import { FilterCont, FilterText, FilterInput } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'redux/Filter/filterSlice';
import { selectedFilter } from 'redux/Filter/filter.selectors';

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectedFilter)

    const filterId = nanoid()
    
    const handleFilter = (e) => {
        // console.log(e.target.value)
        dispatch(filterActions(e.target.value))
}
        return (
            <>
        <Box mb={24}>
        <FilterCont htmlFor={filterId}>
        <FilterText>Find coctacts by name</FilterText>
        <FilterInput type="text" name='filter' value={filter}  onChange={handleFilter}/>
        </FilterCont>
        </Box>
        </>
        )
    
}

