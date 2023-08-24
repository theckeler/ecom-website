import Image from "next/image";

export default function LoremIpsum({ blocks }) {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				Nulla laoreet eget libero id tristique
			</h2>

			<div className="relative min-h-xl mb-6">
				<Image
					src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/intro.jpg"
					fill
					className="object-cover"
					alt=""
				/>
			</div>

			<p className="mb-2">
				Lorem ipsum dolor sit amet,{" "}
				<a href="#top" className="underline">
					consectetur adipiscing elit. Proin et neque
				</a>{" "}
				sit amet ipsum facilisis malesuada suscipit sit amet odio. Mauris
				faucibus sem odio, sollicitudin varius odio posuere vitae. Mauris
				convallis vulputate dolor, at ultrices sapien. Suspendisse at eros
				augue. Sed in tellus libero. Etiam a mi rhoncus, molestie ante et,
				elementum diam. In et tellus magna. Nulla mollis erat in lectus
				pharetra, nec ornare urna sodales. Cras tristique mi malesuada neque
				aliquam, vel placerat odio iaculis. Nulla pellentesque turpis elit, nec
				ullamcorper nisi scelerisque eget. Fusce sit amet sem ac enim hendrerit
				tempor.{" "}
				<a href="#top" className="underline">
					Sed blandit tempor metus
				</a>
				, et ultricies tortor accumsan in. Nam nec iaculis lectus. Phasellus
				aliquet commodo sagittis.
			</p>
			<p className="mb-2">
				Nulla laoreet eget libero id tristique. Donec suscipit dapibus tellus,
				sit amet blandit tortor porttitor in. Suspendisse dolor neque, iaculis
				vel mi quis, ultrices bibendum enim. Curabitur sed pellentesque justo.
				Maecenas mattis mollis leo. Quisque vehicula mauris in condimentum
				iaculis. Ut a sapien quis dolor ultrices accumsan. Quisque accumsan
				mollis turpis vitae efficitur. Sed nisi ex, mattis quis dui at,
				condimentum aliquet tellus.
			</p>
			<p className="mb-2">
				Suspendisse ut ullamcorper dui. Aliquam erat volutpat. Nunc fringilla
				lorem vel ipsum tempus,{" "}
				<a href="#top" className="underline">
					rhoncus fringilla leo lobortis
				</a>
				. Donec scelerisque leo vel sem feugiat porttitor. Maecenas eleifend
				enim ut placerat iaculis. Proin a arcu tristique, mollis tortor quis,
				lacinia lorem. Sed accumsan quis quam non sollicitudin. Donec
				sollicitudin egestas semper. Nam ultricies pulvinar consequat.
			</p>
			<h2 className="text-2xl font-bold my-4">
				Nulla laoreet eget libero id tristique
			</h2>
			<p className="mb-2">
				<span className="block relative h-60 w-full sm:w-60 sm:float-right mb-4 sm:ml-2 sm:mb-2">
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/dw832aa68d/images/product-line-browse/Main-Carousel/31AH8E4V710_3X34MAX_ENV-1015x630.jpg?sw=1116"
						fill
						className="object-cover"
						alt=""
					/>
				</span>
				Aenean justo nibh, molestie sed velit vitae, fermentum auctor tortor.
				Fusce vitae ipsum sed augue fermentum scelerisque quis sit amet ipsum.
				In imperdiet ipsum ac diam interdum, ut luctus felis vulputate. Quisque
				non sagittis augue, et vehicula mauris. Aliquam tempus sem orci, ac
				sagittis nunc bibendum id. Curabitur tempus odio et urna porttitor, sit
				amet eleifend augue ultricies. Praesent eu porta sapien. Sed bibendum
				elementum enim sit amet aliquam. Suspendisse luctus velit felis, nec
				tincidunt justo varius ut. Morbi pretium quis tortor eget sollicitudin.
				Nulla quis volutpat leo. Mauris vitae vulputate dui.
			</p>

			<p className="mb-2">
				Curabitur varius nibh arcu, nec tincidunt odio dignissim eget. Proin eu
				purus placerat urna tempor rhoncus. Nulla facilisi. Vestibulum volutpat
				est at lectus accumsan egestas. Quisque eu turpis at lectus congue
				consequat id eget lorem. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Integer rutrum ipsum ac neque molestie imperdiet.
				Sed imperdiet tempus lectus, non venenatis tellus luctus eget. Maecenas
				laoreet dolor nec diam sollicitudin, ac efficitur diam fermentum. Nullam
				faucibus vel metus a bibendum. Vivamus in sapien pulvinar, sagittis
				ligula eu, consequat nibh. Quisque ullamcorper id felis eget semper.
				Cras vehicula velit urna, vel interdum libero dignissim vulputate. Morbi
				pretium at augue non malesuada. Vivamus euismod, sem lacinia luctus
				posuere, nisl risus commodo mi, non pulvinar turpis velit quis dui.
			</p>
			<p className="mb-2">
				Etiam ullamcorper massa in metus consectetur luctus sit amet ut neque.
				Donec eu lectus vitae est sodales lacinia sed et ligula. Aenean eu
				dapibus magna. Quisque cursus nulla in quam vehicula, nec lacinia augue
				dictum. In at urna quis velit hendrerit aliquet. Aenean libero erat,
				porttitor vitae quam a, commodo mattis enim. Suspendisse tincidunt
				porttitor nulla, vel dignissim ipsum ornare in. Integer pulvinar mauris
				quam, ac mattis erat fringilla feugiat. Fusce finibus viverra felis.
				Duis vel neque eu leo lobortis laoreet eu et augue. Fusce suscipit nulla
				sapien, non consectetur orci consectetur et. Mauris aliquet odio vel
				turpis scelerisque, sed convallis arcu mollis. Nunc quis quam non ligula
				tempor tempor. Quisque tincidunt lectus blandit feugiat rutrum. Etiam ac
				quam eget tortor rutrum consectetur.
			</p>
		</div>
	);
}
