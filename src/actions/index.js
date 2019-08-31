export const REQUEST_FURNITURES = 'REQUEST_FURNITURES';
export const RESPONSE_FURNITURES = 'RESPONSE_FURNITURES';

export const requestFurnitures = () => ({
  type: REQUEST_FURNITURES,
});

export const getFurnitures = res => ({
  type: RESPONSE_FURNITURES,
  furniture: res
});

export const filterByName = (name) => ({
  type: 'OTHERS',
  filterName: name
});

export const filterByStyles = (styles) => ({
  type: 'OTHERS',
  filterStyles: styles
});

export const filterByTimes = (times) => ({
  type: 'OTHERS',
  filterTimes: times
});

export function fetchFunitures() {
  return (dispatch) => {
    dispatch(requestFurnitures());
    return fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then((res) =>
        dispatch(getFurnitures(res))
      )
  }
}
