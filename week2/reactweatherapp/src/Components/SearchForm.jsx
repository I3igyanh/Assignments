import { Button } from '@chakra-ui/react';
import './Searchform.css';

const SearchForm = ({ city, setCity, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter city name' />
                <Button size={{ base: 'md', md: 'xl' }} colorPalette='blue' bg={{base: 'blue.500', _hover: 'blue.600'}} className='weather-button' type='submit'>
                    get weather
                </Button>
            </form>
        </div>
    )
}

export default SearchForm