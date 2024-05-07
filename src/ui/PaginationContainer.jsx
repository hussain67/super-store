import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
	// Pagination information
	const { meta } = useLoaderData();

	//Navigate
	const navigate = useNavigate();

	//Query path string and path
	const { pageCount, page } = meta.pagination;
	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});

	const { search, pathname } = useLocation();
	// console.log(search, pathname);
	//Function handle page change
	const handlePageChange = pageNumber => {
		const searchParams = new URLSearchParams(search);
		searchParams.set("page", pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
		console.log(searchParams.toString());
	};

	if (pageCount < 2) return null;
	return (
		<section className="mt-16 flex justify-end">
			{/* class join from daisy */}
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
				{pages.map(pageNumber => {
					return (
						<button
							key={pageNumber}
							onClick={() => handlePageChange(pageNumber)}
							className={`btn btn-xs sm:btn-md join-item ${pageNumber === page ? "bg-base-300 border-base-300" : ""}`}
						>
							{pageNumber}
						</button>
					);
				})}
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

export default PaginationContainer;
