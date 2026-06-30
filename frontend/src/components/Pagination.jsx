function Pagination({

  currentPage,

  totalPages,

  setCurrentPage

}) {

  if (totalPages <= 1) {

    return null;

  }

  function previousPage() {

    if (currentPage > 1) {

      setCurrentPage(currentPage - 1);

    }

  }

  function nextPage() {

    if (currentPage < totalPages) {

      setCurrentPage(currentPage + 1);

    }

  }

  function pageNumbers() {

    const pages = [];

    for (

      let i = 1;

      i <= totalPages;

      i++

    ) {

      pages.push(i);

    }

    return pages;

  }

  return (

    <div className="pagination">

      <button

        onClick={previousPage}

        disabled={currentPage === 1}

      >

        Previous

      </button>

      {

        pageNumbers().map((page) => (

          <button

            key={page}

            className={

              currentPage === page

                ? "active-page"

                : ""

            }

            onClick={() =>

              setCurrentPage(page)

            }

          >

            {page}

          </button>

        ))

      }

      <button

        onClick={nextPage}

        disabled={currentPage === totalPages}

      >

        Next

      </button>

    </div>

  );

}

export default Pagination;