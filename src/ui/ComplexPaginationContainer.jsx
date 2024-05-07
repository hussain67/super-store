import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function ComplexPaginationContainer() {
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;
	//Navigate
	const navigate = useNavigate();

	const { search, pathname } = useLocation();

	//Function handle page change
	const handlePageChange = pageNumber => {
		const searchParams = new URLSearchParams(search);
		searchParams.set("page", pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
		console.log(searchParams.toString());
	};
	const addPageButton = ({ pageNumber, activeClass }) => {
		return (
			<button
				key={pageNumber}
				onClick={() => handlePageChange(pageNumber)}
				className={`btn btn-xs sm:btn-md join-item ${pageNumber === activeClass ? "bg-base-300 border-base-300" : ""}`}
			>
				{pageNumber}
			</button>
		);
	};
	const renderPageButtons = () => {
		const pageButtons = [];
		//First button
		pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

		// dots
		if (page > 2) {
			pageButtons.push(
				<button
					className="join-item btn btn-xs sm:btn-md"
					key="dots-1"
				>
					...
				</button>
			);
		}

		// active/current page
		if (page !== 1 && page !== pageCount) {
			pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
		}
		// dots
		if (page < pageCount - 1) {
			pageButtons.push(
				<button
					className="join-item btn btn-xs sm:btn-md"
					key="dots-2"
				>
					...
				</button>
			);
		}

		//Last button
		if (pageCount > 1) {
			pageButtons.push(addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }));
		}
		return pageButtons;
	};
	// if (pageCount < 2) return null;
	return (
		<section className="mt-16 flex justify-end">
			<div className="join">
				<button
					className="btn btn-xs sm:btn-md"
					onClick={() => {
						let prevPage = page - 1;
						if (prevPage < 1) {
							prevPage = pageCount;
						}
						handlePageChange(prevPage);
					}}
				>
					Prev
				</button>
				{renderPageButtons()}
				<button
					className="btn btn-xs sm:btn-md"
					onClick={() => {
						let nextPage = page + 1;
						if (nextPage > pageCount) {
							nextPage = 1;
						}
						handlePageChange(nextPage);
					}}
				>
					Next
				</button>
			</div>
		</section>
	);
}

export default ComplexPaginationContainer;
