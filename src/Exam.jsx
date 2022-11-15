import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import QuestionPage from './components/QuestionPage';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const data = [
  'Rishi made me wet',
  "Misery and dragsama's intense buttsex turned me on",
  'Mimi seemed like a cute futa',
];

function Items({ currentItems }) {
  return (
    <React.Fragment>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <QuestionPage
              subjectName="Humanities"
              questionNum={item}
              options={data}
            />
          </div>
        ))}
    </React.Fragment>
  );
}

export default function Exam({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      <div className="row p-3">
        <Items currentItems={currentItems} />
        <div
          className="flex-wrap"
          style={{
            display: 'flex',
            justifyContent: 'center',
            scale: '79%',
          }}
        >
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            // pageRangeDisplayed={3}
            // marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}
