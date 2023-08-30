export default function ProductFinder({ className = null }) {
	return (
		<div className={`dark:bg-black dark:text-white ${className}`}>
			<div className="bg-white flex justify-center items-center w-full min-h-lg">
				Product Finder
			</div>
		</div>
	);
}
