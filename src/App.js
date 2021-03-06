import { useState } from "react";
import "./App.css";

const Prices = [
  {
    id: 1,
    name: 'Прием',
    price: 34
  },
  {
    id: 2,
    name: 'Прием повторный',
    price: 756
  },
  {
    id: 3,
    name: 'Консультация без осмотра животного',
    price: 4567
  },
  {
    id: 4,
    name: 'Вызов врача на дом',
    price: 567
  },
  {
    id: 5,
    name: 'Полная выписка из истории болезни',
    price: 123,
  },
  {
    id: 6,
    name: 'Консультация по медицинским документам',
    price: 456,
  },
  {
    id: 7,
    name: 'Консультация по медицинским документам',
    price: 67,
  },
  {
    id: 8,
    name: 'Прием',
    price: 1334,
  },
  {
    id: 9,
    name: 'Вызов врача на дом',
    price: 123,
  },
  {
    id: 10,
    name: 'Консультация без осмотра животного',
    price: 120,
  },
]

const PricesPerPage = 5;

const getPages = (listLength, perPage) => {
  let pages = []

  for (let i = 0; i < Math.ceil(listLength / perPage); i++) {
    pages.push(i + 1)
  }

  return pages
}

function App() {
  const [currentOffset, setOffset] = useState(1);

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const setPage = (page) => () => {
    setOffset(page)
  }

  const indexOfLastItem = currentOffset * PricesPerPage
  const indexOfFirstItem = indexOfLastItem - PricesPerPage;
  const pages = getPages(Prices.length, PricesPerPage)
  
  return (
    <div style={{ width: '60vw' }}>
      {Prices.slice(indexOfFirstItem, indexOfLastItem)
        .map(({ id, name, price }) => (
        <div key={id} style={styles}>
          <div>
            {name}
          </div>
          <div>
            {price}
          </div>
        </div>
      ))}
    <div style={{ display: 'flex', gap: '1rem' }}>
      {pages.map((page) => 
        <div key={page} onClick={setPage(page)}>{page}</div>
      )}
    </div>
    </div>
  );
}

export default App;
