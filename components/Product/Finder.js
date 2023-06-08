export default function ProductFinder({ className = null }) {
	return (
		<div
			className={`bg-white flex justify-center items-center w-full ${className}`}
			style={{ minHeight: "500px" }}>
			Product Finder
		</div>
	);
}
